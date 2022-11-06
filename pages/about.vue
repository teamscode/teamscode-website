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
                Under the impact of a global pandemic, TeamsCode launched its first virtual programming contest in summer 2020. With more than 290 participants showing up to the event, it became TeamsCode's largest contest in history until spring 2021. Since our first virtual contest, TeamsCode's influence has expanded from the United States to more than 20 countries. We organized several more virtual events with a vast improvement in problem quality, contest experience, and contest participation.
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
            Leaders and organizers
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
        name: 'Joe Li',
        title: 'Co-President',
        image: '/images/teams/joe.jpg',
        bio: 'Joe is a junior at the Harker School. His CS journey began in the fall of 2017, when he first started learning C++ with X-Camp, and he is currently a USACO Finalist. In his free time, he plays violin and does karate. He is extremely passionate about contributing to an organization that promotes competitive programming.'
      }, {
        name: 'Harry Chen',
        title: 'Co-President',
        image: '/images/teams/harry.jpg',
        bio: 'Harry is a junior at Northwood High School in Southern California. First exposed to programming in 6th grade, Harry enjoys designing complex systems and creating solutions to challenging problems. Besides being an active competitive programmer for three years, Harry has experience in full-stack web development and coding enterprise applications. He joins TeamsCode to help make the contest more accessible and more elegant, and he\'s currently in charge of the technology aspect of TeamsCode. In his free time, Harry likes to play tennis and ski.'
      }, {
        name: 'Charles Yates',
        title: 'Vice President',
        image: '/images/teams/charles.jpg',
        bio: 'Charles Yates is a senior at University Highschool in Socal. He has coded in C++ for 3 years, and made USACO Gold at 8th Grade. Outside of coding he does swimming and competitive math, as well as filming. Charles is excited to help fellow programmers gain more knowledge about coding. '
      }],
      members: [
        {
          name: 'Sol Park',
          title: 'Problem Writer',
          image: '/images/teams/sol.jpg',
          bio: 'Sol Park is a junior in Mercer Island High School in Washington. He started programming at 5th grade using mainly Python and C++, achieving Silver in USACO at 9th grade. He enjoys participating in Destination Imagination and has been doing it for four years. Outside of school, he volunteers in a Korean School as a Teacher\'s Assistant. He is very excited in being part of an organization for promoting computer science among students. '
        }, {
          name: 'Weiming Zhou',
          title: 'Problem Writer',
          image: '/images/teams/weiming.jpg',
          bio: 'Weiming Zhou is a junior attending Prestonwood Christian Academy in Plano, Texas. He has been doing competitive programming with C++ for almost 3 years and recently made Usaco Plat on the Us Open 2021. In his free time, he will probably be reading a book or playing chess online. He is very much looking forward to the experience of setting problems and introducing new problem solving techniques and algorithms to others.'
        },
        {
          name: 'Timothy Gao',
          title: 'Problem Writer',
          image: '/images/teams/timothy.jpg',
          bio: 'Timothy is a Senior at Amador Valley High School who has been actively participating in programming competitions since Freshman year. Thanks to the supportive competitive programming community, he discovered a passion for algorithms and programming as a whole. He is thrilled to problem-set for Teamscode in order to help promote the sport and give back to its incredible community.'
        },
        {
          name: 'Thomas Liu',
          title: 'Problem Writer',
          image: '/images/teams/thomasL.jpg',
          bio: 'Thomas is a junior at the Harker School. Fluent in C++, he enjoys competitive programming and is a USACO Platinum competitor. In his spare time he enjoys playing video games and solving coding problems. He also dabbles in web development and AI.'
        },
        {
          name: 'Dustin Miao',
          title: 'Problem Writer',
          image: '/images/teams/dustin.jpg',
          bio: 'Dustin is a junior at the Harker School who is passionate about computer science. He is in USACO\'s platinum division and a master on Codeforces, and is also interested in web development and artificial intelligence. In is spare time, he enjoys playing cello.'
        },
        {
          name: 'James Leung',
          title: 'Problem Writer',
          image: '/images/teams/james.jpg',
          bio: 'James is a junior at Hunter College High School. He started programming in C++ at 9th grade. He is passionate about working out, math, and New York City. He plays the alto saxophone for jazz band. He is excited to be with TeamsCode and spreading the joy of competitive programming. James has wrote math and computer science articles for magazines, and has taught USACO courses in Java and C++.'
        },
        {
          name: 'Problem Writer',
          title: 'Logistics Coordinator',
          image: '/images/teams/alejandro.jpg',
          bio: 'Alejandro is a junior studying IB at Maristes Sants-Les Corts in Barcelona. He started competitive programming in December 2021 and in March 2022 made it to USACO Gold and managed to get bronze medal in the Spanish Olympiad. When he isn\'t thinking about problems (almost never) he does judo, reads, plays videogames with his friends or watches Star Wars. His goal with Teamscode is to create unique and interesting problems for others to enjoy.'
        },
        {
          name: 'Angie Niu',
          title: 'Marketing Director',
          image: '/images/teams/angie.jpg',
          bio: 'Angie Niu is a junior at Newport High School. She is interested in programming and has taken several Java coding lessons. In her spare time, Angie enjoys playing volleyball and baking. She is excited to help bring high quality TeamsCode competitions to passionate programmers.'
        },
        {
          name: 'Allen Wu',
          title: 'Logistics Coordinator',
          image: '/images/teams/allen.jpg',
          bio: 'Allen Wu is currently a sophomore at Newport High School. He has actively participated in competitive programming since March 2021 and has achieved USACO Platinum and a Master on Codeforces. Outside competitive programming, he also does competition math and plays piano (a lot). He is looking forward to helping TeamsCode deliver a better contest experience to competitive programmers!'
        },
        {
          name: 'Abhay Raj',
          title: 'Web Developer',
          image: '/images/teams/abhay.jpg',
          bio: 'Abhay Raj is a junior in Mercer Island High School in Washington. He started competitive programming in 9th grade. Apart from competitive programming, he enjoys attending robotics and math clubs. Apart from school, Abhay likes to run, draw, and 3D-print models. He looks forward to both promoting and maintaining the TeamsCode website and competitions. '
        }
      ],
      pastLeadership: [
        {
          name: 'Chris Elliott',
          title: 'Co-Founder, Co-President 2017-2019',
          image: '/images/teams/chris.jpg'
        }, {
          name: 'Alan Bi',
          title: 'Co-Founder, Co-President 2017-2019',
          image: '/images/teams/alan.jpg'
        }, {
          name: 'Jason Zhang',
          title: 'Co-President, 2019-2020',
          image: '/images/teams/jason.jpg'
        }, {
          name: 'Alex Patel',
          title: 'Co-President, 2019-2020',
          image: '/images/teams/alexP.jpg'
        }, {
          name: 'Sean Yang',
          title: 'Co-President, 2020-2021',
          image: '/images/teams/sean.jpg'
        }, {
          name: 'Ryan Hsu',
          title: 'Co-President, 2020-2021',
          image: '/images/teams/ryan.jpg'
        }, {
          name: 'Conner Yin',
          title: 'Vice President, 2020-2021',
          image: '/images/teams/conner.jpg'
        }, {
          name: 'Winbert Zhang',
          title: 'Vice President, 2020-2021',
          image: '/images/teams/winbert.jpg'
        }, {
          name: 'Ethan Peng',
          title: 'Co-President, 2021-2022',
          image: '/images/teams/ethan.jpg'
        }, {
          name: 'Aayush Sheth',
          title: 'Co-President, 2021-2022',
          image: '/images/teams/aayush.jpg'
        }, {
          name: 'Elijah Huang',
          title: 'Vice President, 2021-2022',
          image: '/images/teams/elijah.jpg'
        }
      ],
      pastMembers: [
        {
          name: 'William Huang',
          title: 'Former Director of Marketing',
          image: '/images/teams/william.jpg'
        },
        {
          name: 'Victor Du',
          title: 'Former Director of Technology',
          image: '/images/teams/victor.jpg'
        }, {
          name: 'Bill Wang',
          title: 'Former Head of Finance',
          image: '/images/teams/bill.jpg'
        }, {
          name: 'Luca Palermo',
          title: 'Former Head of Problem Writing',
          image: '/images/teams/luca.jpg'
        }, {
          name: 'Lucille Shield',
          title: 'Head Organizer of Fall 2019 MIHS Programming Contest',
          image: '/images/teams/lucille.jpg'
        }, {
          name: 'Peter Ye',
          title: 'Head Organizer of the 2019 CGS Programming Contest',
          image: '/images/teams/peter.jpg'
        }, {
          name: 'Jonathan Guo',
          title: 'Programming Lead for the 2019 CGS Programming Contest ',
          image: '/images/teams/jonathan.jpg'
        }, {
          name: 'James Richardson',
          title: 'Lesson Creator: AP Computer Science',
          image: '/images/teams/james.jpg'
        }, {
          name: 'Robert Chen',
          title: 'Lesson Creator: USACO Problems',
          image: '/images/teams/robert.jpg'
        }, {
          name: 'Valliappan Valliappan',
          title: 'Lesson Creator: iOS with Swift',
          image: '/images/teams/valliappan.jpg'
        }, {
          name: 'Thomas Short',
          title: 'Finance Lead for Fall 2019 MIHS Programming Contest',
          image: '/images/teams/thomas.jpg'
        }, {
          name: 'Mathus Leungpathomaram',
          title: 'Director of Oregon Events, 2018-2019',
          image: '/images/teams/mathus.jpg'
        }, {
          name: 'Marshal Xu',
          title: 'Head Organizer of Fall 2018 CGS Programming Contest',
          image: '/images/teams/marshal.jpg'
        }, {
          name: 'Albert Huang',
          title: 'Former Problem Writer',
          image: '/images/teams/albert.jpg'
        }, {
          name: 'Helen Feng',
          title: 'Former Logistics Coordinator',
          image: '/images/teams/helen.jpg'
        }, {
          name: 'Alex Niu',
          title: 'Former Logistics Coordinator',
          image: '/images/teams/alexN.jpg'
        }, {
          name: 'Jay Dharmadhikari',
          title: 'Marketing Coordinator',
          image: '/images/teams/jay.jpg'
        }, {
          name: 'Alex Du',
          title: 'Problem Writer',
          image: '/images/teams/alexD.jpg'
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
