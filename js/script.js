// ADD UNDER SHADOW
window.addEventListener('scroll', function() {
  if (pageYOffset > 50) {
    document.querySelector('.add_shadow').classList.add('add_shadow__active')
  } else {
    document.querySelector('.add_shadow').classList.remove('add_shadow__active')
  }
});

// SOURCE ACTIVE
function openSource() {
    var inputField = document.querySelector('.form__source input');
    if (inputField.style.display === 'none' || inputField.style.display === '') {
        inputField.style.display = 'flex';
    } else {
        inputField.style.display = 'none';
    }
}

// ACTIVE ITEM OF NAV MENU
// Получить текущий URL-путь
var currentPath = window.location.pathname;

// Извлечь имя файла из пути
var currentFileName = currentPath.substring(currentPath.lastIndexOf('/') + 1);

// Сравнить имя файла с путями элементов меню и отметить соответствующий элемент
var menuItems = document.querySelectorAll('.header__a'); // Здесь '.nav_menu__a' - селектор элементов меню
menuItems.forEach(function(item) {
    var itemPath = item.getAttribute('href');
    // Извлекаем имя файла из пути элемента меню
    var menuItemFileName = itemPath.substring(itemPath.lastIndexOf('/') + 1);
    if (menuItemFileName === currentFileName) {
        item.classList.add('underline_25'); // Применить стиль для отметки активной страницы
    }
});

// BURGER MENU
function openBurger() {
    document.querySelector('.header__in').classList.add('burger__add');
}
function closeBurger() {
    document.querySelector('.header__in').classList.remove('burger__add');
}

// Функция, которая будет вызываться при изменении размера экрана
function handleResize() {
    const screenWidth = window.innerWidth; // Получаем текущую ширину экрана
    const breakpoint = 768; // Задаем ширину, при которой нужно закрыть бургер-меню

    if (screenWidth >= breakpoint) {
        closeBurger(); // Если экран больше или равен заданной ширине, закрываем бургер-меню
    }
}
// Добавляем обработчик события resize на объект window
window.addEventListener('resize', handleResize);
// Вызываем handleResize() при загрузке страницы, чтобы учесть начальное состояние экрана
handleResize();

//MODAL WINDOW CALLBACK
function openModal(formType) {
    const modal = document.querySelector('.modal');
    const loginForm = modal.querySelector('.form__login');
    const registerForm = modal.querySelector('.form__register');
    const callbackForm = modal.querySelector('.form__callback');

    if (formType === 'login') {
        loginForm.style.display = 'flex';
        registerForm.style.display = 'none';
        callbackForm.style.display = 'none';
    } else if (formType === 'register') {
        loginForm.style.display = 'none';
        registerForm.style.display = 'flex';
        callbackForm.style.display = 'none';
    } else if (formType === 'callback') {
        loginForm.style.display = 'none';
        registerForm.style.display = 'none';
        callbackForm.style.display = 'flex';
    }

    modal.classList.add('modal__active');
}

function closeModal() {
    const modal = document.querySelector('.modal');
    modal.classList.remove('modal__active');
}

//add loop for img
function enlargeImageOnClick() {
  const clickLoopImages = document.querySelectorAll('.clickLoop');

  clickLoopImages.forEach((image) => {
    image.addEventListener('click', function() {
      this.classList.toggle('clickLoop__active');

      // Добавьте условие, чтобы установить стиль height: auto; при активации
      if (this.classList.contains('clickLoop__active')) {
        this.querySelector('img').style.height = 'auto';
      } else {
        this.querySelector('img').style.height = ''; // Сбросит стиль height
      }
    });
  });
}

enlargeImageOnClick();


//ANIMATION ACTIVE
function animActiv(entry1) {
  entry1.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('anim__back');
    } else {
    change.target.classList.remove('anim__back');
    }
  });
};
let animOpt = { threshold: [0.00001] };
let animAct = new IntersectionObserver(animActiv, animOpt);
let animItems = document.querySelectorAll('.anim__down_rotate_l,.anim__down_rotate_r,.anim__left_rotate_l,.anim__right_rotate_r');
for (let el1 of animItems) {
  animAct.observe(el1);
};


//PAGINATION FLEX
var pagInd = 1; //

function clickPag(n, container) {
  if (container === 'container1') {
    pagination1(pagInd += n);
    }
}

function pagination1(n) {
    var i;
    var items = document.querySelectorAll(".js_item");
    if (n > items.length - 1) { pagInd = 1; }
    if (n < 1) { pagInd = items.length - 1; }
    for (i = 0; i < items.length; i++) {
      items[i].style.display = "none";
    }
    items[pagInd - 1].style.display = "flex";
  }

