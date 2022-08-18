import { createApp} from "vue/dist/vue.esm-bundler";

createApp({
    data() {
        return {
            question: '',
            answer: 'Questions usually contain a question mark. ;-)'
        }
    },
    watch: {    // see doc for deep watcher
        question(newQuestion, oldQuestion) {
            if (newQuestion.includes('?')) {
                this.getAnswer()
                console.log(oldQuestion)
            }
        },

    },
    methods: {
        async getAnswer() {
            this.answer = 'Thinking...'
            try {
                const res = await fetch('https:///yesno.wtf/api')
                this.answer = (await res.json()).answer
            } catch (error) {
                this.answer = 'Error! Could not reach the API. ' + error
            }
        },
    }
}).mount('#watcher')