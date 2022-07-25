const app = Vue.createApp({
    data() {
      return {
        counter: 0,
      };
    },
    methods: {
        increaseCount: function(num) {
            this.counter = this.counter + num;
        },
        decreaseCount: function(num) {
            this.counter = this.counter - num;
        }
    }
  });
  
  app.mount('#events');
  