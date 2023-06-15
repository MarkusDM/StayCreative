//элементы
const shopBtn = document.querySelector('.header__shop-button');
const registerPopUp = document.querySelector('.header__register-alert');
const profilePopUp = document.querySelector('.header__profile-bar');
const infoPopUp = document.querySelector('.header__info');
const registerCloseBtn = document.querySelector(
	'.header__register-alert-button',
);
const profilePopUpCloseBtn = document.querySelector(
	'.header__profile-bar-button',
);
const storeBtn = document.querySelector('.header__store');
const userBtn = document.querySelector('.header__user');
const infoBtn = document.querySelector('#info-btn');
const logOut = document.querySelector('.header__profile-bar-button');
const input = document.querySelector('.header__search-input');
const inputWrapper = document.querySelector('.header__search');
const buttonsBar = document.querySelector('.header__buttons-bar');
const categorysTitle = document.querySelectorAll('.header__categorys-title');
const categorysPopUpBnt = document.querySelector('#categorys-btn');
const categorysPopUp = document.querySelector('.header__categorys');
const burgerBtn = document.querySelector('.header__burger');
const burgerNav = document.querySelector('.header__nav');
const burgerCategoryBtn = document.querySelector('#burger-categ-btn');
const mobileInfoPopUp = document.querySelector('#mobile-info');
const mobileCategPopUp = document.querySelector('#mobile-categorys');
const burgerPopUpBtn = document.querySelectorAll('.burger__categ-item-btn');
const mobileSearchBtn = document.querySelector('#mobile-search');
const mobileSearchPopUp = document.querySelector('.burger__search');
const mobileSearchPopUpCloseBtn = document.querySelector(
	'#mobile-search-close',
);
const headerWrapper = document.querySelector('.header__wrapper');
const header = document.querySelector('.header');

const registerPopUpClass = 'header__register-alert--show';
const shopBtnClass = 'header__store--show';
const removeShopBtnClass = 'header__shop-button--remove';
const profilePopUpClass = 'header__profile-bar--show';
const infoPopupClass = 'header__info--show';
const inputClass = 'header__search-input--reg';
const buttonBarClass = 'header__buttons-bar--reg';
const activeInputClass = 'header__search--active';
const parentListClass = 'header__categorys-list';
const showParentListClass = 'header__categorys-list--show';
const categorysPopUpClass = 'header__categorys--show';
const itemClass = 'header__item--slide';
const activeItemClass = 'header__item--open';
const activeBurgerClass = 'header__burger--active';
const showBurgerClass = 'header__nav--show';
const burgerCategoryPopUpClass = 'burger__categ-item--show';
const mobileSerchPopUpClass = 'burger__search--show';
const headerShadowClass = 'header__wrapper--scroll';


//добавляем показ register-popup
shopBtn.addEventListener('click', () => {
	registerPopUp.classList.toggle(registerPopUpClass);
});

//закрытие register-alert, смена блоков, 'login'

const updateHeaderStyles = () => {
	storeBtn.classList.toggle(shopBtnClass);
	shopBtn.classList.toggle(removeShopBtnClass);
	input.classList.toggle(inputClass);
	buttonsBar.classList.toggle(buttonBarClass);
};

registerCloseBtn.addEventListener('click', () => {
	registerPopUp.classList.remove(registerPopUpClass);
	updateHeaderStyles();
});

//'logout'
logOut.addEventListener('click', () => {
	registerPopUp.classList.remove(registerPopUpClass);
	updateHeaderStyles();
});

//показ profile-popup
userBtn.addEventListener('click', () => {
	profilePopUp.classList.toggle(profilePopUpClass);
});

profilePopUpCloseBtn.addEventListener('click', () => {
	profilePopUp.classList.remove(profilePopUpClass);
});

//открыть, закрыть информация popup, desktop and mobile
infoBtn.addEventListener('click', () => {
	const currentWidth = window.innerWidth;
	if (currentWidth > 768) {
		if (categorysPopUp.classList.contains(categorysPopUpClass)) {
			categorysPopUp.classList.remove(categorysPopUpClass);

			const otherWrapper = categorysPopUpBnt.parentNode;
			otherWrapper.classList.toggle(itemClass);
			otherWrapper.classList.toggle(activeItemClass);
		}
		const wrapper = infoBtn.parentNode;
		wrapper.classList.toggle(itemClass);
		wrapper.classList.toggle(activeItemClass);
		infoPopUp.classList.toggle(infoPopupClass);
		return;
	}
	mobileInfoPopUp.classList.add(burgerCategoryPopUpClass);
});

//добавлять active-status на Input
let currentWidth = window.innerWidth;
let isInputHandlersAdded = false;

window.addEventListener('resize', () => {
	const newWidth = window.innerWidth;
	if (currentWidth > 768 && newWidth <= 768 && isInputHandlersAdded) {
		input.removeEventListener('focus', focusHandler);
		input.removeEventListener('blur', blurHandler);
		isInputHandlersAdded = false;
	}
	currentWidth = newWidth;
});

function focusHandler() {
	inputWrapper.classList.add(activeInputClass);
}

function blurHandler() {
	inputWrapper.classList.remove(activeInputClass);
}

if (currentWidth > 768) {
	if (input) {
		input.addEventListener('focus', focusHandler);
		input.addEventListener('blur', blurHandler);
		isInputHandlersAdded = true;
	}
}

//показать, закрыть категории popup
categorysPopUpBnt.addEventListener('click', () => {
	const currentWidth = window.innerWidth;
	if (currentWidth > 768) {
		if (infoPopUp.classList.contains(infoPopupClass)) {
			infoPopUp.classList.remove(infoPopupClass);

			const otherWrapper = infoBtn.parentNode;
			otherWrapper.classList.toggle(itemClass);
			otherWrapper.classList.toggle(activeItemClass);
		}
		const wrapper = categorysPopUpBnt.parentNode;
		wrapper.classList.toggle(itemClass);
		wrapper.classList.toggle(activeItemClass);
		categorysPopUp.classList.toggle(categorysPopUpClass);
		return;
	} else {
		mobileCategPopUp.classList.add(burgerCategoryPopUpClass);
	}
});

//расскрыть, закрыть список категорий в popup
categorysTitle.forEach((element) => {
	element.addEventListener('click', () => {
		const list = element.nextElementSibling;
		list.classList.toggle(showParentListClass);
	});
});

//открыть, закрыть бургер-меню
burgerBtn.addEventListener('click', () => {
	header.classList.toggle('header--active')
	const openPopUps = document.querySelectorAll('.burger__categ-item--show');
	if (openPopUps) {
		openPopUps.forEach((popup) => {
			popup.classList.remove(burgerCategoryPopUpClass);
		});
	}

	burgerBtn.classList.toggle(activeBurgerClass);
	burgerNav.classList.toggle(showBurgerClass);
});

//закрыть попап бургер-меню
burgerPopUpBtn.forEach((element) => {
	element.addEventListener('click', () => {
		const parent = element.closest('.burger__categ-item--show');
		console.log(parent);
		parent.classList.remove(burgerCategoryPopUpClass);
	});
});

//открыть, закрыть search попап бургер-меню

mobileSearchBtn.addEventListener('click', () => {
	mobileSearchPopUp.classList.add(mobileSerchPopUpClass);
});

mobileSearchPopUpCloseBtn.addEventListener('click', () => {
	mobileSearchPopUp.classList.remove(mobileSerchPopUpClass);
});

//добавление тени для header при скроле
window.addEventListener('scroll', () => {
	if (window.scrollY > 0) {
		headerWrapper.classList.add(headerShadowClass);
	} else {
		headerWrapper.classList.remove(headerShadowClass);
	}
});
