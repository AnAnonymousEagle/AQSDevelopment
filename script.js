document.getElementById("scrollLogo").classList.add("aboveLogo");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById("scrollHeader").classList.add("aboveHeader");
    document.getElementById("scrollLogo").classList.remove("aboveLogo");
    document.getElementById("scrollName").classList.add("aboveName");
    document.getElementById("brand-name").textContent = "Aquila Sprites";

  } else {
    document.getElementById("scrollHeader").classList.remove("aboveHeader");
    document.getElementById("scrollLogo").classList.add("aboveLogo");
    document.getElementById("scrollName").classList.remove("aboveName");
    document.getElementById("brand-name").textContent = "AQS";
  }
}



