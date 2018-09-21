import Vue from 'vue'
import App from './App.vue'
import router from './router'

// import Vue from 'vue'
import { Header, Footer, Row, Col, Content, Sider, Divider, Menu, MenuItem, Icon, Layout, Carousel, CarouselItem } from 'iview'
// import iView from 'iview'
import 'iview/dist/styles/iview.css'
// Vue.use(iView)
Vue.component('Header', Header)
Vue.component('Footer', Footer)
Vue.component('Content', Content)
Vue.component('Row', Row)
Vue.component('Col', Col)
Vue.component('Sider', Sider)
Vue.component('Divider', Divider)
Vue.component('Menu', Menu)
Vue.component('MenuItem', MenuItem)
Vue.component('Icon', Icon)
Vue.component('Layout', Layout)
Vue.component('Carousel', Carousel)
Vue.component('CarouselItem', CarouselItem)

// import './plugins/iview.js'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
