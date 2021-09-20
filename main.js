let isScrollUp = false;

window.onscroll = function (e) {
  isScrollUp = this.oldScroll > this.scrollY;
  this.oldScroll = this.scrollY;
};

const targets = document.querySelectorAll("h2");

const changeBackgroundColor = function (entries, observer) {
  console.log(entries);
  let randomNum1 = Math.random() * 255;
  let randomNum2 = Math.random() * 255;

  const topIntersectionRect = entries[0].intersectionRect.top;

  if (isScrollUp && topIntersectionRect > 150) {
    console.log("fired up");
    document.body.style.backgroundColor = `rgba(140, ${randomNum1}, ${randomNum2}, 0.5)`;
  }
  if (!isScrollUp && topIntersectionRect > 150) {
    console.log("fired down");
    document.body.style.backgroundColor = `rgba(140, ${randomNum1}, ${randomNum2}, 0.5)`;
  }
};

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 1.0,
};
const observer = new IntersectionObserver(changeBackgroundColor, options);

targets.forEach((header) => {
  observer.observe(header);
});
