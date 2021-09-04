window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  // 20 is an arbitrary number here, just to make you think if you need the prevScrollpos variable:
  if (currentScrollPos > 30) {
    // I am using 'display' instead of 'top':
    document.getElementById("navbar2").style.display = "initial";
  } else {
    document.getElementById("navbar2").style.display = "none";
  }
}