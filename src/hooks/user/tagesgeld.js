import { tagesgeldAPIs } from "../../api/user/tagesgeld";
import {
    useQueryWithErrorToast,
} from "../../utils/tanstackInstance";

/** -------------------------------
 * 📋 Tagesgeld abrufen (Benutzer)
 ---------------------------------- */
export const useGetTagesgeld = () =>
    useQueryWithErrorToast(
        {
            queryKey: ["tagesgeld-user"],
            queryFn: () => tagesgeldAPIs.getTagesgeld(),
            keepPreviousData: true,
        },
        "Tagesgeld konnte nicht abgerufen werden"
    );
