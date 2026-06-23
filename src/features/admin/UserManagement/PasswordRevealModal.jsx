"use client";

import React from "react";
import { Modal, Button, PasswordInput } from "@mantine/core";
import { Eye, EyeOff } from "lucide-react";

const PasswordRevealModal = ({ opened, onClose, password = "" }) => {
  return (
    <Modal opened={opened} onClose={onClose} title="Passwort" radius={12} centered>
      <div className="p-4 flex flex-col items-center gap-6">
        <PasswordInput
          label="Passwort"
          placeholder="••••••••"
          value={password}
          readOnly
          className="w-full"
          classNames={{
            label: "text-[var(--navy)] font-semibold mb-1.5",
            input:
              "h-[48px] border border-[var(--line)] rounded-[8px] focus:border-[var(--gold)]",
          }}
          visibilityToggleIcon={({ reveal }) =>
            reveal ? <EyeOff size={18} /> : <Eye size={18} />
          }
        />

        <Button
          unstyled
          type="button"
          onClick={onClose}
          className="button button--secondary w-full sm:w-[278px]"
        >
          Schließen
        </Button>
      </div>
    </Modal>
  );
};

export default PasswordRevealModal;
