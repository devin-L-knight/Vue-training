
// Here we call the global Vue object. (takes a JS object to configure our Vue app)
Vue.createApp({
    data: function() {
        return {
            goals: [],
            enteredValue: ''
        }
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredValue);
            this.enteredValue = '';
        }
    }
}).mount('#app'); // our .mount method tells Vue where in our HTML to use our configuration above.


// ===========================================================
// =====  This is vanilla javascript to adjust the page. =====
// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');


// function addGoal () {
//     const enteredValue = inputEl.value;
//     const listItemEl = document.createElement('li');

//     listItemEl.textContent = enteredValue;
//     listEl.appendChild(listItemEl);
//     inputEl.value = '';
// }


// buttonEl.addEventListener('click', addGoal);