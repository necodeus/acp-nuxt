<script setup>
import { reactive } from 'vue'
import { Head, router, usePage } from '@inertiajs/vue3'

const page = usePage();

const form = reactive({
  first_name: null,
  last_name: null,
  email: null,
})

function submit() {
  router.post(page.url, form)
}
</script>

<template>
  <Head>
    <title>Logowanie / ACP</title>
  </Head>
  <div>
    Login with e-mail and password:<br/>
    <br/>

    <form @submit.prevent="submit">
      <label for="login" class="inline-block w-full mb-[20px]">Login</label>
      <input id="login" name="login" placeholder="Type login" /><br />
      
      <label for="password" class="inline-block w-full mb-[20px]">Password</label>
      <input id="password" name="password" placeholder="Type password" /><br />

      <div class="ml-[100px]">
        <button type="submit">Login</button>
      </div>
    </form>
  </div>
</template>
