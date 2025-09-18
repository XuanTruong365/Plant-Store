<template>
  <!-- PC layout (giữ nguyên) -->
    <div class="relative top-0 z-0 h-[904px] p-[10px] hidden md:block">
        <div class="relative">
            <img :src="BannerImage" />
            <div class="absolute w-[75%] top-[25%] left-[50%] -translate-x-1/2">
                <div class="relative w-full h-full">
                    <img :src="VariantImage" />
                    <div class="absolute top-0 h-[63px] text-white font-bold text-5xl">Plantique</div>
                    <div class="absolute bottom-[-16px] left-[23%] text-[20px] leading-[20px] text-white">
                        We're your online houseplant destination. We offer a wide range of houseplants
                        <br /> and accessories shipped directly from our (greenhouse to yours!
                    </div>
                </div>
            </div>
            <div class="w-[384px] h-[193px] text-center absolute bottom-[20px] left-[15px] flex flex-row">
                <div class="bg-[rgba(255,255,255,0.4)] border border-[#979797] w-[272px] rounded-[20px] p-[20px] flex flex-col gap-2">
                    <div class=" text-white text-3xl">100+ Plants</div>
                    <span class="text-white text-[16px]">We want our visitors to be inspire to get their hands dirty</span>
                </div>
                <div class="relative w-[112px] flex flex-col justify-center items-center bg-[rgba(255,255,255,0.4)] border border-[#979797] rounded-[20px] p-[20px]">
                    <div class="absolute top-[20px] rounded"><img :src="Frame38" /></div>
                    <div class="absolute z-10 rounded"><img :src="Frame37" /></div>
                    <div class="absolute bottom-[20px] rounded"><img :src="Frame36" /></div>
                </div>
            </div>
            <div class="absolute bottom-[130px] right-[30px] w-[60px] h-[60px] p-[18px] border rounded-full flex items-center justify-center" v-html="IconDown"></div>
            <div class="absolute bottom-[0px] right-[0px]">
                <button class="w-[367px] h-[99px] text-2xl font-bold text-black border border-black rounded-[32px] flex justify-center items-center text-center">
                    Shop Tropical Plants
                </button>
            </div>
        </div>
    </div>

  <!-- Mobile/Tablet layout -->
    <div class="block md:hidden relative w-full bg-green-600 p-4">
        <img :src="BannerImage" class="w-full h-auto object-cover rounded-lg" />

        <div class="mt-4 text-center">
            <div class="text-3xl font-bold text-black mb-2">Plantique</div>
            <div class="text-sm text-black leading-snug">
                Your online houseplant destination
            </div>
        </div>

        <div class="mt-4 flex flex-col items-center gap-4">
            <div class="bg-[rgba(255,255,255,0.1)] rounded-lg p-4 w-full text-center">
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
            <button class="w-full max-w-xs h-14 text-lg font-bold text-black border border-black rounded-lg">
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