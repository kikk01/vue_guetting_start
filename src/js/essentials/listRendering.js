import { createApp } from 'vue/dist/vue.esm-bundler'

createApp({
    data() {
        return {
            parentMessage: 'Parent',
            items: [{message: 'Foo'}, {message: 'Bar'}],
            myObject: {
                title: 'How to do list in vue',
                author: 'Jane Doe',
                publishedAt: '2016-04-10'
            },
            numbers: [1,2,3,4,5]
        }
    },
    computed: {
        evenNumbers() {
            return this.numbers.filter(n => n % 2 === 0)
        }
    }
}).mount('#app')
