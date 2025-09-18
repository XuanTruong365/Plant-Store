<!-- FaqItem.vue -->
<template>
    <div
        class="flex flex-col justify-between border border-black rounded-2xl
           px-[20px] py-[24px] sm:px-[40px] sm:py-[44px] mb-[20px] sm:mb-[39px]"
    >
        <!-- Nội dung -->
        <div class="flex justify-between items-center flex-row">
      <span
          class="font-bold text-2xl sm:text-5xl tracking-[-0.05px]"
      >
        {{ title }}
      </span>

            <!-- Icon -->
            <button
                class="w-[48px] h-[48px] sm:w-[92px] sm:h-[92px]
               flex items-center justify-center border border-black rounded-full
               transition-all duration-300 hover:scale-110 active:rotate-90"
            >
                <span v-html="icon" class="text-xl sm:text-3xl"></span>
            </button>
        </div>

        <span
            v-if="desc"
            class="w-full sm:w-[85%] text-base sm:text-2xl text-black tracking-[-0.05px] mt-[10px]"
        >
      {{ desc }}
    </span>
    </div>
</template>

<script setup>
defineProps({
    title: String,
    desc: { type: String, default: null },
    icon: String
})
</script>
