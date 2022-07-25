const app = Vue.createApp({
    data() {
        return {
            result: 0,
            message: '',
        }
    },
    watch: {
        message(value) {
            // whenever message has a new value...we'll trigger this watcher
            // console.log('Timer started');
            // console.log('value >>> ', value);
            const that = this
            setTimeout(() => {
                that.result = 0;
                that.message = `Game Reset...Result is ${that.result}`
            }, 5000)
        }
    },
    computed: {
        displayMessage: function() {
            // console.log('displayMessage ran...');

            if (this.result < 37) {
                return this.message = 'Not there yet';
            } else if (this.result > 37) {
                return this.message = 'Too much!';
            } else {
                return this.message = `Nailed it! You got ${this.result}`;
            }
        }
    },
    methods: {
        addNum: function(num) {
            this.result = this.result + num;
            // console.log('ADD CALLED...result is: ', this.result);
        }
    }
});


app.mount('#assignment');