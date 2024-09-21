let slideMohtava = document.querySelectorAll(".slideMohtava");
let nextMohtava = document.querySelector(".nextMohtava");
let prevMohtava = document.querySelector(".prevMohtava");
let counterMohtava = 0;

slideMohtava.forEach((item, index) => {
item.style.left = `${index/4 }%`;
});
//creat bulletMohtava
let paginationMohtava = document.querySelector(".paginationMohtava");
function createBullet() {
  slideMohtava.forEach((_, index) => {
    paginationMohtava.insertAdjacentHTML(
      "beforeend",
      `<div class="bulletMohtava ${
        index === 0 ? "activeBullet" : ""
      }" data-id=${index}></div>`
    );
  });
}
paginationMohtava.addEventListener("click", function (e) {
  if (e.target.classList.contains("bulletMohtava")) {
    const clicked = e.target;
    const id = +clicked.dataset.id;
    const allBulletMohtava = document.querySelectorAll(".bulletMohtava");
    allBulletMohtava.forEach((item) => {
      item.classList.remove("activeBullet");
      clicked.classList.add("activeBullet");
    });
    counterSlide(id);
    isDisabeld();
  } else {
    console.log("not-ok");
  }
});
createBullet();
//disabled......and.......enabled!//
const isDisabeld = () => {
  if (counterMohtava === slideMohtava.length - 1) {
    nextMohtava.disabled = false;
    prevMohtava.disabled = true;
  } else if (counterMohtava === 0) {
    nextMohtava.disabled = true;
    prevMohtava.disabled = false;
  } else {
    nextMohtava.disabled = false;
    prevMohtava.disabled = false;
  }
};
//move sliderMohtava ..... nextMohtava...prevMohtava //
function counterSlide(c) {
  slideMohtava.forEach((item, index) => {
    item.style.transform = `translateX(${(index - c)*30}%)`;
  });
}
counterSlide(counterMohtava);
nextMohtava.addEventListener("click", function () {
  repeatSlide("right");
});
counterSlide(counterMohtava);
prevMohtava.addEventListener("click", function () {
  repeatSlide("left");
});
//key left........key right//
// window.addEventListener("keydown", function (event) {
//   if (event.key === "ArrowRight") {
//     repeatSlide("right");
//   }
//   if (event.key === "ArrowLeft") {
//     repeatSlide("left");
//   }
// });
function repeatSlide(direct) {
  if (direct === "right") {
    if (counterMohtava === 0) {
      counterMohtava = 0;
    } else {
      counterMohtava--;
    }
    isDisabeld();
    counterSlide(counterMohtava);
    const allBulletMohtava = document.querySelectorAll(".bulletMohtava");
    allBulletMohtava.forEach((item) => {
      item.classList.remove("activeBullet");
      if (+item.dataset.id === counterMohtava) {
        item.classList.add("activeBullet");
      }
    });
  }

  if (direct === "left") {
    if (counterMohtava === slideMohtava.length - 1) {
      counterMohtava = slideMohtava.length - 1;
    } else {
      counterMohtava++;
    }
    isDisabeld();
    counterSlide(counterMohtava);
    const allBulletMohtava = document.querySelectorAll(".bulletMohtava");
    allBulletMohtava.forEach((item) => {
      item.classList.remove("activeBullet");
      if (+item.dataset.id === counterMohtava) {
        item.classList.add("activeBullet");
      }
    });
  }
}
// setInterval(() => {
//     if (counterMohtava === slideMohtava.length - 1) {
//       counterMohtava = slideMohtava.length-1 ;
//     } else {
//       counterMohtava++;
//     }
//     isDisabeld();
//     counterSlide(counterMohtava);
//     const allBulletMohtava = document.querySelectorAll(".bulletMohtava");
//     allBulletMohtava.forEach((item) => {
//       item.classList.remove("activeBullet");
//       if (+item.dataset.id === counterMohtava) {
//         item.classList.add("activeBullet");
//       }
//     });
//   }, 5000);
 