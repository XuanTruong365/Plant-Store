<template>
    <div class="relative rounded-xl overflow-hidden bg-gray-100 h-[240px] sm:h-[300px] md:h-[371px]">
        <!-- Image -->
        <img
            v-if="image"
            :src="image"
            alt=""
            class="w-full h-full object-cover"
        />
        <div
            v-else
            class="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500"
        >
            No image
        </div>

        <!-- Active button -->
        <div class="absolute top-0 right-0 m-2 sm:m-3 md:m-4 flex items-center justify-between">
            <button
                class="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center"
                :class="active ? 'bg-white border' : 'bg-black border border-white text-white'"
            >
        <span class="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 flex justify-center items-center"
              v-html="active ? IconNextDark : IconNext"></span>
            </button>
        </div>

        <!-- Content -->
        <div
            class="absolute left-0 text-white"
            :class="active
        ? 'bottom-0 m-2 sm:m-3 md:m-[10px] px-3 sm:px-4 md:px-[24px] py-2 sm:py-3 md:py-[20px] bg-[rgb(225,225,225,0.2)] rounded-[12px] sm:rounded-[16px] md:rounded-[24px] flex flex-col gap-2 sm:gap-3 md:gap-[25px]'
        : 'bottom-[40px] sm:bottom-[60px] md:bottom-[77px] left-2 sm:left-3 md:left-[20px]'"
        >
            <span class="font-bold text-2xl sm:text-4xl md:text-[70px] leading-tight">{{ title }}</span>
            <span v-if="active" class="text-xs sm:text-sm md:text-base">{{ desc }}</span>
        </div>
    </div>
</template>

<script setup>
import { IconNext, IconNextDark } from "../../assets/icons.js";

defineProps({
    title: String,
    desc: String,
    image: String,
    active: Boolean
});
</script>
