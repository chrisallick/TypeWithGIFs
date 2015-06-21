$(window).load(function(){
	$("#wrapper").animate({
		opacity: 1
	});
});

function loadImages() {
	share_url = "http://share_this_url.com/";

	$("#images").html("");
	for( var i = 0; i < images.length; i++ ) {
		$("#images").append(images[i]);
		share_url += "#" + share_images[i];
	}
}

function checkGIFs(_q, _index ) {
	var _url = "http://api.giphy.com/v1/gifs/search?q="+_q+"&api_key=dc6zaTOxFJmzC&limit=1";
	$.ajax({
  		method: "GET",
  		url: _url,
  		dataType: "json"
	}).done(function(data){
		if( data && data.meta["msg"] == "OK" && data["data"] && data["data"].length > 0 ) {
			data = data.data;

			var ap = "<img src='"+data[0].images.fixed_height.url+"' />"
			images[_index] = ap;
			share_images[_index] = data[0].id;

			count--;

			if( count == 0 ) {
				loadImages();
			}
		}
	});
}

var t;
var images;
var share_images;
var count;
var share_url;
$(document).ready(function() {
	$("form").submit(function(event){
		event.preventDefault();
		
		images = [];
		share_images = [];
		
		var words = $("#textbox").val().split(" ");

		count = words.length;
		
		for( var i = 0; i < words.length; i++ ) {
			checkGIFs(words[i], i);
		}
	})
});