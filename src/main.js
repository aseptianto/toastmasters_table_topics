import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    // Reset state when the page is about to unload (refresh or close)
    window.addEventListener('beforeunload', () => {
      this.$store.dispatch('resetState')
    })
  }
}).$mount('#app')
