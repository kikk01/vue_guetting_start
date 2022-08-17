import { createApp} from "vue/dist/vue.esm-bundler";

createApp({
    data() {
        return {
            message: '',
            messageTextarea: '',
            checked: '',
            checkedNames: [],
            picked: '',
            selected: [],
            dynamicSelected: 'A',
            options: [
                { text: 'One', value: 'A' },
                { text: 'Two', value: 'B' },
                { text: 'Three', value: 'C' },
            ],
            msg: ''
        }
    }
}).mount('#app')