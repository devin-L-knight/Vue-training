const app = Vue.createApp({
    data() {
        return {
            tasks: [],
            enteredTask: ''
        }
    },
    methods: {
        addTask() {
            // console.log('entered task ? ', this.enteredTask);
            this.tasks.push(this.enteredTask);

            // console.log('ARRAY ??? ', this.tasks);
            // console.log('is array? ', Array.isArray(this.tasks))
        }
    }
})

app.mount('#assignment');