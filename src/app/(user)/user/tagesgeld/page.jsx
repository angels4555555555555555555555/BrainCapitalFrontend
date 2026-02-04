"use client";
import React from "react";
import { useGetTagesgeld } from "@/hooks/user/tagesgeld";
import LoadingBackdrop from "@/features/common/LoadingBackdrop";

export default function Page() {
    const { data, isPending: isFetching } = useGetTagesgeld();
    
    const tagesgeld = data?.tagesgeld;

    return (
        <div className="py-4 md:py-9 px-4 md:px-6 lg:px-[4.167vw]">
            {isFetching && <LoadingBackdrop />}
            <h2 className="mb-5 font-bold md:text-[24px]/[150%] text-[20px]/[150%]">
                Tagesgeld-Informationen
            </h2>

            <div className="max-w-[380px] space-y-6 bg-white p-6 rounded-lg">
                {!tagesgeld && !isFetching ? (
                    <p className="text-[14px] text-gray-500">
                        Keine Tagesgeld-Informationen verfügbar.
                    </p>
                ) : (
                    <>
                        <div>
                            <p className="mb-2 font-medium text-[12px]/[100%] text-[#7E7E7E]">
                                Bank
                            </p>
                            <h4 className="font-semibold text-[20px]/[150%] text-[#191919]">
                                {tagesgeld?.bank || "-"}{!isNaN(Number(tagesgeld?.bank)) && tagesgeld?.bank ? " €" : ""}
                            </h4>
                        </div>

                        <div>
                            <p className="mb-2 font-medium text-[12px]/[100%] text-[#7E7E7E]">
                                Laufzeit
                            </p>
                            <h4 className="font-semibold text-[20px]/[150%] text-[#191919]">
                                {tagesgeld?.laufzeit || "-"}{!isNaN(Number(tagesgeld?.laufzeit)) && tagesgeld?.laufzeit ? " €" : ""}
                            </h4>
                        </div>

                        <div>
                            <p className="mb-2 font-medium text-[12px]/[100%] text-[#7E7E7E]">
                                Betrag
                            </p>
                            <h4 className="font-semibold text-[20px]/[150%] text-[#191919]">
                                {tagesgeld?.betrag || "-"}{!isNaN(Number(tagesgeld?.betrag)) && tagesgeld?.betrag ? " €" : ""}
                            </h4>
                        </div>

                        <div>
                            <p className="mb-2 font-medium text-[12px]/[100%] text-[#7E7E7E]">
                                Zinsatz
                            </p>
                            <h4 className="font-semibold text-[20px]/[150%] text-[#191919]">
                                {tagesgeld?.zinsatz || "-"}{!isNaN(Number(tagesgeld?.zinsatz)) && tagesgeld?.zinsatz ? " €" : ""}
                            </h4>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
