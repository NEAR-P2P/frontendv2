<template>
  <div id="get-started" class="d-flex flex-column v2">
    <modal-connect ref="modalConnect" />

    <navbar class="mb-10">
      <template #prepend>
        <img src="@/assets/sources/logos/logotype.svg" alt="logotype">
      </template>

      <template #append>
        <aside>
          <v-menu offset-y>
            <template #activator="{ on, attrs }">
              <v-btn min-width="35" min-height="35" class="btn px-2" style="--g: 0;" v-bind="attrs" v-on="on">
                {{ $t('lang') }}<v-icon size="13" style="width: 11px">mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item v-for="lang in langList" :key="lang.key" @click="changeLanguage(lang.key)">
                <v-list-item-title>{{ lang.name }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </aside>
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
      <!-- <v-btn
        class="btn"
      >SIGN UP / CREATE WALLET</v-btn> -->
      <v-btn class="btn" @click="$refs.modalConnect.showModal()">{{ $t('welcome') }}</v-btn>
    </aside>
  </div>
</template>


<script>
export default {
  name: "GetStartedPage",
  layout: 'auth-layout',
  data() {
    return {
      langList: [
        { key: "es", name: "Español" },
        { key: "en", name: "English" },
        { key: "ru", name: "Русский" }
      ],
    };
  },
  head() {
    const title = 'get started';
    return {
      title,
    }
  },
  methods: {
    changeLanguage(lang) {
      this.$i18n.setLocale(lang);
    },
  },
};
</script>

<style src="~/assets/styles/pages/get-started.scss" lang="scss" />
