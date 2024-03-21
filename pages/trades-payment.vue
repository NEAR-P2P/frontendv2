<template>
  <div id="trades-payment" class="d-flex flex-column">
    <navbar
      title="PAYMENT"
      desc="METHOD"
      hide-append
      class="mb-4"
    />

    <aside class="payments mb-6">
      <v-card v-for="(payment, i) in payments" :key="i" class="card-outline pa-4">
        <v-btn class="btn-icon" style="--size: 26px">
          <v-icon size="14" style="translate: 2px 0">mdi-pencil</v-icon>
        </v-btn>

        <p
          v-for="(item, i2) in payment" :key="i2"
          class="mb-0 mt-2"
        >{{ item }}</p>
      </v-card>
    </aside>

    <h3>METHODS OF PAYMENT ACCEPTED</h3>

    <v-btn class="btn-outline mb-4">
      <span style="color: #333 !important">ADD MERCANTIL</span>
      <v-icon size="18" class="ml-auto" style="width: 15px">mdi-plus-circle</v-icon>
    </v-btn>

    <v-btn
      class="btn"
      style="--bg: var(--primary); --ls: .23em"
    >
      SEE PAYMENT METHODS NOT ACCEPTED 
      <v-icon size="18" class="ml-auto" style="width: 15px">mdi-chevron-down</v-icon>
    </v-btn>
  </div>
</template>


<script>
export default {
  name: "TradesPaymentPage",
  data() {
    return {
      payments: [
        [
          "Mercantil", "HERNANDEZ PASTRANO MARIANGELA DEL ROS...", "V-0105"
        ],
        [
          "Mercantil", "HERNANDEZ PASTRANO MARIANGELA DEL ROS...", "V-17977741"
        ],
      ]
    }
  },
  head() {
    const title = 'Trades Payment';
    return {
      title,
    }
  },
};
</script>

<style src="~/assets/styles/pages/trades-payment.scss" lang="scss" />
