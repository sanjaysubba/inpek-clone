// import {gsap} from 'gsap';
gsap.registerPlugin(ScrollTrigger);

gsap.set(".text-content__title",{
    y: 50,
    opacity: 0,
});
gsap.set(".text-content__text",{
    y: 50,
    opacity: 0,
});
const textContent = gsap.timeline({
    scrollTrigger:{
        trigger: ".text-content__title",
    },
});
textContent.to(".text-content__title",{
    y: 0,
    duration:1,
    opacity: 1, 
})
.to(".text-content__text",{
    y: 0,
    duration:1,   
    opacity: 1, 
})

gsap.set(".slider__title",{
    y: 20,
    opacity: 0,
})
const sliderAnim = gsap.timeline({
    scrollTrigger:{
        trigger: '.slider',
        start: 'top 60%',
    }
})
sliderAnim.to('.slider__title',{
    y: 0,
    opacity: 1,
    duration: 2,
})

gsap.to('.text-scroll p',{
    x:-500,
    scrollTrigger:{
        trigger:'.text-scroll',
        start: 'top 80%',
        end: 'bottom top',
        scrub: true,
    }
})
