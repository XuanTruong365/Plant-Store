<template>
    <router-link
            v-if="to"
            :to="to"
            class="w-[168px] h-[60px] rounded-full border border-white flex justify-center text-center items-center gap-2 transition-colors"
            :class="[
      active ? 'bg-white text-black' : 'bg-transparent text-white hover:bg-white/10'
    ]"
    >
        <slot />
    </router-link>

    <button
            v-else
            class="px-6 py-2 rounded-full border border-white flex items-center gap-2 transition-colors"
            :class="[
      active ? 'bg-white text-black' : 'bg-transparent text-white hover:bg-white/10'
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
