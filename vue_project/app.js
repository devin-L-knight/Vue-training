const app = Vue.createApp({
    data() {
        return {
            enteredClass: '',
            isHidden: false,
        }
    },
    methods: {
        addClass(evt) {
            console.log('EVENT >>> ', evt);
            if (evt.target.value) {
                this.enteredClass = evt.target.value
            }
        },
        applyHidden(evt) {
            this.isHidden = !this.isHidden;
        }
    }
});

app.mount('#assignment');