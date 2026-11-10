<template>
  <v-sheet>
    <v-container class="py-4 py-lg-8">
      <v-row>
        <v-col cols="12" md="4">
          <div style="width: 80px; height: 4px" class="mb-3 secondary" />
          <h2 class="text-h5 text-sm-h4">
            {{ header }}
          </h2>
        </v-col>
        <v-col cols="12" md="8" class="pa-md-0 mt-2">
          <v-row>
            <v-col v-for="(person, i) in people" :key="i" cols="12" md="6">
              <div class="d-flex align-center">
                <div class="mr-2">
                  <v-avatar size="100" :color="person.image ? undefined : 'surface'">
                    <v-img v-if="person.image" :src="person.image" :alt="person.name" />
                    <span v-else class="text-h5 secondary--text" role="img" :aria-label="person.name">
                      {{ initials(person.name) }}
                    </span>
                  </v-avatar>
                </div>
                <div>
                  <div class="text-h5">
                    {{ person.name }}
                  </div>
                  <div class="text-h6 secondary--text">
                    {{ person.title }}
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
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
  },
  methods: {
    initials (name) {
      return name.split(/\s+/).map(part => part[0]).slice(0, 2).join('')
    }
  }
}
</script>
