import Vue from 'vue'

Vue.filter('placeholder', (value, placeholder) => {
  return value || placeholder || ''
})
