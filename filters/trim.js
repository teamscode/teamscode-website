import Vue from 'vue'

Vue.filter('trim', (value) => {
  if (!value) return ''

  return value.toString().trim()
})
