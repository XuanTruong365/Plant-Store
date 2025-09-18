<template>
    <div class="flex flex-col gap-[24px]">
        <!-- Title -->
        <div class="h-auto md:h-[145px] py-4 md:py-[28px] flex justify-center items-center">
            <div class="font-bold text-2xl sm:text-5xl md:text-[125px] text-center">Indoor Collection</div>
        </div>

        <!-- Cards -->
        <div
            v-for="(row, rowIndex) in rows"
            :key="rowIndex"
            class="flex flex-col md:flex-row gap-5 w-full"
        >
            <template v-if="rowIndex % 2 === 0">
                <IndoorCard
                    v-for="(product, index) in row"
                    :key="index"
                    :active="product.active"
                    :title="product.title"
                    :desc="product.desc"
                    :image="product.image"
                    :class="index === 0
            ? 'w-full md:w-[785px]'
            : 'w-full md:w-[525px]'"
                />
            </template>

            <template v-else>
                <IndoorCard
                    v-for="(product, index) in row"
                    :key="index"
                    :active="product.active"
                    :title="product.title"
                    :desc="product.desc"
                    :image="product.image"
                    :class="index === 0
            ? 'w-full md:w-[525px]'
            : 'w-full md:w-[785px]'"
                />
            </template>
        </div>
    </div>
</template>

<script setup>
import Img1 from "../../assets/images/banner-indoor1.jpeg";
import Img2 from "../../assets/images/banner-indoor2.jpeg";
import Img3 from "../../assets/images/banner-indoor3.jpeg";
import Img4 from "../../assets/images/banner-indoor4.jpeg";
import IndoorCard from "./IndoorCard.vue";

const rows = [
    [
        {
            title: "Big Plant",
            active: true,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.",
            image: Img1
        },
        { title: "Calathea", active: false, image: Img2 }
    ],
    [
        { title: "Air Purifying", active: false, image: Img3 },
        { title: "Low Light Tolerant", active: false, image: Img4 }
    ]
];
</script>
