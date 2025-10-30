<template>
    <div class="relative inline-block">
        <!-- Nút mở Search -->
        <button @click="toggleSearch"
                class="w-10 h-10 md:w-[60px] md:h-[60px] flex items-center justify-center border hover:bg-white/10 rounded-full"
                v-html="SearchIcon">
        </button>

        <!-- Popup Search -->
        <transition name="fade">
            <div v-if="showSearch" class="absolute w-full max-w-sm min-w-[450px]">
                <div class="relative mt-2">
                    <div class="absolute top-1 left-1 flex items-center">
                        <!-- Dropdown chọn loại -->
                        <button @click="toggleDropdown"
                                class="rounded border border-transparent py-1 px-1.5 text-center flex items-center text-sm transition-all text-white bg-green-600">
                            <span class="overflow-hidden">{{ selectedCategory }}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 stroke-width="1.5" stroke="white" class="h-4 w-4 ml-1">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
                            </svg>
                        </button>

                        <div class="h-6 border-l border-slate-200 ml-1"></div>

                        <!-- Menu dropdown -->
                        <ul v-show="dropdownOpen"
                            class="absolute left-0 mt-10 min-w-[150px] bg-white border border-slate-200 rounded-md shadow-lg z-10">
                            <li v-for="option in categories" :key="option"
                                class="px-4 py-2 text-slate-600 hover:bg-slate-50 text-sm cursor-pointer"
                                @click="selectCategory(option)">
                                {{ option }}
                            </li>
                        </ul>
                    </div>

                    <!-- Input tìm kiếm -->
                    <input type="text"
                           v-model="query"
                           class="w-full bg-transparent placeholder:text-white text-white text-sm border border-slate-200 rounded-md px-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                           placeholder="Nhập từ khóa..." />

                    <!-- Nút Search -->
                    <button @click="submitSearch"
                            class="absolute top-1 right-1 flex items-center rounded bg-green-800 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-green-700 active:bg-green-700 disabled:pointer-events-none disabled:opacity-50">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 mr-1.5">
                            <path fill-rule="evenodd"
                                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                  clip-rule="evenodd"/>
                        </svg>
                        Tìm kiếm
                    </button>
                </div>
            </div>
        </transition>
    </div>
</template>

<script setup>
import { ref } from "vue";
import {SearchIcon} from "../../assets/icons.js";

const showSearch = ref(false);
const dropdownOpen = ref(false);
const query = ref("");
const categories = ["Chủ đề", "Plugin", "Snippet"];
const selectedCategory = ref(categories[0]);

const toggleSearch = () => {
    showSearch.value = !showSearch.value;
};

const toggleDropdown = () => {
    dropdownOpen.value = !dropdownOpen.value;
};

const selectCategory = (option) => {
    selectedCategory.value = option;
    dropdownOpen.value = false;
};

const submitSearch = () => {
    console.log("Tìm kiếm:", query.value, "trong", selectedCategory.value);
};
</script>
