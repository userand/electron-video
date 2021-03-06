import Vue from 'vue'
import axios from 'axios'

import App from './app'
import router from './router'
import store from './store'

import electron from 'electron'
const ipc = electron.ipcRenderer

import '../server/server'
import config from '../config/config'
import { setZoomFactor } from './util/index'

/*if (process.env.NODE_ENV === 'development') {
	console.log('当前是 开发环境')
	setZoomFactor(config['developScaleFactor'])
} else {
	console.log('当前是 生产环境')
	setZoomFactor(config['productionScaleFactor'])
}*/

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
window.vm = new Vue({
	components: { App },
	router,
	store,
	render: h => h(App),
	mounted() {
		this.$closeWin = function() {
		    ipc.send('window-close')
		}

		this.$minWin = function() {
		    ipc.send('window-min')
		}

		this.$maxWin = function() {
		    ipc.send('window-max')
		}
	}
}).$mount('#app')
