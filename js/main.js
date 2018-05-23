



$(document).ready(activePage)
$(document).ready(fadeIn)
$('.artist').click(pageArtist)
$('.visual').click(visual)


function activePage() {
  var pageis = $('body').attr('data-page')
  $('a.' + pageis).addClass('activeNav' + pageis)

}

function fadeIn() {
  $(".animate").addClass('make-visible')
  $(".logoAnimate").addClass('make-width')
}

function pageArtist() {
  event.preventDefault()
  $('main').css('display', 'none')
  $('.mainArtist').css('display', 'flex')

  $('.navBar .a').removeClass('activeNav' + 'about')
  $('a.artist').addClass('activeNav' + 'artist')
}

function visual() {
  $('.artistSound').css('display', 'none')
  $('artistVisual').css('artistVisualOn')

}

