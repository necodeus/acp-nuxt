<script setup>
import HashIcon from '../Components/Icons/Hash.vue'
import GridIcon from '../Components/Icons/Grid.vue'
import UsersIcon from '../Components/Icons/Users.vue'
import FeatherIcon from '../Components/Icons/Feather.vue'
import ShoppingCartIcon from '../Components/Icons/ShoppingCart.vue'
import CameraIcon from '../Components/Icons/Camera.vue'
import MessageSquareIcon from '../Components/Icons/MessageSquare.vue'
import LayoutIcon from '../Components/Icons/Layout.vue'

import { Link } from '@inertiajs/vue3'

defineProps({
    navigation: {
        type: Array,
        required: true,
    },
    selection: {
        type: Number,
        required: true,
    },
})

const getIconByName = name => ({
    HashIcon,
    GridIcon,
    UsersIcon,
    FeatherIcon,
    ShoppingCartIcon,
    CameraIcon,
    MessageSquareIcon,
    LayoutIcon,
}[name])
</script>

<template>
    <div class="w-[100%] h-[100%] bg-[#160842] pr-[7px] pt-[7px] box-border rounded-t-[7px]">
        <div class="overflow-hidden flex bg-[#1b162c] h-[100%] rounded-t-[7px]">
            <div class="pt-[12px] overflow-hidden w-[64px] h-[100%] bg-[#16102A]">
                <Link :href="module.url" v-for="(module, key) in navigation" v-bind:key="key">
                    <div class="relative w-[64px] h-[64px] flex justify-center items-center">
                        <component :is="getIconByName(module.icon)" width="24" height="24" :color="$page.url.startsWith(module.url) ? '#41FFC3' : '#8A8795'"></component>
                    </div>
                </Link>
            </div>
            <div class="p-[14px] w-[calc(100%-64px)] box-border">
                <div v-for="(item, key) in navigation[selection]" v-bind:key="key">
                    <div class="text-[17px] m-[14px] text-white uppercase">{{ item.name }}</div>
                    <Link :href="subitem.url" v-for="subitem in item.subitems" v-bind:key="subitem.id" class="flex items-center mt-[7px] mb-[7px] rounded-[7px] text-[17px] p-[14px] bg-[#211B33]">
                        <HashIcon width="20" height="20" :color="$page.url.startsWith(subitem.url) ? '#FFFFFF' : '#585466'" />
                        <div class="ml-[14px]" :style="{color: $page.url.startsWith(subitem.url) ? '#FFFFFF' : '#908D99'}">{{ subitem.name }}</div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
</template>
