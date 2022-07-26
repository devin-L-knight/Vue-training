const app = Vue.createApp({
    data() {
        return {
            friends: [
                {
                    id: 'manuel',
                    name: 'Manuel Lorenz',
                    phone: '310-555-5555',
                    email: 'manuel@localemail.com'
                },
                {
                    id: 'julie',
                    name: 'Julie Jones',
                    phone: '818-543-2211',
                    email: 'julie@localhost.com'
                }
            ],
        }
    },
    methods: {

    }
});


// Here we call the component method that's available on our app (expects a component name and a config object)
// this tells Vue we want to create a new component (a component is like a custom HTML element)
// we should use a 'multi word' component name tag because all built-in HTML elements are single name elements (multi-name elements avoids clashing)
app.component('friend-contact', {
    // components have their own data & methods, etc. (just like the Vue instance above)
    data() {
        return {
            detailsAreVisible: false,
            friend: {
                id: 'manuel',
                name: 'Manuel Lorenz',
                phone: '310-555-5555',
                email: 'manuel@localemail.com'
            },
        }
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    },
    // this component MUST have a template to mount / attach to (must use back-tics to creat these)
    template: `
        <li>
            <h2>{{ friend.name }}</h2>
            <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide Details' : 'Show Details' }}</button>
            <ul v-if="detailsAreVisible">
                <li><strong>Phone:</strong> {{ friend.phone }}</li>
                <li><strong>Email:</strong> {{ friend.email }}</li>
            </ul>
        </li>
    `,
})

app.mount('#app')