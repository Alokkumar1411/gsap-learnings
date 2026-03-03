window.addEventListener("wheel",function(dets){
    if(dets.deltaY>0){
       gsap.to(".marque",{
            transform:'translateX(-200%)',
            // delay:1,
            ease:"none",
            duration:4,
            repeat:-1,
        })

    }
    else{
        gsap.to(".marque",{
            transform:'translateX(0%)',
            // delay:1,
            ease:"none",
            duration:5,
            repeat:-1,
        })

    }
})

