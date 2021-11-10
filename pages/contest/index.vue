<template>
  <div>
    <v-sheet class="bg" dark>
      <v-container class="py-6 py-sm-12 text-center">
        <v-responsive max-width="800" class="mx-auto">
          <h1 class="text-h4 text-sm-h3 mb-4">
            Our Contests
          </h1>
          <v-text-field
            outlined
            filled
            placeholder="Search for contest"
            prepend-inner-icon="mdi-magnify"
          />
        </v-responsive>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .bg {
  background-image: url("/images/contest-background.webp");
  background-image: linear-gradient(
      to bottom right,
      rgba(16 57 92 / 76%),
      rgba(0 0 0 / 0.8)
    ),
    url("/images/contest-background.webp");
  background-size: cover;
  background-position: center;
}
</style>
