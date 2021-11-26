<template>
  <v-container class="py-4 py-lg-8">
    <v-row>
      <v-col cols="12" md="3">
        <div style="width: 80px; height: 4px" class="mb-3 secondary" />
        <h2 class="text-h4 mb-3">
          {{ header }}
        </h2>
      </v-col>
      <v-col cols="12" md="8" class="pa-md-0">
        <div v-for="(person, i) in people" :key="i">
          <v-divider v-if="i !== 0" />
          <v-row class="align-center py-3">
            <v-col cols="12" md="4" lg="3" class="pr-4 text-center">
              <v-avatar size="190">
                <v-img :src="person.image" />
              </v-avatar>
            </v-col>
            <v-col cols="12" md="8" lg="9">
              <div class="text-h5">
                {{ person.name }}
              </div>
              <div class="text-h6 secondary--text">
                {{ person.title }}
              </div>
              <div class="text-body mt-3">
                {{ person.bio }}
              </div>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    people: {
      type: Array,
      default: () => []
    },
    header: {
      type: String,
      default: () => ''
    }
  }
}
</script>
