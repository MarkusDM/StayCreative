'use strict';

$(document).ready(function () {
	// Активация Бургера

	$('.header__burger').on('click', function () {
		$('.header__burger').toggleClass('open');
		// $("main").toggleClass("main-none")
	});

	// Кастомный селект

	$('.select').on('click', '.select-head', function () {
		if ($(this).hasClass('open')) {
			$(this).removeClass('open');
			$(this).next().fadeOut();
		} else {
			$('.select-head').removeClass('open');
			$('.select-list').fadeOut();
			$(this).addClass('open');
			$(this).next().fadeIn();
		}
	});

	$('.select').on('click', '.select-item', function () {
		$('.select-head').removeClass('open');
		$(this).parent().fadeOut();
		$(this).parent().prev().text($(this).text());
		$(this).parent().prev().prev().val($(this).attr('data-value'));
	});

	$(document).click(function (e) {
		if (!$(e.target).closest('.select').length) {
			$('.select-head').removeClass('open');
			$('.select-list').fadeOut();
		}
	});

	// форма спасибо за регу

	$('.thanks-reg__close').click(function () {
		$('.thanks-reg').removeClass('active');
	});

	// форма как получить одобрение

	$('.art-modal-open').click(function () {
		$('.art-modal').addClass('active');
	});

	$('.art-modal__close').click(function () {
		$('.art-modal').removeClass('active');
	});

	// редактировние профиль магазина

	$('.profile-market__btn').click(function () {
		$('.profile-market-modal').addClass('active');
	});

	$('.profile-market-modal__close').click(function () {
		$('.profile-market-modal').removeClass('active');
	});

	////////////////////////////////////////////////

	$('.profile-market-thanks__close').click(function () {
		$('.profile-market-thanks').removeClass('active');
	});

	// редактировние профиля пользователя

	$('.profile-salesman__btn').click(function () {
		$('.profile-user-modal').addClass('active');
	});

	$('.profile-user-modal__close').click(function () {
		$('.profile-user-modal').removeClass('active');
	});

	// /////////////////////////////////////////////////

	// редактировние профиля пользователя 2

	$('.profile-salesman__btn-two').click(function () {
		$('.personal-information-modal').addClass('active');
	});

	$('.personal-information-modal__close').click(function () {
		$('.personal-information-modal').removeClass('active');
	});

	// /////////////////////////////////////////////////

	// убрать модалку спасибо после изменения данных профиля пользователя

	$('.personal-information-thanks__close').click(function () {
		$('.personal-information-thanks').removeClass('active');
	});

	$('.profile-user-thanks__close').click(function () {
		$('.profile-user-thanks').removeClass('active');
	});

	// описание магазина

	$('.profile-description__btn').click(function () {
		$('.profile-description-modal').addClass('active');
	});

	$('.profile-description-modal__close').click(function () {
		$('.profile-description-modal').removeClass('active');
	});

	// изменить описание магазина два

	$('.profile-info-p__btn').click(function () {
		$('.profile-description-modal-two').addClass('active');
	});

	$('.profile-description-modal-two__close').click(function () {
		$('.profile-description-modal-two').removeClass('active');
	});

	//  удалить магазин
	$('.button--m').click(function () {
		$('.del-modal').addClass('active');
	});

	$('.del-modal__close').click(function () {
		$('.del-modal').removeClass('active');
	});

	//

	$('.button--user').click(function () {
		$('.del-modal-user').addClass('active');
	});

	$('.del-modal-user__close').click(function () {
		$('.del-modal-user').removeClass('active');
	});

	// смена шапки

	$('.profile-header__item--replace').click(function () {
		$('.cover-modal').addClass('active');
	});

	$('.cover-modal__close').click(function () {
		$('.cover-modal').removeClass('active');
	});

	// cтрелка назад в модальном окне смены шапки

	$('.cover-modal__block-prev').click(function () {
		$('.cover-modal__block-prev').css('display', 'none');
		$('.cover-modal__center').css('display', 'none');
		$('.cover-modal__center-one').css('display', 'block');
	});

	// смена аватарки

	$('.profile-user__item--replace').click(function () {
		$('.avatar-modal').addClass('active');
	});

	$('.avatar-modal__close').click(function () {
		$('.avatar-modal').removeClass('active');
	});

	// cтрелка назад в модальном окне аватарки

	$('.avatar-modal__block-prev').click(function () {
		$('.avatar-modal__block-prev').css('display', 'none');
		$('.avatar-modal__center').css('display', 'none');
		$('.avatar-modal__center-one').css('display', 'block');
	});

	$('.avatar-modal-error__prev').click(function () {
		$('.avatar-modal').addClass('active');
		$('.avatar-modal-error').removeClass('active');
	});

	$('.avatar-modal-error__close').click(function () {
		$('.avatar-modal-error').removeClass('active');
	});

	// выйти из моадлки спасибо за регистрацию
	$('.modal-thanks-r__close').click(function () {
		$('.modal-thanks-r').removeClass('active');
	});

	// Ошибка изображения шапки

	// $(".profile__del > button").click(function () {
	//     $(".del-modal").addClass("active");

	// });

	$('.cover-modal-error__prev').click(function () {
		$('.cover-modal').addClass('active');
		$('.cover-modal-error').removeClass('active');
	});

	$('.cover-modal-error__close').click(function () {
		$('.cover-modal-error').removeClass('active');
	});

	// Успешно изменена картинка в пашпке

	$('.cover-modal-thanks__close').click(function () {
		$('.cover-modal-thanks').removeClass('active');
	});

	// удалить шапку

	$('.profile-header__item--del').click(function () {
		$('.cover-modal-del').addClass('active');
	});

	$('.cover-modal-del__close').click(function () {
		$('.cover-modal-del').removeClass('active');
	});

	$('.cover-modal-del__btn').click(function () {
		$('.cover-modal-del').removeClass('active');
	});

	$('.profile-header').each(function () {
		let more = $(this).find('.profile-header__btn');
		let hide = $(this).find('.profile-header__lists');
		hide.hide(300);
		more.click(function () {
			hide.slideToggle(300);
			more.toggleClass('active');
		});
	});


	$(document).mouseup(function (e) {
		var container = $(".profile-user__lists");
		if (container.has(e.target).length === 0) {
			container.hide();
		}
	});

	$(document).mouseup(function (e) {
		var container = $(".profile-header__lists");
		if (container.has(e.target).length === 0) {
			container.hide();
		}
	});

	$('.profile-user').each(function () {
		let more = $(this).find('.profile-user__avatar-btn');
		let hide = $(this).find('.profile-user__lists');
		hide.hide(300);
		more.click(function () {
			hide.slideToggle(300);
			more.toggleClass('active');
		});
	});

	$('.lk-m__search-input').keyup(function () {
		if ($(this).val()) {
			$('.lk-m__search-show').show(300);
		} else {
			$('.lk-m__search-show').hide(300);
		}
	});
	//  $("button").click(function () {
	//     $(".lk-m__search-input").val('');
	//     $(this).hide(300).slideToggle(300);
	//  });

	//  табы лк профиля

	$('.profile__nav-lists-item').click(function () {
		var id = $(this).attr('data-tab'),
			content = $('.profile[data-tab="' + id + '"]');

		$('.profile__nav-lists-item.active').removeClass('active'); // 1
		$(this).addClass('active'); // 2

		$('.profile.active').removeClass('active'); // 3
		content.addClass('active'); // 4
	});

	// $(".art-modal__close").click( function() {
	//     $(".art-modal").removeClass("active");

	// });

	//  закачка файла
});



let dt = new DataTransfer();
const filesInput = document.querySelector(".input-file input[type=file]");
const inputFileLists = document.querySelector('.input-file-list');

function createInputFileListItem(fileName) {
	const inputFileListItem = document.createElement("div");

	inputFileListItem.classList.add('input-file-list-item', 'input-file-list-item--d');

	inputFileListItem.innerHTML = 
		'<span class="input-file-list-name">' +
		fileName +
		'</span>' +
		'<a style=" display: none;" onclick="removeFilesItem(this); return false;" class="input-file-list-remove">x</a>' +
		'<div class="input-file-list-animation"><div class="input-file-list-animation-circle"><svg  viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="svg-ops"d="M1 13C1 19.6274 6.37258 25 13 25C19.2907 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13Z" stroke="white" stroke-width="0.3" /><path class="svg-white" d="M1 13C1 19.6274 6.37258 25 13 25C19.2907 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13Z" stroke="#000" stroke-width="0.3" /></svg></div><div class="input-file-list-image"><img src="./img/inputclock.svg" alt=""></div><div>';

	return inputFileListItem;
}


if (filesInput) {
	filesInput.addEventListener("change", () => {
		const files = filesInput.files;

		for (let i = 0; i < files.length; i++) {
			const file = files[i];

			const reader = new FileReader();

			const inputFileListItem = createInputFileListItem(file.name);
			const inputFileListRemove = inputFileListItem.querySelector('.input-file-list-remove');
			const inputFileListAnimation = inputFileListItem.querySelector('.input-file-list-animation');

			inputFileLists.appendChild(inputFileListItem);
			
			reader.addEventListener("load", () => {

				inputFileListAnimation.style.display = 'none';
				inputFileListItem.classList.remove('input-file-list-item--d');
				inputFileListRemove.style.display = 'inline-block';

				console.log(inputFileListItem);
			});

			reader.readAsDataURL(file);
			dt.items.add(file);
		}

		filesInput.files = dt.files;
		console.log(dt.files);
	});
}



// var dt = new DataTransfer();

// $('.input-file input[type=file]').on('change', function () {
// 	let $files_list = $(this).closest('.input-file').next();

// 	for (var i = 0; i < this.files.length; i++) {
// 		let new_file_input =
// 			'<div class="input-file-list-item">' +
// 			'<span class="input-file-list-name">' +
// 			this.files.item(i).name +
// 			'</span>' +
// 			'<a href="#" onclick="removeFilesItem(this); return false;" class="input-file-list-remove">x</a>' +
// 			'</div>';
// 		$files_list.append(new_file_input);
// 		dt.items.add(this.files.item(i));
// 	}
// 	this.files = dt.files;
// });

function removeFilesItem(target) {
	let name = $(target).prev().text();
	let input = $(target).closest('.input-file-row').find('input[type=file]');
	$(target).closest('.input-file-list-item').remove();
	for (let i = 0; i < dt.items.length; i++) {
		if (name === dt.items[i].getAsFile().name) {
			dt.items.remove(i);
		}
	}
	input[0].files = dt.files;
}




let cropperCanvas = '';
let camanCanvas = {};
let imagesExtentionsCanvas = ["image/png", "image/jpg", "image/jpeg", "image/gif"];
function cropImgFuncCanvas(event) {
	let result = document.querySelector('#canvas');
	let fileNameCanvas = "";
	if (event.target.files.length) {
		// start file reader
		if (imagesExtentionsCanvas.includes(event.target.files[0].type)) {
			console.log(event);
			fileNameCanvas = event.target.files[0].name;
			const reader = new FileReader();
			reader.onload = function (event) {

				if (event.target.result) {
					// create new image
					let img = document.createElement('img');
					img.id = 'image';
					img.src = event.target.result;
					img.width = 315;
					img.height = 315;
					// clean result before
					result.innerHTML = '';
					// append new image
					result.appendChild(img);
					// init cropper
					cropperCanvas = new Cropper(img, {
						zoomable: true,

						viewMode: 3,
						background: false,
						rotatable: true,
						// minContainerWidth: 315,
						// minContainerHeight: 315,
						ready: function () {
							croppable = true;
						},

						ready: function (event) {
							this.cropperCanvas = cropperCanvas;
						},
					});

					document.getElementsByClassName(
						'cover-modal__center',
					)[0].style.display = 'block';

					document.getElementsByClassName(
						'cover-modal__center-one',
					)[0].style.display = 'none';
					document.getElementsByClassName(
						'cover-modal__block-prev',
					)[0].style.display = 'flex';






				}
			};
			reader.readAsDataURL(event.target.files[0]);
		} else {
			$(".cover-modal-error").addClass("active");
		}







	}

	camanCanvas.cropper = cropperCanvas;
	camanCanvas.getData = function () {

		cropperCanvas
			.getCroppedCanvas({
				maxWidth: 4096,
				maxHeight: 4096,
				fillColor: '#fff',
				imageSmoothingEnabled: true,
				imageSmoothingQuality: 'high',
			})
			.toBlob((blob) => {
				console.log(fileNameCanvas);
				console.log(blob);
				var fileBlob = new File([blob], fileNameCanvas, {
					type: blob.type,
					lastModified: Date.now(),
				});
				var dt = new DataTransfer();
				dt.items.add(fileBlob);
				var filelist = dt.files;
				$('#input-to-ajax-canvas')[0].files = filelist;
				document.querySelector("#input-to-ajax-canvas").dispatchEvent(new CustomEvent("upload"));

				//document.querySelector(".cover-modal__save-btn").dispatchEvent(new CustomEvent("update")) - триггер события, проверка
			});
	};
	document.querySelector('.shop-cover-modal__save-btn, .cover-modal__save-btn')
		.addEventListener('update', camanCanvas.getData);



}



let cropperAvatar = '';
let camanAvatar = {};
let imagesExtentions = ["image/png", "image/jpg", "image/jpeg", "image/gif"];
function cropImgFunc(event) {
	let result = document.querySelector('#canvas-avatar');
	let imgPreview = document.querySelector('#preImg');
	let imgPreviewTwo = document.querySelector('#preImgTwo');
	let fileNameAvatar = "";
	if (event.target.files.length) {
		// start file reader
		if (imagesExtentions.includes(event.target.files[0].type)) {
			console.log(event);
			fileNameAvatar = event.target.files[0].name;
			const reader = new FileReader();
			reader.onload = function (event) {

				if (event.target.result) {
					// create new image
					let img = document.createElement('img');
					img.id = 'image';
					img.src = event.target.result;
					img.width = 305;
					img.height = 305;

					// clean result before
					result.innerHTML = '';
					// append new image
					result.appendChild(img);
					// init cropper
					cropperAvatar = new Cropper(img, {

						dragMode: 'move',
						aspectRatio: 1,
						autoCrop: true,
						autoCropArea: 0.68,
						center: false,
						cropBoxMovable: false,
						cropBoxResizable: false,
						guides: false,
						minContainerWidth: 305,
						minContainerHeight: 305,
						showZoomer: false,
						ready: function (event) {

							this.cropperAvatar = cropperAvatar;
						},
						crop: function (event) {
							if (!this.cropperAvatar) this.cropperAvatar = cropperAvatar;
							let imgSrc = this.cropperAvatar
								.getCroppedCanvas({
									width: 170,
									height: 170
								}).toDataURL('image/png');
							console.log(imgPreview);
							imgPreview.src = imgSrc;
							imgPreviewTwo.src = imgSrc;

						},
					});


					document.getElementsByClassName(
						'avatar-modal__center',
					)[0].style.display = 'block';
					document.getElementsByClassName(
						'avatar-modal__center-one',
					)[0].style.display = 'none';
					document.getElementsByClassName(
						'avatar-modal__block-prev',
					)[0].style.display = 'flex';

				}
			};
			reader.readAsDataURL(event.target.files[0]);
		} else {
			$(".cover-modal-error").addClass("active");
		}







	}

	camanAvatar.cropper = cropperAvatar;
	camanAvatar.getData = function () {
		console.log('sasdsad');
		cropperAvatar
			.getCroppedCanvas({
				maxWidth: 4096,
				maxHeight: 4096,
				fillColor: '#fff',
				imageSmoothingEnabled: true,
				imageSmoothingQuality: 'high',
			})
			.toBlob((blob) => {
				console.log(fileNameAvatar);
				console.log(blob);
				var fileBlob = new File([blob], fileNameAvatar, {
					type: blob.type,
					lastModified: Date.now(),
				});
				var dt = new DataTransfer();
				dt.items.add(fileBlob);
				var filelist = dt.files;
				$('#input-to-ajax')[0].files = filelist;
				document.querySelector("#input-to-ajax").dispatchEvent(new CustomEvent("upload"));

				//document.querySelector(".avatar-modal__save-btn").dispatchEvent(new CustomEvent("update")) - триггер события, проверка
			});
	};
	document.querySelector('.avatar-modal__save-btn, .shop-avatar-modal__save-btn')
		.addEventListener('update', camanAvatar.getData);



}




// глобальное модальное окно с успешной регистрацией итд

$('.global-thanks__close').click(function () {
	$('.global-thanks').removeClass('active');
});

// модальное окно жалоб

$('.complaint-modal-open').click(function () {
	$('.complaint-modal').addClass('active');
});

$('.complaint-modal__close').click(function () {
	$('.complaint-modal').removeClass('active');
});

//  модальное окно для с подписчиками

$('.profile-user__follower').click(function () {
	$('.modal-follow').addClass('active');
	$('.modal-follow__item--follows').addClass('active');
	$('.modal-follow__inner--one').addClass('active');
});

$('.profile-user__follows').click(function () {
	$('.modal-follow').addClass('active');
	$('.modal-follow__item--follow').addClass('active');
	$('.modal-follow__inner--two').addClass('active');
});

$('.modal-follow__item--follows').click(function () {
	$('.modal-follow__item--follows').addClass('active');
	$('.modal-follow__item--follow').removeClass('active');
	$('.modal-follow__inner--one').addClass('active');
	$('.modal-follow__inner--two').removeClass('active');
});

$('.modal-follow__item--follow').click(function () {
	$('.modal-follow__item--follow').addClass('active');
	$('.modal-follow__item--follows').removeClass('active');
	$('.modal-follow__inner--two').addClass('active');
	$('.modal-follow__inner--one').removeClass('active');
});

$('.modal-follow__close').click(function () {
	$('.modal-follow__inner--one').removeClass('active');
	$('.modal-follow__inner--two').removeClass('active');
	$('.modal-follow').removeClass('active');
	$('.modal-follow__item--follow').removeClass('active');
	$('.modal-follow__item--follows').removeClass('active');
});







//  табы лк продажи

$('.lk-sales__item').click(function () {
	var id = $(this).attr('data-tab'),
		content = $('.lk-sales__chart-wrap[data-tab="' + id + '"]');

	$('.lk-sales__item.active').removeClass('active'); // 1
	$(this).addClass('active'); // 2

	$('.lk-sales__chart-wrap.active').removeClass('active'); // 3
	content.addClass('active'); // 4
});

$('.lk-sales__select').each(function () {
	const _this = $(this),
		selectOption = _this.find('option'),
		selectOptionLength = selectOption.length,
		selectedOption = selectOption.filter(':selected'),
		duration = 450; // длительность анимации

	_this.hide();
	_this.wrap('<div class="lk-sales__select"></div>');
	$('<div>', {
		class: 'new-select',
		text: _this.children('option:disabled').text(),
	}).insertAfter(_this);

	const selectHead = _this.next('.new-select');
	$('<div>', {
		class: 'new-select__list',
	}).insertAfter(selectHead);

	const selectList = selectHead.next('.new-select__list');
	for (let i = 1; i < selectOptionLength; i++) {
		$('<div>', {
			class: 'new-select__item',
			html: $('<span>', {
				text: selectOption.eq(i).text(),
			}),
		})
			.attr('data-value', selectOption.eq(i).val())
			.appendTo(selectList);
	}

	const selectItem = selectList.find('.new-select__item');
	selectList.slideUp(0);
	selectHead.on('click', function () {
		if (!$(this).hasClass('on')) {
			$(this).addClass('on');
			selectList.slideDown(duration);

			selectItem.on('click', function () {
				let chooseItem = $(this).data('value');

				$('select').val(chooseItem).attr('selected', 'selected');
				$('select').trigger('change');
				selectHead.text($(this).find('span').text());

				selectList.slideUp(duration);
				selectHead.removeClass('on');
			});
		} else {
			$(this).removeClass('on');
			selectList.slideUp(duration);
		}
	});
});

$('.select-global').each(function () {
	const _this = $(this),
		selectOption = _this.find('option'),
		selectOptionLength = selectOption.length,
		selectedOption = selectOption.filter(':selected'),
		duration = 450; // длительность анимации

	_this.hide();
	_this.wrap('<div class="select-global"></div>');
	$('<div>', {
		class: 'new-select',
		text: _this.children('option:disabled').text(),
	}).insertAfter(_this);

	const selectHead = _this.next('.new-select');
	$('<div>', {
		class: 'new-select__list',
	}).insertAfter(selectHead);

	const selectList = selectHead.next('.new-select__list');
	for (let i = 1; i < selectOptionLength; i++) {
		$('<div>', {
			class: 'new-select__item',
			html: $('<span>', {
				text: selectOption.eq(i).text(),
			}),
		})
			.attr('data-value', selectOption.eq(i).val())
			.appendTo(selectList);
	}

	const selectItem = selectList.find('.new-select__item');
	selectList.slideUp(0);
	selectHead.on('click', function () {
		if (!$(this).hasClass('on')) {
			$(this).addClass('on');
			selectList.slideDown(duration);

			selectItem.on('click', function () {
				let chooseItem = $(this).data('value');

				$('select').val(chooseItem).attr('selected', 'selected');
				selectHead.text($(this).find('span').text());

				selectList.slideUp(duration);
				selectHead.removeClass('on');
			});
		} else {
			$(this).removeClass('on');
			selectList.slideUp(duration);
		}
	});
});

$('.product-lk__content-faq').each(function () {
	let more = $(this).find('.product-lk__content-faq-btn');
	let hide = $(this).find('.product-lk__content-faq-inner');
	hide.hide(300);
	more.click(function () {
		hide.slideToggle(300);
		more.toggleClass('active');
	});
});

//  табы Начисления и документы

$('.charges__item').click(function () {
	var id = $(this).attr('data-tab'),
		content = $('.charges__block[data-tab="' + id + '"]');

	$('.charges__item.active').removeClass('active'); // 1
	$(this).addClass('active'); // 2

	$('.charges__block.active').removeClass('active'); // 3
	content.addClass('active'); // 4
});

//  модалка на страницы коллекции в лк

$('.fonts-lk__edit').click(function () {
	$('.edit-g').addClass('active');
});

$('.edit-g__close').click(function () {
	$('.edit-g').removeClass('active');
});

//  табы Обновления магазинов

$('.updates__item').click(function () {
	var id = $(this).attr('data-tab'),
		content = $('.updates__wrap[data-tab="' + id + '"]');

	$('.updates__item.active').removeClass('active'); // 1
	$(this).addClass('active'); // 2

	$('.updates__wrap.active').removeClass('active'); // 3
	content.addClass('active'); // 4
});

//  табы Уведомления

$('.notifications__item').click(function () {
	var id = $(this).attr('data-tab'),
		content = $('.notifications__wrap[data-tab="' + id + '"]');

	$('.notifications__item.active').removeClass('active'); // 1
	$(this).addClass('active'); // 2

	$('.notifications__wrap.active').removeClass('active'); // 3
	content.addClass('active'); // 4
});

// $('.discount-product__box').click(function () {
// 	$(this).addClass('active').siblings().removeClass('active');
// });

$('.merchandise-ar input:checkbox').click(function () {
	$('.merchandise__checkbox-strong b').html(
		$('.merchandise-ar input:checkbox:checked').length,
	);
});

new AirDatepicker('#lk-m__calendar', {
	range: true,
	multipleDatesSeparator: ' - ',
	visible: true,
	inline: true,
});

$(document).on("click", "#reset-filter", function () {
	airCalendar.clear();
});

jQuery(document).ready(function ($) {
	var maxFileSize = 2 * 1024 * 1024; // (байт) Максимальный размер файла (2мб)
	var queue = {};
	var form = $('form#uploadImages');
	var imagesList = $('#uploadImagesList');
	var dtItem = new DataTransfer();
	var itemPreviewTemplate = $(".template-wrap .item.template").clone();
	itemPreviewTemplate.removeClass('template');


	$('#addImages').on('change', function () {
		var files = this.files;

		for (var i = 0; i < files.length; i++) {
			var file = files[i];

			if (!file.type.match(/image\/(jpeg|jpg|png|gif)/)) {
				alert('Фотография должна быть в формате jpg, png или gif');
				continue;
			}

			if (file.size > maxFileSize) {
				alert('Размер фотографии не должен превышать 2 Мб');
				continue;
			}

			preview(files[i]);
			dtItem.items.add(file);
		}

		this.files = dtItem.files;
		console.log(dtItem.items);

	});

	// Создание превью
	function preview(file) {
		var reader = new FileReader();
		reader.addEventListener('load', function (event) {
			var img = document.createElement('img');

			var itemPreview = itemPreviewTemplate.clone();

			itemPreview.find('.img-wrap img').attr('src', event.target.result);
			itemPreview.data('id', file.name);

			imagesList.append(itemPreview);

			queue[file.name] = file;
		});
		reader.readAsDataURL(file);
	}

	console.log(imagesList);

	// Удаление фотографий
	imagesList.on('click', '.delete-link', function () {
		var item = $(this).closest('.item'),
			id = item.data('id');

		// delete queue[id];
		for (let i = 0; i < dtItem.items.length; i++) {
			if (id === dtItem.items[i].getAsFile().name) {
				dtItem.items.remove(i);
			}
		}
		item.remove();
		$("#addImages")[0].files = dtItem.files;
	});

	// Отправка формы
	form.on('submit', function (event) {
		var formData = new FormData(this);

		for (var id in queue) {
			formData.append('images[]', queue[id]);
		}

		$.ajax({
			url: $(this).attr('action'),
			type: 'POST',
			data: formData,
			async: true,
			success: function (res) {
				alert(res);
			},
			cache: false,
			contentType: false,
			processData: false,
		});

		return false;
	});
});

$(function () {
	var target = $('[data-field="target"]');

	$(document).on('input', '[data-field="item"]', function () {
		var item = $(this);

		target.html(item.val().length);
	});
});

$(function () {
	var target = $('[data-field="targetTwo"]');

	$(document).on('input', '[data-field="itemTwo"]', function () {
		var item = $(this);

		target.html(item.val().length);
	});
});

$(function () {
	var target = $('[data-field="targetThree"]');

	$(document).on('input', '[data-field="itemThree"]', function () {
		var item = $(this);

		target.html(item.val().length);
	});
});

$(document).on(
	'change',
	'.checkbox-purchases > input[type=checkbox]',
	function () {
		var $this = $(this),
			$chks = $(document.getElementsByName(this.name)),
			$all = $chks.filter('.checkbox-purchases--all');

		if ($this.hasClass('checkbox-purchases--all')) {
			$chks.prop('checked', $this.prop('checked'));
		} else
			switch ($chks.filter(':checked').length) {
				case +$all.prop('checked'):
					$all.prop('checked', false).prop('indeterminate', false);
					break;
				case $chks.length - !!$this.prop('checked'):
					$all.prop('checked', true).prop('indeterminate', false);
					break;
				default:
					$all.prop('indeterminate', true);
			}
	},
);




jQuery(function ($) {
	$('.product-select__span').click(function () {
		$(this).toggleClass('active');
		if ($(this).parent().find('.product-select__list').length) {
			$(this).parent().find('.product-select__list').slideToggle(200);

			return false;
		}
	});
});



let cropperCanvasImg = '';
let camanCanvasImg = {};
let imagesExtentionsCanvasImg = ["image/png", "image/jpg", "image/jpeg", "image/gif"];
function cropImgFuncCanvasProd(event) {
	let result = document.querySelector('#img-modal-canvas');
	let fileNameCanvas = "";
	if (event.target.files.length) {
		// start file reader
		if (imagesExtentionsCanvas.includes(event.target.files[0].type)) {
			console.log(event);
			fileNameCanvas = event.target.files[0].name;
			const reader = new FileReader();
			reader.onload = function (event) {

				if (event.target.result) {
					// create new image
					let img = document.createElement('img');
					img.id = 'image';
					img.src = event.target.result;
					img.width = 305;
					img.height = 305;
					// clean result before
					result.innerHTML = '';
					// append new image
					result.appendChild(img);
					// init cropper
					cropperCanvas = new Cropper(img, {
						zoomable: false,
						viewMode: 0,
						background: false,
						rotatable: true,
						minContainerWidth: 305,
						minContainerHeight: 305,
						ready: function () {
							croppable = true;
						},

						ready: function (event) {
							this.cropperCanvas = cropperCanvas;
						},
					});

					document.getElementsByClassName(
						'img-modal',
					)[0].classList.add('active');



				}
			};
			reader.readAsDataURL(event.target.files[0]);
		} else {
			$(".cover-modal-error").addClass("active");
		}







	}

	camanCanvas.cropper = cropperCanvas;
	camanCanvas.getData = function () {

		cropperCanvas
			.getCroppedCanvas({
				maxWidth: 4096,
				maxHeight: 4096,
				fillColor: '#fff',
				imageSmoothingEnabled: true,
				imageSmoothingQuality: 'high',
			})
			.toBlob((blob) => {
				console.log(fileNameCanvas);
				console.log(blob);
				var fileBlob = new File([blob], fileNameCanvas, {
					type: blob.type,
					lastModified: Date.now(),
				});
				var dt = new DataTransfer();
				dt.items.add(fileBlob);
				var filelist = dt.files;
				$('#input-img-modal-ajax')[0].files = filelist;
				document.querySelector("#input-img-modal-ajax").dispatchEvent(new CustomEvent("upload"));

				//document.querySelector(".avatar-modal__save-btn").dispatchEvent(new CustomEvent("update")) - триггер события, проверка
			});
	};
	document.querySelector('.product-img__file-upload-btn')
		.addEventListener('update', camanCanvas.getData);



}


$('.loading-modal__close').click(function () {
	$('.loading-modal').removeClass('active');
});


let globalInput = document.querySelector('.chk-all');

let wrapperInputs = document.querySelector('.profile-password__inner');

if (globalInput) {
	globalInput.addEventListener(
		'change',
		(e) => {
			const checked = e.target.checked;
			console.log(e.target);
			document.querySelectorAll('.profile-password__checkbox-check').forEach(
				(el) => {
					el.checked = checked;
				}
			);
		}
	);
}


if (wrapperInputs) {
	wrapperInputs.addEventListener(
		'change',
		(e) => {
			const allchecksLen = document.querySelectorAll('.profile-password__checkbox-check ').length;
			const selectedChecksLen = document.querySelectorAll('.profile-password__checkbox-check:checked').length;
			const main = document.querySelector('.chk-all');
			main.indeterminate = selectedChecksLen > 0 && selectedChecksLen < allchecksLen;
			main.checked = selectedChecksLen === allchecksLen;
		}
	);
}







