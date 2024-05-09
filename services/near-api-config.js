// Cross-domain proxy prefix
// const API_PROXY_PREFIX='/api'
// const BASE_URL = process.env.NODE_ENV === 'production' ? process.env.VUE_APP_API_BASE_URL : API_PROXY_PREFIX
const BASE_URL = process.env.VUE_APP_API_BASE_URL;
const BASE_URL_MAIL = process.env.VUE_APP_API_MAIL_URL;
const NETWORK = process.env.NODE_ENV === "development" ? process.env.VUE_APP_NETWORK : process.env.VUE_APP_NETWORK;

function nearApiConfig(keyStores, wallet) {
  localStorage.setItem("wallet", wallet);
  switch (NETWORK) {
    case "mainnet":
      return {
        networkId: "mainnet",
        nodeUrl: "https://rpc.mainnet.near.org",
        keyStore: keyStores,
        walletUrl: localStorage.getItem("wallet"),
        helperUrl: "https://helper.mainnet.near.org",
        explorerUrl: "https://explorer.mainnet.near.org"
      };
    case "testnet":
      return {
        networkId: "testnet",
        keyStore: keyStores,
        nodeUrl: "https://rpc.testnet.near.org",
        walletUrl: localStorage.getItem("wallet"),
        helperUrl: "https://helper.testnet.near.org",
        explorerUrl: "https://explorer.testnet.near.org"
      };
    default:
      throw new Error(`Unconfigured environment '${NETWORK}'`);
  }
}

module.exports = {
  ROUTES: `${BASE_URL}/menu-get`,
  GOODS: `${BASE_URL}/goods`,
  COINGECKO: `${BASE_URL_MAIL}get-price/`,
  MAIL: `${BASE_URL_MAIL}admin@nearp2p.com/`,
  MAILCANCEL: `${BASE_URL_MAIL}cancel/`,
  MAILDISPUTE: `${BASE_URL_MAIL}dispute/admin@nearp2p.com/`,
  // MAILAUTODISPUTE: `${BASE_URL_MAIL}autodispute/admin@nearp2p.com/`,
  nearApiConfig
};
