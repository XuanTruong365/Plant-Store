<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useRoute } from "vue-router";
import { useAuth } from "../composables/useAuth.js";
import Button from "./ui/Button.vue";
import ButtonDark from "./ui/ButtonDark.vue";
import Search from "./ui/Search.vue";
import CartPopup from "./ui/CartPopup.vue";
import { Logo } from "../assets/icons.js";

const route = useRoute();

// Mobile menu items
const mobileMenu = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Shop", path: "/shop" },
];

// UI State
const isOpen = ref(false);
const menuOpen = ref(false);
const dropdownRef = ref(null);
const loading = ref(true);

// Auth composable
const { user, loadUserProfile, logout } = useAuth();

// Toggle dropdown
const toggleMenu = () => {
    menuOpen.value = !menuOpen.value;
};

// Close dropdown
const closeMenu = () => {
    menuOpen.value = false;
};

// Handle click outside dropdown
const handleClickOutside = (e) => {
    if (dropdownRef.value && !dropdownRef.value.contains(e.target)) {
        menuOpen.value = false;
    }
};

// Handle ESC key to close dropdown
const handleEsc = (e) => {
    if (e.key === "Escape") {
        closeMenu();
    }
};

// Logout handler
const handleLogout = async () => {
    await logout();
    closeMenu();
};

// Lifecycle hooks
onMounted(async () => {
    await loadUserProfile();
    loading.value = false;
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
});

onBeforeUnmount(() => {
    document.removeEventListener("click", handleClickOutside);
    document.removeEventListener("keydown", handleEsc);
});
</script>

<template>
    <header
        :class="[
      'absolute top-0 z-[99] w-full flex justify-between items-center px-4 py-3 md:px-[55px] md:py-[47px]',
      route.name === 'BlogDetail' ? 'bg-emerald-600' : 'bg-transparent'
    ]"
    >
        <!-- Trái: Logo + Menu -->
        <div class="flex items-center">
            <div
                class="w-10 h-10 md:w-[60px] md:h-[60px] flex items-center justify-center rounded-full border-0 md:border"
                v-html="Logo"
            ></div>

            <div class="hidden md:flex items-center gap-2 ml-4">
                <Button to="/" :active="route.path === '/'">Trang chủ</Button>
                <Button to="/about" :active="route.path === '/about'">Liên hệ</Button>
                <Button to="/blog" :active="route.path === '/blog'">Bài viết</Button>
                <Button to="/shop" :active="route.path === '/shop'">Cửa hàng</Button>
            </div>
        </div>

        <!-- Phải: Tìm kiếm + Giỏ hàng + Tài khoản -->
        <div class="flex gap-2 md:gap-4 items-center">
            <Search />
            <CartPopup />

            <!-- Dropdown tài khoản -->
            <div v-if="loading"></div>
            <div v-else class="hidden md:flex items-center gap-3">
                <template v-if="user">
                    <div class="relative" ref="dropdownRef">
                        <button
                            @click="toggleMenu"
                            class="flex items-center gap-2 focus:outline-none group"
                        >
                            <img
                                :src="user.avatar || '/images/default-avatar.png'"
                                class="w-10 h-10 md:w-[50px] md:h-[50px] rounded-full object-cover border-2 border-white shadow-md group-hover:scale-105 transition"
                                alt="avatar"
                            />
                            <span
                                class="text-white font-semibold capitalize group-hover:text-green-300"
                            >
                                {{ user.name }}
                            </span>
                        </button>

                        <!-- Dropdown -->
                        <transition name="fade">
                            <div
                                v-if="menuOpen"
                                class="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg overflow-hidden z-50 border border-gray-100"
                            >
                                <div class="flex flex-col divide-y">
                                    <router-link
                                        to="/profile"
                                        class="px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 transition flex items-center gap-2"
                                        @click="closeMenu"
                                    >
                                        👤 Hồ sơ cá nhân
                                    </router-link>

                                    <button
                                        @click="handleLogout"
                                        class="px-4 py-3 text-left text-red-500 hover:bg-red-50 hover:text-red-600 transition flex items-center gap-2"
                                    >
                                        🚪 Đăng xuất
                                    </button>
                                </div>
                            </div>
                        </transition>
                    </div>
                </template>

                <template v-else>
                    <Button to="/login" :active="route.path === '/login'">Đăng nhập</Button>
                </template>
            </div>

            <!-- Nút menu di động -->
            <button
                @click="isOpen = !isOpen"
                class="md:hidden w-10 h-10 flex items-center justify-center rounded-lg border text-white"
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
        </div>

        <!-- Menu di động -->
        <transition name="slide-fade">
            <div
                v-if="isOpen"
                class="fixed inset-0 z-[98] bg-black/40 backdrop-blur-sm flex flex-col items-center pt-24 space-y-6"
            >
                <button
                    @click="isOpen = false"
                    class="absolute top-6 right-6 p-2 bg-white rounded-full shadow-md"
                >
                    ✕
                </button>

                <ButtonDark
                    v-for="item in user
            ? [...mobileMenu, { name: 'Hồ sơ cá nhân', path: '/profile' }]
            : [...mobileMenu, { name: 'Đăng nhập', path: '/login' }]"
                    :key="item.name"
                    :to="item.path"
                    :active="route.path === item.path"
                    class="w-11/12 md:w-64 py-4 text-xl font-semibold text-center rounded-lg border-0 bg-green-500 text-white shadow-md hover:bg-green-600 transition"
                >
                    {{ item.name }}
                </ButtonDark>
            </div>
        </transition>
    </header>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.15s ease;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: all 0.25s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
    opacity: 0;
    transform: translateY(-15px);
}
</style>
