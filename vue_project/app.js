// non-Vue controlled functions / properties (standard javaScript)
function getRandomDamage(min, max) {
    // create a random number between a max & minimum value (will become our damage)
    return Math.floor(Math.random() * (max - min))
}

const app = Vue.createApp({
    data() {
        return {
            monsterHealth: 100,
            playerHealth: 100
        }
    },
    computed: {
        monsterBarStyles() {
            return { width: this.monsterHealth + '%' }
        },
        playerBarStyles() {
            return { width: this.playerHealth + '%' }
        }
    },
    methods: {
        attackMonster() {
            const monsterDamage = getRandomDamage(5, 16); // create a random number between 5 - 17            
            this.monsterHealth = this.monsterHealth - monsterDamage;
            this.attackPlayer(); // attack the player by default after the monster is attacked
        },
        attackPlayer() {
            const playerDamage = getRandomDamage(9, 19); // create a random number between 9 - 21
            this.playerHealth = this.playerHealth - playerDamage;
        }
    }
});


app.mount('#game');