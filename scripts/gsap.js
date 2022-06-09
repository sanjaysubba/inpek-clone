// import {gsap} from 'gsap';
gsap.registerPlugin(ScrollTrigger);
function myAnimations(){
const heroText = gsap.timeline();
heroText.set(".hero-text",{
    opacity:0,
}).to(".hero-text",{   
    y: -150,
    duration:1,
    opacity: 1,
    delay:1, 
});
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
            stagger: 0.6,
            scrollTrigger:{
                trigger: icon,
                start: 'top 90%',
               
            }
        })
    })
}
}
// var timeline = gsap.timeline();
// timeline.to(".transition",{
//     height:"0%",
//     transformOrigin: "top",
//     duration: 2,
// })
// page transition
// const animationOnEnter = () =>{
//     var timeline = gsap.timeline();
//     timeline.to(".transition",{
//         height:"100%",
//         top:"-100%",
//         duration:1,
//     })
// }
// barba.init({
//     transitions:[
//         {
//             leave:({data}) => 
//                 animationOnEnter(data)
            
//         }
//     ]
// })

// function headerSizeCalc(){
//     const navbar = document.querySelector(".navbar");
//     const navbarHeight = navbar.clientHeight;

//     const hero = document.querySelector(".hero-section");
//     hero.style.marginTop = -navbarHeight + 'px';

// }
myAnimations();
// headerSizeCalc();
pageTransition = () => {
    var timeline = gsap.timeline();
    timeline.to(".transition",{
     height:"100vh",
     transformOrigin: "top",
     duration: 1,
     });
     timeline.to(".transition",{
         height:"0%",
         transformOrigin: "top",
         duration: 1,
     });
    
}
function navBackgroundChange(){
    window.onscroll = function(){
        const navbar = document.querySelector('.navbar');
        navbar.classList.toggle("nav-scrolled", window.scrollY>50);
                
    }
}
navBackgroundChange()
// var timeline = gsap.timeline();
// timeline.to(".transition",{
//  height:"100%",
//  transformOrigin: "top",
//  duration: 1,
//  });
//  timeline.to(".transition",{
//      height:"0%",
//      transformOrigin: "top",
//      duration: 1,
//  });
//  timeline.to(".loader",{
//      height:0,
//  }); 

delay = (n) => {
    n = n || 2000;
    return new Promise((done)=> {
        setTimeout(()=> {
            done();
        }, n);
    })
}

barba.init({
    sync: true,
    transitions: [
        {
            async leave(data){
                const done = this.async();
                pageTransition();
                await delay(1000);
                done();
            },
            async enter (data){
                myAnimations();
            },
            
            async once(data){
                pageTransition();
                myAnimations();
            }
        }
    ]
});
