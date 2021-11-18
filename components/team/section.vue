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
        <div v-for="(item, i) in team" :key="i">
          <v-divider v-if="i !== 0" />
          <div class="d-flex align-center py-3">
            <div class="mr-4">
              <v-avatar size="190">
                <v-img :src="item.image" />
              </v-avatar>
            </div>
            <div>
              <div class="text-h5">
                {{ item.name }}
              </div>
              <div class="text-h6 secondary--text">
                {{ item.title }}
              </div>
              <div class="text-body mt-3">
                {{ item.bio }}
              </div>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    team: {
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
