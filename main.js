let head1= document.querySelectorAll("h1")
head1=Array.from(head1)
let strong= document.querySelectorAll("strong")
strong= Array.from(strong)
let head3= document.querySelectorAll("h3")
head3=Array.from(head3)
let head4= document.querySelectorAll("h4")
head4=Array.from(head4)
let card=document.querySelectorAll(".card")
card=Array.from(card)
let tableHead= document.querySelectorAll("th")
th=Array.from(tableHead)
let analyticDiv= document.querySelectorAll(".analyticDiv")
analyticDiv=Array.from(analyticDiv)
const updates= document.querySelector(".updates")
const details = document.querySelector(".detailTable")
const body= document.getElementsByTagName("body")[0]
const lightBtn= document.querySelector(".active")
const darkBtn= document.querySelector(".inactive")
const navlinks =document.querySelector(".navlinks")
const hamburger= document.querySelector(".hamburger")
lightBtn.addEventListener("click",(e)=>{
    darkBtn.style.background="rgba(0,0,0,0.2)"
    darkBtn.style.color="black"
    lightBtn.style.backgroundColor="blueviolet"
    lightBtn.style.color="white"
    body.style.color="black"
    body.style.backgroundColor="white"
    head1.forEach((e)=>{
        e.style.color="black"
    })
    strong.forEach((e)=>{
        e.style.color="black"
    })
    head3.forEach((e)=>{
        e.style.color="black"
    })
    head4.forEach((e)=>{
        e.style.color="black"
    })
    card.forEach((e)=>{
        e.style.backgroundColor="white"
    })
    tableHead.forEach((e)=>{
        e.style.color="black"
    })
    analyticDiv.forEach((e)=>{
        e.style.backgroundColor="white"
    })
    details.style.backgroundColor="white"
    updates.style.backgroundColor="white"
    
})
darkBtn.addEventListener("click",(e)=>{
    darkBtn.style.color="white"
    darkBtn.style.backgroundColor="blueviolet"
    lightBtn.style.color="white"
    lightBtn.style.background="rgba(0,0,0,0.2)"
    body.style.background="rgba(0,0,0,0.9)"
    head1.forEach((e)=>{
        e.style.color="white"
    })
    strong.forEach((e)=>{
        e.style.color="white"
    })
    head3.forEach((e)=>{
        e.style.color="white"
    })
    head4.forEach((e)=>{
        e.style.color="white"
    })
    card.forEach((e)=>{
        e.style.backgroundColor="#261C2C"
    })
    tableHead.forEach((e)=>{
        e.style.color="white"
    })
    analyticDiv.forEach((e)=>{
        e.style.backgroundColor="#261C2C"
    })
    details.style.backgroundColor="#261C2C"
    updates.style.backgroundColor="#261C2C"
})
hamburger.addEventListener("click",(e)=>{
    hamburger.classList.toggle("hamburgerActive")
    navlinks.classList.toggle("navlinksclose")
})