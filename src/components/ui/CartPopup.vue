<template>
    <div ref="cartRef" class="relative">
        <!-- Nút giỏ hàng -->
        <button @click="toggleCart"
                class="w-10 h-10 md:w-[60px] md:h-[60px] flex items-center justify-center border rounded-full hover:bg-white/10 transition"
                v-html="IconCart">
        </button>

        <!-- Số lượng trong giỏ -->
        <span v-if="cartCount > 0"
              class="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-md">
      {{ cartCount }}
    </span>

        <!-- Popup giỏ hàng -->
        <transition name="fade">
            <div v-if="showCart"
                 class="absolute top-full right-0 mt-2 w-72 md:w-80 bg-white rounded-xl shadow-xl p-4 z-50 border border-gray-200">

                <!-- Header -->
                <h2 class="text-lg font-semibold mb-2 border-b border-gray-200 pb-2">Giỏ Hàng</h2>

                <!-- Danh sách sản phẩm -->
                <ul class="divide-y divide-gray-200 max-h-64 overflow-y-auto mb-4">
                    <li v-for="(item, index) in cartItems" :key="index" class="py-2 flex items-center gap-3">
                        <!-- Ảnh sản phẩm -->
                        <img :src="item.image" alt="Ảnh sản phẩm" class="w-12 h-12 rounded object-cover">

                        <!-- Tên + Giá -->
                        <div class="flex-1 flex justify-between items-center">
                            <span class="text-sm font-medium">{{ item.name }}</span>
                            <span class="text-sm font-semibold">{{ item.price }}</span>
                        </div>
                    </li>
                </ul>

                <!-- Nút thanh toán -->
                <button @click="handleCheckout" class="w-full bg-green-600 text-white rounded-lg py-2 hover:bg-green-700 transition mb-2">
                    Thanh Toán
                </button>

                <!-- Link tiếp tục mua sắm -->
                <p class="text-center text-sm">
                    <a href="/shop" class="text-green-600 hover:underline">Tiếp tục mua sắm</a>
                </p>
            </div>
        </transition>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { IconCart } from "../../assets/icons.js";
import imgProd1 from '../../assets/images/product-img1.png';
import imgProd2 from '../../assets/images/product-img2.png';
import { useRouter } from "vue-router";

const router = useRouter();

// Demo dữ liệu giỏ hàng (thêm image)
const cartItems = ref([
    { name: "Product 1", price: "$10", image: imgProd1 },
    { name: "Product 2", price: "$25", image: imgProd2 },
]);

const cartCount = ref(cartItems.value.length);
const showCart = ref(false);
const cartRef = ref(null);

const toggleCart = () => {
    showCart.value = !showCart.value;
};

// Đóng popup khi click ra ngoài
const handleClickOutside = (e) => {
    if (cartRef.value && !cartRef.value.contains(e.target)) {
        showCart.value = false;
    }
};

const handleCheckout =  () => {
    showCart.value = false;
    router.push('/cart');
};

onMounted(() => {
    document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside);
});
</script>

<style>
.fade-enter-active, .fade-leave-active {
    transition: all 0.2s ease;
}
.fade-enter-from, .fade-leave-to {
    opacity: 0;
    transform: translateY(-5px);
}
.fade-enter-to, .fade-leave-from {
    opacity: 1;
    transform: translateY(0);
}
</style>
