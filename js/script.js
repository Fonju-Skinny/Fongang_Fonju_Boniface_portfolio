let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

// let themeToggler = document.querySelector('#theme-toggler');

// themeToggler.onclick = () =>{
//     themeToggler.classList.toggle('fa-sun');
//     if(themeToggler.classList.contains('fa-sun')){
//         document.body.classList.add('active');
//     }else{
//         document.body.classList.remove('active');
//     }
// }


document.querySelector("#theme-sun").addEventListener("click", () =>{
    document.body.classList.add('theme-sun')

    document.body.classList.remove('dark')
    document.body.classList.remove('theme-blue')
    document.body.classList.remove('theme-gradient')
    document.body.classList.remove('theme-purple')

})

document.querySelector("#theme-moon").addEventListener("click", () =>{
    document.body.classList.add('dark')

    document.body.classList.remove('theme-sun')
    document.body.classList.remove('theme-blue')
    document.body.classList.remove('theme-gradient')
    document.body.classList.remove('theme-purple')

})

document.querySelector("#theme-blue").addEventListener("click", () =>{
    document.body.classList.add('theme-blue')

    document.body.classList.remove('theme-sun')
    document.body.classList.remove('dark')
    document.body.classList.remove('theme-gradient')
    document.body.classList.remove('theme-purple')

})

document.querySelector("#theme-gradient").addEventListener("click", () =>{
    document.body.classList.add('theme-gradient')

    document.body.classList.remove('theme-sun')
    document.body.classList.remove('dark')
    document.body.classList.remove('theme-blue')
    document.body.classList.remove('theme-purple')

})



document.querySelector("#theme-purple").addEventListener("click", () =>{
    document.body.classList.add('theme-purple')

    document.body.classList.remove('theme-gradient')
    document.body.classList.remove('theme-sun')
    document.body.classList.remove('dark')
    document.body.classList.remove('theme-blue')

})




// digital clock

setInterval(() => {
    let hours = document.getElementById('hour');
          let minutes = document.getElementById('minutes');
          let seconds = document.getElementById('seconds');
          let ampm = document.getElementById('ampm');
          
          let h = new Date().getHours();
          let m = new Date().getMinutes();
          let s = new Date().getSeconds();

          let am = h >= 12 ? "PM" : "AM";
          // convert 24hours clock to 12hours clock
          if (h > 12) {
              h = h - 12;
          }


          // add zero before single digit number
          h = (h < 10)? "0" + h : h
          m = (m < 10)? "0" + m : m
          s = (s < 10)? "0" + s : s

          hours.innerHTML = h;
          minutes.innerHTML = m;
          seconds.innerHTML = s;
          ampm.innerHTML = am;
        })