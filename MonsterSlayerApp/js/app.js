var app = new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        logArray: []
    },
    methods: {
        startGame: function() {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.logArray = [];
        },
        attack: function() {
            var damage = this.calculateDamage(10, 3);
            this.monsterHealth -= damage;
            this.logArray.push(`You attacked the monster ${damage}`);
            if (this.checkWin()) return;
            this.monsterAttack();
        },
        specialAttack: function() {
            var damage = this.calculateDamage(20, 10);
            this.monsterHealth -= damage;
            this.logArray.push(`You attacked specially the monster ${damage}`);
            if (this.checkWin()) return;
            this.monsterAttack();
        },
        heal: function() {
            if (this.playerHealth <= 90) {
                this.playerHealth += 10;
            } else {
                this.playerHealth = 100;
            }
            this.logArray.push('You healed 10');
            this.monsterAttack();
        },
        giveUp: function() {
            alert('You gave up!');
            this.gameIsRunning = false;
        },
        calculateDamage: function(max, min) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        monsterAttack: function() {
            var damage = this.calculateDamage(12, 5);
            this.playerHealth -= damage;
            this.logArray.push(`The monster attacked you ${damage}`);
            this.checkWin();
            console.log(this.logArray);
        },
        checkWin: function() {
            if (this.playerHealth <= 0) {
                if (confirm('You lose! Do you want to start again?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }

                return true;
            } else if (this.monsterHealth <= 0) {
                if (confirm('You won! Do you want to start again?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }

                return true;
            }
            return false;
        },
        backgroundColor: function(index) {
            if (index % 2 == 0) {
                return {'player-turn' : true}; 
            } else {
                return {'monster-turn' : true};
            
            }
        }
    }
});