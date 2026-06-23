"use client";
import React, { useState } from "react";
import { TextInput, Button } from "@mantine/core";

const Header = ({
  title = "Benutzerverwaltung", // Default title translated
  initialSearch = "",
  onSearchChange,
  openModal,
}) => {
  const [query, setQuery] = useState(initialSearch);

  const handleSearchChange = (e) => {
    const val = e.currentTarget.value;
    setQuery(val);
    onSearchChange?.(val);
  };

  const handleAddUser = () => {
    openModal();
  };

  return (
    <div className="flex md:items-center justify-between mb-6 gap-3 flex-col md:flex-row">
      {/* Links: Titel */}
      <h3 className="font-semibold text-[20px]/[150%] lg:text-[24px]/[150%] text-[var(--navy)]">
        {title}
      </h3>
      <div className="flex flex-col md:flex-row items-start md:items-center gap-3 w-full md:w-auto">
        {/* Suchfeld */}
        <TextInput
          aria-label="Benutzer suchen"
          placeholder="Benutzer suchen"
          value={query}
          onChange={handleSearchChange}
          classNames={{
            root: "w-full p-1 bg-white border border-[var(--line)] rounded-[8px] w-full focus:border-[var(--gold)]",
          }}
        />

        {/* Benutzer hinzufügen */}
        <Button
          unstyled
          type="button"
          onClick={handleAddUser}
          className="button button--primary w-full p-0 h-0"
        >
          Benutzer hinzufügen
        </Button>
      </div>
    </div>
  );
};

export default Header;