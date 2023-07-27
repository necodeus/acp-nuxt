<script setup>
import { Head } from '@inertiajs/vue3'

import TopNavigation from '../../../Components/TopNavigation.vue'
import MainNavigation from '../../../Components/MainNavigation.vue'
import InformativeBox from '../../../Components/InformativeBox.vue'
</script>

<template>
  <Head>
    <title>Sekcje / Utwórz @ admin.necodeo.com</title>
  </Head>
  <div class="max-w-[1920px] mx-auto">
    <div class="fixed w-[400px] h-full ml-[5px]">
      <TopNavigation class="!rounded-tl-none !rounded-tr-none" />
      <MainNavigation class="mt-[5px]" :navigation="$page.props.navigation" :selection="1" />
    </div>

    <div class="main-container ml-[405px]">
      <!-- NAGŁÓWEK - START -->
      <div class="flex justify-between">
        <div class="w-full">
          <InformativeBox
            class="!rounded-t-none"
            bgColor="#190A48"
            color="rgba(255, 255, 255, 0.6)"
            title="Tworzenie sekcji"
            description="Utwórz sekcję..."
          />
        </div>
      </div>
      <!-- NAGŁÓWEK - KONIEC -->

      <!-- DANE - START -->
      <div class="rounded-[7px] bg-[#1B162C]">
        <div class="py-1"></div>

        <div class="rounded-[7px] ml-[7px] bg-[#241956] p-[14px_20px]">
          <div class="flex justify-between">
            <form action="/site/sections/create" method="POST" style="color: black">
              <input type="hidden" name="_token" :value="this.$page.props.csrf_token" />

              <input type="text" name="name" placeholder="Nazwa sekcji" value="" />
              <br/>

              <textarea name="content_md" placeholder="Treść sekcji w formacie Markdown"></textarea>
              <br/>

              <input class="bg-[red]" type="submit" value="Utwórz" />
            </form>

            {{ this.$page.props.errors }}
          </div>
        </div>

        <div class="py-1"></div>
      </div>
      <!-- DANE - KONIEC -->
    </div>
  </div>
</template>

<style scoped>
.main-container> :first-child {
  margin-top: 0 !important;
}

.main-container>div {
  margin: 5px;
}</style>