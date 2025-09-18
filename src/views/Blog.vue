<script setup>
import { ref } from "vue";
import ImageBanner from "../assets/images/img-banner3.jpeg";
import BannerTop from "../components/BannerTop.vue";

// Fake data demo
const blogs = ref([
    {
        id: 1,
        title: "Top 10 Indoor Plants to Purify Your Air",
        excerpt:
            "Discover the best indoor plants that not only beautify your space but also improve air quality...",
        image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80",
        author: "Jane Doe",
        date: "Sep 15, 2025",
    },
    {
        id: 2,
        title: "How to Take Care of Your Succulents",
        excerpt:
            "Succulents are easy to care for, but they still need proper light and watering. Here's a complete guide...",
        image: "https://images.unsplash.com/photo-1524594154908-edd226dc9aa0?auto=format&fit=crop&w=800&q=80",
        author: "John Smith",
        date: "Sep 12, 2025",
    },
    {
        id: 3,
        title: "The Benefits of Having Plants in Your Workspace",
        excerpt:
            "Boost productivity, reduce stress, and create a healthier environment with these amazing plants...",
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
        author: "Lisa Green",
        date: "Sep 10, 2025",
    },
    {
        id: 4,
        title: "Top 10 Indoor Plants to Purify Your Air",
        excerpt:
            "Discover the best indoor plants that not only beautify your space but also improve air quality...",
        image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80",
        author: "Jane Doe",
        date: "Sep 15, 2025",
    },
    {
        id: 5,
        title: "How to Take Care of Your Succulents",
        excerpt:
            "Succulents are easy to care for, but they still need proper light and watering. Here's a complete guide...",
        image: "https://images.unsplash.com/photo-1524594154908-edd226dc9aa0?auto=format&fit=crop&w=800&q=80",
        author: "John Smith",
        date: "Sep 12, 2025",
    },
    {
        id: 6,
        title: "The Benefits of Having Plants in Your Workspace",
        excerpt:
            "Boost productivity, reduce stress, and create a healthier environment with these amazing plants...",
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
        author: "Lisa Green",
        date: "Sep 10, 2025",
    },
]);
</script>

<template>
    <div class="min-h-screen bg-gray-50">
        <!-- Hero section -->
        <BannerTop title="Blog" :image="ImageBanner" />

        <!-- Blog list -->
        <section class="container mx-auto px-6 py-12">
            <div class="grid md:grid-cols-3 gap-8">
                <div
                        v-for="post in blogs"
                        :key="post.id"
                        class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
                >
                    <img :src="post.image" alt="Blog image" class="w-full h-52 object-cover" />
                    <div class="p-6 flex flex-col">
                        <h2 class="text-xl font-semibold text-gray-800 mb-2 hover:text-green-600 cursor-pointer">
                            {{ post.title }}
                        </h2>
                        <p class="text-gray-600 text-sm flex-1">{{ post.excerpt }}</p>
                        <div class="mt-4 flex items-center justify-between text-sm text-gray-500">
                            <span>✍️ {{ post.author }}</span>
                            <span>{{ post.date }}</span>
                        </div>
                        <a
                                :href="`/blog/${post.id}`"
                                class="mt-4 inline-block text-green-600 font-medium hover:underline"
                        >
                            Read more →
                        </a>
                    </div>
                </div>
            </div>

            <!-- Pagination -->
            <div class="mt-12 flex justify-center space-x-2">
                <button class="px-4 py-2 rounded-lg bg-white border shadow hover:bg-green-50">Prev</button>
                <button class="px-4 py-2 rounded-lg bg-green-600 text-white shadow hover:bg-green-700">1</button>
                <button class="px-4 py-2 rounded-lg bg-white border shadow hover:bg-green-50">2</button>
                <button class="px-4 py-2 rounded-lg bg-white border shadow hover:bg-green-50">3</button>
                <button class="px-4 py-2 rounded-lg bg-white border shadow hover:bg-green-50">Next</button>
            </div>
        </section>
    </div>
</template>

<style scoped>

</style>
