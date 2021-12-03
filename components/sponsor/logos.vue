<template>
  <div class="logos5 text-center">
    <v-row dense>
      <v-col
        v-for="(logo, index) in logos"
        :key="index"
        cols="6"
        align-self="center"
      >
        <div class="mx-2 my-1">
          <v-img :src="logo.image" />
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    logos: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.logos5 {
  img {
    width: 180px;
  }

  a:hover {
    img {
      filter: none;
    }
  }
}
</style>
