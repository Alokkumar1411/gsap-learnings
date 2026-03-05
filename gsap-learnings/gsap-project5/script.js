function page1animation(){
    var tl=gsap.timeline()


tl.from("nav h2, nav h4, nav button",{
    y:-30,
    delay:0.5,
    opacity:0,
    duration:0.5,
    stagger:0.15,
})
tl.from(".center1 h1",{
    x:-400,
    opacity:0,
    duration:0.7,
    
})
tl.from(".center1 p",{
    x:-200,
    opacity:0,
    duration:0.6,

})
tl.from(".center1 button",{
    opacity:0,
    duration:0.7,
})
tl.from(".center2 img",{
    opacity:0,
    duration:0.7,
},"-=1")

tl.from(".section1bottom img",{
    y:30,
    opacity:0,
    stagger:0.15,
    duration:0.7
} )
}
page1animation()
var tl2=gsap.timeline({
    scrollTrigger:{
        trigger:".section2",
        scroller:"body",
        start:"top 30%",
        end:"top -50",
        scrub:2,
    }
})

tl2.from(".services",{
    y:30,
    opacity:0,
})

tl2.from(".elem.line1.left",{
    x:-300,
    opacity:0,
    duration:0.5

},"anime1")

tl2.from(".elem.line1.right",{
    x:300,
    opacity:0,
    duration:0.5

},"anime1")
tl2.from(".elem.line2.left",{
    x:-300,
    opacity:0,
    duration:0.5

},"anime2")
tl2.from(".elem.line2.right",{
    x:300,
    opacity:0,
    duration:0.5

},"anime2")