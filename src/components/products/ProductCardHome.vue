<template>
    <div
        class="bg-white overflow-hidden p-[10px] flex-shrink-0 rounded-2xl shadow-sm
           hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
        <!-- Image wrapper -->
        <div class="relative w-full group">
            <img
                :src="image"
                alt="product"
                class="w-full h-full object-cover rounded-2xl transform group-hover:scale-105 transition duration-500"
            />

            <!-- Favorite Button -->
            <button
                class="absolute top-3 left-3 w-10 h-10 flex items-center justify-center
               bg-white/70 backdrop-blur rounded-full opacity-80
               hover:opacity-100 transition"
            >
                <span v-html="IconHeart" class="w-5 h-5"></span>
            </button>
        </div>

        <!-- Content -->
        <div class="p-4 sm:p-5">
            <h3
                class="text-lg sm:text-xl font-semibold mb-1 group-hover:text-green-600 transition"
            >
                {{ title }}
            </h3>
            <p class="text-sm sm:text-base text-gray-500 mb-3">{{ description }}</p>

            <div class="flex items-center justify-between">
                <span class="font-bold text-base sm:text-lg">{{ price }}</span>
                <button
                    class="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black
                 flex items-center justify-center text-white
                 hover:bg-green-600 transition"
                >
                    <span v-html="IconNext" class="w-4 h-4"></span>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { IconHeart, IconNext } from "../../assets/icons.js";

defineProps({
    image: String,
    title: String,
    description: String,
    price: String,
});
</script>
