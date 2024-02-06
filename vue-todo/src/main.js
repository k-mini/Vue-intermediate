import { createApp } from 'vue'
import App from './App.vue'
import store from './store/store.js' 

createApp(App).use(store).mount('#app')
// createApp(App).mount('#app')

// new Vue({
//     el: '#app',
//     store,
//     render: h => h(App)
// })
