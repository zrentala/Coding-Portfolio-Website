// const parentBgEl = document.querySelector(".bg");
// const childEls = document.querySelectorAll(".container-nav .text div");
// const textEl = document.querySelector(".text");
// const lineEl = document.querySelector("#line");
// const href1 = "about.html";
// const href2 = "art_design.html";
// const href3 = "music.html";
// const href4 = "code.html";

// childEls.forEach((el) => {
//   el.addEventListener("mouseover", (e) => {
//     const id = el.getAttribute("data-id");
//     const bgEl = parentBgEl.querySelector(`.id-${id}`);

//     parentBgEl.querySelectorAll("img").forEach((img) => {
//       img.style.display = "none";
//       img.style.animation = "";
//     });
//     bgEl.style.display = "block";
//     bgEl.style.animation = "anima 1s ease forwards";
    
//     switch(id) {
//       case "1":
//           textEl.setAttribute('href', href1);
//         break;
//       case "2":
//           textEl.setAttribute('href', href2);
//         break;
//       case "3":
//           textEl.setAttribute('href', href3);
//         break;
//       case "4":
//           textEl.setAttribute('href', href4);
//         break;
//       default:
//           textEl.setAttribute('href', "#");
//     } 
//   });
// });

const observerL = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('showL');
        } 
    });
});

const observerR = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('showR');
        } 
    });
});

const observerB = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('showB');
        } 
    });
});

const hiddenElementsL = document.querySelectorAll('.hiddenL');
const hiddenElementsR = document.querySelectorAll('.hiddenR');
const hiddenElementsB = document.querySelectorAll('.hiddenB');
hiddenElementsL.forEach((el) => observerL.observe(el));
hiddenElementsR.forEach((el) => observerR.observe(el));
hiddenElementsB.forEach((el) => observerB.observe(el));