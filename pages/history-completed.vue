<!-- TODO here -->

<template>
  <div id="history-completed" class="d-flex flex-column">
    <navbar title="HISTORY" desc="ORDER COMPLETED" hide-append class="mb-4" />
  </div>
</template>


<script>
export default {
  name: "HistoryCompletedPage",
  data() {
    return {
    }
  },
  head() {
    const title = 'History completed';
    return {
      title,
    }
  },
};
</script>

<style src="~/assets/styles/pages/history-completed.scss" lang="scss" />
