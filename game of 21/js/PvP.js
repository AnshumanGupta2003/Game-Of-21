function wonGame() {

    let winname = document.querySelector('#winname');
    let playerid = document.querySelector('#playerid');

    let buttons = document.querySelectorAll("button");



    if( playerid.innerText == 'Player 1'){
        winname.innerHTML = "Congratulations🎉🎉 Player 1 <br> You Won";
    }else{
        winname.innerHTML = "Congratulations🎉🎉 Player 2 <br>  You Won";
    }

    const winBox = document.querySelector('.win_box');
    const playerIcons = document.querySelector('.playericon');
    
    playerIcons.style.display = playerIcons.style.display === 'none' ? 'block' : 'none';

    winBox.style.display = winBox.style.display === 'none' ? 'block' : 'none';
}

function quit() {
    window.location.href = 'index.html';
}

function playAgain() {
    window.location.reload();
}



///////////newwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww


function nxt(val) {
    let a = [];
    while (val % 4 !== 0) {
        a.push(val + 1);
        val += 1;
    }
    return a;
}

function comp(val) {
    let ran;
    if (val === 20) {
        ran = 1;
    } else if (val === 19) {
        ran = Math.floor(Math.random() * 2) + 1;
    } else {
        ran = Math.floor(Math.random() * 3) + 1;
    }
    if (ran === 1) {
        console.log(val + 1);
        val += 1;
    } else if (ran === 2) {
        console.log(val + 1, val + 2);
        val += 2;
    } else if (ran === 3) {
        console.log(val + 1, val + 2, val + 3);
        val += 3;
    }
    return val;
}




function choose(s, val, choice) {
    console.log(choice);
    let color = document.querySelector('.icon1');
    let playerid = document.getElementById('playerid');
    let btn1 = document.getElementById('btn1');
    let btn2 = document.getElementById('btn2');
    let btn3 = document.getElementById('btn3');

    val = parseInt(val);
    li = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];

    
    if (playerid.innerText == 'Player 1') {
        playerid.innerText = 'Player 2';
        color.style.backgroundColor = "red";document.querySelectorAll("button").forEach(function(button) {
            button.style.borderColor = "red";
        });
        
        
    } else {
        playerid.innerText = 'Player 1';
        color.style.backgroundColor = "#007bff"; 
        document.querySelectorAll("button").forEach(function(button) {
            button.style.borderColor = "blue";
        });
        
    }
    
    if (val == 21){
        wonGame();
        return 0;
    }
    if (val == 17 && choice == "btn1") {
        val += 3;
        btn1.innerText = (val) + " " + (val + 1);
        btn2.innerText = (val);
        btn3.style.display = "none";
        return 0;
         
    }
    if (val == 18 && choice == "btn1") {
        val += 3;
        btn1.innerText = (val);
        btn2.style.display = "none";
        btn3.style.display = "none";
        return 0;
         
    }
    if (val == 18 && choice == "btn2") {
        val += 2;
        btn1.innerText = (val) + " " + (val + 1);
        btn2.innerText = (val);
        btn3.style.display = "none";
        return 0;
         
    }


    if (val == 19 && choice == "btn1") {
        wonGame();
        return 0;

    } else if (val == 19 && choice == "btn2") {
        val += 2;

        btn1.innerText = (val);
        btn2.style.display = "none";
        btn3.style.display = "none";
        return 0;
    }
    else if (val == 19 && choice == "btn3") {
        val += 1;
        btn1.innerText = (val) + " " + (val + 1);
        btn2.innerText = (val);
        btn3.style.display = "none";
        return 0;
    }
    if (val == 20 && choice == "btn1") {
        wonGame();
        return 0;

    } else if (val == 20 && choice == "btn2") {
        val += 1;

        btn1.innerText = (val);
        btn2.style.display = "none";
        btn3.style.display = "none";
        return 0;
    }

    
    
    if (choice == 'btn1') {
        val += 3;
    } else if (choice == 'btn2') {
        val += 2;
    } else if (choice == 'btn3') {
        val += 1;
    }
    
    btn1.innerText = (val ) + " " + (val + 1)+ " " + (val + 2);
    btn2.innerText = (val ) + " " + (val + 1) ;
    btn3.innerText = (val );
    
    console.log(val);
    return val;
}
function startGame(btnnum) {
            let elem = document.getElementById('btn1').innerText;
            let entry = elem[0] + elem[1];    
            entry = choose('Player 1', entry, btnnum);
                
            
}

