// use the Globally available Vue object to create the app.
// we pass it a JS object, which serves as our configuration
const app = Vue.createApp({
    data: function() {
        return {
            courseGoal: 'Finish Vue.js Course',
        };
    }
})


// Here we'll mount our Vue app to the correct part of our HTML.
app.mount('#user-goal');