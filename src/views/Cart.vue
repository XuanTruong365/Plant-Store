<template>
    <BannerTop title="Shopping Cart" :image="ImageBanner" />
    <div class="container mx-auto px-4 pb-8 pt-4">
        <!-- Cart Items -->
        <div class="bg-white rounded-lg shadow p-6 mb-8">
            <h2 class="text-2xl font-bold text-center mb-6 border-b pb-2">
                Your Cart Items
            </h2>

            <!-- Cart Table -->
            <div class="divide-y">
                <div
                        v-for="(item, index) in cartItems"
                        :key="item.id"
                        class="flex items-center py-4"
                >
                    <span class="w-8 text-gray-500">{{ index + 1 }}</span>
                    <img
                            :src="item.image"
                            class="w-16 h-16 object-cover rounded-md border"
                    />
                    <div class="flex-1 ml-4">
                        <h3 class="font-semibold">{{ item.name }}</h3>
                        <button
                                class="text-red-500 text-sm hover:underline"
                                @click="removeItem(item.id)"
                        >
                            Remove
                        </button>
                    </div>
                    <span class="w-24 text-center">${{ item.price }}</span>
                    <!-- Quantity -->
                    <div class="flex items-center border rounded-md mx-4">
                        <button
                                class="px-2"
                                @click="updateQuantity(item.id, item.quantity - 1)"
                        >
                            -
                        </button>
                        <input
                                type="text"
                                v-model="item.quantity"
                                class="w-10 text-center border-x"
                        />
                        <button
                                class="px-2"
                                @click="updateQuantity(item.id, item.quantity + 1)"
                        >
                            +
                        </button>
                    </div>
                    <span class="w-24 text-right font-semibold"
                    >${{ item.price * item.quantity }}</span
                    >
                </div>
            </div>

            <!-- Subtotal -->
            <div class="relative text-right mt-6">
                <p>Subtotal: <span class="font-semibold">${{ subtotal }}</span></p>
                <p>Shipping: <span class="font-semibold">Flat Rate</span></p>
                <p class=" text-lg font-bold mt-2">
                    Total: <span>${{ subtotal }}</span>
                </p>
                <div class="absolute top-[52px] right-0 w-[200px] border border-t"></div>
            </div>
        </div>

        <!-- Billing & Shipping -->
        <div class="bg-white rounded-lg shadow p-6 mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Billing Details -->
            <div>
                <h3 class="text-xl font-bold mb-4">Billing Details</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input class="input" placeholder="First Name*" />
                    <input class="input" placeholder="Last Name*" />
                    <input class="input" placeholder="Phone*" />
                    <input class="input" placeholder="Email*" />
                    <input class="input col-span-2" placeholder="Street Address*" />
                    <input class="input" placeholder="City*" />
                    <input class="input" placeholder="State*" />
                    <input class="input" placeholder="Pincode*" />
                    <input class="input" placeholder="Country*" />
                </div>
            </div>

            <!-- Shipping -->
            <div>
                <h3 class="text-xl font-bold mb-4">Ship to a Different Address</h3>
                <textarea
                        class="input w-full h-32"
                        placeholder="Order notes (optional)"
                ></textarea>
            </div>
        </div>

        <!-- Payment -->
        <div class="bg-white rounded-lg shadow p-6 flex flex-col md:flex-row items-center justify-between">
            <div>
                <label class="flex items-center space-x-2">
                    <input type="radio" checked />
                    <span>Pay by Razorpay Cards, NetBanking, Wallet & UPI</span>
                </label>
                <p class="text-xs text-gray-500 mt-2">
                    Your personal data will be used to process your order and support
                    your experience throughout this website.
                </p>
            </div>
            <button
                    class="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 mt-4 md:mt-0"
            >
                Place Order
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import ImageBanner from "../assets/images/img-banner5.jpeg";
import BannerTop from "../components/BannerTop.vue";

const cartItems = ref([
    { id: 1, name: "Plant Name", price: 99, quantity: 1, image: "https://picsum.photos/100/100?1" },
    { id: 2, name: "Plant Name", price: 99, quantity: 1, image: "https://picsum.photos/100/100?2" },
]);

const subtotal = computed(() =>
    cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
);

const removeItem = (id) => {
    cartItems.value = cartItems.value.filter((item) => item.id !== id);
};

const updateQuantity = (id, newQty) => {
    if (newQty < 1) return;
    const item = cartItems.value.find((i) => i.id === id);
    if (item) item.quantity = newQty;
};
</script>

<style scoped>
.input {
    @apply w-full border rounded-md px-3 py-2 text-sm;
}
</style>
