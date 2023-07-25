let slideImg = document.getElementById('slide');
let images = new Array(
    "cocoa.jpg",
    "Cocoa5.jpg",
    "cocoa2.jpg",
    "cocoa3.jpg",
    "Cocoa4.png",
    "cocoa1.jpg",
);

let len = images.length;
var i = 0;

function slider() {
    if(i > len-1){
        i = 0
    }
    slideImg.src = `images/${images[i]}`;
    i++;
    setTimeout('slider()', 3000);
}

function changeBackgroundColor(color){
    document.body.style.background = color;
}

function makeChange(){
    changeBackgroundColor("Black")
}


let menu_btn = document.querySelector('.menu-btn');
let navmenu  = document.querySelector('.navmenu');

let nav_links = document.querySelectorAll('.hammenu li');

nav_links.forEach(nav_link => {
    nav_link.addEventListener('click', () => {
        navmenu.classList.toggle('active');
    });
})

menu_btn.addEventListener('click', () => {
    navmenu.classList.toggle('active');
})


function scrollMe(self, direction="left") {
    let scrollbox = self.parentNode.querySelector('.scroll-box');

    
    if(direction=="left") {
        console.log("left");
        scrollbox.scrollBy(-400, 0);
    }
    else {
        console.log("right");
        scrollbox.scrollBy(400, 0);
    }
}
