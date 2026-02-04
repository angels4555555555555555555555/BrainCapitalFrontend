import axiosInstance from "@/utils/axiosInstance";

export const tagesgeldAPIs = {
    getTagesgeld: async () => {
        try {
            const response = await axiosInstance.get("/admin/getTagesgeld");
            return response.data;
        } catch (error) {
            console.log("error", error);
            throw new Error(error?.response?.data?.message || "Tagesgeld konnte nicht abgerufen werden. Bitte versuchen Sie es erneut.");
        }
    },
    createTagesgeld: async (data) => {
        try {
            const response = await axiosInstance.post("/admin/createTagesgeld", data);
            return response.data;
        } catch (error) {
            console.log("error", error);
            throw new Error(error?.response?.data?.message || "Tagesgeld konnte nicht erstellt werden. Bitte versuchen Sie es erneut.");
        }
    },
    updateTagesgeld: async (data) => {
        try {
            const response = await axiosInstance.patch("/admin/updateTagesgeld", data);
            return response.data;
        } catch (error) {
            console.log("error", error);
            throw new Error(error?.response?.data?.message || "Tagesgeld konnte nicht aktualisiert werden. Bitte versuchen Sie es erneut.");
        }
    }
};
