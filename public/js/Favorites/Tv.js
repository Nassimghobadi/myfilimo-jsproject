let TV = async () => {
    let telvesion = "";
    try {
      let data = await fetch("http://localhost:3001/TV");
      let res = await data.json();
      telvesion = res.map((item) => {
        return `<div class="flex flex-row flex-nowrap p-4"><img src="${item.image2}" class="w-fit max-h-full" alt=""></div>
        <div class="telvesion-titles flex flex-col flex-nowrap p-6">
      <h2 class="bg-transparent font-extrabold text-[20px] text-white/[0.8] p-8">${item.title}</h2>
      <p class="bg-transparent font-bold text-[16px] text-white/[0.8] p-8">${item.description}</p>
  
      <div class="telvesions-container flex flex-col flex-nowrap gap-8 p-10 font-normal text-white/[0.8]  text-[14px]">
          <!-- Computer and Laptop section -->
          <div class="telvesion flex flex-col flex-nowrap gap-3">
              <div class="flex flex-row flex-nowrap gap-2"><img src="../public/images/laptop.webp" alt="کامپیوتر و لپ‌تاپ">
              <h2 class="font-bold text-[16px]">کامپیوتر و لپ‌تاپ</h2></div>
              <p class="mr-9 text-xs">windows PC - MacOS - Chrome OS</p>
          </div>
  
          <!-- Mobile and Tablet section -->
          <div class="telvesion flex flex-col flex-nowrap gap-3">
              <div class="flex flex-row flex-wrap gap-2"><img src="../public/images/mobile.webp" alt="موبایل و تبلت">
              <h2 class="font-bold text-[16px]">موبایل و تبلت</h2></div>
              <p class="mr-9 text-xs">Android Phone & Tablets - iPhone and iPad - Amazon Fire Tablets</p>
          </div>
  
          <!-- Gaming Consoles section -->
          <div class="telvesion flex flex-col flex-nowrap gap-3">
              <div class="flex flex-row flex-wrap gap-2"><img src="../public/images/game.webp" alt="کنسول‌های بازی (Browser)">
              <h2 class="font-bold text-[16px]">کنسول‌های بازی (Browser)</h2></div>
              <p class="mr-9 text-xs">Xbox Series S - Xbox Series X - PS5 - PS4</p>
          </div>
          <!-- telvesion button -->
      <button class="telvesion-btn flex flex-row font-bold rounded-lg cursor-pointer bg-[#606060] hover:bg-gray-700 transition-all ease-linear duration-500 w-fit p-4">
         ویدئوهای آموزشی تماشا با تلوزیون<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><defs><g id="ui-icon-arrow_back_ios" viewBox="0 0 24 24"><path d="M16 20.5a1 1 0 0 1-.68-.27l-8-7.5a1 1 0 0 1 0-1.46l8-7.5a1 1 0 1 1 1.36 1.46L9.46 12l7.22 6.77a1 1 0 0 1 .05 1.41A1 1 0 0 1 16 20.5Z"></path></g></defs><g fill="#FFFFFF"><path d="M16 20.5a1 1 0 0 1-.68-.27l-8-7.5a1 1 0 0 1 0-1.46l8-7.5a1 1 0 1 1 1.36 1.46L9.46 12l7.22 6.77a1 1 0 0 1 .05 1.41A1 1 0 0 1 16 20.5Z"></path></g></svg></button>
      </div>
  
      
  </div>
          </div>`;
      });
      document
        .querySelector(".telvesions")
        .insertAdjacentHTML("afterbegin", telvesion.join(""));
      console.log(telvesion);
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export default TV;
 
  