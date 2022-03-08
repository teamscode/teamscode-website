<template>
  <div>
    <v-container class="pb-6 pt-6">
      <v-row>
        <v-col cols="12" lg="7">
          <h1 class="text-h2 text-lg-h1 mt-xl-4">
            High quality and fun <span class="primary--text">team programming contest</span> for everyone
          </h1>
          <h2 class="text-h6 text-sm-h5 secondary--text mt-4">
            TeamsCode spreads computer science education to high school students by organizing online contests where students work on quality competitive programming problems in a team setting.
          </h2>
          <div class="mt-4 mt-xl-10">
            <v-btn
              :x-large="$vuetify.breakpoint.smAndUp"
              large
              class="my-1 mr-sm-1 w-full w-sm-auto"
              color="primary"
              to="/contests"
            >
              Browse Contests
            </v-btn>
            <v-btn
              :x-large="$vuetify.breakpoint.smAndUp"
              large
              class="my-1 ml-sm-1 w-full w-sm-auto"
              @click="discordLink"
            >
              Join Discord
            </v-btn>
          </div>
        </v-col>
        <v-col cols="12" lg="5" class="d-none d-lg-flex">
          <v-img class="rounded-lg" :aspect-ratio="$vuetify.breakpoint.lgAndDown ? 1 : undefined" src="/images/hero.webp" lazy-src="/images/hero-placeholder.webp" alt="Hero" />
        </v-col>
      </v-row>
    </v-container>

    <v-sheet>
      <svg class="logos-bg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1442 163">
        <path d="m-3.90909,6l48.30303,16c48.30303,16 144.90908,48 241.51514,48c96.60606,0 193.21211,-32 289.81817,-32c96.60606,0 193.21211,32 289.81817,53.3c96.60606,21.7 193.21211,31.7 289.81817,16c96.60606,-16.3 193.21211,-58.3 241.51514,-80l48.30303,-21.3l0,160l-48.30303,0c-48.30303,0 -144.90908,0 -241.51514,0c-96.60606,0 -193.21211,0 -289.81817,0c-96.60606,0 -193.21211,0 -289.81817,0c-96.60606,0 -193.21211,0 -289.81817,0c-96.60606,0 -193.21211,0 -241.51514,0l-48.30303,0l0,-160z" />
      </svg>
      <v-container class="py-4 py-lg-8">
        <div class="text-center text-md-left">
          <div class="text-uppercase font-weight-bold body-2 primary--text mb-2">
            Our Mission
          </div>
          <h2 class="text-h4 text-sm-h3 text-lg-h2">
            Making competitive programming fun
          </h2>
          <div class="text-body text-sm-h6 text-lg-h5 mt-4">
            Our unique team competitive programming contests aim to provide a fun and enjoyable experience to programmers at all levels! Keep scrolling to explore our contests.
          </div>
        </div>
        <div class="mt-6">
          <div
            v-for="(item, i) in contestFeatures"
            :key="i"
            class="mt-4"
          >
            <v-card class="py-4 px-2" color="surface">
              <div class="d-flex">
                <div class="mr-2">
                  <v-sheet
                    color="blue-grey"
                    rounded
                    class="pa-2"
                    style="margin-top: 3px"
                    dark
                  >
                    <v-icon>{{ item.icon }}</v-icon>
                  </v-sheet>
                </div>
                <div>
                  <div class="text-h5 font-weight-bold">
                    {{ item.title }}
                  </div>
                  <div class="text-body mt-1">
                    {{ item.description }}
                  </div>
                </div>
              </div>
            </v-card>
          </div>
        </div>
      </v-container>
    </v-sheet>

    <v-sheet color="surface">
      <v-container class="py-4 py-lg-8">
        <div class="text-center">
          <h2 class="text-h4 text-sm-h3 text-lg-h2 mb-3">
            Recent online programming contests
          </h2>
        </div>
        <v-row class="mt-6">
          <v-col
            v-for="(card, i) in contestDisplay"
            :key="i"
            cols="12"
            md="6"
            lg="4"
            xl="3"
          >
            <ContestCard :post="card" />
          </v-col>
        </v-row>
        <div class="mt-4 text-right">
          <v-btn to="/contests" outlined large color="primary">
            More Contests
            <v-icon right dark>
              {{ mdiArrowRight }}
            </v-icon>
          </v-btn>
        </div>
      </v-container>
    </v-sheet>
    <v-container>
      <v-divider />
    </v-container>
    <v-sheet color="surface">
      <v-container class="py-4 py-lg-8">
        <v-row>
          <v-col cols="12" md="4">
            <h2 class="text-h4 text-sm-h3 text-lg-h2 text-center text-md-left">
              Browse our list of programming resources
            </h2>
          </v-col>
          <v-col cols="12" md="8" class="pa-md-0">
            <v-row>
              <v-col v-for="(item, i) in resourceFeatures" :key="i" cols="12" md="6">
                <div class="d-flex align-center">
                  <div class="mr-2">
                    <v-sheet color="white" rounded class="pa-2">
                      <v-icon>{{ item.icon }}</v-icon>
                    </v-sheet>
                  </div>
                  <div>
                    <div class="text-h5">
                      {{ item.title }}
                    </div>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <div class="mt-8 text-right">
          <v-btn to="/resources" outlined large color="primary">
            Browse Resources
            <v-icon right dark>
              {{ mdiArrowRight }}
            </v-icon>
          </v-btn>
        </div>
      </v-container>
    </v-sheet>

    <v-sheet>
      <v-container class="py-4 py-lg-8">
        <div class="d-flex flex-column flex-lg-row justify-space-between align-center">
          <div class="text-center text-lg-left">
            <div class="text-h4 text-sm-h3 text-lg-h2">
              Registration open for Spring 2022 Contest
            </div>
            <div class="text-h4 text-sm-h3 text-lg-h2 primary--text">
              Sign up now to stay updated!
            </div>
          </div>
          <v-btn
            :x-large="$vuetify.breakpoint.mdAndUp"
            large
            class="mt-4 mx-sm-2 w-full w-sm-auto"
            color="primary"
            to="/contests/spring-2022"
          >
            View Contest
          </v-btn>
        </div>
      </v-container>
    </v-sheet>
    <v-sheet>
      <v-container class="py-0">
        <v-divider />
      </v-container>
    </v-sheet>
    <v-sheet>
      <v-container class="py-6">
        <NewsletterForm>
          <div class="d-flex flex-column flex-lg-row align-center">
            <div class="text-h4 mr-2">
              You can also signup to our newsletters
            </div>
            <div class="d-flex flex-column flex-sm-row w-full mt-4 mt-lg-0">
              <v-text-field
                id="EMAIL"
                type="text"
                solo
                hide-details
                name="EMAIL"
                placeholder="Please enter your email"
                dense
                height="44"
                full-width
                class="mr-sm-2 mb-2 mb-sm-0 flex-grow-1"
              />
              <v-btn
                form="sib-form"
                type="submit"
                large
                color="secondary"
                @click="trackMailing"
              >
                Subscribe
              </v-btn>
            </div>
          </div>
        </NewsletterForm>
      </v-container>
    </v-sheet>

    <v-sheet color="surface">
      <v-container class="py-4 py-lg-8">
        <div class="text-center">
          <div class="text-uppercase font-weight-bold body-2 primary--text mb-2">
            By the numbers
          </div>
          <h2 class="text-h4 text-sm-h3 text-lg-h2">
            A contest for coders around the globe
          </h2>
          <v-responsive max-width="1200" class="mx-auto">
            <div class="text-body text-sm-h6 text-lg-h5 mt-4">
              TeamsCode is a space for computer science enthusiasts to sharpen their coding skill regardless of nation. Here are some statistics* from TeamsCode Summer 2021 Contest, one of our largest events.
            </div>
          </v-responsive>
        </div>
        <v-row class="mt-6" dense>
          <v-col
            v-for="(item, i) in stats"
            :key="i"
            cols="12"
            md="4"
            class="text-center"
          >
            <v-card class="pa-4">
              <div class="text-h2 text-lg-h1">
                {{ item.value }}
              </div>
              <div class="text-h6 text-lg-h5">
                {{ item.title }}
              </div>
            </v-card>
          </v-col>
        </v-row>
        <div class="text-caption mt-2">
          *Data extracted and compiled from TeamsCode Contest System's internal database and contest registration info during Summer 2021 contest.
        </div>
      </v-container>
    </v-sheet>

    <v-sheet>
      <v-container class="py-4 py-lg-8">
        <div class="text-center text-md-left">
          <div class="text-uppercase font-weight-bold body-2 primary--text mb-2">
            Our Organization
          </div>
          <h2 class="text-h4 text-sm-h3 text-lg-h2">
            More than just a competition
          </h2>
          <div class="text-body text-sm-h6 text-lg-h5 mt-4">
            Besides hosting competitions, TeamsCode aims to foster a tight-knit community of coders with a mission of promoting computer science education.
          </div>
        </div>
        <v-row class="mt-6">
          <v-col
            v-for="(item, i) in organizationFeatures"
            :key="i"
            cols="12"
            md="6"
          >
            <v-card class="py-4 px-2">
              <div class="d-flex">
                <div class="mr-2">
                  <v-sheet color="secondary" rounded class="pa-2" dark>
                    <v-icon large>
                      {{ item.icon }}
                    </v-icon>
                  </v-sheet>
                </div>
                <div>
                  <div class="text-h5 font-weight-bold">
                    {{ item.title }}
                  </div>
                  <div class="text-body mt-1">
                    {{ item.description }}
                  </div>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <div class="mt-4 text-right">
          <v-btn to="/about" outlined large color="primary">
            Learn More
            <v-icon right dark>
              {{ mdiArrowRight }}
            </v-icon>
          </v-btn>
        </div>
      </v-container>
    </v-sheet>

    <v-sheet color="surface">
      <v-container class="py-4 py-lg-6 text-center">
        <div class="text-h4 text-sm-h3 text-lg-h2">
          Please contact us if you have any questions!
        </div>
        <v-btn
          :x-large="$vuetify.breakpoint.mdAndUp"
          large
          class="mt-4 mx-sm-2 w-full w-sm-auto"
          color="primary"
          to="/contact"
        >
          Contact Us
        </v-btn>
      </v-container>
    </v-sheet>

    <v-sheet class="py-6">
      <v-container class="py-4 py-lg-8">
        <v-row>
          <v-col class="text-center text-md-left" cols="12" md="6">
            <div class="text-uppercase font-weight-bold body-2 primary--text mb-2">
              Our Partners and Sponsors
            </div>
            <h2 class="text-h4 text-sm-h3 text-lg-h2">
              They help make things possible and better
            </h2>
            <div class="text-body text-sm-h6 text-lg-h5 mt-5">
              Our awesome sponsors help us organize a better contest. We also partner with other competitive programming organizations to foster a tight-knit community.
            </div>
            <div class="mt-4 d-none d-md-block">
              <v-btn to="/sponsors" outlined large color="primary">
                Sponsors
                <v-icon right dark>
                  {{ mdiArrowRight }}
                </v-icon>
              </v-btn>
              <v-btn to="/affiliates" outlined large color="primary" class="ml-2">
                Affiliates
                <v-icon right dark>
                  {{ mdiArrowRight }}
                </v-icon>
              </v-btn>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <SponsorLogos :logos="logos" />
            <div class="d-md-none text-right mt-4 mr-4">
              <v-btn to="/sponsors" outlined large color="primary">
                Learn More
                <v-icon right dark>
                  {{ mdiArrowRight }}
                </v-icon>
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
import {
  mdiArrowRight, mdiTrophyVariant, mdiBook, mdiAccountCowboyHat, mdiFileCode, mdiAccountGroup, mdiBookOpenPageVariant, mdiPencil, mdiDiscord, mdiHeadLightbulb, mdiGift, mdiFileDocumentMultiple, mdiMessageAlert, mdiBell
} from '@mdi/js'
export default {
  data () {
    return {
      mdiArrowRight,
      mdiBell,
      banner: true,
      stats: [{
        title: 'Registrations',
        value: '467'
      }, {
        title: 'Teams',
        value: '197'
      }, {
        title: 'US States',
        value: '16'
      }, {
        title: 'Countries',
        value: '22'
      }, {
        title: 'Problem Attempts',
        value: '4.9K'
      }, {
        title: 'Lines of Code',
        value: '302K'
      }],
      resourceFeatures: [{
        icon: mdiTrophyVariant,
        title: 'Other Competitive Programming Contests'
      }, {
        icon: mdiBook,
        title: 'Competitive Programming Books'
      }, {
        icon: mdiAccountCowboyHat,
        title: 'USACO Related Resources'
      },
      {
        icon: mdiFileCode,
        title: 'Algorithm Resources and Templates'
      }],
      organizationFeatures: [{
        icon: mdiAccountGroup,
        title: 'Team Environment',
        description: 'TeamsCode contests create an inspirational environment for computer science students to collaborate on programming problems and meet new people.'
      }, {
        icon: mdiBookOpenPageVariant,
        title: 'Lead by Students',
        description: 'TeamsCode is made for students, by students. We work with our partners to deliver an enjoyable experience to computer science students.'
      }, {
        icon: mdiPencil,
        title: 'Make Things Happen',
        description: 'If you are interested in helping us organize contests, please join us! Organizers take different roles in TeamsCode and work together to make contests happen.'
      }, {
        icon: mdiDiscord,
        title: 'Friendly Community',
        description: 'Join our community by clicking on our Discord invitation link. Ask questions, discuss problems, or just hangout with many like-minded people.'
      }],
      contestFeatures: [{
        icon: mdiHeadLightbulb,
        title: 'Team Contests',
        description: 'Work with your friends to solve challenging competitive programming problem and inspire each other. There is always more than one creative way to solve a problem, just like there are to collaborate on a contest! '
      }, {
        icon: mdiGift,
        title: 'Our Prizes',
        description: 'On each contest, TeamsCode offers cash prize (up to $100 for each team member) to top high school finishers in Intermediate and Advanced division while everyone is welcomed to participate. We also have cool prizes for raffle winners! '
      }, {
        icon: mdiFileDocumentMultiple,
        title: 'Our Problem Set',
        description: 'TeamsCode\'s problem sets are carefully created by our problem writing team (many of the members are in USACO Platinum!). These problems cover a variety of topics in different levels while featuring an interesting context.'
      }, {
        icon: mdiMessageAlert,
        title: 'Our Technology',
        description: 'TeamsCode Contest Portal offers a clean interface to submit solutions while getting instant feedback on test cases. It also has a real-time leaderboard to deliver the excitement of a programming contest to your screen!'
      }],
      logos: [{
        image: '/images/partners/xcamp.webp'
      }, {
        image: '/images/partners/digipen.webp'
      }, {
        image: '/images/partners/cpi.webp'
      }, {
        image: '/images/partners/janestreet.webp'
      }, {
        image: '/images/partners/wolfram.webp'
      }, {
        image: '/images/partners/lit.webp'
      }, {
        image: '/images/partners/mbit.webp'
      }, {
        image: '/images/partners/hpi.webp'
      }],
      contests: []
    }
  },
  async fetch () {
    this.contests = await this.$content('contests').limit(4).sortBy('date', 'desc').fetch()
  },
  head () {
    return {
      title: 'Home',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'TeamsCode is a student-led 501(c)(3) organization that spreads computer science education to high school students by organizing online contests where students work on quality competitive programming problems in a team setting.'
        }
      ],
      link: [
        {
          rel: 'preload',
          as: 'image',
          href: '/images/hero-placeholder.webp'
        },
        {
          rel: 'preload',
          as: 'image',
          href: '/images/hero.webp'
        }
      ]
    }
  },
  computed: {
    contestDisplay () {
      if (this.$vuetify.breakpoint.xl) {
        return this.contests
      } else if (this.$vuetify.breakpoint.lg) {
        return this.contests.slice(0, 3)
      } else if (this.$vuetify.breakpoint.md) {
        return this.contests
      } else {
        return this.contests.slice(0, 3)
      }
    }
  },
  methods: {
    discordLink () {
      this.$gtag('event', 'discord', { screen_name: 'Home' })
      window.open('https://discord.com/invite/8pg89SS', '_blank')
    },
    trackMailing () {
      this.$gtag('event', 'mailing', { screen_name: 'Home' })
    }
  }
}
</script>

<style scoped>
.logos-bg {
  fill: white;
  background-color: #f2f5f8;
}
.logos5 img {
filter: grayscale(100%) brightness(2);
  width: 180px;
}
.logos5 .theme--dark img {
  filter: grayscale(100%) invert(1);
}
.logos5 a:hover img {
  filter: none;
}
</style>
