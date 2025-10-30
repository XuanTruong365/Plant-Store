<script setup>
import ImgFooter from '../assets/images/banner-footer.jpeg';
import { Logo } from "../assets/icons.js";
</script>

<template>
    <footer
        class="relative h-[500px] md:h-[775px] m-[10px] rounded-[20px] md:rounded-[35px] flex justify-center items-center overflow-hidden"
    >
        <!-- Background -->
        <img
            class="w-full h-full object-cover"
            :src="ImgFooter"
            alt="Nền footer"
        />

        <!-- Content -->
        <div
            class="absolute top-[30px] md:top-[60px] flex flex-col justify-center items-center gap-[20px] md:gap-[40px] px-4 text-center max-w-[90%] md:max-w-[900px]"
        >
            <!-- Logo + gradient lines -->
            <div class="relative flex items-center justify-center w-fit">
                <div
                    class="logo-footer bg-[rgba(255,255,255,0.4)] z-10 w-[60px] h-[60px] md:w-[88px] md:h-[88px] flex justify-center items-center rounded-full border border-white"
                >
                    <span v-html="Logo"></span>
                </div>
            </div>

            <!-- Text -->
            <h2
                class="text-white text-xl sm:text-3xl md:text-[93px] font-semibold tracking-tighter leading-tight"
            >
                Tham Gia Cộng Đồng!
            </h2>
            <p
                class="w-full max-w-[90%] md:max-w-[640px] text-white text-xs sm:text-sm md:text-[24px] tracking-tight"
            >
                Đăng ký nhận bản tin từ The Forager để nhận mẹo chăm cây hàng tháng, cập nhật cửa hàng,
                khuyến mãi và nhiều thông tin khác
            </p>
        </div>

        <!-- Socials -->
        <div
            class="absolute bottom-0 w-[95%] md:w-[97%] m-[10px] md:m-[20px] px-[20px] md:px-[164px] py-[20px] md:py-[40px] rounded-[16px] md:rounded-[24px] bg-white flex flex-col gap-[20px] md:gap-[40px] items-center"
        >
            <!-- Buttons -->
            <div class="border border-black rounded-[30px] md:rounded-[50px] flex flex-wrap justify-center w-full">
                <button
                    v-for="name in ['Instagram','Twitter','Linkedin','Whatsapp','Facebook']"
                    :key="name"
                    class="h-[48px] md:h-[74px] px-4 sm:px-6 md:px-10 flex items-center justify-center border border-black rounded-[30px] md:rounded-[50px] font-semibold sm:font-bold text-sm sm:text-lg md:text-2xl underline text-black cursor-pointer transition-colors duration-300 hover:bg-green-500 hover:text-white hover:border-transparent"
                >
                    {{ name }}
                </button>
            </div>

            <!-- Divider -->
            <div class="footer-wrap w-[90%] md:w-[80%] h-[1px] md:h-[2px]"></div>
            <span class="text-xs sm:text-sm text-gray-600">©2025, Bảo lưu mọi quyền.</span>
        </div>
    </footer>
</template>

<style scoped>
.logo-footer::before,
.logo-footer::after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100px;
    height: 1px;
}

@media (min-width: 768px) {
    .logo-footer::before,
    .logo-footer::after {
        width: 400px;
        height: 2px;
    }
}

.logo-footer::before {
    left: 100%;
    margin-left: 6px;
    background: linear-gradient(to right, rgba(255, 255, 255, 0.8), transparent);
}
.logo-footer::after {
    right: 100%;
    margin-right: 6px;
    background: linear-gradient(to left, rgba(255, 255, 255, 0.8), transparent);
}
.footer-wrap {
    background: linear-gradient(to left, transparent, rgba(0, 0, 0, 0.8), transparent);
}
</style>
