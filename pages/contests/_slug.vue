<template>
  <div>
    <div v-if="content.new_layout">
      <v-sheet class="bg" dark>
        <v-container class="py-4 py-lg-8">
          <div style="width: 80px; height: 4px" class="mb-3 secondary" />
          <h2 class="text-h3 text-lg-h2 mb-3">
            {{ content.title }}
          </h2>
          <div class="text-h6 text-lg-h5 mt-4">
            {{ content.date | formatDate }} {{ content.time }}
          </div>
          <div v-if="content.status==='Upcoming'" class="mt-2">
            <v-btn
              large
              class="mr-2 mt-1 w-full w-sm-auto"
              @click="currentTab=1;$vuetify.goTo('#contest-details')"
            >
              Registration Instructions
            </v-btn>
            <v-btn
              large
              class="mr-2 mt-1 w-full w-sm-auto"
              @click="discordLink"
            >
              Discord Server
            </v-btn>
            <v-btn
              large
              href="https://go.teamscode.org/live"
              target="_blank"
              class="mr-2 mt-1 w-full w-sm-auto"
            >
              Youtube Livestream
            </v-btn>
            <v-btn
              large
              href="https://go.teamscode.org/webinar"
              target="_blank"
              class="mr-2 mt-1 w-full w-sm-auto"
            >
              Zoom Webinar
            </v-btn>
            <v-btn
              large
              href="https://contest.teamscode.org"
              target="_blank"
              class="mr-2 mt-1 w-full w-sm-auto"
            >
              Contest Website
            </v-btn>
          </div>
        </v-container>
      </v-sheet>
      <v-sheet>
        <v-container class="py-4 py-lg-4">
          <v-row class="text-center mb-2">
            <v-col v-for="card in content.cards" :key="card[0]" cols="12" md="3" class="pb-0">
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
          <div class="text-body-1 py-2">
            {{ content.description }}
          </div>
          <div v-if="content.status==='Past'" class="my-2">
            <h2 class="text-h4 py-2">
              Contest Winners
            </h2>
            <v-divider />
            <v-row class="mt-2">
              <v-col v-for="division in content.winners" :key="division[0]" lg="4" cols="12">
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
                <v-card-title class="text-h6" style="word-break: normal">
                  {{ event[1] }}
                </v-card-title>
                <v-card-text>
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
          <div class="mt-4">
            See starting time in your timezone: <a target="_blank" :href="content.time_link">{{ content.time_link }}</a>
          </div>
        </v-container>
        <v-container class="py-4 py-lg-4">
          <h2 id="contest-details" class="text-h4 py-2">
            Contest Details
          </h2>
          <v-divider />
          <v-card>
            <v-tabs v-model="currentTab" :vertical="$vuetify.breakpoint.smAndDown" grow class="mt-4" center-active>
              <v-tab v-for="tab in content.tabs" :key="tab.slug">
                {{ tab.name }}
              </v-tab>
            </v-tabs>
          </v-card>
          <v-tabs-items v-model="currentTab" class="mt-2">
            <v-tab-item v-for="tab in content.tabs" :key="tab.slug">
              <v-btn
                v-if="tab.name==='Registration'"
                class="mt-2"
                large
                color="primary"
                disabled
                @click="openRegistration"
              >
                Register Now
              </v-btn>
              <nuxt-content :document="tab" />
            </v-tab-item>
          </v-tabs-items>
          <div class="text-right mt-2">
            <v-btn
              v-if="currentTab!==0"
              class="mr-2"
              :text="!$vuetify.breakpoint.smAndUp"
              :small="!$vuetify.breakpoint.smAndUp"
              @click="$vuetify.goTo('#contest-details');currentTab-=1"
            >
              <v-icon left>
                {{ mdiArrowLeft }}
              </v-icon>
              {{ content.tabs[currentTab-1].name }}
            </v-btn>
            <v-btn
              v-if="currentTab!==content.tabs.length-1"
              class="mr-2"
              :text="!$vuetify.breakpoint.smAndUp"
              :small="!$vuetify.breakpoint.smAndUp"
              color="primary"
              @click="$vuetify.goTo('#contest-details');currentTab+=1"
            >
              {{ content.tabs[currentTab+1].name }}
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
  async asyncData ({ params, error, $content }) {
    const content = (await $content('contests').where({ slug: params.slug }).fetch())[0]
    try {
      this.$gtag('event', params.slug.replace(/-/g, '_'), { screen_name: 'Contest Page' })
    } catch (_) {

    }
    if (!content) {
      error({ statusCode: 404, message: '404 Not Found' })
    } else if (content.new_layout) {
      const fetchQueue = []
      content.tabs.forEach(tabSlug => fetchQueue.push($content(`contests/${params.slug}`).where({ slug: tabSlug }).fetch()))
      content.tabs = (await Promise.all(fetchQueue)).map(match => match[0])
      return { content }
    } else {
      return { content }
    }
  },
  data () {
    return {
      currentTab: 0,
      mdiInformation,
      mdiArrowLeft,
      mdiArrowRight
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
  methods: {
    openRegistration () {
      this.$gtag('event', 'signup', { screen_name: 'Contest Page' })
      window.open('https://contest.teamscode.org/?register=direct', '_blank')
    },
    discordLink () {
      this.$gtag('event', 'discord', { screen_name: 'Contest Page' })
      window.open('https://go.teamscode.org/discord', '_blank')
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
</style>
