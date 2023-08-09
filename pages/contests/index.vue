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
    <v-sheet class="py-3">
      <v-container class="py-4">
        <div v-if="upcomingContest.length>0" class="mt-1 mb-6">
          <div style="width: 80px; height: 4px" class="mb-2 secondary" />
          <h3 class="text-h4">
            Upcoming Contests
          </h3>

          <v-row class="mt-1 mb-6">
            <v-col
              v-for="(card, i) in upcomingContest"
              :key="i"
              cols="12"
            >
              <ContestCard :contest="card" />
            </v-col>
          </v-row>
        </div>

        <div v-if="pastContest.length>0" class="mt-1">
          <div style="width: 80px; height: 4px" class="mb-2 secondary" />
          <h3 class="text-h4">
            Past Contests
          </h3>

          <v-row class="mt-1">
            <v-col
              v-for="(card, i) in pastContest"
              :key="i"
              cols="12"
              md="6"
              lg="4"
            >
              <ContestCard :contest="card" />
            </v-col>
          </v-row>
        </div>
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
      this.contests = await this.$content('contests').search(this.query).fetch()
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
  computed: {
    upcomingContest () {
      return this.contests.filter(contest => contest.status === 'Upcoming')
    },
    pastContest () {
      return this.contests.filter(contest => contest.status !== 'Upcoming')
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
  background-image: url("/images/contest-background.jpg");
  background-image: linear-gradient(
      to bottom right,
      rgba(16 57 92 / 96%),
      rgba(0 0 0 / 0.9)
    ),
    url("/images/contest-background.jpg");
  background-size: cover;
  background-position: center;
}
</style>
