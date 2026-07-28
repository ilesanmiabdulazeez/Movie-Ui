const cards = [{
    image:' movie-images/images (2).jpg',
    name: 'Avatar: the last airbender',
    year: 2025
},{
    image:' movie-images/images (5).jpg',
    name: 'Power Rangers: Samurai',
    year: 2021
},{
    image: 'movie-images/images (7).jpg',
    name: 'Spider Man: far away from home',
    year: 2022
},{
    image: 'movie-images/images (8).jpg',
    name: 'The flash: series 1-9',
    year: 2020
},{
    image: 'movie-images/images.jpg',
    name: 'Kunfu panda: movie',
    year: 2024
},{
    image: 'movie-images/Iron_Man_(2008_film)_poster.jpg',
    name: 'Iron-man: full movie',
    year: 2005
},{
    image: 'movie-images/images (1).jpg',
    name: 'Big Hero 6: full movie',
    year: 2012
},{
    image: 'movie-images/images (11).jpg',
    name: 'Solo-Leveling: complete season',
    year: 2023
},{
    image: 'movie-images/images (10).jpg',
    name: 'Black-clover: complete season',
    year: 2019
},{
    image: 'movie-images/images (12).jpg',
    name: 'Demon-slayer: complete season 1-200',
    year: 2024
},{
    image: 'movie-images/images (13).jpg',
    name: 'Pokemon-Horizon: Season 1-3',
    year: 2025
},{
    image: 'movie-images/images (14).jpg',
    name: 'Spongebob Squarepant: The movie',
    year: 2026
}]




let cardHtml = '';

cards.forEach((card)=>{

 cardHtml +=   
        `
        <div class='item'>
        <img   class='product'  src="${card.image}" alt=" img 1">
        <div class="content">
        <p>
            ${card.name}
        </p>
        <button class="
        js-download-btn" 
        data-card-name="${card.name}">Download  </button>
        <h4>${card.year}</h4>
        </div>
        </div>
    `;
    
});

document.querySelector('.js-container-grid').innerHTML = cardHtml;


document.querySelectorAll('.js-download-btn').forEach((button)=>{
    button.addEventListener('click', ()=>{
        console.log(button.dataset)
    });
});
