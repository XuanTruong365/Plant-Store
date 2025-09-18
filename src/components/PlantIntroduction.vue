<template>
    <Container padding-class="px-4 sm:px-8 md:px-[55px] py-12 sm:py-16 md:py-[182px]">
        <div class="flex flex-col justify-center items-center text-center px-2 sm:px-4">
            <!-- Title -->
            <span
                    class="block font-bold tracking-tighter leading-tight sm:leading-[100px] md:leading-[130px]
               text-3xl sm:text-5xl md:text-[109px]"
            >
        Quality Plants and Curated Goods
      </span>

            <!-- Subtitle -->
            <span
                    class="block mt-4 sm:mt-6 text-sm sm:text-base md:text-[18px] leading-relaxed sm:leading-[26px] md:leading-[28px]
               max-w-full md:max-w-[940px]"
            >
        We offer a carefully curated selection of indoor and outdoor plants,
        hand crafted home goods that put quality ahead of quantity, and living art
        made right here in the shop: terrariums, landscapes, arrangements, vessels, and holders.
      </span>
        </div>

        <!-- Video -->
        <div class="relative w-full max-w-[807px] aspect-video mx-auto mt-8 sm:mt-12 rounded-2xl overflow-hidden">
            <video
                    ref="videoRef"
                    muted
                    loop
                    playsinline
                    class="w-full h-full object-cover rounded-2xl"
            >
                <source :src="GreenMini" type="video/mp4" />
                Trình duyệt của bạn không hỗ trợ video.
            </video>

            <!-- Play/Pause Overlay -->
            <button
                    @click="togglePlay"
                    class="absolute inset-0 flex items-center justify-center"
            >
                <div
                        class="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-black/50 flex items-center justify-center
                 hover:bg-black/70 transition duration-300 shadow-lg backdrop-blur-sm"
                >
                    <!-- Play Icon -->
                    <svg
                            v-if="!isPlaying"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="white"
                            viewBox="0 0 24 24"
                            class="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 ml-1"
                    >
                        <path d="M8 5v14l11-7z" />
                    </svg>

                    <!-- Pause Icon -->
                    <svg
                            v-else
                            xmlns="http://www.w3.org/2000/svg"
                            fill="white"
                            viewBox="0 0 24 24"
                            class="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10"
                    >
                        <path d="M6 19h4V5H6zm8-14v14h4V5h-4z" />
                    </svg>
                </div>
            </button>
        </div>
    </Container>
</template>

<script setup>
import { ref } from "vue";
import GreenMini from "../assets/videos/mini-green.mp4";
import Container from "./layout/Container.vue";

const videoRef = ref(null);
const isPlaying = ref(false);

const togglePlay = () => {
    const video = videoRef.value;
    if (!video) return;

    if (isPlaying.value) {
        video.pause();
    } else {
        video.play();
    }
    isPlaying.value = !isPlaying.value;
};
</script>
