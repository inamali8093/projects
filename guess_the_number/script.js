let randomNumber = Math.floor((Math.random()*100+1)+1)
    console.log(randomNumber)
    let myGuess = document.querySelector("#myGuess")
    const submitBtn = document.querySelector("button")
    const resultShow = document.querySelector('.result')
    const previous_guesses = document.querySelector('.prevGuessed')
    const remainAttempt = document.querySelector('.remainAttempt')
    const confirm = document.querySelector('.confirm')
    let playGame = true
    if(playGame){
    submitBtn.addEventListener('click',function(e){
        e.preventDefault()
        console.log(parseInt(myGuess.value));
        validateNum(parseInt(myGuess.value))
      
    })}
    let attempts = 9
    let prevGuessed =[]
   
     function validateNum(num){
        if(isNaN(num)){
            displayMessage('Please enter a valid number')
        }
        else if(num<=0 || num>100){
            displayMessage('Please enter the number between 1 and 100')
        }
        else{
            validateAttempts(attempts)
           

        
        }
        function validateAttempts(num){
        if(num===0){
            displayMessage("Game Over you have used your 10 attempts")
            endGame()
        }
        else{
            remainAttempt.innerHTML = `Remaining Attempts: ${attempts}`
            checkWRTrandomNum(parseInt(myGuess.value))
        }
     }

     }
     function displayMessage(message){
            resultShow.innerHTML = `${message}`
     }
     function checkWRTrandomNum(num){
        attempts--
        prevGuessed.push(num)
        if(num<randomNumber){
            displayMessage("Your number is too low")
        }
        else if(num>randomNumber){
            displayMessage("Your number is too high")
        }
        else{
           
            displayMessage(`You guessed it right random number was ${randomNumber}`)
            endGame()


        }
        previous_guesses.innerHTML = `Previous Guesses: ${prevGuessed}`
        console.log(attempts)
     }
     function endGame(){
        previous_guesses.innerHTML = "Previous Guesses: "
        remainAttempt.innerHTML = 'Remaining Attempts: 0'
        submitBtn.setAttribute('disabled','')
        myGuess.value=''
        playGame = false
        setTimeout(confirmForNew, 5000);
     }
     function startOver(){
        randomNumber = Math.floor((Math.random()*100+1)+1)
        playGame = true
        prevGuessed =[]
        attempts = 10
        submitBtn.removeAttribute('disabled')
        previous_guesses.innerHTML = `Previous Guesses: ${prevGuessed}`
        remainAttempt.innerHTML = `Remaining Attempts: ${attempts}`
        displayMessage('')
        removeAppendedChilds()
     }
     function confirmForNew(){
        const p = document.createElement('p')
        p.innerHTML = '<span>Do you wanna play a new game?</span>'
        p.setAttribute('id','question')
        const btn1 = document.createElement('button')
        btn1.setAttribute('id','btn1')
        btn1.innerHTML = "Confirm"
        btn1.addEventListener('click',startOver)
        const btn2 = document.createElement('button')
        btn2.setAttribute('id','btn2')
        btn2.innerHTML = "Cancel"
        confirm.append(p,btn1,btn2)
        btn2.addEventListener('click',removeAppendedChilds)
     }
    function removeAppendedChilds(){
        confirm.textContent =''
     }
    