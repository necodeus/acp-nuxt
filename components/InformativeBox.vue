<script setup>
defineProps({
  color: {
    type: String,
    required: true,
  },
  bgColor: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  articles: {
    type: Array,
    required: false,
  },
})
</script>

<template>
    <div class="rounded-[7px] p-[22px_28px]" :style="{backgroundColor: bgColor}">
        <h2 class="text-[24.5px] font-[500] [margin-block:auto] !mb-[22px]" :style="{color: 'white'}">{{ title }}</h2>
        <p class="text-[17.5px] [margin-block:auto]" :style="{color: color}">{{ description }}</p>

        <ul v-if="articles" class="m-0 mt-[28px] p-0">
            <li class="bg-[rgba(255,255,255,0.03)] list-none m-0 mb-[1px] p-[14px] list-item" v-for="article in articles" v-bind:key="article.id">
                <h3 class="text-[17.5px] font-[400] [margin-block:auto]" :style="{color: 'white'}">{{ article.title }}</h3>
                <p class="whitespace-nowrap overflow-hidden text-ellipsis m-0 mt-[8px] text-[17.5px]" :style="{color}">{{ article.description }}</p>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.list-item:first-child {
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
}

.list-item:last-child {
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
}
</style>