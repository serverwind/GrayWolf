// button "OPEN"
const BUTTON = document.getElementById("content");
const SECOND_BUTTON = document.getElementById("content-bottom");
const ARTICLES_WRAPPER = document.getElementById("tests");

BUTTON.addEventListener("click", scrollToTests);
SECOND_BUTTON.addEventListener("click", scrollToTests);

function scrollToTests() {
  ARTICLES_WRAPPER.scrollIntoView();
}

// search post
const SEARCH_INPUT = document.getElementById("test-search");
const ARTICLE_LINKS = document.querySelectorAll(".cbt-link");
const ARTICLE_LINKS_WR = document.querySelectorAll(".test-link-wrapper");
let txtValue = "";
let inputValue = "";

SEARCH_INPUT.addEventListener("keyup", searchArticle);

function searchArticle() {
  for (let i = 0; i < ARTICLE_LINKS.length; i++) {
    txtValue = ARTICLE_LINKS[i].innerHTML;
    inputValue = SEARCH_INPUT.value;
    txtValue = txtValue.toLowerCase();
    inputValue = inputValue.toLowerCase();

    if (txtValue.includes(inputValue)) {
      ARTICLE_LINKS_WR[i].parentElement.style.display = "";
    } else {
      ARTICLE_LINKS_WR[i].parentElement.style.display = "none";
    }
  }
}

// articles view - switch
const ARTICLES = document.querySelectorAll(".test");
const ARTICLE_IMG = document.querySelectorAll(".test img");
const ARTICLE_IMG_LEN = ARTICLE_IMG.length;
const GRID = document.getElementById("switch-previews");
const ROWS = document.getElementById("switch-rows");
const LINK_WRAPPER = document.querySelectorAll(".test-link-wrapper");

GRID.addEventListener("click", switchToGrid);
ROWS.addEventListener("click", switchToRows);

function switchToGrid() {
  ROWS.classList.remove("switch-active");
  GRID.classList.add("switch-active");

  for (let i = 0; i < ARTICLE_IMG_LEN; i++) {
    ARTICLE_IMG[i].style.display = "block";
    ARTICLES[i].style.textAlign = "center";
    LINK_WRAPPER[i].classList.remove("rounded");
  }
}

function switchToRows() {
  GRID.classList.remove("switch-active");
  ROWS.classList.add("switch-active");

  for (let i = 0; i < ARTICLE_IMG_LEN; i++) {
    ARTICLE_IMG[i].style.display = "none";
    ARTICLES[i].style.textAlign = "left";
    LINK_WRAPPER[i].classList.add("rounded");
  }
}

// scroll effect
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 50;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);
