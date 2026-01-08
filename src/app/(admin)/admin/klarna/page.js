"use client";
import React, { useEffect } from "react";
import { Input } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useGetKlarna, useUpdateKlarna } from "@/hooks/admin/klarna";
import { useQueryClient } from "@tanstack/react-query";
import LoadingBackdrop from "@/features/common/LoadingBackdrop";
import EuroIcon from "../../../../assets/icons/EuroIcon";

export default function Page() {
    const queryClient = useQueryClient();
    const { data, isPending: isFetching } = useGetKlarna();
    const form = useForm({
        initialValues: { price: "" },
        validate: {
            price: (value) => {
                if (!value?.trim()) return "Preis ist erforderlich";
                const num = Number(value.replace(/[^0-9.]/g, ""));
                if (Number.isNaN(num)) return "Geben Sie eine gültige Zahl ein";
                if (num <= 0) return "Der Preis muss größer als 0 sein";
                return null;
            },
        },
    });

    useEffect(() => {
        if (data?.klarnaPrice) {
            form.setFieldValue("price", String(data.klarnaPrice));
        }
    }, [data, form]);

    const { mutate: updateKlarna, isPending: isUpdating } = useUpdateKlarna(() => {
        queryClient.invalidateQueries(["klarna"]);
    });

    const onSubmit = (values) => {
        const numericPrice = Number(values.price);
        updateKlarna({ newKlarnaPrice: numericPrice });
    };

    return (
        <div className="w-[200px]">
            {(isFetching || isUpdating) && <LoadingBackdrop />}
            <h2 className="mb-5 font-bold md:text-[24px]/[150%] text-[20px]/[150%]">
                SpaceX-Details
            </h2>

            <form onSubmit={form.onSubmit(onSubmit)} className="max-w-[380px] space-y-4">
                <div>
                    <p className="mb-2.5 font-medium text-[14px]/[150%] text-[#191919]">
                        SpaceX-Preis
                    </p>
                    <Input
                        type="number"
                        placeholder="Preis eingeben"
                        size="md"
                        rightSection={
                            <div className="h-full flex items-center">
                                <EuroIcon className="w-[17px] h-[36px] text-[#191919]" />
                            </div>
                        }
                        rightSectionPointerEvents="none"
                        {...form.getInputProps("price")}
                    />

                    {form.errors.price && (
                        <p className="mt-1 text-[12px] text-red-600">{form.errors.price}</p>
                    )}
                </div>

                <button
                    type="submit"
                    className="bg-black text-white font-bold h-[48px] w-[199px] rounded-none"
                >
                    Aktualisieren
                </button>
            </form>
        </div>
    );
}
