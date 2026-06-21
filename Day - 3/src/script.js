import gsap from "gsap";

// // Normal GSAP Animation
// gsap.to('.box', {
//     x: 400,
//     duration: 2,
//     delay: 0.5,
//     ease: "power1",
//     stagger: {
//         each: 0.1,
//         from: 'center',
//     }
// })

const tl = gsap.timeline()

// // Normal TimelIne
// tl.to ( '#box1', {
//     x: 800,
//     delay: 0.5,
//     ease: 'power2.inOut',
// }).to( '#box2', {
//     x:700,
//     ease: 'power2.inOut'
// }).to( '#box3', {
//     x:600,
//     ease: 'power2.inOut'
// }).to( '#box4', {
//     x:500,
//     ease: 'power2.inOut'
// }).to( '#box5', {
//     x:400,
//     ease: 'power2.inOut'
// })

// // Timelinw with some other tags
// tl.to( '#box1', {
//     x: 500,
//     delay: 0.5,
//     ease: 'power2.out'
// }).to( '#box2', {
//     x: 500,
//     ease: 'power2.out'
// }, "+=0.4")

// // Use '<' to add anything to starting time of previous animation
// // Use '-=' to start before ending of previous animation
// // Use '+=' to start after ending of previous animation

// If i want 2 animations that are not in sequence can be played in sync using labels, just name anything and add after parameter block
tl.to( '#box1', {
    x: 500,
    delay: 0.5,
    ease: 'power2.out'
}, "sync").to( '#box2', {
    x: 500,
    ease: 'power2.out'
}).to( '#box3', {
    x: 500,
    ease: 'power2.out'
}, "sync")