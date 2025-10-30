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
                <ButtonDark to="/" :active="route.path === '/'" >Cây Ngoài Trời</ButtonDark>
                <ButtonDark to="" :active="route.path === ''" >Cây Trong Nhà</ButtonDark>
                <ButtonDark to="" :active="route.path === ''" >Chậu Hoa</ButtonDark>
                <ButtonDark to="" :active="route.path === ''" >Cây Trong Chậu</ButtonDark>
            </div>
            <div class="mt-4 md:mt-0">
                <ButtonDark to="" :active="route.path === ''" >Xem Tất Cả</ButtonDark>
            </div>
        </div>

        <!-- Cards -->
        <div class="flex flex-col md:flex-row gap-6 mt-10">
            <!-- Big Card -->
            <PlantCard
                size="large"
                :image="Outdoor1"
                title="Cây Thân Thiện Với Thú Cưng"
                description="Chúng tôi cung cấp các loại cây an toàn cho thú cưng, giúp không gian sống xanh, lành mạnh và dễ chăm sóc."
                tag="Họ Hồ Tiêu"
                class="w-full md:w-auto"
            />

            <!-- Small Cards -->
            <div class="flex flex-col md:flex-row gap-6 w-full md:w-auto">
                <PlantCard
                    size="small"
                    :image="Outdoor2"
                    title="Hoa Lan"
                    description="Hoa lan là loài cây ưa chuộng nhất. Khám phá các loại hoa lan mới và các vật dụng chăm sóc hoa lan trong bộ sưu tập này."
                    tag="Họ Ráy"
                    class="w-full md:w-auto"
                />
                <PlantCard
                    size="small"
                    :image="Outdoor3"
                    title="Cây Bó Xương/Succulent"
                    description="Tất cả các loại succulent đều là xương rồng, nhưng không phải xương rồng nào cũng là succulent. Chúng đều là cây dễ chăm sóc, phù hợp trong nhà."
                    tag="Họ Xương Rồng"
                    class="w-full md:w-auto"
                />
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>