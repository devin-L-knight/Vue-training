const app = Vue.createApp({
    data() {
        return {
            tasks: [],
            enteredTask: ''
        }
    },
    methods: {
        addTask() {
            console.log('entered task ? ', this.enteredTask);
        }
    }
})

app.mount('#assignment');