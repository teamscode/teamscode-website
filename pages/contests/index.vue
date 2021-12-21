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
            placeholder="Search for contests"
            :prepend-inner-icon="mdiMagnify"
          />
        </v-responsive>
      </v-container>
    </v-sheet>
    <v-sheet color="surface">
      <v-container class="py-4">
        <div class="d-flex flex-column flex-lg-row justify-space-between align-center">
          <div class="text-center text-lg-left">
            <div class="text-h4 mr-2">
              Our next contest is planned for April 2022
            </div>
            <div class="text-h4 mr-2 primary--text">
              Join Discord or mailing list to stay updated!
            </div>
          </div>
          <v-spacer />
          <v-row class="mt-lg-1 mt-4 mb-2">
            <v-btn
              :x-large="$vuetify.breakpoint.mdAndUp"
              large
              class="mx-sm-2 w-full w-sm-auto"
              to="/contact"
            >
              Newsletter
            </v-btn>
            <v-btn
              :x-large="$vuetify.breakpoint.mdAndUp"
              large
              class="mx-sm-2 w-full w-sm-auto mt-sm-0 mt-2"
              color="primary"
              @click="discordLink"
            >
              Join Discord
            </v-btn>
          </v-row>
        </div>
      </v-container>
    </v-sheet>
    <v-sheet class="py-3">
      <v-container class="py-4">
        <v-row>
          <v-col
            v-for="(card, i) in contests"
            :key="i"
            cols="12"
            lg="4"
            md="6"
            xl="3"
          >
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
import { mdiMagnify } from '@mdi/js'
export default {
  data () {
    return {
      mdiMagnify,
      query: '',
      contests: []
    }
  },
  async fetch () {
    if (this.query) {
      this.contests = await this.$content('contests').search(this.query).sortBy('date', 'desc').fetch()
    } else {
      this.contests = await this.$content('contests').sortBy('date', 'desc').fetch()
    }
  },
  head () {
    return {
      title: 'Contests',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'TeamsCode\'s online programming contests and offlie hackathons. Click on cards to view and register for TeamsCode competitions.'
        }
      ]
    }
  },
  watch: {
    query () {
      this.$fetch()
    }
  },
  mounted () {
    this.$gtag('event', 'browse_contests', { screen_name: 'Contests' })
  }

}
</script>

<style scoped>
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
