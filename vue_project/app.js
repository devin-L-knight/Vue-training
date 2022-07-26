const app = Vue.createApp({
    data() {
      return {
        currentUserInput: '',
        message: 'Vue is great!',
      };
    },
    methods: {
      saveInput(event) {
        this.currentUserInput = event.target.value;
      },
      setText() {
        this.message = this.currentUserInput;
      },
    },
  });
  
  app.mount('#app');
  

// creating another Vue app with a separate id located in our HTML. 
  const app2 = Vue.createApp({
    template: `
        <p>{{ favoriteMeal }}</p>
    `,
    data() {
        return {
            favoriteMeal: 'steak'
        }
    },
    methods: {

    }
  });

  app2.mount('#app2');



// // how proxies work...
// const data = {
//     message: 'Hello!',
//     longMessage: 'Hello! World!'
// };

// // contains certain "Traps" the Proxy instance expects to use
// const handler = {
//     set(target, key, value) {
//         console.log(target);
//         console.log(key);
//         console.log(value);
//         if (key === 'message') {
//             target.longMessage = value + ' World!';
//         }
//         target.message = value;
//     }
// };

// const proxy = new Proxy(data, handler);

// proxy.message = 'Hello!!!!!!';

// console.log(proxy.longMessage);
