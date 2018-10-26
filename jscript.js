window.onload = function () {
    let char = [{
        name: "Jawa",
        health: 50
    }, {
        name: "Ewok",
        health: 55
    }, {
        name: "Tuskan Raider",
        health: 70
    }, {
        name: "Mon Calamari",
        health: 65
    }];

    let playerChar;
    let aiChar;
    let playerChosen = false;
    let playerWin = false;
    let reset;
    let playerAttack;
    let aiAttack;

    function startGame() {

        $(".charopts").on("click"), function () {
            if(playerWin) {
                return false;
            }

            if(playerChosen) {
                aiChar = char.name;
                $("#player2").html(aiChar);
            }
            else {
                playerChar = char.name;
                $("#player1").html(playerChar);
                playerChoosen = true;
            }
        };

        $("#attack").on("click"), function () {
            var playerRandom = Math.floor(Math.random) * 20;
            var aiRandom = Math.floor(Math.random) * 8;
            playerAttack = playerRandom;
            aiAttack = aiRandom;
            $("#dmg").html(playerAttack);
            $("#aidmg").html(aiAttack);
        }



    }


}