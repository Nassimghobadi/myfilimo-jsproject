let Online = async () => {
  let cinema = "";
  try {
    let data = await fetch("http://localhost:3001/OnlineCinema");
    let res = await data.json();
    cinema = res.map((item) => {
      return ` <div class="OnlineCinema relative p-20>
        <div class="flex flex-row relative items-center gap-11 ">
          <h2 class="text-2xl font-bold relative text-gray-300 text-center mt-8">${item.bgTitle}</h2>
          <div class="flex relative flex-row text-gray-300 align-middle justify-center space-x-12 items-center mt-4 gap-11">
            <div class="flex items-center space-x-3 relative ">
              <h4 class="text-sm">فیلم‌های روز سینمای ایران</h4>
              <svg class="bg-green-950 rounded-full" xmlns:xlink="http://www.w3.org/1999/xlink" class="ml-2" viewBox="0 0 24 24" width="20" height="20">
                <path fill="#1CB561" d="M9.77 18.73a1 1 0 0 1-.71-.29L4.3 13.71a1 1 0 0 1 0-1.41 1 1 0 0 1 1.42 0l4 3.95 8.54-10.6A1 1 0 1 1 19.78 6.9L10.54 18.36a1 1 0 0 1-.72.37Z"/>
              </svg>
            </div>
            <div class="flex items-center space-x-3">
              <h4 class="text-sm">۸ ساعت زمان برای مشاهده فیلم در هر کجا</h4>
              <svg class="bg-green-950 rounded-full" xmlns:xlink="http://www.w3.org/1999/xlink" class="ml-2" viewBox="0 0 24 24" width="20" height="20">
                <path fill="#1CB561" d="M9.77 18.73a1 1 0 0 1-.71-.29L4.3 13.71a1 1 0 0 1 0-1.41 1 1 0 0 1 1.42 0l4 3.95 8.54-10.6A1 1 0 1 1 19.78 6.9L10.54 18.36a1 1 0 0 1-.72.37Z"/>
              </svg>
            </div>
            <div class="flex items-center space-x-3">
              <h4 class="text-sm">خرید یک بلیت برای تماشا همراه با همه خانواده</h4>
              <svg class="bg-green-950 rounded-full" xmlns:xlink="http://www.w3.org/1999/xlink" class="ml-2" viewBox="0 0 24 24" width="20" height="20">
                <path fill="#1CB561" d="M9.77 18.73a1 1 0 0 1-.71-.29L4.3 13.71a1 1 0 0 1 0-1.41 1 1 0 0 1 1.42 0l4 3.95 8.54-10.6A1 1 0 1 1 19.78 6.9L10.54 18.36a1 1 0 0 1-.72.37Z"/>
              </svg>
            </div>
          </div>
<div class="container p-6 inset-0 relative flex flex-row justify-center items-center w-full h-min mb-4 ">
  <!-- Image Section -->
  <div class=" flex justify-center ">
    <img class="w-full h-full rounded-lg" src="${item.innerImg}" alt="Movie Poster" class="rounded-lg shadow-lg w-full h-full">
  </div>

  <!-- Movie Info Section -->
  <div class="flex flex-col align-middle gap-10 text-white text-right">
    <h2 class="text-lg font-bold mb-2">تمساح خونی</h2>
    <p class="text-sm text-gray-400 mb-4">کارگردان: null</p>
    
    <!-- Genres -->
    <div class="flex justify-end space-x-2 space-x-reverse relative">
      <span class="bg-[#1b1b1b] text-white/[0.9] py-1 px-3 rounded-lg text-xs">اکشن</span>
      <span class="bg-[#1b1b1b] text-white/[0.9] py-1 px-3 rounded-lg text-xs">کمدی</span>
    </div>
    <button class="border-2 rounded-md w-30 h-10">خرید بلیط</button>
  </div>

  <!-- Online Screening Info Section -->
  <div class=" flex flex-row-reverse bg-black gap-2 p-1 align-middle justify-center rounded-md items-center text-center">
    <span class="font-bold text-xsmall text-center align-middle text-white/[0.7] mb-2 w-fit">اکران آنلاین</span>
    <img class="text-sm text-center align-middle w-4 mb-2" src="./public/images/ticket.webp" alt="Ticket" class="w-3 h-3 text-center align-middle">
  </div>
</div>
     </div>
      </div>
      `;
    });
    document
      .querySelector(".OnlineCinemas")
      .insertAdjacentHTML("afterbegin", cinema.join(""));
    console.log(cinema);
  } catch (error) {
    console.log(error.message);
  }
};

export default Online;
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
