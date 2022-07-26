// non-Vue controlled functions / properties (standard javaScript)
function getRandomDamage(min, max) {
    // create a random number between a max & minimum value (will become our damage)
    return Math.floor(Math.random() * (max - min))
}

const app = Vue.createApp({
    data() {
        return {
            monsterHealth: 100,
            playerHealth: 100,
            currentRound: 0
        }
    },
    computed: {
        monsterBarStyles() {
            return { width: this.monsterHealth + '%' }
        },
        playerBarStyles() {
            return { width: this.playerHealth + '%' }
        },
        enableSpecialAttack() {
            return this.currentRound % 3 !== 0;
        }
    },
    methods: {
        attackMonster() {
            const monsterDamage = getRandomDamage(5, 16); // create a random number between 5 - 17            
            this.monsterHealth = this.monsterHealth - monsterDamage;
            this.currentRound++; // increment the round by one
            this.attackPlayer(); // attack the player by default after the monster is attacked
        },
        attackPlayer() {
            const playerDamage = getRandomDamage(9, 19); // create a random number between 9 - 21
            this.playerHealth = this.playerHealth - playerDamage;
        },
        specialAttack() {
            const specialAttackDamage = getRandomDamage(10, 25);
            this.monsterHealth = this.monsterHealth - specialAttackDamage
            this.currentRound++; // increment the round by one
            this.attackPlayer(); // attack the player by default after special attack
        }
    }
});


app.mount('#game');