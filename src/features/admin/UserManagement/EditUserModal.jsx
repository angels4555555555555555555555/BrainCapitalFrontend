"use client";

import React, { useEffect } from "react";
import { Modal, Button, TextInput, NumberInput, Select, Checkbox } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import LoadingBackdrop from "@/features/common/LoadingBackdrop";
import { useGetUser, useUpdateUser } from "@/hooks/admin/userManagement";
import COUNTRIES from "./CountryList";

const fieldClassNames = {
  label: "text-[var(--navy)] font-semibold mb-1.5",
  input: "h-[46px] border border-[var(--line)] rounded-[8px] focus:border-[var(--gold)]",
};

const emptyProducts = {
  festgeld: { bank: "", betrag: "", zinsen: "", laufzeit: "" },
  tagesgeld: { bank: "", betrag: "", zinsen: "", garantierteZinslaufzeit: "" },
  openAI: { anzahl: "", gekaufterWert: "", aktuellerWert: "", investition: "", aktuellerGewinn: "", depotWert: "" },
};

const isEmpty = (value) => value === "" || value === null || value === undefined;

const validateForm = (values) => {
  const errors = {};
  if (!values.firstName.trim()) errors.firstName = "Vorname ist erforderlich";
  if (!values.lastName.trim()) errors.lastName = "Nachname ist erforderlich";
  if (!values.dob) errors.dob = "Geburtsdatum ist erforderlich";
  else if (new Date(values.dob) > new Date()) errors.dob = "Das Datum darf nicht in der Zukunft liegen";
  if (!values.gender) errors.gender = "Geschlecht auswählen";
  if (!values.country) errors.country = "Land auswählen";
  if (!values.selectedProducts.length) errors.selectedProducts = "Mindestens ein Produkt auswählen";

  const requireText = (product, field, label) => {
    if (!String(values[product][field] ?? "").trim()) errors[`${product}.${field}`] = `${label} ist erforderlich`;
  };
  const requireNumber = (product, field, label, allowNegative = false) => {
    const value = values[product][field];
    if (isEmpty(value) || !Number.isFinite(Number(value)) || (!allowNegative && Number(value) < 0)) {
      errors[`${product}.${field}`] = `${label} ist erforderlich`;
    }
  };
  if (values.selectedProducts.includes("festgeld")) {
    requireText("festgeld", "bank", "Bank"); requireText("festgeld", "laufzeit", "Laufzeit");
    requireNumber("festgeld", "betrag", "Betrag"); requireNumber("festgeld", "zinsen", "Zinsen");
  }
  if (values.selectedProducts.includes("tagesgeld")) {
    requireText("tagesgeld", "bank", "Bank"); requireText("tagesgeld", "garantierteZinslaufzeit", "Garantierte Zinslaufzeit");
    requireNumber("tagesgeld", "betrag", "Betrag"); requireNumber("tagesgeld", "zinsen", "Zinsen");
  }
  if (values.selectedProducts.includes("openAI")) {
    requireNumber("openAI", "anzahl", "Anzahl"); requireNumber("openAI", "gekaufterWert", "Gekaufter Wert");
    requireNumber("openAI", "aktuellerWert", "Aktueller Wert"); requireNumber("openAI", "investition", "Investition");
    requireNumber("openAI", "aktuellerGewinn", "Aktueller Gewinn", true); requireNumber("openAI", "depotWert", "Depotwert");
  }
  return errors;
};

const valueOrEmpty = (value) => value ?? "";

const SectionTitle = ({ children }) => (
  <div className="col-span-2 mt-4">
    <h3 className="text-[16px] font-semibold text-[var(--navy)] border-b border-[var(--line)] pb-2">{children}</h3>
  </div>
);

const Unit = ({ children }) => (
  <span className="text-sm font-semibold text-[var(--muted)]">{children}</span>
);

const EditUserModal = ({ opened, onClose, currentUser: id }) => {
  const queryClient = useQueryClient();
  const { data, isPending } = useGetUser(id);
  const form = useForm({
    initialValues: {
      firstName: "", lastName: "", dob: null, gender: "", country: "", email: "", selectedProducts: [],
      festgeld: { bank: "", betrag: "", zinsen: "", laufzeit: "" },
      tagesgeld: { bank: "", betrag: "", zinsen: "", garantierteZinslaufzeit: "" },
      openAI: { anzahl: "", gekaufterWert: "", aktuellerWert: "", investition: "", aktuellerGewinn: "", depotWert: "" },
    },
    validate: validateForm,
  });

  const { mutate: updateUser, isPending: isUpdating } = useUpdateUser(() => {
    queryClient.invalidateQueries({ queryKey: ["usersList"] });
    queryClient.invalidateQueries({ queryKey: ["user", id] });
    onClose();
  });

  useEffect(() => {
    const user = data?.user;
    if (!user) return;
    const inferredProducts = [
      user.festgeld?.bank && "festgeld",
      user.tagesgeld?.bank && "tagesgeld",
      Object.values(user.openAI || {}).some((value) => value !== 0 && value !== "" && value != null) && "openAI",
    ].filter(Boolean);
    form.setValues({
      firstName: user.firstName,
      lastName: user.lastName,
      dob: user.dob ? new Date(user.dob) : null,
      gender: user.gender,
      country: user.country,
      email: user.email,
      selectedProducts: user.products?.length ? user.products : inferredProducts,
      festgeld: {
        bank: valueOrEmpty(user.festgeld?.bank), betrag: valueOrEmpty(user.festgeld?.betrag),
        zinsen: valueOrEmpty(user.festgeld?.zinsen), laufzeit: valueOrEmpty(user.festgeld?.laufzeit),
      },
      tagesgeld: {
        bank: valueOrEmpty(user.tagesgeld?.bank), betrag: valueOrEmpty(user.tagesgeld?.betrag),
        zinsen: valueOrEmpty(user.tagesgeld?.zinsen), garantierteZinslaufzeit: valueOrEmpty(user.tagesgeld?.garantierteZinslaufzeit),
      },
      openAI: {
        anzahl: valueOrEmpty(user.openAI?.anzahl), gekaufterWert: valueOrEmpty(user.openAI?.gekaufterWert),
        aktuellerWert: valueOrEmpty(user.openAI?.aktuellerWert), investition: valueOrEmpty(user.openAI?.investition),
        aktuellerGewinn: valueOrEmpty(user.openAI?.aktuellerGewinn), depotWert: valueOrEmpty(user.openAI?.depotWert),
      },
    });
  }, [data]);

  const handleSubmit = ({ email, selectedProducts, ...values }) => updateUser({
    userId: id,
    firstName: values.firstName,
    lastName: values.lastName,
    dob: new Date(values.dob).toISOString(),
    gender: values.gender,
    country: values.country,
    products: selectedProducts,
    festgeld: selectedProducts.includes("festgeld") ? values.festgeld : emptyProducts.festgeld,
    tagesgeld: selectedProducts.includes("tagesgeld") ? values.tagesgeld : emptyProducts.tagesgeld,
    openAI: selectedProducts.includes("openAI") ? values.openAI : emptyProducts.openAI,
  });

  const handleValidationErrors = (errors) => {
    const fieldCount = Object.keys(errors).length;
    toast.error("Benutzer konnte nicht aktualisiert werden", {
      description: fieldCount === 1
        ? "Bitte füllen Sie das markierte Pflichtfeld aus."
        : `Bitte füllen Sie alle markierten Pflichtfelder aus (${fieldCount}).`,
    });
  };

  return (
    <>
      {(isPending || isUpdating) && <LoadingBackdrop />}
      <Modal opened={opened} onClose={onClose} title="Benutzer bearbeiten" radius={12} size="xl" centered>
        <form onSubmit={form.onSubmit(handleSubmit, handleValidationErrors)} className="p-4 gap-4 grid md:grid-cols-2">
          <SectionTitle>Persönliche Informationen</SectionTitle>
          <TextInput label="Vorname" withAsterisk classNames={fieldClassNames} {...form.getInputProps("firstName")} />
          <TextInput label="Nachname" withAsterisk classNames={fieldClassNames} {...form.getInputProps("lastName")} />
          <DateInput label="Geburtsdatum" withAsterisk valueFormat="DD.MM.YYYY" maxDate={new Date()} classNames={fieldClassNames} {...form.getInputProps("dob")} />
          <Select label="Geschlecht" withAsterisk data={["Männlich", "Weiblich", "Divers"]} classNames={fieldClassNames} {...form.getInputProps("gender")} />
          <Select label="Land" withAsterisk data={COUNTRIES} searchable classNames={fieldClassNames} {...form.getInputProps("country")} />
          <TextInput label="E-Mail (nicht änderbar)" disabled classNames={fieldClassNames} {...form.getInputProps("email")} />

          <SectionTitle>Produkte auswählen</SectionTitle>
          <Checkbox.Group className="col-span-2" {...form.getInputProps("selectedProducts")}>
            <div className="grid sm:grid-cols-3 gap-3">
              {[["festgeld", "Festgeld"], ["tagesgeld", "Tagesgeld"], ["openAI", "OpenAI"]].map(([value, label]) => (
                <label key={value} className={`flex items-center gap-3 rounded-[8px] border p-4 cursor-pointer transition-colors ${form.values.selectedProducts.includes(value) ? "border-[var(--gold)] bg-[var(--surface-blue)]" : "border-[var(--line)] bg-white"}`}>
                  <Checkbox value={value} />
                  <span className="font-semibold text-[var(--navy)]">{label}</span>
                </label>
              ))}
            </div>
          </Checkbox.Group>
          {form.errors.selectedProducts && <p className="col-span-2 text-sm text-red-600">{form.errors.selectedProducts}</p>}

          {form.values.selectedProducts.includes("festgeld") && <>
          <SectionTitle>Festgeld-Details</SectionTitle>
          <TextInput label="Bank" withAsterisk placeholder="Bank eingeben" classNames={fieldClassNames} {...form.getInputProps("festgeld.bank")} />
          <NumberInput label="Betrag" withAsterisk placeholder="0,00" hideControls min={0} decimalScale={2} decimalSeparator="," thousandSeparator="." rightSection={<Unit>€</Unit>} rightSectionPointerEvents="none" classNames={fieldClassNames} {...form.getInputProps("festgeld.betrag")} />
          <NumberInput label="Zinsen" withAsterisk placeholder="0,00" hideControls min={0} decimalScale={2} decimalSeparator="," rightSection={<Unit>%</Unit>} rightSectionPointerEvents="none" classNames={fieldClassNames} {...form.getInputProps("festgeld.zinsen")} />
          <TextInput label="Laufzeit in Monate" withAsterisk placeholder="z. B. 36 Monate" classNames={fieldClassNames} {...form.getInputProps("festgeld.laufzeit")} />
          </>}

          {form.values.selectedProducts.includes("tagesgeld") && <>
          <SectionTitle>Tagesgeld-Details</SectionTitle>
          <TextInput label="Bank" withAsterisk placeholder="Bank eingeben" classNames={fieldClassNames} {...form.getInputProps("tagesgeld.bank")} />
          <NumberInput label="Betrag" withAsterisk placeholder="0,00" hideControls min={0} decimalScale={2} decimalSeparator="," thousandSeparator="." rightSection={<Unit>€</Unit>} rightSectionPointerEvents="none" classNames={fieldClassNames} {...form.getInputProps("tagesgeld.betrag")} />
          <NumberInput label="Zinsen" withAsterisk placeholder="0,00" hideControls min={0} decimalScale={2} decimalSeparator="," rightSection={<Unit>%</Unit>} rightSectionPointerEvents="none" classNames={fieldClassNames} {...form.getInputProps("tagesgeld.zinsen")} />
          <TextInput label="Garantierte Zinslaufzeit" withAsterisk placeholder="z. B. 36 Monate 4%" classNames={fieldClassNames} {...form.getInputProps("tagesgeld.garantierteZinslaufzeit")} />
          </>}

          {form.values.selectedProducts.includes("openAI") && <>
          <SectionTitle>OpenAI-Details</SectionTitle>
          <NumberInput label="ANZAHL" withAsterisk placeholder="Anzahl der Anteile" hideControls min={0} allowDecimal={false} classNames={fieldClassNames} {...form.getInputProps("openAI.anzahl")} />
          <NumberInput label="Gekaufter Wert" withAsterisk placeholder="0,00" hideControls min={0} decimalScale={2} decimalSeparator="," thousandSeparator="." rightSection={<Unit>€</Unit>} rightSectionPointerEvents="none" classNames={fieldClassNames} {...form.getInputProps("openAI.gekaufterWert")} />
          <NumberInput label="Aktueller Wert" withAsterisk placeholder="0,00" hideControls min={0} decimalScale={2} decimalSeparator="," thousandSeparator="." rightSection={<Unit>€</Unit>} rightSectionPointerEvents="none" classNames={fieldClassNames} {...form.getInputProps("openAI.aktuellerWert")} />
          <NumberInput label="Investition" withAsterisk placeholder="0,00" hideControls min={0} decimalScale={2} decimalSeparator="," thousandSeparator="." rightSection={<Unit>€</Unit>} rightSectionPointerEvents="none" classNames={fieldClassNames} {...form.getInputProps("openAI.investition")} />
          <NumberInput label="Aktueller Gewinn" withAsterisk placeholder="0,00" hideControls decimalScale={2} decimalSeparator="," thousandSeparator="." rightSection={<Unit>€</Unit>} rightSectionPointerEvents="none" classNames={fieldClassNames} {...form.getInputProps("openAI.aktuellerGewinn")} />
          <NumberInput label="Depot Wert" withAsterisk placeholder="0,00" hideControls min={0} decimalScale={2} decimalSeparator="," thousandSeparator="." rightSection={<Unit>€</Unit>} rightSectionPointerEvents="none" classNames={fieldClassNames} {...form.getInputProps("openAI.depotWert")} />
          </>}

          <Button unstyled type="submit" className="button button--primary">Änderungen speichern</Button>
          <Button unstyled type="button" className="button button--secondary" onClick={onClose}>Abbrechen</Button>
        </form>
      </Modal>
    </>
  );
};

export default EditUserModal;
