<template>
  <div
      class="relative rounded-xl overflow-hidden bg-gray-100 h-[240px] sm:h-[300px] md:h-[371px] flex"
  >
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
    <div
        class="absolute top-0 right-0 m-2 sm:m-3 md:m-4 flex items-center justify-between"
    >
      <button
          class="rounded-full flex items-center justify-center"
          :class="
          active
            ? 'bg-white border'
            : 'bg-black border border-white text-white'
        "
          style="width: clamp(40px, 5vw, 64px); height: clamp(40px, 5vw, 64px);"
      >
        <span
            class="flex justify-center items-center"
            style="width: clamp(20px, 3vw, 32px); height: clamp(20px, 3vw, 32px);"
            v-html="active ? IconNextDark : IconNext"
        ></span>
      </button>
    </div>

    <!-- Content -->
    <div
        class="absolute left-0 text-white"
        :class="
        active
          ? 'bottom-0 m-2 sm:m-3 md:m-[10px] px-3 sm:px-4 md:px-[24px] py-2 sm:py-3 md:py-[20px] bg-[rgb(225,225,225,0.2)] rounded-[12px] sm:rounded-[16px] md:rounded-[24px] flex flex-col gap-2 sm:gap-3 md:gap-[25px]'
          : 'bottom-[40px] sm:bottom-[60px] md:bottom-[77px] left-2 sm:left-3 md:left-[20px]'
      "
    >
      <span
          class="font-bold leading-tight line-clamp-2 text-[clamp(1.5rem,5vw,4.5rem)]"
      >
        {{ title }}
      </span>
      <span
          v-if="active"
          class="text-xs sm:text-sm md:text-base line-clamp-3"
      >
        {{ desc }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { IconNext, IconNextDark } from "../../assets/icons.js";

defineProps({
  title: String,
  desc: String,
  image: String,
  active: Boolean,
});
</script>
