const app = Vue.createApp({
    data() {
      return {
        counter: 0,
        name: '',
        lastName: ''
        // fullName: ''
        // confirmedName: ''
      };
    },
    watch: {
        // // when the name data property changes...this watcher will be executed automatically by Vue.js when the property changes
        // name(value) {
        //     if (value === '') {
        //         console.log('Empty Input...')
        //     } else {
        //         this.fullName = value + ' ' + 'Knight';
        //         console.log('NAME WAS CHANGED...')
        //     }
        // }
        counter: function(value) {
            if (value > 50 || value < -80) {
                this.counter = 0;
            }
        }
    },
    computed: {
        fullName: function() {
            console.log('RUNNING AGAIN...') // (using this computed property in place of the outputFullName method...so it's only called when we want instead of called every time something changes on the screen).
            if (this.name === '' || this.lastName === '') {
                return '';
            } else {
                return this.name + ' ' + this.lastName;
            }
        }
    },
    methods: {
        increaseCount: function(num) {
            this.counter = this.counter + num;
        },
        decreaseCount: function(num) {
            this.counter = this.counter - num;
        },
        setName: function(evt) {
            // set the name to be what the user enters
            // (this is picked up from v-on:input event listener in index.html)
            this.name = evt.target.value;
        },
        outputFullName: function() {
            console.log('RUNNING AGAIN...') // (check console to see that this runs every time something happens on the screen...which is a default Vue.js behavior).
            if (this.name === '') {
                return '';
            } else {
                return this.name + ' ' + 'Knight';
            }
        },
        submitForm: function() {
            alert('Form Submitted!');
        },
        // confirmInput: function() {
        //     this.confirmedName = this.name;
        // },
        resetInput: function() {
            this.name = ''; // resets the name that is shown in the input field
            // this.confirmedName = '';    // resets the value that is stored in the <p> tag
        }
    }
  });
  
  app.mount('#events');
