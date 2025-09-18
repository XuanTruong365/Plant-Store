<template>
  <div class="flex flex-col gap-6 px-4">
    <!-- Title -->
    <div class="h-auto py-6 flex justify-center items-center">
      <div class="font-bold text-center text-[clamp(2rem,10vw,8rem)]">
        Indoor Collection
      </div>
    </div>

    <!-- Cards -->
    <div
        v-for="(row, rowIndex) in rows"
        :key="rowIndex"
        class="flex flex-col md:flex-row gap-5 w-full"
    >
      <IndoorCard
          v-for="(product, index) in row"
          :key="index"
          :active="product.active"
          :title="product.title"
          :desc="product.desc"
          :image="product.image"
          :class="rowIndex % 2 === 0
            ? (index === 0 ? 'flex-1 basis-2/3' : 'flex-1 basis-1/3')
            : (index === 0 ? 'flex-1 basis-1/3' : 'flex-1 basis-2/3')"
      />
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
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Sed lobortis orci elementum egestas lobortis.",
      image: Img1,
    },
    { title: "Calathea", active: false, image: Img2 },
  ],
  [
    { title: "Air Purifying", active: false, image: Img3 },
    { title: "Low Light Tolerant", active: false, image: Img4 },
  ],
];
</script>
