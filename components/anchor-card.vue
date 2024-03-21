<template>
  <v-card
    :min-width="minWidth"
    :max-width="maxWidth"
    :width="width"
    :min-height="minHeight"
    :max-height="maxHeight"
    :height="height"
    class="anchor-card card py-4 pl-4 pr-1"
    :style="`--bg: ${color}; --br: ${rounded};`"
    @click="$emit('click')"
  >
    <aside :class="[contentClass ?? 'd-flex flex-column justify-center' ]">
      <slot />
    </aside>

    <v-icon class="anchor-card__icon" color="#fff">mdi-chevron-right</v-icon>
  </v-card>
</template>

<script>
export default {
  name: "AnchorCard",
  props: {
    contentClass: {
      type: String,
      default: undefined
    },
    color: {
      type: String,
      default: "var(--primary)"
    },
    rounded: {
      type: String,
      default: "20px"
    },
    minWidth: {
      type: String,
      default: undefined
    },
    maxWidth: {
      type: String,
      default: undefined
    },
    width: {
      type: String,
      default: undefined
    },
    minHeight: {
      type: String,
      default: undefined
    },
    maxHeight: {
      type: String,
      default: undefined
    },
    height: {
      type: String,
      default: undefined
    },
  }
}
</script>

<style lang="scss">
.anchor-card {
  display: flex;

  * {
    color: #fff !important;
  }

  span:not(.not) {
    --c: #fff !important;
    font-family: var(--font3) !important;
    font-size: 11px !important;
    letter-spacing: var(--ls, 3.9px) !important;
  }

  &__icon {
    grid-column: 2;
    grid-row: 1 / span 2;
  }
}
</style>
