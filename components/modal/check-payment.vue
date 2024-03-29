<template>
  <v-bottom-sheet
    v-model="model"
    content-class="modal-check-payment pa-5 pt-8"
  >
    <aside class="d-flex" style="gap: 10px;">
      <h3 class="mb-0">DID YOU RECEIVE THE PAYMENT IN YOUR ACCOUNT?</h3>
      <v-btn class="btn-icon" @click="model = false">
        <v-icon size="17">mdi-close</v-icon>
      </v-btn>
    </aside>


    <v-radio-group v-model="userSelection" hide-details>
      <v-radio
        v-for="n in 2" :key="n"
        :label="n === 1 ? 'I have not received payment from the counterparty.' : 'I have received and verified payment'"
        :value="n"
      ></v-radio>
    </v-radio-group>

    <v-card class="card-outline pa-4 my-5" style="--br: 10px">
      <span class="warn-text d-flex align-center mb-4" style="gap: 10px;">
        <img src="@/assets/sources/icons/advertencia.svg" alt="warning icon">
        Important guidelines to avoid loss of assets
      </span>

      <ul>
        <li v-for="([checked, text], i) in warnings" :key="i" :class="{ checked }">
          {{ text }}
        </li>
      </ul>
    </v-card>


    <div class="multi-btn">
      <v-btn class="btn-outline">CANCEL</v-btn>
      <v-btn class="btn" style="--bg: var(--primary)">CONFIRM</v-btn>
    </div>
  </v-bottom-sheet>
</template>

<script>
export default {
  data() {
    return {
      model: false,
      userSelection: null,
      warnings: [
        [true, "Log in to your receiving account to manually confirm that you have received the payment"],
        [true, "Verify that the buyer's real name on NEAR P2P matches their payment account"],
        [false, "If the names do not match, DO NOT release the crypto and refund the funds to the buyer immediately."],
        [false, "Do not confirm the payment based on the buyer's proof of payment alone"],
        [true, "Check that the payment is no longer being processed and that it is available in your account"]
      ]
    }
  }
}
</script>

<style lang="scss">
.modal-check-payment {
  max-width: var(--parent) !important;
  width: 100%;
  margin-inline: auto;
  padding-inline: var(--margin-global);
  background-color: var(--card) !important;
  border: 1px solid #333333 !important;
  border-radius: 30px 30px 0 0 !important;
  
  .warn-text {
    font-size: 14px !important;
    font-weight: 700 !important;
    line-height: 16.94px !important;
    letter-spacing: -0.01em !important;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
    list-style: none;

    li {
      position: relative;
      font-family: var(--font4) !important;
      font-size: 10px !important;
      font-weight: 400 !important;
      line-height: 12.1px !important;

      &::before {
        --size: 14.22px;
        content: "";
        position: absolute;
        top: 2px;
        left: calc(var(--size) * -1 - 10px);
        width: var(--size);
        height: var(--size);
        background: center no-repeat url(../../assets/sources/icons/uncheck.svg);
        background-size: contain;
        border-radius: 50%;
      }

      &.checked::before { background: center no-repeat url(../../assets/sources/icons/profile-checked.svg) }
    }
  }
}
</style>
