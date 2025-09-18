<script setup>
import { ref } from "vue";

const email = ref("");
const password = ref("");
const remember = ref(false);

const handleLogin = () => {
    console.log("Login data:", {
        email: email.value,
        password: password.value,
        remember: remember.value,
    });
};
</script>

<template>
    <div class="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-green-100 to-green-300">
        <div class="bg-white shadow-xl rounded-2xl w-full max-w-md p-8">
            <h2 class="text-3xl font-bold text-center text-green-600">Welcome Plant Shop 🌱</h2>
            <p class="text-gray-500 text-center mb-6">Login to your account</p>

            <form @submit.prevent="handleLogin" class="space-y-4">
                <!-- Email -->
                <div>
                    <label class="block text-sm font-medium text-gray-700">Email</label>
                    <input
                            v-model="email"
                            type="email"
                            required
                            placeholder="you@example.com"
                            class="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500"
                    />
                </div>

                <!-- Password -->
                <div>
                    <label class="block text-sm font-medium text-gray-700">Password</label>
                    <input
                            v-model="password"
                            type="password"
                            required
                            placeholder="••••••••"
                            class="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500"
                    />
                </div>

                <!-- Remember me -->
                <div class="flex items-center justify-between">
                    <label class="flex items-center space-x-2">
                        <input v-model="remember" type="checkbox" class="text-green-600 rounded" />
                        <span class="text-sm text-gray-600">Remember me</span>
                    </label>
                    <a href="#" class="text-sm text-green-600 hover:underline">Forgot password?</a>
                </div>

                <!-- Button -->
                <button
                        type="submit"
                        class="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-semibold shadow-md transition"
                >
                    Login
                </button>
            </form>

            <!-- Register link -->
            <p class="text-center text-sm text-gray-600 mt-6">
                Don’t have an account?
                <a href="/register" class="text-green-600 font-semibold hover:underline">Register</a>
            </p>
        </div>
    </div>
</template>
