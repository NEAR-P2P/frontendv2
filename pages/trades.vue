<template>
  <div id="trades" class="d-flex flex-column">
    <modal-trades-filter ref="modalTradesFilter" />

    <navbar title="TRADES" class="mb-4" />
    
    <aside clasS="mb-6" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px">
      <anchor-card rounded="10px" style="grid-row: span 2;">
        <v-img-load
          :src="require('@/assets/sources/tokens/usdt.svg')"
          alt="usdt icon"
          sizes="30px"
          cover
          class="mb-2 flex-grow-0"
        />

        <span style="--ls: .08em">TETHER (USDT)</span>
      </anchor-card>

      <div class="dual-btn" style="grid-column: 2 / span 2">
        <v-btn class="btn" style="--bg: var(--primary)">BUY</v-btn>
        <v-btn class="btn-outline" style="--b: none">SELL</v-btn>
      </div>

      
      <div class="d-flex align-center" style="gap: 10px; grid-column: span 2;">
        <v-text-field
          hide-details solo
          style="--h: 35px"
        >
          <template #prepend-inner>
            <img src="@/assets/sources/icons/search.svg" alt="search icon">
          </template>
        </v-text-field>

        <v-btn class="btn-icon" style="--bg: var(--card-2)">
          <img src="@/assets/sources/icons/refund.svg" alt="refund icon">
        </v-btn>
        <v-btn
          class="btn-icon" style="--bg: var(--card-2)"
          @click="$refs.modalTradesFilter.showModal()"
        >
          <img src="@/assets/sources/icons/filter.svg" alt="filter icon">
        </v-btn>
      </div>
    </aside>

    <offer-card
      v-for="(offer, i) in offers" :key="i"
      :offer="offer"
    >
      <template #actions>
        <v-btn
          class="btn mt-auto"
          width="114px"
          min-height="35px"
          @click="$router.push('/trades-buy')"
        >BUY</v-btn>
      </template>
    </offer-card>
  </div>
</template>


<script>
export default {
  name: "TradesPage",
  data() {
    return {
      offers: [
        {
          name: "asd",
          desc: "asd",
          payments: [
            "Pago Móvil",
            "BOD",
            "Bank Transfer (VZLA)",
            "other"
          ]
        },
        {
          name: "asd",
          desc: "asd",
          payments: [
            "Pago Móvil",
            "BOD",
            "Bank Transfer (VZLA)"
          ]
        },
        {
          name: "asd",
          desc: "asd",
          payments: [
            "Pago Móvil",
            "BOD",
            "Bank Transfer (VZLA)"
          ]
        },
        {
          name: "asd",
          desc: "asd",
          payments: [
            "Pago Móvil",
            "BOD",
            "Bank Transfer (VZLA)"
          ]
        },
      ]
    }
  },
  head() {
    const title = 'Trades';
    return {
      title,
    }
  },
};
</script>

<style src="~/assets/styles/pages/trades.scss" lang="scss" />
