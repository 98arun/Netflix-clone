//signin page code
let more = document.getElementById("more");
if (more) {
  more.addEventListener("click", () => {
    let hide = document.getElementById("hide");
    hide.style.visibility = "visible";
    more.style.visibility = "hidden";
  });
}

//home-page toggle accordian code
const accordian = document.querySelectorAll(".accordian-item");
if (accordian) {
  accordian.forEach((faq) => {
    faq.addEventListener("click", () => {
      console.log("click");
      if (faq) {
        faq.classList.toggle("active");
        // faq.classList.add("active");
        // faq.classList.remove("active");
      }
    });
  });
}
