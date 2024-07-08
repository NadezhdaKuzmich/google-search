document.addEventListener("DOMContentLoaded", function () {
  const logo = document.getElementById("logo");
  const searchInput = document.getElementById("search-input");
  const searchButton = document.getElementById("search-button");
  const luckyButton = document.getElementById("lucky-button");

  function changeLogo() {
    logo.innerHTML = `<span>O</span><span>d</span><span>d</span><span>i</span><span>t</span><span>y</span>`;
  }

  function searchGoogle() {
    const query = searchInput.value;
    if (query.trim()) {
      window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    } else {
      alert("Please enter a search query.");
    }
  }

  searchButton.addEventListener("click", searchGoogle);
  luckyButton.addEventListener("click", changeLogo);
});
