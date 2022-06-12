/*eslint-env es6*/
/*global window, document, scrollX, scrollY*/
/*eslint no-undef: "error"*/
/*eslint no-console: ["error", { allow: ["log", "error", warn] }] */
const cursor = document.querySelector('.cursor');

window.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
    cursor.setAttribute('data-fromTop', (cursor.offsetTop - scrollY))
    cursor.setAttribute('data-fromSide', (cursor.offsetSide - scrollX))
});
window.addEventListener('scroll', () => {
    const fromTop = parseInt(cursor.getAttribute('data-fromTop'));
    cursor.style.top = scrollY + fromTop + 'px';
    const fromSide = parseInt(cursor.getAttribute('data-fromSide'));
    cursor.style.left = scrollY + fromSide + 'px';
});

window.addEventListener('click', () => {
    if (cursor.classList.contains('click')) {
        cursor.classList.remove('click');
        // Triggering a Dom Reflow
        void cursor.offsetWidth;
        cursor.classList.add('click');
    } else {
        cursor.classList.add('click')
    }
})