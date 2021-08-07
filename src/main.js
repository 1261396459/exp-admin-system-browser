import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import {Back, Close, Check, Calendar, Checked, ArrowRight} from '@element-plus/icons';
import '@/assets/fit.less'

const Vue = createApp(App)
Vue.use(store).use(router)

Vue.use(ElementPlus)
Vue.component('el-icon-back', Back)
  .component('el-icon-close', Close)
  .component('el-icon-check',Check)
  .component('el-icon-calendar',Calendar)
  .component('el-icon-checked',Checked)
  .component('el-icon-right',ArrowRight)

Vue.mount('#app')


