<script setup>
defineProps({
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: false,
    }
});
</script>

<template>
    <section
            class="relative text-white w-full h-[250px] md:h-[450px] bg-no-repeat bg-cover flex items-center justify-center"
            :style="{ backgroundImage: `url(${image})` }"
    >
        <!-- Overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>

        <!-- Text -->
        <h1 class="relative text-5xl md:text-7xl font-extrabold text-white tracking-widest drop-shadow-xl animate-fade-in">{{ title }}</h1>
    </section>
</template>

<style scoped>
@keyframes fade-in {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
    animation: fade-in 1s ease-out forwards;
}
</style>