var prev = document.querySelector("#gallery .prev");
var next = document.querySelector("#gallery .next");
var sliders = document.querySelectorAll("#gallery ul li");
var i = 0;

next.onclick = function () {
  sliders[i].style.display = "none";
  i = i + 1;

  if (i >= sliders.length) {
    i = 0;
  }

  sliders[i].style.display = "block";
};

prev.onclick = function () {
  sliders[i].style.display = "none";
  i = i - 1;

  if (i < 0) {
    i = sliders.length - 1;
  }

  sliders[i].style.display = "block";
};
