<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list dense nav>
        <v-subheader class="text-uppercase font-weight-bold">
          Menu
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

    <v-app-bar app height="80">
      <v-container class="py-0 px-0 px-sm-2 fill-height">
        <router-link to="#" class="d-flex align-center text-decoration-none mr-3">
          <img src="/images/logo.png" alt="" height="48" class="mr-2">
          <span class="font-weight-bold text-h5">
            TEAMSCODE
          </span>
        </router-link>

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
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: null,
      menu: [{
        title: 'Contests',
        link: '/contest'
      }, {
        title: 'Blog',
        link: '/pricing'
      }, {
        title: 'Contact',
        link: '/contact'
      }, {
        title: 'Affiliates',
        link: '/affiliates'
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
