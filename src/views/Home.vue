<template>
    <div class="plants-container">
        <section class="bg-white">
            <BannerPage />

            <Container>
                <div class="flex flex-col md:flex-row justify-between gap-4 md:gap-0 md:h-[166px]">
                    <!-- Left section -->
                    <div class="plants-people w-full md:w-1/2 flex flex-col md:flex-row gap-4 md:gap-10">
                        <!-- Text -->
                        <div class="w-full md:w-[292px] h-auto md:h-[166px] flex flex-col justify-between gap-2 md:gap-4 mb-4 md:mb-20 text-center md:text-left">
                            <div class="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[44px] font-bold leading-snug md:leading-[44px]">
                                Plants for the People
                            </div>
                            <div class="text-[12px] sm:text-[13px] md:text-[13px] leading-snug">
                                We want our visitors to be inspired to get their hands dirty
                            </div>
                        </div>
                        <!-- Image -->
                        <div class="plants-healthy flex items-center justify-center">
                            <img :src="ImagePlantsPeople" class="max-w-[150px] sm:max-w-[200px] md:max-w-none" />
                        </div>
                    </div>

                    <!-- Right section -->
                    <div class="w-full md:w-1/2 text-[14px] sm:text-[16px] md:text-lg lg:text-3xl font-bold leading-snug text-center md:text-left mt-4 md:mt-0">
                        Each plant is cared
                        <span
                            class="inline-flex items-center justify-center align-middle w-[40px] h-[20px] sm:w-[50px] sm:h-[28px] md:w-[178px] md:h-[64px] rounded-full bg-cover bg-center mx-1 md:mx-2"
                            :style="{ backgroundImage: `url(${ImageInlineText})` }"
                        ></span>
                        for by our horticultural experts, so they are as happy and healthy as they get.
                    </div>
                </div>
            </Container>

            <Container padding-class="px-4 sm:px-[55px] py-0">
                <PlantCategory />
            </Container>

            <Container padding-class="px-4 sm:px-[55px] py-0">
                <div class="new-plants py-12 sm:py-[60px] md:py-[125px]">
                    <div class="w-full pb-6 sm:pb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
                        <div class="font-bold tracking-tighter text-[32px] sm:text-[40px] md:text-[125px] leading-none text-center sm:text-left">
                            New Plants
                        </div>
                        <div class="text-[14px] sm:text-[16px] md:text-[18px] sm:w-full md:w-1/2 text-center sm:text-left">
                            Bring nature inside and shop our big selections of fresh indoor plants including Instagram-worthy houseplants, pet-friendly plants, orchids and one-of-a-kind rare plants.
                        </div>
                    </div>
                    <Product />
                </div>
            </Container>

            <Container padding-class="px-4 sm:px-[55px] py-0">
                <IndoorCollection />
            </Container>

            <PlantIntroduction />

            <Container padding-class="px-4 sm:px-[55px] py-[30px] sm:py-[55px]">
                <FaqItem
                    v-for="(item, i) in faqs"
                    :key="i"
                    :title="item.title"
                    :desc="item.desc"
                    :icon="item.icon"
                />
            </Container>
        </section>
    </div>
</template>

<script setup>
import {ref} from "vue";
import Container from "../components/layout/Container.vue";
import ImageInlineText from '../assets/images/image-inline-text.png';
import ImagePlantsPeople from '../assets/images/Vector.png';
import {IconDown, IconDownRight, IconTopRight} from "../assets/icons.js";
import {useRoute} from "vue-router";
import Product from "../components/products/Product.vue";
import IndoorCollection from "../components/Indoor/IndoorCollection.vue";
import FaqItem from "../components/FaqItem.vue";
import PlantIntroduction from "../components/PlantIntroduction.vue";
import PlantCategory from "../components/PlantCategory.vue";
import BannerPage from "../components/BannerPage.vue";

const route = useRoute()

const faqs = [
    { title: "Ordering for Delivery?", icon: IconDownRight },
    { title: "Potting Services", desc: "We offer potting on in store purchases or you are welcome to bring in your own and we can pot them for you: There is a fee depending one what supplies are used. Visit us or call us for more details.", icon: IconTopRight },
    { title: "Do we Ship Plants?", icon: IconDownRight },
    { title: "Ordering for Pick up?", icon: IconDownRight },
]
</script>