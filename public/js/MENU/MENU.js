let Menu = async () => {
    let menu = "";
    try {
      let data = await fetch("http://localhost:3001/menu");
      let res = await data.json();
      menu = res
        .map((item) => {
          return `<div class="relative group flex flex-row justify-center items-center h-full">
                    <img src=${item.src} alt="" class="w-[24px] h-[24px] object-contain bg-transparent" />
                    <a href=${
                      item.link
                    } class="flex items-center justify-center h-full leading-[40px] text-xs px-2 text-white font-semibold capitalize no-underline transition-all duration-300 ease-linear hover:bg-transparent hover:text-orange-500">${item.name}</a>
                    ${item.dropdown
                      .map((child) => {
                        return `<div class="flex flex-row h-full relative justify-center items-center">
                                  <a href=${child.link} class="flex items-center justify-center h-full leading-[40px] text-xs px-2 text-white font-semibold capitalize no-underline transition-all duration-300 ease-linear hover:bg-transparent hover:text-orange-500">${child.name}</a>
                                </div>`;
                      })
                      .join("")}
                  </div>`;
        })
        .join("");
  
      document.querySelector(".menu nav").insertAdjacentHTML("afterbegin", menu);
    } catch (error) {
      console.log(error.message);
    }
  };
  
export default Menu;
  // Define media query for screens wider than 1000px
let Desctop = window.matchMedia("only screen and (min-width: 1000px)");
let menu = document.querySelector(".menu");

// Initial check when the page loads
if (Desctop.matches) {
  menu.classList.add("menuHorizental");
  menu.classList.remove("menuVertical");
} else {
  menu.classList.add("menuVertical");
  menu.classList.remove("menuHorizental");
}

// Add event listener to respond to screen size changes
Desctop.addEventListener("change", (e) => {
  if (e.matches) {
    menu.classList.remove("menuVertical");
    menu.classList.add("menuHorizental");
  } else {
    menu.classList.remove("menuHorizental");
    menu.classList.add("menuVertical");
  }
});

  