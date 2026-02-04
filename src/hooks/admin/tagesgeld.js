import { tagesgeldAPIs } from "../../api/admin/tagesgeld";
import {
    useQueryWithErrorToast,
    useMutationWithToast,
} from "../../utils/tanstackInstance";

/** -------------------------------
 * 📋 Tagesgeld abrufen
 ---------------------------------- */
export const useGetTagesgeld = () =>
    useQueryWithErrorToast(
        {
            queryKey: ["tagesgeld"],
            queryFn: () => tagesgeldAPIs.getTagesgeld(),
            keepPreviousData: true,
        },
        "Tagesgeld konnte nicht abgerufen werden"
    );

/** -------------------------------
 * ➕ Tagesgeld erstellen
 ---------------------------------- */
export const useCreateTagesgeld = (onSuccessCallback) =>
    useMutationWithToast({
        mutationFn: tagesgeldAPIs.createTagesgeld,
        successMsg: "Tagesgeld erfolgreich erstellt!",
        errorMsg: "Tagesgeld konnte nicht erstellt werden",
        onSuccess: onSuccessCallback,
    });

/** -------------------------------
 * ✏️ Tagesgeld aktualisieren
 ---------------------------------- */
export const useUpdateTagesgeld = (onSuccessCallback) =>
    useMutationWithToast({
        mutationFn: tagesgeldAPIs.updateTagesgeld,
        successMsg: "Tagesgeld erfolgreich aktualisiert!",
        errorMsg: "Tagesgeld konnte nicht aktualisiert werden",
        onSuccess: onSuccessCallback,
    });
