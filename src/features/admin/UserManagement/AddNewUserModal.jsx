"use client";

import React from "react";
import {
  Modal,
  Button,
  TextInput,
  PasswordInput,
  NumberInput,
  Select,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import COUNTRIES from "./CountryList";
import { useQueryClient } from "@tanstack/react-query";
import LoadingBackdrop from "@/features/common/LoadingBackdrop";
import { useAddNewUser } from "@/hooks/admin/userManagement";

const AddNewUserModal = ({ opened, onClose }) => {
  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      dob: null,
      gender: "",
      country: "",
      shares: "",
      klarnaPurchasePrice: "",
      klarnaPrice: "",
      email: "",
      password: "",
      bank: "",
      laufzeit: "",
      betrag: "",
      zinsatz: "",
    },
    validate: {
      firstName: (v) => (v.trim().length ? null : "Vorname ist erforderlich"),
      lastName: (v) => (v.trim().length ? null : "Nachname ist erforderlich"),
      dob: (v) => {
        if (!v) return "Geburtsdatum ist erforderlich";
        const today = new Date();
        if (v > today) return "Geburtsdatum darf nicht in der Zukunft liegen";
        return null;
      },
      gender: (v) => (v ? null : "Geschlecht auswählen"),
      country: (v) => (v ? null : "Land auswählen"),
      shares: (v) => {
        if (v === "" || v === null)
          return "Geben Sie eine gültige, nicht-negative Zahl ein";
        const n = Number(v);
        if (!Number.isFinite(n) || n < 0)
          return "Geben Sie eine gültige, nicht-negative Zahl ein";
        return null;
      },
      klarnaPurchasePrice: (v) => {
        if (v === "" || v === null) return "Kaufpreis ist erforderlich";
        const n = Number(v);
        if (!Number.isFinite(n) || n < 0)
          return "Geben Sie einen gültigen Kaufpreis ein";
        return null;
      },
      klarnaPrice: (v) => {
        if (v === "" || v === null) return "SpaceX-Preis ist erforderlich";
        const n = Number(v);
        if (!Number.isFinite(n) || n < 0)
          return "Geben Sie einen gültigen SpaceX-Preis ein";
        return null;
      },
      email: (v) =>
        /^\S+@\S+\.\S+$/.test(v) ? null : "Ungültige E-Mail-Adresse",
      password: (v) =>
        v.length >= 8 ? null : "Passwort muss mindestens 8 Zeichen lang sein",
      bank: (v) => (v.trim().length ? null : "Bank ist erforderlich"),
      laufzeit: (v) => (v.trim().length ? null : "Laufzeit ist erforderlich"),
      betrag: (v) => (v.trim().length ? null : "Betrag ist erforderlich"),
      zinsatz: (v) => (v.trim().length ? null : "Zinsatz ist erforderlich"),
    },
  });

  const queryClient = useQueryClient();

  const { mutate, isPending } = useAddNewUser(() => {
    onClose();
    form.reset();
    queryClient.invalidateQueries(["usersList"]);
  });

  const handleSubmit = React.useCallback((values) => {
    requestAnimationFrame(() => {
      mutate(values);
    });
  }, [mutate]);

  const handleClose = React.useCallback(() => {
    onClose();
  }, [onClose]);

  return (
    <>
      {isPending && <LoadingBackdrop />}
      <Modal
        opened={opened}
        onClose={handleClose}
        title="Neuen Benutzer hinzufügen"
        centered
      >
        <form
          onSubmit={form.onSubmit(handleSubmit)}
          className="p-4 gap-4 grid md:grid-cols-2"
        >
          <TextInput
            label="Vorname"
            placeholder="Vorname eingeben"
            withAsterisk
            {...form.getInputProps("firstName")}
          />
          <TextInput
            label="Nachname"
            placeholder="Nachname eingeben"
            withAsterisk
            {...form.getInputProps("lastName")}
          />
          <DateInput
            label="Geburtsdatum"
            placeholder="MM-TT-JJJJ"
            withAsterisk
            valueFormat="MM-DD-YYYY"
            maxDate={new Date()}
            {...form.getInputProps("dob")}
          />
          <Select
            label="Geschlecht"
            placeholder="Geschlecht auswählen"
            withAsterisk
            data={["Männlich", "Weiblich", "Divers"]}
            searchable
            nothingFoundMessage="Keine Optionen gefunden"
            {...form.getInputProps("gender")}
          />
          <Select
            label="Land"
            placeholder="Land auswählen"
            withAsterisk
            data={COUNTRIES}
            searchable
            nothingFoundMessage="Keine Ergebnisse"
            {...form.getInputProps("country")}
          />
          <NumberInput
            label="SpaceX-Aktien"
            placeholder="Anzahl der Aktien eingeben"
            hideControls
            min={0}
            {...form.getInputProps("shares")}
          />
          <NumberInput
            label="Kaufpreis SpaceX"
            placeholder="Kaufpreis eingeben"
            hideControls
            min={0}
            {...form.getInputProps("klarnaPurchasePrice")}
          />
          <NumberInput
            label="SpaceX-Preis"
            placeholder="SpaceX-Preis eingeben"
            hideControls
            min={0}
            {...form.getInputProps("klarnaPrice")}
          />
          <TextInput
            label="E-Mail"
            placeholder="Benutzer-E-Mail eingeben"
            withAsterisk
            {...form.getInputProps("email")}
          />
          <PasswordInput
            label="Passwort"
            placeholder="Neues Passwort erstellen"
            withAsterisk
            {...form.getInputProps("password")}
          />

          {/* Tagesgeld Section */}
          <div className="col-span-2 mt-4 mb-2">
            <h3 className="text-[16px] font-semibold text-[#191919] border-b pb-2">
              Tagesgeld-Informationen
            </h3>
          </div>
          
          <TextInput
            label="Bank"
            placeholder="z.B. Deutsche Bank"
            withAsterisk
            {...form.getInputProps("bank")}
          />
          <TextInput
            label="Laufzeit (Duration)"
            placeholder="z.B. 12"
            rightSection={<span className="text-gray-500 text-sm"></span>}
            rightSectionPointerEvents="none"
            withAsterisk
            {...form.getInputProps("laufzeit")}
          />
          <TextInput
            label="Betrag (Amount)"
            placeholder="z.B. 5000"
            rightSection={<span className="text-gray-500 text-sm">€</span>}
            rightSectionPointerEvents="none"
            withAsterisk
            {...form.getInputProps("betrag")}
          />
          <TextInput
            label="Zinsatz (Interest Rate)"
            placeholder="z.B. 3.5"
            rightSection={<span className="text-gray-500 text-sm">%</span>}
            rightSectionPointerEvents="none"
            withAsterisk
            {...form.getInputProps("zinsatz")}
          />

          <Button
            unstyled
            type="submit"
            className="h-[50px] bg-black hover:bg-black/90 text-white cursor-pointer"
          >
            Speichern
          </Button>
          <Button
            unstyled
            type="button"
            variant="outline"
            className="h-[50px] bg-transparent text-[#111827] border border-[#E7E7E7]"
            onClick={handleClose}
          >
            Abbrechen
          </Button>
        </form>
      </Modal>
    </>
  );
};

export default AddNewUserModal;
