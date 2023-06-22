/*var faq_open = document.querySelectorAll('.faq_open');
var faq_item = document.querySelectorAll('.faq_item');

// Добавляем обработчики событий для кнопок открытия
faq_open.forEach(function(faq_open) {
    faq_open.addEventListener('click', showContent);
});

// Добавляем обработчики событий для кнопок закрытия
faq_item.forEach(function(faq_item) {
    faq_item.addEventListener('click', hideContent);
});*/

window.addEventListener('load', function() { // after window.onload
    document.querySelectorAll('.faq_item').forEach(function (el) { // all faq_item elements
        el.querySelector('.faq_item_toggle').onclick = function(e) { // on click by +/-
            e.preventDefault(); // remove default action for link (transition)
            el.classList.toggle('faq_open'); // toggle faq_open class on faq_item
        }
    });


    document.querySelector('.menu-button_sw').onclick = function(e) {
        e.preventDefault();
        document.querySelector('body').classList.toggle('mobile_menu');
    }
});