//const music = new Audio('music.mp3')
const audioTurn = new Audio('ting.mp3')
const gameover = new Audio('gameover.mp3')
let turn = 'X'
let playGame = false
const startBtn = document.querySelector('#start')
const resetBtn = document.querySelector('#reset')
let box = document.querySelectorAll('.box')
const arrayBox = Array.from(box)
const infobox =  document.querySelector('.info')
const img = document.querySelector('img')





// adding event listner to start button
startBtn.addEventListener('click',()=>{
  playGame =true
  audioTurn.play()
  displayMessage()
  boxEntry()
  
 
})


// function to change turn
const changeTurn = ()=>{
  return turn === 'X'?'0':'X'
}

// function to display messages
const displayMessage = ()=>{
  infobox.innerHTML = `Turn for ${turn}`
}


// adding event listner to boxes of game
  const boxEntry = ()=>{
  arrayBox.forEach((element)=>{
    element.addEventListener('click',()=>{
      element.innerHTML = `${turn}`
      // audioTurn.play()
      
      checkWin() 
  if(playGame){ 
      turn = changeTurn()
      displayMessage()
  }
      
      

    })
  })
}


// function for checking the win
const checkWin = ()=>{
  if(arrayBox[0].innerHTML === arrayBox[1].innerHTML && arrayBox[1].innerHTML === arrayBox[2].innerHTML && arrayBox[0].innerHTML !== ''){
    won()
  }
  else if(arrayBox[3].innerHTML === arrayBox[4].innerHTML && arrayBox[4].innerHTML === arrayBox[5].innerHTML && arrayBox[3].innerHTML !== ''){
    won()
  }
  else if(arrayBox[6].innerHTML === arrayBox[7].innerHTML && arrayBox[7].innerHTML === arrayBox[8].innerHTML && arrayBox[8].innerHTML !== ''){
    won()
  }
  else if(arrayBox[0].innerHTML === arrayBox[3].innerHTML && arrayBox[3].innerHTML === arrayBox[6].innerHTML && arrayBox[6].innerHTML !== ''){
    won()
  }
  else if(arrayBox[1].innerHTML === arrayBox[4].innerHTML && arrayBox[4].innerHTML === arrayBox[7].innerHTML && arrayBox[7].innerHTML !== ''){
    won()
  }
  else if(arrayBox[2].innerHTML === arrayBox[5].innerHTML && arrayBox[5].innerHTML === arrayBox[8].innerHTML && arrayBox[8].innerHTML !== ''){
    won()
  }
  else if(arrayBox[0].innerHTML === arrayBox[4].innerHTML && arrayBox[4].innerHTML === arrayBox[8].innerHTML && arrayBox[8].innerHTML !== ''){
    won()
  }
  else if(arrayBox[2].innerHTML === arrayBox[4].innerHTML && arrayBox[4].innerHTML === arrayBox[6].innerHTML && arrayBox[6].innerHTML !== ''){
    won()
  }
  // else  {
  //     arrayBox.forEach((element)=>{
  //   if( element.innerHTML!==''){
  //   infobox.innerHTML = 'Draw!'
  //  }
  // })}
}
 

// function to run after winning
const won = ()=>{
  infobox.innerHTML = `${turn} Won`
  img.style.width = '200px'
  console.log('you win');
  playGame = false
  
}


// adding event listner to reset button
resetBtn.addEventListener('click',()=>{
  arrayBox.forEach((e)=>{
    e.innerHTML=''
  })
    playGame = true
    img.style.width = '0px'
    infobox.innerHTML = ''
    turn = 'X'
    audioTurn.play()
    displayMessage()
    boxEntry()
    
   
})



// console.log("Welcome to Tic Tac Toe")
// let music = new Audio("music.mp3")
// let audioTurn = new Audio("ting.mp3")
// let gameover = new Audio("gameover.mp3")
// let turn = "X"
// let isgameover = false;

// // Function to change the turn
// const changeTurn = ()=>{
//     return turn === "X"? "0": "X"
// }

// // Function to check for a win
// const checkWin = ()=>{
//     let boxtext = document.getElementsByClassName('boxtext');
//     let wins = [
//         [0, 1, 2, 5, 5, 0],
//         [3, 4, 5, 5, 15, 0],
//         [6, 7, 8, 5, 25, 0],
//         [0, 3, 6, -5, 15, 90],
//         [1, 4, 7, 5, 15, 90],
//         [2, 5, 8, 15, 15, 90],
//         [0, 4, 8, 5, 15, 45],
//         [2, 4, 6, 5, 15, 135],
//     ]
//     wins.forEach(e =>{
//         if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
//             document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
//             isgameover = true
//             document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
//             document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
//             document.querySelector(".line").style.width = "20vw";
//         }
//     })
// }

// // Game Logic
// // music.play()

// let boxes = document.getElementsByClassName("box");
// Array.from(boxes).forEach(element =>{
//     let boxtext = element.querySelector('.boxtext');
//     element.addEventListener('click', ()=>{
//         if(boxtext.innerText === ''){
//             boxtext.innerText = turn;
//             turn = changeTurn();
//             audioTurn.play();
//             checkWin();
//             if (!isgameover){
//                 document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
//             } 
//         }
//     })
// })



// // Add onclick listener to reset button


// reset.addEventListener('click', ()=>{
//     let boxtexts = document.querySelectorAll('.boxtext');
//     Array.from(boxtexts).forEach(element => {
//         element.innerText = ""
//     });
//     turn = "X"; 
//     isgameover = false
//     document.querySelector(".line").style.width = "0vw";
//     document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
//     document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
// })
// const audioTurn = new Audio('ting.mp3');
// const gameover = new Audio('gameover.mp3');
// let turn = 'X';
// let playGame = false;
// const startBtn = document.querySelector('#start');
// const resetBtn = document.querySelector('#reset');
// let box = document.querySelectorAll('.box');
// const arrayBox = Array.from(box);
// const boxtexts = document.querySelectorAll('.boxtext');
// const boxtext = Array.from(boxtexts);
// const infobox =  document.querySelector('.info');
// const img = document.querySelector('img');

// // function to change turn
// const changeTurn = () => {
//   return turn === 'X' ? 'O' : 'X';
// };

// // function to check if a player has won
// const checkWin = () => {
//   let win = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];

//   for (const combination of win) {
//     const [a, b, c] = combination;
//     if (arrayBox[a].innerHTML === arrayBox[b].innerHTML &&
//         arrayBox[b].innerHTML === arrayBox[c].innerHTML &&
//         arrayBox[a].innerHTML !== '') {
//       infobox.innerHTML = `${turn} Won`;
//       img.style.width = '200px';
//       playGame = false;
//       return;
//     }
//   }

//   // Check for a draw
//   if (arrayBox.every((box) => box.innerHTML !== '')) {
//     infobox.innerHTML = "It's a Draw!";
//     img.style.width = '200px';
//     playGame = false;
//   }
// };

// // function to run after a player wins or game is a draw
// const gameOver = () => {
//   img.style.width = '200px';
//   playGame = false;
// };

// // adding event listener to start button
// startBtn.addEventListener('click', () => {
//   if (!playGame) {
//     playGame = true;
//     //audioTurn.play();
//     infobox.innerHTML = `Turn for ${turn}`;
//     boxEntry();
//   }
// });

// // function to handle player's move
// const boxEntry = () => {
//   arrayBox.forEach((element) => {
//     element.addEventListener('click', () => {
//       if (playGame && element.innerHTML === '') {
//         element.innerHTML = turn;
//         //audioTurn.play();
//         checkWin();
//         turn = changeTurn();
//         infobox.innerHTML = `Turn for ${turn}`;
//       }
//     });
//   });
// };

// // adding event listener to reset button
// resetBtn.addEventListener('click', () => {
//   arrayBox.forEach((e) => {
//     e.innerHTML = '';
//   });
//   playGame = false;
//   img.style.width = '0px';
//   infobox.innerHTML = '';
// });
