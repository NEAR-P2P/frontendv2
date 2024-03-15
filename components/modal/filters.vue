<template>
  <modal-styled
    ref="modalStyled"
    content-class="modal-filters"
    @open="$emit('open')"
    @close="$emit('close')"
  >
    <navbar title="FILTER" hide-prepend>
      <template #append>
        <v-btn class="btn-icon" @click="$refs.modalStyled.model = false">
          <v-icon size="17">mdi-close</v-icon>
        </v-btn>
      </template>
    </navbar>

    <h3 class="d-flex align-center" style="gap: 10px">
      APPLY LAST USED FILTER

      <v-checkbox
        hide-details
        on-icon="circle"
        off-icon="circle"
        class="mt-0"
        style="translate: 0 -2px;"
      />
    </h3>


    <h3>AMOUNT</h3>
    <v-text-field
      type="number"
      placeholder="ENTER TOTAL AMOUNT"
      hide-details solo
      class="hide-spin mb-2"
    >
      <template #append>
        <span
          class="ml-2"
          style="
            font-size: 11px !important;
            letter-spacing: 3.9px !important;
            font-family: var(--font4) !important;
          "
        >VES</span>
      </template>
    </v-text-field>

    <v-btn-toggle
      v-model="percentage"
      mandatory
      class="d-flex flex-wrap justify-space-between"
      style="gap: 5px; background: transparent;"
    >
      <v-btn
        v-for="(item, i) in [1, 5, 10, 20, 50, 100]" :key="i"
        min-width="45.51px"
        min-height="35px"
        class="btn flex-grow-1 flex-shrink-1"
        :class="{ active: percentage == i }"
        style="--bg: var(--card-2); flex-basis: 40px; border: none !important;"
      >
        <span
          style="
            --c: #333;
            letter-spacing: .11em !important;
            font-weight: 400 !important;
          "
        >{{ item }}X</span>
      </v-btn>
    </v-btn-toggle>

    
    <h3 class="mt-4">PAYMENT TIME LIMIT (MINUTES)</h3>
    
    <v-btn-toggle>
      <!-- TODO buttons here -->
    </v-btn-toggle>

    
    <h3 class="d-flex justify-space-between align-center">
      PAYMENT METHOD

      <h6 class="d-flex align-center mb-0">
        All
        <v-checkbox
          hide-details
          on-icon="circle"
          off-icon="circle"
          class="mt-0"
          style="translate: 0 -2px;"
        ></v-checkbox>
      </h6>
    </h3>

    <v-text-field
      placeholder="SEARCH PAYMENT METHOD"
      hide-details solo
    >
      <template #prepend-inner>
        <img src="@/assets/sources/icons/search.svg" alt="search icon" class="mr-2">
      </template>
    </v-text-field>

    <v-btn-toggle>
      <!-- TODO buttons here -->
    </v-btn-toggle>


    <div class="dual-btn mt-16">
      <v-btn class="btn-outline">
        RESET
      </v-btn>
      <v-btn class="btn" style="--bg: var(--primary)">
        CONFIRM
      </v-btn>
    </div>
  </modal-styled>
</template>

<script>
export default {
  name: "ModalFilters",
  data() {
    return {
      percentage: undefined
    };
  },
  methods: {
    showModal() {
      this.$refs.modalStyled.model = true
    },
  }
};
</script>

<style lang="scss">
.modal-filters {
  .v-input--checkbox {
    $size: 15px;
    i { font-size: 15px !important }
    .v-input--selection-controls__input {
      position: relative !important;
      display: grid !important;
      place-items: center !important;
      place-content: center !important;
    }

    .v-input--selection-controls__ripple,
    .v-input__slot {
      left: 0 !important;
      right: 0 !important;
      top: 0 !important;
      bottom: 0 !important;
      margin: auto !important;
      width: $size !important;
      height: $size !important;
    }
  }

  .active {
    background: var(--primary) !important;
    span { --c: #fff !important }
  }
}
</style>
