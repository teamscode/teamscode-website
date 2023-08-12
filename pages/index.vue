<template>
  <div>
    <v-sheet color="surface">
      <v-container class="py-6 py-lg-8">
        <v-row>
          <v-col cols="12" lg="7">
            <h1 class="text-h2 text-lg-h1">
              Explore <span class="primary--text">creative problem solving</span> with competitive programming contests
            </h1>
            <h2 class="text-body-1 mt-4 secondary--text">
              Participate in TeamsCode Team Programming contests to challenge yourself with some inspiring competitive programming problems while having fun with your friends.
            </h2>
            <h2 class="text-body-1 mt-4 secondary--text">
              Our Summer 2023 contest has just ended (next one planned for Spring 2024)! Hit the button below to view our past contests.
            </h2>
            <div class="mt-4">
              <v-btn
                x-large
                class="my-1 mr-sm-1 w-full w-sm-auto"
                color="primary"
                to="/contests"
              >
                Browse Contests
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
          </v-col>
          <v-col cols="12" lg="5" class="d-none d-lg-flex">
            <v-img class="rounded-lg" :aspect-ratio="$vuetify.breakpoint.lgAndDown ? 1 : undefined" src="/images/hero.jpg" />
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
    <v-sheet>
      <svg class="logos-bg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1442 163">
        <path d="m-3.90909,6l48.30303,16c48.30303,16 144.90908,48 241.51514,48c96.60606,0 193.21211,-32 289.81817,-32c96.60606,0 193.21211,32 289.81817,53.3c96.60606,21.7 193.21211,31.7 289.81817,16c96.60606,-16.3 193.21211,-58.3 241.51514,-80l48.30303,-21.3l0,160l-48.30303,0c-48.30303,0 -144.90908,0 -241.51514,0c-96.60606,0 -193.21211,0 -289.81817,0c-96.60606,0 -193.21211,0 -289.81817,0c-96.60606,0 -193.21211,0 -289.81817,0c-96.60606,0 -193.21211,0 -241.51514,0l-48.30303,0l0,-160z" />
      </svg>
      <v-container class="pb-4 pt-0 pb-lg-6">
        <div class="text-center text-md-left">
          <div class="text-uppercase font-weight-bold body-2 primary--text mb-2">
            Competitive Programming
          </div>
          <h2 class="text-h4 text-sm-h3 text-lg-h2">
            Engage your brain and level up your programming skills
          </h2>
          <div class="text-body-1 mt-4">
            Our unique team competitive programming contests aim to provide an inspirational and enjoyable experience to computer science students regardless of their skills.
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
                    color="secondary"
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
                  <div class="text-body-2 mt-1 secondary--text">
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
          <div class="text-uppercase font-weight-bold body-2 primary--text mb-2">
            Our Events
          </div>
          <h2 class="text-h4 text-sm-h3 text-lg-h2 mb-3">
            TeamsCode Virtual Programming Contests
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

        <v-row class="mt-1" justify="center">
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
            Join a growing community of future computer scientists
          </h2>
          <v-responsive max-width="1200" class="mx-auto">
            <div class="text-body-1 mt-4">
              Since 2017, students and computer science enthusiasts around the world participated in TeamsCode events to sharpen their coding skills.
            </div>
          </v-responsive>
        </div>
        <div class="mt-4">
          <div class="primary--text ml-5">
            Number of Contest Participants Over Time
          </div>
          <line-chart
            :chart-data="chartData"
            :chart-options="chartOptions"
            chart-id="contestHistory"
            class="mt-2"
          />
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
      </v-container>
    </v-sheet>

    <v-sheet color="surface">
      <v-container class="py-4 py-lg-8">
        <div class="text-center text-md-left">
          <div class="text-uppercase font-weight-bold body-2 primary--text mb-2">
            Our Organization
          </div>
          <h2 class="text-h4 text-sm-h3 text-lg-h2">
            A student organization for students
          </h2>
          <div class="text-body-1 mt-4">
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
                  <div class="text-body-2 mt-1 secondary--text">
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
              TeamsCode in a Team
            </h2>
            <div class="text-body-1 mt-5">
              We would like to thank our sponsors for supporting us! If you would like to help TeamsCode, please consider becoming a sponsor and get in touch with us!
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
  mdiArrowRight, mdiTrophyVariant, mdiBook, mdiAccountCowboyHat, mdiFileCode, mdiAccountGroup, mdiBookOpenPageVariant, mdiPencil, mdiLightbulbGroup, mdiHeadLightbulb, mdiGift, mdiMessageAlert, mdiBell
} from '@mdi/js'
export default {
  data () {
    return {
      mdiArrowRight,
      mdiBell,
      mdiMessageAlert,
      banner: true,
      chartData: {
        datasets: [{
          label: '# of Contest Participants',
          borderWidth: 4,
          borderColor: '#2E99D0',
          backgroundColor: '#2E99D0',
          data: [103, 90, 119, 180, 168, 179, 296, 245, 327, 349, 561, 393, 618]
        }],
        labels: ['Spring 2017', 'Fall 2017', 'Spring 2018', 'Fall 2018', 'Spring 2019', 'Fall 2019', 'Summer 2020', 'Fall 2020', 'Spring 2021', 'Summer 2021', 'Spring 2022', 'Summer 2022', 'Spring 2023']
      },
      chartOptions: {
        responsive: true,
        aspectRatio: 3,
        plugins: {
          legend: {
            display: false
          }
        }
      },
      stats: [{
        title: 'Total Event Hours',
        value: '95+'
      }, {
        title: 'Students Impacted',
        value: '3705'
      }, {
        title: 'Countries Reached',
        value: '22+'
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
        title: 'Teamwork Makes TeamsCode',
        description: 'TeamsCode is created by high school volunteers from all around the world. They write problems, organize logistics, and brought TeamsCode from a regional contest to an international competition.'
      }, {
        icon: mdiBookOpenPageVariant,
        title: 'Led by Students',
        description: 'Since the first contest, TeamsCode has always been led by students. We believe that everyone at TeamsCode has the potential to lead a contest and we encourage them to play an active role in the community.'
      }, {
        icon: mdiPencil,
        title: 'Always Open to New Ideas',
        description: 'If you have an idea about how to make the contest better and are interested in helping us organize contests, please join us! You can find the informational packet and organizer application on the about page.'
      }, {
        icon: mdiLightbulbGroup,
        title: 'Build a Larger Community',
        description: 'Besides improving our own contest TeamsCode also collaborate with other competitive programming contests. If you would like to become an affiliate, please contact us! Our contact information is on the contact page.'
      }],
      contestFeatures: [{
        icon: mdiHeadLightbulb,
        title: 'Solve Problems',
        description: 'Solve competitive programming problems by employing your creativity and understanding of algorithms. Learn important problem solving skills and practice coding!'
      }, {
        icon: mdiAccountGroup,
        title: 'Collaborate with Peers',
        description: 'Team up with up to 3 friends and share a common experience! Share your understanding of computer science and work together to climb up the leaderboard.'
      }, {
        icon: mdiGift,
        title: 'Win Prizes',
        description: 'In each contest, TeamsCode offers cash prizes, software subscriptions, and gaming ears to top high school finishers in all divisions. We also have cool prizes for raffle winners! '
      }, {
        icon: mdiMessageAlert,
        title: 'Learn Something New',
        description: 'Competitive programming has dozens of algorithms and data structures for you to explore! Regardless of your skill level, you will always learn something new about computer science.'
      }],
      logos: [{
        image: '/images/partners/xcamp.png'
      }, {
        image: '/images/partners/digitalocean.png'
      }, {
        image: '/images/partners/cpi.png'
      }, {
        image: '/images/partners/desmos.png'
      }, {
        image: '/images/partners/wolfram.png'
      }, {
        image: '/images/partners/lit.png'
      }, {
        image: '/images/partners/mbit.png'
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
      return this.contests.filter(contest => contest.status === 'Upcoming')
    },
    pastContest () {
      const contests = this.contests.filter(contest => contest.status !== 'Upcoming')
      if (this.$vuetify.breakpoint.md) {
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
  fill: #fff;
  background-color: var(--v-surface-base);;
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
