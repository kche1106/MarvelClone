const $slides = document.querySelectorAll(".slide");
const $dots = document.querySelectorAll(".dot");

let current = 0;

//자동 슬라이드

window.addEventListener("load", function() {
    setInterval(autoSlide,3000);
});

const reset = () => {
    $slides.forEach((slide) => {
        slide.style.display = "none";
    });
    $dots.forEach((dot) => {
        dot.style.background = "#888";
        dot.style.width = "8px";
    });
};

const autoSlide = () => {
    reset();
    if (current === $slides.length - 1) {
      current = -1;
    }
    current++;
    $slides[current].style.display = "block";
    $dots[current].style.background = "#353535";
    $dots[current].style.width = "30px";
  };

  

// 화살표 누르면 다음 슬라이드 

const $arrowLeft = document.querySelector(".arrow--left");

const $arrowRight = document.querySelector(".arrow--right");

const slideToRight = () => {
  reset();
  if (current === $slides.length - 1) {
    current = -1;
  }
  current++;
  $slides[current].style.display = "block";
  $dots[current].style.background = "#353535";
  $dots[current].style.width = "30px";
};

$arrowRight.addEventListener("click", slideToRight);

const slideToLeft = () => {
  reset();
  if (current === 0) {
    current = $slides.length;
  }
  current--;
  $slides[current].style.display = "block";
  $dots[current].style.background = "#353535 ";
  $dots[current].style.width = "30px";
};

$arrowLeft.addEventListener("click", slideToLeft);


// dot누르면 그에 해당하는 슬라이드

$dots.forEach((dot, idx) => {
    dot.addEventListener("click", function () {
      reset();
      current = idx;
      $slides[current].style.display = "block";
      dot.style.background = "#353535";
      dot.style.width = "30px";
    });
});


//hotslide

const $hotslides = document.querySelectorAll(".hotslide");
const $hotdots = document.querySelectorAll(".hotdot");

let current = 0;

window.addEventListener("load", function() {
  setInterval(autoSlide,3000);
});

const reset = () => {
  $hotslides.forEach((hotslide) => {
      hotslide.style.display = "none";
  });
  $hotdots.forEach((dot) => {
      hotdot.style.background = "#888";
      hotdot.style.width = "8px";
  });
};

const autoSlide = () => {
  reset();
  if (current === $hotslides.length - 1) {
    current = -1;
  }
  current++;
  $hotslides[current].style.display = "block";
  $hotdots[current].style.background = "#353535";
  $hotdots[current].style.width = "30px";
};

$hotdots.forEach((hotdot, idx) => {
  hotdot.addEventListener("click", function () {
    reset();
    current = idx;
    $hotslides[current].style.display = "block";
    hotdot.style.background = "#353535";
    hotdot.style.width = "30px";
  });
});

