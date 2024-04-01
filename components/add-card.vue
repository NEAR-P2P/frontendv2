<template>
  <v-card class="add-card card-outline custom-card pa-4 d-flex flex-column">
    <h5>{{ add?.price }} <h6 class="d-inline-block">({{ add?.fiat }})</h6></h5>

    <div class="d-flex flex-column my-3">
      <span>Crypto Amount:</span>
      <span style="font-weight: 700 !important;">{{ add?.amount }} {{ add?.asset }}</span>
    </div>

    <div class="d-flex flex-column mb-3">
      <span>Limit:</span>
      <span style="font-weight: 700 !important;">
        Bs. {{ add?.minAmount }} - Bs. {{ add?.maxAmount }}
      </span>
    </div>

    <span class="text-center">{{ add?.completed }} orders // {{ add?.reputation }}%</span>

    <div class="d-flex flex-wrap mt-1" style="gap: 0px;">
      <v-badge
        v-for="(payment, i2) in add?.payments" :key="i2"
        dot inline left
        :style="`--size: 5px; --bg: ${i2 == 0 ? 'var(--primary)' : '#333333'}`"
      >
        <span style="--c: #000; font-size: 8px !important; font-family: var(--font6) !important; font-weight: 400 !important;">
          {{ payment }}
        </span>
      </v-badge>
    </div>

    <v-btn class="btn" style="--h: 35px; translate: 0 12px">
      SELL
    </v-btn>
  </v-card>
</template>

<script>
export default {
  props: {
    add: {
      type: Object,
      default: undefined
    }
  }
}
</script>

<style lang="scss">
.add-card {
  .v-badge__wrapper {
    display: flex;
    align-items: center;
    translate: 0 -1px;
  }
}
</style>
