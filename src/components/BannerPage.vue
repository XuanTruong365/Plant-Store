<template>
  <!-- PC layout -->
  <div class="relative top-0 z-0 min-h-[80vh] p-4 hidden md:block">
    <div class="relative w-full h-full">
      <!-- Background banner -->
      <img :src="BannerImage" class="w-full h-full object-cover" />

      <!-- Variant Image + Content -->
      <div
          class="absolute w-[75%] top-[25%] left-1/2 -translate-x-1/2 max-w-screen-xl"
      >
        <div class="relative w-full h-full flex flex-col items-start">
          <img :src="VariantImage" class="w-full h-auto object-contain" />

          <!-- Title -->
          <div
              class="absolute top-0 text-white font-bold text-[clamp(2rem,6vw,5rem)]"
          >
            Plantique
          </div>

          <!-- Desc -->
          <div
              class="absolute bottom-[-20px] left-[20%] text-[clamp(14px,1.2vw,20px)] leading-snug text-white max-w-[60%]"
          >
            We're your online houseplant destination. We offer a wide range of
            houseplants and accessories shipped directly from our greenhouse to
            yours!
          </div>
        </div>
      </div>

      <!-- Stats card -->
      <div
          class="absolute bottom-6 left-6 flex flex-row gap-4 w-[clamp(280px,25vw,400px)]"
      >
        <div
            class="flex-1 bg-[rgba(255,255,255,0.4)] border border-[#979797] rounded-2xl p-5 flex flex-col gap-2"
        >
          <div class="text-white text-[clamp(1.2rem,2vw,2rem)] font-bold">
            100+ Plants
          </div>
          <span class="text-white text-[clamp(12px,1vw,16px)]">
            We want our visitors to be inspired to get their hands dirty
          </span>
        </div>
        <div
            class="w-[clamp(80px,8vw,120px)] flex flex-col justify-center items-center bg-[rgba(255,255,255,0.4)] border border-[#979797] rounded-2xl p-4 relative"
        >
          <div class="absolute top-4"><img :src="Frame38" /></div>
          <div class="absolute z-10"><img :src="Frame37" /></div>
          <div class="absolute bottom-4"><img :src="Frame36" /></div>
        </div>
      </div>

      <!-- Scroll icon -->
      <div
          class="absolute bottom-[130px] right-[30px] w-[60px] h-[60px] p-[18px] border rounded-full flex items-center justify-center"
          v-html="IconDown"
      ></div>

      <!-- CTA button -->
      <div class="absolute bottom-0 right-0 mb-4 mr-4">
        <button
            class="px-8 py-4 text-[clamp(1rem,1.2vw,1.5rem)] font-bold text-black border border-black rounded-2xl w-[clamp(220px,20vw,360px)]"
        >
          Shop Tropical Plants
        </button>
      </div>
    </div>
  </div>

  <!-- Mobile/Tablet layout (giữ nguyên) -->
  <div class="block md:hidden relative w-full bg-green-600 p-4">
    <img
        :src="BannerImage"
        class="w-full h-auto object-cover rounded-lg"
    />

    <div class="mt-4 text-center">
      <div class="text-3xl font-bold text-black mb-2">Plantique</div>
      <div class="text-sm text-black leading-snug">
        Your online houseplant destination
      </div>
    </div>

    <div class="mt-4 flex flex-col items-center gap-4">
      <div
          class="bg-[rgba(255,255,255,0.1)] rounded-lg p-4 w-full text-center"
      >
        <div class="text-xl font-semibold text-white">100+ Plants</div>
        <span class="text-sm text-white">Inspire your green thumb!</span>
      </div>

      <div class="flex gap-2">
        <img :src="Frame38" class="w-10 h-10" />
        <img :src="Frame37" class="w-10 h-10" />
        <img :src="Frame36" class="w-10 h-10" />
      </div>
    </div>

    <div class="mt-6 flex justify-center">
      <button
          class="w-full max-w-xs h-14 text-lg font-bold text-black border border-black rounded-lg"
      >
        Shop Tropical Plants
      </button>
    </div>
  </div>
</template>

<script setup>
import BannerImage from "../assets/images/banner-image.png";
import VariantImage from "../assets/images/Variant2.png";
import Frame38 from "../assets/images/Frame 38.png";
import Frame37 from "../assets/images/Frame 37.png";
import Frame36 from "../assets/images/Frame 36.png";
import {IconDown} from "../assets/icons.js";
import Button from "./ui/Button.vue";
</script>