const app = Vue.createApp({
    data() {
        return {
            tasks: [],
            enteredTask: '',
            hiddenList: false
        }
    },
    methods: {
        addTask() {
            // console.log('entered task ? ', this.enteredTask);
            this.tasks.push(this.enteredTask);
            this.enteredTask = '';  // clear the input AFTER the task has been added

            // console.log('ARRAY ??? ', this.tasks);
            // console.log('is array? ', Array.isArray(this.tasks))
        },
        removeTask(index) {
            this.tasks.splice(index, 1); // remove the task from the list at the given index
        },
        hideList() {
            this.hiddenList = !this.hiddenList;
        }
    }
})

app.mount('#assignment');