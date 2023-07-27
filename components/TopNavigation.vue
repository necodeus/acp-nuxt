<script setup>
import HomeIcon from '~/components/Icons/Home.vue'
import Logo from '~/components/Logo/Logo.vue'
</script>

<template>
    <div class="flex w-full h-[150px] bg-[#160842] rounded-[7px] overflow-hidden">
        <div class="flex items-center w-[64px] h-full bg-[#190A48]">
            <div class="flex items-center justify-center w-[64px] h-[64px] bg-[rgba(255,255,255,0.03)]">
                <HomeIcon width="24" height="24" color="#8A8795" />
            </div>
        </div>
        <div class="flex items-center">
            <Logo primaryColor="#41FFC3" secondaryColor="white" />
        </div>
    </div>
</template>
