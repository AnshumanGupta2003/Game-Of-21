li = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
let prvEnt = document.getElementById('prv_ent_easy');
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let winname = document.querySelector('#winname');
const winBox = document.querySelector('.win_box');
let  playerIcons = document.querySelector('.playericon');
let compEnt = document.querySelector('.comp_ent');
let compData = document.querySelector('.comp_data');
let container = document.querySelector('.container');
let winMsg = document.querySelector('.win_msg');

btn1.innerText = li[0] + " " + li[1] + " " + li[2];
btn2.innerText = li[0] + " " + li[1];
btn3.innerText = li[0];

let i = 0

let queryString = window.location.search;

let urlParams = new URLSearchParams(queryString);

let variableValue = urlParams.get("variable");

if (variableValue == "second") {

    let randomInt = Math.floor(Math.random() * 3) + 1;
        
        if (randomInt === 1) {
            prvEnt.innerText = 'Previous Entry By Computer: ' + li[i] ;
            compData.innerText = 'Computer Entered: ' + li[i];
            i += 1;
        } else if (randomInt === 2) {
            prvEnt.innerText = 'Previous Entry By Computer: ' + li[i] + ' ' + ( li[i+ 1]);
            compData.innerText = 'Computer Entered: ' + li[i] + ' ' + ( li[i+ 1]);
            i += 2;
        } else if (randomInt === 3) {
            prvEnt.innerText = 'Previous Entry By Computer: ' + li[i] + ' ' + ( li[i+ 1]) + ' ' + (li[i+2]);
            compData.innerText = 'Computer Entered: ' + li[i] + ' ' + ( li[i+ 1]) + ' ' + (li[i+2]);
            i += 3;
        }

        if (li[i+1] == null) {
            btn3.innerText = li[i];
            btn2.style.display = "none";
            btn1.style.display = "none";
            
        }
        else if (li[i+2] == null) {
            btn2.innerText = li[i] + " " + li[i+1];
            btn3.innerText = li[i];
            btn1.style.display = "none";
            
        }
        
    playerIcons.style.display = 'none';
    compEnt.style.display = 'block';
    
    setTimeout(function() { 
        playerIcons.style.display = 'block';
        compEnt.style.display = 'none';
    }, 2000);


        btn1.innerText = (li[i]) + " " + (li[i+1] )+ " " + (li[i + 2]);
        btn2.innerText = (li[i] ) + " " + (li[i+1] ) ;
        btn3.innerText = (li[i] );
        
}

function wonGame(flag) {
    
    if (flag){
        winname.innerHTML = "Congratulations🎉🎉 <br>  You Won";
    }
    else {


        let color = document.querySelector('.icon1');

            color.style.backgroundColor = "red";
            document.querySelectorAll("button").forEach(function(button) {
                button.style.borderColor = "red";
        
    })
            
        



        winname.innerHTML = "Sorry😮  <br>  You Lost🤦‍♂️🤦‍♂️";
    }
    playerIcons.style.display = playerIcons.style.display === 'none' ? 'block' : 'none';
    
    winBox.style.display = winBox.style.display === 'none' ? 'block' : 'none';
}

function quit() {
    window.location.href = 'index.html';
}

function playAgain() {
    window.location.reload();
}








function comp(check) {
    
    
    if (check == "19"){
        let randomInt = Math.floor(Math.random() * 2) + 1;
        if (randomInt === 1) {
            prvEnt.innerText = 'Previous Entry By Computer: ' + li[i] ;
            compData.innerText = 'Computer Entered: ' + li[i];

            i += 1;
            console.log(li[i-1]);
            return li[i-1];
        } else if (randomInt === 2) {
            prvEnt.innerText = 'Previous Entry By Computer: ' + li[i] + ' ' + ( li[i+ 1]);
            compData.innerText = 'Computer Entered: ' + li[i] + ' ' + ( li[i+ 1]);
            i += 2;
            console.log(li[i+1-2]);
            return li[i+1-2];
        }
    }
    else if (check == "20"){
        
        prvEnt.innerText = 'Previous Entry By Computer: ' + li[i] ;
        compData.innerText = 'Computer Entered: ' + li[i];
        i += 1;
        console.log(li[i-1]);
        return li[i-1];

    }
    else{
        let randomInt = Math.floor(Math.random() * 3) + 1;
        
        if (randomInt === 1) {
            prvEnt.innerText = 'Previous Entry By Computer: ' + li[i] ;
            compData.innerText = 'Computer Entered: ' + li[i];
            i += 1;
            return li[i-1];
        } else if (randomInt === 2) {
            prvEnt.innerText = 'Previous Entry By Computer: ' + li[i] + ' ' + ( li[i+ 1]);
            compData.innerText = 'Computer Entered: ' + li[i] + ' ' + ( li[i+ 1]);
            i += 2;
            return li[i+1-2];
        } else if (randomInt === 3) {
            prvEnt.innerText = 'Previous Entry By Computer: ' + li[i] + ' ' + ( li[i+ 1]) + ' ' + (li[i+2]);
            compData.innerText = 'Computer Entered: ' + li[i] + ' ' + ( li[i+ 1]) + ' ' + (li[i+2]);
            i += 3;
            return li[i+2-3];
        }
    }
}



function choose(check, val, choice) {
    let btn1 = document.getElementById('btn1');
    let btn2 = document.getElementById('btn2');
    let btn3 = document.getElementById('btn3');
    
    val = parseInt(val);
    
   
    if (choice == 'btn1') {
        i += 3;
    } else if (choice == 'btn2') {
        i += 2;
    } else if (choice == 'btn3') {
        i += 1;
    }
    
    
    if (check == '21'){
        wonGame(false);
        return 0;
    }
    
    check = comp(check)

    
    
    
    if (check == '21'){
        winMsg.innerText = compData.innerText; 
        wonGame(true);
        return 0;
    }
    
    // compData.innerText = 'Computer: ';
    playerIcons.style.display = 'none';
    compEnt.style.display = 'block';
    
    setTimeout(function() { 
        playerIcons.style.display = 'block';
        compEnt.style.display = 'none';
    }, 2000);

    if (li[i+1] == null) {
        btn3.innerText = li[i];
        btn2.style.display = "none";
        btn1.style.display = "none";
        return val;
    }
    else if (li[i+2] == null) {
        btn2.innerText = li[i] + " " + li[i+1];
        btn3.innerText = li[i];
        btn1.style.display = "none";
        return val;
    }
    
    btn1.innerText = (li[i]) + " " + (li[i+1] )+ " " + (li[i + 2]);
    btn2.innerText = (li[i] ) + " " + (li[i+1] ) ;
    btn3.innerText = (li[i] );
    
    return val;
}


function startGame(btnnum) {
    
        let elem = document.getElementById(btnnum).innerText;
        let val = elem[0] + elem[1];    
        let last = elem.split('').reverse().join('');
        let last_elem = last[1] + last[0];
        entry = choose(last_elem, val, btnnum);
        

            
}

