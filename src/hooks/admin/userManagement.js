import { userManagementAPIs } from "../../api/admin/userManagement";
import {
    useQueryWithErrorToast,
    useMutationWithToast,
    useMultiQueryWithErrorToast,
    useInfiniteQueryWithErrorToast,
} from "../../utils/tanstackInstance";

/** -------------------------------
 * 📋 Benutzerliste abrufen
 ---------------------------------- */
export const useGetUsersList = (filters) =>
    useQueryWithErrorToast(
        {
            queryKey: ["usersList", filters],
            queryFn: () => userManagementAPIs.getUsersList(filters),
            keepPreviousData: true,
        },
        "Benutzerliste konnte nicht abgerufen werden"
    );

/** -------------------------------
 * ➕ Benutzer hinzufügen
 ---------------------------------- */
export const useAddNewUser = (onSuccessCallback) =>
    useMutationWithToast({
        mutationFn: userManagementAPIs.addNewUser,
        successMsg: "Benutzer erfolgreich hinzugefügt!",
        errorMsg: "Benutzer konnte nicht hinzugefügt werden",
        onSuccess: onSuccessCallback,
    });

/** -------------------------------
 * 🚫 Benutzer löschen
 ---------------------------------- */
export const useDeleteUser = (onSuccessCallback) =>
    useMutationWithToast({
        mutationFn: userManagementAPIs.deleteUser,
        successMsg: "Benutzer erfolgreich gelöscht!",
        errorMsg: "Benutzer konnte nicht gelöscht werden",
        onSuccess: onSuccessCallback,
    });

/** -------------------------------
 * 📋 Benutzer abrufen
 ---------------------------------- */
export const useGetUser = (id) =>
    useQueryWithErrorToast(
        {
            queryKey: ["user", id],
            queryFn: () => userManagementAPIs.getUser(id),
            enabled: Boolean(id),
        },
        "Benutzer konnte nicht abgerufen werden"
    );

/** -------------------------------
 * ✏️ Benutzer aktualisieren
 ---------------------------------- */
export const useUpdateUser = (onSuccessCallback) =>
    useMutationWithToast({
        mutationFn: userManagementAPIs.updateUser,
        successMsg: "Benutzer erfolgreich aktualisiert!",
        errorMsg: "Benutzer konnte nicht aktualisiert werden",
        onSuccess: onSuccessCallback,
    });

/** -------------------------------
 * 🗑️ Passwort anzeigen
 ---------------------------------- */
export const useRevealPassword = (onSuccessCallback) =>
    useMutationWithToast({
        mutationFn: userManagementAPIs.revealPassword,
        successMsg: "Passwort erfolgreich angezeigt!",
        errorMsg: "Passwort konnte nicht angezeigt werden",
        onSuccess: onSuccessCallback,
    });
