import './index.css'
import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { createI18n } from 'vue-i18n';
import { createPinia } from 'pinia'

const pinia = createPinia()
const i18n = createI18n({
	locale: 'اردو', // Default locale
	messages: {
		English: require('../src/lang_files/en.json'),
		اردو: require('../src/lang_files/ur.json'),
		العربية: require('../src/lang_files/ar.json'),
	},
  });

const app = createApp(App);
app.use(router);
app.use(i18n);
app.use(pinia)
app.mount('#app');
