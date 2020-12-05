import Vue from 'vue'
import App from './App.vue'
import store from '@/store'
import ScrollLoader from 'vue-scroll-loader'

Vue.config.productionTip = false

Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

Vue.filter('generation', function (value) {
  if (!value) return ''
  value = value.toString()
  let splitedValue = value.split('-') 
  return `${splitedValue[0].replace('g', 'G')} ${splitedValue[1].toUpperCase()}`
})
 
Vue.use(ScrollLoader)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
