const screen_1 = document.querySelector('.screen_1');
const screen_2 = document.querySelector('.screen_2');
const screen_3 = document.querySelector('.screen_3');

const click_1 = document.querySelector('.click_1');
const click_2 = document.querySelector('.click_2');
const click_3 = document.querySelector('.click_3');

click_1.addEventListener('click', () => {
    if (screen_1.classList.contains('move-top')) {
        screen_1.classList.remove('move-top');
    } else {
        screen_1.classList.add('move-top');
    };
});

click_2.addEventListener('click', () => {
    if (screen_2.classList.contains('move-top')) {
        screen_2.classList.remove('move-top');
    } else {
        screen_2.classList.add('move-top');
    };
});

click_3.addEventListener('click', () => {
    if (screen_3.classList.contains('move-top')) {
        screen_3.classList.remove('move-top');
    } else {
        screen_3.classList.add('move-top');
    };
});
