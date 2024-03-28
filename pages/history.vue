<template>
  <div id="history" class="d-flex flex-column">
    <modal-history-filter ref="modalHistoryFilter" />

    <navbar title="HISTORY" hide-append class="mb-4" />
    
    <div class="dual-btn" style="grid-column: 2 / span 2">
      <v-btn
        :class="`btn${selection === 1 ? '' : '-outline'}`"
        :style="`--b: none; ${selection === 1 ? '--bg: var(--primary)' : '' }`"
        @click="selection = 1"
      >OPEN ORDERS (4)</v-btn>
      <v-btn
        :class="`btn${selection === 2 ? '' : '-outline'}`"
        :style="`--b: none; ${selection === 2 ? '--bg: var(--primary)' : '' }`"
        max-width="max-content"
        @click="selection = 2"
      >COMPLETED</v-btn>
    </div>


    <v-window v-model="selection" class="mt-4">
      <!-- opened -->
      <v-window-item id="history__opened" :value="1">
        <v-card
          v-for="(item, i) in history" :key="i"
          class="custom-card card-outline pa-4 d-flex flex-column justify-center"
        >
          <img
            :src="require(item.type === 'BUY' ? '@/assets/sources/icons/down-price.svg' : '@/assets/sources/icons/up-price.svg')"
            alt="up price icon"
            style="width: 36px;"
          >

          <div class="d-flex flex-column mt-3 mb-2">
            <h6 class="mb-1">{{ item.type }}</h6>

            <span>Price:
              <strong>{{ item.fiat }}. {{ item.price }}</strong>
            </span>

            <span><strong>{{ item.date }}</strong></span>
          </div>

          <h5>{{ item.amount }}</h5>
          <h5 style="--fs: 12px">{{ item.asset }}</h5>
        </v-card>
      </v-window-item>


      <!-- completed -->
      <v-window-item id="history__completed" :value="2">
        <v-card
          class="card py-5 px-7"
          style="--b: 1.5px solid var(--primary); --bg: radial-gradient(104.26% 593.66% at 45.89% 119.15%, #24C8FF 0%, #0967FE 100%);"
        >
          <h4
            class="mb-3"
            style="--c: #fff; --fs: 24px; --fw: 400; --lh: 24px; --ls: 0.355em;"
          >166 TRADES</h4>

          <span
            style="
              --c: #fff;
              font-size: 11px !important;
              font-weight: 500 !important;
              line-height: 15px !important;
              letter-spacing: 0.125em !important;
            "
          >
            <span class="d-block">$20,4898.53 USD</span>
            <span class="d-block">Equivalent Volume</span>
          </span>
        </v-card>


        <aside
          class="controls my-4 align-center"
          style="display: grid; grid-template-columns: repeat(9, 1fr); grid-template-rows: repeat(2, 1fr); column-gap: 10px;"
        >
          <v-select
            placeholder="METHOD"
            append-icon="mdi-chevron-down"
            hide-details solo
            style="grid-column: span 3;"
          ></v-select>
          
          <v-select
            placeholder="PAIR"
            append-icon="mdi-chevron-down"
            hide-details solo
            style="grid-column: span 3;"
          ></v-select>
          
          <v-select
            placeholder="DIRECTION"
            append-icon="mdi-chevron-down"
            hide-details solo
            style="grid-column: span 3;"
          ></v-select>
          
          <v-select
            placeholder="DATE"
            append-icon="mdi-chevron-down"
            hide-details solo
            style="grid-column: span 7;"
          ></v-select>

          <v-btn
            class="btn-icon"
            style="--bg: var(--card-2);"
          >
            <img src="@/assets/sources/icons/search.svg" alt="search icon">
          </v-btn>

          <v-btn
            class="btn-icon"
            style="--bg: var(--card-2);"
            @click="$refs.modalHistoryFilter.showModal()"
          >
            <img src="@/assets/sources/icons/filter.svg" alt="filter icon">
          </v-btn>
        </aside>


        <section class="grid">
          <v-card
            v-for="(item, i) in history" :key="i"
            class="custom-card card-outline pa-4 d-flex flex-column justify-center"
            @click="$router.push('/history-completed')"
          >
            <img
              :src="require(item.type === 'BUY' ? '@/assets/sources/icons/down-price.svg' : '@/assets/sources/icons/up-price.svg')"
              alt="up price icon"
              style="width: 36px;"
            >

            <div class="d-flex flex-column mt-3 mb-2">
              <h6 class="mb-1">{{ item.type }}</h6>

              <span>Price:
                <strong>{{ item.fiat }}. {{ item.price }}</strong>
              </span>

              <span><strong>{{ item.date }}</strong></span>
            </div>

            <h5>{{ item.amount }}</h5>
            <h5 style="--fs: 12px">{{ item.asset }}</h5>
          </v-card>
        </section>


        <!-- <v-btn class="btn my-4" style="--bg: var(--primary); width: 100%">
          <img src="@/assets/sources/icons/scroll-down.svg" alt="scroll down icon">
        </v-btn> -->
      </v-window-item>
    </v-window>
  </div>
</template>


<script>
export default {
  name: "HistoryPage",
  data() {
    return {
      selection: 1,
      history: [
        {
          price: '9.640',
          type: 'BUY',
          date: '2023-10-20 // 20:18',
          amount: '1150.534776',
          fiat: 'Bs',
          asset: 'NEAR'
        },
        {
          price: '9.640',
          type: 'SELL',
          date: '2023-10-20 // 20:18',
          amount: '890.0997',
          fiat: 'Bs',
          asset: 'BNB'
        },
        {
          price: '9.640',
          type: 'BUY',
          date: '2023-10-20 // 20:18',
          amount: '1150.534776',
          fiat: 'Bs',
          asset: 'NEAR'
        },
        {
          price: '9.640',
          type: 'SELL',
          date: '2023-10-20 // 20:18',
          amount: '890.0997',
          fiat: 'Bs',
          asset: 'BNB'
        },
      ]
    }
  },
  head() {
    const title = 'History';
    return {
      title,
    }
  },
};
</script>

<style src="~/assets/styles/pages/history.scss" lang="scss" />
