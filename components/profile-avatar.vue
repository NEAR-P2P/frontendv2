<template>
  <v-badge
    bottom
    :inline="showName"
    offset-x="12"
    offset-y="15"
    style="--bg: transparent;"
  >
    <v-img-load
      :src="profile.avatar"
      alt="profile avatar"
      :sizes="sizes"
      rounded="50%"
      cover
    />
    
    <span v-if="showName" class="profile-name ml-2">{{ profile.name }}</span>

    <template v-if="profile?.verified" #badge>
      <img src="@/assets/sources/icons/profile-checked.svg" alt="check icon">
    </template>
  </v-badge>
</template>

<script>
export default {
  name: "ProfileAvatar",
  props: {
    sizes: {
      type: String,
      default: "30px"
    },
    showName: {
      type: Boolean,
      default: false
    },
    profile: {
      type: Object,
      default: undefined
    }
  }
}
</script>

<style scoped lang="scss">
.profile-name {
  --c: #000 !important;
  font-family: var(--font3) !important;
  font-size: 14px !important;
  font-weight: 400 !important;
  letter-spacing: 0.03em !important;
  text-align: left !important;
}
</style>
