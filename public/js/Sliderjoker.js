let slideJoker = document.querySelectorAll(".slideJoker");
let nextJoker = document.querySelector(".nextJoker");
let prevJoker = document.querySelector(".prevJoker");
let counterjoker = 0;

slideJoker.forEach((item, index) => {
//   //   item.style.left = `${index * 100}%`;
});
//creat bulletJoker
let paginationJoker = document.querySelector(".paginationJoker");
function createBullet() {
  slideJoker.forEach((_, index) => {
    paginationJoker.insertAdjacentHTML(
      "beforeend",
      `<div class="bulletJoker ${
        index === 0 ? "activeBullet" : ""
      }" data-id=${index}></div>`
    );
  });
}
paginationJoker.addEventListener("click", function (e) {
  if (e.target.classList.contains("bulletJoker")) {
    const clicked = e.target;
    const id = +clicked.dataset.id;
    const allBulletjoker = document.querySelectorAll(".bulletJoker");
    allBulletjoker.forEach((item) => {
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
  if (counterjoker === slideJoker.length - 1) {
    nextJoker.disabled = false;
    prevJoker.disabled = true;
  } else if (counterjoker === 0) {
    nextJoker.disabled = true;
    prevJoker.disabled = false;
  } else {
    nextJoker.disabled = false;
    prevJoker.disabled = false;
  }
};
//move sliderJoker ..... nextJoker...prevJoker //
function counterSlide(c) {
  slideJoker.forEach((item, index) => {
    item.style.transform = `translateX(${(index - c) * 20}%)`;
  });
}
counterSlide(counterjoker);
nextJoker.addEventListener("click", function () {
  repeatSlide("right");
});
counterSlide(counterjoker);
prevJoker.addEventListener("click", function () {
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
    if (counterjoker === 0) {
      counterjoker = 0;
    } else {
      counterjoker--;
    }
    isDisabeld();
    counterSlide(counterjoker);
    const allBulletjoker = document.querySelectorAll(".bulletJoker");
    allBulletjoker.forEach((item) => {
      item.classList.remove("activeBullet");
      if (+item.dataset.id === counterjoker) {
        item.classList.add("activeBullet");
      }
    });
  }

  if (direct === "left") {
    if (counterjoker === slideJoker.length - 1) {
      counterjoker = slideJoker.length - 1;
    } else {
      counterjoker++;
    }
    isDisabeld();
    counterSlide(counterjoker);
    const allBulletjoker = document.querySelectorAll(".bulletJoker");
    allBulletjoker.forEach((item) => {
      item.classList.remove("activeBullet");
      if (+item.dataset.id === counterjoker) {
        item.classList.add("activeBullet");
      }
    });
  }
}
// setInterval(() => {
//     if (counterjoker === slideJoker.length - 1) {
//       counterjoker = slideJoker.length-1 ;
//     } else {
//       counterjoker++;
//     }
//     isDisabeld();
//     counterSlide(counterjoker);
//     const allBulletjoker = document.querySelectorAll(".bulletJoker");
//     allBulletjoker.forEach((item) => {
//       item.classList.remove("activeBullet");
//       if (+item.dataset.id === counterjoker) {
//         item.classList.add("activeBullet");
//       }
//     });
//   }, 5000);
  function truncateText(selector, maxLength) {
    const element = document.querySelector(selector);
    const originalText = element.textContent;
    
    // Check if the text length exceeds the maxLength
    if (originalText.length > maxLength) {
      const truncated = originalText.substring(0, maxLength) + '...';
      element.textContent = truncated;
    }
  }
  
  // Example usage: truncate the text in <p> to 50 characters
  truncateText('p.summary-text', 100);
  
