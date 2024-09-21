let Devices = async () => {
  let device = "";
  try {
    let data = await fetch("http://localhost:3001/device");
    let res = await data.json();
    device = res.map((item) => {
      return `<div class="p-5"><img src="${item.image}" alt=""></div>
      <div class="device-titles p-5 flex flex-col gap-4">
    <h2 class="bg-transparent font-extrabold text-[20px] text-white/[0.8]">${item.title}</h2>
    <h4 class="bg-transparent font-bold text-[16px] text-white/[0.8]">${item.subtitle}</h4>

    <div class="devices-container p-5 flex flex-col font-normal text-white/[0.8] gap-5 text-[14px]">
        <!-- Computer and Laptop section -->
        <div class="device flex flex-row flex-wrap  ">
            <div class="flex flex-row flex-wrap gap-2"><img src="../public/images/laptop.webp" alt="کامپیوتر و لپ‌تاپ">
            <h2 class="font-bold text-[16px]">کامپیوتر و لپ‌تاپ</h2></div>
            
        </div>
<p class="mr-9">windows PC - MacOS - Chrome OS</p>
        <!-- Mobile and Tablet section -->
        <div class="device flex flex-row flex-wrap">
            <div class="flex flex-row flex-wrap gap-2"><img src="../public/images/mobile.webp" alt="موبایل و تبلت">
            <h2 class="font-bold text-[16px]">موبایل و تبلت</h2></div>
            
        </div>
<p class="mr-9">Android Phone & Tablets - iPhone and iPad - Amazon Fire Tablets</p>
        <!-- Gaming Consoles section -->
        <div class="device flex flex-row flex-wrap">
            <div class="flex flex-row flex-wrap gap-2"><img src="../public/images/game.webp" alt="کنسول‌های بازی (Browser)">
            <h2 class="font-bold text-[16px]">کنسول‌های بازی (Browser)</h2></div>
            
        </div>
        <p class="mr-9">Xbox Series S - Xbox Series X - PS5 - PS4</p>
    </div>

    <!-- Subscription button -->
    <button class="subscription-btn  bg-[#00c853] flex flex-row flex-nowrap w-fit p-3 rounded-lg hover:bg-[#08a047] transition-all duration-150 ease-linear">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white">
            <path d="M19 4H5A3 3 0 0 0 2 7V17a3 3 0 0 0 3 3H19a3 3 0 0 0 3-3V7A3 3 0 0 0 19 4Zm1 13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7A1 1 0 0 1 5 6H19a1 1 0 0 1 1 1Z"></path>
            <path d="M12.4 11 9 8.74A1.25 1.25 0 0 0 7 9.79v4.42A1.26 1.26 0 0 0 9 15.27l3.44-2.21A1.26 1.26 0 0 0 12.4 11Z"></path>
            <circle cx="16" cy="9" r="1"></circle>
            <circle cx="16" cy="15" r="1"></circle>
            <circle cx="16" cy="12" r="1"></circle>
        </svg>
        خرید اشتراک و تماشا
    </button>
</div>



        </div>`;
    });
    document
      .querySelector(".devices")
      .insertAdjacentHTML("afterbegin", device.join(""));
    console.log(device);
  } catch (error) {
    console.log(error.message);
  }
};

export default Devices;
/**<div class="img"><img src="" alt=""></div>
      <div class="deviceContainer">
        <h2>title</h2></div>
        <h4>subTitle</h4>
        <div><div>
          <h2></h2>
        </div>
      <div>
        <p></p>
      </div></div> */
