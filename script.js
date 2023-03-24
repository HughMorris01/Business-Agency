//Navbar
const menu = document.querySelector('.menu');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-link');

menu.addEventListener('click', () => {
    navbar.classList.toggle('change');
    menu.classList.toggle('change');
})

navLinks.forEach(link =>{
    link.addEventListener('click', ()=>{
        navbar.classList.remove('change');
        menu.classList.remove('change');
    })
})
//End of Navbar

//Section 2 Video
const video = document.querySelector('.video');
const btn = document.querySelector('.buttons i');
const bar = document.querySelector('.video-bar');

const playPause = () => {
    if(video.paused) {
        video.play();
        btn.className = 'far fa-pause-circle';
        video.style.opacity = '.7';
    } else {
        video.pause();
        btn.className = 'far fa-play-circle';
        video.style.opacity = '.3';
    }
}

btn.addEventListener('click', () => {
    playPause();
})

video.addEventListener('timeupdate', ()=> {
    const barWidth = video.currentTime / video.duration
    console.log(barWidth)
    bar.style.width = barWidth * 100 + "%";

    if(video.ended){
        btn.className = "far fa-play-circle"
        video.style.opacity = '.3'
        bar.style.width = 0;
    }
})

//End of Section 2 Video

// Section 3 Swiper
var swiper = new Swiper(".swiper-container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 45,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
});
// Section 3 Swiper