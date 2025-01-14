let a = gsap.timeline()
a.from("#main1",{
    y:100,
    opacity:0,
    duration:1,
})

a.from("#main1 h1",{
    y:-50,
    opacity:0,
    duration:0.7,
    stagger:0.3,
})

a.from("#main1 p",{
    y:10,
    opacity:0,
    duration:0.7,
})

a.from("#main2",{
    y:10,
    opacity:0,
    duration:0.7,
})
a.from(".rs",{
    y:10,
    opacity:0,
    duration:0.7,
});
