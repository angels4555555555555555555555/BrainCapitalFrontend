"use client";

import React, { useMemo, useState } from "react";
import { Pagination } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useQueryClient } from "@tanstack/react-query";
import MentineMenu from "@/features/common/MentineMenu";
import LoadingBackdrop from "@/features/common/LoadingBackdrop";
import { useDeleteUser, useRevealPassword } from "@/hooks/admin/userManagement";

const displayValue = (value, suffix = "") =>
  value === null || value === undefined || value === "" ? "–" : `${value}${suffix}`;

const money = (value) =>
  value === null || value === undefined || value === ""
    ? "–"
    : new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(Number(value));

const hasProduct = (user, product) => {
  if (user.products?.length) return user.products.includes(product);
  if (product === "festgeld") return Boolean(user.festgeld?.bank);
  if (product === "tagesgeld") return Boolean(user.tagesgeld?.bank);
  return Object.values(user.openAI || {}).some((value) => value !== 0 && value !== "" && value != null);
};

const UserList = ({ data, setCurrentUser, setPassword, openPassword, setFilter, filter, openEdit }) => {
  const [selected, setSelected] = useState(new Set());
  const users = data?.users || [];
  const allIds = useMemo(() => users.map((user) => user._id), [users]);
  const allSelected = allIds.length > 0 && selected.size === allIds.length;
  const isIndeterminate = selected.size > 0 && !allSelected;
  const isMobile = useMediaQuery("(max-width: 1023px)", undefined, { getInitialValueInEffect: true });
  const queryClient = useQueryClient();

  const { mutate: deleteUsers, isPending } = useDeleteUser(() => {
    setSelected(new Set());
    queryClient.invalidateQueries({ queryKey: ["usersList"] });
  });
  const { mutate: revealPassword, isPending: isRevealingPassword } = useRevealPassword((response) => {
    setPassword(response.password);
    openPassword();
  });

  const toggleOne = (id) => setSelected((previous) => {
    const next = new Set(previous);
    next.has(id) ? next.delete(id) : next.add(id);
    return next;
  });

  const rowMenuItems = (id) => [
    { label: "Benutzer bearbeiten", onClick: () => { setCurrentUser(id); openEdit(); } },
    { label: "Passwort anzeigen", onClick: () => revealPassword(id) },
    { label: "Benutzer löschen", onClick: () => deleteUsers([id]) },
  ];
  const bulkMenuItems = [{
    label: "Ausgewählte Benutzer löschen",
    onClick: () => selected.size && deleteUsers(Array.from(selected)),
  }];

  const Selection = ({ row }) => (
    <input
      type="checkbox"
      className="size-4 accent-[var(--gold)]"
      checked={row ? selected.has(row._id) : allSelected}
      onChange={(event) => row ? toggleOne(row._id) : setSelected(event.target.checked ? new Set(allIds) : new Set())}
      ref={!row ? (element) => { if (element) element.indeterminate = isIndeterminate; } : undefined}
      aria-label={row ? `${row.firstName} ${row.lastName} auswählen` : "Alle Benutzer auswählen"}
    />
  );

  return (
    <>
      {(isPending || isRevealingPassword) && <LoadingBackdrop />}
      <div className="w-full overflow-hidden rounded-[8px] border border-[var(--line)] bg-white">
        {isMobile ? (
          <div className="flex justify-between px-4 py-3 bg-[var(--surface-blue)]">
            <Selection />
            <MentineMenu items={bulkMenuItems} ariaLabel="Sammelaktionen" />
          </div>
        ) : (
          <div className="grid grid-cols-12 items-center min-h-[64px] px-4 text-[var(--muted)] text-[12px] font-bold uppercase tracking-[.05em] bg-[var(--surface-blue)]">
            <div className="col-span-1"><Selection /></div>
            <div className="col-span-2">Name</div>
            <div className="col-span-2">E-Mail</div>
            <div className="col-span-1">Land</div>
            <div className="col-span-2 text-right">Festgeld</div>
            <div className="col-span-2 text-right">Tagesgeld</div>
            <div className="col-span-1 text-right">OpenAI</div>
            <div className="col-span-1 flex justify-center"><MentineMenu items={bulkMenuItems} ariaLabel="Sammelaktionen" /></div>
          </div>
        )}

        <div className="overflow-y-auto lg:max-h-[calc(100dvh-420px)]">
          {!users.length ? (
            <p className="p-8 text-center text-[var(--muted)]">Keine Benutzer gefunden.</p>
          ) : isMobile ? (
            <div className="grid md:grid-cols-2 gap-4 p-4">
              {users.map((row) => (
                <div key={row._id} className="border border-[var(--line)] rounded-[8px] bg-white p-4">
                  <div className="flex items-center justify-between mb-4">
                    <label className="flex items-center gap-2"><Selection row={row} /><strong>{row.firstName} {row.lastName}</strong></label>
                    <MentineMenu items={rowMenuItems(row._id)} ariaLabel={`Aktionen für ${row.firstName} ${row.lastName}`} />
                  </div>
                  <div className="space-y-2 text-[14px]">
                    <div className="flex justify-between gap-3"><span className="text-[var(--muted)]">E-Mail</span><span className="break-all text-right">{row.email}</span></div>
                    <div className="flex justify-between"><span className="text-[var(--muted)]">Land</span><span>{row.country}</span></div>
                    <div className="flex justify-between"><span className="text-[var(--muted)]">Festgeld</span><span>{hasProduct(row, "festgeld") ? money(row.festgeld?.betrag) : "–"}</span></div>
                    <div className="flex justify-between"><span className="text-[var(--muted)]">Tagesgeld</span><span>{hasProduct(row, "tagesgeld") ? money(row.tagesgeld?.betrag) : "–"}</span></div>
                    <div className="flex justify-between"><span className="text-[var(--muted)]">OpenAI Depotwert</span><span>{hasProduct(row, "openAI") ? money(row.openAI?.depotWert) : "–"}</span></div>
                  </div>
                </div>
              ))}
            </div>
          ) : users.map((row) => (
            <div key={row._id} className="grid grid-cols-12 items-center px-4 min-h-[64px] text-[14px] border-b border-[var(--line)] hover:bg-[var(--surface-blue)]">
              <div className="col-span-1"><Selection row={row} /></div>
              <div className="col-span-2 truncate font-medium">{row.firstName} {row.lastName}</div>
              <div className="col-span-2 truncate text-[var(--muted)]">{row.email}</div>
              <div className="col-span-1 truncate">{displayValue(row.country)}</div>
              <div className="col-span-2 text-right tabular-nums">{hasProduct(row, "festgeld") ? money(row.festgeld?.betrag) : "–"}</div>
              <div className="col-span-2 text-right tabular-nums">{hasProduct(row, "tagesgeld") ? money(row.tagesgeld?.betrag) : "–"}</div>
              <div className="col-span-1 text-right tabular-nums">{hasProduct(row, "openAI") ? money(row.openAI?.depotWert) : "–"}</div>
              <div className="col-span-1 flex justify-center"><MentineMenu items={rowMenuItems(row._id)} ariaLabel={`Aktionen für ${row.firstName} ${row.lastName}`} /></div>
            </div>
          ))}
        </div>

        {data?.totalPages > 1 && (
          <div className="px-4 pb-4">
            <Pagination total={data.totalPages} value={filter.page} onChange={(page) => { setSelected(new Set()); setFilter((previous) => ({ ...previous, page })); }} color="#f2600c" />
          </div>
        )}
      </div>
    </>
  );
};

export default UserList;
