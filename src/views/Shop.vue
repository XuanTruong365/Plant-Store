<template>
    <div class="min-h-screen bg-[#f5f9f5]">
        <!-- Banner -->
        <BannerTop :image="ImageBanner" title="Cửa hàng" />

        <!-- Nội dung -->
        <div class="container mx-auto px-4 md:px-10 py-10 flex flex-col md:flex-row gap-8">
            <!-- Sidebar -->
            <aside
                class="w-full md:w-1/4 bg-white rounded-2xl shadow-lg p-6 space-y-8 sticky top-10 h-fit"
            >
                <!-- Danh mục -->
                <div>
                    <h2 class="text-xl font-bold mb-4 text-gray-800">Danh mục</h2>
                    <ul class="space-y-3 text-gray-700 text-sm">
                        <li class="hover:text-green-700 cursor-pointer">🌱 Cây đang giảm giá</li>
                        <li>
                            <details class="group">
                                <summary class="cursor-pointer font-medium hover:text-green-700">
                                    🏡 Cây trong nhà
                                </summary>
                                <ul class="ml-4 mt-2 space-y-1 text-gray-600">
                                    <li class="hover:text-green-600 cursor-pointer">Dương xỉ Thỏ</li>
                                    <li class="hover:text-green-600 cursor-pointer">Cây cọ Kentia</li>
                                    <li class="hover:text-green-600 cursor-pointer">Cây Lưỡi Hổ</li>
                                    <li class="hover:text-green-600 cursor-pointer">Khác</li>
                                </ul>
                            </details>
                        </li>
                        <li class="hover:text-green-700 cursor-pointer">☀️ Cây ngoài trời</li>
                        <li class="font-medium text-green-600 cursor-pointer">
                            💊 Cây thuốc
                            <span class="ml-1 text-xs bg-green-100 px-2 py-0.5 rounded">Giảm 50%</span>
                        </li>
                    </ul>
                </div>

                <!-- Giá -->
                <div>
                    <h2 class="text-xl font-bold mb-3">Giá</h2>
                    <div class="relative">
                        <select
                            v-model="priceFilter"
                            class="w-full border border-gray-300 rounded-xl px-4 py-2 appearance-none bg-white focus:ring-2 focus:ring-green-600 focus:border-green-600 text-gray-700 font-medium cursor-pointer"
                        >
                            <option value="">Tất cả mức giá</option>
                            <option value="0-100">0$ - 100$</option>
                            <option value="100-300">100$ - 300$</option>
                            <option value="300-600">300$ - 600$</option>
                            <option value="600-1000">600$ - 1000$</option>
                        </select>
                        <!-- Icon mũi tên -->
                        <div class="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-500">
                            ▼
                        </div>
                    </div>
                </div>

                <!-- Bao gồm -->
                <div>
                    <h2 class="text-xl font-bold mb-3">Bao gồm</h2>
                    <div class="space-y-2 text-sm text-gray-700">
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="include" class="accent-green-600" /> Chậu cây
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="include" class="accent-green-600" /> Combo
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="include" class="accent-green-600" /> Hoa
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="include" class="accent-green-600" /> Dịch vụ
                        </label>
                    </div>
                </div>
            </aside>

            <!-- Lưới sản phẩm -->
            <main class="flex-1">
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div
                        v-for="(product, index) in filteredProducts"
                        :key="index"
                    >
                        <ProductCard :product="product" />
                    </div>
                </div>

                <!-- Xem thêm -->
                <div class="text-center mt-10">
                    <button
                        class="px-6 py-2 bg-green-100 text-green-700 rounded-full hover:bg-green-200 transition font-medium"
                    >
                        Xem thêm ▼
                    </button>
                </div>
            </main>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import ProductCard from "../components/products/ProductCard.vue";
import ImageBanner from "../assets/images/img-banner1.jpeg";
import BannerTop from "../components/BannerTop.vue";

const products = [
    {id: 1, name: "Bể cây Ngọc", price: 80, discount: 25, image: "https://i.ibb.co/jZbLZ6w/plant1.png" },
    {id: 2, name: "Cây Ficus Benjamina", price: 150, discount: 25, image: "https://i.ibb.co/jZbLZ6w/plant1.png" },
    {id: 3, name: "Cây Syngonium", price: 320, discount: 25, image: "https://i.ibb.co/jZbLZ6w/plant1.png" },
    {id: 4, name: "Cây Chlorophytum Lemon", price: 500, discount: 25, image: "https://i.ibb.co/jZbLZ6w/plant1.png" },
    {id: 5, name: "Cây Nha Đam Rauhii", price: 720, discount: 25, image: "https://i.ibb.co/jZbLZ6w/plant1.png" },
    {id: 6, name: "Cây Cọ Areca", price: 950, discount: 25, image: "https://i.ibb.co/jZbLZ6w/plant1.png" },
];

const priceFilter = ref("");

const filteredProducts = computed(() => {
    if (!priceFilter.value) return products;

    const [min, max] = priceFilter.value.split("-").map(Number);
    return products.filter(
        (p) => p.price >= min && p.price <= max
    );
});

</script>

<style scoped>

</style>
