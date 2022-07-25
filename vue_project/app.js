const app = Vue.createApp({
    data() {
      return {
        counter: 0,
        name: '',
        // confirmedName: ''
      };
    },
    computed: {
        fullName: function() {
            console.log('RUNNING AGAIN...') // (using this computed property in place of the outputFullName method...so it's only called when we want instead of called every time something changes on the screen).
            if (this.name === '') {
                return '';
            } else {
                return this.name + ' ' + 'Knight';
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
