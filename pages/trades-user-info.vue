<template>
  <div id="trades-user-info" class="d-flex flex-column">
    <navbar class="mb-4" hide-append />
  </div>
</template>


<script>
export default {
  name: "TradesUserInfoPage",
  data() {
    return {
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
