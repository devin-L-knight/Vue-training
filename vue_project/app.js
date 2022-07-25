const app = Vue.createApp({
    data() {
        return {
            enteredClass: '',
            isHidden: false,
            enteredColor: ''
        }
    },
    computed: {
        pTagClasses() {
            return {
                user1: this.enteredClass === 'user1',
                user2: this.enteredClass === 'user2',
                hidden: this.isHidden,
                visible: !this.isHidden
            }
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
        },
        addColor(evt) {
            if (evt.target.value) {
                this.enteredColor = evt.target.value
            }
        }
    }
});

app.mount('#assignment');