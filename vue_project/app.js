const app = Vue.createApp({
    data() {
        return {
            enteredClass: '',
        }
    },
    methods: {
        addClass(evt) {
            console.log('EVENT >>> ', evt);
            if (evt.target.value) {
                this.enteredClass = evt.target.value
            }
        },

    }
});

app.mount('#assignment');