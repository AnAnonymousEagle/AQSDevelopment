

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById("headhead").classList.add("above")
  } else {
    document.getElementById("headhead").classList.remove("above")
  }
}