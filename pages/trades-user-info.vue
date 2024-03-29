<template>
  <div id="trades-user-info" class="d-flex flex-column">
    <navbar class="mb-4" hide-append />

    <v-card class="card d-flex align-center px-4" height="56" style="--bg: #D6DAE2">
      <profile-avatar
        sizes="35.83px"
        show-name-v2
        :profile="{
          name: 'detextre4',
          avatar: require('@/assets/sources/avatars/avatar.png'),
          verified: true,
        }"
      ></profile-avatar>
    </v-card>

    <div class="multi-btn mt-3">
      <v-btn
        :class="`btn${selection === 1 ? '' : '-outline'}`"
        :style="`--b: none; ${selection === 1 ? '--bg: var(--primary)' : '' }`"
        @click="selection = 1"
      >INFO</v-btn>

      <v-btn
        :class="`btn${selection === 2 ? '' : '-outline'}`"
        :style="`--b: none; ${selection === 2 ? '--bg: var(--primary)' : '' }`"
        @click="selection = 2"
      >ADS<br>(1)</v-btn>
      
      <v-btn
        :class="`btn${selection === 3 ? '' : '-outline'}`"
        :style="`--b: none; ${selection === 3 ? '--bg: var(--primary)' : '' }`"
        @click="selection = 3"
      >FEEDBACK<br>(659)</v-btn>
    </div>

    <!-- TODO here -->
    <div class="d-flex mt-3" style="gap: 10px;">
      <v-card class="card-outline" style="--br: 10px">
        asd
      </v-card>

      <v-card class="card-outline" style="--b: none; --br: 10px">
        asdasd
      </v-card>
    </div>
  </div>
</template>


<script>
export default {
  name: "TradesUserInfoPage",
  data() {
    return {
      selection: 1,
    }
  },
  head() {
    const title = 'Trades user info';
    return {
      title,
    }
  },
};
</script>

<style src="~/assets/styles/pages/trades-user-info.scss" lang="scss" />
