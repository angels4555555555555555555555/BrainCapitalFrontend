"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { toast } from "sonner";
import ProfilePic from "../../../assets/images/profile.jpg";
import EditPen from "../../../assets/icons/EditPen";
import LoadingBackdrop from "@/features/common/LoadingBackdrop";
import { useGetUserProfile, useUpdateUserProfilePicture } from "@/hooks/user/profile";

const show = (value, suffix = "") =>
  value === null || value === undefined || value === "" || value === "–" ? "–" : `${value}${suffix}`;
const money = (value) => value === "–" || value === null || value === undefined || value === ""
  ? "–"
  : new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(Number(value));

const DetailCard = ({ title, items }) => (
  <section className="dash-card min-w-0 flex-1">
    <h3 className="font-semibold text-[18px]/[150%] text-[var(--navy)] mb-5">{title}</h3>
    <div className="grid grid-cols-2 gap-x-5 gap-y-6">
      {items.map(({ label, value }) => (
        <div key={label} className="min-w-0">
          <p className="font-medium text-[12px] text-[var(--muted)] mb-1.5">{label}</p>
          <p className="font-semibold text-[18px] tabular-nums break-words">{value}</p>
        </div>
      ))}
    </div>
  </section>
);

export default function Page() {
  const { data, isPending, refetch } = useGetUserProfile();
  const fileInputRef = useRef(null);
  const user = data?.user;
  const { mutate: updateProfilePicture, isPending: isUploading } = useUpdateUserProfilePicture(refetch);

  const handleProfilePicChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) return toast.error("Bitte wählen Sie eine Bilddatei aus");
    if (file.size > 5 * 1024 * 1024) return toast.error("Bild muss kleiner als 5 MB sein");
    updateProfilePicture(file);
    event.target.value = "";
  };

  const dob = user?.dob && !Number.isNaN(new Date(user.dob).getTime())
    ? new Date(user.dob).toLocaleDateString("de-DE")
    : "–";
  const inferredProducts = [
    user?.festgeld?.bank && "festgeld",
    user?.tagesgeld?.bank && "tagesgeld",
    Object.values(user?.openAI || {}).some((value) => value !== 0 && value !== "" && value !== "–" && value != null) && "openAI",
  ].filter(Boolean);
  const visibleProducts = user?.products?.length ? user.products : inferredProducts;

  return (
    <>
      {(isPending || isUploading) && <LoadingBackdrop />}
      <main className="py-4 md:py-9 px-4 md:px-6 lg:px-[4.167vw] min-h-full">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 ">
          <h1 className="font-semibold text-[20px] md:text-[24px] text-[var(--navy)]">Willkommen zurück, {user?.firstName} {user?.lastName}</h1>
          <Link href="/user/changePassword" className="button button--primary">Kennwort ändern</Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[263px_1fr] gap-6">
          <section className="dash-card">
            <h2 className="font-semibold text-[18px] mb-4 text-[var(--navy)]">Persönliche Informationen</h2>
            <div className="flex flex-col items-center mb-5">
              <div className="relative mb-4">
                <Image className="rounded-full size-[72px] object-cover" src={user?.profilePicture?.url || ProfilePic} alt="Profilbild" width={72} height={72} />
                <button type="button" aria-label="Profilbild ändern" onClick={() => fileInputRef.current?.click()} className="absolute bottom-[-6px] right-[-3px] rounded-full size-[30px] flex items-center justify-center shadow bg-white cursor-pointer">
                  <EditPen className="size-[20px]" />
                </button>
                <input type="file" accept="image/jpeg,image/png,image/gif,image/webp" ref={fileInputRef} onChange={handleProfilePicChange} className="hidden" />
              </div>
              <strong>{user?.firstName} {user?.lastName}</strong>
              <span className="text-[13px] text-[var(--muted)] break-all">{user?.email}</span>
            </div>
            <dl className="space-y-4 text-[13px] border-t border-[var(--line)] pt-4">
              <div className="flex justify-between gap-2"><dt className="font-semibold text-[var(--muted)]">Geburtsdatum</dt><dd>{dob}</dd></div>
              <div className="flex justify-between gap-2"><dt className="font-semibold text-[var(--muted)]">Geschlecht</dt><dd>{show(user?.gender)}</dd></div>
              <div className="flex justify-between gap-2"><dt className="font-semibold text-[var(--muted)]">Land</dt><dd>{show(user?.country)}</dd></div>
            </dl>
          </section>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 min-w-0">
            {!visibleProducts.length && (
              <section className="dash-card xl:col-span-3 text-center text-[var(--muted)]">
                Für dieses Konto wurden noch keine Produktdetails hinterlegt.
              </section>
            )}
            {visibleProducts.includes("festgeld") &&
            <DetailCard title="Festgeld" items={[
              { label: "Bank", value: show(user?.festgeld?.bank) },
              { label: "Laufzeit", value: show(user?.festgeld?.laufzeit) },
              { label: "Betrag", value: money(user?.festgeld?.betrag) },
              { label: "Zinsen", value: show(user?.festgeld?.zinsen, " %") },
            ]} />}
            {visibleProducts.includes("tagesgeld") &&
            <DetailCard title="Tagesgeld" items={[
              { label: "Bank", value: show(user?.tagesgeld?.bank) },
              { label: "Garantierte Zinslaufzeit", value: show(user?.tagesgeld?.garantierteZinslaufzeit) },
              { label: "Betrag", value: money(user?.tagesgeld?.betrag) },
              { label: "Zinsen", value: show(user?.tagesgeld?.zinsen, " %") },
            ]} />}
            {visibleProducts.includes("openAI") &&
            <DetailCard title="OpenAI-Investment" items={[
              { label: "Anzahl", value: show(user?.openAI?.anzahl) },
              { label: "Gekaufter Wert", value: money(user?.openAI?.gekaufterWert) },
              { label: "Aktueller Wert", value: money(user?.openAI?.aktuellerWert) },
              { label: "Investition", value: money(user?.openAI?.investition) },
              { label: "Aktueller Gewinn", value: money(user?.openAI?.aktuellerGewinn) },
              { label: "Depotwert", value: money(user?.openAI?.depotWert) },
            ]} />}
          </div>
        </div>
      </main>
    </>
  );
}
