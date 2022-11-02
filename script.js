


document.getElementById("scrollLogo").classList.add("aboveLogo");

// window.onscroll = function () {
//   scrollFunction();
// };

// function scrollFunction() {
//   if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
//     document.getElementById("scrollHeader").classList.add("aboveHeader");
//     document.getElementById("scrollLogo").classList.remove("aboveLogo");
//     document.getElementById("scrollName").classList.add("aboveName");
//     document.getElementById("brand-name").textContent = "Aquila Sprites";

//   } else {
//     document.getElementById("scrollHeader").classList.remove("aboveHeader");
//     document.getElementById("scrollLogo").classList.add("aboveLogo");
//     document.getElementById("scrollName").classList.remove("aboveName");
//     document.getElementById("brand-name").textContent = "AQS";
//   }
// }




window.addEventListener("scroll", function() {
  var elementTarget = document.getElementById("section1");
  if (window.scrollY > (elementTarget.offsetTop + elementTarget.offsetHeight)) {
    document.getElementById("scrollHeader").classList.add("aboveHeader");
    document.getElementById("scrollLogo").classList.remove("aboveLogo");
    document.getElementById("scrollName").classList.add("aboveName");
    document.getElementById("brand-name").textContent = "Aquila Sprites";
    document.getElementById("socialsBar").style.left = "0";
    $(".circles-from-right").empty();
    $(".circles-from-left").empty();
  } else {
    document.getElementById("scrollHeader").classList.remove("aboveHeader");
    document.getElementById("scrollLogo").classList.add("aboveLogo");
    document.getElementById("scrollName").classList.remove("aboveName");
    document.getElementById("brand-name").textContent = "AQS";
    document.getElementById("socialsBar").style.left = "-5vw";
    $(".circles-from-right").append("<li>");
    $(".circles-from-left").append("<li>");
  }
});
