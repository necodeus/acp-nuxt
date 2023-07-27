<script setup>
import Sign from './Sign.vue'
import Logotype from './Logotype.vue'

defineProps({
    primaryColor: {
        type: String,
        required: true,
    },
    secondaryColor: {
        type: String,
        required: true,
    },
})
</script>

<template>
    <Sign style="margin-left: 32px" width="38" height="38" :color="primaryColor" />
    <Logotype style="margin-left: 32px; margin-bottom: 6px;" width="105" height="28" :color="secondaryColor" />
</template>
