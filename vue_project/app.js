const app = Vue.createApp({
    data() {
      return {
        counter: 0,
        name: '',
        confirmedName: ''
      };
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
        submitForm: function() {
            alert('Form Submitted!');
        },
        confirmInput: function() {
            this.confirmedName = this.name;
        },
        resetInput: function() {
            this.name = ''; // resets the name that is shown in the input field
            this.confirmedName = '';    // resets the value that is stored in the <p> tag
        }
    }
  });
  
  app.mount('#events');
