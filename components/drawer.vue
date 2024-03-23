<template>
  <modal-styled
    ref="modalStyled"
    colored
    content-class="drawer"
  >
    <navbar>
      <template #prepend>
        <router-link to="/">
          <img src="@/assets/sources/logos/logo.svg" alt="logo" style="width: 33px">
        </router-link>
      </template>
      <template #append>
        <v-btn class="btn-icon" @click="$refs.modalStyled.model = false">
          <v-icon size="17">mdi-close</v-icon>
        </v-btn>
      </template>
    </navbar>


    <v-list class="my-16" color="transparent">
      <v-list-item v-for="(item, i) in navigation" :key="i" :to="item.to">
        <img :src="item.icon" :alt="`${item.name} icon`" style="width: 20px">

        <v-list-item-title class="ml-3" v-text="item.name" />

        <v-icon size="20">mdi-chevron-right</v-icon>
      </v-list-item>
    </v-list>


    <Footer footer-padding="200px" />
  </modal-styled>
</template>

<script>
export default {
  name: "DrawerComponent",
  data() {
    return {
      navigation: [
        {
          icon: require("@/assets/sources/drawer/wallet.svg"),
          name: "WALLET"
        },
        {
          icon: require("@/assets/sources/drawer/p2p.svg"),
          name: "P2P",
          to: "/trades"
        },
        {
          icon: require("@/assets/sources/drawer/pending.svg"),
          name: "PENDING ORDER DETAILS"
        },
        {
          icon: require("@/assets/sources/drawer/trade.svg"),
          name: "TRADE DETAIL"
        },
        {
          icon: require("@/assets/sources/drawer/place.svg"),
          name: "PLACE OFFER"
        },
        {
          icon: require("@/assets/sources/drawer/account.svg"),
          name: "MY ACCOUNT"
        },
        {
          icon: require("@/assets/sources/drawer/payments.svg"),
          name: "PAYMENT METHODS"
        },
        {
          icon: require("@/assets/sources/drawer/history.svg"),
          name: "TRANSACTION HISTORY",
          to: "/history"
        },
      ]
    }
  },
  methods: {
    showModal() {
      this.$refs.modalStyled.model = true
    }
  },
}
</script>

<style lang="scss">
.drawer {
  .modal-styled__content {
    min-height: 100% !important;
    padding-bottom: var(--margin-footer-max);
  }

  .v-list {
    &-item, ::before { border-radius: 10px !important }
    * { color: #000 !important }
    &-item--active {
      background-color: #000 !important;
      * { color: #fff !important }
      img { filter: invert(100%) !important }
    }
    
    &-item__icon {
      margin-right: 10px !important;
    }
    &-item__title {
      font-family: var(--font3);
      font-weight: 400 !important;
      font-size: 10px;
    }
  }
}
</style>
