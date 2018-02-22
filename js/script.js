jQuery(document).ready(function($) {
	$("#fig4 img").elevateZoom({
	  zoomType				: "inner",
	  cursor: "crosshair"
	});

	$('header a').click( function(){
		var id = $(this).attr('href');

		//console.log($(id));
		$("html, body").animate({ scrollTop: ( $(id).offset().top - 80 ) }, "slow");
		return false;
	});

});



