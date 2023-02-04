window.addEventListener('load', () => settingsPage.transitionPagePrimary());

// DOM pages
let pageOne = document.querySelector('#pagePrimary');
let pageTwo = document.querySelector('#pageSecond');

const settingsPage = {
    transitionPagePrimary: function() {
        setTimeout(() => {
            pageOne.style.marginRight = '200%';
            setTimeout(() => {
            pageTwo.style.display = "block";
            },500);
        }, 4900);                
    },
};