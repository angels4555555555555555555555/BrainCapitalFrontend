"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  TextInput,
  PasswordInput,
  Button,
  Modal,
  Tooltip,
  CopyButton,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { Check, Copy, Mail, Lock } from "lucide-react";
import { toast } from "sonner";
import { useUserLogin, useAdminLogin } from "@/hooks/auth";
import LoadingBackdrop from "@/features/common/LoadingBackdrop";

const fieldClassNames = {
  input:
    "h-[52px] bg-[var(--surface-blue)] border border-transparent rounded-full focus:bg-white focus:border-[var(--gold)] transition-colors",
};

const LoginPanel = ({ variant }) => {
  const isAdmin = variant === "admin";
  const router = useRouter();
  const [resetOpened, { open: openReset, close: closeReset }] =
    useDisclosure(false);
  const [resetEmail, setResetEmail] = useState("");

  const form = useForm({
    initialValues: { email: "", password: "" },
    validate: {
      email: (value) =>
        /^\S+@\S+\.\S+$/.test(value) ? null : "Ungültige E-Mail-Adresse",
      password: (value) =>
        value.length >= 6
          ? null
          : "Passwort muss mindestens 6 Zeichen lang sein",
    },
  });

  const { mutate: loginUser, isPending: isUserPending } = useUserLogin(() => {
    toast.success("Anmeldung erfolgreich! Willkommen zurück.");
    router.push("/user");
  });

  const { mutate: loginAdmin, isPending: isAdminPending } = useAdminLogin(
    () => {
      router.push("/admin/");
    },
  );

  const isPending = isAdmin ? isAdminPending : isUserPending;

  const handleSubmit = (values) => {
    if (isAdmin) loginAdmin(values);
    else loginUser(values);
  };

  return (
    <>
      {isPending && <LoadingBackdrop />}

      {!isAdmin && (
        <Modal
          centered
          radius={12}
          opened={resetOpened}
          onClose={() => {
            setResetEmail("");
            closeReset();
          }}
          title="Passwort zurücksetzen"
        >
          <p className="text-[16px]/[24px] mb-6 text-[var(--muted)]">
            Um Ihr Passwort zurückzusetzen, wenden Sie sich bitte per E-Mail an
            unser Support-Team. Kopieren Sie die untenstehende E-Mail-Adresse
            und senden Sie Ihre Anfrage, um mit dem Zurücksetzen fortzufahren.
          </p>

          <p className="text-[14px]/[150%] mb-1.5 font-semibold text-[var(--navy)]">
            Kontaktinformation
          </p>

          <div className="flex gap-4">
            <TextInput
              placeholder="xyz@gmail.com"
              className="flex-1"
              value={resetEmail}
              onChange={(e) => setResetEmail(e.currentTarget.value)}
              classNames={{
                input:
                  "h-[48px] border border-[var(--line)] rounded-[8px] focus:border-[var(--gold)]",
              }}
            />

            <CopyButton value={resetEmail} timeout={1500}>
              {({ copied, copy }) => (
                <Tooltip
                  label={copied ? "Kopiert!" : "In Zwischenablage kopieren"}
                  withArrow
                >
                  <Button
                    unstyled
                    className="button button--primary w-[120px]"
                    onClick={() => {
                      if (!resetEmail) {
                        toast.error(
                          "Nichts zu kopieren – bitte geben Sie eine E-Mail-Adresse ein.",
                        );
                        return;
                      }
                      copy();
                      toast.success("E-Mail-Adresse kopiert");
                    }}
                  >
                    <div className="flex justify-center items-center gap-2">
                      {copied ? <Check size={20} /> : <Copy size={20} />}
                      <p>{copied ? "Kopiert" : "Kopieren"}</p>
                    </div>
                  </Button>
                </Tooltip>
              )}
            </CopyButton>
          </div>
        </Modal>
      )}

      <div className="auth-shell">
        <div className="auth-wrapper">
          <div className="auth-card flex justify-center items-center animate-fadeIn" key={variant}>
            <div className="auth-form p-6 w-full">
              <div
                className={`auth-toggle mx-auto ${isAdmin ? "auth-toggle--admin" : ""}`}
              >
                <span className="auth-toggle__thumb" />
                <button
                  type="button"
                  className={!isAdmin ? "active" : ""}
                  onClick={() => router.push("/login")}
                >
                  Kunde
                </button>
                <button
                  type="button"
                  className={isAdmin ? "active" : ""}
                  onClick={() => router.push("/login/admin")}
                >
                  Admin
                </button>
              </div>
              <img src="/logo.png" className="w-20 p-4 mx-auto" alt="Brain Capital Asset" />
              <h2 className="text-center">{isAdmin ? "Admin-Anmeldung" : "Willkommen zurück"}</h2>
              <p className="auth-subtitle text-center">
                {isAdmin
                  ? "Melden Sie sich mit Ihrem Admin-Konto an"
                  : "Schön, Sie wiederzusehen. Melden Sie sich an, um fortzufahren."}
              </p>

              <form
                onSubmit={form.onSubmit(handleSubmit)}
                className="flex flex-col gap-4"
              >
                <TextInput
                  placeholder="E-Mail-Adresse"
                  aria-label="E-Mail"
                  leftSection={
                    <Mail size={18} className="text-[var(--muted)]" />
                  }
                  classNames={fieldClassNames}
                  {...form.getInputProps("email")}
                />

                <div className="flex flex-col gap-2">
                  <PasswordInput
                    placeholder="Passwort"
                    aria-label="Passwort"
                    leftSection={
                      <Lock size={18} className="text-[var(--muted)]" />
                    }
                    classNames={fieldClassNames}
                    {...form.getInputProps("password")}
                  />

                  {!isAdmin && (
                    <div
                      onClick={openReset}
                      className="text-right text-[var(--accent)] text-[13px] font-semibold cursor-pointer"
                    >
                      Passwort vergessen?
                    </div>
                  )}
                </div>

                <Button
                  unstyled
                  type="submit"
                  fullWidth
                  className="button button--primary button--pill w-full mt-2"
                >
                  Einloggen
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPanel;
