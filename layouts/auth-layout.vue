<template>
  <v-app id="auth-layout">
    <Alerts ref="alerts" />
    <!-- <ModalConfirmMsg ref="confirmMsg" /> -->

    <div class="bg-circle">
      <img :src="require(`~/assets/sources/images/circle.svg`)" alt="bg-circle">
    </div>

    <v-main class="parent">
      <nuxt-child data-nuxt="childs" />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "AuthLayout",
  beforeMount() {
    localStorage.removeItem('auth')
  }
}
</script>

<style src="~/assets/styles/layouts/auth-layout.scss" lang="scss" />
