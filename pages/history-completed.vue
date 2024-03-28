<template>
  <div id="history-completed" class="d-flex flex-column">
    <navbar title="HISTORY" desc="ORDER COMPLETED" hide-append class="mb-4" />

    <aside class="header-cards">
      <v-card class="card-outline custom-card d-flex flex-column pa-4 justify-center mr-auto">
        <h6>SELL USDT</h6>

        <div class="mt-2 d-flex flex-column">
          <span>Fiat Amount</span>
          <h5>Bs. 577.800</h5>
        </div>

        <div class="mt-2 d-flex flex-column">
          <span>Price:</span>
          <span><strong>Bs. 9.640</strong></span>
        </div>

        <div class="mt-2 d-flex flex-column">
          <span>Crypto Amount:</span>
          <span><strong>60.000  USDT</strong></span>
        </div>
      </v-card>


      <v-card class="ticket-card custom-card d-flex flex-column ml-auto">
        <aside class="pa-4">
          <v-btn class="btn-icon ml-1" style="--size: 28px; float: right;">
            <img src="@/assets/sources/icons/copy-icon.svg" alt="copy icon">
          </v-btn>

          <div class="d-flex flex-column">
            <span>Order Number:</span>
            <span class="ellipsis-box" style="--lines: 3" title="634727638909288"><strong>634727638909288</strong></span>
          </div>
          
          <div class="d-flex flex-column mt-2">
            <span>Created Timer</span>
            <span><strong>2022-11-06 10:29:51</strong></span>
          </div>
        </aside>


        <aside class="mt-auto d-flex align-center justify-space-between pa-4 pointer">
          <div class="d-flex flex-column">
            <span>Buyer’s Nickname</span>
            <span><strong>CRITOBETA</strong></span>
          </div>

          <v-icon color="var(--primary)">mdi-chevron-right</v-icon>
        </aside>
      </v-card>
    </aside>

    <span
      class="btn my-4 d-flex align-center justify-center"
      style="--bg: #D6DAE2; color: #000 !important; --h: max-content; min-height: 34px; gap: 5px; font-size: 10px !important; font-weight: 500 !important;"
    >
      <strong style="font-weight: 700 !important;">PAYMENT METHOD:</strong>Mercantil
    </span>


    <h3 style="max-width: 218px;">
      HOW WAS YOUR TRADING EXPERIENCE
    </h3>

    <aside class="d-flex flex-wrap justify-space-between" style="gap: 10px">
      <div
        v-for="(value, i) in experiences" :key="i"
        class="d-flex flex-column align-center pointer"
        @click="experience = i"
      >
        <img
          :src="require(`@/assets/sources/experience/${value}.svg`)" :alt="`${value} experience`"
          :style="`width: 46px; ${experience === i ? 'filter: drop-shadow(0px 4px 4px #00000040)' : ''}`"
        >
        <span class="mt-2" style="text-transform: capitalize;">{{ value }}</span>
      </div>
    </aside>
  </div>
</template>


<script>
export default {
  name: "HistoryCompletedPage",
  data() {
    return {
      experience: null,
      experiences: [
        "positive",
        "good",
        "okay",
        "bad",
        "negative"
      ]
    }
  },
  head() {
    const title = 'History completed';
    return {
      title,
    }
  },
};
</script>

<style src="~/assets/styles/pages/history-completed.scss" lang="scss" />
