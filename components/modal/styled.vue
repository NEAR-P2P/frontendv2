<template>
  <v-dialog
    v-model="model"
    :content-class="`modal-styled ${colored ? 'colored' : ''} ${contentClass}`"
    transition="dialog-bottom-transition" 
    fullscreen
  >
    <img class="bg-circle-modal" :src="require(`~/assets/sources/images/circle.svg`)" alt="bg-circle-modal">

    <div class="modal-styled__content">
      <slot />
    </div>
  </v-dialog>
</template>

<script>
export default {
  name: "ModalStyled",
  props: {
    contentClass: {
      type: String,
      default: ''
    },
    colored: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      model: false,
    };
  },
  watch: {
    model(value) {
      if (value) this.$emit('open')
      else this.$emit('close')
    }
  }
};
</script>

<style lang="scss">
.modal-styled {
  isolation: isolate !important;
  position: relative !important;
  background: no-repeat center radial-gradient(77.96% 77.96% at 72.82% 14.45%, #F7F5F5 0%, #CED3DD 100%) !important;
  &.colored {
    background: radial-gradient(157.01% 100% at 81.54% 9%, #0967FE 0%, rgba(220, 220, 220, 0.48) 42.71%, #D6DAE2 72.92%, #0967FE 100%) !important;
  }
  background-size: cover !important;
  backdrop-filter: blur(100px);
  display: grid;
  justify-content: center;

  &__content {
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    margin: auto !important;
    @include parent;
    padding-inline: var(--margin-global) !important;
  }
}
</style>
