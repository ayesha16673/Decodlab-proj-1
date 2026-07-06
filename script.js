const secondnav = document.querySelector(".secondnav")
const sidebar = document.querySelector(".sidebar")

function showsecondnav() {
    if (sidebar.style.display === 'none') {
        sidebar.style.display = 'block'

    } else {
        sidebar.style.display = 'none'
    }

}
function hidesecondnav() {
    if (sidebar.style.display === 'none') {
        sidebar.style.display = 'block'
    } else {
        sidebar.style.display = 'none'
    }

}
 

 
function toggleMenu() {
    document.querySelector('.nav-items').classList.toggle('active');
}

function showMenu(category, element) {
    document.querySelectorAll('.menu-items').forEach(menu => {
        menu.classList.remove('active');
    });
    document.getElementById(category).classList.add('active');

    document.querySelectorAll('.nav-links li a').forEach(nav => {
        nav.classList.remove('active');
    });
    element.classList.add('active');
}


const slider = document.getElementById("slider");
let index = 0;

function autoSlide() {
    index++;
    if (index >= slider.children.length) {
        index = 0;  }
    slider.style.transform = `translateX(-${index * 100}%)`;
    slider.style.transition = "transform 0.5s ease-in-out";
}

setInterval(autoSlide, 3000);  

function formdata() {
    let a = document.getElementById('name').value;
    let b = document.getElementById('email').value;
    let c = document.getElementById('phone').value;
    let d = document.getElementById('date').value;
    let e = document.getElementById('time').value;
    let f = document.getElementById('people').value;
    let g = document.getElementById('message').value;



    if (a == "" || b == "" || c == "" || d == "" || d == "" || e == "" || f == "" || g == "") {

        alert('all fields are mandatory');
         
    }
}



function startCounter() {
    const counters = document.querySelectorAll('.number');
    const speed = 50; // Lower = Faster

    counters.forEach(counter => {
        const target = counter.getAttribute('data-target');
        let count = 0;

        const updateCount = () => {
            const increment = target / speed;
            if (count < target) {
                count += increment;
                counter.innerText = Math.ceil(count);
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });
}

// Run counter when page loads
window.onscroll = startCounter;

let arr1 = [256, 678, 320];
let arr2 = [345, 569, 600];

// Use map() to add corresponding elements
let result = arr1.map((a, i) => a + arr2[i]);

console.log(result);








 