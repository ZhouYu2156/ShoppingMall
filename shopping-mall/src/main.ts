import 'bootstrap/dist/css/bootstrap.css'
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { DecimalToBinary, FloatToBinary } from '@/rabbit-utils'
console.log(parseFloat(FloatToBinary(10.0, 2)))


createApp(App).mount('#app')