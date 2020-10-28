import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import { store } from './store'
import './index.css'

const app = createApp(App)

app.directive('highlight', {
    beforeMount(el: HTMLElement, { value }: { value: string }) {
        el.style.background = value
    }
})

app.use(router)
app.use(store)

app.mount('#app')
