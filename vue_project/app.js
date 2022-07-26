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
            currentRound: 0,
            winner: null
        }
    },
    watch: {
        // we're going to add some watchers to keep track of our game by watching the player health & monster health
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                this.winner = 'Draw'; // game is a draw
            } else if (value <=0 ) {
                this.winner = 'Player'; // set the player as the winner
            }
        },
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                this.winner = 'Draw'; // game is a draw
            } else if (value <= 0) {
                this.winner = 'Monster'; // set the monster as the winner
            }
        }
    },
    computed: {
        monsterBarStyles() {
            if (this.monsterHealth <= 0) {
                return { width: 0 }
            } else {
                return { width: this.monsterHealth + '%' }
            }
        },
        playerBarStyles() {
            if (this.playerHealth <= 0) {
                return { width: 0}
            } else {
                return { width: this.playerHealth + '%' }
            }
        },
        enableSpecialAttack() {
            return this.currentRound % 3 !== 0;
        },
    },
    methods: {
        attackMonster() {
            const monsterDamage = getRandomDamage(5, 16); // create a random number between 5 - 17            
            this.monsterHealth = this.monsterHealth - monsterDamage;
            this.currentRound++; // increment the round by one
            this.attackPlayer(); // attack the player by default after the monster is attacked
        },
        attackPlayer() {
            const playerDamage = getRandomDamage(9, 18); // create a random number between 9 - 21
            this.playerHealth = this.playerHealth - playerDamage;
        },
        specialAttack() {
            const specialAttackDamage = getRandomDamage(12, 27);
            this.monsterHealth = this.monsterHealth - specialAttackDamage
            this.currentRound++; // increment the round by one
            this.attackPlayer(); // attack the player by default after special attack
        },
        healPlayer() {
            const healValue = getRandomDamage(10, 24);
            if (this.playerHealth + healValue > 100) {
                this.playerHealth = 100;
            } else {
                this.playerHealth = this.playerHealth + healValue;
            }
            this.attackPlayer(); // attack the player by default after the monster is attacked
        },
        startNewGame() {
            this.monsterHealth = 100;
            this.playerHealth = 100;
            this.currentRound = 0;
            this.winner = null;
        }
    }
});


app.mount('#game');