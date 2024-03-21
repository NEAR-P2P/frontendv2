<template>
  <div class="offer-card py-4">
    <aside class="offer-card__left d-flex flex-column align-start">
      <div class="d-flex mb-2" style="gap: 20px;">
        <profile-avatar
          :profile="{
            name: 'detextre4',
            avatar: require('@/assets/sources/avatars/avatar.png'),
            verified: true,
          }"
        />

        <div class="d-flex flex-column">
          <h4 class="mb-0">WinnerTrandingTeam</h4>
          <span>
            777 orders // 95.20%
          </span>
        </div>
      </div>

      <div class="d-flex align-center" style="gap: 20px;">
        <span>
          <img class="rel-icon" src="@/assets/sources/icons/like-icon.svg" alt="like icon">
          98.29%
        </span>
        
        <span>
          <img class="rel-icon" src="@/assets/sources/icons/time-icon.svg" alt="time icon">
          60 MIN
        </span>
      </div>

      <h3 class="mb-0">
        8.986 <strong>(ves)</strong>
      </h3>

      <p>
        Crypto Amount: <strong>99.92 USDT</strong> (ETH)<br>
        Limit: <strong>Bs. 50.000 - Bs.100.000</strong>
      </p>

      <div class="d-flex flex-wrap" style="gap: 10px;">
        <v-badge
          v-for="(item, i) in offer?.payments" :key="i"
          dot inline left
          :style="`--size: 10px; --bg: ${i == 0 ? 'var(--primary)' : '#333333'}`"
        >
          <span style="--c: #000; font-family: var(--font6) !important;">
            {{ item }}
          </span>
        </v-badge>
      </div>
    </aside>


    <aside class="offer-card__right d-flex flex-column align-end">
      <slot name="actions" />
    </aside>
  </div>
</template>

<script>
export default {
  name: "OfferCard",
  props: {
    offer: {
      type: Object,
      default: undefined
    }
  } 
}
</script>

<style lang="scss">
.offer-card {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #000;


  &__left {
    h3 {
      --ff: var(--font3) !important;
      --fs: max(18px, 1.5em) !important;
      --fw: 400 !important;
      --lh: 2.2ch;
      --ls: 0em !important;
      strong {
        font-size: 12px !important;
        line-height: 15px !important;
      }
    }

    h4 {
      --ff: var(--font2) !important;
      --fs: max(10px, 1em) !important;
      --fw: 400 !important;
      --lh: 13px !important;
      --ls: 0.03em !important;
    }

    span {
      font-family: var(--font1) !important;
      font-size: max(7px, 0.85em) !important;
      font-weight: 400 !important;
      letter-spacing: 0em !important;
    }

    p {
      --fs: max(9px, 0.9em) !important;
      --fw: 400 !important;
      --lh: 2.2ch !important;
      --ls: -0.01em !important;
      strong {
        font-weight: 600 !important;
      }
    }

    .rel-icon {
      width: 1.5em !important;
    }
  }
}
</style>
