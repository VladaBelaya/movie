document.addEventListener('DOMContentLoaded', () => {
    const cardsContainer = document.querySelector('.catalog__cards');

    const movieDb = [
        {
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
        },
        {
            name: 'Первый мститель: Противостояние',
            genre: 'Фантастика, боевик, приключения',
            rating: '4.5',
            image: './img/',
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
        },
        {
            name: 'Моана',
            genre: 'Мультфильм, фэнтези, комедия, приключения, семейный',
            rating: '4.5',
            image: './img/',
        },
    ]

    const $createCards = (data, idx) => {
        const $el = `
 <div class="card">
 <div class="overlay isHide" style="background-image: url(${data.image}card_${idx + 1}.png);"></div>
 <div class="card__face card__face--front">
   <div class="card__img">
     <img src="${data.image}card_${idx + 1}.png" alt="${data.name}" />
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
           <div class="card__title card__title_white">
             ${data.name}
           </div>
           <div class="card__text">${data.genre}</div>
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
        return $el
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

    movieDb.forEach((x, idx) => cardsContainer.innerHTML += $createCards(movieDb[idx], idx))

    const card = document.querySelectorAll('.card'),
        closeBtn = document.querySelectorAll('.card__btn_close'),
        overlay = document.querySelectorAll('.overlay'),
        cardsTitle = document.querySelectorAll('.card__title'),
        cardsText = document.querySelectorAll('.card__text');

    cardsTitle.forEach((x, idx) => {
        checkLength(x, 20)
        checkLength(cardsText[idx], 40)
    })

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

})


