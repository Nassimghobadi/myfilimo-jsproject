let KID = async () => {
  let kid = "";
  try {
    let data = await fetch("http://localhost:3001/kids");
    let res = await data.json();
    kid = res.map((item) => {
      return `<div class="  text-white/[0.7] flex flex-row gap-10"><img class="bg-contain" src="${item.image3}" alt="" class="w-full h-72 object-contain"></div>
        <div class="kid-titles flex flex-col  gap-11">
      <h2 class="font-extrabold text-xl">${item.title}</h2>
      <p class="font-bold text-medium text-gray-400 ">${item.description}</p>
      <div class="buttons text-gray-800 flex flex-row gap-7 cursor-pointer "><div class="bg-gray-200 font-medium px-4 py-2 rounded-lg">${item.button2}</div><div class="bg-gray-200 font-medium px-4 py-2 rounded-lg">${item.button1}</div></div>
  </div>`;
    });
    document
      .querySelector(".kids")
      .insertAdjacentHTML("afterbegin", kid.join(""));
    console.log(kid);
  } catch (error) {
    console.log(error.message);
  }
};

export default KID;
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
