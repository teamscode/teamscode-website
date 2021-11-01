import Vue from 'vue'
import { format, parseISO } from 'date-fns'

Vue.filter('formatDate', (value, filterFormat) => {
  if (value) {
    if (value instanceof Date) {
      return format(value, filterFormat || 'MMM dd, yyyy')
    } else {
      return format(parseISO(value), filterFormat || 'MMM dd, yyyy')
    }
  }

  return ''
})
