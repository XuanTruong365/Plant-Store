<template>
    <router-link
            v-if="to"
            :to="to"
            class="h-[59px] px-[40px] py-[12.5px] rounded-full border border-black flex justify-center text-center items-center gap-2 transition-colors"
            :class="[
      active ? 'bg-black text-white' : 'bg-transparent text-black hover:bg-black/10'
    ]"
    >
        <slot />
    </router-link>

    <button
            v-else
            class="h-[59px] px-6 py-2 rounded-full border border-black flex items-center gap-2 transition-colors"
            :class="[
      active ? 'bg-black text-white' : 'bg-transparent text-black hover:bg-black/10'
    ]"
    >
        <slot />
    </button>
</template>

<script setup>
defineProps({
    to: String,
    active: Boolean,
})
</script>
