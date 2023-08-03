const box = document.querySelector(".box")
setInterval(() => {
    const time = (new Date).toLocaleTimeString()
    console.log(time);
    box.innerHTML=time 
}, 1000);

