const numberOfStars = 5;
const box = document.getElementById("icon-container");

var rating = 0;
document.getElementById("rating").innerText = rating;

const createStarContainer = (good) => {
  box.innerHTML = "";
  for (let i = 1; i <= good; i++) {
    box.appendChild(createFullStar(i));
  }
  for (let i = 1; i <= numberOfStars - good; i++) {
    box.appendChild(createEmptyStar(i));
  }
};

const createFullStar = (id) => {
  const el = document.createElement("div");
  el.setAttribute("id", id);
  el.innerHTML = '<i class="fa fa-star" style="font-size: 36px;"></i>';
  el.addEventListener("mouseenter", function () {
    rating = id;
    document.getElementById("rating").innerText = rating;
    createStarContainer(rating);
  });
  return el;
};

const createEmptyStar = (id) => {
  const el = document.createElement("div");
  el.setAttribute("id", id);
  el.innerHTML = '<i class="fa fa-star-o" style="font-size: 36px;"></i>';
  el.addEventListener("mouseenter", function () {
    rating = id;
    document.getElementById("rating").innerText = rating;
    createStarContainer(numberOfStars);
  });
  return el;
};

createStarContainer(0);
