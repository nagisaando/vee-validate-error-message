import Vue from 'vue'
import App from './App.vue'

// Initializers
import '@/initializers/vee-validate'
import i18n from '@/initializers/vue-i18n'

new Vue({
  i18n,
  render: (h) => h(App),
}).$mount('#app')
