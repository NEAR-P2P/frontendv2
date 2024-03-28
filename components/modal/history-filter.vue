<template>
  <modal-styled
    ref="modalStyled"
    content-class="modal-history-filter"
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


    <v-switch
      label="Use last saved filter"
      inset
      class="ml-auto inverted"
      hide-details
      style="--h: 19px"
    ></v-switch>


    <h3 class="mt-1 mb-2">AMOUNT</h3>
    <v-text-field
      type="number"
      placeholder="TOTAL AMOUNT"
      hide-details solo
      class="hide-spin mb-2"
      style="--ls: .03em; --ls-place: 3.9px"
    >
      <template #append>
        <span
          class="ml-2"
          style="
            font-size: 11px !important;
            letter-spacing: 3.9px !important;
            font-family: var(--font4) !important;
          "
        >EUR</span>
      </template>
    </v-text-field>


    <h3 class="d-flex justify-space-between align-center mt-4 mb-2">
      PAYMENT (MULTI-SELECT)
      <v-checkbox
        hide-details
        label="ALL"
        on-icon="circle"
        off-icon="circle"
        class="btn-radio inverted"
        style="translate: 0 -2px;"
      ></v-checkbox>
    </h3>
    <v-select
      placeholder="BLOCKCHAIN"
      hide-details solo
      append-icon="mdi-chevron-down"
      class="mb-2"
      style="--ls: .03em; --ls-place: 3.9px"
    ></v-select>
    
    <v-select
      placeholder="NETWORK"
      hide-details solo
      append-icon="mdi-chevron-down"
      class="mb-2"
      style="--ls: .03em; --ls-place: 3.9px"
    ></v-select>
    
    <v-select
      placeholder="MERCHANT"
      hide-details solo
      append-icon="mdi-chevron-down"
      class="mb-2"
      style="--ls: .03em; --ls-place: 3.9px"
    ></v-select>
    
    <v-select
      placeholder="FIAT"
      hide-details solo
      append-icon="mdi-chevron-down"
      style="--ls: .03em; --ls-place: 3.9px"
    ></v-select>


    
    <h3 class="d-flex justify-space-between align-center mt-4 mb-2">
      COUNTRY / REGION
      <v-checkbox
        hide-details
        label="ALL"
        on-icon="circle"
        off-icon="circle"
        class="btn-radio inverted"
        style="translate: 0 -2px;"
      ></v-checkbox>
    </h3>

    <v-btn-toggle
      v-model="country" mandatory
      class="btn-group-selector"
      style="--basis: 70px"
    >
      <v-btn
        v-for="(item, i) in countries" :key="i"
        :class="{ active: country == i }"
      >{{ item.name }}</v-btn>
    </v-btn-toggle>

    
    <aside class="d-flex flex-column my-6" style="gap: 10px;">
      <v-switch
        label="Only display ads from pro merchant"
        inset
        hide-details
        class="mt-0"
      ></v-switch>
      
      <v-switch
        label="Only show ads from merchant"
        inset
        hide-details
        class="mt-0"
      ></v-switch>
    </aside>


    <div class="dual-btn">
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
      country: 'all',
      countries: [
        {
          name: 'All',
          value: 'all',
        },
        {
          name: 'Spain',
          value: 'spain',
        },
        {
          name: 'france',
          value: 'France',
        },
        {
          name: 'Italy',
          value: 'italy',
        },
        {
          name: 'Ecuador',
          value: 'ecuador',
        },
        {
          name: 'Venezuela',
          value: 'venezuela',
        },
        {
          name: 'USA',
          value: 'usa',
        },
        {
          name: 'Japon',
          value: 'japon',
        },
      ]
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
.modal-history-filter {
  > * {
    display: flex;
    flex-direction: column;
  }

  .active {
    background: var(--primary) !important;
    span { --c: #fff !important }
  }
}
</style>
