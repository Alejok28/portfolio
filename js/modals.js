$(document).ready(function () {
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
		var p =this.dataset.text;
		var url = this.dataset.url;
		var repo = this.dataset.repo;
		// $(".modal-content").append("<h3>"+title+"</h3>");
		$(".modal-content").append("<img src='" + img + "'>");
		$(".modal-content").append("<p class='description'>"+p+"</p>")
		$(".modal-content").append('<div class="project-links"><a href="'+ repo +'" target="_blank">Repositorio</a><a href="'+ url +'" target="_blank">Vistar</a></div>')
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
