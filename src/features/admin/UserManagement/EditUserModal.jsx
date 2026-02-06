"use client";

import React, { useEffect } from "react";
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
import { useQueryClient } from "@tanstack/react-query";
import LoadingBackdrop from "@/features/common/LoadingBackdrop";
import { useGetUser, useUpdateUser } from "@/hooks/admin/userManagement";
import COUNTRIES from "./CountryList";

const EditUserModal = ({ opened, onClose, currentUser: id }) => {
  const queryClient = useQueryClient();

  const { data, isPending } = useGetUser(id);
  const { mutate: updateUser, isPending: isUpdating } = useUpdateUser(() => {
    queryClient.invalidateQueries(["usersList"]);
    onClose();
  });

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
        if (v === "" || v === null) return "Klarna-Preis ist erforderlich";
        const n = Number(v);
        if (!Number.isFinite(n) || n < 0)
          return "Geben Sie einen gültigen Klarna-Preis ein";
        return null;
      },
      email: (v) =>
        /^\S+@\S+\.\S+$/.test(v) ? null : "Ungültige E-Mail-Adresse",
      bank: (v) => (v.trim().length ? null : "Bank ist erforderlich"),
      laufzeit: (v) => (v.trim().length ? null : "Laufzeit ist erforderlich"),
      betrag: (v) => (v.trim().length ? null : "Betrag ist erforderlich"),
      zinsatz: (v) => (v.trim().length ? null : "Zinsatz ist erforderlich"),
    },
  });

  useEffect(() => {
    if (data?.user) {
      const {
        firstName,
        lastName,
        dob,
        gender,
        country,
        shares,
        klarnaPurchasePrice,
        klarnaPrice,
        email,
        bank,
        laufzeit,
        betrag,
        zinsatz,
      } = data?.user;

      form.setValues({
        firstName,
        lastName,
        dob: new Date(dob),
        gender,
        country,
        shares,
        klarnaPurchasePrice,
        klarnaPrice,
        email,
        password: "", // leer lassen
        bank: bank || "",
        laufzeit: laufzeit || "",
        betrag: betrag || "",
        zinsatz: zinsatz || "",
      });
    }
  }, [data]);

  const handleSubmit = (values) => {
    const { email, password, ...rest } = values;
    updateUser({
      userId: id,
      dob: rest.dob.toISOString(),
      ...rest,
    });
  };

  return (
    <>
      {(isPending || isUpdating) && <LoadingBackdrop />}
      <Modal
        opened={opened}
        onClose={onClose}
        title="Benutzer bearbeiten"
        centered
      >
        <form
          onSubmit={form.onSubmit(handleSubmit)}
          className="p-4 gap-4 grid md:grid-cols-2"
        >
          <TextInput
            label="Vorname"
            withAsterisk
            {...form.getInputProps("firstName")}
          />
          <TextInput
            label="Nachname"
            withAsterisk
            {...form.getInputProps("lastName")}
          />
          <DateInput
            label="Geburtsdatum"
            withAsterisk
            placeholder="MM-TT-JJJJ"
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
            {...form.getInputProps("gender")}
          />
          <Select
            label="Land"
            placeholder="Land auswählen"
            withAsterisk
            data={COUNTRIES}
            searchable
            {...form.getInputProps("country")}
          />
          <NumberInput
            label="Klarna-Aktien"
            hideControls
            min={0}
            {...form.getInputProps("shares")}
          />
          <NumberInput
            label="Kaufpreis Klarna"
            hideControls
            min={0}
            {...form.getInputProps("klarnaPurchasePrice")}
          />
          <NumberInput
            label="Klarna-Preis"
            placeholder="Klarna-Preis eingeben"
            hideControls
            // min={0}
            {...form.getInputProps("klarnaPrice")}
          />
          <TextInput
            label="E-Mail"
            withAsterisk
            {...form.getInputProps("email")}
          />
          <PasswordInput
            label="Passwort"
            placeholder="(Leer lassen, um es nicht zu ändern)"
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
            rightSection={<span className="text-gray-500 text-sm">EUR</span>}
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
            Änderungen speichern
          </Button>
          <Button
            unstyled
            type="button"
            variant="outline"
            className="h-[50px] bg-transparent text-[#111827] border border-[#E7E7E7]"
            onClick={onClose}
          >
            Abbrechen
          </Button>
        </form>
      </Modal>
    </>
  );
};

export default EditUserModal;
