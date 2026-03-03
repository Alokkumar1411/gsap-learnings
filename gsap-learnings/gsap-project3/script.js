

function breakTheTxt() {
    var h1 = document.querySelector("h1")
    var h1txt = h1.textContent
    // var h1txt=h1.textContent
    var splittedtxt = h1txt.split("")  // ye string ko word to word ya "" jo bhi inke bich likha hoga uske basis pr splitt kr dwngw
    var clutter = ""
     var halfvalue=Math.floor(splittedtxt.length/2)
    splittedtxt.forEach(function (e,idx) {
        if(idx<halfvalue)
        {clutter += `<span class="a">${e}</span>`}
        else{
            clutter += `<span class="b">${e}</span>`
        }
    })
    h1.innerHTML = clutter
}
breakTheTxt()
gsap.from(".a",{
    y:50,
    opacity:0,
    duration:0.7,
    stagger:0.2,
    // ease:"elastic.out"



})
gsap.from(".b",{
    y:50,
    opacity:0,
    duration:0.7,
    stagger:-0.2,
    // ease:"elastic.out"
})