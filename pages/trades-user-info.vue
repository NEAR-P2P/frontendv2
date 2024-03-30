<template>
  <div id="trades-user-info" class="d-flex flex-column">
    <navbar class="mb-4" hide-append />

    <v-card class="card d-flex align-center justify-space-between px-4" height="56" style="--bg: #D6DAE2">
      <profile-avatar
        sizes="35.83px"
        show-name-v2
        :profile="{
          name: 'detextre4',
          avatar: require('@/assets/sources/avatars/avatar.png'),
          verified: true,
        }"
      ></profile-avatar>

      <div
        v-if="selection === 3"
        class="d-flex flex-column text-end"
      >
        <span
          style="
            font-family: var(--font3) !important;
            font-size: 14px !important;
          "
        >99.00%</span>
        <span style="font-size: 10px !important;">659 Review (s)</span>
      </div>
    </v-card>

    <!-- tabs -->
    <div class="multi-btn mt-3 mb-4">
      <v-btn
        :class="`btn${selection === 1 ? '' : '-outline'}`"
        :style="`--b: none; ${selection === 1 ? '--bg: var(--primary)' : '' }`"
        @click="selection = 1"
      >INFO</v-btn>

      <v-btn
        :class="`btn${selection === 2 ? '' : '-outline'}`"
        :style="`--b: none; ${selection === 2 ? '--bg: var(--primary)' : '' }; border-inline: 2px solid #fff !important`"
        @click="selection = 2"
      >ADS<br>(1)</v-btn>
      
      <v-btn
        :class="`btn${selection === 3 ? '' : '-outline'}`"
        :style="`--b: none; ${selection === 3 ? '--bg: var(--primary)' : '' }`"
        @click="selection = 3"
      >FEEDBACK<br>(659)</v-btn>
    </div>

    <v-window v-model="selection">
      <!-- INFO -->
      <v-window-item :value="1">
        <div class="d-flex flex-wrap" style="gap: 15px;">
          <v-card class="card-outline flex-grow-1 custom-card pa-3" style="--br: 10px">
            <h6>30d<br>Trades</h6>

            <h5 class="my-2">813</h5>

            <h6>30d<br>Completion Rate</h6>

            <h5 class="mt-2">97.6%</h5>
          </v-card>

          <v-card class="card-outline flex-grow-1 custom-card pa-3 d-flex flex-column justify-space-between" style="--b: none; --br: 10px; gap: 10px">
            <div class="d-flex align-center justify-space-between" style="gap: 20px;">
              <h6>Avg. Release Time</h6>
              <span class="ml-auto text-end">12.88 Min (s)</span>
            </div>

            <div class="d-flex align-center justify-space-between" style="gap: 20px;">
              <h6>Avg. Pay Time</h6>
              <span class="ml-auto text-end">8.02Min (s)</span>
            </div>

            <div class="d-flex align-center justify-space-between" style="gap: 20px;">
              <h6>Positive Feedback</h6>
              <span class="ml-auto text-end">99%</span>
            </div>

            <div class="d-flex align-center justify-space-between" style="gap: 20px;">
              <h6>Positive</h6>
              <span class="ml-auto text-end">7.566</span>
            </div>

            <div class="d-flex align-center justify-space-between" style="gap: 20px;">
              <h6>Negative</h6>
              <span class="ml-auto text-end">78</span>
            </div>
          </v-card>
        </div>


        <div class="mt-4" style="gap: 10px; display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 70px), 1fr));">
          <v-card
            v-for="(value, key, i) in info" :key="i"
            min-height="81"
            class="card-outline custom-card px-2 py-3 d-flex flex-column justify-space-between"
            style="--br: 10px"
          >
            <h6 style="--fs: 8px">{{ key }}</h6>
            <span style="line-height: 1.5ch !important;">{{ value }}</span>
          </v-card>
        </div>

        
        <span
          class="btn my-4 d-flex align-center justify-center"
          style="--bg: #D6DAE2; color: #000 !important; --h: max-content; min-height: 34px; gap: 5px; font-size: 10px !important; font-weight: 500 !important;"
        >
          <strong style="font-weight: 700 !important;">COMPRAR 1.408 / VENDER 898</strong>
        </span>

        <v-btn class="btn" style="--bg: var(--primary); width: 100%;">
          BLOCK
        </v-btn>
      </v-window-item>


      <!-- ADS -->
      <v-window-item :value="2">
        <h3>ONLINE SELL ADS</h3>

        <div class="offers">
          <add-card
            v-for="(item, i) in adds"
            :key="i"
            :add="item"
          />
        </div>
      </v-window-item>


      <!-- FEEDBACK -->
      <v-window-item :value="3">
        <div class="d-flex flex-wrap" style="gap: 10px;">
          <v-checkbox
            hide-details
            label="ALL"
            on-icon="circle"
            off-icon="circle"
            class="btn-radio inverted my-auto"
            style="translate: 20px -2px; min-width: 50px"
          ></v-checkbox>

          <v-select
            placeholder="Filter"
            :items="filters"
            item-text="title"
            item-value="value"
            hide-details solo
            append-icon="mdi-chevron-down"
            :menu-props="{ offsetY: true }"
            class="mb-2"
            style="--ls: .03em; --ls-place: 3.9px; flex-basis: 100px"
          >
            <template #selection="{ item }">
              <span
                class="text-center"
                style="font-size: 10px !important; line-height: 12.1px !important; letter-spacing: 0.2em !important;"
              >
                {{ item.title }}<br>
                ({{ item.length }})
              </span>
            </template>
          </v-select>

          <v-select
            placeholder="Filter"
            :items="filters"
            item-text="title"
            item-value="value"
            hide-details solo
            append-icon="mdi-chevron-down"
            :menu-props="{ offsetY: true }"
            class="mb-2"
            style="--ls: .03em; --ls-place: 3.9px; flex-basis: 100px"
          >
            <template #selection="{ item }">
              <span
                class="text-center"
                style="font-size: 10px !important; line-height: 12.1px !important; letter-spacing: 0.2em !important;"
              >
                {{ item.title }}<br>
                ({{ item.length }})
              </span>
            </template>
          </v-select>
        </div>


        <div class="comments mt-2">
          <v-card
            v-for="(item, i) in comments" :key="i"
            class="card-outline custom-card pa-4"
          >
            <img :src="rates[item.rate]" alt="vote rate" style="width: 19px; float: right">

            <v-img-load
              :src="item.profile.avatar"
              alt="profile avatar"
              sizes="39px"
              rounded="50%"
              cover
            />

            <aside class="d-flex align-center my-1" style="gap: 5px;">
              <span
                style="
                  --c: #000;
                  font-family: var(--font3) !important;
                  font-size: 12px !important;
                  font-weight: 400 !important;
                  line-height: 15.36px !important;
                "
              >{{ item.profile.name }}</span>
              
              <img
                v-if="item.profile.verified"
                src="@/assets/sources/icons/profile-checked.svg" alt="check icon"
                style="width: 10.22px; translate: 0 -1.5px"
              >
            </aside>

            <span class="d-block">{{ item.date }} {{ item.method }}</span>
            <h6>{{ item.message }}</h6>
          </v-card>
        </div>
      </v-window-item>
    </v-window>
  </div>
</template>


<script>
export default {
  name: "TradesUserInfoPage",
  data() {
    return {
      selection: 3,
      info: {
        "Registered": "508 Day(s) ago",
        "First trade": "478 Day(s) ago",
        "Trading Counterparties": "4784",
        "All Trades": "1789 Time(s)"
      },
      adds: [
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
      ],
      filters: [
        {
          title: "POSITIVE",
          value: "positive",
          length: 542
        },
        {
          title: "NEGATIVE",
          value: "negative",
          length: 89
        },
      ],
      rates: [
        require("@/assets/sources/experience/positive.svg"),
        require("@/assets/sources/experience/good.svg"),
        require("@/assets/sources/experience/okay.svg"),
        require("@/assets/sources/experience/negative.svg"),
        require("@/assets/sources/experience/bad.svg"),
      ],
      comments: [
        {
          profile: {
            name: 'detextre4',
            avatar: require('@/assets/sources/avatars/avatar.png'),
            verified: true,
          },
          rate: 0,
          date: "2022-11-05",
          method: "Mercantil",
          message: "Transacción Rápida"
        },
        {
          profile: {
            name: 'detextre4',
            avatar: require('@/assets/sources/avatars/avatar.png'),
            verified: true,
          },
          rate: 1,
          date: "2022-11-05",
          method: "Mercantil",
          message: "Transacción Rápida"
        },
        {
          profile: {
            name: 'detextre4',
            avatar: require('@/assets/sources/avatars/avatar.png'),
            verified: true,
          },
          rate: 2,
          date: "2022-11-05",
          method: "Mercantil",
          message: "Transacción Rápida"
        },
        {
          profile: {
            name: 'detextre4',
            avatar: require('@/assets/sources/avatars/avatar.png'),
            verified: true,
          },
          rate: 3,
          date: "2022-11-05",
          method: "Mercantil",
          message: "Transacción Rápida"
        },
      ]
    }
  },
  head() {
    const title = 'Trades user info';
    return {
      title,
    }
  },
};
</script>

<style src="~/assets/styles/pages/trades-user-info.scss" lang="scss" />
