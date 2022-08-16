import { createApp } from 'vue/dist/vue.esm-bundler'
import { nextTick } from "vue";
import { debounce } from 'lodash-es'

const app = createApp({
    data() {
        return {
            count: 1,
            someObject: {}
        }
    },
    mounted() {
        console.log(this.count)
        this.count = 2

        const newObject = {}
        this.someObject = newObject
        console.log(newObject === this.someObject) // false
    }
})

const declaringMethods = createApp({
    data() {
        return {
            count: 0
        }
    },
    methods: {
        increment() {
            this.count++
            nextTick(() => {
                console.log("next tick : " +this.count)
            })
        }
    },
    mounted() {
        this.increment()
    }
})

const deepReactivity = createApp({
    data() {
        return {
            obj: {
                nested: { count:0 },
                arr: ['foo', 'bar']
            }
        }
    },
    methods: {
        mutateDeeply() {
            this.obj.nested.count++
            this.obj.arr.push('baz')
        }
    }
})

// see documentation To keep each component instance's debounced function independent of the others
const statefulMethods = createApp({
    methods: {
        click: debounce(function () {
            console.log('test')
        }, 1500)
    }
})

app.mount('#reactivity-fundamentals')
declaringMethods.mount('#declaring-methods')
deepReactivity.mount('#deep-reactivity')
statefulMethods.mount('#stateful-methods')