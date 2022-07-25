const app = Vue.createApp({
    data() {
        return {
            result: 0,
            message: '',
        }
    },
    watch: {
        result(value) {
            // console.log('Timer started');
            // setTimeout((value) => {
            //     console.log('result is >>>>>> : ', value)
            //     value = 0;
            // }, 5000)
            if (value > 0) {
                console.log('TIMER HAS STARTED...')
                setTimeout(() => {
                    this.result = 0;
                    console.log('result reset to zero');
                }, 5000)
            }
        }
    },
    computed: {
        displayMessage: function() {
            // console.log('displayMessage ran...');

            if (this.result !== 0 && this.result < 37) {
                return this.message = 'Not there yet';
            } else if (this.result > 37) {
                return this.message = 'Too much!';
            } else if (this.result === 37) {
                return this.message = `Nailed it! You got ${this.result}`;
            } else {
                return this.message = '';
            }
        }
    },
    methods: {
        addFive: function() {
            // console.log('addFive has run...');
            this.result = this.result + 5;
        },
        addOne: function() {
            // console.log('addOne has run....');
            this.result++;
        }
    }
});


app.mount('#assignment');