import { ref } from "vue";
import { fetchUserProfile } from "../services/user.js";

export const user = ref(null);

export function useAuth() {
    const loadUserProfile = async () => {
        try {
            const token = localStorage.getItem("token");
            if (!token) return;

            const res = await fetchUserProfile();
            user.value = res.data?.data ?? res.data;
        } catch (error) {
            console.error("❌ Fetch profile failed:", error);
        }
    };

    const logout = async () => {
        localStorage.removeItem("token");
        user.value = null;
    };

    return { user, loadUserProfile, logout };
}
