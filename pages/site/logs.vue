<script setup>
import TopNavigation from '~/components/TopNavigation.vue'
import MainNavigation from '~/components/MainNavigation.vue'
import InformativeBox from '~/components/InformativeBox.vue'
import EmptyBox from '~/components/EmptyBox.vue'
</script>

<template>
  <Head>
    <title>Logi @ admin.necodeo.com</title>
  </Head>
  <div style="max-width: 1920px; margin: 0 auto;">
    <div style="position: fixed; width: 400px; height: 100%; margin-left: 5px; ">
      <TopNavigation style="border-top-left-radius: 0 !important; border-top-right-radius: 0 !important;" />
      <MainNavigation style="margin-top: 5px" :navigation="$page.props.navigation" :selection="1" />
    </div>

    <div class="main-container" style="margin-left: 405px;">
      <div style="display: flex; justify-content: space-between;">
        <div style="width: calc(50% - 2.5px)">
          <InformativeBox
            class="!rounded-t-none"
            bgColor="#190A48"
            title="Logi"
            description="Zobacz, co dzieje się w Twoim sklepie internetowym. Sprawdź, kto odwiedza Twój sklep, co kupują i jakie działania marketingowe przynoszą najlepsze rezultaty"
            color="rgba(255, 255, 255, 0.6)"
          />
        </div>
        <div style="width: calc(50% - 2.5px)">
          <EmptyBox
            class="!rounded-t-none"
            bgColor="#1B162C"
          />
        </div>
      </div>

      <div class="rounded-[7px] bg-[#1B162C]">

        <div class="flex pt-[5px] pb-[5px] pl-[8px] pr-[8px]">
          <div class="flex pt-[5px] pb-[5px] pl-[7px] pr-[7px] items-center rounded-[7px] bg-[#211B33]">
            <div class="flex rounded-[7px] justify-center items-center w-[32px] h-[32px]">1</div>
            <div class="flex rounded-[7px] justify-center items-center w-[32px] h-[32px] ml-[7px] mr-[7px] bg-[#292240] cursor-pointer">2</div>
            <div class="flex rounded-[7px] justify-center items-center w-[32px] h-[32px]">3</div>
          </div>
          <div class="pt-[10px] pb-[10px] pl-[16px] pr-[16px] rounded-[7px] ml-[7px] text-[rgba(255,255,255,0.5)] bg-[#211B33] w-[250px]">
            Wyszukaj...
          </div>
        </div>

        <div style="border-radius: 7px; margin-left: 7px; background-color: #241956; padding: 14px 20px;">
          <div style="display: flex; justify-content: space-between;" v-for="user in $page.props.users" v-bind:key="user.id">
            <div style="display: flex; flex-direction: column; justify-content: space-between;">
              <div style="font-size: 17.5px; font-weight: 500">{{ user.name }}</div>
              <div style="font-size: 17.5px; margin-top: 7px; opacity: 0.5">{{ user.email }}</div>
            </div>
            <div>
              <div style="font-size: 17.5px; font-weight: 500">Rejestracja</div>
              <div style="font-size: 17.5px; margin-top: 7px; opacity: 0.5">{{ user.created_at }}</div>
            </div>
            <div>
              <div style="font-size: 17.5px; font-weight: 500">Aktywacja</div>
              <div style="font-size: 17.5px; margin-top: 7px; opacity: 0.5">{{ user.email_verified_at }}</div>
            </div>
          </div>
        </div>

        <div class="flex pt-[5px] pb-[5px] pl-[8px] pr-[8px]">
          <div class="flex pt-[5px] pb-[5px] pl-[7px] pr-[7px] items-center rounded-[7px] bg-[#211B33]">
            <div class="flex rounded-[7px] justify-center items-center w-[32px] h-[32px]">1</div>
            <div class="flex rounded-[7px] justify-center items-center w-[32px] h-[32px] ml-[7px] mr-[7px] bg-[#292240]">2</div>
            <div class="flex rounded-[7px] justify-center items-center w-[32px] h-[32px]">3</div>
          </div>
        </div>

      </div>

      <div style="display: flex; justify-content: space-between;">
        <div style="width: calc(50% - 2.5px)">
          <InformativeBox
            bgColor="#0A4148"

            title="Baza wiedzy"
            description="Odkryj poradniki krok po kroku, które pomogą Ci zwiększyć sprzedaż w Twoim sklepie internetowym. Poznaj najlepsze praktyki dotyczące przyciągania klientów, zwiększania konwersji, remarketingu, social media, e-mail marketingu i analizy danych"

            color="rgba(255, 255, 255, 0.6)"

            :articles="$page.props.shopRelatedArticles"
          />
        </div>
        <div style="width: calc(50% - 2.5px)">
          <InformativeBox
            bgColor="#1B162C"

            title="Ostatnie aktualizacje"
            description="Dowiedz się, jakie nowe funkcje i usprawnienia zostały dodane, aby ulepszyć Twoje doświadczenie z obsługą panelu. Bądź na bieżąco z najnowszymi aktualizacjami, które pomogą Ci lepiej zarządzać swoimi stronami i poprawić interakcję z użytkownikami"

            color="rgba(255, 255, 255, 0.6)"

            :articles="$page.props.systemRelatedArticles"
          />
        </div>
      </div>

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