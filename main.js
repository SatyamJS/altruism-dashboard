
const header1= document.querySelector("h1")
const header3= document.querySelector("h3")
const paraElem= document.querySelector("p")
const root= document.querySelector(":root")
const body= document.getElementsByTagName("body")[0]
const lightBtn= document.querySelector(".active")
const darkBtn= document.querySelector(".inactive")
lightBtn.addEventListener("click",(e)=>{
    darkBtn.style.background="rgba(0,0,0,0.2)"
    darkBtn.style.color="black"
    lightBtn.style.backgroundColor="blueviolet"
    lightBtn.style.color="white"
    body.style.color="black"
    body.style.backgroundColor="white"
})
darkBtn.addEventListener("click",(e)=>{
    darkBtn.style.color="white"
    darkBtn.style.backgroundColor="blueviolet"
    lightBtn.style.color="white"
    lightBtn.style.background="rgba(0,0,0,0.2)"
    body.style.background="rgba(0,0,0,0.9)"
    
})