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
            this.enteredTask = '';  // clear the input AFTER the task has been added

            // console.log('ARRAY ??? ', this.tasks);
            // console.log('is array? ', Array.isArray(this.tasks))
        }
    }
})

app.mount('#assignment');