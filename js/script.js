$('header a').click( function(){
	var id = $(this).attr('href');

	//console.log($(id));
	$("html, body").animate({ scrollTop: ( $(id).offset().top - 80 ) }, "slow");
	return false;
});