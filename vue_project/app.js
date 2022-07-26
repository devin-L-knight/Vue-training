const app = vue.createApp({
    data() {
        return {
            monsterHealth: 100,
            playerHealth: 100
        }
    }
});


app.mount('#game');