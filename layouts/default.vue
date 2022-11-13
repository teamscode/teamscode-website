<template>
  <v-app>
    <v-app-bar
      app
      height="56"
      :extension-height="$vuetify.breakpoint.smAndDown ? 0 : 60"
    >
      <v-container class="d-flex pa-0 align-center">
        <nuxt-link to="/" class="d-flex align-center text-decoration-none ">
          <v-img src="/images/logo.png" alt="TeamsCode Logo" width="42" height="42" class="mr-2" />
          <span class="font-weight-bold text-h5">
            TEAMSCODE
          </span>
        </nuxt-link>

        <v-spacer />

        <div v-if="$vuetify.breakpoint.mdAndUp" class="mr-2 text-subtitle-1">
          Summer 2022 contest winners are announced!
        </div>
        <v-btn v-if="$vuetify.breakpoint.smAndUp" color="primary" to="/contests/summer-2022" class="mr-1" :disabled="$route.path.startsWith('/contests/summer-2022')">
          View Contest<v-icon right>
            {{ mdiArrowRight }}
          </v-icon>
        </v-btn>
      </v-container>

      <template #extension>
        <v-container class="py-0 d-none d-md-block fill-height">
          <v-divider class="ml-0" />
          <v-row class="d-flex justify-space-between mt-1 text-body-2 text-lg-body-1 layout-menu">
            <div
              v-for="(item, index) in menu"
              :key="index"
            >
              <v-btn
                v-if="item.link"
                text
                :to="item.link"
              >
                <span class="text-uppercase">{{ item.title }}</span>
              </v-btn>
            </div>
          </v-row>
        </v-container>
      </template>
    </v-app-bar>
    <v-btn
      class="d-md-none drawer-button"
      rounded
      @click="drawer = !drawer"
    >
      <v-icon right>
        {{ mdiMenu }}
      </v-icon>
    </v-btn>
    <v-main id="main-content">
      <Nuxt />
    </v-main>
    <v-footer color="surface">
      <v-container class="py-5">
        <v-row>
          <v-col cols="12" md="4">
            <div class="text-h6 text-lg-h5 font-weight-bold">
              Navigation
            </div>
            <div style="width: 80px; height: 4px" class="mb-5 mt-1 secondary" />
            <div class="d-flex flex-wrap">
              <div v-for="(link, i) in allPages" :key="i" class="w-half body-1 mb-1">
                <nuxt-link
                  v-if="link.link"
                  class="text-decoration-none secondary--text text--lighten-2"
                  :to="link.link"
                >
                  {{ link.title }}
                </nuxt-link>
                <a
                  v-else
                  class="text-decoration-none secondary--text text--lighten-2"
                  :href="link.href"
                  :target="link.target || 'blank'"
                >{{ link.label }}</a>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <div class="text-h6 text-lg-h5 font-weight-bold">
              Contact Information
            </div>
            <div style="width: 80px; height: 4px" class="mb-5 mt-1 secondary" />
            <div class="d-flex mb-2 font-weight-bold">
              <v-icon color="secondary lighten-1" class="mr-2">
                {{ mdiEmailOutline }}
              </v-icon>
              <a href="mailto:contact@teamscode.org" class="text-decoration-none secondary--text">contact@teamscode.org</a>
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <div class="text-h6 text-lg-h5 font-weight-bold">
              Newsletter
            </div>
            <div style="width: 80px; height: 4px" class="mb-5 mt-1 secondary" />
            <NewsletterForm>
              <div class="d-flex flex-column flex-lg-row w-full">
                <v-text-field
                  id="EMAIL"
                  type="text"
                  outlined
                  placeholder="Please enter your email"
                  solo
                  dense
                  name="EMAIL"
                  height="44"
                  class="input required email mr-lg-2"
                />
                <v-btn
                  form="sib-form"
                  class="mailing_list_signup"
                  type="submit"
                  large
                  color="secondary"
                >
                  Subscribe
                </v-btn>
              </div>
            </NewsletterForm>
            <div class="text-center text-md-right mt-4 mt-lg-2">
              <v-btn
                fab
                small
                color="secondary"
                target="_blank"
                href="https://github.com/teamscode"
                class="ml-2"
              >
                <v-icon>{{ mdiGithub }}</v-icon>
              </v-btn>
              <v-btn
                fab
                small
                color="secondary"
                class="ml-2"
                href="https://go.teamscode.org/discord"
                target="_blank"
              >
                <v-icon>{{ mdiDiscord }}</v-icon>
              </v-btn>
              <v-btn
                fab
                small
                color="secondary"
                target="_blank"
                href="https://www.instagram.com/teamscode/"
                class="ml-2"
              >
                <v-icon>{{ mdiInstagram }}</v-icon>
              </v-btn>
              <v-btn
                fab
                small
                color="secondary"
                target="_blank"
                href="https://www.youtube.com/channel/UC31_7D9OcjYJXmtwwGCsTrw"
                class="ml-2"
              >
                <v-icon>{{ mdiYoutube }}</v-icon>
              </v-btn>
            </div>
          </v-col>
        </v-row>
        <v-divider class="my-3" />
        <div class="text-center caption">
          © TeamsCode {{ new Date().getFullYear() }}. All Rights Reserved.
        </div>
        <div class="text-center caption">
          TeamsCode is a 501(c)(3) nonprofit organization.
        </div>
      </v-container>
    </v-footer>
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list dense nav>
        <v-subheader class="text-uppercase font-weight-bold">
          TeamsCode
        </v-subheader>
        <v-list-item v-for="(item, index) in allPages" :key="index" :to="item.link">
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template #append>
        <div class="pa-2">
          <v-btn color="primary" to="/contests/summer-2022" class="mr-3" :disabled="$route.path.startsWith('/contests/summer-2022')">
            Upcoming Contest<v-icon right>
              {{ mdiArrowRight }}
            </v-icon>
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
import { mdiArrowRight, mdiMenu, mdiEmailOutline, mdiMapMarkerOutline, mdiGithub, mdiDiscord, mdiInstagram, mdiYoutube } from '@mdi/js'
export default {
  data () {
    return {
      mdiMenu,
      mdiEmailOutline,
      mdiMapMarkerOutline,
      mdiGithub,
      mdiDiscord,
      mdiInstagram,
      mdiYoutube,
      mdiArrowRight,
      drawer: null,
      menu: [{
        title: 'Home',
        link: '/'
      },
      {
        title: 'Contests',
        link: '/contests'
      }, {
        title: 'Blog',
        link: '/blog'
      }, {
        title: 'Resources',
        link: '/resources'
      }, {
        title: 'Contact',
        link: '/contact'
      }, {
        title: 'Sponsors',
        link: '/sponsors'
      },
      {
        title: 'Affiliates',
        link: '/affiliates'
      }, {
        title: 'About',
        link: '/about'
      }]
    }
  },
  computed: {
    allPages () {
      const pages = []
      this.menu.forEach((item) => {
        if (item.link) {
          pages.push(item)
        } else if (item.children) {
          item.children.forEach((child) => { pages.push(child) })
        }
      })
      return pages
    }
  }
}
</script>

<style scoped>
.drawer-button {
  position: fixed;
  top: 60px;
  left: -22px;
  z-index: 6;
}
@media only screen and (min-width: 960px) {
  #main-content {
    padding-top: 116px !important;
  }
}
</style>
