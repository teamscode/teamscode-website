<template>
  <div>
    <v-sheet color="surface">
      <v-container class="py-4 py-lg-8">
        <div style="width: 80px; height: 4px" class="mb-3 secondary" />
        <h2 class="text-h3 text-lg-h2 mb-3">
          {{ content.title }}
        </h2>
        <div class="text-h6 text-lg-h5 mt-4">
          {{ content.date | formatDate }} at {{ content.place }}
        </div>
      </v-container>
    </v-sheet>
    <v-sheet>
      <v-container class="py-4 py-lg-4">
        <nuxt-content :document="content" />
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
export default {
  data () {
    return {
      content: {}
    }
  },
  async fetch () {
    this.content = (await this.$content('contests').where({ slug: this.$route.params.slug }).fetch())[0]
  }
}
</script>