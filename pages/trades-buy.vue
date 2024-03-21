<template>
  <div id="trades-buy" class="d-flex flex-column">
    <navbar title="BUY" class="mb-4" />
    
    <aside clasS="d-flex" style="gap: 10px">
      <v-card class="card d-flex flex-column flex-grow-1 pa-3" style="--bg: var(--card)">
        <span style="font-family: var(--font3) !important;">Price:</span>
        <span style="font-family: var(--font3) !important; font-size: 24px;">
          Bs. 8.986
        </span>

        <p class="mb-0" style="--fw: 400; font-size: 11px !important;">
          Limit:<br>
          <strong style="font-weight: 700 !important;">Bs. 50.000 - Bs.100.000</strong>
        </p>
      </v-card>

      <div class="d-flex flex-column" style="gap: 10px;">
        <v-btn class="btn" style="--bg: var(--primary)">BUY FIAT</v-btn>
        <v-btn class="btn-outline" style="--b: none">BUY CRYPTO</v-btn>
      </div>
    </aside>

    <aside
      class="d-flex justify-space-between my-4"
      style="gap: 10px; height: 114px;"
    >
      <v-card
        max-width="89px"
        class="card-outline pa-3 d-flex flex-column justify-space-between"
        style="--br: 10px;"
      >
        <span
          class="d-flex align-start"
          style="font-family: var(--font3) !important; font-size: 11px; gap: 10px;"
          >Payment Window
          <img src="@/assets/sources/icons/info.svg" alt="info icon">
        </span>

        <p class="mb-0">15<br>Minutes</p>
      </v-card>

      <anchor-card
        max-width="96px"
        rounded="10px"
      >
        <span
          class="d-flex not mb-auto"
          style="font-family: var(--font3) !important; font-size: 11px; gap: 10px;"
        >Buyer’s Nickname</span>

        <p class="mb-0">*Tsubasa*</p>
      </anchor-card>
      
      <anchor-card
        max-width="96px"
        rounded="10px"
        @click="$router.push('/trades-payment')"
      >
        <span
          class="d-flex not mb-auto"
          style="font-family: var(--font3) !important; font-size: 11px; gap: 10px;"
        >Payment Method</span>

        <p class="mb-0">Mercantil</p>
      </anchor-card>
    </aside>
    
    <v-text-field
      type="number"
      placeholder="ENTER AMOUNT"
      hide-details solo
      class="hide-spin mb-2"
      style="--ls: .03em; --ls-place: 3.9px"
    >
      <template #append>
        <v-btn
          text
          min-width="55"
          max-width="55"
          class="ml-2"
          style="translate: 6px 0; border-radius: 10px;"
        >
          <span 
            style="
              font-size: 11px !important;
              letter-spacing: 3.9px !important;
              font-family: var(--font4) !important;
              color: var(--primary) !important;
          ">ALL</span>
        </v-btn>
      </template>
    </v-text-field>

    <p class="text-end mb-3">Balance: 55.45 USDT</p>

    <v-card class="card d-flex flex-column flex-grow-1 pa-3" style="--bg: var(--card)">
      <div class="d-flex justify-space-between mb-3" style="gap: 10px; --c: #333">
        <p class="mb-0">Quantity</p>
        <p class="mb-0">-- USDT</p>
      </div>
      
      <div class="d-flex justify-space-between" style="gap: 10px;">
        <p class="mb-0">Amount</p>
        <p class="mb-0" style="font-weight: 700 !important;">-- VES</p>
      </div>
    </v-card>

    <v-btn
      class="btn mt-4"
      style="--bg: var(--primary); --fs: 12px"
      @click="$router.push('/trades-pending')"
    >BUY</v-btn>

    <v-card class="card-outline mt-3 pa-3" style="--br: 10px;">
      <img src="@/assets/sources/icons/informacion.svg" alt="information icon" class="mr-3" style="float: left">

      <p class="mb-0" style="--c: #333">
        <strong style="font-weight: 700 !important;">ATTENTION!</strong> Please read the following terms and conditions carefully. Failure to comply might result in fail transaction and finantial loss.
      </p>
    </v-card>

    <h3 class="mt-4 mb-2">TERMS</h3>
    <p class="mb-0" style="--c: var(--primary); --fw: 700; --fs: 11px">
      Remesos Tsubega
    </p>
  </div>
</template>


<script>
export default {
  name: "TradesBuyPage",
  data() {
    return {
    }
  },
  head() {
    const title = 'Trades Buy';
    return {
      title,
    }
  },
};
</script>

<style src="~/assets/styles/pages/trades-buy.scss" lang="scss" />
