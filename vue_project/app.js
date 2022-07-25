const app = Vue.createApp({
    data() {
      return {
        counter: 0,
      };
    },
    methods: {
        increaseCount: function() {
            this.counter++;
        },
        decreaseCount: function() {
            this.counter--;
        }
    }
  });
  
  app.mount('#events');
  