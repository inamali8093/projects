const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector("#result");
    if (height == "" || height <= 0 || isNaN(height)) {
        result.innerHTML = "Please enter a valid height";
    } else if (weight == "" || weight <= 0 || isNaN(weight)) {
        result.innerHTML = "Please enter a valid weight";
    } else {
        const bmi = ((weight * 10000) / (height * height)).toFixed(2);
            let i=0;
        function firstMessage(){
            result.innerHTML = `<span>Your BMI Index is ${bmi}</span>`;
            i++
            console.log(i)
        }
        function secondMessage(bmi){
            if (bmi < 18.5) {
                result.innerHTML = " <span>You are Underweight 😂</span>";  
        }
         else if (bmi >= 18.5 && bmi <= 24.9) {
                result.innerHTML = " <span>You are Healthy 💪</span>";     
        } 
        else {
                result.innerHTML = "<span>You are overweight 🥱</span>";   
        }
        i++
        console.log(i);
        }
        if(i%2==0){
         setInterval(firstMessage(),3000)
        }
        else{
            setInterval(secondMessage(bmi),3000)
         }
        }
})


   

