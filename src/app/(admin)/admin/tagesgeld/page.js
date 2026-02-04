"use client";
import React, { useEffect } from "react";
import { Input } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useGetTagesgeld, useCreateTagesgeld, useUpdateTagesgeld } from "@/hooks/admin/tagesgeld";
import { useQueryClient } from "@tanstack/react-query";
import LoadingBackdrop from "@/features/common/LoadingBackdrop";

export default function Page() {
    const queryClient = useQueryClient();
    const { data, isPending: isFetching } = useGetTagesgeld();
    
    const form = useForm({
        initialValues: {
            bank: "",
            laufzeit: "",
            betrag: "",
            zinsatz: ""
        },
        validate: {
            bank: (value) => !value?.trim() ? "Bank ist erforderlich" : null,
            laufzeit: (value) => !value?.trim() ? "Laufzeit ist erforderlich" : null,
            betrag: (value) => !value?.trim() ? "Betrag ist erforderlich" : null,
            zinsatz: (value) => !value?.trim() ? "Zinsatz ist erforderlich" : null,
        },
    });

    useEffect(() => {
        if (data?.tagesgeld) {
            form.setValues({
                bank: data.tagesgeld.bank || "",
                laufzeit: data.tagesgeld.laufzeit || "",
                betrag: data.tagesgeld.betrag || "",
                zinsatz: data.tagesgeld.zinsatz || ""
            });
        }
    }, [data]);

    const { mutate: createTagesgeld, isPending: isCreating } = useCreateTagesgeld(() => {
        queryClient.invalidateQueries(["tagesgeld"]);
    });

    const { mutate: updateTagesgeld, isPending: isUpdating } = useUpdateTagesgeld(() => {
        queryClient.invalidateQueries(["tagesgeld"]);
    });

    const onSubmit = (values) => {
        if (data?.tagesgeld) {
            updateTagesgeld(values);
        } else {
            createTagesgeld(values);
        }
    };

    return (
        <div className="w-full">
            {(isFetching || isCreating || isUpdating) && <LoadingBackdrop />}
            <h2 className="mb-5 font-bold md:text-[24px]/[150%] text-[20px]/[150%]">
                Tagesgeld-Details
            </h2>

            <form onSubmit={form.onSubmit(onSubmit)} className="max-w-[380px] space-y-4">
                <div>
                    <p className="mb-2.5 font-medium text-[14px]/[150%] text-[#191919]">
                        Bank
                    </p>
                    <Input
                        type="text"
                        placeholder="Bank eingeben"
                        size="md"
                        {...form.getInputProps("bank")}
                    />
                    {form.errors.bank && (
                        <p className="mt-1 text-[12px] text-red-600">{form.errors.bank}</p>
                    )}
                </div>

                <div>
                    <p className="mb-2.5 font-medium text-[14px]/[150%] text-[#191919]">
                        Laufzeit
                    </p>
                    <Input
                        type="text"
                        placeholder="z.B. 12 Monate"
                        size="md"
                        {...form.getInputProps("laufzeit")}
                    />
                    {form.errors.laufzeit && (
                        <p className="mt-1 text-[12px] text-red-600">{form.errors.laufzeit}</p>
                    )}
                </div>

                <div>
                    <p className="mb-2.5 font-medium text-[14px]/[150%] text-[#191919]">
                        Betrag
                    </p>
                    <Input
                        type="text"
                        placeholder="z.B. 5000 EUR"
                        size="md"
                        {...form.getInputProps("betrag")}
                    />
                    {form.errors.betrag && (
                        <p className="mt-1 text-[12px] text-red-600">{form.errors.betrag}</p>
                    )}
                </div>

                <div>
                    <p className="mb-2.5 font-medium text-[14px]/[150%] text-[#191919]">
                        Zinsatz
                    </p>
                    <Input
                        type="text"
                        placeholder="z.B. 3.5%"
                        size="md"
                        {...form.getInputProps("zinsatz")}
                    />
                    {form.errors.zinsatz && (
                        <p className="mt-1 text-[12px] text-red-600">{form.errors.zinsatz}</p>
                    )}
                </div>

                <button
                    type="submit"
                    className="bg-black text-white font-bold h-[48px] w-[199px] rounded-none hover:bg-gray-800 transition-colors"
                >
                    {data?.tagesgeld ? "Aktualisieren" : "Erstellen"}
                </button>
            </form>
        </div>
    );
}
