import axiosInstance from "@/utils/axiosInstance";

export const userManagementAPIs = {
    getUsersList: async ({ page = 1, pageSize = 10, searchTerm }) => {
        try {
            const endpoint = searchTerm?.trim()
                ? "/admin/searchUsers"
                : "/admin/getUsers";
            const response = await axiosInstance.get(endpoint, {
                params: {
                    page,
                    pageSize,
                    ...(searchTerm?.trim() && { searchTerm: searchTerm.trim() }),
                },
            });
            return response.data;
        } catch (error) {
            console.log("error", error);
            throw new Error(error?.response?.data?.message || "Failed to get users. Please try again.");
        }

    },
    addNewUser: async (data) => {
        try {
            const response = await axiosInstance.post("/admin/createUser", data);
            return response.data;
        } catch (error) {
            console.log("error", error);
            throw new Error(error?.response?.data?.message || "Failed to create user. Please try again.");
        }
    },
    deleteUser: async (userIds) => {
        try {
            const response = await axiosInstance.patch("/admin/deleteUser",
                {
                    userIds
                }
            )
            return response.data;
        } catch (error) {
            console.log("error", error);
            throw new Error(error?.response?.data?.message || "Failed to delete user. Please try again.");
        }
    },
    getUser: async (id) => {
        try {
            const response = await axiosInstance.get(`/admin/getUser/${id}`);
            return response.data;
        } catch (error) {
            console.log("error", error);
            throw new Error(error?.response?.data?.message || "Failed to get user. Please try again.");
        }
    },
    updateUser: async (updatedData) => {
        try {
            const response = await axiosInstance.patch("/admin/updateUser", updatedData);
            return response.data;
        } catch (error) {
            console.log("error", error);
            throw new Error(error?.response?.data?.message || "Failed to update user. Please try again.");
        }
    },
    revealPassword: async (id) => {
        try {
            const response = await axiosInstance.get(`/admin/revealPassword/${id}`);
            return response.data;
        } catch (error) {
            console.log("error", error);
            throw new Error(error?.response?.data?.message || "Failed to reveal password. Please try again.");
        }
    },
};
