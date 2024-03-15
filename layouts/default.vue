<template>
  <v-app id="default-layout">
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
  name: "DefaultLayout",
  middleware: ['authenticated'],
}
</script>

<style src="~/assets/styles/layouts/default-layout.scss" lang="scss" />
