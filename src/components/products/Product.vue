<template>
    <div class="relative w-full">
        <!-- Swiper -->
        <Swiper
            :modules="[Pagination, Autoplay]"
            :slides-per-view="1"
            :space-between="12"
            :breakpoints="{
        640: { slidesPerView: 2, spaceBetween: 16 },
        1024: { slidesPerView: 3, spaceBetween: 20 }
      }"
            :loop="false"
            :autoplay="{ delay: 3000, disableOnInteraction: false }"
            :pagination="{ clickable: true, el: '.custom-pagination' }"
            class="w-full"
        >
            <SwiperSlide
                v-for="(product, index) in products"
                :key="index"
                class="!h-auto"
            >
                <ProductCard
                    :image="product.image"
                    :title="product.title"
                    :description="product.description"
                    :price="product.price"
                />
            </SwiperSlide>
        </Swiper>

        <!-- Custom Pagination -->
        <div
            class="custom-pagination flex justify-center mt-6"
        ></div>
    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

import ProductCard from "./ProductCardHome.vue";
import ImgProduct1 from "../../assets/images/product-img1.png";
import ImgProduct2 from "../../assets/images/product-img2.png";
import ImgProduct3 from "../../assets/images/product-img3.png";

const products = [
    {
        image: ImgProduct1,
        title: "Peperomia Plants",
        description: "Moist but well-drained",
        price: "₹122,056",
    },
    {
        image: ImgProduct2,
        title: "Fiddle-Leaf Fig",
        description: "Moist but well-drained",
        price: "₹162,056",
    },
    {
        image: ImgProduct3,
        title: "Calathea Orbifolia",
        description: "Moist but well-drained",
        price: "₹102,056",
    },
    {
        image: ImgProduct1,
        title: "Snake Plant",
        description: "Low maintenance",
        price: "₹82,500",
    },
    {
        image: ImgProduct2,
        title: "Monstera Deliciosa",
        description: "Tropical vibes",
        price: "₹142,700",
    },
    {
        image: ImgProduct3,
        title: "ZZ Plant",
        description: "Thrives in low light",
        price: "₹99,900",
    },
];
</script>

<style scoped>
.custom-pagination .swiper-pagination-bullet {
    background: #000 !important;
    opacity: 0.3;
    transition: all 0.3s ease;
    width: 10px;
    height: 10px;
}
.custom-pagination .swiper-pagination-bullet-active {
    opacity: 1;
    transform: scale(1.3);
}
</style>
