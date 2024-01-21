<template>
  <div>
    <h2 class="text-h4 text-md-h3 mt-0 mt-xl-10">
      {{ position.name }}
    </h2>

    <div class="text-h5 font-weight-bold mt-4">
      Tasks
    </div>
    <div class="text-body-2">
      <v-card tile class="mt-2">
        <v-list-item v-for="task in position.tasks" :key="task">
          <v-list-item-icon>
            <v-icon v-text="task.icon" />
          </v-list-item-icon>
          <v-list-item-content>
            {{ task.text }}
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </div>
    <v-row>
      <v-col col="12" md="6">
        <div class="text-h5 font-weight-bold mt-4">
          Required Skills
        </div>
        <v-card tile class="mt-2" height="80%">
          <v-container>
            <div class="text-body-2">
              {{ position.skills }}
            </div>
          </v-container>
        </v-card>
      </v-col>
      <v-col col="12" md="6">
        <div class="text-h5 font-weight-bold mt-4">
          Time Commitment
        </div>
        <v-card tile class="mt-2" height="80%">
          <v-container>
            <div class="text-body-2">
              {{ position.commitment }}
            </div>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    position: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
