<template>
  <modal-styled
    ref="modalStyled"
    @open="$emit('open')"
    @close="$emit('close')"
  >
    <navbar
      title="CONNECT"
      desc="YOUR WALLET"
      hide-prepend
    >
      <template #append>
        <v-btn class="btn-icon" @click="$refs.modalStyled.model = false">
          <v-icon size="17">mdi-close</v-icon>
        </v-btn>
      </template>
    </navbar>


    <section class="mt-4 mb-6" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px;">
      <anchor-card
        v-for="(item, i) in wallets" :key="i"
        height="113px"
        :color="[0, 3, 4].includes(i) ? 'var(--primaryLight)' : undefined"
        @click="item.action() /* login() */"
      >
        <v-img-load
          :src="item.icon"
          :alt="`${item.name} icon`"
          sizes="50px"
          rounded="50%"
          cover
          class="flex-grow-0 mb-1"
        />

        <span style="max-width: 84px;">{{ item.name }}</span>
      </anchor-card>
    </section>

    <h3>¿QUÉ ES UNA WALLET?</h3>
    <v-card height="97px" class="card-outline pa-4 d-flex mb-4">
      <div class="d-flex flex-column justify-center">
        <h4 class="mb-1">RESGUARDA y ADMINISTRA TUS ACTIVOS DIGITALES</h4>

        <p class="mb-0">
          Almacena de forma segura z transfiere tus cryptos y NFT’s
        </p>
      </div>

      <img src="@/assets/sources/icons/security-icon.svg" alt="security icon">
    </v-card>

    <v-card height="97px" class="card-outline pa-4 d-flex">
      <div class="d-flex flex-column justify-center">
        <h4 class="mb-1">INICIE SESIÓN EN CUALQUIER APLICACIÓN NEAR</h4>

        <p class="mb-0">
          No es necesario nuevas cuentas o credenciales. ¡Conecta tu billetera y listo! 
        </p>
      </div>

      <img src="@/assets/sources/icons/wallet-icon.svg" alt="wallet icon">
    </v-card>
  </modal-styled>
</template>

<script>
import { connect, WalletConnection } from 'near-api-js';
// import selector from '~/services/wallet-selector-api/selector';
import "@near-wallet-selector/modal-ui/styles.css"
import config from '~/services/near-api';

export default {
  name: "ModalConnect",
  data() {
    return {
      selector: undefined,        
      modal: undefined,
      wallets: [
        {
          icon: require("assets/sources/logos/logo.svg"),
          name: "WALLET P2P",
          action: async () => {
            try {
              const near = await connect(config);
                const wallet = new WalletConnection(near)
                wallet.requestSignIn(
                  'contract.nearbase.testnet'
                )
            } catch (error) {
              console.log(error)
            }
            
          },
        },
        {
          icon: require("assets/sources/wallets/arepa.svg"),
          name: "Arepa WALLET",
          action: () => { }
        },
        {
          icon: require("assets/sources/logos/near-wallet-icon.svg"),
          name: "Wallet selector",
          action: () => {
            this.$selector.modal.show();
          }
        },
      ]
    };
  },
  async mounted() {
    if(await this.$selector.selector.isSignedIn()){
      this.login()
    }
  },
  methods: {
    showModal() {
      this.$refs.modalStyled.model = true
    },
    login() {
      localStorage.setItem('auth', true)
      this.$router.push('/')
    },
    }
};
</script>
