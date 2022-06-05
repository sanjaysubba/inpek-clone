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
    y: 100,
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
        scrub: 3,
    }
})

gsap.set('.product-features__title',{
    y: 100,
    opacity:0,
})

gsap.to('.product-features__title',{
    y: 0,
    opacity:1,
    duration:2,
    scrollTrigger:{
        trigger:'.product-features__title',
        start: 'top 80%',
    }
})

gsap.set('.image-section',{
    y: 100,
    opacity: 0,
})

gsap.to('.image-section',{
    y: 0,
    opacity:1,
    duration:2,
    scrollTrigger:{
        trigger:'.image-section',
        start: 'top 80%',
    }
})

const featuredIcon = document.querySelectorAll('.product-features__wrapper');
if(featuredIcon){
    featuredIcon.forEach((icon)=>{
        gsap.set(icon,{
            y:100,
            opacity:0,
        })
        
        gsap.to(icon,{
            y: 0,
            opacity:1,
            duration:2,
            scrollTrigger:{
                trigger: icon,
                start: 'top 90%',
            }
        })
    })
}
