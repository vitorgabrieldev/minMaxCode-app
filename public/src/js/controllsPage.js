window.addEventListener('load', () => settingsPage.transitionPagePrimary());
document.querySelector('#btnNextPage').addEventListener('click', () => settingsPage.transitionPageThird());

// // DOM pages
let pageOne = document.querySelector('#pagePrimary').style.display = 'block'
let pageTwo = document.querySelector('#pageSecond').style.display = 'none'
let pageThird = document.querySelector('#pageThird').style.display = 'none'

const settingsPage = {
    transitionPagePrimary: function() {
        setTimeout(() => {
            pageOne.style.marginRight = '200%';
            setTimeout(() => {
                pageTwo.style.display = "block";
            },500);
        }, 4900);                
    },
    transitionPageThird: function() {
        pageTwo.style.marginRight = '200%';
        setTimeout(() => {
            pageThird.style.display = "block";
        },500);
    },
};

