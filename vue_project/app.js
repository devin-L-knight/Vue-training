const app = Vue.createApp({
    data() {
        return {
            friends: [
                {
                    id: 'manuel',
                    name: 'Manuel Lorenz',
                    phone: '310-555-5555',
                    email: 'manuel@localemail.com'
                },
                {
                    id: 'julie',
                    name: 'Julie Jones',
                    phone: '818-543-2211',
                    email: 'julie@localhost.com'
                }
            ],
            detailsVisible: false
        }
    },
    methods: {
        toggleDetails() {
            console.log('fired');
            this.detailsVisible = !this.detailsVisible;
            console.log(this.detailsVisible);
        }
    }
});

app.mount('#app')