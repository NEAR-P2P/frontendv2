<template>
  <div style="width: 100%;">
    <Drawer ref="drawer"></Drawer>

    <section class="navbar d-flex flex-column">
      <aside class="navbar__navigation d-flex justify-space-between align-center flex-grow-1" style="gap: 20px;">
        <slot name="prepend">
          <v-btn :class="{ hidden: hidePrepend }" class="btn-icon" @click="onPressBackBtn ? onPressBackBtn() : $router.go(-1)">
            <v-icon size="17">mdi-chevron-left</v-icon>
          </v-btn>
        </slot>

        <slot name="append">
          <v-btn :class="{ hidden: hideAppend }" class="btn-icon" @click="$refs.drawer.showModal()">
            <img src="@/assets/sources/icons/options.svg" alt="settings">
          </v-btn>
        </slot>
      </aside>

      <slot name="title">
        <h1 v-if="title">{{ title }}</h1>
      </slot>
      
      <slot name="desc">
        <h2 v-if="desc">{{ desc }}</h2>
      </slot>
    </section>
  </div>
</template>

<script>
export default {
  name: "NavbarComponent",
  props: {
    hidePrepend: Boolean,
    hideAppend: Boolean,
    title: {
      type: String,
      default: undefined
    },
    desc: {
      type: String,
      default: undefined
    },
    onPressBackBtn: {
      type: Function,
      default: undefined
    },
  },
};
</script>

<style lang="scss">
.navbar {
  margin-top: var(--margin-header);

  &__navigation { max-height: 31px !important }

  h1, h2 { margin-bottom: 0 }
  h1 { margin-top: 8px }
  h2 { --c: hsl(0, 0%, 0%, .43) }
}
</style>
