const splash = document.querySelector(".splash")

$time = 2000;

document.addEventListener("DOMContentLoaded", (e)=>{
    setTimeout(()=>{
        splash.classList.add("display-none");
    }, $time);
})