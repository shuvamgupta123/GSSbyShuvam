

let tl = gsap.timeline();

tl.from("#head h1",{
    opacity:0,
    y:-100,
    ease:5,
    duration: 1,
})

tl.from("#head h4",{
    opacity:0,
    y:20,
    background:"rgba(0, 0, 0, 0)",
    duration: 1,
})
tl.from("#head hr",{
    width:0,
    duration:0.8,
})
tl.from("#main",{
    y:-20,
    duration:0.8,
    opacity:0,
})
tl.from("#main1",{
    y:-20,
    duration:0.8,
    opacity:0,
    stagger:0.4,
    ease:3,
    delay:1,
})
tl.from("#main2 a",{
    y:-20,
    duration:0.8,
    opacity:0,
    stagger:0.4,
    ease:3,
})
gsap.registerPlugin(AttrPlugin);

var img = document.querySelector("#img");

img.addEventListener("mouseover",function(){
    console.log("hello world")
    gsap.to(img,{
        duration:1,
        backgroundSize:"650px",
    })
})
img.addEventListener("mouseleave",function(){
    gsap.to(img,{
        duration:1,
        backgroundSize:"500px",
    })
})

gsap.from(".doc",{
    y:30,
    delay:0.8,
    opacity:0,
    stagger:0.3,
    duration:1.2,
    scrollTrigger:".doc",
})
gsap.from("#img",{
    x:500,
    delay:0.8,
    opacity:0,
    duration:1.2,
    ease:2,
    scrollTrigger:"#img",
})

gsap.to("#head h1",{
    scale:0,
    duration:1,
    scrollTrigger:{
        trigger:"#head hr",
        start:"top 25%",
        end:"top 15%",
        scrub:3,
        scroller:"body"
    }
})
gsap.to("#head hr",{
    scale:0,
    duration:1,
    y:-100,
    scrollTrigger:{
        trigger:"#head hr",
        start:"top 10%",
        end:"top 5%",
        scrub:3,
        scroller:"body"
    }
})


gsap.to("#head h4",{
    scale:0,
    duration:1,
    y:-100,
    scrollTrigger:{
        trigger:"#head h4",
        start:"top 10%",
        end:"top 5%",
        scrub:3,
        scroller:"body"
    }
})
gsap.registerPlugin(AttrPlugin);

let initial = `M 10 250 Q 500 250 990 250`;

let string = document.querySelector("#string");
let svg = document.querySelector("#string svg");

string.addEventListener("mousemove", function (e) {
    let svgRect = svg.getBoundingClientRect();
    
    let mouseX = e.clientX - svgRect.left;
    let mouseY = e.clientY - svgRect.top; 
    const pathString = `M 10 250 Q ${mouseX} ${mouseY} 990 250`;

    gsap.to("#string svg path", {
        attr: { d: pathString },
        duration: 0.3,
        ease: "power3.out"
    });
});

string.addEventListener("mouseleave", function(){
    gsap.to("svg path", {
        attr: { d: `M 10 250 Q 500 250 990 250` },
        duration: 0.8,
        ease: "elastic.out(1, 0.2)"
    });
});

gsap.from(".aluarjun",{
    y:100,
    opacity:0,
    duration:1.2,
    stagger:0.4,
    ease:2,
    scrollTrigger:"#part p"
})
