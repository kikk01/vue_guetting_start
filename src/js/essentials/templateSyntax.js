import { createApp } from 'vue/dist/vue.esm-bundler'

const app = createApp({
    data() {
        return {
            message: "Hello le monde",
            html: "<span style=color:red>This should be red</span>",
            dynamicId: "i-m-dynamic",
            isButtonDisabled: true,
            objectOfAttrs: {
                id: 'container',
                class: 'wrapper'
            },
            number: 5,
            ok: false,
            seen: true,
            url: "https://www.example.com",
            attributeName: "href"
        }
    }
})

app.mount('#message')