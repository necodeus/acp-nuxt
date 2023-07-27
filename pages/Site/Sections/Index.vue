<script setup>
import { Head, usePage } from '@inertiajs/vue3'

import TopNavigation from '../../../Components/TopNavigation.vue'
import MainNavigation from '../../../Components/MainNavigation.vue'
import InformativeBox from '../../../Components/InformativeBox.vue'
import EmptyBox from '../../../Components/EmptyBox.vue'
import Pagination from '../../../Components/Pagination.vue'

const page = usePage();
const current = page.props.currentPage || 1
const pages = page.props.pages || 1

const sections = page.props.sections || []
</script>

<template>
  <Head>
    <title>Sekcje @ admin.necodeo.com</title>
  </Head>
  <div class="max-w-[1920px] mx-auto">
    <div class="fixed w-[400px] h-full ml-[5px]">
      <TopNavigation class="!rounded-tl-none !rounded-tr-none" />
      <MainNavigation
        class="mt-[5px]"
        :navigation="$page.props.navigation"
        :selection="1"
      />
    </div>

    <div class="main-container ml-[405px]">
      <!-- NAGŁÓWEK - START -->
      <div class="flex justify-between">
        <div class="w-[calc(50%-2.5px)]">
          <InformativeBox
            class="!rounded-t-none"
            bgColor="#190A48"
            color="rgba(255, 255, 255, 0.6)"
            title="Sekcje"
            description="..."
          />
        </div>
        <div class="w-[calc(50%-2.5px)]">
          <EmptyBox class="!rounded-t-none" bgColor="#1B162C" />
        </div>
      </div>
      <!-- NAGŁÓWEK - KONIEC -->

      <!-- DANE - START -->
      <div class="rounded-[7px] bg-[#1B162C]">
        <Pagination :current="current" :pages="pages" withSearch add="/site/sections/create" />

        <div class="rounded-[7px] ml-[7px] overflow-hidden">
          <div :class="['flex', 'justify-between', 'px-4', 'py-[20px]', (key % 2 ? 'bg-[#241956]' : 'bg-[#2a1d66]')]" v-for="(account, key) in sections" v-bind:key="key">
            <div class="flex pr-5 flex-col justify-center">
              <div class="text-[17.5px] font-[500] mb-[7px]">{{ account?.id }}</div>
            </div>
            <div class="flex flex-col grow justify-between">
              <div class="text-[17.5px] font-[500] mb-[7px]">{{ account?.name }}</div>
              <div class="text-[17.5px] opacity-[0.5]">{{ account?.content_md ?? ''}}</div>
            </div>
            <div class="flex flex-col justify-center text-right">
              <div class="text-[17.5px] opacity-[0.5]">Utworzono: {{ account?.creation_dt ?? '-'}}</div>
              <div class="text-[17.5px] opacity-[0.5]" v-if="account?.creation_dt != account?.modification_dt">Zmodyfikowano: {{ account?.modification_dt ?? '-'}}</div>
              <div class="text-[17.5px] opacity-[0.5]" v-else>&nbsp;</div>
            </div>
          </div>
          <div v-show="!sections.length" class="opacity-[0.6]">
            Brak sekcji w bazie
          </div>
        </div>

        <Pagination :current="current" :pages="pages" />
      </div>
      <!-- DANE - KONIEC -->

      <!-- SEKCJA INFORMACYJNA - START -->
      <div class="flex justify-between">
        <div class="w-[calc(50%-2.5px)]">
          <InformativeBox
            bgColor="#0A4148"
            color="rgba(255, 255, 255, 0.6)"
            title="Baza wiedzy"
            description="Odkryj poradniki krok po kroku, które pomogą Ci zwiększyć sprzedaż w Twoim sklepie internetowym. Poznaj najlepsze praktyki dotyczące przyciągania klientów, zwiększania konwersji, remarketingu, social media, e-mail marketingu i analizy danych" :articles="$page.props.shopRelatedArticles"
          />
        </div>
        <div class="w-[calc(50%-2.5px)]">
          <InformativeBox
            bgColor="#1B162C"
            color="rgba(255, 255, 255, 0.6)"
            title="Ostatnie aktualizacje"
            description="Dowiedz się, jakie nowe funkcje i usprawnienia zostały dodane, aby ulepszyć Twoje doświadczenie z obsługą panelu. Bądź na bieżąco z najnowszymi aktualizacjami, które pomogą Ci lepiej zarządzać swoimi stronami i poprawić interakcję z użytkownikami" :articles="$page.props.systemRelatedArticles"
          />
        </div>
      </div>
      <!-- SEKCJA INFORMACYJNA - KONIEC -->
    </div>
  </div>
</template>

<style scoped>
.main-container > :first-child {
  margin-top: 0 !important;
}

.main-container > div {
  margin: 5px;
}
</style>