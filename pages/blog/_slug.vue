<template>
  <div>
    <v-sheet color="surface">
      <v-container class="py-4 py-lg-8">
        <div style="width: 80px; height: 4px" class="mb-3 secondary" />
        <h2 class="text-h3 text-lg-h2 mb-3">
          {{ content.title }}
        </h2>
        <div class="text-h6 text-lg-h5 mt-4">
          Posted on {{ content.date | formatDate }}
        </div>
        <div class="text-h6 text-lg-h5 mt-1">
          Written by {{ content.author }}
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
  async asyncData ({ params, error, $content }) {
    const content = (await $content('blogs').where({ slug: params.slug }).fetch())[0]
    if (!content) {
      error({ statusCode: 404, message: '404 Not Found' })
    } else {
      return { content }
    }
  },
  async fetch () {
    this.content = (await this.$content('blogs').where({ slug: this.$route.params.slug }).fetch())[0]
  },
  head () {
    return {
      title: this.content.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.content.description
        }
      ]
    }
  }
}
</script>
