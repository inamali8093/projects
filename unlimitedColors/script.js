
const hex = '0123456789ABCDEF'
let color = '#'
const body = document.querySelector('body')
const start = document.querySelector('#start')
const cancel = document.querySelector('#end')
const showHexCode = document.getElementById('hex-code')
const randomHexColor = function(){
for(let i=0;i<6;i++){
    color += hex[Math.floor(Math.random()*16)]
}
return color
}
let intervalId
const startChangingColor = function(){
    if(!intervalId){
        intervalId = setInterval(changeBgColor,1000)  
    }
    function changeBgColor(){
         body.style.backgroundColor = randomHexColor()
         showHexCode.innerHTML = `<h3>Hex-Code for color: ${color}</h3>`
        color='#'
    }
  
}
const stopChangingColor = function(){
   clearInterval(intervalId)
   intervalId = null
}
start.addEventListener('click',startChangingColor)
cancel.addEventListener('click',stopChangingColor)

