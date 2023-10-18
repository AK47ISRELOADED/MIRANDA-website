const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var tl = gsap.timeline()

tl.to("#page1",{
    y:"100vh",
    scale:0.6,
    duration:0
})
tl.to("#page1",{
    y:"40vh",
    dutation:1,
    delay:1

})
tl.to("#page1",{
    y:"0vh",
    rotate:360,
    scale:1,
    duration:0.9,
})


var box1 = document.querySelector("#box1");
var box2 = document.querySelector("#box2");
var box3 = document.querySelector("#box3");
var box4 = document.querySelector("#box4");

box1.addEventListener("mouseenter",function(){

    box2.style.left = "37%";
    box3.style.left = "50%";
    box4.style.left = "65%";
    box1.style.backgroundColor = "#baa894";


})
box1.addEventListener("mouseleave",function(){
    box2.style.left = "20%";
    box3.style.left = "38%";
    box4.style.left = "60%";
    box1.style.backgroundColor = "#c4bcb3";

})




box2.addEventListener("mouseenter",function(){

    // box2.style.left = "37%";
    box3.style.left = "54%";
    box4.style.left = "69%";
    box2.style.backgroundColor = "#baa894";


})
box2.addEventListener("mouseleave",function(){
    // box2.style.left = "20%";
    box3.style.left = "38%";
    box4.style.left = "60%";
    box2.style.backgroundColor = "#c4bcb3";

})




box3.addEventListener("mouseenter",function(){

    // box2.style.left = "37%";
    // box3.style.left = "50%";
    box4.style.left = "72%";
    box3.style.backgroundColor = "#baa894";


})
box3.addEventListener("mouseleave",function(){
    // box2.style.left = "20%";
    // box3.style.left = "38%";
    box4.style.left = "60%";
    box3.style.backgroundColor = "#c4bcb3";

})


box4.addEventListener("mouseenter",function(){

    // box2.style.left = "37%";
    // box3.style.left = "50%";
    // box4.style.left = "65%";
    box4.style.backgroundColor = "#baa894";


})
box4.addEventListener("mouseleave",function(){
    // box2.style.left = "20%";
    // box3.style.left = "38%";
    // box4.style.left = "60%";
    box4.style.backgroundColor = "#c4bcb3";

})