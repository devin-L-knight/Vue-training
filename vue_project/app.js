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
        // this.message = this.currentUserInput;
        this.message = this.$refs.userText.value;

        console.dir(this.$refs.userText)
      },
    },
    // lifecycle hooks
    beforeCreate() {
        console.log('beforeCreate()');
    },
    created() {
        console.log('created()');
    },
    beforeMount() {
        // this triggers right before something is triggered in the screen
        console.log('beforeMount()');
    },
    mounted() {
        // at this point...the vue app was initialized internally and is output to the screen
        console.log('mounted()');
    },
    beforeUpdate() {
        // runs before our DOM is updated (before the update is fully processed)
        console.log('beforeUpdate()');
    },
    updated() {
        // runs AFTER our DOM has been updated (after the update has been processed)
        console.log('updated()');
    },
    beforeUnmount() {
        // the last chance to work with the app before it is unmounted
        console.log('beforeUnmount()');
    },
    unmounted() {
        // the app has bee unmounted by this time and is removed.
        console.log('unmounted()');
    }
  });

  app.mount('#app');

  setTimeout(() => {
    // this is rarely used, but is a way to unmount an app
    app.unmount('#app');
  }, 3000)



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
