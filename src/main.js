var next = document.querySelector("#gallery .next");
var prev = document.querySelector("#gallery .prev");
var sliders = document.querySelectorAll("#gallery ul li");
var i = 0;

next.onclick = function () {
  sliders[i].className = "";
  i = i + 1;

  if (i >= sliders.length) {
    i = 0;
  }

  sliders[i].className = "active";
};

prev.onclick = function () {
  sliders[i].className = "";

  i = i - 1;

  if (i < 0) {
    i = sliders.length - 1;
  }
  sliders[i].className = "active";
};
