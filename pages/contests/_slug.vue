<template>
  <div>
    <v-btn
      v-if="content.status==='Upcoming'"
      class="reg-button d-md-flex d-none"
      color="primary"
      href="https://summer24.teamscode.org/?register=direct"
      target="_blank"
      elevation="24"
      large
    >
      Register Now
    </v-btn>
    <v-btn
      v-if="content.status==='Upcoming'"
      class="reg-button-tablet d-sm-flex d-md-none d-none"
      color="primary"
      href="https://summer24.teamscode.org/?register=direct"
      target="_blank"
      elevation="24"
      large
    >
      Register Now
    </v-btn>
    <v-container class="reg-button-mobile d-sm-none d-flex px-4">
      <v-btn
        v-if="content.status==='Upcoming'"
        block
        color="primary"
        href="https://summer24.teamscode.org/?register=direct"
        target="_blank"
        elevation="24"
        large
      >
        Register Now
      </v-btn>
    </v-container>
    <div v-if="content.new_layout">
      <v-sheet class="bg" dark>
        <v-container class="py-4 py-lg-8">
          <div style="width: 80px; height: 4px" class="mb-3 secondary" />
          <h2 class="text-h3 text-lg-h2 mb-3">
            {{ content.title }}
          </h2>
          <div class="text-h6 text-lg-h5 mt-4">
            <div v-if="content.new_timeline">
              {{ $moment.tz(content.timeline[0][0], 'America/Los_Angeles').tz(timeZone).format('LL LT') }} - {{ $moment.tz(content.timeline[content.timeline.length-1][1], 'America/Los_Angeles').tz(timeZone).format('LL LT') }} {{ $moment.tz(timeZone).zoneName() }}
            </div>
            <div v-else>
              {{ content.date | formatDate }} {{ content.time }}
            </div>
          </div>
          <div v-if="content.status==='Upcoming'" class="mt-2">
            <v-btn
              large
              class="mr-2 mt-1 w-full w-sm-auto"
              href="https://go.teamscode.org/discord"
              target="_blank"
            >
              Discord Server
            </v-btn>
            <v-btn
              large
              href="https://spring24.teamscode.org"
              target="_blank"
              class="mr-2 mt-1 w-full w-sm-auto"
            >
              Contest Website
            </v-btn>
            <v-btn
              large
              href="https://go.teamscode.org/live"
              target="_blank"
              class="mr-2 mt-1 w-full w-sm-auto"
            >
              Youtube Livestream
            </v-btn>
          </div>
          <div v-else class="mt-2">
            <v-btn
              v-if="content.cf_gym"
              large
              class="mr-2 mt-1 w-full w-sm-auto"
              :href="content.cf_gym"
              target="_blank"
            >
              Problem Set
            </v-btn>
            <v-btn
              v-if="content.editorial"
              large
              :href="content.editorial"
              target="_blank"
              class="mr-2 mt-1 w-full w-sm-auto"
            >
              Editorial
            </v-btn>
          </div>
        </v-container>
      </v-sheet>
      <v-sheet>
        <v-container class="py-4 py-lg-4">
          <v-row class="text-center mb-2">
            <v-col v-for="card in content.cards" :key="card[0]" cols="12" md="6" class="pb-0">
              <v-card class="pa-2">
                <div class="text-h5 font-weight-medium">
                  {{ card[1] }}
                </div>
                <div class="text-body text--secondary">
                  {{ card[0] }}
                </div>
              </v-card>
            </v-col>
          </v-row>
          <div class="text-body-2 py-2">
            {{ content.description }}
          </div>
          <div v-if="content.status==='Past'" class="my-2">
            <h2 class="text-h4 py-2">
              Contest Winners
            </h2>
            <v-divider />
            <v-row v-if="content.winners.length===3" class="mt-2">
              <v-col v-for="division in content.winners" :key="division[0]" lg="4" cols="12">
                <div class="text-h5 ml-1">
                  {{ division[0] }}
                </div>
                <ContestRank :winners="division[1]" />
              </v-col>
            </v-row>
            <v-row v-else class="mt-2">
              <v-col v-for="division in content.winners" :key="division[0]" lg="6" cols="12">
                <div class="text-h5 ml-1">
                  {{ division[0] }}
                </div>
                <ContestRank :winners="division[1]" />
              </v-col>
            </v-row>
          </div>
          <h2 class="text-h4 py-2">
            Schedule Overview
          </h2>
          <v-divider />
          <div v-if="content.new_timeline">
            <v-row class="mt-1">
              <v-col>
                <v-autocomplete v-model="country" label="Country" :items="countries" />
              </v-col>
              <v-col>
                <v-autocomplete v-model="timeZone" label="Time Zone" :items="timeZones" />
              </v-col>
            </v-row>

            <v-timeline class="mt-4 d-none d-sm-block">
              <v-timeline-item v-for="event in content.timeline" :key="event[0]">
                <template #opposite>
                  <span
                    class="text-h6"
                  >
                    {{ $moment.tz(event[0], 'America/Los_Angeles').tz(timeZone).format('MMM Do') }}
                  </span>
                  <span
                    class="text-h6 font-weight-bold"
                  >
                    {{ $moment.tz(event[0], 'America/Los_Angeles').tz(timeZone).format('LT') }} -
                  </span>

                  <span v-if="$moment.tz(event[0], 'America/Los_Angeles').tz(timeZone).format('LL')!=$moment.tz(event[1], 'America/Los_Angeles').tz(timeZone).format('LL')" class="text-h6">
                    {{ $moment.tz(event[1], 'America/Los_Angeles').tz(timeZone).format('MMM Do') }}
                  </span>

                  <span
                    class="text-h6 font-weight-bold"
                  >
                    {{ $moment.tz(event[1], 'America/Los_Angeles').tz(timeZone).format('LT') }}
                  </span>
                  <span class="text-h6">
                    {{ $moment.tz(timeZone).zoneName() }}
                  </span>
                </template>
                <v-card>
                  <v-card-title class="text-h5" style="word-break: normal">
                    {{ event[2] }}
                  </v-card-title>
                  <v-card-text class="secondary--text text-body-2">
                    {{ event[3] }}
                  </v-card-text>
                  <v-card-text v-if="event[4]" class="secondary--text text-body-2 mt-0 pt-0">
                    <a :href="event[4]" target="_blank">
                      {{ event[4] }}
                    </a>
                  </v-card-text>
                </v-card>
              </v-timeline-item>
            </v-timeline>
            <div class="mt-2 d-sm-none">
              <v-card v-for="event in content.timeline" :key="event[0]" class="mt-1">
                <v-card-title class="text-h6" style="word-break: normal">
                  <span>
                    {{ $moment.tz(event[0], 'America/Los_Angeles').tz(timeZone).format('MMM Do') }}
                  </span>

                  <span class="font-weight-bold">
                    &nbsp;{{ $moment.tz(event[0], 'America/Los_Angeles').tz(timeZone).format('LT') }} -&nbsp;
                  </span>

                  <span v-if="$moment.tz(event[0], 'America/Los_Angeles').tz(timeZone).format('LL')!=$moment.tz(event[1], 'America/Los_Angeles').tz(timeZone).format('LL')">
                    {{ $moment.tz(event[1], 'America/Los_Angeles').tz(timeZone).format('MMM Do') }}&nbsp;
                  </span>

                  <b>{{ $moment.tz(event[1], 'America/Los_Angeles').tz(timeZone).format('LT') }}</b>
                </v-card-title>
                <v-card-subtitle>
                  {{ event[2] }}
                </v-card-subtitle>
                <v-card-text>
                  {{ event[3] }}
                </v-card-text>
                <v-card-text v-if="event[4]">
                  <a :href="event[4]" target="_blank">
                    {{ event[4] }}
                  </a>
                </v-card-text>
              </v-card>
            </div>
          </div>
          <div v-else>
            <v-timeline class="mt-4 d-none d-sm-block">
              <v-timeline-item v-for="event in content.timeline" :key="event[0]">
                <template #opposite>
                  <span
                    class="text-h6 font-weight-bold"
                  >
                    {{ event[0] }}
                  </span>
                  <span class="text-h6">
                    Pacific Time
                  </span>
                </template>
                <v-card>
                  <v-card-title class="text-h5" style="word-break: normal">
                    {{ event[1] }}
                  </v-card-title>
                  <v-card-text class="secondary--text text-body-2">
                    {{ event[2] }}
                  </v-card-text>
                </v-card>
              </v-timeline-item>
            </v-timeline>
            <div class="mt-2 d-sm-none">
              <v-card v-for="event in content.timeline" :key="event[0]" class="mt-1">
                <v-card-title class="text-h6" style="word-break: normal">
                  <b>{{ event[0] }}</b>
                </v-card-title>
                <v-card-subtitle>
                  {{ event[1] }}
                </v-card-subtitle>
                <v-card-text>
                  {{ event[2] }}
                </v-card-text>
              </v-card>
            </div>
          </div>
          <div v-if="content.time_link" class="mt-4">
            See starting time in your timezone: <a target="_blank" :href="content.time_link">Link</a>
          </div>
        </v-container>
        <v-container class="py-4 py-lg-4">
          <h2 id="contest-details" class="text-h4 py-2">
            Contest Details
          </h2>
          <v-divider />
          <v-card>
            <v-tabs v-model="currentTab" :vertical="$vuetify.breakpoint.smAndDown" grow class="mt-4" center-active>
              <v-tab v-for="tab in content.tabs" :key="tab.slug" :disabled="tab.disabled">
                {{ tab.name }} {{ tab.disabled?'(TBA)':'' }}
              </v-tab>
            </v-tabs>
          </v-card>
          <v-tabs-items v-model="currentTab" class="mt-2">
            <v-tab-item v-for="tab in content.tabs" :key="tab.slug">
              <nuxt-content :document="tab" />
            </v-tab-item>
          </v-tabs-items>
          <div class="text-right mt-2">
            <v-btn
              v-if="previousTab!==-1"
              class="mr-2"
              :text="!$vuetify.breakpoint.smAndUp"
              :small="!$vuetify.breakpoint.smAndUp"
              @click="$vuetify.goTo('#contest-details');currentTab=previousTab"
            >
              <v-icon left>
                {{ mdiArrowLeft }}
              </v-icon>
              {{ content.tabs[previousTab].name }}
            </v-btn>
            <v-btn
              v-if="nextTab!==-1"
              class="mr-2"
              :text="!$vuetify.breakpoint.smAndUp"
              :small="!$vuetify.breakpoint.smAndUp"
              @click="$vuetify.goTo('#contest-details');currentTab=nextTab"
            >
              {{ content.tabs[nextTab].name }}
              <v-icon right dark>
                {{ mdiArrowRight }}
              </v-icon>
            </v-btn>
          </div>
        </v-container>
      </v-sheet>
    </div>
    <div v-else>
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
  </div>
</template>

<script>
import { mdiInformation, mdiArrowRight, mdiArrowLeft } from '@mdi/js'
export default {
  async asyncData ({ params, error, $content, $moment }) {
    const content = (await $content('contests').where({ slug: params.slug }).fetch())[0]
    if (!content) {
      error({ statusCode: 404, message: '404 Not Found' })
    } else if (content.new_layout) {
      const fetchQueue = []
      content.tabs.forEach(tabSlug => fetchQueue.push($content(`contests/${params.slug}`).where({ slug: tabSlug }).fetch()))
      content.tabs = (await Promise.all(fetchQueue)).map(match => match[0])

      const countries = $moment.tz.countries()
      return { content, countries }
    } else {
      return { content }
    }
  },
  data () {
    return {
      currentTab: 0,
      mdiInformation,
      mdiArrowLeft,
      mdiArrowRight,
      country: 'US',
      timeZone: 'America/Los_Angeles'
    }
  },
  head () {
    return {
      title: this.content.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.content.description || this.content.title
        }
      ]
    }
  },
  computed: {
    nextTab () {
      for (let index = this.currentTab + 1; index < this.content.tabs.length; index++) {
        if (!this.content.tabs[index].disabled) {
          return index
        }
      }
      return -1
    },
    previousTab () {
      for (let index = this.currentTab - 1; index >= 0; index--) {
        if (!this.content.tabs[index].disabled) {
          return index
        }
      }
      return -1
    },
    timeZones () {
      return this.$moment.tz.zonesForCountry(this.country ?? '')
    }
  }
}
</script>

<style scoped>
  .bg {
  background-image: linear-gradient(
      to bottom right,
      rgba(16 57 92 / 96%),
      rgba(0 0 0 / 0.9)
    );
  background-size: cover;
  background-position: center;
  }

  .reg-button {
    top: 140px;
    position: fixed;
    right: 40px;
    z-index:999;
  }

  .reg-button-tablet {
    top: 80px;
    position: fixed;
    right: 40px;
    z-index:999;
  }

  .reg-button-mobile {
    bottom: 20px;
    position: fixed;
    z-index:999;
  }
</style>
