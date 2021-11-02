<template>
  <v-card :to="post.link">
    <v-img :src="post.image" height="200" />

    <div class="pa-2 pa-md-3">
      <div class="text-uppercase font-weight-black text-body-2 primary--text mb-1">
        {{ post.place }}
      </div>
      <div class="title font-weight-bold text-h6">
        {{ post.title }}
      </div>
      <div class="mt-3">
        <v-chip class="mr-1 mb-2">
          {{ post.date }}
        </v-chip>
        <v-chip class="mr-1 mb-2">
          {{ post.participants }}
        </v-chip>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
