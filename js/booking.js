var search = document.querySelector(".search-btn");
var formbody = document.querySelector(".form");

search.addEventListener("click", function(event) {
  event.preventDefault();
  formbody.classList.toggle("form-show");
});
