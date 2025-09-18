<template>
    <div
        :class="[
              'relative rounded-2xl overflow-hidden text-white p-6 flex flex-col justify-between',
              size === 'large'
                ? 'w-full md:w-[633px] h-[460px]'
                : 'w-full md:w-[340.5px] h-[460px]'
            ]"
        :style="{ backgroundImage: `url(${image})` }"
        class="bg-cover bg-center px-[20px] py-[10px]"
    >
        <div
            v-if="size === 'small'"
            class="absolute z-[1] inset-0 bg-black/70"
        ></div>
        <div class="relative z-[2] h-[226px] py-[18px] flex flex-col justify-between">
            <div class="flex justify-between items-center">
                <!-- Title -->
                <h2 class="text-5xl font-bold mb-4">{{ title }}</h2>
                <!-- Arrow Button -->
                <button v-if="size === 'large'" class="absolute top-6 right-6 w-12 h-12 rounded-full bg-white text-black flex items-center justify-center">
                    →
                </button>
            </div>
            <!-- Description -->
            <p class="text-sm leading-relaxed mb-6">{{ description }}</p>
        </div>
        <!-- Footer Tag -->
        <div class="h-[89px] py-[22.5px] border-t-[1px]">
            <div class="relative z-[2] h-[44px] w-[129px] flex items-center justify-between gap-2 bg-white/20 rounded-full">
                <div class="absolute flex justify-center items-center h-[44px] w-[44px] rounded-full bg-[#C7C7C7] top-0 left-0" v-html="IconFlower"></div>
                <div class="absolute left-[48px] text-sm font-medium">{{ tag }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {IconFlower} from "../assets/icons.js";

defineProps({
    size: { type: String, default: "small" },
    image: String,
    title: String,
    description: String,
    tag: String,
});
</script>
