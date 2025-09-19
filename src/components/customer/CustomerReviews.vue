<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/autoplay';
import "swiper/css/pagination";
import { Autoplay, Pagination } from 'swiper/modules';
import ProductCard from "../products/ProductCardHome.vue";

// Fake data cảm nhận khách hàng
const testimonials = [
    {
        id: 1,
        name: "Nguyễn Văn A",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        text: "Dịch vụ rất tuyệt vời, cây cảnh giao nhanh và đóng gói cẩn thận. Sân thượng nhà tôi xanh mát hơn hẳn 🌿."
    },
    {
        id: 2,
        name: "Trần Thị B",
        avatar: "https://randomuser.me/api/portraits/women/45.jpg",
        text: "Tư vấn rất nhiệt tình, mình chọn được loại cây hợp phong thủy. Chắc chắn sẽ quay lại lần nữa!"
    },
    {
        id: 3,
        name: "Lê Văn C",
        avatar: "https://randomuser.me/api/portraits/men/56.jpg",
        text: "Chất lượng cây rất tốt, khỏe mạnh. Giao hàng đúng hẹn, nhân viên thân thiện 👍."
    },
    {
        id: 4,
        name: "Phạm Thị D",
        avatar: "https://randomuser.me/api/portraits/women/12.jpg",
        text: "Mình đặt cây trầu bà, nhìn thực tế còn đẹp hơn hình, rất hài lòng!"
    },
];
</script>

<template>
    <section class="bg-green-50 py-12">
        <div class="container mx-auto px-6">
            <h2 class="text-3xl font-bold text-center text-green-700 mb-8">
                🌱 Cảm nhận từ khách hàng
            </h2>

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
                    v-for="item in testimonials" :key="item.id"
                    class="!h-auto"
                >
                    <div class="bg-white rounded-2xl p-6 flex flex-col items-center text-center h-full">
                        <img
                            :src="item.avatar"
                            :alt="item.name"
                            class="w-20 h-20 rounded-full object-cover mb-4 border-4 border-green-100"
                        />
                        <p class="text-gray-700 italic mb-4">"{{ item.text }}"</p>
                        <h3 class="font-semibold text-green-700">{{ item.name }}</h3>
                    </div>
                </SwiperSlide>
            </Swiper>
            <button
                class="btn-prev absolute top-1/2 left-0 -translate-y-1/2 bg-white rounded-full shadow p-2 hover:bg-green-100 transition"
            >
                <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" stroke-width="2"
                     viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
                </svg>
            </button>

            <button
                class="btn-next absolute top-1/2 right-0 -translate-y-1/2 bg-white rounded-full shadow p-2 hover:bg-green-100 transition"
            >
                <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" stroke-width="2"
                     viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
                </svg>
            </button>
        </div>
    </section>
</template>

<style scoped>
/* Tuỳ chỉnh pagination dots */
.swiper-pagination-bullet {
    background-color: #16a34a; /* xanh lá Tailwind */
    opacity: 0.5;
}
.swiper-pagination-bullet-active {
    opacity: 1;
}
</style>
