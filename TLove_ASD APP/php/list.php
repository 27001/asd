// Tai Love
// ASD 1310

$(function(){
	
	$('#languages').empty();
	$.ajax({
		url: 'xhr/list.php',
		type: 'GET',
		dataType: 'json',
		success: function(response){
			for(var i=0, j=response.languages.length; i<j; i++){
				var lang = response.languages[i];
				$(''+
					'div class="language">'+
						'<h2>'+ lang.name +'</h2>'+
						'<p>'+ lang.description +'</p>'+
						'<p>'+ lang.version +'</p>'+
						'</div>'
				).appendTo('#languages');
			};
		}
	});
	
});
