$(document).ready(function() {
	$('#submit-query').on('click', function() {

		$.ajax({
			url: 'http://localhost:8080/api',
			dataType: 'json',
			data: { 'length': 1, 'level': 'expert', },
			success: function(data) {
				data = {
					href: 'http://example.com',
					text: 'Machine learning Text',
					subText: 'Machine learning course by MIT.'
				};
				
				var finalString = '';
				finalString += '<div class="container"> <button class="btn btn-primary new-search"' +
				  'onclick="reloadPage()">New Search</button> <div class="card"> <div class="card-body">' +
				  ' <blockquote class="blockquote mb-0"> <a  href="' + data.href + '"><p>' + data.text +
				  '</p></a> <h9 class="sub-text">' + data.subText + '</h9> </blockquote> </div> </div> </div>';

				$('body').html(finalString); 
			},
		});
	});
});

function reloadPage() {
	location.reload();
}