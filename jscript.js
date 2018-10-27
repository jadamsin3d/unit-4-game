
let Jawa = {
    name: "Jawa",
    health: 50
}

let Ewok = {
    name: "Ewok",
    health: 55
}

let tuskanRaider = {
    name: "Tuskan Raider",
    health: 70
}

let calamari = {
    name: "Mon Calamari",
    health: 65
};

let playerChar = {};
let aiChar = {};
let playerChosen = false;
let aiChosen = false;
let gameOver = false;
let reset;
let playerAttack;
let aiAttack;
let enemies = 0;

//this sets the players name and health
function playerStart(selectedChar) {
    playerChar.name = selectedChar.name;
    playerChar.health = selectedChar.health;
}

// this sets the enemies name and health
function defenderStart(selectedDef) {
    aiChar.name = selectedDef.name;
    aiChar.health = selectedDef.health;
}

// this will move characters not selected to the remaining enemies div
function chalWait() {
    $(".charopts").removeClass(".charopts").addClass("enemychar");
    $("#remainEnemies").append($(".enemychar"))
}

$(document).ready(function () {

    // Function that runs when the ewok is selected
    $("#Ewok").on("click", function () {
        console.log("Ewok")

        if (playerChosen === false) {
            // runs function that sets the name/health for the Ewok 
            playerStart(Ewok)
            playerChosen = true;

            $(".charopts").removeClass(".charopts").addClass("chosenChar");
            $("#chosenChar").append(this);

            chalWait();
        }
        else if ((playerChosen === true) && (aiChosen === false)) {

            if ($("#Ewok").hasClass(".enemychar")) {
                defenderStart(Ewok);
                aiChosen = true;

                $("#Ewok").removeClass(".enemychar").addClass("defenderChar");
                $(".defenderChar").append(this);
            }
        }
    });

    $("#Jawa").on("click", function () {
        console.log("Jawa")

        if (playerChosen === false) {
            // runs function that sets the name/health for the Jawa
            playerStart(Jawa)
            playerChosen = true;

            $(".charopts").removeClass(".charopts").addClass("chosenChar");
            $("#chosenChar").append(this);

            chalWait();
        }
        else if ((playerChosen === true) && (aiChosen === false)) {

            if ($("#Jawa").hasClass(".enemychar")) {
                defenderStart(Jawa);
                aiChosen = true;

                $("#Jawa").removeClass(".enemychar").addClass("defenderChar");
                $(".defenderChar").append(this);
            }
        }
    });

    $("#tuskanRaider").on("click", function () {
        console.log("Tuskan Raider")

        if (playerChosen === false) {
            // runs function that sets the name/health for the Jawa
            playerStart(tuskanRaider)
            playerChosen = true;

            $(".charopts").removeClass(".charopts").addClass("chosenChar");
            $("#chosenChar").append(this);

            chalWait();
        }
        else if ((playerChosen === true) && (aiChosen === false)) {

            if ($("#Jawa").hasClass(".enemychar")) {
                defenderStart(tuskanRaider);
                aiChosen = true;

                $("#tuskanRaider").removeClass(".enemychar").addClass("defenderChar");
                $(".defenderChar").append(this);
            };
        }
    });

    $("#calamari").on("click", function () {
        console.log("Mon Calamari")

        if (playerChosen === false) {
            // runs function that sets the name/health for the Jawa
            playerStart(Jawa)
            playerChosen = true;

            $(".charopts").removeClass(".charopts").addClass("chosenChar");
            $("#chosenChar").append(this);

            chalWait();
        }
        else if ((playerChosen === true) && (aiChosen === false)) {

            if ($("#Jawa").hasClass(".enemychar")) {
                defenderStart(Jawa);
                aiChosen = true;

                $("#Jawa").removeClass(".enemychar").addClass("defenderChar");
                $(".defenderChar").append(this);
            };
        }
    });

    $("#attack").on("click", function () {
        console.log("IT'S AN ATTACK!!!")

        // conditions of the attack
        if (playerChosen && aiChosen && !gameOver) {
            aiChar.health = aiChar.health - playerAttack;
            $(".defenderChar").children(".health").html(aiChar.health);

            playerAttack = Math.floor(Math.random()* 20);
            console.log(playerAttack);
            
            if(aiChar.health > 0) {
                playerChar.health = playerChar.health - aiAttack;
                $(".chosenChar").children(".health").html(playerChar.health);
                
                aiAttack = Math.floor(Math.random()* 5);

                if(playerChar.health > 0) {}
                else {gameOver = true};


            } else {
                enemies++;
                aiChosen = false;
                if(enemies === 3) {}
            }
            
            
        }
        else if(!playerChosen && !gameOver){}
        else if(!aiChosen && !gameOver){}
    });

    
});

