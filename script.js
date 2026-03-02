var tl = gsap.timeline()

var menu = document.querySelector("#nav i")
var cross = document.querySelector("#full i")

tl.to("#full",{
    x: "-100%",
    duration: 0.5
})

tl.from("#full h4",{
    x: 150,
    stagger: 0.2,
    opacity: 0,
    duration: 0.4
})

tl.from("#full i",{
    opacity: 0,
    duration: 0.3
})

tl.pause()

menu.addEventListener("click",function(){
    tl.play()
})

cross.addEventListener("click",function(){
    tl.reverse()
})