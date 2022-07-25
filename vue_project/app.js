const app = Vue.createApp({
    data() {
      return {
        counter: 0,
        name: ''
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
        }
    }
  });
  
  app.mount('#events');
  