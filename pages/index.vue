<template>
  <div id="home" class="d-flex flex-column">
    <navbar title="WALLET" hide-prepend>
      <template #desc>
        <aside class="d-flex align-center mt-2">
          <v-img-load
            :src="require('@/assets/sources/avatars/avatar-male.svg')"
            alt="avatar"
            sizes="64px"
            rounded="50%"
            class="flex-grow-0"
          />

          <div class="d-flex flex-column ml-2" style="max-width: 135px;">
            <h2 class="mb-2">GOOD AFTERNOON</h2>
            <h4 class="mb-0">FritzWagner.near</h4>
          </div>
        </aside>
      </template>
    </navbar>


    <v-tabs
      class="not mt-4"
      hide-slider grow
      background-color="#D6DAE2"
    >
      <v-tab
        v-for="(item, i) in tabs" :key="i"
      >{{ item }}</v-tab>
    </v-tabs>


    <v-card class="info-card card-outline mt-3 mb-5 pa-4" style="--br: 10px">
      <h4 class="mb-0">
        NEAR<br>
        <strong>≈$8.986</strong>
      </h4>

      <p class=my-2>
        0.978689 NEAR<br>
        <strong>$ 18.986</strong>
      </p>

      <p class="mb-0">
        <strong>USD - Tether<br></strong>
        <strong>= $0.00000</strong>
      </p>
    </v-card>


    <h3 class="mb-2">RECENT ACTIVITY</h3>
    <v-btn class="btn" style="--bg: var(--primary)">
      VIEW ALL
    </v-btn>

    <Footer hide-desc />
  </div>
</template>


<script>
export default {
  name: "HomePage",
  data() {
    return {
      tabs: [
        "ORDERS",
        "COMPLETED",
        "RANKING"
      ]
    }
  },
  head() {
    const title = 'Home';
    return {
      title,
    }
  },
};
</script>

<style src="~/assets/styles/pages/index.scss" lang="scss" />
