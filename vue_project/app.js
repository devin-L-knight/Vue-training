const app = Vue.createApp({
    data() {
        return {
            enteredText: '',
            confirmedInput: ''
        }
    },
    methods: {
        triggerAlert: function() {
            alert('Exercise 1: Alert on button press!');
        },
        printInput: function(evt) {
            this.enteredText = evt.target.value;
        },
        confirmInput: function(evt) {
            this.confirmedInput = evt.target.value;
        }
    }
})

app.mount('#assignment');