<template>
    <header :class="['absolute top-0 z-[99] w-full flex justify-between items-center px-4 py-3 md:px-[55px] md:py-[47px]',
        route.name === 'BlogDetail' ? 'bg-emerald-600' : ''
    ]"
    >
        <!-- Logo + Menu -->
        <div class="flex items-center">
            <div class="w-10 h-10 md:w-[60px] md:h-[60px] flex items-center justify-center rounded-full border-0 md:border" v-html="Logo"></div>

            <!-- PC Menu -->
            <div class="hidden md:flex items-center">
                <Button to="/" :active="route.path === '/'">Home</Button>
                <Button to="/about" :active="route.path === '/about'">Contact</Button>
                <Button to="/blog" :active="route.path === '/blog'">Blog</Button>
            </div>
        </div>

        <div class="flex gap-2 md:gap-0">
            <!-- Right icons + Shop/Login buttons -->
            <div class="flex gap-2 md:gap-0 items-center relative">
                <!-- Search -->
                <Search />

                <!-- Cart -->
                <CartPopup />

                <!-- Shop / Login Buttons -->
                <div class="hidden md:flex">
                    <Button to="/shop" :active="route.path === '/shop'">Shop</Button>
                    <Button to="/login" :active="route.path === '/login'">Log in</Button>
                </div>
            </div>

            <!-- Mobile Menu Toggle -->
            <button @click="isOpen = !isOpen" class="md:hidden w-10 h-10 flex items-center justify-center rounded-lg border">
                <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
            </button>
        </div>

        <!-- Mobile Menu -->
        <transition name="slide-fade">
            <div v-if="isOpen" class="fixed inset-0 z-[98] bg-black/40 backdrop-blur-sm flex flex-col items-center pt-24 space-y-6">
                <button @click="isOpen=false" class="absolute top-6 right-6 p-2 bg-white rounded-full shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>

                <ButtonDark v-for="item in mobileMenu" :key="item.name" :to="item.path" :active="route.path === item.path"
                            class="w-11/12 md:w-64 py-4 text-xl font-semibold text-center rounded-lg border-0 bg-green-400 text-white shadow-md hover:bg-green-500 hover:shadow-lg transition">
                    {{ item.name }}
                </ButtonDark>
            </div>
        </transition>
    </header>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import Button from "./ui/Button.vue";
import ButtonDark from "./ui/ButtonDark.vue";
import { Logo } from "../assets/icons.js";
import Search from "./ui/Search.vue";
import CartPopup from "./ui/CartPopup.vue";

const route = useRoute();
const isOpen = ref(false);

// Mobile menu items
const mobileMenu = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Shop", path: "/shop" },
    { name: "Log in", path: "/login" }
];

</script>

<style>
.fade-enter-active, .fade-leave-active {
    transition: all 0.2s ease;
}
.fade-enter-from, .fade-leave-to {
    opacity: 0;
    transform: translateY(-5px);
}
.fade-enter-to, .fade-leave-from {
    opacity: 1;
    transform: translateY(0);
}

.slide-fade-enter-active, .slide-fade-leave-active {
    transition: all 0.3s ease;
}
.slide-fade-enter-from {
    transform: translateY(-20px);
    opacity: 0;
}
.slide-fade-enter-to {
    transform: translateY(0);
    opacity: 1;
}
.slide-fade-leave-from {
    transform: translateY(0);
    opacity: 1;
}
.slide-fade-leave-to {
    transform: translateY(-20px);
    opacity: 0;
}
</style>
