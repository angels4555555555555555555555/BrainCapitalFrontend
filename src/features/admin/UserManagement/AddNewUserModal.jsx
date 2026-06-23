"use client";

import React from "react";
import { Modal, Button, TextInput, PasswordInput, NumberInput, Select, Checkbox } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import { useQueryClient } from "@tanstack/react-query";
import COUNTRIES from "./CountryList";
import LoadingBackdrop from "@/features/common/LoadingBackdrop";
import { useAddNewUser } from "@/hooks/admin/userManagement";

const fieldClassNames = {
  label: "text-[var(--navy)] font-semibold mb-1.5",
  input: "h-[46px] border border-[var(--line)] rounded-[8px] focus:border-[var(--gold)]",
};

const emptyValues = {
  firstName: "",
  lastName: "",
  dob: null,
  gender: "",
  country: "",
  email: "",
  password: "",
  selectedProducts: [],
  festgeld: { bank: "", betrag: "", zinsen: "", laufzeit: "" },
  tagesgeld: { bank: "", betrag: "", zinsen: "", garantierteZinslaufzeit: "" },
  openAI: {
    anzahl: "",
    gekaufterWert: "",
    aktuellerWert: "",
    investition: "",
    aktuellerGewinn: "",
    depotWert: "",
  },
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
  if (!/^\S+@\S+\.\S+$/.test(values.email)) errors.email = "Ungültige E-Mail-Adresse";
  if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*\d)[A-Za-z\d!@#$%^&*]{8,}$/.test(values.password)) {
    errors.password = "Mindestens 8 Zeichen, ein Großbuchstabe, eine Zahl und ein Sonderzeichen (!@#$%^&*)";
  }
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
    requireText("festgeld", "bank", "Bank");
    requireText("festgeld", "laufzeit", "Laufzeit");
    requireNumber("festgeld", "betrag", "Betrag");
    requireNumber("festgeld", "zinsen", "Zinsen");
  }
  if (values.selectedProducts.includes("tagesgeld")) {
    requireText("tagesgeld", "bank", "Bank");
    requireText("tagesgeld", "garantierteZinslaufzeit", "Garantierte Zinslaufzeit");
    requireNumber("tagesgeld", "betrag", "Betrag");
    requireNumber("tagesgeld", "zinsen", "Zinsen");
  }
  if (values.selectedProducts.includes("openAI")) {
    requireNumber("openAI", "anzahl", "Anzahl");
    requireNumber("openAI", "gekaufterWert", "Gekaufter Wert");
    requireNumber("openAI", "aktuellerWert", "Aktueller Wert");
    requireNumber("openAI", "investition", "Investition");
    requireNumber("openAI", "aktuellerGewinn", "Aktueller Gewinn", true);
    requireNumber("openAI", "depotWert", "Depotwert");
  }
  return errors;
};

const SectionTitle = ({ children }) => (
  <div className="col-span-2 mt-4">
    <h3 className="text-[16px] font-semibold text-[var(--navy)] border-b border-[var(--line)] pb-2">
      {children}
    </h3>
  </div>
);

const AddNewUserModal = ({ opened, onClose }) => {
  const queryClient = useQueryClient();
  const form = useForm({
    initialValues: emptyValues,
    validate: validateForm,
  });

  const { mutate, isPending } = useAddNewUser(() => {
    queryClient.invalidateQueries({ queryKey: ["usersList"] });
    form.reset();
    onClose();
  });

  const handleSubmit = ({ selectedProducts, ...values }) => {
    const payload = {
      firstName: values.firstName,
      lastName: values.lastName,
      dob: new Date(values.dob).toISOString(),
      gender: values.gender,
      country: values.country,
      email: values.email,
      password: values.password,
      products: selectedProducts,
    };
    selectedProducts.forEach((product) => { payload[product] = values[product]; });
    mutate(payload);
  };

  return (
    <>
      {isPending && <LoadingBackdrop />}
      <Modal opened={opened} onClose={onClose} title="Neuen Benutzer hinzufügen" radius={12} size="xl" centered>
        <form onSubmit={form.onSubmit(handleSubmit)} className="p-4 gap-4 grid md:grid-cols-2">
          <SectionTitle>Persönliche Informationen</SectionTitle>
          <TextInput label="Vorname" withAsterisk classNames={fieldClassNames} {...form.getInputProps("firstName")} />
          <TextInput label="Nachname" withAsterisk classNames={fieldClassNames} {...form.getInputProps("lastName")} />
          <DateInput label="Geburtsdatum" withAsterisk valueFormat="DD.MM.YYYY" maxDate={new Date()} classNames={fieldClassNames} {...form.getInputProps("dob")} />
          <Select label="Geschlecht" withAsterisk data={["Männlich", "Weiblich", "Divers"]} classNames={fieldClassNames} {...form.getInputProps("gender")} />
          <Select label="Land" withAsterisk data={COUNTRIES} searchable nothingFoundMessage="Keine Ergebnisse" classNames={fieldClassNames} {...form.getInputProps("country")} />
          <div />
          <TextInput label="E-Mail" withAsterisk classNames={fieldClassNames} {...form.getInputProps("email")} />
          <PasswordInput label="Passwort" withAsterisk classNames={fieldClassNames} {...form.getInputProps("password")} />

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
          <TextInput label="Bank" withAsterisk classNames={fieldClassNames} {...form.getInputProps("festgeld.bank")} />
          <TextInput label="Laufzeit" withAsterisk placeholder="z. B. 12 Monate" classNames={fieldClassNames} {...form.getInputProps("festgeld.laufzeit")} />
          <NumberInput label="Betrag in EUR" withAsterisk hideControls min={0} decimalScale={2} classNames={fieldClassNames} {...form.getInputProps("festgeld.betrag")} />
          <NumberInput label="Zinsen in %" withAsterisk hideControls min={0} decimalScale={2} classNames={fieldClassNames} {...form.getInputProps("festgeld.zinsen")} />
          </>}

          {form.values.selectedProducts.includes("tagesgeld") && <>
          <SectionTitle>Tagesgeld-Details</SectionTitle>
          <TextInput label="Bank" withAsterisk classNames={fieldClassNames} {...form.getInputProps("tagesgeld.bank")} />
          <TextInput label="Garantierte Zinslaufzeit" withAsterisk placeholder="z. B. 6 Monate" classNames={fieldClassNames} {...form.getInputProps("tagesgeld.garantierteZinslaufzeit")} />
          <NumberInput label="Betrag in EUR" withAsterisk hideControls min={0} decimalScale={2} classNames={fieldClassNames} {...form.getInputProps("tagesgeld.betrag")} />
          <NumberInput label="Zinsen in %" withAsterisk hideControls min={0} decimalScale={2} classNames={fieldClassNames} {...form.getInputProps("tagesgeld.zinsen")} />
          </>}

          {form.values.selectedProducts.includes("openAI") && <>
          <SectionTitle>OpenAI-Details</SectionTitle>
          <NumberInput label="Anzahl" withAsterisk hideControls min={0} classNames={fieldClassNames} {...form.getInputProps("openAI.anzahl")} />
          <NumberInput label="Gekaufter Wert in EUR" withAsterisk hideControls min={0} decimalScale={2} classNames={fieldClassNames} {...form.getInputProps("openAI.gekaufterWert")} />
          <NumberInput label="Aktueller Wert in EUR" withAsterisk hideControls min={0} decimalScale={2} classNames={fieldClassNames} {...form.getInputProps("openAI.aktuellerWert")} />
          <NumberInput label="Investition in EUR" withAsterisk hideControls min={0} decimalScale={2} classNames={fieldClassNames} {...form.getInputProps("openAI.investition")} />
          <NumberInput label="Aktueller Gewinn in EUR" withAsterisk hideControls decimalScale={2} classNames={fieldClassNames} {...form.getInputProps("openAI.aktuellerGewinn")} />
          <NumberInput label="Depotwert in EUR" withAsterisk hideControls min={0} decimalScale={2} classNames={fieldClassNames} {...form.getInputProps("openAI.depotWert")} />
          </>}

          <Button unstyled type="submit" className="button button--primary">Speichern</Button>
          <Button unstyled type="button" className="button button--secondary" onClick={onClose}>Abbrechen</Button>
        </form>
      </Modal>
    </>
  );
};

export default AddNewUserModal;
