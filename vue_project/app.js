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
        }
    }
  });
  
  app.mount('#user-goals');
  