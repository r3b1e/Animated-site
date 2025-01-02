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
        console.log(count);
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
document.addEventListener("mousemove", function(dot){
    gsap.to("#cursor", {
        x: dot.x,
        y: dot.y,
        delay: 0
    })
})
let tl = gsap.timeline({})
