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
    }
  });
  
  app.mount('#user-goals');
  