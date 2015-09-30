

function getAColour() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function getContent(fileName) {
	var jqXHR = $.ajax({
		async : false,
		url : fileName,
		error : function(xhr, ajaxOptions, thrownError) {
			// alert(xhr.status);
			// alert(thrownError);
		},
		success : function(result) {
			//$words = $(result).find("words");
			//var wordlist = $(words);
		}
	});
	return jqXHR.responseText;
}

function getUrlVars() {
	var vars = {};
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
						vars[key] = value;
				});
	return vars;
}
