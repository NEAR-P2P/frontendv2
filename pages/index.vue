<template>
  <div id="home" class="d-flex flex-column">
    <navbar title="WALLET" hide-prepend>
      <template #desc>
        <aside class="d-flex align-center mt-2">
          <v-img-load
            :src="require('@/assets/sources/avatars/avatar-male.svg')"
            alt="avatar"
            sizes="64px"
            rounded="50%"
            class="flex-grow-0"
          />

          <div class="d-flex flex-column ml-2" style="max-width: 135px;">
            <h2 class="mb-2">GOOD AFTERNOON</h2>
            <h4 class="mb-0">{{ accountId }}</h4>
          </div>
        </aside>
      </template>
    </navbar>


    <v-tabs
      class="not mt-4"
      hide-slider grow
      background-color="#D6DAE2"
    >
      <v-tab
        v-for="(item, i) in tabs" :key="i"
      >{{ item }}</v-tab>
    </v-tabs>


    <v-card class="info-card card-outline mt-3 mb-5 pa-4" style="--br: 10px">
      <h4 class="mb-0">
        NEAR<br>
        <strong>≈${{ nearPrice }}</strong>
      </h4>

      <p class=my-2>
        {{ balances.near }} NEAR<br>
        <strong>$ 18.986</strong>
      </p>

      <p class="mb-0">
        <strong>USD - Tether<br></strong>
        <strong>= ${{ balances.usdt }}</strong>
      </p>
    </v-card>


    <h3 class="mb-2">RECENT ACTIVITY</h3>
    <v-btn 
      class="btn" style="--bg: var(--primary)"
      @click="getNearPrice()"
    >
      VIEW ALL
    </v-btn>

    <Footer hide-desc />
  </div>
</template>


<script>
import { connect, Contract, keyStores, utils, WalletConnection  } from 'near-api-js';
import { nearApiConfig } from "@/services/near-api-config";
import NearP2PApi from '@/repository/coingecko';

export default {
  name: "HomePage",
  data() {
    return {
      tabs: [
        "ORDERS",
        "COMPLETED",
        "RANKING"
      ],
      accountId: undefined,
      balances: {
        near: undefined,
        usdt: undefined,
        nearInUsd: undefined
      },
      nearPrice: undefined,
    }
  },
  head() {
    const title = 'Home';
    return {
      title,
    }
  },
  created() {
    this.getNearBalance();
    this.getBalanceUsdt();
    this.getNearPrice();
  },
  methods: {
    // TODO maybe, refactor this functions to instanciate nearConection 
    // and wallet only once
    async getNearBalance() {
      // connect to NEAR
      const nearConnection = await connect(
        nearApiConfig(new keyStores.BrowserLocalStorageKeyStore(), localStorage.getItem("wallet"))
      );
      const wallet = new WalletConnection(nearConnection);
      this.accountId = wallet.getAccountId();
      const account = await nearConnection.account(this.accountId);
      const balance = await account.getAccountBalance();
      /* console.log("------------\n", wallet)
      console.log("------------\n", balance) */
      this.balances.near = parseFloat(utils.format.formatNearAmount(balance.available).replace(",", ""));
    },
    async getBalanceUsdt() {
      try {
        // connect to NEAR
        const CONTRACT_NAME = process.env.VUE_APP_CONTRACT_NAME_USDT;
        const nearConnection = await connect(
          nearApiConfig(new keyStores.BrowserLocalStorageKeyStore(), localStorage.getItem("wallet"))
        );
        const wallet = new WalletConnection(nearConnection);
        // console.log(near);
        const contract = new Contract(wallet.account(), CONTRACT_NAME, {
          viewMethods: ["ft_balance_of"],
          changeMethods: [],
          sender: wallet.account()
        });
        const usdtBalance = await contract.ft_balance_of({
          account_id: wallet.getAccountId()
        });
        this.balances.usdt = usdtBalance / Math.pow(10, 6)
      } catch (error) {
        console.log(error)
      }
    },
    async getNearPrice() {

      const res = await NearP2PApi.getNearPrice()
      this.nearPrice = res.at(0).value
    }
  }
};
</script>

<style src="~/assets/styles/pages/index.scss" lang="scss" />
