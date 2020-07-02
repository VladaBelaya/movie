document.addEventListener('DOMContentLoaded', () => {
    const cardsContainer = document.querySelector('.catalog__cards'),
        arrowBtn = document.querySelector('.arrow-down'),
        points = document.querySelectorAll('.catalog__loading-point'),
        slideItems = document.querySelectorAll('.promo__decor'),
        topRating = document.querySelector('.top__rating');

    const movieDb = [{
            name: 'Фантастические твари',
            genre: 'Фэнтези, приключения, семейный',
            rating: '4.2',
            image: './img/',
        },
        {
            name: 'Кредо убийцы',
            genre: 'Фантастика, боевик, приключения',
            rating: '4.7',
            image: './img/',
            top: true
        },
        {
            name: 'Иллюзия обмана 2',
            genre: 'Боевик, триллер, комедия',
            rating: '4.5',
            image: './img/',
        },
        {
            name: 'Тарзан. Легенда',
            genre: 'Фэнтези, боевик, драма, мелодрама, приключения',
            rating: '4.5',
            image: './img/',
        },
        {
            name: 'Доктор Стрэндж',
            genre: 'Фантастика, фэнтези, боевик, приключения',
            rating: '4.9',
            image: './img/',
            top: true
        },
        {
            name: 'Первый мститель: Противостояние',
            genre: 'Фантастика, боевик, приключения',
            rating: '4.5',
            image: './img/',
            top: true
        },
        {
            name: 'Алиса в Зазеркалье',
            genre: 'Фэнтези, приключения, семейный',
            rating: '4.0',
            image: './img/',
        },
        {
            name: 'В поисках Дори',
            genre: 'Мультфильм, комедия, приключения, семейный',
            rating: '4.3',
            image: './img/',
        },
        {
            name: 'Большой и добрый великан',
            genre: 'Фэнтези, приключения, семейный',
            rating: '4.5',
            image: './img/',
        },
        {
            name: 'День освобождения',
            genre: 'Фантастика, боевик',
            rating: '4.5',
            image: './img/',
        },
        {
            name: 'Ледниковый период',
            genre: 'Мультфильм, фэнтези, комедия, приключения, семейный',
            rating: '5.0',
            image: './img/',
            top: true
        },
        {
            name: 'Моана',
            genre: 'Мультфильм, фэнтези, комедия, приключения, семейный',
            rating: '4.5',
            image: './img/',
        },
    ]

    const $createCards = (data) => {
        return `
             <div class="card">
             <div class="overlay isHide" style="background-image: url(${data.image}"></div>
             <div class="card__face card__face--front">
               <div class="card__img">
                 <img src="${data.image}" alt="${data.name}" />
               </div>
               <div class="card__descrs">
                 <div class="card__descr">
                   <div class="card__title">${data.name}</div>
                   <div class="card__text">${data.genre}</div>
                 </div>
                 <div class="card__rating">${data.rating}</div>
               </div>
             </div>
            
             <div class="card__face card__face--back">
               <div class="card_two">
                 <div class="card__options">
                   <button class="card__btn_close">&times;</button>
                   <a class="card__favorites" href="#">+ Favorites</a>
                 </div>
                 <div class="card__blocks">
                   <div class="card__two-descrs">
                     <div class="card__descr">
                       <div class="card__title_white">
                         ${data.name}
                       </div>
                       <div class="card__text card__text_back">${data.genre}</div>
                     </div>
                     <div class="card__rating card__rating_white">${data.rating}</div>
                   </div>
            
                   <div class="card__block">
                     There are growing dangers in the wizarding world of 1926 New
                     York. Something mysterious is leaving a path of destruction in
                     the streets, threatening to expose the wizarding
                   </div>
                 </div>
                 <div class="card__button">
                   <button class="button button_card">Смотреть</button>
                 </div>
               </div>
             </div>
            </div>
 `
    }

    const checkLength = (selector, length) => {
        let string = ''
        if (selector.textContent.length < length) {
            return selector
        } else {
            string = selector.textContent.slice(0, length)
            selector.textContent = `${string}...`
        }
    }

    movieDb.filter((x, idx) => x.image += `card_${idx + 1}.png`)
    const filterDb = movieDb.slice().sort((a, b) => b.rating - a.rating)

    filterDb.forEach((x, idx) => {
        cardsContainer.innerHTML += $createCards(x)
        x.top ?
            topRating.innerHTML += $createCards(x) :
            false
    })

    const card = document.querySelectorAll('.card'),
        closeBtn = document.querySelectorAll('.card__btn_close'),
        overlay = document.querySelectorAll('.overlay'),
        cardsTitle = document.querySelectorAll('.card__title'),
        cardsText = document.querySelectorAll('.card__text');

    card.forEach((x, idx) => {
        x.addEventListener('click', () => {
            x.classList.add('is-flipped')
            overlay[idx].classList.remove('isHide')
        })
        closeBtn[idx].addEventListener('click', event => {
            event.stopPropagation()
            card[idx].classList.remove('is-flipped')
            overlay[idx].classList.add('isHide')
        })
    })

    const loading = () => {
        let counter = 0;
        setInterval(() => {
            points[counter].classList.remove('point-active')
            counter++
            if (counter === points.length) {
                counter = 0
            }
            points[counter].classList.add('point-active')
        }, 420)
    }

    arrowBtn.addEventListener('click', () => {
        arrowBtn.classList.toggle('arrow-active')
    })

    slideItems.forEach((x, idx) => {
        x.addEventListener('click', event => {})
    })

    cardsTitle.forEach(x => checkLength(x, 20))
    cardsText.forEach(x => checkLength(x, 40))
    loading()
})