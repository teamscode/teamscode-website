<template>
  <div>
    <v-sheet color="surface">
      <v-container class="py-6 py-lg-12 text-center">
        <h1 class="text-h4 text-sm-h3 text-md-h2 text-lg-h1">
          All about <span class="primary--text">TeamsCode</span>
        </h1>
        <h2 class="text-h6 text-sm-h5 text--lighten-2 mt-4 ">
          Our history, mission, and team
        </h2>
      </v-container>
    </v-sheet>
    <v-sheet>
      <v-container class="py-4 py-lg-8">
        <v-row>
          <v-col cols="12" lg="6" xl="4">
            <v-img src="/images/about-background.webp" class="rounded-lg elevation-6" height="100%" />
          </v-col>
          <v-col cols="12" lg="6" xl="8">
            <div class="text-uppercase font-weight-bold body-2 primary--text mb-2">
              TeamsCode
            </div>
            <h2 class="text-h3 text-lg-h2">
              From in-person events to virtual contests
            </h2>
            <div class="text-body mt-5">
              <div>
                TeamsCode is a student-run 501(c)(3) non-profit that works to encourage middle school and high school students to study computer science. We work with teachers and sponsors to create awesome programming contests – both online and in-person!
              </div>
              <br>
              <div>
                Chris Elliott and Alan Bi founded TeamsCode in the beginning of 2017. Both of them participated in local programming contests and noticed a lack of representation from their school. They set about to change that by organizing the first ever Mercer Island High School Programming Contest on April 1st, 2017. Since then, TeamsCode has expanded its influence across three states in in-person events.
              </div>
              <br>
              <div>
                Under the impact of a global pandemic, TeamsCode launched its first virtual programming contest in summer 2020. With more than 290 participants showing up to the event, it became TeamsCode's largest contest in history until spring 2021. Since our first virtual contest, TeamsCode's influence expanded from the United States to more than 20 countries. We organized several more virtual events width a huge improvement in problem quality, contest experience and ultimately contest participation.
              </div>
              <br>
              <div>
                As of summer 2021, TeamsCode's contest has 3 divisions featuring curated problems in different difficulties. In the future, we hope to continue our mission of bringing an enjoyable and inspirational team programming contest to everyone interested in computer science.
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
    <v-sheet class="transparent">
      <v-container class="pt-8 pb-0">
        <div class="text-center">
          <div>
            <div class="text-h3 primary--text">
              Would like to join us?
            </div>
            <div class="text-h3 mt-1">
              We are always open to new ideas!
            </div>
          </div>
          <div class="mt-4">
            <v-btn large class="my-1 w-full w-sm-auto" href="https://docs.google.com/document/d/1_AeM-rZ8GQk_MvBuJ3P_mWwTDf2eeW_r84VyhpCIIEU/edit?usp=sharing" target="_blank">
              Application Packet
            </v-btn>
            <v-btn large class="my-1 mx-sm-2 w-full w-sm-auto" color="primary" href="https://docs.google.com/forms/d/e/1FAIpQLSdZRZ6FYFKh8ISQgRl-9-vbAV6t1GwxNJZm69JQbfkR4QiV8g/viewform" target="_blank">
              Apply Now
            </v-btn>
          </div>
          <div class="mt-3">
            Make sure that you read the TeamsCode Application Packet before applying to understand your responsibilities.
          </div>
        </div>
      </v-container>
    </v-sheet>
    <v-sheet>
      <v-container class="mt-4 py-4 py-lg-8">
        <div class="text-center">
          <div class="text-uppercase font-weight-bold body-2 primary--text mb-2">
            TeamsCode
          </div>
          <h2 class="text-h3 text-lg-h2">
            Our leadership and organizers
          </h2>
        </div>
      </v-container>
    </v-sheet>
    <v-sheet>
      <div class="pt-2">
        <TeamSection header="Executives" :team="exec" />
      </div>
    </v-sheet>
    <v-sheet>
      <div class="pt-2">
        <TeamSection header="Current Team" :team="members" />
      </div>
    </v-sheet>
  </div>
</template>

<script>
export default {
  data () {
    return {
      exec: [{
        name: 'Ethen Peng',
        title: 'Co-President',
        image: '/images/teams/ethan.webp',
        bio: 'Ethan is a senior at Los Altos High School. He started learning programming two years ago, and competitive programming one year ago. He is excited to help bring quality contests to computer science students. Outside of programming, he plays tennis and watches Chinese dramas.'
      }, {
        name: 'Aayush Sheth',
        title: 'Co-President',
        image: '/images/teams/aayush.webp',
        bio: 'Aayush is a senior at Tesla STEM Highschool in Washington state. He started learning competitive programming four years ago and is well-versed in C++ and Java. Outside of school, he enjoys learning economics, piano, and soccer. Through TeamsCode he hopes to develop his leadership and coordination skills.'
      }, {
        name: 'Joe Li',
        title: 'Vice President - Logistics',
        image: '/images/teams/joe.webp',
        bio: 'Joe Li is a sophomore at The Harker School. He is fluent in C++ and Java, and he is a current USACO Platinum Competitor. In addition to competitive programming, he also does AI and web development. He also enjoys violin and karate. As a Teamscode officer, he is happy to contribute to an organization that promotes competitive programming.'
      }, {
        name: 'Elijah Huang',
        title: 'Vice President - Problem Writing',
        image: '/images/teams/elijah.webp',
        bio: 'Elijah Huang is a senior at Basis Independent Silicon Valley in California. He started programming a year ago and is currently a USACO Platinum Competitor who has scored 700+ on the US Open and a Master on Codeforces. Apart from programming, Elijah enjoys binging a ludicrous amount of anime and going all out while rock climbing. He is thrilled to combine his passion and algorithmic knowledge to show others the beauty of programming.'
      }, {
        name: 'Harry Chen',
        title: 'Vice President - Technology',
        image: '/images/teams/harry.webp',
        bio: 'Harry is a sophomore at Northwood High School in Irvine, California. He started competitive programming in C++ 2 years ago and is currently in USACO Gold. In addition to that, Harry also does full-stack web development. He maintains TeamsCode\'s website and contest system. Harry is excited to bring enjoyable contests to TeamsCoders. In his free time, he likes to play tennis and watch movies.'
      }],
      members: [
        {
          name: 'Sol Park',
          title: 'Problem Writer',
          image: '/images/teams/sol.webp',
          bio: 'Sol Park is a sophomore in Mercer Island High School in Washington. He started programming at 5th grade using mainly Python and C++, achieving Silver in USACO at 9th grade. He enjoys participating in Destination Imagination and has been doing it for four years. Outside of school, he volunteers in a Korean School as a Teacher\'s Assistant. He is very excited in being part of an organization for promoting computer science among students. '
        }, {
          name: 'Alex Du',
          title: 'Problem Writer',
          image: '/images/teams/alexD.webp',
          bio: 'Alex is a sophomore at Cupertino High School in California. He started competitive programming in C++ three years ago. Outside of programming, he does math, plays volleyball, and enjoys spending time with friends. He\'s working to get more people into the world of competitive coding.'
        }, {
          name: 'Jay Dharmadhikari',
          title: 'Marketing Coordinator',
          image: '/images/teams/jay.webp',
          bio: 'Jay Dharmadhikari is a senior at Redmond High School in Redmond, WA. He has been interested in computer science, coding, and competitive programming since middle school. Outside of CS, he enjoys graphic design and music production. '
        }, {
          name: 'Charles Yates',
          title: 'Problem Writer',
          image: '/images/teams/charles.webp',
          bio: 'Charles Yates is a junior at University Highschool in Socal. He has coded in C++ for 3 years, and made USACO Gold at 8th Grade. Outside of coding he does swimming and competitive math, as well as filming. Charles is excited to help fellow programmers gain more knowledge about coding. '
        }, {
          name: 'Weiming Zhou',
          title: 'Problem Writer',
          image: '/images/teams/weiming.webp',
          bio: 'Weiming Zhou is a sophomore attending Prestonwood Christian Academy in Plano, Texas. He has been doing competitive programming with C++ for almost 3 years and recently made Usaco Plat on the Us Open 2021. In his free time, he will probably be reading a book or playing chess online. He is very much looking forward to the experience of setting problems and introducing new problem solving techniques and algorithms to others.'
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
