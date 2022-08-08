<template>
  <div>
    <v-sheet>
      <v-container class="py-6 py-lg-8">
        <h1 class="text-h3 text-md-h2 text-lg-h1">
          Online <span class="primary--text">team programming contests</span> for students at all levels
        </h1>
        <h2 class="text-h6 text-sm-h5 secondary--text mt-4">
          TeamsCode aims to spread computer science education to high school students by organizing online contests where students work on quality competitive programming problems in a team setting.
        </h2>
        <h2 class="text-h6 font-weight-bold secondary--text mt-6">
          Winners of TeamsCode Summer 2022 Contest have been announced! Click Browse Contest to check it out!
        </h2>
        <div id="button-section" class="mt-4">
          <v-btn
            x-large
            class="my-1 mr-sm-1 w-full w-sm-auto"
            color="primary"
            to="/contests"
          >
            Browse Contest
          </v-btn>
          <v-btn
            x-large
            class="my-1 ml-sm-1 w-full w-sm-auto"
            href="https://go.teamscode.org/discord"
            target="_blank"
          >
            Join Discord
          </v-btn>
        </div>
      </v-container>
    </v-sheet>
    <svg class="logos-bg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1442 163">
      <path d="m-3.90909,6l48.30303,16c48.30303,16 144.90908,48 241.51514,48c96.60606,0 193.21211,-32 289.81817,-32c96.60606,0 193.21211,32 289.81817,53.3c96.60606,21.7 193.21211,31.7 289.81817,16c96.60606,-16.3 193.21211,-58.3 241.51514,-80l48.30303,-21.3l0,160l-48.30303,0c-48.30303,0 -144.90908,0 -241.51514,0c-96.60606,0 -193.21211,0 -289.81817,0c-96.60606,0 -193.21211,0 -289.81817,0c-96.60606,0 -193.21211,0 -289.81817,0c-96.60606,0 -193.21211,0 -241.51514,0l-48.30303,0l0,-160z" />
    </svg>
    <v-container class="pb-4 pt-4 pb-lg-6">
      <div class="text-center text-md-left">
        <div class="text-uppercase font-weight-bold body-2 primary--text mb-2">
          Our Mission
        </div>
        <h2 class="text-h4 text-sm-h3 text-lg-h2">
          An inspirational competitive programming experience
        </h2>
        <div class="text-body text-sm-h6 text-lg-h5 mt-4">
          Our unique team competitive programming contests aim to provide a fun and enjoyable experience to students regardless of their skills. We thrive to achieve that with the following features.
        </div>
      </div>
      <div class="mt-6">
        <div
          v-for="(item, i) in contestFeatures"
          :key="i"
          class="mt-4"
        >
          <v-card class="py-4 px-2">
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

    <v-sheet>
      <v-container class="py-4 py-lg-8">
        <div class="text-center">
          <div class="text-uppercase font-weight-bold body-2 primary--text mb-2">
            Our Events
          </div>
          <h2 class="text-h4 text-sm-h3 text-lg-h2 mb-3">
            Virtual contests for programmers
          </h2>
          <v-responsive max-width="1200" class="mx-auto" />
        </div>

        <div v-if="upcomingContest.length>0">
          <div style="width: 80px; height: 4px" class="mb-2 mt-4 mt-sm-8 secondary" />
          <h3 class="text-h5 text-sm-h4">
            Upcoming Contests
          </h3>
        </div>

        <v-row class="mt-1">
          <v-col
            v-for="(card, i) in upcomingContest"
            :key="i"
            cols="12"
          >
            <ContestCard :contest="card" />
          </v-col>
        </v-row>

        <div v-if="pastContest.length>0">
          <div style="width: 80px; height: 4px" class="mb-2 mt-8 secondary" />
          <h3 class="text-h5 text-sm-h4">
            Past Contests
          </h3>
        </div>

        <v-row class="mt-1">
          <v-col
            v-for="(card, i) in pastContest"
            :key="i"
            cols="12"
            md="6"
            lg="4"
            xl="3"
          >
            <ContestCard :contest="card" />
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
    <v-sheet color="surface">
      <v-container class="py-4 py-lg-8 mt-2">
        <v-row>
          <v-col cols="12" md="4">
            <h2 class="text-h4 text-sm-h3 text-center text-md-left">
              CP Resources
            </h2>
            <div class="mt-6 d-none d-md-block">
              <v-btn to="/resources" large color="primary">
                Browse Resources
                <v-icon right dark>
                  {{ mdiArrowRight }}
                </v-icon>
              </v-btn>
            </div>
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
        <div class="text-right mt-6 d-md-none">
          <v-btn to="/resources" large color="primary">
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
        <div class="text-center">
          <div class="text-uppercase font-weight-bold body-2 primary--text mb-2">
            Past Contest Statistics
          </div>
          <h2 class="text-h4 text-sm-h3 text-lg-h2">
            A community of coders around the world
          </h2>
          <v-responsive max-width="1200" class="mx-auto">
            <div class="text-body text-sm-h6 text-lg-h5 mt-4">
              Students and computer science enthusiasts around the world participate in TeamsCode events to sharpen their coding skills. Here are some statistics* from TeamsCode Spring 2022 Contest.
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
          *Data extracted and compiled from TeamsCode Contest System's internal database and contest registration info during Spring 2022 contest.
        </div>
      </v-container>
    </v-sheet>

    <v-sheet color="surface">
      <v-container class="py-4 py-lg-8">
        <div class="text-center text-md-left">
          <div class="text-uppercase font-weight-bold body-2 primary--text mb-2">
            Our Organization
          </div>
          <h2 class="text-h4 text-sm-h3 text-lg-h2">
            By students, for students
          </h2>
          <div class="text-body text-sm-h6 text-lg-h5 mt-4">
            TeamsCode is brought to you by a group of enthusiastic students that hope others can also share their enjoyment in computer science.
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
          <v-btn to="/about" large color="primary">
            About TeamsCode
            <v-icon right dark>
              {{ mdiArrowRight }}
            </v-icon>
          </v-btn>
        </div>
      </v-container>
    </v-sheet>

    <v-sheet class="py-6">
      <v-container class="py-4 py-lg-8">
        <v-row>
          <v-col class="text-center text-md-left" cols="12" md="6">
            <div class="text-uppercase font-weight-bold body-2 primary--text mb-2">
              Partners and Sponsors
            </div>
            <h2 class="text-h4 text-sm-h3 text-lg-h2">
              Supporting TeamsCode
            </h2>
            <div class="text-body text-sm-h6 text-lg-h5 mt-5">
              Our awesome sponsors aids us in organizing a better contest. We also partner with other competitive programming organizations to foster a tight-knit community.
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
      mdiMessageAlert,
      banner: true,
      stats: [{
        title: 'Participants',
        value: '561'
      }, {
        title: 'Total Submissions',
        value: '7.3K'
      }, {
        title: 'Lines of Code',
        value: '616K'
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
        title: 'A History of Growth',
        description: 'Ever since 2017, we have aimed to bring something new or make a bigger impact at each contest. From a regional event to an international community. Up to today, we have served more than 3000 participants.'
      }, {
        icon: mdiBookOpenPageVariant,
        title: 'Lead by Students',
        description: 'TeamsCode\'s leadership team is composed of a group of students who truly cares. We make independent decisions for the good of the community. We also partner with other student organizations to better serve the community.'
      }, {
        icon: mdiPencil,
        title: 'People Make Things Happen',
        description: 'If you are interested in helping us organize contests, please join us! Organizers take different roles in TeamsCode and work together to make contests happen.'
      }, {
        icon: mdiDiscord,
        title: 'Our Community on Discord',
        description: 'Join our community by clicking on our Discord invitation link. Ask questions, discuss problems, or just hangout with many like-minded people.'
      }],
      contestFeatures: [{
        icon: mdiHeadLightbulb,
        title: 'Contest Format',
        description: 'Our contests encourage teaming up with your friends to solve interesting competitive programming problem and inspire each other. Either divide and conquer or start a discussion on challenging problems.'
      }, {
        icon: mdiGift,
        title: 'Contest Prizes',
        description: 'On each contest, TeamsCode offers cash prize (up to $100 for each team member) to top high school finishers in Intermediate and Advanced division while everyone is welcomed to participate. We also have cool prizes for raffle winners! '
      }, {
        icon: mdiFileDocumentMultiple,
        title: 'Contest Problem Set',
        description: 'TeamsCode\'s problem sets are carefully created by our problem writing team. These problems cover a variety of topics in different levels while featuring an interesting context.'
      }, {
        icon: mdiMessageAlert,
        title: 'Contest Technology',
        description: 'TeamsCode Contest Portal offers a clean interface to submit solutions while getting instant feedback on test cases. It also has a real-time leaderboard to deliver the excitement of a programming contest to your screen!'
      }],
      logos: [{
        image: '/images/partners/xcamp.webp'
      }, {
        image: '/images/partners/digitalocean.png'
      }, {
        image: '/images/partners/cpi.webp'
      }, {
        image: '/images/partners/desmos.webp'
      }, {
        image: '/images/partners/wolfram.webp'
      }, {
        image: '/images/partners/lit.webp'
      }, {
        image: '/images/partners/mbit.webp'
      }, {
        image: '/images/partners/hyperx.png'
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
      ]
    }
  },
  computed: {
    upcomingContest () {
      const contests = this.contests.filter(contest => contest.status === 'Upcoming')
      if (this.$vuetify.breakpoint.xl) {
        return contests
      } else if (this.$vuetify.breakpoint.lg) {
        return contests.slice(0, 3)
      } else if (this.$vuetify.breakpoint.md) {
        return contests
      } else {
        return contests.slice(0, 3)
      }
    },
    pastContest () {
      const contests = this.contests.filter(contest => contest.status !== 'Upcoming')
      if (this.$vuetify.breakpoint.xl) {
        return contests
      } else if (this.$vuetify.breakpoint.lg) {
        return contests.slice(0, 3)
      } else if (this.$vuetify.breakpoint.md) {
        return contests
      } else {
        return contests.slice(0, 3)
      }
    }
  }
}
</script>

<style scoped>
.logos-bg {
  fill: #f2f5f8;
  background-color: white;
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
@media only screen and (min-width: 600px) {
  #button-section {
    height: 40px;
  }
}
</style>
