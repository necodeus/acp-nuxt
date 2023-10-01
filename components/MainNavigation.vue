<script setup>
import HashIcon from '~/components/Icons/Hash.vue'
import GridIcon from '~/components/Icons/Grid.vue'
import UsersIcon from '~/components/Icons/Users.vue'
import FeatherIcon from '~/components/Icons/Feather.vue'
import ShoppingCartIcon from '~/components/Icons/ShoppingCart.vue'
import CameraIcon from '~/components/Icons/Camera.vue'
import MessageSquareIcon from '~/components/Icons/MessageSquare.vue'
import LayoutIcon from '~/components/Icons/Layout.vue'
import DatabaseIcon from '~/components/Icons/Database.vue'

import { mainNavigation } from '~/data/navigations'

const route = useRoute()

defineProps({
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
    DatabaseIcon,
}[name])

const isRouteInSubitems = (module, route) => {
    return module[0].subitems.some(subitem => subitem.url.startsWith(route.path))
}
</script>

<template>
    <div class="w-[100%] bg-[#160842] pr-[7px] pt-[7px] box-border rounded-t-[7px] h-[calc(100vh-150px)]">
        <div class="overflow-hidden flex bg-[#1b162c] h-[100%] rounded-t-[7px]">
            <div class="pt-[12px] overflow-scroll w-[64px] h-[100%] bg-[#16102A]">
                <NuxtLink :to="module[0].redirectTo ?? module[0].url" v-for="(module, mk) in mainNavigation" v-bind:key="mk">
                    <div class="relative w-[64px] h-[64px] flex justify-center items-center">
                        <component
                            :is="getIconByName(module[0].icon)"
                            :color="isRouteInSubitems(module, route) ? '#41FFC3' : '#8A8795'"
                            width="24"
                            height="24"
                        ></component>
                    </div>
                </NuxtLink>
            </div>
            <div class="p-[14px] overflow-auto w-[calc(100%-64px)] box-border">
                <div v-for="(item, key) in mainNavigation[selection]" v-bind:key="key">
                    <div class="text-[17px] m-[14px] text-white uppercase">{{ item.name }}</div>
                    <NuxtLink :to="subitem.url" v-for="subitem in item.subitems" v-bind:key="subitem.id"
                        class="flex items-center mt-[7px] mb-[7px] rounded-[7px] text-[17px] p-[14px] bg-[#211B33]">
                        <HashIcon width="20" height="20" :color="route.path.startsWith(subitem.url) ? '#FFFFFF' : '#585466'" />
                        <div class="ml-[14px]" :style="{ color: route.path.startsWith(subitem.url) ? '#FFFFFF' : '#908D99' }">{{
                            subitem.name }}</div>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>
