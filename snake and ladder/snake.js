var isactive1 = false;
var isactive2 = false;
var isactive3 = false;
var isactive4 = false;
var p1 = {score:0};
var p2 = {score:0};
var p3 = {score:0};
var p4 = {score:0};
var turn = 1;
var dice;

function rollDice() {
    dice = parseInt(Math.floor(Math.random() * 6) + 1);
    console.log(dice, 'turn:', turn);
    
    

    switch (turn) {
        case 1:
            setPlayerScore(p1);
            break;
        case 2:
            setPlayerScore(p2);
            break;
        case 3:
            setPlayerScore(p3);
            break;
        case 4:
            setPlayerScore(p4);
            break;
    }
    counter();
}


function setPlayerScore(player) {
    if (player.isActive) {
        if (player.score === 100) {
            setUserData(`Player${turn} Won !!.`);
        }
        else {
            setScore(player);
        }
    } else {
        checkUserActive(dice, player);
    }
}

function setScore(player) {
    if (player.score >= 94 && (dice + player.score) === 100) {
        player.score += dice;
        player.score += 'you won';
    }
    else {
        player.score += dice;
        switch (player.score) {
            //ladder
            case 6:
                player.score = 13;
                break;
            //ladder
            case 25:
                player.score = 52;
                break;
            //snake
            case 34:
                player.score = 20;
                break;
            //snake
            case 99:
                player.score = 5;
                break;
        }

        setUserData(player.score);
    }

    if (dice == 6) {
        setUserData(player.score + "LUCKY! You Get A Free Chance!! Roll it once again");
    }
}

function checkUserActive(dice, player) {
    if (dice == 6 && !player.isActive) {
        player.isActive = true;
        setUserData(`Now P${turn} is a active player and get a free chance!!`);
    }
}


function setUserData(value) {
    var status = document.getElementById("status");
    document.getElementById(`p${turn}`).innerHTML = value;
    status.innerHTML = value;

}

function counter() {
    if (dice != 6) {
        if (turn == 4) {
            turn = 1;
        } else {
            turn++;
        }
    }
}

