// Tai Love
// ASD 1310

$.ajax({
	url: 'http://remote.com/getusers.php',
	data: {id: 10},
	type: 'GET',
	dataType: 'jsonp',
	success: function(response){
		// response is json data
	}
});

