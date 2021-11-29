<template>
  <div>
    <v-sheet class="bg" dark>
      <v-container class="py-6 py-sm-12 text-center">
        <v-responsive max-width="800" class="mx-auto">
          <h1 class="text-h4 text-sm-h3 text-md-h2 mb-4">
            Welcome to our blog
          </h1>
          <v-text-field
            v-model="query"
            outlined
            filled
            placeholder="Search for posts"
            :prepend-inner-icon="mdiMagnify"
          />
        </v-responsive>
      </v-container>
    </v-sheet>
    <v-sheet class="py-3">
      <v-container class="py-10">
        <v-row>
          <v-col
            v-for="(card, i) in blogs"
            :key="i"
            cols="12"
          >
            <BlogCard :post="card" />
          </v-col>
        </v-row>
        <div v-if="query" class="mt-4 text-center caption">
          Search query applied
        </div>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
import { mdiMagnify } from '@mdi/js'
export default {
  data () {
    return {
      mdiMagnify,
      query: '',
      blogs: []
    }
  },
  async fetch () {
    if (this.query) {
      this.blogs = await this.$content('blogs').search(this.query).sortBy('date', 'desc').fetch()
    } else {
      this.blogs = await this.$content('blogs').sortBy('date', 'desc').fetch()
    }
  },
  head () {
    return {
      title: 'Blog',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Our blog posts. Posts about TeamsCode and our sponsors.'
        }, { hid: 'robots', name: 'robots', content: 'index,follow' }
      ]
    }
  },
  watch: {
    query () {
      this.$fetch()
    }
  }
}
</script>

<style scoped>
  .bg {
  background-image: url("/images/blog-background.webp");
  background-image: linear-gradient(
      to bottom right,
      rgba(16 57 92 / 96%),
      rgba(0 0 0 / 0.9)
    ),
    url("/images/blog-background.webp");
  background-size: cover;
  background-position: center;
}
</style>
