<template>
  <div id="trades-check" class="d-flex flex-column">
    <navbar
      title="CHECK"
      desc="PAYMENT"
      hide-append
      class="mb-4"
    />

    <!-- TODO here -->
  </div>
</template>


<script>
export default {
  name: "TradesCheckPage",
  data() {
    return {
    }
  },
  head() {
    const title = 'Trades Check';
    return {
      title,
    }
  },
};
</script>

<style src="~/assets/styles/pages/trades-check.scss" lang="scss" />
