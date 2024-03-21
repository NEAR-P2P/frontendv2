<template>
  <div id="trades-payment-details" class="d-flex flex-column">
    <navbar
      title="PAYMENT"
      desc="DETAILS"
      hide-append
      class="mb-4"
    />

    <aside class="my-4" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 151px), 1fr)); grid-auto-rows: 111px; gap: 15px;">
      <v-card class="card-outline flex-grow-1 d-flex flex-column pa-4">
        <p class="mb-1">Buyer's name</p>
        <span
          class="d-flex"
          style="font-family: var(--font3) !important; font-size: 13px; line-height: 2ch !important;"
        >Gonzalez Briceño Mario Jose</span>

        <a class="mt-auto ml-auto d-flex align-center" style="font-size: 11px; --fw: 700">
          <img src="@/assets/sources/icons/info.svg" alt="info icon" class="mr-2">
          <span
            class="d-flex"
            style="--c: #000; font-weight: 400 !important; font-size: 9px !important; line-height: normal !important;"
          >Atención al cliente 24/7 de NEAR P2P</span>
          <v-icon size="18">mdi-chevron-right</v-icon>
        </a>
      </v-card>

      <v-card class="card flex-grow-1 d-flex flex-column pa-4" style="--bg: var(--card)">
        <p class="mb-2">Advertiser's terms</p>

        <p class="mb-0">Buenas, mantengase en línea “SOY TITULAR y PAGO RÁPIDO”...</p>

        <a class="mt-auto ml-auto d-flex align-center" style="font-size: 11px; --fw: 700">
          SEE MORE
          <v-icon size="18">mdi-chevron-right</v-icon>
        </a>
      </v-card>
    </aside>

    <v-card class="card-outline pa-4 mb-6">
      <div class="d-flex justify-space-between align-center">
        <p class="mb-0" style="font-weight: 700 !important;">SELL USDT</p>
        <img src="@/assets/sources/styled-tokens/usdt.svg" alt="crypto coin" style="width: 20px;">
      </div>
      <div class="d-flex justify-space-between align-center">
        <p class="mb-0">Fiat Amount</p>
        <span class="mb-0" style="font-weight: 700 !important; font-size: 16px !important">Bs. 577.800</span>
      </div>
      <div class="d-flex justify-space-between align-center mb-2">
        <p class="mb-0">Price:</p>
        <p class="mb-0" style="font-weight: 700 !important;">Bs. 9.640</p>
      </div>
      <div class="d-flex justify-space-between align-center mb-2">
        <p class="mb-0">Crypto Amount:</p>
        <p class="mb-0" style="font-weight: 700 !important;">60.00 USDT</p>
      </div>
      <div class="d-flex justify-space-between align-center">
        <p class="mb-0">Order number:</p>
        <p class="mb-0">87639478290917730</p>
      </div>
    </v-card>

    <h3>MY METHODS OF PAYMENT</h3>
    <v-select
      v-model="payment" solo
      :items="payments"
      append-icon="mdi-chevron-down"
      :menu-props="{ offsetY: 25 }"
      style="--b: 1px solid var(--primary); --fw: 400"
    ></v-select>
  </div>
</template>


<script>
export default {
  name: "TradesPaymentDetailsPage",
  data() {
    return {
      payment: "MERCANTIL",
      payments: ["MERCANTIL"]
    }
  },
  head() {
    const title = 'Trades payment details';
    return {
      title,
    }
  },
};
</script>

<style src="~/assets/styles/pages/trades-payment-details.scss" lang="scss" />
