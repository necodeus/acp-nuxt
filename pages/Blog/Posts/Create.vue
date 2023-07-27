<script setup>
import { Head } from '@inertiajs/vue3'

import TopNavigation from '../../../Components/TopNavigation.vue'
import MainNavigation from '../../../Components/MainNavigation.vue'
import InformativeBox from '../../../Components/InformativeBox.vue'
</script>

<template>
  <Head>
    <title>Wpisy blogowe / Utwórz @ admin.necodeo.com</title>
  </Head>
  <div class="max-w-[1920px] mx-auto">
    <div class="fixed w-[400px] h-full ml-[5px]">
      <TopNavigation class="!rounded-tl-none !rounded-tr-none" />
      <MainNavigation class="mt-[5px]" :navigation="$page.props.navigation" :selection="2" />
    </div>

    <div class="main-container ml-[405px]">
      <!-- NAGŁÓWEK - START -->
      <div class="flex justify-between">
        <div class="w-full">
          <InformativeBox
            class="!rounded-t-none"
            bgColor="#190A48"
            color="rgba(255, 255, 255, 0.6)"
            title="Tworzenie wpisu blogowego"
            description="..."
          />
        </div>
      </div>
      <!-- NAGŁÓWEK - KONIEC -->

      <!-- DANE - START -->
      <div class="rounded-[7px] bg-[#1B162C]">
        <div class="py-1"></div>

        <div class="rounded-[7px] ml-[7px] bg-[#241956] p-[14px_20px]">
          <div class="flex justify-between">
            <form action="/blog/posts/create" method="POST" class="text-[black]">
              <input type="hidden" name="_token" :value="this.$page.props.csrf_token" />

              <input type="text" name="title" value="TYTUŁ" /><br/>
              <input type="text" name="teaser" value="ZAJAWKA" /><br/>

              <!-- Tutaj trzeba dodać możliwość dodawania sekcji (i wyboru spośród istniejących) -->
              <input type="text" name="full_content_md" value="CONTENT" /><br/>

              <input type="text" name="autor_id" value="" placeholder="ID AUTORA" /><br/>

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