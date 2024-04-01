<template>
  <div id="offers" class="d-flex flex-column">
    <navbar title="OFFERS" class="mb-4" />
    
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

      <div class="multi-btn" style="grid-column: 2 / span 2">
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

    <div class="offers">
      <v-card
        v-for="(item, i) in offers" :key="i"
        class="card-outline custom-card pa-4"
      >
        <!-- TODO here -->
      </v-card>
    </div>
  </div>
</template>


<script>
export default {
  name: "OffersPage",
  data() {
    return {
      offers: [
        {
          price: 8.986,
          fiat: "ves",
          asset: "USDT",
          amount: 99.92,
          minAmount: 50000,
          maxAmount: 100000,
          completed: 777,
          reputation: 95.20,
          payments: [
            "Pago Móvil",
            "BDV",
            "Bank Transfer (VZLA)",
          ]
        },
        {
          price: 8.986,
          fiat: "ves",
          asset: "USDT",
          amount: 99.92,
          minAmount: 50000,
          maxAmount: 100000,
          completed: 777,
          reputation: 95.20,
          payments: [
            "Pago Móvil",
            "BDV",
            "Bank Transfer (VZLA)",
          ]
        },
      ]
    }
  },
  head() {
    const title = 'Offers';
    return {
      title,
    }
  },
};
</script>

<style src="~/assets/styles/pages/offers.scss" lang="scss" />
