<template>
  <modal-styled
    ref="modalStyled"
    content-class="modal-trades-filter"
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

    <div class="mt-3 mb-4 d-flex align-center" style="gap: 10px;">
      <v-label for="last-filter" class="pointer">
        <h3 class="mb-0">APPLY LAST USED FILTER</h3>
      </v-label>

      <v-checkbox
        id="last-filter"
        hide-details
        on-icon="circle"
        off-icon="circle"
        class="btn-radio"
        style="translate: 0 -2px;"
      />
    </div>


    <h3>AMOUNT</h3>
    <v-text-field
      type="number"
      placeholder="ENTER TOTAL AMOUNT"
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
        >VES</span>
      </template>
    </v-text-field>

    <v-btn-toggle
      v-model="percentage"
      mandatory
      class="d-flex flex-wrap justify-space-between"
      style="gap: 10px; background: transparent;"
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
    
    <v-btn-toggle
      v-model="paymentLimit" mandatory
      class="btn-group-selector mb-4"
    >
      <v-btn
        v-for="(item, i) in paymentLimits" :key="i"
        :class="{ active: paymentLimit == i }"
      >{{ item.name }}</v-btn>
    </v-btn-toggle>

    <div class="d-flex justify-space-between align-center mb-2" style="gap: 10px;">
      <v-tooltip top content-class="tooltip">
        <template #activator="{ on, attrs}">
          <h3
            v-bind="attrs"
            class="d-flex justify-space-between align-center mb-0"
            v-on="on"
          >
            PAYMENT METHOD
          </h3>
        </template>

        <span>Most Used Payment Method</span>
      </v-tooltip>

      <v-checkbox
        hide-details
        label="ALL"
        on-icon="circle"
        off-icon="circle"
        class="btn-radio inverted ml-auto"
        style="translate: 0 -2px;"
      ></v-checkbox>
    </div>

    <v-text-field
      placeholder="SEARCH PAYMENT METHOD"
      hide-details solo
      style="--bg: #C6C6C6; --h: 35px; --c-place: #333333"
    >
      <template #prepend-inner>
        <img src="@/assets/sources/icons/search.svg" alt="search icon" class="mr-2">
      </template>
    </v-text-field>

    <v-btn-toggle
      v-model="paymentMethod" mandatory
      class="btn-group-selector mt-4"
      style="--basis: 100px"
    >
      <v-btn
        v-for="(item, i) in paymentMethods" :key="i"
        :class="{ active: paymentMethod == i }"
      >{{ item.name }}</v-btn>
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
      percentage: undefined,
      paymentLimit: 0,
      paymentLimits: [
        {
          name: 'All',
          value: 'all',
        },
        {
          name: '15',
          value: '15',
        },
        {
          name: '30',
          value: '30',
        },
        {
          name: '45',
          value: '45',
        },
        {
          name: '60',
          value: '60',
        },
      ],
      paymentMethod: 0,
      paymentMethods: [
        {
          name: 'All',
          value: 'all',
        },
        {
          name: 'BANCO DE VENEZUELA',
          value: 'banco de venezuela',
        },
        {
          name: 'BANESCO',
          value: 'banesco',
        },
        {
          name: 'PAGO MÓVIL',
          value: 'pago móvil',
        },
        {
          name: 'MERCANTIL',
          value: 'mercantil',
        },
        {
          name: 'PROVINCIAL',
          value: 'provincial',
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
.modal-trades-filter {
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
