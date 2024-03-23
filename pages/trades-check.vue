<template>
  <div id="trades-check" class="d-flex flex-column">
    <modal-check-payment ref="modalCheckPayment"
    ></modal-check-payment>

    <navbar
      title="CHECK"
      desc="PAYMENT"
      hide-append
      class="mb-4"
    />

    <div class="d-flex align-center" style="gap: 20px;">
      <v-select
        v-model="price" solo
        :items="prices"
        hide-details
        append-icon="mdi-chevron-down"
        :menu-props="{ offsetY: 25 }"
        style="--h: 35px; --fs: 20px; --fw: 400; --ff: var(--font3); --c: var(--primary); --ls: .03em"
      >
        <template #prepend-inner>
          <span style="font-size: 20px; font-family: var(--font3);">Bs.</span>
        </template>
      </v-select>
      
      <v-badge offset-x="10px" offset-y="10px" :value="false" content="3">
        <v-btn class="btn-icon" style="--bg: #000; --size: 35px">
          <img src="@/assets/sources/icons/live-chat.svg" alt="chat icon">
        </v-btn>
      </v-badge>
    </div>

    <div class="d-flex align-center mt-4" style="gap: 20px;">
      <span
        class="btn-icon"
        style="--size: 35px; --br: 50%; display: grid; place-items: center; font-family: var(--font3); --bg: #979CA6; font-size: 20px; font-weight: 400; letter-spacing: 0.055em;"
      >1</span>

      <h3 class="mb-0">LOG IN  AND CONFIRM THAT YOU HAVE RECEIVED PAYMENT</h3>
    </div>

    <v-card class="card-outline mt-3 pa-4 d-flex flex-column" style="gap: 5px;">
      <p class="mb-0" style="--fs: 11px; --ff: var(--font3)">Mercantil</p>

      <div class="d-flex flex-wrap" style="gap: 10px;">
        <p class="mb-0 d-flex align-center">Full name of receiver:</p>
        <p class="mb-0 ml-auto text-end" style="--fw: 700; flex-basis: 135px;">HERNADEZ PASTRANO MARIANGELA DEL ROSARIO</p>
      </div>
      
      <div class="d-flex flex-wrap" style="gap: 10px;">
        <p class="mb-0 d-flex align-center">Order Number:</p>
        <p class="mb-0 ml-auto text-end" style="flex-basis: 135px;">87639478290917730</p>
      </div>
      
      <div class="d-flex flex-wrap" style="gap: 10px;">
        <p class="mb-0 d-flex align-center">Account Number:</p>
        <p class="mb-0 ml-auto text-end" style="flex-basis: 135px;">01058836846786153999703</p>
      </div>
      
      <div class="d-flex flex-wrap" style="gap: 10px;">
        <p class="mb-0 d-flex align-center">Buyer’s Name:</p>
        <p class="mb-0 ml-auto text-end" style="--fw: 700; flex-basis: 135px;">Gonzalez Briceño Mario Jose</p>
      </div>
    </v-card>


    <div class="d-flex align-center mt-4" style="gap: 20px;">
      <span
        class="btn-icon"
        style="--size: 35px; --br: 50%; display: grid; place-items: center; font-family: var(--font3); --bg: #979CA6; font-size: 20px; font-weight: 400; letter-spacing: 0.055em;"
      >2</span>

      <h3 class="mb-0">CHECK THAT YOU RECEIVED THE PAYMENT</h3>
    </div>

    <p class="mt-3">Then tap the following button to release the cryptocurrencies to the buyer</p>

    <div class="d-flex" style="gap: 10px;">
      <v-btn class="btn-outline">HELP</v-btn>
      <v-btn class="btn flex-grow-1" style="--bg: var(--primary)" @click="$refs.modalCheckPayment.model = true">PAYMENT RECEIVED</v-btn>
    </div>
  </div>
</template>


<script>
export default {
  name: "TradesCheckPage",
  data() {
    return {
      price: 866.580,
      prices: [866.580]
    }
  },
  head() {
    const title = 'Trades Check';
    return {
      title,
    }
  },
};
</script>

<style src="~/assets/styles/pages/trades-check.scss" lang="scss" />
