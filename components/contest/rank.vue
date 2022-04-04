<template>
  <v-list three-line>
    <div v-for="(team,index) in winners" :key="team[0]">
      <v-list-item>
        <v-list-item-avatar
          :color="color[index]"
        >
          <div class="white--text">
            {{ index+1 | ordinal }}
          </div>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>{{ team[0] }}</v-list-item-title>
          <v-list-item-subtitle>{{ team[1] }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider v-if="index!==winners.length-1" v-inset />
    </div>
  </v-list>
</template>

<script>
import { mdiTrophyVariant } from '@mdi/js'
export default {
  props: {
    winners: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      mdiTrophyVariant,
      color: ['amber', 'grey darken-2', 'orange darken-3', 'blue-grey lighten-2', 'blue-grey lighten-2', 'blue-grey lighten-2']
    }
  }
}
</script>

<style>

</style>
