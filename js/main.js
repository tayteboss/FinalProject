



$(document).ready(fadeIn)
$('.artistToggle').click(artistToggle)
$('.navLink').click(pageChange)
$('.mobileNav').click(mobileNavToggle)

function fadeIn() {
  // triggers animation delays
  $(".animate").addClass('make-visible')
  $(".logoAnimate").addClass('make-width')
}

function artistToggle() {
// Variable of what's been clicked
  var tab = $(this).attr('data-target')
  $("article").css("display", "none")
  $(".animate").removeClass('make-visible')
  // fades in article based on what was clicked
  $('.' + tab).fadeIn(0);
  // sets slight delay so articles aren't fading in & out on each other
  setTimeout(function(){
    $(".animate").addClass('make-visible')
  }, 50);
}

function pageChange() {
  // Variable of what's been clicked
  var content = $(this).attr('data-target')
  // removing longer delays and adding shorter delays for later page changes
  $('.content-section .delay-1400').removeClass('delay-1400').addClass('delay-200')
  $('.content-section .delay-1600').removeClass('delay-1600').addClass('delay-400')
  $('.content-section .delay-1800').removeClass('delay-1800').addClass('delay-600')
  $('.content-section .delay-2000').removeClass('delay-2000').addClass('delay-800')
  // shows active page
  $('.navLink').removeClass('activeNav')
  $(this).addClass('activeNav')
  // fades out & in appropriate main sections
  $('.content-section').fadeOut(0)
  $('.content-section').removeClass('active-section');
  $(".animate").removeClass('make-visible')
  $('#' + content).fadeIn(0);
  // Adds (active-section) class for mobile menu section
  $('#' + content).addClass('active-section');
  setTimeout(function(){
    $(".animate").addClass('make-visible')
  }, 200);

// ensures nav bar fades out when clicked
  if ( $(window).width() < 631 ) {
    $('.mobileNav').toggleClass('change')
    $('.navBar').fadeOut(300)
  }
}

  function mobileNavToggle() {
    $(this).toggleClass('change')
    $('.content-section').fadeOut(300)
    if (!$(this).hasClass('change')) {
      // fades in active-section
      $('.content-section.active-section').fadeIn(300)
    }
    $('.navBar').fadeToggle(300)
}
