fetch('https://repo-tech2edge.github.io/tasks/sample.json')
    .then(res => res.json())
    .then(data => {
        const swiperWrapper = document.getElementById("swiperWrapper");
        const bg_img = data.series.img;     //series image as background
        document.body.style.backgroundImage = `url(${bg_img})`;
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.objectFit = "fill";
        document.body.style.backgroundSize = "cover"; /* or contain */

        // Series name
        document.getElementById('seriesName').innerText = `${data.series.title}`

        // episode data from api

        console.log(data.episodes)
        data.episodes.forEach(episode => {
            // console.log(episode)     //each image accessed

            const episodeNode = document.createElement('div')
            episodeNode.className = `swiper-slide`;
            episodeNode.innerHTML = `<div class="card bg-dark text-white">
            <img src="${episode.img}" class="card-img" alt="${episode.title}">
            <div class="card-img-overlay">
                <h5 class="card-title">${episode.title}</h5>
                <p class="card-text">Episode ${episode.id}</p>
            </div>
        </div>`;
            // console.log(episodeNode)  //ready episode node
            swiperWrapper.appendChild(episodeNode);
            episodeNode.addEventListener('click', () => {
                console.log(`Clicked on episode ${episode.id}`);
                document.getElementById('episodeNumber').innerText = `Episode No . ${episode.id}`;
            })
        });
        // selected episode with resume
        const resumBtn = document.getElementById('resumeBtn');
        resumBtn.addEventListener('click', (e)=>{
            console.log(`clicked on resume btn`);
        })

    })

// swiper
var swiper = new Swiper(".card_slider", {
    speed: 200,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 5,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
    },
});

// ============= Scroll Reveal ============
const sr = ScrollReveal({  
    origin: 'right',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true   for repeat animation
})

sr.reveal(`.swiper, .right-container`)
sr.reveal(`.left-side-bar`, {origin: 'left'})
sr.reveal(`.navbar`, {origin: 'top'})