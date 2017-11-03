$(document).ready(function() {
	$('#submit-query').on('click', function() {
		var keyword = $('#keyword')[0].value;
		var length = $('#length')[0].value;
		var medium = $('#medium')[0].value;
		var language = $('#language')[0].value;
		var experience = $('#experience')[0].value;
		// console.log(keyword, length, medium, language, experience);

		$.ajax({
			url: 'http://localhost:8080/api',
			dataType: 'json',
			data: {
				'keyword': keyword,
				'length': length,
				'medium': medium,
				'language': language,
				'experience': experience
			},
			success: function(data) {
				console.log(data);
				
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