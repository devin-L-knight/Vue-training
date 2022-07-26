const app = Vue.createApp({
    data() {
        return {
            goals: [],
            enteredGoal: '',
        };
    },
    methods: {
        addNewGoal() {
            this.goals.push(this.enteredGoal);

            console.log('GOALS >>>> ', this.enteredGoal);
        },
        removeGoal(idx) {
            this.goals.splice(idx, 1); // remove the element from the array at the given index
        }
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
  
  app.mount('#user-goals');
  

  setTimeout(() => {
    // this is rarely used, but is a way to unmount an app
    app.unmount('#user-goals');
  }, 3000)