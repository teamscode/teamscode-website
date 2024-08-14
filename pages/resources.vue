<template>
  <div>
    <v-sheet color="surface">
      <v-container class="py-8">
        <div class="text-center">
          <h2 class="text-h3 text-lg-h2">
            Competitive programming resources
          </h2>
          <v-responsive max-width="1200" class="mx-auto">
            <div class="text-body-1 mt-4">
              A list of high quality competitive programming resources to help programmers of all levels sharpen their skills
            </div>
          </v-responsive>
        </div>
      </v-container>
    </v-sheet>
    <v-sheet>
      <v-container class="py-4 py-lg-8">
        <div class="text-right mb-2">
          <v-btn color="primary" outlined @click="expandAll">
            Expand All
          </v-btn>
          <v-btn color="primary" outlined @click="collapseAll">
            Close All
          </v-btn>
        </div>
        <v-expansion-panels
          v-model="panel"
          multiple
        >
          <v-expansion-panel
            v-for="item in resources"
            :key="item.category"
          >
            <v-expansion-panel-header class="text-h5" :expand-icon="mdiChevronDown">
              <v-row no-gutters class="align-center">
                <v-icon class="d-none d-sm-block">
                  {{ item.icon }}
                </v-icon>
                <div class="ml-1 text-h6">
                  {{ item.category }}
                </div>
              </v-row>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="text-h6 secondary--text">
              <div
                v-for="(resource, ri) in item.list"
                :key="resource.description"
              >
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title v-text="resource.description" />
                  </v-list-item-content>
                  <v-list-item-action-text>
                    <a target="_blank" :href="resource.link">{{ $vuetify.breakpoint.mdAndUp ? resource.link : 'Link' }}</a>
                  </v-list-item-action-text>
                </v-list-item>
                <v-divider
                  v-if="ri < item.list.length - 1"
                />
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
import { mdiTrophyVariant, mdiBook, mdiAccountCowboyHat, mdiFileCode, mdiChevronDown, mdiBookOpen } from '@mdi/js'
export default {
  data () {
    return {
      mdiChevronDown,
      panel: [],
      resources: [
        {
          category: 'Other Competitive Programming Contests',
          icon: mdiTrophyVariant,
          list: [
            {
              description: 'USACO',
              link: 'https://usaco.org/'
            },
            {
              description: 'AtCoder',
              link: 'https://atcoder.jp/'
            }, {
              description: 'Codeforces',
              link: 'https://codeforces.com/'
            }, {
              description: 'CodeChef',
              link: 'https://www.codechef.com/'
            }, {
              description: 'DMOJ',
              link: 'https://dmoj.ca/'
            }, {
              description: 'Facebook Hacker Cup',
              link: 'https://www.facebook.com/codingcompetitions/hacker-cup/'
            }, {
              description: 'Google Code Jam, Kick Start',
              link: 'https://codingcompetitionsonair.withgoogle.com/'
            }, {
              description: 'Topcoder',
              link: 'https://www.topcoder.com/community/competitive-programming/'
            },
            {
              description: 'Contest Calendar',
              link: 'https://clist.by/'
            }
          ]
        },
        {
          category: 'Competitive Programming Books',
          icon: mdiBook,
          list: [
            {
              description: 'CP Handbook',
              link: 'https://cses.fi/book.pdf'
            }, {
              description: 'Competitive Programming 3',
              link: 'https://cpbook.net/details?cp=3'
            }, {
              description: 'Principles of Algorithmic Problem Solving',
              link: 'http://www.csc.kth.se/~jsannemo/slask/main.pdf'
            }, {
              description: 'The Hitchhiker\'s Guide to the Programming Contests',
              link: 'https://i.cs.hku.hk/~provinci/files/b1-hitchiker.pdf'
            }, {
              description: 'Bronze/Silver USACO Books by Darren Yao (Java)',
              link: 'http://darrenyao.com/usacobook/java.pdf'
            }, {
              description: 'Bronze/Silver USACO Books by Darren Yao (C++)',
              link: 'http://darrenyao.com/usacobook/cpp.pdf'
            }, {
              description: 'Guide to DP',
              link: 'https://dp-book.com/Dynamic_Programming.pdf'
            }, {
              description: 'Crash Course Coding Companion',
              link: 'https://www.dropbox.com/s/z2lur71042pjaet/guide.pdf?dl=0'
            }, {
              description: 'Mostafa Public Problem Lists',
              link: 'https://docs.google.com/spreadsheets/d/1-n9Fnvhsnvsqh-IerE_yyIshw5RUNer_7EjwF_GW-TA/'
            }, {
              description: 'Junior Training Sheet',
              link: 'https://docs.google.com/spreadsheets/d/1iJZWP2nS_OB3kCTjq8L6TrJJ4o-5lhxDOyTaocSYc-k/'
            }, {
              description: 'OI Checklist',
              link: 'http://oichecklist.pythonanywhere.com/'
            }
          ]
        },
        {
          category: 'USACO Related Resources',
          icon: mdiAccountCowboyHat,
          list: [{
            description: 'USACO Checklist',
            link: 'https://docs.google.com/spreadsheets/d/1z2k-fv6q9KPHDuZu1arBvwIuKZ4HCoBRfHQR0UryPMQ/edit?usp=sharing'
          }, {
            description: 'USACO Guide',
            link: 'https://usaco.guide/'
          }, {
            description: 'USACO Tracker Spreadsheets',
            link: 'https://codeforces.com/blog/entry/78158'
          }, {
            description: 'USACO Unofficial Syllabus (Only based on past problems)',
            link: 'https://www.overleaf.com/read/fktckfprxyxn'
          }, {
            description: 'USACO Practice Method Guide',
            link: 'https://www.reddit.com/r/usaco/comments/pk3tjp/the_ultimate_usaco_practice_method/'
          }, {
            description: 'USACO Previous Contest',
            link: 'http://usaco.org/index.php?page=contests'
          }, {
            description: 'Old USACO Contests',
            link: 'https://www.acmicpc.net/category/106'
          }]
        },
        {
          category: 'Algorithm Resources and Templates',
          icon: mdiFileCode,
          list: [
            {
              description: 'Algorithms Visualized',
              link: 'https://visualgo.net/'
            }, {
              description: 'AtCoder Library',
              link: 'https://img.atcoder.jp/practice2/ac-library.zip'
            }, {
              description: 'Codeforces EDU',
              link: 'https://codeforces.com/edu/courses'
            }, {
              description: 'CP Algorithms',
              link: 'http://cp-algorithms.com/'
            }, {
              description: 'IOI Syllabus (topics not on here can appear on Platinum as well)',
              link: 'https://ioinformatics.org/page/syllabus/12'
            }, {
              description: 'KACTL',
              link: 'https://github.com/kth-competitive-programming/kactl'
            }, {
              description: 'Library Checker',
              link: 'https://judge.yosupo.jp/'
            }, {
              description: 'User-made ICPC Syllabus',
              link: 'https://docs.google.com/document/d/1_dc3Ifg7Gg1LxhiqMMmE9UbTsXpdRiYh4pKILYG2eA4'
            }
          ]
        },
        {
          category: 'TeamsCode Original Resources',
          icon: mdiBookOpen,
          list: [
            {
              description: 'AP Computer Science A',
              link: 'https://archive.teamscode.org/learn/ap-computer-science/'
            },
            {
              description: 'Programming Practice',
              link: 'https://archive.teamscode.org/learn/programming-practice/'
            },
            {
              description: 'USACO Problems',
              link: 'https://archive.teamscode.org/learn/usaco/'
            },
            {
              description: 'iOS with Swift',
              link: 'https://archive.teamscode.org/learn/ios/'
            }
          ]
        }
      ]
    }
  },
  head () {
    return {
      title: 'Resources',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'TeamsCode\'s list of helpful competitive programming and USACO resources. Feel free to use them to sharpen your coding skill.'
        }
      ]
    }
  },
  methods: {
    expandAll () {
      const arr = []
      for (let index = 0; index < this.resources.length; index += 1) {
        arr.push(index)
      }
      this.panel = arr
    },
    collapseAll () {
      this.panel = []
    }
  }
}
</script>

<style>

</style>
