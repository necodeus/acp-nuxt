<script setup>
const props = defineProps({
    current: {
        type: Number,
        required: true,
    },
    pages: {
        type: Number,
        required: true,
    },
    withSearch: {
        type: Boolean,
        required: false,
        default: false,
    },
    add: {
        type: String,
        required: false,
        default: null,
    },
})
</script>

<template>
    <div class="flex p-[5px_8px]">
        <div class="flex p-[5px_7px] items-center rounded-[7px] bg-[#211B33]">
            <NuxtLink
                :to="`?page=${page}`"
                v-for="(page, key) in pages"
                v-bind:key="key"
                class="cursor-pointer flex rounded-[7px] justify-center items-center w-[32px] h-[32px] text-white"
                :style="'background-color: ' + (current == page ? 'rgb(49, 34, 117)' : '') + '; margin-left: ' + (page !== 1 ? '7px' : '')"
            >{{ page }}</NuxtLink>
        </div>
        <div v-show="withSearch" class="ml-[7px] text-[rgba(255,255,255,0.5)] w-[250px]">
            <input class="w-full rounded-[7px] px-[16px] h-full bg-[#211B33]" placeholder="Wyszukaj..." />
        </div>
        <div v-show="add" class="flex items-center rounded-[7px] ml-[7px]">
            <NuxtLink
                :to="add"
                class="text-[#ffffffcc] hover:text-[#ffffff] text-[14px] font-[500] rounded-[7px] p-[6px_12px] mx-[6px] bg-[#428400]"
            >
                Dodaj
            </NuxtLink>
        </div>
    </div>
</template>
