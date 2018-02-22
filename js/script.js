$('header a').click( function(){
	var $this = $(this);

	$("html, body").animate({ scrollTop: ( $this.offset().top - ( ( $('header').outerHeight() || 0 ) + 25 ) ) }, "slow");
	return false;
});