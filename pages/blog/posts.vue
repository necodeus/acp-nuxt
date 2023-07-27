<script setup>
import TopNavigation from '~/components/TopNavigation.vue'
import MainNavigation from '~/components/MainNavigation.vue'
import InformativeBox from '~/components/InformativeBox.vue'
import EmptyBox from '~/components/EmptyBox.vue'
import Pagination from '~/components/Pagination.vue'

const current = 1
const pages = 1

const blogPosts = []
</script>

<template>
  <Head>
    <title>Wpisy blogowe @ admin.necodeo.com</title>
  </Head>
  <!-- {{ blogPosts }} -->
  <div style="transform: translateX(calc(50% - 1920px / 2));">
    <div class="w-[1920px] flex">
      <div class="w-[400px]">
        <TopNavigation class="!rounded-tl-none !rounded-tr-none" />
        <MainNavigation
          class="mt-[5px]"
          :navigation="$page.props.navigation"
          :selection="2"
        />
      </div>
      <div class="grow">
        <InformativeBox
          class="!rounded-t-none m-[5px] !mt-0"
          bgColor="#190A48"
          color="rgba(255, 255, 255, 0.6)"
          title="Wpisy blogowe"
          description="..."
        />

        <div class="rounded-[7px] m-[5px] bg-[#1B162C]">
          <Pagination :current="current" :pages="pages" withSearch add="/blog/posts/create" />

          <div class="rounded-[7px] mx-[7px] overflow-hidden">
            <div :class="['flex', 'mb-3', 'rounded-[7px]', (key % 2 ? 'bg-[#2a1d66]' : 'bg-[#2a1d66]')]" v-for="(post, key) in blogPosts" v-bind:key="key">
              <div class="rounded-[7px] rounded-r-none bg-[rgba(0,0,0,0.5)] w-half h-[200px]">
                <img class="rounded-[5px] rounded-r-none" style="width:100%; height:100%; object-fit: cover;" src="./01.jpg" v-if="key % 2" />
                <img class="rounded-[5px] rounded-r-none" style="width:100%; height:100%; object-fit: cover;" src="./02.jpg" v-else />
              </div>
              <div class="py-[14px] px-[20px]">
                <div class="text-[17.5px] font-[500] mb-[7px]">{{ post?.title }}</div>
                <div class="text-[17.5px] opacity-[0.5]">{{ post?.teaser }}</div>
              </div>
            </div>
            <div v-show="!blogPosts.length" class="opacity-[0.6]">
              Brak wpisów blogowych w bazie
            </div>
          </div>

          <Pagination :current="current" :pages="pages" />
        </div>
      </div>
      <div class="w-[600px]">
        <InformativeBox
          class="mb-[5px] !rounded-t-none"
          bgColor="#0A4148"
          color="rgba(255, 255, 255, 0.6)"
          title="Baza wiedzy"
          description="Odkryj poradniki krok po kroku, które pomogą Ci zwiększyć sprzedaż w Twoim sklepie internetowym. Poznaj najlepsze praktyki dotyczące przyciągania klientów, zwiększania konwersji, remarketingu, social media, e-mail marketingu i analizy danych" :articles="$page.props.shopRelatedArticles"
        />
        <InformativeBox
          bgColor="#1B162C"
          color="rgba(255, 255, 255, 0.6)"
          title="Ostatnie aktualizacje"
          description="Dowiedz się, jakie nowe funkcje i usprawnienia zostały dodane, aby ulepszyć Twoje doświadczenie z obsługą panelu. Bądź na bieżąco z najnowszymi aktualizacjami, które pomogą Ci lepiej zarządzać swoimi stronami i poprawić interakcję z użytkownikami" :articles="$page.props.systemRelatedArticles"
        />
      </div>
    </div>
  </div>
</template>
