<template>
  <div>
    <v-container class="py-6">
      <v-row>
        <v-col cols="12" md="6" lg="7">
          <h1 class="text-h4 text-sm-h3 text-lg-h1 mt-xl-4">
            High quality and fun <span class="primary--text">team programming contest</span> for everyone
          </h1>
          <h2 class="text-h6 text-sm-h5 secondary--text mt-4">
            TeamsCode spreads computer science education to high school students by organizing online contests where students work on quality competitive programming problems in a team setting
          </h2>
          <div class="mt-4 mt-xl-10">
            <v-sheet elevation="2" rounded class="d-flex w-full">
              <v-text-field
                placeholder="Subscribe to our mailing list"
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
        <v-col cols="12" md="6" lg="5" class="d-none d-md-block">
          <v-img class="rounded-lg" :aspect-ratio="$vuetify.breakpoint.lgAndDown ? 1 : undefined" :src="require('@/assets/images/hero.jpg')" alt="" />
        </v-col>
      </v-row>
    </v-container>

    <v-sheet>
      <svg class="logos-bg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1442 163">
        <path d="m-3.90909,6l48.30303,16c48.30303,16 144.90908,48 241.51514,48c96.60606,0 193.21211,-32 289.81817,-32c96.60606,0 193.21211,32 289.81817,53.3c96.60606,21.7 193.21211,31.7 289.81817,16c96.60606,-16.3 193.21211,-58.3 241.51514,-80l48.30303,-21.3l0,160l-48.30303,0c-48.30303,0 -144.90908,0 -241.51514,0c-96.60606,0 -193.21211,0 -289.81817,0c-96.60606,0 -193.21211,0 -289.81817,0c-96.60606,0 -193.21211,0 -289.81817,0c-96.60606,0 -193.21211,0 -241.51514,0l-48.30303,0l0,-160z" />
      </svg>
      <v-container class="py-4 py-lg-8">
        <div class="text-center">
          <div class="text-uppercase font-weight-bold body-2 primary--text mb-2">
            By the numbers
          </div>
          <h2 class="text-h3 text-lg-h2">
            Enthusiastic TeamsCoders from around the globe
          </h2>
          <v-responsive max-width="1200" class="mx-auto">
            <div class="text-h6 text-lg-h5 mt-4">
              Some statistics from TemasCode Summer 2021 Contest, one of our largest contests
            </div>
          </v-responsive>
        </div>
        <v-row class="mt-6">
          <v-col
            v-for="(item, i) in stats"
            :key="i"
            cols="12"
            md="4"
            class="text-center"
          >
            <div class="text-h2 text-lg-h1">
              {{ item.value }}
            </div>
            <div class="text-h6 text-lg-h5">
              {{ item.title }}
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
      }]
    }
  }
}
</script>

<style scoped>
.logos-bg {
  fill: white;
  background-color: #f2f5f8;
}
</style>
