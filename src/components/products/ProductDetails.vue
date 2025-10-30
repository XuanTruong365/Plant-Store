<template>
    <div class="min-h-screen">
        <BannerTop :image="ImageBanner" />

        <!-- Hero -->
        <section class="container mx-auto my-8 px-4 flex flex-col lg:flex-row gap-10">
            <!-- Thư viện hình ảnh -->
            <div class="w-full max-w-[500px] mx-auto lg:mx-0">
                <Swiper
                    class="rounded-2xl shadow-md"
                    :modules="[Navigation, Pagination, Thumbs]"
                    :navigation="true"
                    :pagination="{ clickable: true }"
                    :thumbs="{ swiper: thumbsSwiper }"
                >
                    <SwiperSlide v-for="(img, idx) in product.images" :key="idx">
                        <img :src="img" class="w-full h-[400px] object-cover rounded-2xl" />
                    </SwiperSlide>
                </Swiper>

                <!-- Ảnh nhỏ -->
                <Swiper
                    class="mt-4"
                    :modules="[Thumbs]"
                    slides-per-view="4"
                    space-between="12"
                    watch-slides-progress
                    @swiper="setThumbsSwiper"
                >
                    <SwiperSlide v-for="(img, idx) in product.images" :key="'thumb-' + idx">
                        <img
                            :src="img"
                            class="w-full h-20 object-cover rounded-lg cursor-pointer border-2"
                            :class="mainImage === img ? 'border-green-600' : 'border-gray-200'"
                            @click="mainImage = img"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>

            <!-- Thông tin sản phẩm -->
            <div class="flex flex-col gap-6">
                <h1 class="text-3xl font-bold text-gray-800">{{ product.name }}</h1>

                <!-- Giá -->
                <div class="flex items-center gap-3">
                    <span class="text-2xl font-bold text-green-700">${{ product.price }}</span>
                    <span v-if="product.oldPrice" class="line-through text-gray-400">${{ product.oldPrice }}</span>
                    <span v-if="product.discount" class="text-red-500 font-semibold">-{{ product.discount }}%</span>
                </div>

                <p class="text-gray-600">{{ product.description }}</p>

                <!-- Số lượng -->
                <div class="flex items-center gap-4">
                    <label class="font-semibold">Số lượng:</label>
                    <div class="flex items-center border rounded-lg overflow-hidden">
                        <button @click="decreaseQty" class="px-3 py-1 bg-gray-100 hover:bg-gray-200">-</button>
                        <input type="number" v-model="quantity" class="w-12 text-center outline-none" />
                        <button @click="increaseQty" class="px-3 py-1 bg-gray-100 hover:bg-gray-200">+</button>
                    </div>
                </div>

                <!-- Tùy chọn chậu cây -->
                <div>
                    <label class="font-semibold">Bao gồm chậu cây:</label>
                    <select v-model="planter" class="ml-2 border rounded-lg px-3 py-2">
                        <option>Có</option>
                        <option>Không</option>
                    </select>
                </div>

                <!-- Nút thêm vào giỏ -->
                <button
                    @click="addToCart"
                    class="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl"
                >
                    Thêm vào giỏ
                </button>

                <CartDrawer />

                <!-- Giao hàng -->
                <div class="space-y-2">
                    <label class="font-semibold">Giao hàng</label>
                    <div class="flex gap-3">
                        <input v-model="pincode" type="text" placeholder="Nhập mã bưu điện" class="flex-1 border rounded-lg px-3 py-2" />
                        <button @click="checkDelivery" class="px-4 bg-gray-800 text-white rounded-lg hover:bg-black">Kiểm tra</button>
                    </div>
                    <p v-if="deliveryMessage" class="text-sm text-gray-500">{{ deliveryMessage }}</p>
                </div>
            </div>
        </section>

        <!-- Tabs -->
        <section
            class="px-4 py-4 mt-10"
            :style="{ backgroundImage: `url(${Background})`, backgroundColor: 'rgba(5, 150, 105, 1)' }"
        >
            <div class="container mx-auto">
                <div class="flex gap-6">
                    <button
                        v-for="tab in tabs"
                        :key="tab"
                        @click="activeTab = tab"
                        :class="[
              'pb-3 font-semibold transition',
              activeTab === tab ? 'text-white border-b-2 border-white' : 'text-white'
            ]"
                    >
                        {{ tab }}
                    </button>
                </div>
                <div class="mt-6 bg-white rounded-xl shadow p-6">
                    <p v-if="activeTab === 'Care Guide'">{{ product.careGuide }}</p>
                    <p v-if="activeTab === 'Plant Bio'">{{ product.bio }}</p>
                    <p v-if="activeTab === 'Reviews'">⭐️⭐️⭐️⭐️☆ (24 đánh giá)</p>
                </div>
            </div>
        </section>

        <!-- Sản phẩm liên quan -->
        <section class="container mx-auto px-4 py-12">
            <h2 class="text-2xl font-bold text-center mb-8">Bạn cũng có thể thích...</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <div v-for="(related, idx) in relatedProducts" :key="idx">
                    <ProductCard :product="related" />
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

import ProductCard from "./ProductCard.vue";
import Background from "../../assets/images/Background.png";
import CartDrawer from "../CartDrawer.vue";
import { useCartStore } from "../../stores/cart.js";
import ImageBanner from "../../assets/images/img-banner6.jpeg";
import BannerTop from "../BannerTop.vue";

const products = [
    {
        id: 1,
        name: "Jade Terrarium",
        price: 80,
        discount: 25,
        description: "Beautiful indoor plant...",
        images: [
            "https://i.ibb.co/jZbLZ6w/plant1.png",
            "https://i.ibb.co/jZbLZ6w/plant1.png"
        ],
        careGuide: "Water weekly...",
        bio: "Native to Asia..."
    },
    {
        id: 2,
        name: "Ficus Benjamina",
        price: 150,
        discount: 15,
        description: "Classic decorative plant",
        images: [
            "https://i.ibb.co/jZbLZ6w/plant1.png",
            "https://i.ibb.co/jZbLZ6w/plant1.png"
        ],
        careGuide: "Keep in bright light...",
        bio: "Common indoor tree..."
    }
];

const relatedProducts = [
    { name: "Adenium Plant", price: 350, discount: 25, image: "https://i.ibb.co/jZbLZ6w/plant1.png" },
    { name: "Ficus Twilight", price: 350, discount: 25, image: "https://i.ibb.co/jZbLZ6w/plant1.png" },
    { name: "Rhoeo Plant", price: 350, discount: 25, image: "https://i.ibb.co/jZbLZ6w/plant1.png" },
    { name: "Ctenanthe Burle", price: 350, discount: 25, image: "https://i.ibb.co/jZbLZ6w/plant1.png" }
];

// ✅ Lấy id từ route param
const route = useRoute();
const productId = Number(route.params.id);

// ✅ Lấy đúng product theo id
const product = computed(() => products.find((p) => p.id === productId) || products[0]);

// State
const mainImage = ref(product.value.images[0]);
const quantity = ref(1);
const planter = ref("Yes");
const pincode = ref("");
const deliveryMessage = ref("");
const tabs = ["Care Guide", "Plant Bio", "Reviews"];
const activeTab = ref("Care Guide");

// Swiper thumbs
const thumbsSwiper = ref(null);
const setThumbsSwiper = (swiper) => {
    thumbsSwiper.value = swiper;
};

// Quantity
const increaseQty = () => quantity.value++;
const decreaseQty = () => (quantity.value > 1 ? quantity.value-- : 1);

// Delivery check
const checkDelivery = () => {
    deliveryMessage.value = pincode.value
        ? `Delivery available for ${pincode.value}. 5–7 working days.`
        : "Please enter a valid pincode.";
};

// Cart
const cart = useCartStore();
const addToCart = () => {
    cart.addItem({
        id: product.value.id,
        name: product.value.name,
        price: product.value.price,
        image: product.value.images[0],
        quantity: quantity.value,
        planter: planter.value
    });
};
</script>
