
function locomotive(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}
locomotive();
function loader(){
    let tl = gsap.timeline({})
    tl.from(".line h2", {
        y:300,
        opacity: 0,
        duration: 0.5,
        stagger: 0.2

    })
    tl.from("#line-count", {
        opacity: 0
    })
    var inc = document.querySelector("#line-count h5");
    var count = 0;
    let some = setInterval(function(){
        if(count === 100){
            clearInterval(some);
        }
        inc.textContent = count;
        count++;
    }, 33)
    tl.to("#loader", {
        delay: 2,
        opacity: 0,

    })
    tl.from("#page1", {
        opacity: 0,
        y: 1600,
        ease: "easeOut",
        duration: 0.3

    })
    tl.to("#loader",{
        display: "none"
    })
    tl.from("nav", {
        opacity: 0
    })
    tl.from(".text .hero h1" , {
        y: 100,
        opacity: 0,
        stagger: 0.2
    })
}
loader()
function cursor(){
    // document.addEventListener("mousemove", function(dot){
    //     gsap.to("#cursor", {
    //         x: dot.pageX,
    //         y: dot.pageY,
    //         delay: 0
    //     })
    // })
    Shery.mouseFollower({
        skew: true,
        ease: "cubic-bezier(0.23, 1, 0.32, 1)",
        duration: 0.5,
    })
    Shery.makeMagnet(".nav-2 h4");
 var moving = document.querySelector("#video-container")
 var currentVideo = document.querySelector("#video-container video")

     moving.addEventListener("mouseenter", function(){
     moving.addEventListener("mousemove", function(dets){
         gsap.to(".mousefollower", {
           opacity: 0,
         })
       gsap.to("#video-cursor", {
           left: dets.x - 530,
           y: dets.y - 100,
       })
     })
 })
    moving.addEventListener("mouseleave", function(){
        gsap.to(".mousefollower", {
            opacity: 1,
        })
        gsap.to("#video-cursor", {
            left:"80%",
            y: "-12%",
        })
    })
    var flag = 0
    moving.addEventListener("click", function(){
        if(flag === 0){
        currentVideo.play();
        currentVideo.style.opacity = 1;
        document.querySelector("#video-cursor").innerHTML = `<i class=\"ri-pause-mini-line\"></i>`
        gsap.to("#video-cursor", {
            scale: 0.5
        })
            flag = 1;
        }
        else{
            currentVideo.pause();
            currentVideo.style.opacity = 0;
            document.querySelector("#video-cursor").innerHTML = ` <i class="ri-play-fill"></i>`
            gsap.to("#video-cursor", {
                scale: 1
            })
            flag = 0;
        }

    })
    document.querySelector("#hero3").addEventListener("mousemove", function(dets){
        gsap.to("#flag", {
            opacity: 1,
            left: dets.x,
            y : dets.y
        })
    })
    document.querySelector("#hero3").addEventListener("mouseleave", function(dets){
        gsap.to("#flag", {
            opacity: 0
        })
    })
}
cursor();
// document.addEventListener("mousemove", function(dot){
//     gsap.to("#video-cursor", {
//         x: dot.x,
//         y: dot.y
//     })
// })

function sheryanimation() {
    Shery.imageEffect(".image-div", {
        style: 5,
        // debug:true,
       config: {"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":"9996999","range":[-9999999,9999999]},"aspect":{"value":0.7272749932567818},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.69,"range":[0,10]},"metaball":{"value":0.43,"range":[0,2]},"discard_threshold":{"value":0.63,"range":[0,1]},"antialias_threshold":{"value":0.01,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
        gooey: true
    })
}
sheryanimation()