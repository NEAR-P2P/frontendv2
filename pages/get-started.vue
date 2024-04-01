<template>
  <div id="get-started" class="d-flex flex-column v2">
    <modal-connect ref="modalConnect" />

    <navbar class="mb-10">
      <template #prepend>
        <img src="@/assets/sources/logos/logotype.svg" alt="logotype">
      </template>
      
      <template #append>
        <v-btn min-width="35" min-height="35" class="btn px-2" style="--g: 0;">
          EN<v-icon size="13" style="width: 11px">mdi-chevron-down</v-icon>
        </v-btn>
      </template>
    </navbar>

    <div id="get-started__bg-image-top-v2">
      <img src="@/assets/sources/images/bg-get-started-top-v2.png" alt="bg-image-top-v2">
    </div>
    <div id="get-started__bg-image">
      <img src="@/assets/sources/images/bg-get-started.png" alt="bg-image">

      <img src="@/assets/sources/images/bg-get-started-v2.png" alt="bg-image-v2">
    </div>

    <span class="big-title" style="text-indent: 60px;">P</span>
    <span class="big-title text-end" style="z-index: 2;">2</span>
    <span class="big-title">P</span>

    <aside class="d-flex flex-column" style="gap: 10px; margin-top: 100px;">
      <v-btn
        class="btn"
      >SIGN UP / CREATE WALLET</v-btn>
      <v-btn
        class="btn"
        @click="$refs.modalConnect.showModal()"
      >CONNECT your WALLET</v-btn>
    </aside>
  </div>
</template>


<script>
export default {
  name: "GetStartedPage",
  layout: 'auth-layout',
  head() {
    const title = 'get started';
    return {
      title,
    }
  },
};
</script>

<style src="~/assets/styles/pages/get-started.scss" lang="scss" />
