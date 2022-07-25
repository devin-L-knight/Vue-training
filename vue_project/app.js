const app = Vue.createApp({
    data() {
        return {
            result: 0
        }
    },
    methods: {
        addFive: function() {
            console.log('add five has run...')
            this.result = this.result + 5;
        },
        addOne: function() {
            console.log('add one has run....')
            this.result++
        }
    }
});


app.mount('#assignment');