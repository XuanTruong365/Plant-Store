<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import ImageBanner from "../../assets/images/img-banner2.jpeg";
import BannerTop from "../../components/BannerTop.vue";
import CustomerReviews from "../../components/customer/CustomerReviews.vue";

const route = useRoute();
const blogId = route.params.id;

const blog = ref(null);

// Fake data (thường bạn sẽ fetch từ API)
const blogs = {
    id: 1,
    title: "Sân thượng đẹp thích hợp trồng cây gì?",
    banner: ImageBanner,
    author: "Cây Cảnh Hoàng Anh",
    date: "Sep 19, 2025",
    contentBlocks: [
        { type: "paragraph", text: "Nếu nhà bạn đang có một sân thượng đẹp mà vẫn chưa biết nên tận dụng như thế nào, thì bạn nên tham khảo các loại cây cảnh phù hợp để đặt trong sân thượng nhằm tạo ra không gian thật tươi mát..." },
        { type: "heading", text: "1. Lợi ích thiết thực của việc trồng cây trên sân thượng đẹp" },
        { type: "paragraph", text: "Cải thiện không khí và môi trường sống..." },
        { type: "paragraph", text: "Tạo không gian xanh và giảm bớt căng thẳng..." },
        { type: "paragraph", text: "Tăng tính thẩm mỹ cho căn nhà..." },
        { type: "heading", text: "2. Những loại cây thích hợp trồng trên sân thượng đẹp" },
        { type: "subheading", text: "Những loại cây thân gỗ" },
        { type: "paragraph", text: "Cây trúc cần câu là lựa chọn phổ biến..." },
        { type: "image", src: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80", alt: "Cây trúc cần câu" },
        { type: "paragraph", text: "Cây phát tài núi..." },
        { type: "image", src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80", alt: "Cây phát tài núi" },
        { type: "subheading", text: "Những loại cây thân leo" },
        { type: "paragraph", text: "Cây hoa dừa cạn..." },
        { type: "paragraph", text: "Cây hồng leo..." },
        { type: "paragraph", text: "Cây cúc tần Ấn Độ..." },
        { type: "paragraph", text: "Cây trầu bà..." },
        { type: "heading", text: "3. Lưu ý khi trồng cây trên sân thượng đẹp" },
        { type: "list", items: ["Xử lý chỗ thoát nước hiệu quả khi mưa nhiều", "Lựa chọn cây phù hợp với điều kiện trên sân thượng", "Đảm bảo cây được nhận đủ ánh nắng"] },
        { type: "paragraph", text: "Bài viết trên là một số gợi ý về các loại cây thích hợp trồng trên sân thượng đẹp..." },
    ],
    relatedBlogs: [
        {
            id: 2,
            title: "Blog cây xanh, Cảnh quan sân vườn, Kinh nghiệm chăm cây",
            excerpt: "Nếu nhà bạn đang có một sân thượng đẹp mà vẫn chưa biết nên tận dụng như thế nào...",
            image: "https://images.unsplash.com/photo-1524594154908-edd226dc9aa0?auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 3,
            title: "Sân thượng đẹp thích hợp trồng cây gì?",
            excerpt: "Cây cảnh phù hợp để đặt trong sân thượng nhằm tạo ra không gian thật tươi mát...",
            image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80"
        }
    ]
}

const hotBlogs = [
    { id: 4, title: "10 loại cây lọc không khí", image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80" },
    { id: 5, title: "Cây dễ chăm cho người bận rộn", image: "https://images.unsplash.com/photo-1524594154908-edd226dc9aa0?auto=format&fit=crop&w=800&q=80" },
    { id: 6, title: "Cây hợp mệnh Kim", image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80" },
];

onMounted(() => {
    if (blogs.id == blogId) {
        blog.value = blogs;
    } else {
        blog.value = null;
    }
});

</script>

<template>
    <div class="min-h-screen bg-gray-50 pt-[154px]">
        <section v-if="blog" class="container mx-auto px-6 py-12 space-y-6">
            <!-- Banner -->
            <img :src="blog.banner" alt="Banner" class="w-full h-80 object-cover rounded-2xl mb-6" />

            <h1 class="text-3xl font-bold text-gray-800 mb-4">{{ blog.title }}</h1>
            <div class="flex items-center text-gray-500 text-sm mb-6">
                <span class="mr-4">✍️ {{ blog.author }}</span>
                <span>{{ blog.date }}</span>
            </div>

            <!-- Blog content blocks -->
            <div class="space-y-6">
                <template v-for="(block, index) in blog.contentBlocks" :key="index">
                    <p v-if="block.type === 'paragraph'" class="text-gray-700 text-lg leading-relaxed">{{ block.text }}</p>
                    <h2 v-else-if="block.type === 'heading'" class="text-2xl font-semibold text-gray-800 mt-6">{{ block.text }}</h2>
                    <h3 v-else-if="block.type === 'subheading'" class="text-xl font-semibold text-gray-700 mt-4">{{ block.text }}</h3>
                    <blockquote v-else-if="block.type === 'quote'" class="border-l-4 border-green-600 pl-4 italic text-gray-600">{{ block.text }}</blockquote>
                    <img v-else-if="block.type === 'image'" :src="block.src" :alt="block.alt" class="w-full rounded-xl object-cover my-4" />
                    <ul v-else-if="block.type === 'list'" class="list-disc list-inside text-gray-700">
                        <li v-for="(item, idx) in block.items" :key="idx">{{ item }}</li>
                    </ul>
                </template>
            </div>

            <!-- Info contact -->
            <div class="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg mt-12">
                <h2 class="text-2xl font-bold text-green-700 mb-4">Bạn cần tư vấn thêm về cây cảnh? 🌱</h2>
                <p class="text-gray-700 mb-4">Hãy liên hệ với chúng tôi để được hỗ trợ và tư vấn miễn phí về các loại cây cảnh phù hợp với không gian của bạn.</p>
                <router-link :to="`/about`" class="inline-block bg-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-700 transition">
                    Liên hệ ngay
                </router-link>
            </div>

            <!-- Related blogs -->
            <div class="mt-12">
                <h2 class="text-2xl font-bold mb-4">Bài viết liên quan</h2>
                <div class="grid md:grid-cols-3 gap-6">
                    <div v-for="related in blog.relatedBlogs" :key="related.id" class="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
                        <img :src="related.image" alt="Related blog" class="w-full h-48 object-cover" />
                        <div class="p-4">
                            <h3 class="font-semibold text-gray-800 mb-2">{{ related.title }}</h3>
                            <p class="text-gray-600 text-sm">{{ related.excerpt }}</p>
                            <router-link :to="`/blog/${related.id}`" class="text-green-600 mt-2 inline-block hover:underline">Xem thêm →</router-link>
                        </div>
                    </div>
                </div>
            </div>


        </section>

        <section v-else class="container mx-auto px-6 py-12">
            <div class="text-center mb-10">
                <h2 class="text-3xl font-bold text-gray-800 mb-4">Bài viết không tồn tại 🧐</h2>
                <p class="text-gray-600">Có thể bạn sẽ quan tâm những bài viết nổi bật dưới đây:</p>
            </div>
            <div class="grid md:grid-cols-3 gap-6">
                <div v-for="hot in hotBlogs" :key="hot.id" class="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
                    <img :src="hot.image" class="w-full h-48 object-cover" />
                    <div class="p-4">
                        <h3 class="font-semibold text-gray-800 mb-2">{{ hot.title }}</h3>
                        <router-link :to="`/blog/${hot.id}`" class="text-green-600 mt-2 inline-block hover:underline">Đọc ngay →</router-link>
                    </div>
                </div>
            </div>
        </section>

        <CustomerReviews />

    </div>
</template>

