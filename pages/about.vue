<template>
  <div>
    <v-sheet color="surface">
      <v-container class="py-6 py-lg-12 text-center">
        <h1 class="text-h3 text-sm-h2 text-md-h1">
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
            <div class="text-uppercase font-weight-bold body-2 primary--text mb-2 text-center text-md-left">
              TeamsCode
            </div>
            <h2 class="text-h4 text-sm-h3 text-lg-h2 text-center text-md-left">
              From in-person events to virtual contests
            </h2>
            <div class="text-body mt-5">
              <div>
                TeamsCode is a student-run 501(c)(3) non-profit that works to encourage middle school and high school students to study computer science. We work with teachers and sponsors to create awesome programming contests – both online and in-person!
              </div>
              <br>
              <div>
                Chris Elliott and Alan Bi founded TeamsCode at the beginning of 2017. Both of them participated in local programming contests and noticed a lack of representation from their school. They set about to change that by organizing the first-ever Mercer Island High School Programming Contest on April 1st, 2017. Since then, TeamsCode has expanded its influence across three states in in-person events.
              </div>
              <br>
              <div>
                Under the impact of a global pandemic, TeamsCode launched its first virtual programming contest in summer 2020. With more than 290 participants showing up to the event, it became TeamsCode's largest contest in history until spring 2021. Since our first virtual contest, TeamsCode's influence has expanded from the United States to more than 20 countries. We organized several more virtual events width a vast improvement in problem quality, contest experience, and contest participation.
              </div>
              <br>
              <div>
                As of summer 2021, TeamsCode's contest has three divisions featuring curated problems in different difficulties. In the future, we hope to continue our mission of bringing an enjoyable and inspirational team programming contest to everyone interested in computer science.
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
            <div class="text-h4 text-sm-h3 text-lg-h2 primary--text">
              Would like to join us?
            </div>
            <div class="text-h4 text-sm-h3 text-lg-h2 mt-1">
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
          <div class="text-body mt-3">
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
          <h2 class="text-h4 text-sm-h3 text-lg-h2">
            Our leadership and organizers
          </h2>
        </div>
      </v-container>
    </v-sheet>
    <v-sheet>
      <div class="pt-2">
        <TeamMembers header="Executives" :people="exec" />
      </div>
    </v-sheet>
    <v-sheet>
      <div class="pt-2">
        <TeamMembers header="Current Team" :people="members" />
      </div>
    </v-sheet>
    <v-sheet>
      <div class="pt-2">
        <TeamPastMembers header="Past Leadership" :people="pastLeadership" />
      </div>
    </v-sheet>
    <v-sheet>
      <div class="pt-2">
        <TeamPastMembers header="Past Organizers" :people="pastMembers" />
      </div>
    </v-sheet>
  </div>
</template>

<script>
export default {
  data () {
    return {
      exec: [{
        name: 'Ethan Peng',
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
      ],
      pastLeadership: [
        {
          name: 'Chris Elliot',
          title: 'Co-Founder, Co-President 2017-2019',
          image: '/images/teams/chris.webp'
        }, {
          name: 'Alan Bi',
          title: 'Co-Founder, Co-President 2017-2019',
          image: '/images/teams/alan.webp'
        }, {
          name: 'Jason Zhang',
          title: 'Co-President, 2019-2020',
          image: '/images/teams/jason.webp'
        }, {
          name: 'Alex Patel',
          title: 'Co-President, 2019-2020',
          image: '/images/teams/alexP.webp'
        }, {
          name: 'Sean Yang',
          title: 'Co-President, 2020-2021',
          image: '/images/teams/sean.webp'
        }, {
          name: 'Ryan Hsu',
          title: 'Co-President, 2020-2021',
          image: '/images/teams/ryan.webp'
        }, {
          name: 'Conner Yin',
          title: 'Vice President, 2020-2021',
          image: '/images/teams/conner.webp'
        }, {
          name: 'Winbert Zhang',
          title: 'Vice President, 2020-2021',
          image: '/images/teams/winbert.webp'
        }
      ],
      pastMembers: [
        {
          name: 'William Huang',
          title: 'Former Director of Marketing',
          image: '/images/teams/william.webp'
        },
        {
          name: 'Victor Du',
          title: 'Former Director of Technology',
          image: '/images/teams/victor.webp'
        }, {
          name: 'Bill Wang',
          title: 'Former Head of Finance',
          image: '/images/teams/bill.webp'
        }, {
          name: 'Luca Palermo',
          title: 'Former Head of Problem Writing',
          image: '/images/teams/luca.webp'
        }, {
          name: 'Lucille Shield',
          title: 'Head Organizer of Fall 2019 MIHS Programming Contest',
          image: '/images/teams/lucille.webp'
        }, {
          name: 'Peter Ye',
          title: 'Head Organizer of the 2019 CGS Programming Contest',
          image: '/images/teams/peter.webp'
        }, {
          name: 'Jonathan Guo',
          title: 'Programming Lead for the 2019 CGS Programming Contest ',
          image: '/images/teams/jonathan.webp'
        }, {
          name: 'James Richardson',
          title: 'Lesson Creator: AP Computer Science',
          image: '/images/teams/james.webp'
        }, {
          name: 'Robert Chen',
          title: 'Lesson Creator: USACO Problems',
          image: '/images/teams/robert.webp'
        }, {
          name: 'Valliappan Valliappan',
          title: 'Lesson Creator: iOS with Swift',
          image: '/images/teams/valliappan.webp'
        }, {
          name: 'Thomas Short',
          title: 'Finance Lead for Fall 2019 MIHS Programming Contest',
          image: '/images/teams/thomas.webp'
        }, {
          name: 'Mathus Leungpathomaram',
          title: 'Director of Oregon Events, 2018-2019',
          image: '/images/teams/mathus.webp'
        }, {
          name: 'Marshal Xu',
          title: 'Head Organizer of Fall 2018 CGS Programming Contest',
          image: '/images/teams/marshal.webp'
        }, {
          name: 'Albert Huang',
          title: 'Former Problem Writer',
          image: '/images/teams/albert.webp'
        }, {
          name: 'Helen Feng',
          title: 'Former Logistics Coordinator',
          image: '/images/teams/helen.webp'
        }, {
          name: 'Alex Niu',
          title: 'Former Logistics Coordinator',
          image: '/images/teams/alexN.webp'
        }
      ]
    }
  },
  head () {
    return {
      title: 'About',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'About TeamsCode. What is TeamsCode? TeamsCode is a student-run 501(c)(3) non-profit that works to encourage middle school and high school students to study computer science. We work with teachers and sponsors to create awesome programming contests – both online and in-person!'
        }, { hid: 'robots', name: 'robots', content: 'index,follow' }
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
