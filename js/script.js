$(function(){
	// start with first slide
	var i = 1;
	$('#slide1').addClass('currentSlide');
	$('.bull:nth-child(' + i + ')').addClass('currentBull');

	// bull clicks
	$('.bull').click(function(){
		i = $(this).text();
		$('.slide').removeClass('currentSlide');
		$('#slide' + i).addClass('currentSlide');
		$('.bull').removeClass('currentBull');
		$(this).addClass('currentBull');
	});

	// keyboard nav
	$(document).keydown(function(e) {
		switch(e.which) {
			case 39: // right
			case 38: // up
			case 32: // space
				if (i <= 11) {
					i++;
					$('.slide').removeClass('currentSlide');
					$('#slide' + i).addClass('currentSlide');
					$('.bull').removeClass('currentBull');
					$('.bull:nth-child(' + i + ')').addClass('currentBull');
				}
				break;

			case 37: // left
			case 40: // down
				if (i >= 2) {
					i--;
					$('.slide').removeClass('currentSlide');
					$('#slide' + i).addClass('currentSlide');
					$('.bull').removeClass('currentBull');
					$('.bull:nth-child(' + i + ')').addClass('currentBull');
				}
				break;

			default: return;
		}
		e.preventDefault();
	});
});
