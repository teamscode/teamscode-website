<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list dense nav>
        <v-subheader class="text-uppercase font-weight-bold">
          TeamsCode
        </v-subheader>
        <v-list-item v-for="(item, index) in menu" :key="index" :to="item.link">
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-btn
      class="d-md-none drawer-button"
      rounded
      @click="drawer = !drawer"
    >
      <v-icon right>
        mdi-menu
      </v-icon>
    </v-btn>

    <v-app-bar app height="70">
      <v-container class="py-0 px-0 px-sm-2 fill-height">
        <nuxt-link to="/" class="d-flex align-center text-decoration-none mr-3">
          <img src="/images/logo.png" alt="" height="42" class="mr-2">
          <span class="font-weight-bold text-h5">
            TEAMSCODE
          </span>
        </nuxt-link>
        <v-spacer />
        <div class="d-none d-md-block">
          <v-btn
            v-for="(item, index) in menu"
            :key="index"
            text
            :to="item.link"
            class="mx-1"
          >
            {{ item.title }}
          </v-btn>
        </div>
      </v-container>
    </v-app-bar>
    <v-main>
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
              <div v-for="(link, i) in menu" :key="i" class="w-half body-1 mb-1">
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
                mdi-email-outline
              </v-icon>
              <a href="mailto:contact@teamscode.org" class="text-decoration-none secondary--text">contact@teamscode.org</a>
            </div>
            <div class="d-flex mb-2 text--lighten-2 text--secondary text-body-1">
              <v-icon color="secondary lighten-1" class="mr-2">
                mdi-map-marker-outline
              </v-icon>
              8106 SE 79th St, Mercer Island, Washington 98040
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <div class="text-h6 text-lg-h5 font-weight-bold">
              Newsletter
            </div>
            <div style="width: 80px; height: 4px" class="mb-5 mt-1 secondary" />
            <MailchimpForm />
            <div class="text-center text-md-right mt-4 mt-lg-2">
              Connect
              <v-btn
                fab
                small
                color="secondary"
                target="_blank"
                href="https://github.com/teamscode"
                class="ml-2"
              >
                <v-icon>mdi-github</v-icon>
              </v-btn>
              <v-btn
                fab
                small
                color="secondary"
                target="_blank"
                href="https://discord.com/invite/8pg89SS"
                class="ml-2"
              >
                <v-icon>mdi-discord</v-icon>
              </v-btn>
              <v-btn
                fab
                small
                color="secondary"
                target="_blank"
                href="https://www.instagram.com/teamscode/"
                class="ml-2"
              >
                <v-icon>mdi-instagram</v-icon>
              </v-btn>
            </div>
          </v-col>
        </v-row>
        <v-divider class="my-3" />
        <div class="text-center caption">
          © TeamsCode 2021. All Rights Reserved.
        </div>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: null,
      menu: [{
        title: 'Contests',
        link: '/contests'
      }, {
        title: 'Blog',
        link: '/blog'
      }, {
        title: 'Contact',
        link: '/contact'
      }, {
        title: 'Sponsors',
        link: '/sponsors'
      }, {
        title: 'About',
        link: '/about'
      }]
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
</style>
