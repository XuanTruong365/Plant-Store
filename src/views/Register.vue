<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { register } from "../services/auth.js";
import useValidator from "../composables/useValidator";

const router = useRouter();
const { errors, validate, clearError } = useValidator();

// Form state
const form = ref({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    avatar: null,
});

const previewImage = ref("");
const loading = ref(false);

// Validation rules & messages
const rules = {
    name: "required|maxLength:50",
    email: "required|email",
    password: "required|minLength:8|maxLength:20",
    confirmPassword: "required|eq:password",
    avatar: "nullable|image|maxFileSize:2048",
};

const messages = {
    password: {
        minLength: "Mật khẩu phải có ít nhất 8 ký tự",
        maxLength: "Mật khẩu không vượt quá 20 ký tự",
    },
    confirmPassword: {
        eq: "Mật khẩu nhập lại không trùng khớp!",
    },
    avatar: {
        image: "Ảnh phải là JPG/PNG",
        maxFileSize: "Ảnh phải nhỏ hơn 2MB ❌",
    },
};

// Handle file selection
const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    form.value.avatar = file || null;
    clearError("avatar");

    previewImage.value = file ? URL.createObjectURL(file) : "";
};

// Submit form
const handleRegister = async () => {
    if (!validate(form.value, rules, messages)) return;

    loading.value = true;

    try {
        const formData = new FormData();
        Object.entries(form.value).forEach(([key, value]) => {
            if (!value) return;

            // Map confirmPassword to password_confirmation for backend
            if (key === "confirmPassword") {
                formData.append("password_confirmation", value);
            } else {
                formData.append(key, value);
            }
        });

        await register(formData);
        router.push("/login");
    } catch (err) {
        alert(err?.response?.data?.message || "Đăng ký thất bại ❌");
    } finally {
        loading.value = false;
    }
};
</script>

<template>
    <div class="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-green-100 to-green-300 p-4">
        <div class="bg-white shadow-xl rounded-2xl w-full max-w-md p-8">
            <h2 class="text-3xl font-bold text-center text-green-600 mb-2">Tạo tài khoản 🌿</h2>
            <p class="text-gray-500 text-center mb-6">Tham gia cộng đồng yêu cây của chúng tôi</p>

            <form @submit.prevent="handleRegister" class="space-y-4">

                <!-- Avatar -->
                <div class="flex justify-center">
                    <label class="relative cursor-pointer">
                        <input type="file" class="hidden" accept="image/*" @change="handleImageUpload" />
                        <div
                            class="w-28 h-28 rounded-full border-4 border-white/40 flex items-center justify-center overflow-hidden bg-white/20 shadow-lg hover:scale-105 transition"
                            :class="errors.avatar ? 'ring-2 ring-red-500' : ''"
                        >
                            <img v-if="previewImage" :src="previewImage" class="w-full h-full object-cover" />
                            <span v-else class="text-white">Tải ảnh</span>
                        </div>
                        <div class="absolute bottom-0 right-1 bg-green-500 text-white p-1 rounded-full text-xs">📷</div>
                    </label>
                </div>
                <p v-if="errors.avatar" class="text-red-500 text-sm text-center">{{ errors.avatar }}</p>

                <!-- Input fields -->
                <div v-for="(label, field) in { name: 'Họ và tên', email: 'Email', password: 'Mật khẩu', confirmPassword: 'Xác nhận mật khẩu' }" :key="field">
                    <label class="block text-sm font-medium text-gray-700">{{ label }}</label>
                    <input
                        v-model="form[field]"
                        @input="clearError(field)"
                        :type="field.includes('password') ? 'password' : 'text'"
                        class="mt-1 p-2 w-full rounded-lg border shadow-sm focus:ring-green-500 focus:border-green-500"
                        :class="errors[field] ? 'border-red-500 ring-1 ring-red-400' : 'border-gray-300'"
                    />
                    <p v-if="errors[field]" class="text-red-500 text-sm mt-1">{{ errors[field] }}</p>
                </div>

                <!-- Submit -->
                <button
                    type="submit"
                    class="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-semibold shadow-md transition disabled:opacity-50"
                    :disabled="loading"
                >
                    {{ loading ? 'Đang xử lý...' : 'Đăng ký' }}
                </button>
            </form>

            <p class="text-center text-sm text-gray-600 mt-6">
                Bạn đã có tài khoản?
                <router-link to="/login" class="text-green-600 font-semibold hover:underline">Đăng nhập</router-link>
            </p>
        </div>
    </div>
</template>

