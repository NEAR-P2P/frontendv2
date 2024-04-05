<template>
  <div id="trades-chat" class="d-flex flex-column">
    <navbar
      title="PAYMENT"
      desc="TO BE BY THE BUYER"
      hide-append
      class="mb-4"
    >
      <!-- <template #append>
        <v-btn class="btn-icon" @click="$router.back()">
          <v-icon size="17">mdi-close</v-icon>
        </v-btn>
      </template> -->
    </navbar>

    <div class="d-flex mb-4" style="gap: 10px;">
      <v-card class="card d-flex align-center px-4 flex-grow-1" style="--bg: var(--card)">
        <profile-avatar
          show-name
          :profile="{
            name: 'detextre4',
            avatar: require('@/assets/sources/avatars/avatar.png'),
            verified: true,
          }"
        ></profile-avatar>
      </v-card>

      <v-btn class="btn" style="--bg: var(--card)">
        <span style="--c: var(--primary)">REPORT</span>
      </v-btn>
    </div>

    <h3 class="mb-1">AMOUNT</h3>
    <v-btn class="btn mb-4" style="--bg: var(--card)">
      <span class="mr-auto" style="--c: #333">BS. 866.580</span>
    </v-btn>


    <p2p-chat
    ></p2p-chat>

    <v-btn
      class="btn mt-2 mb-4"
      style="--bg: var(--primary); --br: 30px"
    >MARCAR PAGO REALIZADO</v-btn>

    <h6 style="--ff: var(--font4); --fw: 700; --fs: 10px; --lh: 1ch">
      APENAS TERMINE DE TRANSFERIR PUEDE HACER  CLIC

      <img src="@/assets/sources/icons/warning-blue.svg" alt="info icon" class="ml-1" style="translate: 0 5px">
    </h6>
  </div>
</template>


<script>
export default {
  name: "TradesChatPage",
  data() {
    return {
    }
  },
  head() {
    const title = 'Trades Chat';
    return {
      title,
    }
  },
};
</script>

<style src="~/assets/styles/pages/trades-chat.scss" lang="scss" />
