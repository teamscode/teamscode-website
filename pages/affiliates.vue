<template>
  <div>
    <v-sheet color="surface">
      <v-container class="py-8">
        <div class="text-center">
          <h2 class="text-h3 text-lg-h2">
            Our affiliates and friend organizations
          </h2>
          <v-responsive max-width="1200" class="mx-auto">
            <div class="text-h6 text-lg-h5 mt-4">
              Organizations TeamsCode partner with
            </div>
          </v-responsive>
        </div>
      </v-container>
    </v-sheet>
    <v-sheet>
      <v-container>
        <div class="text-center mt-8 mb-3">
          <v-row>
            <v-col v-for="(affiliate,index) in affiliates" :key="index" cols="12" md="6">
              <v-card>
                <v-img class="mx-2" :src="affiliate.image" contain height="200" />

                <div class="pa-2 pa-md-3">
                  <div class="title font-weight-bold text-h5">
                    {{ affiliate.name }}
                  </div>
                  <div class="secondary--text text--lighten-1 text-body-1 mt-1 mb-4">
                    {{ affiliate.content }}
                  </div>
                  <div class="text-right">
                    <v-btn depressed color="primary" :href="affiliate.link" target="_blank" text>
                      {{ affiliate.link }}
                    </v-btn>
                  </div>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </v-sheet>
    <v-sheet class="bg-sheet" dark>
      <v-container class="text-center py-4">
        <h1 class="font-weight-light">
          Want to partner with TeamsCode?
        </h1>

        <v-btn
          color="accent"
          to="/contact"
          :x-large="$vuetify.breakpoint.mdAndUp"
          large
          class="my-3"
        >
          Get in touch
        </v-btn>

        <div class="text-body-1 text-md-h6 font-weight-light">
          <v-responsive max-width="800" class="mx-auto">
            The contact page has our contact methods. Please contact us by the method you prefer!
          </v-responsive>
        </div>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
export default {
  data () {
    return {
      affiliates: [
        { name: 'Competitive Programming Initiative', link: 'https://joincpi.org', image: '/images/partners/cpi.webp', content: 'CPI is a 501(c)3 nonprofit organization that promotes competitive programming among students through resources, classes, outreach, and contests.' },
        { name: 'Lexington Informatics Tournament', link: 'https://lit.lhsmathcs.org', image: '/images/partners/lit.webp', content: 'LIT is a competitive programming tournament for middle/high school students, hosted by members of the LexMACS club along with many guest problemsetters/testers.' },
        { name: 'Harker Programming Invitational', link: 'https://www.harkerprogrammingclub.org', image: '/images/partners/hpi.webp', content: 'HPI is an annual programming competition hosted in March by The Harker School\'s Programming Club. Teams of up to 3 students compete to solve problems designed to test their algorithmic knowledge. This year\'s theme is Space & CS, and the event will be held virtually on March 13, 2022.' },
        { name: 'Montgomery Blair Informatics Tournament', link: 'https://mbit.mbhs.edu', image: '/images/partners/mbit.webp', content: 'mBIT is a competitive programming competition for middle and high school students of all skill levels, organized by students from Montgomery Blair High School.' },
        { name: 'Noctem', link: 'https://www.noctemdevelopment.org', image: '/images/partners/noctem.webp', content: 'Noctem is a non-profit organization dedicated to promoting problem solving in computer science through competitive programming competitions.' },
        { name: 'Competitive Computing Club', link: 'https://www.compcs.org', image: '/images/partners/ccc.webp', content: 'CompCS helps competitive programming beginners become advanced through support from the team.' },
        { name: 'TJIOI', link: 'https://activities.tjhsst.edu/tjioi', image: '/images/partners/tjioi.webp', content: 'TJIOI is Thomas Jefferson High School for Science and Technology’s annual programming contest, designed to encourage the involvement of middle and high schoolers with computer science.' },
        { name: 'traverse[cs]', link: 'https://traverse-cs.org', image: '/images/partners/traversecs.webp', content: 'traverse[cs] is an organization dedicated to giving students opportunities to explore computer science and competitive programming by organizing free coding contests.' },
        { name: 'CerealCodes', link: 'https://cerealcodes.org', image: '/images/partners/cerealcodes.png', content: 'CerealCodes is a competitive programming contest with the goal of promoting computer science to high school students globally.' },
        { name: 'VividHacks', link: 'https://vividhacks.tech', image: '/images/partners/vividhacks.png', content: 'VividHacks is a three-day virtual beginner-friendly hackathon that bridges the gap between passion and technology for all students worldwide!' }
      ]
    }
  },
  head () {
    return {
      title: 'Affiliates',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Our partners and friend organizations. We work with other CS clubs and competitions to foster a community.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.bg-sheet {
  background: linear-gradient(90deg, rgb(54 90 127) 0%, rgb(11 20 38) 100%);
}
</style>
