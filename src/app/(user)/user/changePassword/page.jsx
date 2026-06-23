"use client";

import { useRouter } from "next/navigation";
import { PasswordInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import LoadingBackdrop from "@/features/common/LoadingBackdrop";
import { useUpdateUserPassword } from "@/hooks/user/profile";

export default function ChangePasswordPage() {
  const router = useRouter();
  const form = useForm({
    initialValues: { currentPassword: "", newPassword: "" },
    validate: {
      currentPassword: (value) => value ? null : "Aktuelles Passwort ist erforderlich",
      newPassword: (value, values) => {
        if (value === values.currentPassword) return "Das neue Passwort muss sich unterscheiden";
        return /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*\d)[A-Za-z\d!@#$%^&*]{8,}$/.test(value)
          ? null
          : "Mindestens 8 Zeichen, ein Großbuchstabe, eine Zahl und ein Sonderzeichen (!@#$%^&*)";
      },
    },
  });
  const { mutate, isPending } = useUpdateUserPassword(() => router.push("/user"));

  return (
    <main className="py-8 px-4 md:px-6 lg:px-[4.167vw] min-h-full">
      {isPending && <LoadingBackdrop />}
      <h1 className="font-semibold text-[24px] mb-8 text-[var(--navy)]">Passwort ändern</h1>
      <form onSubmit={form.onSubmit((values) => mutate(values))} className="dash-card max-w-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <PasswordInput label="Aktuelles Passwort" placeholder="Aktuelles Passwort eingeben" {...form.getInputProps("currentPassword")} />
          <PasswordInput label="Neues Passwort" placeholder="Neues Passwort eingeben" {...form.getInputProps("newPassword")} />
        </div>
        <div className="flex gap-3">
          <button type="submit" disabled={isPending} className="button button--primary disabled:opacity-50">Speichern</button>
          <button type="button" onClick={() => router.back()} className="button button--secondary">Abbrechen</button>
        </div>
      </form>
    </main>
  );
}
