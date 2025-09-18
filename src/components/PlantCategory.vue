<script setup>
import Outdoor1 from "../assets/images/image-plant-pet.jpeg";
import Outdoor2 from "../assets/images/img-categories3.jpeg";
import Outdoor3 from "../assets/images/image-categories1.jpeg";
import PlantCard from "./PlantCard.vue";
import ButtonDark from "./ui/ButtonDark.vue";
import {useRoute} from "vue-router";

const route = useRoute()

</script>

<template>
    <div>
        <!-- Tabs -->
        <div class="flex flex-wrap justify-between items-center">
            <div class="flex flex-wrap gap-2">
                <ButtonDark to="/" :active="route.path === '/'" >Outdoor Plant</ButtonDark>
                <ButtonDark to="" :active="route.path === ''" >Indoor Plant</ButtonDark>
                <ButtonDark to="" :active="route.path === ''" >Flower Pot</ButtonDark>
                <ButtonDark to="" :active="route.path === ''" >Potted Plant</ButtonDark>
            </div>
            <div class="mt-4 md:mt-0">
                <ButtonDark to="" :active="route.path === ''" >See All</ButtonDark>
            </div>
        </div>

        <!-- Cards -->
        <div class="flex flex-col md:flex-row gap-6 mt-10">
            <!-- Big Card -->
            <PlantCard
                    size="large"
                    :image="Outdoor1"
                    title="Pet Friendly Plants"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis."
                    tag="Piperaceae"
                    class="w-full md:w-auto"
            />

            <!-- Small Cards -->
            <div class="flex flex-col md:flex-row gap-6 w-full md:w-auto">
                <PlantCard
                        size="small"
                        :image="Outdoor2"
                        title="Orchids"
                        description="Orchids are easily everyones Favorite flowering plant, Find new orchids and orchids success items in this collection"
                        tag="Araceae"
                        class="w-full md:w-auto"
                />
                <PlantCard
                        size="small"
                        :image="Outdoor3"
                        title="Succulents"
                        description="All Succulents are cacti, but not all cacti are succulents. Both make low maintence house pants."
                        tag="Moraceae"
                        class="w-full md:w-auto"
                />
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>