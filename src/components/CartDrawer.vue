<template>
    <transition name="slide" class="z-[100]">
        <div
                v-if="cart.isOpen"
                class="fixed top-0 right-0 w-80 h-full bg-white shadow-xl z-50 flex flex-col"
        >
            <!-- Header -->
            <div class="flex justify-between items-center p-4 border-b">
                <h2 class="font-bold text-lg">Your Cart</h2>
                <button @click="cart.toggleDrawer(false)" class="text-gray-500">✕</button>
            </div>

            <!-- Items -->
            <div class="flex-1 overflow-y-auto p-4">
                <div v-for="item in cart.items" :key="item.id" class="flex gap-3 mb-4">
                    <img :src="item.image" class="w-16 h-16 rounded object-cover" />
                    <div class="flex-1">
                        <p class="font-medium">{{ item.name }}</p>
                        <p class="text-sm text-gray-500">x{{ item.quantity }}</p>
                        <p class="text-green-600 font-semibold">${{ item.price }}</p>
                    </div>
                    <button @click="cart.removeItem(item.id)" class="text-red-500">🗑</button>
                </div>
            </div>

            <!-- Footer -->
            <div class="p-4 border-t">
                <div class="flex justify-between font-semibold mb-3">
                    <span>Total:</span>
                    <span>${{ cart.totalPrice }}</span>
                </div>
                <button
                        @click="goToCart"
                        class="w-full bg-green-600 text-white py-2 rounded-lg mb-2"
                >
                    Go to Cart
                </button>
                <button
                        class="w-full bg-gray-200 py-2 rounded-lg"
                >
                    Checkout
                </button>
            </div>
        </div>
    </transition>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useCartStore } from "../stores/cart";

const cart = useCartStore();
const router = useRouter();

const goToCart = () => {
    cart.toggleDrawer(false);
    router.push("/cart");
};
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
    transition: transform 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
    transform: translateX(100%);
}
</style>
