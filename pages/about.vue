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
        name: 'Joe Li',
        title: 'Co-President',
        image: '/images/teams/joe.jpg',
        bio: 'Joe is a senior at the Harker School. His CS journey began in the fall of 2017, when he first started learning C++ with X-Camp, and he is currently a USACO Finalist. In his free time, he plays violin and does karate. He is extremely passionate about contributing to an organization that promotes competitive programming.'
      }, {
        name: 'Harry Chen',
        title: 'Co-President',
        image: '/images/teams/harry.jpg',
        bio: 'Harry is a senior at Northwood High School in Irvine. He is currently fluent in C++ and competes in USACO Platinum. Harry also enjoys coding web applications with TypeScript and is in charge of the backend development at TeamsCode. In his free time, Harry likes to play tennis and ski.'
      }, {
        name: 'Weiming Zhou',
        title: 'Vice President',
        image: '/images/teams/weiming.jpg',
        bio: 'Weiming Zhou is a senior attending Prestonwood Christian Academy in Plano, Texas. He has been doing competitive programming with C++ for almost 3 years and recently made Usaco Plat on the Us Open 2021. In his free time, he will probably be reading a book or playing chess online. He is very much looking forward to the experience of setting problems and introducing new problem solving techniques and algorithms to others.'
      }, {
        name: 'Angie Niu',
        title: 'Vice President',
        image: '/images/teams/angie.jpg',
        bio: 'Angie Niu is a senior at Newport High School. She is interested in programming and has taken several Java coding lessons. In her spare time, Angie enjoys playing volleyball and baking. She is excited to help bring high quality TeamsCode competitions to passionate programmers.'
      }],
      members: [
        {
          name: 'Sol Park',
          title: 'Problem Writer',
          image: '/images/teams/sol.jpg',
          bio: 'Sol Park is a senior in Mercer Island High School in Washington. He started programming at 5th grade using mainly Python and C++, achieving Silver in USACO at 9th grade. He enjoys participating in Destination Imagination and has been doing it for four years. Outside of school, he volunteers in a Korean School as a Teacher\'s Assistant. He is very excited in being part of an organization for promoting computer science among students. '
        },
        {
          name: 'Thomas Liu',
          title: 'Problem Writer',
          image: '/images/teams/thomasL.jpg',
          bio: 'Thomas is a senior at the Harker School. Fluent in C++, he enjoys competitive programming and is a USACO Platinum competitor. In his spare time he enjoys playing video games and solving coding problems. He also dabbles in web development and AI.'
        },
        {
          name: 'Dustin Miao',
          title: 'Problem Writer',
          image: '/images/teams/dustin.jpg',
          bio: 'Dustin is a senior at the Harker School who is passionate about computer science. He is in USACO\'s platinum division and a master on Codeforces, and is also interested in web development and artificial intelligence. In is spare time, he enjoys playing cello.'
        },
        {
          name: 'James Leung',
          title: 'Problem Writer',
          image: '/images/teams/james.jpg',
          bio: 'James is a senior at Hunter College High School. He started learning C++ in 9th grade. He is passionate about New York City, working out, and math. He plays the alto saxophone for jazz band. He is excited to be with TeamsCode to spread the joy of programming. James also likes playing video games.'
        },
        {
          name: 'Alejandro Vivero',
          title: 'Problem Writer',
          image: '/images/teams/alejandro.jpg',
          bio: 'Alejandro is a senior studying IB at Maristes Sants-Les Corts in Barcelona. He started competitive programming in December 2021 and in March 2022 made it to USACO Gold and managed to get bronze medal in the Spanish Olympiad. When he isn\'t thinking about problems (almost never) he does judo, reads, plays videogames with his friends or watches Star Wars. His goal with Teamscode is to create unique and interesting problems for others to enjoy.'
        },
        {
          name: 'Allen Wu',
          title: 'Logistics Coordinator',
          image: '/images/teams/allen.jpg',
          bio: 'Allen Wu is currently a junior at Newport High School. He has actively participated in competitive programming since March 2021 and has achieved USACO Platinum and a Master on Codeforces. Outside competitive programming, he also does competition math and plays piano (a lot). He is looking forward to helping TeamsCode deliver a better contest experience to competitive programmers!'
        },
        {
          name: 'Maira Elahi',
          title: 'Logistics Coordinator',
          image: '/images/teams/maira.jpg',
          bio: 'Maira Elahi is currently a senior at Riverside Secondary School. Some of her many passions lie in computer science and emerging technologies. As such, she has been working on several projects, namely cancer and climate research involving deep learning, artificial intelligence, and nanotechnology. At Teamscode, she\'s thrilled to help deliver enriching competitions to so many passionate, enthusiastic programmers!'
        },
        {
          name: 'Abhay Raj',
          title: 'Web Developer',
          image: '/images/teams/abhay.jpg',
          bio: 'Abhay Raj is a senior in Mercer Island High School in Washington. He started competitive programming in 9th grade. Apart from competitive programming, he enjoys attending robotics and math clubs. Apart from school, Abhay likes to run, draw, and 3D-print models. He looks forward to both promoting and maintaining the TeamsCode website and competitions. '
        },
        {
          name: 'Brian Xue',
          title: 'Problem Writer',
          image: '/images/teams/brian.png',
          bio: 'Brian is a junior at Lynbrook High School. He has played around with computer science since his 6th grade, becoming fluent in C++. The summer before high school, he started seriously doing competitive programming with a bunch of friends and became a USACO Finalist in the 2022-2023 season. In his free time, Brian enjoys art, video games, and reading.'
        },
        {
          name: 'Daniel Nieto',
          title: 'Problem Writer',
          image: '/images/teams/daniel.png',
          bio: 'Daniel Nieto is a senior at IES El Ravatxol High School in Valencia, who loves programming and sports. He started in competitive programming during the summer of 2021 and has since achieved the Expert rank on CodeForces. Furthermore, he won a silver medal in the Spanish Olympiad in Informatics. During his free time, Daniel can usually be found immersed in problem-solving, reading a good book, or training at the gym. His aspirations with TeamsCode are becoming a better problem setter and meeting people with the same interests.'
        },
        {
          name: 'Shine Chang',
          title: 'Web Developer',
          image: '/images/teams/shine.jpg',
          bio: 'Shine Chang is a junior at Cupertino High School in San Jose. He started to learn programming from his dad in elementary school, and has been building projects for fun ever since. He is in USACO\'s gold division. He loves Rust but also works with high-level programs for web development. As hobbies, he plays Tetris, badminton, skis, and does FRC.'
        },
        {
          name: 'Bryan Zhu',
          title: 'Logistics Coordinator',
          image: '/images/teams/bryan.png',
          bio: 'Bryan is a sophomore at Bellevue High School in Bellevue, Washington. His most familiar coding language is C++, where he\'s currently competing in USACO Platinum, but he also has experience in Java (from AP Computer Science) and Python, particularly machine learning and data analysis. In his free time, he likes to play with his dogs, play video games, or surf Reddit.'
        },
        {
          name: 'Eric Chang',
          title: 'Logistics Coordinator',
          image: '/images/teams/eric.png',
          bio: 'Eric Chang is a Sophomore at Newport High School. He has taken classes in Python and Java before. In his free time, Eric likes playing Chess and play tennis. He is looking forward to creating exciting Teamscode competitions for competitive coders!'
        },
        {
          name: 'Yash Belani',
          title: 'Logistics Coordinator',
          image: '/images/teams/yash.png',
          bio: 'Yash Belani is a freshman at the Harker School. He recently started USACO and is competing in the USACO Silver with c++. In his free time, he enjoys playing video games, basketball, or solving problems.'
        },
        {
          name: 'Helen Law',
          title: 'Problem Writer',
          image: '/images/teams/helen_law.jpg',
          bio: 'Helen is an 8th grader at Greene Middle School. She started programming in 2021 and is now in USACO\'s Platinum division. Aside from programming, Helen also enjoys math, art, and reading. She is excited to create new problems that require different techniques.'
        },
        {
          name: 'Spencer Wang',
          title: 'Problem Writer',
          image: '/images/teams/spencer.jpg',
          bio: 'Spencer is a sophomore at PRISMS (Princeton International School of Math and Science). He started his competitive programming 3 years ago and became fluent in C++ over this time. He is in USACO’s platinum division and qualified for CCO from CCC (Canadian Computing Competition). In his free time, he enjoys fidgeting around with computer components and software..'
        },
        {
          name: 'Gabriel Xu',
          title: 'Problem Writer',
          image: '/images/teams/gabriel.jpeg',
          bio: 'Gabriel is a junior at the Thomas Jefferson High School for Science and Technology. He first started competitive programming in the fall of 2021 and is currently a USACO Platinum competitor. Additionally, he is interested in machine learning, application development, cybersecurity, and competition math. He also enjoys long-distance running in cross country and track and field.'
        },
        {
          name: 'Julian Wu',
          title: 'Problem Writer',
          image: '/images/teams/julian.jpg',
          bio: 'Julian is a junior at Westview High School in San Diego. Starting from making games on KhanAcademy, Julian developed a passion for coding from a young age. He soon picked up competitive programming and has been selected as a 2024 USACO Finalist. Outside of programming, he enjoys playing cello, basketball, and video games.'
        },
        {
          name: 'Peng Bai',
          title: 'Problem Writer',
          image: '/images/teams/peng.jpg',
          bio: 'Peng is a junior at École Dr. Charles Best Secondary School. He started actively practicing competitive programming in 2022. He managed to reach Codeforces Master and USACO Platinum in a year. He is actively attempting to improve to reach even higher ambitions despite recent failures in important contests. Outside of programming and math, he is interested in understanding the world through history and geopolitics through his readings. To have some fun, he also enjoys playing video games.'
        },
        {
          name: 'Jason Zeng',
          title: 'Problem Writer',
          image: '/images/teams/jasonZe.jpg',
          bio: 'Jason is a junior at Watchung Hills Regional High School in New Jersey. He started competitive programming in middle school and has been selected as a 2024 USACO Finalist. Outside of competitive programming, he also enjoys math, physics, and robotics.'
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
          image: '/images/teams/elijah.jpg'
        }, {
          name: 'Charles Yates',
          title: 'Vice President, 2022-2023',
          image: '/images/teams/charles.jpg'
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
        }, {
          name: 'Timothy Gao',
          title: 'Problem Writer',
          image: '/images/teams/timothy.jpg',
          bio: 'Timothy is a Senior at Amador Valley High School who has been actively participating in programming competitions since Freshman year. Thanks to the supportive competitive programming community, he discovered a passion for algorithms and programming as a whole. He is thrilled to problem-set for Teamscode in order to help promote the sport and give back to its incredible community.'
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
