$(document).ready(function() {
	$('#submit-query').on('click', function() {
		$('body').html('<div class="container"> <button class="btn btn-primary new-search" onclick="reloadPage()">New Search</button> <div class="card"> <div class="card-body"> <blockquote class="blockquote mb-0"> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p> <h9 class="sub-text">Some text about header</h9> </blockquote> </div> </div> </div>');
	});
});

function reloadPage() {
	location.reload();
}

