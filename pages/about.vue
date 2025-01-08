<template>
  <div>
    <v-sheet color="surface">
      <v-container class="py-6 py-lg-12 text-center">
        <h1 class="text-h3 text-sm-h2 text-md-h1">
          About <span class="primary--text">TeamsCode</span>
        </h1>
        <h2 class="text-body-1 text--lighten-2 mt-4 ">
          Our mission and team
        </h2>
      </v-container>
    </v-sheet>
    <v-sheet>
      <v-container class="py-4 py-lg-8">
        <v-row>
          <v-col cols="12" lg="6">
            <v-img src="/images/about-background.jpg" class="rounded-lg elevation-6" height="100%" />
          </v-col>
          <v-col cols="12" lg="6">
            <div class="text-uppercase font-weight-bold body-2 primary--text mb-2 text-center text-md-left">
              TeamsCode
            </div>
            <h2 class="text-h4 text-sm-h3 text-lg-h2 text-center text-md-left">
              From in-person events to virtual contests
            </h2>
            <div class="text-body-2 mt-5">
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
            <v-btn large class="my-1 mx-sm-2 w-full w-sm-auto" color="primary" to="/get-involved">
              Get Involved
            </v-btn>
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
        name: 'Bryan Zhu',
        title: 'Co-President',
        image: '/images/teams/bryan.png',
        bio: "Bryan is a junior at Bellevue High School in the Seattle, WA metro area. His most familiar coding language is C++, where he's currently competing in USACO Platinum, but he also has plenty of experience in Java and Python. Outside of competitive programming, he has also done research in combinatorial optimization and deep and reinforcement learning for improving diabetes management. He also enjoys math and playing with his 2 Pomeranians."
      }, {
        name: 'Peng Bai',
        title: 'Co-President',
        image: '/images/teams/peng.jpg',
        bio: 'Peng is a senior at École Dr. Charles Best Secondary School. He started actively practicing competitive programming in 2022. He managed to reach Codeforces Master and USACO Platinum in a year. He is actively attempting to improve to reach even higher ambitions despite recent failures in important contests. Outside of programming and math, he is interested in understanding the world through history and geopolitics through his readings. To have some fun, he also enjoys playing video games.'
      }, {
        name: 'Eric Chang',
        title: 'Vice President',
        image: '/images/teams/eric.png',
        bio: 'Eric Chang is a junior at Newport High School. He has taken classes in Python and Java before. In his free time, Eric likes playing Chess and play tennis. He is looking forward to creating exciting TeamsCode competitions for competitive coders!'
      }, {
        name: 'Gabriel Xu',
        title: 'Vice President',
        image: '/images/teams/gabriel.jpeg',
        bio: 'Gabriel is a senior at the Thomas Jefferson High School for Science and Technology. He first started competitive programming in the fall of 2021 and is currently a USACO Platinum competitor. Additionally, he is interested in machine learning, application development, cybersecurity, and competition math. He also enjoys long-distance running in cross country and track and field.'
      }, {
        name: 'Shine Chang',
        title: 'Vice President',
        image: '/images/teams/shine.jpg',
        bio: 'Shine Chang is a senior at Cupertino High School in San Jose. He started to learn programming from his dad in elementary school, and has been building projects for fun ever since. He is in USACO\'s Gold division. He loves Rust but also works with high-level programs for web development. As hobbies, he plays Tetris, badminton, skis, and does FRC.'
      }],
      members: [
        {
          name: 'Brian Xue',
          title: 'Problem Writer',
          image: '/images/teams/brian.png',
          bio: 'Brian is a senior at Lynbrook High School. He has played around with computer science since his 6th grade, becoming fluent in C++. The summer before high school, he started seriously doing competitive programming with a bunch of friends and became a USACO Finalist in the 2022-2023 season and achieved 3rd place at IOI 2024. In his free time, Brian enjoys art, video games, and reading.'
        },
        {
          name: 'Yash Belani',
          title: 'Problem Writer',
          image: '/images/teams/yash.png',
          bio: 'Yash Belani is a sophomore at the Harker School. He recently started USACO and is competing in the USACO Silver division with C++. In his free time, he enjoys playing video games, basketball, or solving problems.'
        },
        {
          name: 'Helen Law',
          title: 'Problem Writer',
          image: '/images/teams/helenL.jpg',
          bio: 'Helen is an freshman at Palo Alto High School. She started programming in 2021 and is now in USACO\'s Platinum division. Aside from programming, Helen also enjoys math, art, and reading. She is excited to create new problems that require different techniques.'
        },
        {
          name: 'Spencer Wang',
          title: 'Problem Writer',
          image: '/images/teams/spencer.jpg',
          bio: 'Spencer is a sophomore at PRISMS (Princeton International School of Math and Science). He started his competitive programming 3 years ago and became fluent in C++ over this time. He is in USACO’s Platinum division and qualified for CCO from CCC (Canadian Computing Competition). In his free time, he enjoys fidgeting around with computer components and software.'
        },
        {
          name: 'Julian Wu',
          title: 'Problem Writer',
          image: '/images/teams/julian.jpg',
          bio: 'Julian is a junior at Westview High School in San Diego. Starting from making games on KhanAcademy, Julian developed a passion for coding from a young age. He soon picked up competitive programming and has been selected as a 2024 USACO Finalist. Outside of programming, he enjoys playing cello, basketball, and video games.'
        },
        {
          name: 'Jason Zeng',
          title: 'Problem Writer',
          image: '/images/teams/jasonZe.jpg',
          bio: 'Jason is a junior at Watchung Hills Regional High School in New Jersey. He started competitive programming in middle school and has been selected as a 2024 USACO Finalist. Outside of competitive programming, he also enjoys math, physics, and robotics.'
        },
        {
          name: 'Guoguo Gong',
          title: 'Problem Writer',
          image: '/images/teams/guoguo.jpeg',
          bio: 'Guoguo is a sophomore at Basis Independent McLean. He is currently working very hard to try to get to USACO Finalist in the 24-25 season. In his free time, he likes to run and play with his friends.'
        },
        {
          name: 'Chris Matthews',
          title: 'Logistics Coordinator',
          image: '/images/teams/chrisM.jpg',
          bio: 'Chris is a senior at Bridgeland High School with a passion for competitive programming, having reached the Silver division of USACO since starting in his junior year. An avid chess player, he enjoys strategic thinking. In his free time, Chris stays active by working out at the gym.'
        },
        {
          name: 'Devin Lim',
          title: 'Logistics Coordinator',
          image: '/images/teams/devin.jpg',
          bio: "Devin Lim is a senior at Solon High School in Solon, Ohio. He likes coding, playing the cello, and stealing other people's lunches."
        },
        {
          name: 'Alex Chen',
          title: 'Problem Writer',
          image: '/images/teams/alexC.png',
          bio: 'Alex is a senior at Monta Vista High School. He had done math competitively, attending the Mathematical Olympiad Program in 2023, and competitive programming, being selected as a USACO Finalist in 2022 and 2024. In his free time, he enjoys playing video games and solving webpuzzles.'
        },
        {
          name: 'Jason Wei',
          title: 'Problem Writer',
          image: '/images/teams/jasonW.png',
          bio: 'Jason is a junior at Friendswood High School, Texas. He started competitive programming in 5th grade and is currently trying to make USACO Finalists during the 2024-25 USACO season. In his spare time, he enjoys listening to musicals and runs cross country for the school.'
        },
        {
          name: 'Alex Liu',
          title: 'Problem Writer',
          image: '/images/teams/alexL.png',
          bio: "Alex Liu is a senior at Lynbrook High School. He has enjoyed competitive programming since middle school, and is in USACO's Platinum Division. In his free time, he enjoys playing violin and sleeping."
        },
        {
          name: 'Anthony Li',
          title: 'Problem Writer',
          image: '/images/teams/anthony.jpg',
          bio: 'Anthony is a senior at Seven Lakes High School in Katy, Texas. He started competitive programming in 8th grade and has become a Candidate Master on Codeforces and is a USACO Gold Qualifier. Outside of coding, he enjoys fishing and playing/watching football.'
        },
        {
          name: 'Culver Kwan',
          title: 'Problem Writer',
          image: '/images/teams/culver.png',
          bio: "Culver is a junior at Diocesan Boys' School in Hong Kong. He enjoys both mathematics and programming, and participates in olympiads for both of them. He participated in IMO 2023, 2024 and got bronze and silver medals respectively, and got a silver medal at IOI 2024. His peak rank on Codeforces is Grandmaster. He has also done research on graph theory in the summer leading up to his sophomore year. He likes writing both math problems and informatics problems, and has set a number of quality problems in both."
        },
        {
          name: 'Emma Walker',
          title: 'Logistics Coordinator',
          image: '/images/teams/emma.jpeg',
          bio: 'Emma is a senior at Amador Valley Highschool in California. She started programming her sophomore year and has enjoyed it ever since. Outside of coding she enjoys digital art and board games. She looks forward to help out with the competition!'
        },
        {
          name: 'Nelson Huang',
          title: 'Problem Writer',
          image: '/images/teams/nelson.jpg',
          bio: 'Nelson Huang is a sophomore at Providence High School in Charlotte, North Carolina. He learned computer science in 4th grade and started competitive programming in 6th grade. He was selected as a USACO Finalist in the 2023-2024 season. Outside of programming, he also enjoys math and video games.'
        },
        {
          name: 'Justin Ji',
          title: 'Problem Writer',
          image: '/images/teams/justin.png',
          bio: 'Justin Ji is a junior at Lynbrook High School in San Jose, California. He started programming in 9th grade, and is currently in the USACO Gold division. Outside of programming, he enjoys hiking, video games, and spending time with friends.'
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
          image: '/images/teams/jasonZh.jpg'
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
          image: '/images/teams/elijah.png'
        }, {
          name: 'Charles Yates',
          title: 'Vice President, 2022-2023',
          image: '/images/teams/charles.jpg'
        }, {
          name: 'Joe Li',
          title: 'Co-President, 2022-2024',
          image: '/images/teams/joe.jpg'
        }, {
          name: 'Harry Chen',
          title: 'Co-President, 2022-2024',
          image: '/images/teams/harry.jpg'
        }, {
          name: 'Weiming Zhou',
          title: 'Vice President, 2023-2024',
          image: '/images/teams/weiming.jpg'
        }, {
          name: 'Angie Niu',
          title: 'Vice President, 2023-2024',
          image: '/images/teams/angie.jpg'
        }
      ],
      pastMembers: [
        {
          name: 'William Huang',
          title: 'Former Director of Marketing',
          image: '/images/teams/william.jpg'
        }, {
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
          image: '/images/teams/jamesR.jpg'
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
          title: 'Problem Writer',
          image: '/images/teams/albert.jpg'
        }, {
          name: 'Helen Feng',
          title: 'Logistics Coordinator',
          image: '/images/teams/helenF.jpg'
        }, {
          name: 'Alex Niu',
          title: 'Logistics Coordinator',
          image: '/images/teams/alexN.jpg'
        }, {
          name: 'Jay Dharmadhikari',
          title: 'Marketing Coordinator',
          image: '/images/teams/jay.jpg'
        }, {
          name: 'Alex Du',
          title: 'Problem Writer',
          image: '/images/teams/alexD.jpg'
        }, {
          name: 'Timothy Gao',
          title: 'Problem Writer',
          image: '/images/teams/timothy.jpg'
        }, {
          name: 'Sol Park',
          title: 'Problem Writer',
          image: '/images/teams/sol.jpg'
        }, {
          name: 'Thomas Liu',
          title: 'Problem Writer',
          image: '/images/teams/thomasL.jpg'
        }, {
          name: 'Dustin Miao',
          title: 'Problem Writer',
          image: '/images/teams/dustin.jpg'
        }, {
          name: 'James Leung',
          title: 'Problem Writer',
          image: '/images/teams/jamesL.jpg'
        }, {
          name: 'Alejandro Vivero',
          title: 'Problem Writer',
          image: '/images/teams/alejandro.jpg'
        }, {
          name: 'Allen Wu',
          title: 'Logistics Coordinator',
          image: '/images/teams/allen.jpg'
        }, {
          name: 'Maira Elahi',
          title: 'Logistics Coordinator',
          image: '/images/teams/maira.jpg'
        }, {
          name: 'Abhay Raj',
          title: 'Web Developer',
          image: '/images/teams/abhay.jpg'
        }, {
          name: 'Daniel Nieto',
          title: 'Problem Writer',
          image: '/images/teams/daniel.png'
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
