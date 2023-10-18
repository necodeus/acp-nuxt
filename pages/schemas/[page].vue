<script setup>
import TopNavigation from "~/components/TopNavigation.vue";
import MainNavigation from "~/components/MainNavigation.vue";
import InformativeBox from '~/components/InformativeBox.vue';
import EmptyBox from '~/components/EmptyBox.vue';
import Pagination from '~/components/Pagination.vue'

import {
  pageTexts,
  knowledgeBaseTexts,
  latestUpdatesTexts,
} from '~/data/schemas';

import { slugToTable } from '~/helpers/schemas'

const BASE_URL = useRuntimeConfig().public.apiUrl

const route = useRoute()

const page = ref(1)
const table = ref(slugToTable(route.params.page))

const { data } = await useAsyncData(
  'posts',
  () => $fetch(`${BASE_URL}/schemas/${table.value}`, {
    params: {
      page: page.value
    },
  }), {
    watch: [page, table],
  },
)

console.log('X', {
  BASE_URL,
})

watch(() => route.path, () => {
  page.value = route.query.page ?? 1
  table.value = slugToTable(route.params.page)
}, { deep: true, immediate: true })
</script>

<template>
  <Head>
    <title>{{pageTexts[table]?.title || 'Niezdefiniowany tytuł'}}</title>
  </Head>
  <div class="max-w-[1920px] mx-auto">
    <div class="fixed w-[400px] h-full ml-[5px]">
      <TopNavigation class="!rounded-t-none !rounded-b-none" />
      <MainNavigation
        class="mt-[5px]"
        :selection="0"
      />
    </div>

    <div class="main-container ml-[405px]">
      <div class="flex justify-between">
        <div class="w-[calc(50%-2.5px)]">
          <InformativeBox
            class="!rounded-t-none"
            bgColor="#190A48"
            color="rgba(255,255,255,0.6)"
            :title="pageTexts[table]?.title || 'Niezdefiniowany tytuł'"
            :description="pageTexts[table]?.description || 'Niezdefiniowany opis'"
          />
        </div>
        <div class="w-[calc(50%-2.5px)]">
          <EmptyBox class="!rounded-t-none" bgColor="#1B162C" />
        </div>
      </div>

      <div class="rounded-[7px] bg-[#1B162C]">
        <Pagination :current="page * 1" :pages="Math.ceil(data.records_count / 10) || 1" />

        <div class="rounded-[7px] ml-[7px] overflow-hidden">
          <div :class="['flex', 'justify-between', 'p-[14px_20px]', (key % 2 ? 'bg-[#241956]' : 'bg-[#2a1d66]')]" v-for="(record, key) in data.records" v-bind:key="key">
            {{ record }}
          </div>
          <div v-if="!data.records?.length" :class="['flex', 'justify-between', 'p-[14px_20px]', 'bg-[#2a1d66]', 'text-white']">Brak rekordów</div>
        </div>

        <Pagination :current="page" :pages="Math.ceil(data.records_count / 10) || 1" />
      </div>

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
    </div>
  </div>
</template>
