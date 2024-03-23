<template>
  <div id="history" class="d-flex flex-column">
    <navbar title="TRADES" class="mb-4" />
    
    <div class="dual-btn" style="grid-column: 2 / span 2">
      <v-btn class="btn" style="--bg: var(--primary)">OPEN ORDERS (4)</v-btn>
      <v-btn class="btn-outline" max-width="max-content" style="--b: none">COMPLETED</v-btn>
    </div>


    <section id="history__content" class="mt-4">
      <v-card
        v-for="(item, i) in history" :key="i"
        class="card-outline pa-4"
      >
        {{ item }}
      </v-card>
    </section>
  </div>
</template>


<script>
export default {
  name: "HistoryPage",
  data() {
    return {
      history: [
        "asd", "asd"
      ]
    }
  },
  head() {
    const title = 'History';
    return {
      title,
    }
  },
};
</script>

<style src="~/assets/styles/pages/history.scss" lang="scss" />
