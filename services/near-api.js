import * as nearAPI from 'near-api-js'
import Vue from 'vue'

export default async function config() {
  const
    { connect, keyStores, WalletConnection } = nearAPI,
    keyStore = new keyStores.BrowserLocalStorageKeyStore(),
    config = {
      networkId: process.eventNames.VUE_APP_NETWORK,
      keyStore, 
      nodeUrl: process.env.VUE_APP_NODEURL,
      walletUrl: localStorage.getItem("walletUrl"),
      helperUrl: process.env.VUE_APP_HELPERURL,
      explorerUrl: process.env.VUE_APP_EXPLORERURL,
    },
    // connect to NEAR
    near = await connect(config),
    // create wallet connection
    wallet = new WalletConnection(near);

  Vue.prototype.$wallet = wallet
  Vue.prototype.$near = near
}


/*   when need buy
// create contract connection
const contract = new Contract(wallet.account(), item.contract_market, {
  changeMethods: ["buy"],
  sender: wallet.account(),
})
*/
