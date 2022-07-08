document.querySelector(".btn-click").addEventListener("click", function (e) {
  document.querySelector(".btn-input").textContent = Math.trunc(
    Math.random() * 1000
  );
});
