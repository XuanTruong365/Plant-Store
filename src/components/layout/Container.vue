<template>
    <div :class="['w-full', paddingClass]">
        <slot />
    </div>
</template>

<script setup>
defineProps({
    paddingClass: { type: String, default: "px-[55px] py-[62px]" }
});
</script>
