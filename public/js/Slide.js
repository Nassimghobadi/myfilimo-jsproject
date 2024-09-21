// Function to generate slideFix template
function slideFixTemplate() {
  return `
    <div class="blur-content pointer-events-auto absolute top-0 left-0 w-full h-full flex flex-col justify-center align-middle text-center">
      <div class="dark-overlay absolute left-0 top-0 w-full h-full"></div>
      <h4 class="text-[16px] text-orange-400 font-bold opacity-90 z-10">با فیلیمو بی وقف فیلم ببین</h4>
      <h2 class="text-[48px] font-bold opacity-90 z-30">کنترل همیشه دست توست!</h2>
      <ul class="flex flex-row justify-between text-center mx-auto w-fit gap-20 z-30 font-semibold opacity-50 mt-5">
        <li class="flex flex-row text-[14px] opacity-1 gap-1 justify-between opacity-100"><svg class="bg-green-950 rounded-full" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22"><defs><g id="ui-icon-check" viewBox="0 0 24 24"><path d="M9.77 18.73a1 1 0 0 1-.71-.29L4.3 13.71a1 1 0 0 1 0-1.41 1 1 0 0 1 1.42 0l4 3.95 8.54-10.6A1 1 0 1 1 19.78 6.9L10.54 18.36a1 1 0 0 1-.72.37Z"></path></g></defs><g fill="#1CB561"><path d="M9.77 18.73a1 1 0 0 1-.71-.29L4.3 13.71a1 1 0 0 1 0-1.41 1 1 0 0 1 1.42 0l4 3.95 8.54-10.6A1 1 0 1 1 19.78 6.9L10.54 18.36a1 1 0 0 1-.72.37Z"></path></g></svg><p></p>95 هزار اپیزود فیلم و سریال برای تماشا داری</li>
        <li class="flex flex-row text-[14px] opacity-1 gap-1 justify-between opacity-100"><svg class="bg-green-950 rounded-full" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22"><defs><g id="ui-icon-check" viewBox="0 0 24 24"><path d="M9.77 18.73a1 1 0 0 1-.71-.29L4.3 13.71a1 1 0 0 1 0-1.41 1 1 0 0 1 1.42 0l4 3.95 8.54-10.6A1 1 0 1 1 19.78 6.9L10.54 18.36a1 1 0 0 1-.72.37Z"></path></g></defs><g fill="#1CB561"><path d="M9.77 18.73a1 1 0 0 1-.71-.29L4.3 13.71a1 1 0 0 1 0-1.41 1 1 0 0 1 1.42 0l4 3.95 8.54-10.6A1 1 0 1 1 19.78 6.9L10.54 18.36a1 1 0 0 1-.72.37Z"></path></g></svg><p>می‌تونی دانلود کنی بعد بدون اینترنت تماشا کنی</p></li>
        <li class="flex flex-row text-[14px] opacity-1 gap-1 justify-between opacity-100"><svg class="bg-green-950 rounded-full" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22"><defs><g id="ui-icon-check" viewBox="0 0 24 24"><path d="M9.77 18.73a1 1 0 0 1-.71-.29L4.3 13.71a1 1 0 0 1 0-1.41 1 1 0 0 1 1.42 0l4 3.95 8.54-10.6A1 1 0 1 1 19.78 6.9L10.54 18.36a1 1 0 0 1-.72.37Z"></path></g></defs><g fill="#1CB561"><path d="M9.77 18.73a1 1 0 0 1-.71-.29L4.3 13.71a1 1 0 0 1 0-1.41 1 1 0 0 1 1.42 0l4 3.95 8.54-10.6A1 1 0 1 1 19.78 6.9L10.54 18.36a1 1 0 0 1-.72.37Z"></path></g></svg><p>می‌تونی یک عضو، مخصوص تماشای کودک بسازی</p></li>
      </ul>
      <button class="h-12 align-middle mx-auto bg-[#1cb561] rounded-lg cursor-pointer flex flex-row flex-wrap justify-center p-2 opacity-80 z-30 w-64 mt-20 text-[18px] text-center hover:bg-[#047436]"><svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><defs><g id="ui-icon-subscription" viewBox="0 0 24 24"><path d="M19 4H5A3 3 0 0 0 2 7V17a3 3 0 0 0 3 3H19a3 3 0 0 0 3-3V7A3 3 0 0 0 19 4Zm1 13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7A1 1 0 0 1 5 6H19a1 1 0 0 1 1 1Z"></path><path d="M12.4 11 9 8.74A1.25 1.25 0 0 0 7 9.79v4.42A1.26 1.26 0 0 0 9 15.27l3.44-2.21A1.26 1.26 0 0 0 12.4 11Z"></path><circle cx="16" cy="9" r="1"></circle><circle cx="16" cy="15" r="1"></circle><circle cx="16" cy="12" r="1"></circle></g></defs><g fill="#FFFFFF"><path d="M19 4H5A3 3 0 0 0 2 7V17a3 3 0 0 0 3 3H19a3 3 0 0 0 3-3V7A3 3 0 0 0 19 4Zm1 13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7A1 1 0 0 1 5 6H19a1 1 0 0 1 1 1Z"></path><path d="M12.4 11 9 8.74A1.25 1.25 0 0 0 7 9.79v4.42A1.26 1.26 0 0 0 9 15.27l3.44-2.21A1.26 1.26 0 0 0 12.4 11Z"></path><circle cx="16" cy="9" r="1"></circle><circle cx="16" cy="15" r="1"></circle><circle cx="16" cy="12" r="1"></circle></g></svg>خرید اشتراک و تماشا</button>
      <div class="flex flex-row-reverse text-[12px] font-normal gap-2 opacity-45 flex-wrap justify-center align-middle z-30"><p class="flex flex-row flex-wrap justify-center align-middle">تخفیف ویژه برای کاربران جدید </p><svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="24" height="24" style="shape-rendering:geometricPrecision;text-rendering:geometricPrecision;image-rendering:optimizeQuality;fill-rule:evenodd;clip-rule:evenodd" viewBox="0 0 6.827 6.827"><defs><style>.fil0{fill:#transparent}.fil1{fill:#fffffe;fill-rule:nonzero}</style></defs><g id="Layer_x0020_1"><g id="_464585264"><path id="_464586032" class="fil0" d="M0 0h6.827v6.827H0z"/><path id="_464577944" class="fil0" d="M.853.853h5.12v5.12H.853z"/></g><path class="fil1" d="M5.461 6.08H1.366a.184.184 0 0 1-.185-.185V2.858a.184.184 0 0 1-.167-.184v-.711c0-.051.021-.097.055-.13a.184.184 0 0 1 .13-.055h.708a.553.553 0 1 1 .653-.88l.492.467a.361.361 0 0 1 .25-.103h.222a.356.356 0 0 1 .25.103L4.267.9a.553.553 0 0 1 .705-.046.55.55 0 0 1 .2.279h.001a.55.55 0 0 1-.252.646h.707a.184.184 0 0 1 .185.185v.71a.184.184 0 0 1-.166.185v3.037a.184.184 0 0 1-.185.185zm-4.067-.213h4.039V2.645H5.599v-.654H4.094l-.024-.21.653-.152a.34.34 0 0 0 .246-.433.338.338 0 0 0-.556-.143l-.582.552-.114.109-.058-.147a.146.146 0 0 0-.135-.092h-.221a.143.143 0 0 0-.135.092l-.058.147-.114-.109-.582-.552a.34.34 0 0 0-.557.143.34.34 0 0 0 .247.433l.652.152-.024.21H1.228v.654H1.394V5.867z"/><path class="fil1" d="M1.287 2.645h4.296v.214H1.287z"/><path class="fil1" d="M3.165 1.528v4.445H2.95V1.528zM3.84 1.528v4.445h-.213V1.528z"/></g></svg></div>
    </div>`;
}

let slide = document.querySelectorAll(".slide");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let counter = 0;

// Append the slideFixTemplate to each slide
slide.forEach((item, index) => {
  item.insertAdjacentHTML("beforeend", slideFixTemplate());
});

// Create bullet pagination
let pagination = document.querySelector(".pagination");
function createBullet() {
  slide.forEach((_, index) => {
    pagination.insertAdjacentHTML(
      "beforeend",
      `<div class="bullet ${
        index === 0 ? "activeBullet" : ""
      }" data-id=${index}></div>`
    );
  });
}
pagination.addEventListener("click", function (e) {
  if (e.target.classList.contains("bullet")) {
    const clicked = e.target;
    const id = +clicked.dataset.id;
    const allBullet = document.querySelectorAll(".bullet");
    allBullet.forEach((item) => {
      item.classList.remove("activeBullet");
      clicked.classList.add("activeBullet");
    });
    counterSlide(id);
    isDisabled();
  }
});
createBullet();

// Disable and enable navigation buttons
const isDisabled = () => {
  next.disabled = counter === slide.length - 1;
  prev.disabled = counter === 0;
};

// Update the active slide
function counterSlide(c) {
  slide.forEach((item, index) => {
    item.classList.remove("active");
    if (index === c) {
      item.classList.add("active");
    }
  });
}
counterSlide(counter);

next.addEventListener("click", function () {
  repeatSlide("right");
});
prev.addEventListener("click", function () {
  repeatSlide("left");
});

// Keyboard navigation
// window.addEventListener("keydown", function (event) {
//   if (event.key === "ArrowRight") {
//     repeatSlide("right");
//   }
//   if (event.key === "ArrowLeft") {
//     repeatSlide("left");
//   }
// });

function repeatSlide(direct) {
  if (direct === "right" && counter < slide.length - 1) {
    counter++;
  } else if (direct === "left" && counter > 0) {
    counter--;
  }
  isDisabled();
  counterSlide(counter);
  updateBullets();
}

function updateBullets() {
  const allBullet = document.querySelectorAll(".bullet");
  allBullet.forEach((item) => {
    item.classList.remove("activeBullet");
    if (+item.dataset.id === counter) {
      item.classList.add("activeBullet");
    }
  });
}

// Auto-slide functionality
setInterval(() => {
  if (counter < slide.length - 1) {
    counter++;
  } else {
    counter = 0; // Loop back to the first slide
  }
  isDisabled();
  counterSlide(counter);
  updateBullets();
}, 5000);
