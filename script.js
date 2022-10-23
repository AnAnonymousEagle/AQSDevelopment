document.getElementById("scroll-logo").classList.add("above-logo")

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById("scroll").classList.add("above")
    document.getElementById("scroll-logo").classList.remove("above-logo")
  } else {
    document.getElementById("scroll").classList.remove("above")
    document.getElementById("scroll-logo").classList.add("above-logo")
  }
}