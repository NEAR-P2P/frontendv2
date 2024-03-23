<template>
  <div id="trades-chat" class="d-flex flex-column">
    <navbar
      title="PAYMENT"
      desc="TO BE BY THE BUYER"
      hide-prepend
      class="mb-4"
    >
      <template #append>
        <v-btn class="btn-icon" @click="$router.back()">
          <v-icon size="17">mdi-close</v-icon>
        </v-btn>
      </template>
    </navbar>
  </div>
</template>


<script>
export default {
  name: "TradesChatPage",
  data() {
    return {
    }
  },
  head() {
    const title = 'Trades Chat';
    return {
      title,
    }
  },
};
</script>

<style src="~/assets/styles/pages/trades-chat.scss" lang="scss" />
