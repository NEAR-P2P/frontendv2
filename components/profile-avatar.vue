<template>
  <v-badge bottom offset-x="12" offset-y="15" style="--bg: transparent;">
    <v-img-load
      :src="profile.avatar"
      alt="profile avatar"
      :sizes="sizes"
      rounded="50%"
      cover
    />

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
    profile: {
      type: Object,
      default: undefined
    }
  }
}
</script>
