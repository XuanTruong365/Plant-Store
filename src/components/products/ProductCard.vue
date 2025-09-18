<template>
    <div
            class="bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 hover:scale-[1.02] p-6 flex flex-col items-center text-center cursor-pointer"
            @click="goToDetail"
    >
        <img
                :src="product.image"
                alt=""
                class="h-48 object-contain mb-4 transition-transform duration-300 hover:scale-110"
        />
        <h3 class="font-semibold text-lg mb-1 text-gray-800">{{ product.name }}</h3>
        <p class="text-gray-500 mb-4 text-sm">$ {{ product.price }}</p>
        <button
                class="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold transition"
                @click.stop="goToDetail"
        >
            Buy Now
        </button>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const props = defineProps({
    product: {
        type: Object,
        required: true,
    },
});

const router = useRouter();

const goToDetail = () => {
    router.push({ name: "ProductDetail", params: { id: props.product.id } });
};

</script>
