<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { login } from "../services/auth.js";
import useValidator from "../composables/useValidator";

const router = useRouter();
const { errors, validate, clearError } = useValidator();

const form = ref({
    email: "",
    password: "",
    remember: false,
});

const loading = ref(false);

const rules = {
    email: "required|email",
    password: "required|minLength:8",
};

const messages = {
    password: {
        minLength: "Mật khẩu phải có ít nhất 8 ký tự",
    },
};

const handleLogin = async () => {
    if (!validate(form.value, rules, messages)) return;

    loading.value = true;
    try {
        const res = await login({
            email: form.value.email,
            password: form.value.password,
        });

        const token = res?.data?.data?.access_token;
        if (token) localStorage.setItem("token", token);

        router.push("/");
    } catch (err) {
        errors.value.email = "Email hoặc mật khẩu không đúng ❌";
    } finally {
        loading.value = false;
    }
};
</script>

<template>
    <div class="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-green-100 to-green-300 p-4">
        <div class="bg-white shadow-xl rounded-2xl w-full max-w-md p-8">
            <h2 class="text-3xl font-bold text-center text-green-600">Chào mừng đến Plant Shop 🌱</h2>
            <p class="text-gray-500 text-center mb-6">Đăng nhập vào tài khoản của bạn</p>

            <form @submit.prevent="handleLogin" class="space-y-4">
                <!-- Email -->
                <div>
                    <label class="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        v-model="form.email"
                        @input="clearError('email')"
                        type="email"
                        placeholder="email@example.com"
                        class="mt-1 p-2 w-full rounded-lg border shadow-sm focus:ring-green-500 focus:border-green-500"
                        :class="errors.email ? 'border-red-500 ring-1 ring-red-400' : 'border-gray-300'"
                    />
                    <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
                </div>

                <!-- Password -->
                <div>
                    <label class="block text-sm font-medium text-gray-700">Mật khẩu</label>
                    <input
                        v-model="form.password"
                        @input="clearError('password')"
                        type="password"
                        placeholder="••••••••"
                        class="mt-1 p-2 w-full rounded-lg border shadow-sm focus:ring-green-500 focus:border-green-500"
                        :class="errors.password ? 'border-red-500 ring-1 ring-red-400' : 'border-gray-300'"
                    />
                    <p v-if="errors.password" class="text-red-500 text-sm mt-1">{{ errors.password }}</p>
                </div>

                <!-- Remember me -->
                <div class="flex items-center justify-between">
                    <label class="flex items-center space-x-2 cursor-pointer">
                        <input v-model="form.remember" type="checkbox" class="rounded text-green-600" />
                        <span class="text-sm text-gray-600">Ghi nhớ đăng nhập</span>
                    </label>
                    <a href="#" class="text-sm text-green-600 hover:underline">Quên mật khẩu?</a>
                </div>

                <!-- Button -->
                <button
                    type="submit"
                    class="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-semibold shadow-md transition disabled:opacity-50"
                    :disabled="loading"
                >
                    {{ loading ? 'Đang xử lý...' : 'Đăng nhập' }}
                </button>
            </form>

            <!-- Register link -->
            <p class="text-center text-sm text-gray-600 mt-6">
                Chưa có tài khoản?
                <router-link to="/register" class="text-green-600 font-semibold hover:underline">Đăng ký</router-link>
            </p>
        </div>
    </div>
</template>
