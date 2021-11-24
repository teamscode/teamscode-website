<template>
  <div>
    <v-container class="py-6">
      <v-row>
        <v-col cols="12" lg="7">
          <h1 class="text-h2 text-lg-h1 mt-xl-4">
            High quality and fun <span class="primary--text">team programming contest</span> for everyone
          </h1>
          <h2 class="text-h6 text-sm-h5 secondary--text mt-4">
            TeamsCode spreads computer science education to high school students by organizing online contests where students work on quality competitive programming problems in a team setting
          </h2>
          <div class="mt-4 mt-xl-10">
            <v-sheet elevation="2" rounded class="d-flex w-full">
              <v-text-field
                placeholder=" Subscribe to our mailing list"
                hide-details
                flat
                solo
                height="80"
                full-width
                prepend-inner-icon="mdi-email"
              />
              <v-btn x-large class="ma-1 mx-sm-1 w-sm-auto" color="success">
                Subscribe
              </v-btn>
            </v-sheet>
          </div>
        </v-col>
        <v-col cols="12" lg="5" class="d-none d-lg-block">
          <v-img class="rounded-lg" :aspect-ratio="$vuetify.breakpoint.lgAndDown ? 1 : undefined" :src="require('@/static/images/hero.webp')" alt="" />
        </v-col>
      </v-row>
    </v-container>

    <v-sheet>
      <svg class="logos-bg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1442 163">
        <path d="m-3.90909,6l48.30303,16c48.30303,16 144.90908,48 241.51514,48c96.60606,0 193.21211,-32 289.81817,-32c96.60606,0 193.21211,32 289.81817,53.3c96.60606,21.7 193.21211,31.7 289.81817,16c96.60606,-16.3 193.21211,-58.3 241.51514,-80l48.30303,-21.3l0,160l-48.30303,0c-48.30303,0 -144.90908,0 -241.51514,0c-96.60606,0 -193.21211,0 -289.81817,0c-96.60606,0 -193.21211,0 -289.81817,0c-96.60606,0 -193.21211,0 -289.81817,0c-96.60606,0 -193.21211,0 -241.51514,0l-48.30303,0l0,-160z" />
      </svg>
      <v-container class="py-4 py-lg-8">
        <div class="d-none d-md-block">
          <div class="text-uppercase font-weight-bold body-2 primary--text mb-2">
            By the numbers
          </div>
          <h2 class="text-h3 text-lg-h2">
            Enthusiastic coders from around the globe
          </h2>
          <div class="text-h6 text-lg-h5 mt-4">
            Some statistics from TemasCode Summer 2021 Contest, one of our largest contests
          </div>
        </div>
        <div class="text-center d-md-none">
          <div class="text-uppercase font-weight-bold body-2 primary--text mb-2">
            By the numbers
          </div>
          <h2 class="text-h3 text-lg-h2">
            Enthusiastic coders from around the globe
          </h2>
          <div class="text-h6 text-lg-h5 mt-4">
            Some statistics from TemasCode Summer 2021 Contest, one of our largest contests
          </div>
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

    <v-sheet color="surface" class="py-4">
      <v-container class="py-10">
        <div class="text-center">
          <div class="text-uppercase font-weight-bold body-2 primary--text mb-2">
            Our Events
          </div>
          <h2 class="text-h3 text-lg-h2 mb-3">
            Online competitive programming contests
          </h2>
        </div>
        <v-row class="mt-6">
          <v-col v-for="(card, i) in contests" :key="i" cols="12" md="4">
            <ContestCard :post="card" />
          </v-col>
        </v-row>
        <div class="mt-4 text-right">
          <v-btn to="/contest" outlined large color="primary">
            More Contests
            <v-icon right dark>
              mdi-arrow-right
            </v-icon>
          </v-btn>
        </div>
      </v-container>
    </v-sheet>

    <v-sheet>
      <v-container class="py-4 py-lg-8">
        <div class="d-none d-md-block">
          <div class="text-uppercase font-weight-bold body-2 primary--text mb-2">
            In Details
          </div>
          <h2 class="text-h3 text-lg-h2">
            More than just a competition
          </h2>
          <div class="text-h6 text-lg-h5 mt-4">
            TeamsCode is not just another computer science contest, but a student led organization with a mission of promoting computer science education
          </div>
        </div>
        <div class="text-center d-md-none">
          <div class="text-uppercase font-weight-bold body-2 primary--text mb-2">
            In Details
          </div>
          <h2 class="text-h3 text-lg-h2">
            More than just a competition
          </h2>
          <div class="text-h6 text-lg-h5 mt-4">
            TeamsCode is not just another computer science contest, but a student led organization with a mission of promoting computer science education
          </div>
        </div>
        <v-row class="mt-6">
          <v-col
            v-for="(item, i) in features"
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
                  <div class="font-weight-regular mt-1">
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
              mdi-arrow-right
            </v-icon>
          </v-btn>
        </div>
      </v-container>
    </v-sheet>

    <v-sheet color="surface">
      <v-container class="py-8">
        <div class="d-flex flex-column flex-lg-row justify-space-between align-center">
          <div class="text-center text-lg-left">
            <div class="text-h3">
              Interested or have questions?
            </div>
            <div class="text-h3 primary--text">
              Contact us or join our Discord!
            </div>
          </div>
          <div class="mt-6">
            <v-btn x-large href="https://discord.com/invite/48W8ttCANJ" class="my-1 mr-sm-1 w-full w-sm-auto" color="primary">
              Join Discord
            </v-btn>
            <v-btn x-large to="/contact" class="my-1 ml-sm-1 w-full w-sm-auto">
              Contact Us
            </v-btn>
          </div>
        </div>
      </v-container>
    </v-sheet>

    <v-sheet class="py-6">
      <v-container class="py-4 py-lg-8">
        <v-row>
          <v-col class="d-md-none" cols="12" md="6">
            <div class="text-center text-uppercase font-weight-bold body-2 primary--text mb-2">
              Our Partners and Sponsors
            </div>
            <h2 class="text-center text-h3 text-lg-h2">
              They help make things possible and better
            </h2>
            <div class="text-center text-h6 text-lg-h5 mt-5">
              Our awesome sponsors and partners help us bring a better contest to more people
            </div>
          </v-col>
          <v-col class="d-none d-md-block" cols="12" md="6">
            <div class="text-uppercase font-weight-bold body-2 primary--text mb-2">
              Our Partners and Sponsors
            </div>
            <h2 class="text-h3 text-lg-h2">
              They help make things possible and better
            </h2>
            <div class="text-h6 text-lg-h5 mt-5">
              Our awesome sponsors and partners help us bring a better contest to more people
            </div>
            <div class="mt-4">
              <nuxt-link to="#" class="text-decoration-none font-weight-bold text-h6">
                Learn More
              </nuxt-link>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <SponsorLogos :logos="logos" />
            <div class="d-md-none text-right mt-4 mr-12">
              <nuxt-link to="#" class="text-decoration-none font-weight-bold text-h6">
                Learn More
              </nuxt-link>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
export default {
  data () {
    return {
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
      features: [{
        icon: 'mdi-account-group',
        title: 'Team Environment',
        description: 'TeamsCode contests create an inspirational environment for computer science students to collaborate on programming problems and meet new people'
      }, {
        icon: 'mdi-book-open-page-variant',
        title: 'Lead by Students',
        description: 'TeamsCode is made for students, by students. We work with our partners to deliver an enjoyable experience to computer science students'
      }, {
        icon: 'mdi-pencil',
        title: 'Make Things Happen',
        description: 'If you are interested in helping us organize contests, please join us! Enthusiastics take different roles in TeamsCode and work together to make contests happen'
      }, {
        icon: 'mdi-discord',
        title: 'Friendly Community',
        description: 'Join our community by cliking on our Discord invitation link. Ask questions, discuss problems, or just hangout with many link-minded people'
      }],
      logos: [{
        image: require('@/static/images/partners/xcamp.webp'),
        link: '#'
      }, {
        image: require('@/static/images/partners/digipen.webp'),
        link: '#'
      }, {
        image: require('@/static/images/partners/cpi.webp'),
        link: '#'
      }, {
        image: require('@/static/images/partners/ccc.webp'),
        link: '#'
      }, {
        image: require('@/static/images/partners/janestreet.webp'),
        link: '#'
      }, {
        image: require('@/static/images/partners/replit.webp'),
        link: '#'
      }],
      contests: []
    }
  },
  async fetch () {
    this.contests = await this.$content('contests').limit(3).sortBy('date_machine', 'desc').fetch()
  },
  head () {
    return {
      title: 'Home'
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
