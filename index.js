// Add JavaScript below

//get elements(imgs) by id
//getelementbyid()

// ScrollReveal().reveal('sleep', {delay:1000});
window.onload = function(){
ScrollReveal().reveal('.blanket', {easing:'cubic-bezier(0.1, 0.4, 0.2, 1)', duration: 2000, delay: 500});
ScrollReveal().reveal('.sideways', {delay:300, rotate:{x:300, y:45}, duration:1000, viewFactor: .5});
ScrollReveal().reveal('.peek', {origin:'bottom', distance: '300px', easing: 'ease-in', duration: 750, delay:1000});
ScrollReveal().reveal('.sleep', {origin:'left', easing: 'ease-in', distance: '150px', duration:700, delay: 1000});
ScrollReveal().reveal('.eyes', {delay: 700, duration:5000, opacity:0});
ScrollReveal().reveal('.warning',{delay:2500, duration:750});
};