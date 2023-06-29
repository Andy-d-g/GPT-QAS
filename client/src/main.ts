import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

import { Toast, Button, Loading, Divider, Card, Field } from 'vant'
import 'vant/lib/index.css'

const app = createApp(App)

app.use(Button)
app.use(Field)
app.use(Toast)
app.use(Loading)
app.use(Divider)
app.use(Card)

app.mount('#app')
