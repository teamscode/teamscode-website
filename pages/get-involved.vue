<template>
  <div>
    <v-sheet color="surface">
      <v-container class="py-6 py-lg-12 text-center">
        <h1 class="text-h3 text-sm-h2 text-md-h1">
          Get involved with <span class="primary--text">TeamsCode</span>
        </h1>
        <h2 class="text-body-1 text--lighten-2 mt-4 ">
          Your contribution is crucial! Please consider applying to one of the open positions.
        </h2>
      </v-container>
    </v-sheet>
    <v-sheet>
      <v-container class="py-4 py-lg-8">
        <v-row>
          <v-col cols="12" lg="5">
            <v-img src="/images/recruiting/lc-graphic.png" height="650px" />
          </v-col>
          <v-col cols="12" lg="7">
            <TeamPosition :position="logistics" />
          </v-col>
        </v-row>
      </v-container>
      <v-container class="py-4 py-lg-8">
        <v-row>
          <v-col cols="12" lg="7">
            <TeamPosition :position="problem" />
          </v-col>
          <v-col cols="12" lg="5">
            <v-img src="/images/recruiting/pw-graphic.png" height="650px" />
          </v-col>
        </v-row>
      </v-container>
      <v-container class="py-4 py-lg-8">
        <v-row>
          <v-col cols="12" lg="5">
            <v-img src="/images/recruiting/wd-graphic.png" height="650px" />
          </v-col>
          <v-col cols="12" lg="7">
            <TeamPosition :position="developer" />
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
    <v-sheet color="transparent">
      <v-container class="py-8">
        <div class="d-flex flex-column flex-lg-row justify-space-between align-center">
          <div class="text-center text-lg-left">
            <div class="text-h3">
              Apply now and be a leader
            </div>
            <div class="text-h3 primary--text">
              All positions are open
            </div>
          </div>
          <div class="mt-4 mt-lg-0">
            <v-btn x-large class="my-1 mx-sm-2 w-full w-sm-auto" color="primary" href="https://docs.google.com/forms/d/e/1FAIpQLSdZRZ6FYFKh8ISQgRl-9-vbAV6t1GwxNJZm69JQbfkR4QiV8g/viewform" target="_blank">
              Application Form
            </v-btn>
            <v-btn x-large class="my-1 w-full w-sm-auto" to="/contact">
              Contact Us
            </v-btn>
          </div>
        </div>
      </v-container>
    </v-sheet>
    <v-sheet>
      <v-container>
        <div class="text-h3 mt-4">
          Our Impact
        </div>
        <v-row class="mt-4" dense>
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
        <div class="text-h3 mt-4">
          Volunteer Hours
        </div>
        <div class="mt-2 mb-8 text-body-2">
          TeamsCode is a registered 501(c)(3) non-profit organization, which means it is eligible to give volunteer hours. The Presidential Volunteer Service Award (PVSA) Certification is also standardized across Teamscode. Please note that volunteer hours from other organizations count towards PVSA as well. If you have hours from other organizations, please show the current Executive Team evidence of your work there when you express your interest for this award.
        </div>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
import {
  mdiForum, mdiEmail, mdiHandshake, mdiPalette, mdiCurrencyUsd, mdiFile, mdiChevronTripleUp, mdiWeb, mdiNotebookMultiple
} from '@mdi/js'
export default {
  name: 'GetInvolved',
  data: () => {
    return {
      logistics: {
        name: 'Logistics Coordinator',
        tasks: [
          { text: 'Attend weekly meetings on designated time', icon: mdiForum },
          { text: 'Reaching out to students and teachers through emailing platforms', icon: mdiEmail },
          { text: 'Finding and contacting potential sponsors and speakers', icon: mdiHandshake },
          { text: 'Graphic design and Instagram posts', icon: mdiPalette },
          { text: 'Budget allocation', icon: mdiCurrencyUsd }
        ],
        skills: 'A typical logistics coordinator uses their creativity to come up with new ways to better market and run TeamsCode competitions. Communication and time management skills are also required.',
        commitment: 'Expect to commit 2-3 hours per week starting 2-3 months before each contest and 6-7 hours per week starting 2-3 weeks before contest.'
      },
      problem: {
        name: 'Problem Writer',
        tasks: [
          { text: 'Attend weekly meetings (1-2 hrs) on designated time', icon: mdiForum },
          { text: 'Create around 15 problems with the rest of the team every contest', icon: mdiFile },
          { text: 'Problem difficulty ranges from USACO Bronze to medium Platinum', icon: mdiChevronTripleUp }
        ],
        skills: 'USACO Gold or above or equivalent (Codeforces Candidate Master, Atcoder Blue, etc) is required. Creative mindset - Ability to come up with new, original problem ideas.',
        commitment: 'Expect to commit 3-4 hours per week starting 2-3 months before each contest. TeamsCode has  2-3 contests per year, and the workload will be around 6-7 hours per week starting 2-3 weeks before contest.'
      },
      developer: {
        name: 'Web Developer',
        tasks: [
          { text: 'Attend weekly meetings (1-2 hrs) on designated time', icon: mdiForum },
          { text: 'Maintain and update the TeamsCode website', icon: mdiWeb },
          { text: 'Work on long-term web development projects (such as the contest portal)', icon: mdiNotebookMultiple }
        ],
        skills: 'Experience with JavaScript Web Frameworks (Preferably in Vue.js). Experience with Git.',
        commitment: 'Expect to commit up to 3-4 hours per week when there’s a project going on.'
      },
      stats: [{
        title: 'Total Event Hours',
        value: '100+'
      }, {
        title: 'Students Impacted',
        value: '4135'
      }, {
        title: 'Countries Reached',
        value: '22+'
      }]
    }
  }
}
</script>
