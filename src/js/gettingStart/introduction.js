import { createApp } from 'vue/dist/vue.esm-bundler'

const app = createApp({
    data() {
        return {
            count: 0,
            message: "fuck"
        }
    }
})

app.mount('#introduction')
