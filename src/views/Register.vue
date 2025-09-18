<script setup>
import { ref } from "vue";

const name = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");

const handleRegister = () => {
    if (password.value !== confirmPassword.value) {
        alert("Passwords do not match!");
        return;
    }
    console.log("Register data:", {
        name: name.value,
        email: email.value,
        password: password.value,
    });
};
</script>

<template>
    <div class="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-green-100 to-green-300">
        <div class="bg-white shadow-xl rounded-2xl w-full max-w-md p-8">
            <h2 class="text-3xl font-bold text-center text-green-600">Create Account 🌿</h2>
            <p class="text-gray-500 text-center mb-6">Join our plant lover community</p>

            <form @submit.prevent="handleRegister" class="space-y-4">
                <!-- Name -->
                <div>
                    <label class="block text-sm font-medium text-gray-700">Full Name</label>
                    <input
                            v-model="name"
                            type="text"
                            required
                            placeholder="John Doe"
                            class="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500"
                    />
                </div>

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

                <!-- Confirm Password -->
                <div>
                    <label class="block text-sm font-medium text-gray-700">Confirm Password</label>
                    <input
                            v-model="confirmPassword"
                            type="password"
                            required
                            placeholder="••••••••"
                            class="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500"
                    />
                </div>

                <!-- Button -->
                <button
                        type="submit"
                        class="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-semibold shadow-md transition"
                >
                    Register
                </button>
            </form>

            <!-- Login link -->
            <p class="text-center text-sm text-gray-600 mt-6">
                Already have an account?
                <a href="/login" class="text-green-600 font-semibold hover:underline">Login</a>
            </p>
        </div>
    </div>
</template>
