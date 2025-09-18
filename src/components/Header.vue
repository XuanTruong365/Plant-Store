<template>
    <header
        :class="[
        'absolute top-0 z-[99] w-full flex justify-between items-center px-[55px] py-[47px]',
        route.name === 'ProductDetail' || route.name === 'Cart' ? 'bg-emerald-600' : ''
    ]"
    >
        <!-- Logo and Menu -->
        <div class="flex items-center">
            <div
                class="w-[60px] h-[60px] p-[18px] border rounded-full flex items-center justify-center"
                v-html="Logo"
            ></div>

            <!-- PC Menu -->
            <div class="hidden md:flex items-center">
                <Button to="/" :active="route.path === '/'">Home</Button>
                <Button to="/about" :active="route.path === '/about'">Contact</Button>
                <Button to="/blog" :active="route.path === '/blog'">Blog</Button>
            </div>
        </div>

        <!-- PC Right Menu -->
        <nav class="hidden md:flex items-center">
            <div
                class="w-[60px] h-[60px] p-[18px] border rounded-full flex items-center justify-center"
                v-html="SearchIcon"
            ></div>
            <div class="relative">
                <div
                    class="w-[60px] h-[60px] p-[18px] border rounded-full flex items-center justify-center"
                    v-html="IconCart"
                ></div>

                <span
                    v-if="cartCount > 0"
                    class="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-md"
                >
                  {{ cartCount }}
                </span>
            </div>
            <Button to="/shop" :active="route.path === '/shop'">Shop</Button>
            <Button to="/login" :active="route.path === '/login'">Log in</Button>
        </nav>

        <!-- Mobile -->
        <button
            @click="isOpen = !isOpen"
            class="md:hidden w-10 h-10 flex items-center justify-center rounded-lg border"
        >
            <svg
                v-if="!isOpen"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="w-6 h-6"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                />
            </svg>
            <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="w-6 h-6"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        </button>

        <!-- Mobile Menu -->
        <transition name="fade">
            <div
                v-if="isOpen"
                class="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center py-4 space-y-4 md:hidden"
            >
                <ButtonDark to="/" :active="route.path === '/'">Home</ButtonDark>
                <ButtonDark to="/about" :active="route.path === '/about'">Contact</ButtonDark>
                <ButtonDark to="/blog" :active="route.path === '/blog'">Blog</ButtonDark>
                <ButtonDark to="/shop" :active="route.path === '/shop'">Shop</ButtonDark>
                <ButtonDark to="/login" :active="route.path === '/login'">Log in</ButtonDark>
            </div>
        </transition>
    </header>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import Button from "./ui/Button.vue";
import {IconCart, Logo, SearchIcon} from "../assets/icons.js";
import ButtonDark from "./ui/ButtonDark.vue";

const route = useRoute();
const isOpen = ref(false);
const cartCount = ref(3);
</script>
