document.addEventListener("DOMContentLoaded", function(event) {
    
    const root = document.querySelector('#root');
    const mainContent = document.createElement('main');
    
    createHeader(root); //Создал хедер с навигацией
    root.append(mainContent);//Добавил основной контекнт сайта

    createPromo(mainContent);
    root.addEventListener('click', (e) => {
        e.preventDefault();
        if(e.target.id == 'header__img'){
            createPromo(mainContent);
        }else if(e.target.id == 'nav-main' || e.target.id == 'nav-characters' || e.target.id == 'btn-start'){
            mainContent.innerHTML = ``;
        }
    });

    function createHeader(block){ //Создал хеадер
        block.innerHTML = `
            <header class="header logo">
                <div class="header__logo">
                    <img src="icons/logo/logo_Header.png" alt="Harry Potter" id="header__img" class="header__img">
                </div>
                <nav class="header__nav">
                    <ul class="header__links">
                        <li class="header__item">
                            <a id="nav-main" href="#" class="header__link">Главная</a>
                        </li>
                        <li class="header__item">
                            <a id="nav-characters" href="#" class="header__link">Персонажи</a>
                        </li>
                    </ul>
                </nav>
            </header>
        `;
    };
    function createPromo(block) {//Создает страничку ПРОМО
        block.innerHTML = `
            <div class="promo">
                <h1 class="title title__promo">
                    Найди любимого<br>
                    персонажа<br>
                    “Гарри Поттера”
                </h1>
                <h2 class="subtitle subtitle__promo">
                Вы сможете узнать тип героев, их<br> 
                способности, сильные стороны и недостатки.
                </h2>
                <button id="btn-start" class="btn btn__large btn__promo">Начать</button>
            </div>
            `
    };
});
