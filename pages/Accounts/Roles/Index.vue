<script setup>
import { Head, usePage } from "@inertiajs/vue3";

import TopNavigation from "../../../Components/TopNavigation.vue";
import MainNavigation from "../../../Components/MainNavigation.vue";
import InformativeBox from "../../../Components/InformativeBox.vue";
import EmptyBox from "../../../Components/EmptyBox.vue";

import Pagination from '../../../Components/Pagination.vue'

const page = usePage();

const current = page.props.currentPage || 1
const pages = page.props.pages || 1

const roles = page.props.roles || []
</script>

<template>
  <Head>
    <title>Role @ admin.necodeo.com</title>
  </Head>
  <div class="max-w-[1920px] mx-auto">
    <div class="fixed w-[400px] h-full ml-[5px]">
      <TopNavigation class="!rounded-t-none !rounded-b-none" />
      <MainNavigation
        class="mt-[5px]"
        :navigation="$page.props.navigation"
        :selection="0"
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
            title="Role"
            description="Role to grupy uprawnień, które możesz przypisać do użytkowników. Każdy użytkownik może mieć wiele ról."
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
              <div class="text-[17.5px] font-[500] mb-[7px]">{{ role?.name ?? 'Hello' }}</div>
              <div class="text-[17.5px] opacity-[0.5]">{{ role?.description ?? 'hello@necodeo.com'}}</div>
            </div>
            <div class="flex flex-col justify-center">
              <div class="text-[17.5px] opacity-[0.5]">20 users</div>
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
            :articles="$page.props.shopRelatedArticles"
          />
        </div>
        <div class="w-[calc(50%-2.5px)]">
          <InformativeBox
            bgColor="#1B162C"
            title="Ostatnie aktualizacje"
            description="Dowiedz się, jakie nowe funkcje i usprawnienia zostały dodane, aby ulepszyć Twoje doświadczenie z obsługą panelu. Bądź na bieżąco z najnowszymi aktualizacjami, które pomogą Ci lepiej zarządzać swoimi stronami i poprawić interakcję z użytkownikami"
            color="rgba(255, 255, 255, 0.6)"
            :articles="$page.props.systemRelatedArticles"
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
