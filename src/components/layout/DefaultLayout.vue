<template>
    <div class="flex flex-col min-h-screen bg-white text-gray-900">
        <Header />
        <main class="flex-1">
            <RouterView />
        </main>
        <Footer />
    </div>
</template>

<script setup>
import Header from "../Header.vue";
import Footer from "../Footer.vue";
</script>
