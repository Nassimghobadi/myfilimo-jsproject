let Subscription = async () => {
  let subscribe = "";
  try {
    let data = await fetch("http://localhost:3001/subscription");
    let res = await data.json();
    subscribe = res.map((item) => {
      return `<div class="flex flex-col justify-center gap-28 h-auto">
      <h1 class="bg-inherit text-center text-8xl">${item.title}</h1>
      <div class="features flex flex-row flex-nowrap justify-center align-middle gap-4"><div class="feature flex flex-row flex-nowrap gap-2">${item.feature1}<svg class="bg-green-950 rounded-xl" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><defs><g id="ui-icon-check" viewBox="0 0 24 24"><path d="M9.77 18.73a1 1 0 0 1-.71-.29L4.3 13.71a1 1 0 0 1 0-1.41 1 1 0 0 1 1.42 0l4 3.95 8.54-10.6A1 1 0 1 1 19.78 6.9L10.54 18.36a1 1 0 0 1-.72.37Z"></path></g></defs><g fill="#1CB561"><path d="M9.77 18.73a1 1 0 0 1-.71-.29L4.3 13.71a1 1 0 0 1 0-1.41 1 1 0 0 1 1.42 0l4 3.95 8.54-10.6A1 1 0 1 1 19.78 6.9L10.54 18.36a1 1 0 0 1-.72.37Z"></path></g></svg></div><div class="feature flex flex-row flex-nowrap gap-2">${item.feature2}<svg class="bg-green-950 rounded-xl"xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><defs><g id="ui-icon-check" viewBox="0 0 24 24"><path d="M9.77 18.73a1 1 0 0 1-.71-.29L4.3 13.71a1 1 0 0 1 0-1.41 1 1 0 0 1 1.42 0l4 3.95 8.54-10.6A1 1 0 1 1 19.78 6.9L10.54 18.36a1 1 0 0 1-.72.37Z"></path></g></defs><g fill="#1CB561"><path d="M9.77 18.73a1 1 0 0 1-.71-.29L4.3 13.71a1 1 0 0 1 0-1.41 1 1 0 0 1 1.42 0l4 3.95 8.54-10.6A1 1 0 1 1 19.78 6.9L10.54 18.36a1 1 0 0 1-.72.37Z"></path></g></svg></div><div class="feature flex flex-row gap-2 flex-nowrap">${item.feature3}<svg class="bg-green-950 rounded-xl" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><defs><g id="ui-icon-check" viewBox="0 0 24 24"><path d="M9.77 18.73a1 1 0 0 1-.71-.29L4.3 13.71a1 1 0 0 1 0-1.41 1 1 0 0 1 1.42 0l4 3.95 8.54-10.6A1 1 0 1 1 19.78 6.9L10.54 18.36a1 1 0 0 1-.72.37Z"></path></g></defs><g fill="#1CB561"><path d="M9.77 18.73a1 1 0 0 1-.71-.29L4.3 13.71a1 1 0 0 1 0-1.41 1 1 0 0 1 1.42 0l4 3.95 8.54-10.6A1 1 0 1 1 19.78 6.9L10.54 18.36a1 1 0 0 1-.72.37Z"></path></g></svg></div></div>
      
    </div><buttom class="flex flex-row flex-nowrap justify-center bg-[#1cb561] w-fit h-12 p-4 rounded-lg mt-5 mb-10 cursor-pointer hover:bg-[#1cb5616e] mx-auto">${item.button}<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><defs><g id="ui-icon-subscription" viewBox="0 0 24 24"><path d="M19 4H5A3 3 0 0 0 2 7V17a3 3 0 0 0 3 3H19a3 3 0 0 0 3-3V7A3 3 0 0 0 19 4Zm1 13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7A1 1 0 0 1 5 6H19a1 1 0 0 1 1 1Z"></path><path d="M12.4 11 9 8.74A1.25 1.25 0 0 0 7 9.79v4.42A1.26 1.26 0 0 0 9 15.27l3.44-2.21A1.26 1.26 0 0 0 12.4 11Z"></path><circle cx="16" cy="9" r="1"></circle><circle cx="16" cy="15" r="1"></circle><circle cx="16" cy="12" r="1"></circle></g></defs><g fill="whitesmoke"><path d="M19 4H5A3 3 0 0 0 2 7V17a3 3 0 0 0 3 3H19a3 3 0 0 0 3-3V7A3 3 0 0 0 19 4Zm1 13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7A1 1 0 0 1 5 6H19a1 1 0 0 1 1 1Z"></path><path d="M12.4 11 9 8.74A1.25 1.25 0 0 0 7 9.79v4.42A1.26 1.26 0 0 0 9 15.27l3.44-2.21A1.26 1.26 0 0 0 12.4 11Z"></path><circle cx="16" cy="9" r="1"></circle><circle cx="16" cy="15" r="1"></circle><circle cx="16" cy="12" r="1"></circle></g></svg></buttom>`;
    });
    document
      .querySelector(".subscription")
      .insertAdjacentHTML("afterbegin", subscribe.join(""));
    console.log(subscribe);
  } catch (error) {
    console.log(error.message);
  }
};

export default Subscription;
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
