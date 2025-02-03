<template>
  <v-card :to="link" :elevation="contest.status==='Upcoming'?4:2">
    <v-img :src="contest.image" height="200">
      <div class="text-right font-weight-bold">
        <v-chip v-if="contest.status==='Upcoming'" text-color="white" color="green" class="ma-1">
          {{ contest.status }}
        </v-chip>
        <v-chip v-else class="ma-1">
          {{ contest.status }}
        </v-chip>
      </div>
    </v-img>

    <div class="pa-2 pa-md-3">
      <div class="text-uppercase font-weight-black text-body-2 primary--text mb-1">
        {{ contest.place }}
      </div>
      <div class="title font-weight-bold text-h6">
        {{ contest.title }}
      </div>
      <div v-if="contest.description&&contest.status==='Upcoming'" class="my-1 text-body-2 secondary--text">
        {{ contest.description }}
      </div>
      <div class="mt-3">
        <!--
        <v-chip v-if="contest.status==='Upcoming'" class="mr-1 mb-2" text-color="white" color="primary">
          <b>Registration Open</b>
        </v-chip>
        -->
        <v-chip class="mr-1 mb-2">
          {{ contest.date | formatDate }}
        </v-chip>
        <v-chip v-if="contest.participants" class="mr-1 mb-2">
          {{ contest.participants }}
        </v-chip>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    contest: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    link () {
      return `/contests/${this.contest.slug}`
    }
  }
}
</script>
