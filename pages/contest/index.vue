<template>
  <div>
    <v-sheet class="bg" dark>
      <v-container class="py-6 py-sm-12 text-center">
        <v-responsive max-width="800" class="mx-auto">
          <h1 class="text-h4 text-sm-h3 text-md-h2 mb-4">
            TeamsCode programming contests
          </h1>
          <v-text-field
            v-model="query"
            outlined
            filled
            placeholder="Search for contest"
            prepend-inner-icon="mdi-magnify"
          />
        </v-responsive>
      </v-container>
    </v-sheet>
    <v-sheet class="py-3">
      <v-container class="py-10">
        <v-row>
          <v-col v-for="(card, i) in contests" :key="i" cols="12" lg="4" md="6">
            <ContestCard :post="card" />
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
export default {
  data () {
    return {
      query: '',
      contests: []
    }
  },
  async fetch () {
    this.contests = await this.$content('contests').sortBy('date_machine', 'desc').fetch()
  },
  watch: {
    async query () {
      this.contests = await this.$content('contests').search(this.query).sortBy('date_machine', 'desc').fetch()
    }
  }
}
</script>

<style>
  .bg {
  background-image: url("/images/contest-background.webp");
  background-image: linear-gradient(
      to bottom right,
      rgba(16 57 92 / 96%),
      rgba(0 0 0 / 0.9)
    ),
    url("/images/contest-background.webp");
  background-size: cover;
  background-position: center;
}
</style>
