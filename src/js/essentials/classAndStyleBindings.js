import { createApp } from "vue/dist/vue.esm-bundler";

const app = createApp({
    data() {
        return {
            isActive: true,
            hasError: true,
            error: true,
            activeClass: 'active',
            errorClass: 'text-danger',
            classObject: {
                active: true,
                'text-danger': false
            }
        }
    },
    computed: {
        classObjectComputed() {
            return {
                active: this.isActive && !this.error,
                'text-danger': this.error && this.error.type === 'fatal'
            }
        }
    }
})

const bidingInlineStyles = createApp({
    data() {
        // often use computed properties as above
        return {
            activeColor: 'red',
            fontSize: 30,
            styleObject: {
                color: 'green',
                fontSize: '50px'
            }

        }
    }
})

app.mount('#app')
bidingInlineStyles.mount('#biding-inline-style')