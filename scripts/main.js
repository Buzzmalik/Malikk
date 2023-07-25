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


function comment(e) {

    e.preventDefault();

    let name = document.querySelector('input[name="author"]');
    let email = document.querySelector('input[name="email"]');
    let comment = document.querySelector('textarea[name="comment"]');

    if(empty(name) || empty(email) || empty(comment)) {

        Swal.fire({
            icon: 'error',
            title: 'Empty Inputs',
            text: 'Please fill in all fields before sending your comment'
        });

        return false;
    }

    else if (!verifyEmail(email.value)) {

        Swal.fire({
            icon: 'error',
            title: 'Invalid Email',
            text: 'Invalid Email, please use a valid email and try again'
        });

        return false;
    }

    $.ajax({
        method: 'post',
        url: '/send_email.php',
        data: {email: email.value, name: name.value, comment: comment.value},
        success: (data) => {
            Swal.fire({
                icon: data.status,
                text: data.message,
            });
        },
        error: (data) => {
            Swal.fire({
                icon: 'error',
                text: 'Unable to send your comment at the moment, please try again later'
            });
        }
    });

    return true;
}

function empty(value) {
    if(value.value.replaceAll(" ", "") == "") return true;
    return false;
}

function verifyEmail(email) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
};