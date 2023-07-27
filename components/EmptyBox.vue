<script setup>
defineProps({
  bgColor: {
    type: String,
    required: true,
  },
})
</script>

<template>
    <div class="rounded-[7px] h-full" :style="{backgroundColor: bgColor}"></div>
</template>
