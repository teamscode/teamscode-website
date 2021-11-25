<template>
  <v-card :to="link">
    <v-container>
      <v-row>
        <v-col cols="4">
          <v-img class="rounded-lg" :src="post.image" height="250" />
        </v-col>
        <v-col cols="8">
          <div class="pa-2 pa-md-3">
            <div class="title font-weight-bold text-h5 text-md-h4">
              {{ post.title }}
            </div>
            <div class="mt-2 text-body text-md-h6">
              {{ post.description }}
            </div>
            <div class="mt-3">
              <v-chip class="mr-1 mb-2">
                {{ post.date | formatDate }}
              </v-chip>
              <v-chip v-if="post.author" class="mr-1 mb-2">
                {{ post.author }}
              </v-chip>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    link () {
      return `/blog/${this.post.slug}`
    }
  }
}
</script>
