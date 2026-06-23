import { userProfileAPIs } from "@/api/user/profile";
import { useQueryWithErrorToast, useMutationWithToast } from "@/utils/tanstackInstance";

/** -------------------------------
 * 📋 Benutzerprofil abrufen
 ---------------------------------- */
export const useGetUserProfile = (onSuccessCallback) =>
    useQueryWithErrorToast(
        {
            queryKey: ["userProfile"],
            queryFn: () => userProfileAPIs.getProfile(),
        },
        "Benutzerprofil konnte nicht abgerufen werden",
        onSuccessCallback
    );

/** -------------------------------
 * 🖼️ Benutzerprofilbild aktualisieren
 ---------------------------------- */
export const useUpdateUserProfilePicture = (onSuccessCallback) =>
    useMutationWithToast({
        mutationFn: userProfileAPIs.updateProfilePicture,
        successMsg: "Profilbild erfolgreich aktualisiert!",
        errorMsg: "Profilbild konnte nicht aktualisiert werden",
        onSuccess: onSuccessCallback,
    });

export const useUpdateUserPassword = (onSuccessCallback) =>
    useMutationWithToast({
        mutationFn: userProfileAPIs.updatePassword,
        successMsg: "Passwort erfolgreich geändert!",
        errorMsg: "Passwort konnte nicht geändert werden",
        onSuccess: onSuccessCallback,
    });
