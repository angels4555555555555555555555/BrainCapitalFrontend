import axiosInstance from "@/utils/axiosInstance";

export const tagesgeldAPIs = {
    getTagesgeld: async () => {
        try {
            const response = await axiosInstance.get("/user/getTagesgeld");
            return response.data;
        } catch (error) {
            console.log("error", error);
            throw new Error(error?.response?.data?.message || "Tagesgeld konnte nicht abgerufen werden. Bitte versuchen Sie es erneut.");
        }
    }
};
