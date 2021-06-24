  // jshint esversion: 6

  const button = document.querySelector(".x");
  const p = document.querySelector("p");
  button.addEventListener("click",  function() {
    p.innerHTML = "";
    p.classList.remove("color");
  });
