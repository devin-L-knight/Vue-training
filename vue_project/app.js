const app = Vue.createApp({
    data() {
        return {
            tasks: [],
            enteredTask: '',
            hiddenList: false,
            buttonMsg: 'Hide List'
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.enteredTask);
            this.enteredTask = '';  // clear the input AFTER the task has been added
        },
        removeTask(index) {
            this.tasks.splice(index, 1); // remove the task from the list at the given index
        },
        hideList() {
            this.hiddenList = !this.hiddenList;

            this.updateButtonText(); // call the updateButtonText method to adjust our button text
        },
        updateButtonText() {
            this.hiddenList ? this.buttonMsg = 'Show List' : this.buttonMsg = 'Hide List'
        }
    }
})

app.mount('#assignment');