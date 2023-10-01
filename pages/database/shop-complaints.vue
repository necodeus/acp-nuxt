<script setup>
import TopNavigation from "~/components/TopNavigation.vue";
import MainNavigation from "~/components/MainNavigation.vue";
import InformativeBox from "~/components/InformativeBox.vue";
import EmptyBox from "~/components/EmptyBox.vue";
import Pagination from '~/components/Pagination.vue'

import {
  pageTexts,
  knowledgeBaseTexts,
  latestUpdatesTexts,
} from "~/data/texts";

const current = 1
const pages = 10

const roles = [
  {
    name: 'Administrator',
    code: 'admin',
    description: 'Administrator posiada pełen dostęp do wszystkich funkcji i ustawień w panelu',
  },
  {
    name: 'Redaktor',
    code: 'editor',
    description: 'Redaktor posiada dostęp do bloga, może tworzyć, edytować, publikować i cofać publikację wpisów',
  },
  {
    name: 'Sprzedawca',
    code: 'seller',
    description: 'Sprzedawca posiada dostęp do sklepu, może tworzyć, edytować, usuwać produkty, kategorie, zamówienia, kody rabatowe, itp.',
  },
]
</script>

<template>
  <Head>
    <title>{{pageTexts.shopComplaintsIndex.title}}</title>
  </Head>
  <div class="max-w-[1920px] mx-auto">
    <div class="fixed w-[400px] h-full ml-[5px]">
      <TopNavigation class="!rounded-t-none !rounded-b-none" />
      <MainNavigation
        class="mt-[5px]"
        :selection="4"
      />
    </div>

    <div class="main-container ml-[405px]">
      <!-- NAGŁÓWEK - START -->
      <div class="flex justify-between">
        <div class="w-[calc(50%-2.5px)]">
          <InformativeBox
            class="!rounded-t-none"
            bgColor="#190A48"
            color="rgba(255,255,255,0.6)"
            :title="pageTexts.shopComplaintsIndex.title"
            :description="pageTexts.shopComplaintsIndex.description"
          />
        </div>
        <div class="w-[calc(50%-2.5px)]">
          <EmptyBox class="!rounded-t-none" bgColor="#1B162C" />
        </div>
      </div>
      <!-- NAGŁÓWEK - KONIEC -->

      <!-- DANE - START -->
      <div class="rounded-[7px] bg-[#1B162C]">
        <Pagination :current="current" :pages="pages" />

        <div class="rounded-[7px] ml-[7px] overflow-hidden">
          <div :class="['flex', 'justify-between', 'p-[14px_20px]', (key % 2 ? 'bg-[#241956]' : 'bg-[#2a1d66]')]" v-for="(role, key) in roles" v-bind:key="key">
            <div class="flex flex-col justify-between">
              <div class="text-[17.5px] font-[500] mb-[7px] text-white">{{ role?.name ?? 'Hello' }} <span class="opacity-[0.5]">({{ role?.code }})</span></div>
              <div class="text-[17.5px] opacity-[0.5] text-white">{{ role?.description ?? 'hello@necodeo.com'}}</div>
            </div>
            <div class="flex flex-col justify-center">
              <div class="text-[17.5px] opacity-[0.5] text-white">20 użytkowników</div>
            </div>
          </div>
          <div v-show="!roles.length" class="opacity-[0.6]">
            Brak ról w bazie
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
            title="Baza wiedzy"
            description="Odkryj poradniki krok po kroku, które pomogą Ci zwiększyć sprzedaż w Twoim sklepie internetowym. Poznaj najlepsze praktyki dotyczące przyciągania klientów, zwiększania konwersji, remarketingu, social media, e-mail marketingu i analizy danych"
            color="rgba(255, 255, 255, 0.6)"
            :articles="knowledgeBaseTexts.articles"
          />
        </div>
        <div class="w-[calc(50%-2.5px)]">
          <InformativeBox
            bgColor="#1B162C"
            title="Ostatnie aktualizacje"
            description="Dowiedz się, jakie nowe funkcje i usprawnienia zostały dodane, aby ulepszyć Twoje doświadczenie z obsługą panelu. Bądź na bieżąco z najnowszymi aktualizacjami, które pomogą Ci lepiej zarządzać swoimi stronami i poprawić interakcję z użytkownikami"
            color="rgba(255, 255, 255, 0.6)"
            :articles="latestUpdatesTexts.articles"
          />
        </div>
      </div>
      <!-- SEKCJA INFORMACYJNA - KONIEC -->
    </div>
  </div>
</template>
