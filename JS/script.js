$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".nvb").addClass("sticky");
    } else {
      $(".nvb").removeClass("sticky");
    }
  });

  // Toggle menu/navbar script
  $(".nav_btn").click(function () {
    $(".nav_bar").toggleClass("active1");
  });
  $(".list li a").click(function () {
    $(".nav_bar").removeClass("active1");
  });

  // typing animation code
  var typed = new Typed(".typing", {
    strings: ["Student", "Web Developer", "Security Researcher", "Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
});
