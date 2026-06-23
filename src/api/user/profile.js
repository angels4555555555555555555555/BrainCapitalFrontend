import axiosInstance from "@/utils/axiosInstance";

export const userProfileAPIs = {
  /** Get User Profile */
  getProfile: async () => {
    try {
      const response = await axiosInstance.get("/user/getProfile");
      return response.data;
    } catch (error) {
      console.error("Get profile error:", error);
      throw new Error(
        error?.response?.data?.message ||
          "Failed to fetch user profile. Please try again."
      );
    }
  },

  updatePassword: async (data) => {
    try {
      const response = await axiosInstance.put("/user/updatePassword", data);
      return response.data;
    } catch (error) {
      throw new Error(
        error?.response?.data?.message ||
          "Failed to update password. Please try again."
      );
    }
  },

  /** Update Profile Picture (multipart/form-data) */
  updateProfilePicture: async (file) => {
    try {
      const formData = new FormData();
      formData.append("image", file);

      const response = await axiosInstance.patch(
        "/user/updateProfilePicture",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Update profile picture error:", error);
      throw new Error(
        error?.response?.data?.message ||
          "Failed to update profile picture. Please try again."
      );
    }
  },
};
