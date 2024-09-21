let Faqs = async () => {
    let faq = "";
    try {
      let data = await fetch("http://localhost:3001/FAQ");
      let res = await data.json();
      faq = res.map((item) => {
        return `<div  class="w-11 flex flex-col faq m-3 border-2 rounded-lg opacity-80">
      <div class="subjects p-2">
        <div class="question toggle-answer flex flex-row justify-between m-4 cursor-pointer">
          <h2 >${item.question}</h2>
          <span class="icon">+</span> <!-- Initially show the + sign -->
        </div>
      </div>
      <div class="answer" style="max-height: 0; overflow: hidden; transition: max-height 0.5s ease;">
        <div class="explanation flex flex-nowrap justify-between m-4 p-2">${item.answer}</div>
      </div></div>`;
      });
  
      document.querySelector(".faqs").insertAdjacentHTML("beforeend", faq.join(""));
  
      // Add event listeners to toggle answer visibility
      document.querySelectorAll('.toggle-answer').forEach((element) => {
        element.addEventListener('click', function () {
          let answerDiv = this.closest('.faq').querySelector('.answer');
          let icon = this.querySelector('.icon'); // Select the icon inside the clicked question
  
          if (answerDiv.style.maxHeight === "0px" || !answerDiv.style.maxHeight) {
            // Expand the answer section and change the icon to SVG (closing)
            answerDiv.style.maxHeight = answerDiv.scrollHeight + "px";
            icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
              <path d="M2.146 2.146a.5.5 0 0 1 .708 0L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854a.5.5 0 0 1 0-.708z"/>
            </svg>`; // SVG for closing (X icon)
          } else {
            // Collapse the answer section and change the icon back to +
            answerDiv.style.maxHeight = "0px";
            icon.innerHTML = "+"; // Return to the + sign for opening
          }
        });
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export default Faqs;
  