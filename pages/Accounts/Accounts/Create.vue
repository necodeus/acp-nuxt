<script setup>
import { Head } from '@inertiajs/vue3'

import TopNavigation from '../../../Components/TopNavigation.vue'
import MainNavigation from '../../../Components/MainNavigation.vue'
import InformativeBox from '../../../Components/InformativeBox.vue'
import EmptyBox from '../../../Components/EmptyBox.vue'
import Pagination from '../../../Components/Pagination.vue'
</script>

<template>
  <Head>
    <title>Konta / Utwórz @ admin.necodeo.com</title>
  </Head>
  <div class="max-w-[1920px] mx-auto">
    <div class="fixed w-[400px] h-full ml-[5px]">
      <TopNavigation class="!rounded-tl-none !rounded-tr-none" />
      <MainNavigation class="mt-[5px]" :navigation="$page.props.navigation" :selection="0" />
    </div>

    <div class="main-container ml-[405px]">
      <!-- NAGŁÓWEK - START -->
      <div class="flex justify-between">
        <div class="w-full">
          <InformativeBox
            class="!rounded-t-none"
            bgColor="#190A48"
            color="rgba(255, 255, 255, 0.6)"
            title="Tworzenie konta"
            description="Utwórz konto użytkownika, który będzie miał dostęp do Twojej strony internetowej."
          />
        </div>
      </div>
      <!-- NAGŁÓWEK - KONIEC -->

      <!-- DANE - START -->
      <div class="rounded-[7px] bg-[#1B162C]">
        <div class="py-1"></div>

        <div class="rounded-[7px] ml-[7px] bg-[#241956] p-[14px_20px]">
          <div class="flex justify-between">
            <form action="/accounts/accounts/store" method="POST" style="color: black">
              <input type="hidden" name="_token" :value="this.$page.props.csrf_token" />
              <input type="hidden" name="login_method" value="DEFAULT" />
              <input type="hidden" name="2fa_method" value="NONE" />
              <input type="hidden" name="status" value="1" />
              <input type="hidden" name="is_admin" value="1" />

              <input type="text" name="name" placeholder="Nazwa" value="Klaudek" />
              <br/>
              <input type="text" name="email" placeholder="E-mail" value="klaudek@necodeo.com" />
              <br/>
              <input type="password" name="password" placeholder="Password" value="dupa123" />
              <br/>
              <input type="date" name="birthdate" placeholder="Data urodzenia" value="2000-06-06" />
              <br/>
              <input style="background-color: red;" type="submit" value="Utwórz" />
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