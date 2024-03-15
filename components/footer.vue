<template>
  <v-footer id="footer" absolute color="transparent">
    <slot>
      <aside id="footer__navigation" class="d-flex align-center justify-space-between" style="gap: 20px; width: 100%">
        <p class="mb-0" style="--fw: 700">Global Dv</p>

        <v-btn
          v-for="(item, i) in socials" :key="i"
          class="btn-icon"
          :href="item.link"
          :target="item.target"
        >
          <img :src="item.icon" :alt="`${item.name} icon`">
        </v-btn>
      </aside>

      <p v-if="!hideDesc" class="mt-6 mb-0 text-center" style="font-size: 8px !important; max-width: 316px;">
        Open Source Project built with Near University DiR Program / NEAR HISPANO 
        <strong style="font-weight: 700 !important; font-size: 9px !important;">
          Series Opertaing Agreement
        </strong>
      </p>
    </slot>
  </v-footer>
</template>

<script>
export default {
  name: "FooterComponent",
  props: {
    hideDesc: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      socials: [
        {
          icon: require("@/assets/sources/footer/github.svg"),
          name: "Github",
          link: "https://github.com/dvconsultores",
          target: "_blank"
        },
        {
          icon: require("@/assets/sources/footer/email.svg"),
          name: "Email",
          link: "mailto:detextre4@gmail.com",
          target: "_self"
        },
        {
          icon: require("@/assets/sources/footer/near.svg"),
          name: "Near",
          link: "",
          target: "_blank"
        },
        {
          icon: require("@/assets/sources/footer/telegram.svg"),
          name: "Telegram",
          link: "https://t.me/+vyAd5yfzbwwwNmI5",
          target: "_blank"
        },
      ]
    }
  }
}
</script>

<style lang="scss">
#footer {
  @include parent;
  padding-inline: var(--margin-global) !important;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
}
</style>
