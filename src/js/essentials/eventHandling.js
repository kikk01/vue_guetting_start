import {createApp} from "vue/dist/vue.esm-bundler";

createApp({
    data() {
        return {
            name: 'Vue.js'
        }
    },
    methods: {
        greet(event) {
            alert(`Hello ${this.name}!`)
            if (event) {
                alert(event.target.tagName)
            }
        },
        say(message) {
            alert(message)
        },
        warn(message, event) {
            if (event) {
                event.preventDefault()
            }
            alert(message)
        },
        capture(event) {
            alert(event.target.tagName)
        },
        keyUpEnter() {
            alert('key up')
        }
    }
}).mount('#app')