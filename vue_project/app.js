// use the Globally available Vue object to create the app.
// we pass it a JS object, which serves as our configuration
const app = Vue.createApp({
    data: function() {
        return {
            courseGoalA: 'Finish Vue.js Course',
            courseGoalB: 'Master Vue & build slick apps!',
            vueLink: 'https://vuejs.org/'
        };
    },
    methods: {
        outputGoal: function() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA
            } else {
                return this.courseGoalB
            }
        }
    }
})


// Here we'll mount our Vue app to the correct part of our HTML.
app.mount('#user-goal');