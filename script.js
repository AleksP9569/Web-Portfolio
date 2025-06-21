



/*================ Hamburger Menu =================*/

let menuIcon =document.querySelector('#menu-icon');
let navbar =document.querySelector('.navbar');
let viewPort= document.querySelector('.big-container');


menuIcon.onclick = ()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active'); 

};



/*================ Scroll Section Active Links =================*/

//update this to work with the newly improved website, probably change section to the divs name!! 
let container =document.querySelectorAll('.container');
let navLinks = document.querySelectorAll('header nav a');



viewPort.onscroll = ()=> {

    container.forEach(sec=>{
        let top = viewPort.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');


        if(top >= offset && top < offset + height){

            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

                
            });


        };
    });




/*================ Toggle Icon remove and scroll when link is clicked on reactive part of website =================*/

menuIcon.classList.remove('bx-x');
navbar.classList.remove(`active`);

 
};

/*=============Resume page buttons functionality=============*/

const resumeBtn=document.querySelectorAll('.resume-btn');

resumeBtn.forEach((btn,idx) => {
    btn.addEventListener('click', () => {
        const resumeDetails = document.querySelectorAll('.resume-detail');

        resumeBtn.forEach(btn => {
                   
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        resumeDetails.forEach(detail => {
                   
            detail.classList.remove('active');
        });
        resumeDetails[idx].classList.add('active');  
    });

    

    
});

/*=================== Project Button Page=======================*/

const arrowRight= document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft= document.querySelector('.portfolio-box .navigation .arrow-left');

let index = 0;

const activePortfolio = () => {
    
    const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
    const portfolioDetails = document.querySelectorAll('.portfolio-detail');


    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`; 
    /* really important and very tedious bug!! the interpolation function rquires that you use `` specifically
     double back facing single quotation marks. the extrme nuance of coding smh...*/

     portfolioDetails.forEach(detail => {

        detail.classList.remove('active');

     });
     portfolioDetails[index].classList.add('active');

};


arrowRight.addEventListener('click', () => {
    if(index < 2){

        // index< n , where n is the total number of projects -1
        index++;
        arrowLeft.classList.remove('disabled');
    }
    else{
        index=3; // the last photo / the total number of projects
        arrowRight.classList.add('disabled');

    }

    activePortfolio();

});

arrowLeft.addEventListener('click', () => {
    if(index >1){

        // index> n , where n is the second project this value will never change
        index--;
        arrowRight.classList.remove('disabled');
    }
    else{
        index=0; // the very first project in the list
        arrowLeft.classList.add('disabled');

    }

    activePortfolio();

});








/*================ Scroll Reveal  =======================*/
ScrollReveal({ 
    container: document.querySelector('.big-container'),// selects the div container as the primary scroller!!
    reset: true,
    distance: '80px',
    duration:2000,
    delay:200,

});



/*================ scroll reveal code===============8*/

// the names of the classes for the about page will have to change!!

ScrollReveal().reveal('.home-content, .heading, .info-box h1', { origin: 'top'});

ScrollReveal().reveal('.home-img, .contact form,.resume-box, .portfolio-box, .home-content.info ', { origin: 'bottom'});


ScrollReveal().reveal('.home-content h1, .about-img ',  { origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right'});
ScrollReveal().reveal('.intro_grid h5' ,{origin:'right', delay:250,interval:250}); // this one might be a little much 
ScrollReveal().reveal('.intro_flex div',{origin:'bottom', delay:500,interval:500});
//ScrollReveal().reveal('.resume-box .heading2' ,{origin:'right', delay:400,interval:500});






/*================typewritter js=======================*/

const typed = new Typed('.multiple-text',{
    strings:['Electrical Engineer','Electronic Systems Developer', 'Sonova Group'],
    typeSpeed: 100,backDelay: 1000,
    loop:true
});


