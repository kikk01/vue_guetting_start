import { createApp } from 'vue/dist/vue.esm-bundler'

// use computed instead of methods to not call getter each time.
// see documentation
const app = createApp({
    data() {
        return {
            author: {
                firstName: 'John',
                lastName: 'Doe',
                books: [
                    'Vue 2 - Advanced Guide',
                    'Vue 3 - Basic Guide',
                    'Vue 4 - The Mystery'
                ]
            }
        }
    },
    computed: {
        publishedBooksMessage() {
            return this.author.books.length > 0 ? 'Yes': 'No'
        },
        // will never be update
        now() {
            return Date.now()
        },
        fullName: {
            get() {
                return this.firstName + ' ' + this.lastName
            },
            set(newValue) {
                [this.firstName, this.lastName] = newValue.split(' ')
            }
        }
    }
})

app.mount('#computed-properties')