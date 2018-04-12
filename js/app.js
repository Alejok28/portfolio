$(document).ready(function () {
  $(document).on("scroll", onScroll);

  $('nav a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $(document).off("scroll");

    $('nav a').each(function () {
      $(this).removeClass('active');
    })
    $(this).addClass('active');

    var target = this.hash;
    $target = $(target);
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top+2
    }, 500, 'swing', function () {
      window.location.hash = target;
      $(document).on("scroll", onScroll);
    });
  });
  $('.dropdown a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $(document).off("scroll");

    var target = this.hash;
    $target = $(target);
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top+2
    }, 500, 'swing', function () {
      window.location.hash = target;
      $(document).on("scroll", onScroll);
    });
  });

  // Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
// var btn = document.getElementById("link");
// console.log(btn.dataset.src);

// Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
$('div#link').on('click', function(){
  modal.style.display = "block";
  var img = this.dataset.src;
  var title = this.dataset.title;
  var p =this.dataset.text
  var url = this.dataset.url;
  $(".modal-content").append("<h3>"+title+"</h3>");
  $(".modal-content").append("<img src='" + img + "'>");
  $(".modal-content").append("<p class='description'>TECNOLOGÍAS UTILIZADAS: "+p+"</p>")
  $(".modal-content").append('<a class="go-link"href="'+ url +'" target="_blank">Vistar</a>')
})

// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
//   $('.modal-content').empty();
// }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
      modal.style.display = "none";
      $('.modal-content').empty();
  }
}
});


function onScroll(event){
  var scrollPosition = $(document).scrollTop();
  $('nav a').each(function () {
    var currentLink = $(this);
    var refElement = $(currentLink.attr("href"));
    if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
      $('nav a').removeClass("active");
      currentLink.addClass("active");
    }
    else{
      currentLink.removeClass("active");
    }
  });
}
