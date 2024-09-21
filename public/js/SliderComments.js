let slideComment = document.querySelectorAll(".slideComment");
let nextComment = document.querySelector(".nextComment");
let prevComment = document.querySelector(".prevComment");
let counter = 0;

slideComment.forEach((item, index) => {
 item.style.left = `${index /100}%`;
});
//creat bulletComment
let paginationComment = document.querySelector(".paginationComment");
function createBullet() {
  slideComment.forEach((_, index) => {
    paginationComment.insertAdjacentHTML(
      "beforeend",
      `<div class="bulletComment ${
        index === 0 ? "activeBullet" : ""
      }" data-id=${index}></div>`
    );
  });
}
paginationComment.addEventListener("click", function (e) {
  if (e.target.classList.contains("bulletComment")) {
    const clicked = e.target;
    const id = +clicked.dataset.id;
    const allBullet = document.querySelectorAll(".bulletComment");
    allBullet.forEach((item) => {
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
  if (counter === slideComment.length - 1) {
    nextComment.disabled = false;
    prevComment.disabled = true;
  } else if (counter === 0) {
    nextComment.disabled = true;
    prevComment.disabled = false;
  } else {
    nextComment.disabled = false;
    prevComment.disabled = false;
  }
};
//move sliderComment ..... nextComment...prevComment //
function counterSlide(c) {
  slideComment.forEach((item, index) => {
    item.style.transform = `translateX(${(index - c) * 80}%)`;
  });
}

counterSlide(counter);
nextComment.addEventListener("click", function () {
  repeatSlide("right");
});
counterSlide(counter);
prevComment.addEventListener("click", function () {
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
    if (counter === 0) {
      counter = 0;
    } else {
      counter--;
    }
    isDisabeld();
    counterSlide(counter);
    const allBullet = document.querySelectorAll(".bulletComment");
    allBullet.forEach((item) => {
      item.classList.remove("activeBullet");
      if (+item.dataset.id === counter) {
        item.classList.add("activeBullet");
      }
    });
  }

  if (direct === "left") {
    if (counter === slideComment.length - 1) {
      counter = slideComment.length - 1;
    } else {
      counter++;
    }
    isDisabeld();
    counterSlide(counter);
    const allBullet = document.querySelectorAll(".bulletComment");
    allBullet.forEach((item) => {
      item.classList.remove("activeBullet");
      if (+item.dataset.id === counter) {
        item.classList.add("activeBullet");
      }
    });
  }
}
 setInterval(() => {
   if (counter === slideComment.length - 1) {
     counter = slideComment.length - 1;
   } else {
     counter++;
   }
   isDisabeld();
   counterSlide(counter);
   const allBullet = document.querySelectorAll(".bulletComment");
   allBullet.forEach((item) => {
     item.classList.remove("activeBullet");
     if (+item.dataset.id === counter) {
       item.classList.add("activeBullet");
     }
   });
 }, 5000);
  
