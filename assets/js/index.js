const mobile_nav = document.querySelector(".mobile-navbar-btn");

const header = document.querySelector(".menu");

const slider = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');

const auto = true;
let slideinterval;

mobile_nav.addEventListener("click", () => {
    //alert("Jii");
    header.classList.toggle("active");
});


const nextslide = ()=>{

    //getting current slide
    const currentslide = document.querySelector('.current');

    //remove class current

    currentslide.classList.remove('.current');
    
    //checking next slide is there or not
    if(currentslide.nextElementSibling)
    {
        currentslide.nextElementSibling.classList.add('current')
    }
    else
    {  
        //keeping first slide if it is not there
       slider[0].classList.add('current');
    }

    //remove currnt class after some time
    setTimeout(() => currentslide.classList.remove('current'));

}


const prevslide = ()=>{

    //getting current slide
    const currentslide = document.querySelector('.current');

    //remove class current

    currentslide.classList.remove('.current');
    
    //checking next slide is there or not
    if(currentslide.previousElementSibling)
    {
        currentslide.previousElementSibling.classList.add('current')
    }
    else
    {  
        //keeping first slide if it is not there
       slider[slider.length - 1].classList.add('current');
    }

    //remove currnt class after some time
    setTimeout(() => currentslide.classList.remove('current'));

}

// next.addEventListener('click',()=>{
//     nextslide();
// })

// prev.addEventListener('click',()=>{
//     prevslide();
// })

// if(auto){
//     slideinterval = setInterval(nextslide, 3000);
// }


//Change background when page scroll
window.addEventListener('scroll', ()=>{
    //console.log(window.scrollY);

    if(window.scrollY > 10){
        
        header.classList.add('active_nav');
    }
    else{
        header.classList.remove('active_nav');
    }

})
