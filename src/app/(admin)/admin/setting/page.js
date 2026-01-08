"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { PasswordInput, FileButton } from "@mantine/core";
import { useForm } from "@mantine/form";
import ProfilePic from "../../../../assets/images/profile.jpg";
import EditPen from "../../../../assets/icons/EditPen";
import LoadingBackdrop from "@/features/common/LoadingBackdrop";
import { useGetProfilePicture, useUpdateProfilePicture, useChangePassword } from "@/hooks/admin/profile";

export default function Page() {
    const [profileUrl, setProfileUrl] = useState(null);
    const form = useForm({
        initialValues: {
            currentPassword: "",
            newPassword: "",
        },
        validate: {
            currentPassword: (v) => {
                if (!v.trim()) return "Aktuelles Passwort ist erforderlich";
                if (v.length < 6) return "Mindestens 6 Zeichen erforderlich";
                return null;
            },
            newPassword: (v, values) => {
                if (!v.trim()) return "Neues Passwort ist erforderlich";
                if (v.length < 6) return "Mindestens 6 Zeichen erforderlich";
                if (v === values.currentPassword) return "Neues Passwort muss unterschiedlich sein";
                return null;
            },
        },
    });

    const fileInputRef = useRef(null);

    const { mutate: updatePassword, isPending: isUpdatingPassword } = useChangePassword(() => form.reset());
    const { mutate: uploadPicture, isPending: isUpdating } = useUpdateProfilePicture(() => {
        refetchProfile();
    });
    const { mutate: refetchProfile, isPending } = useGetProfilePicture((res) => {
        setProfileUrl(res?.admin?.profilePicture?.url);
    });

    useEffect(() => {
        refetchProfile();
    }, [refetchProfile]);

    const onSubmit = (values) => {
        updatePassword(values);
    };

    const handleFileChange = (file) => {
        if (file && file.size > 5 * 1024 * 1024) {
            alert("Dateigröße überschreitet das Limit von 5 MB.");
            return;
        }
        uploadPicture(file);
    };

    return (
        <div>
            {(isUpdating || isUpdatingPassword || isPending) && <LoadingBackdrop />}
            <h2 className="mb-5 font-bold md:text-[24px]/[150%] text-[20px]/[150%]">Einstellungen</h2>

            {/* Profile card */}
            <div className="p-4 md:p-6 mb-5 w-full lg:w-[723px] bg-white shadow-[0_4px_6px_-2px_#10182808,0_12px_16px_-4px_#10182814]">
                <h5 className="mb-6 font-bold text-[16px]/[150%]">Profil</h5>

                <div className="relative inline-block">
                    <Image
                        className="rounded-full size-[72px] z-0"
                        src={profileUrl || ProfilePic}
                        alt="Profilbild"
                        width={72}
                        height={72}
                    />

                    <FileButton accept="image/*" onChange={handleFileChange}>
                        {(props) => (
                            <button
                                {...props}
                                className="absolute bottom-[-6px] right-[-3px] z-1 rounded-full size-[30px] flex items-center justify-center shadow-[0_5px_30px_0_#19191940] bg-white cursor-pointer"
                            >
                                <EditPen className="size-[20px]" />
                            </button>
                        )}
                    </FileButton>
                </div>
            </div>

            {/* Change password card */}
            <div className="p-4 md:p-6 mb-5 w-full lg:w-[723px] bg-white shadow-[0_4px_6px_-2px_#10182808,0_12px_16px_-4px_#10182814]">
                <h5 className="mb-6 font-bold text-[16px]/[150%]">Passwort ändern</h5>

                <form onSubmit={form.onSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <p className="mb-2 font-medium text-[14px]/[150%] text-[#191919]">Aktuelles Passwort</p>
                            <PasswordInput
                                placeholder="Aktuelles Passwort eingeben"
                                classNames={{ input: "h-[48px]" }}
                                {...form.getInputProps("currentPassword")}
                            />
                        </div>

                        <div>
                            <p className="mb-2 font-medium text-[14px]/[150%] text-[#191919]">Neues Passwort</p>
                            <PasswordInput
                                placeholder="Neues Passwort eingeben"
                                classNames={{ input: "h-[48px]" }}
                                {...form.getInputProps("newPassword")}
                            />
                        </div>
                    </div>

                    <button type="submit" className="bg-black text-white font-bold h-[48px] w-full rounded-none">
                        Speichern
                    </button>
                </form>
            </div>
        </div>
    );
}
