

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

function printOptions(wordsJ, wordsA, srl) {
	var optionStr = "";
	var index = 0;
	for	(index = 0; index < wordsA.length; index++) {
		optionStr += "<select id='option_" + srl + "_" + (index+1) + "'>";
		var firstCap = (index == 0) ? true : false;
		optionStr += convertToOption(wordsJ, firstCap);
		optionStr += "</select>"
		optionStr += "<input type=hidden id='actual_" + srl + "_" + (index+1) + "' value='" + wordsA[index]+"'/>";
	}		
	return optionStr;
}

function convertToOption(options, firstCap) {
	var res = options;
	res.sort(function() { return 0.5 - Math.random() });
	var text = "";
	var index = 0;
	for	(index = 0; index < res.length; index++) {
	    text += "<option value='" + res[index] + "'>" + capitalize(res[index], firstCap) + "</option>";
	}
	return text;
}

function capitalize(s, firstCap)
{
	if (firstCap) {
	    return s[0].toUpperCase() + s.slice(1);
	} else {
		return s;
	}
}


