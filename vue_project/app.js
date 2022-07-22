// create the Vue instance of the app & pass a JS object as a config
const app = Vue.createApp({
    data: function () {
        return {
            name: 'Devin',
            age: 36,
            imageURL: 'https://miro.medium.com/fit/c/176/176/1*gNh9gUcCesdGK_k9TIH6Yw.png'
        };
    },
    methods: {
        ageInFive: function() {
            return this.age + 5;
        },
        getAge: function() {
            return this.age;
        },
        randomNumber: function() {
            // will generate a random number between 1 and 0
            return Math.random().toFixed(2);
        }
    }
})

app.mount('#assignment');