import Vue from "vue";
import { setupWalletSelector } from "@near-wallet-selector/core";
import { setupMyNearWallet } from "@near-wallet-selector/my-near-wallet";
import { setupHereWallet } from "@near-wallet-selector/here-wallet";
import { setupCoin98Wallet } from "@near-wallet-selector/coin98-wallet";
import { setupModal } from "@near-wallet-selector/modal-ui";
import { setupSender } from "@near-wallet-selector/sender";
import { setupMintbaseWallet } from "@near-wallet-selector/mintbase-wallet";

export default async function ({app}) {
  const resSetup = await setupWalletSelector({
    network: process.env.VUE_APP_NETWORK,
    modules: [
      setupMyNearWallet(),
      setupSender(),
      setupHereWallet(),
      setupCoin98Wallet(),
      setupMintbaseWallet({
        networkId: "mainnet",
        walletUrl: "https://wallet.mintbase.xyz",
        callbackUrl: "https://www.mywebsite.com",
        deprecated: false,
      }),
    ],
  });
  const state = resSetup.store.getState();

  try {
    const wallet = await resSetup.wallet(state.selectedWalletId);
    const accounts = await wallet.getAccounts();
    const item = {
      selector: resSetup,
      wallet,
      getAccountId: () => (accounts.length > 0 ? accounts[0].accountId : null),
      modal: setupModal(resSetup, {
        contractId: process.env.VUE_APP_CONTRACT_ID,
      }),
    };

    Vue.prototype.$selector = item;
    return item;
  } catch (error) {
    const item = {
      selector: resSetup,
      getAccountId: () => null,
      modal: setupModal(resSetup, {
        contractId: process.env.VUE_APP_CONTRACT_ID,
      }),
    };
    
    app.router.beforeEach((to, from, next) => {
      if(resSetup.isSignedIn()){
        localStorage.setItem('auth', true)
      }
      return next();
    })
    Vue.prototype.$selector = item;

    return item;
  }
}
