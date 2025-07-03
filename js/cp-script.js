var cp_rotator_first = $('#rotator .carousel-item:first-child');
var cp_rotator_caption = $('#rotator-caption');
var cp_rotator_controls = $('#rotator-controls');

cp_rotator_first.addClass('active');
cp_rotator_caption.html(cp_rotator_first.find('.carousel-caption').html());


var init_rotator = function() {
	$('#rotator').on('slide.bs.carousel', function(e) {
		cp_rotator_caption.fadeOut(function() {
			cp_rotator_caption.html(
				$(e.relatedTarget).find('.carousel-caption').html()
			);
			cp_rotator_caption.fadeIn();
		});
	});
	cp_rotator_controls.on('click', function() {
		var icon = $('i', this);
		var next;
		if (icon.hasClass('fa-pause')) {
			$('#rotator .carousel').carousel('pause');
			icon.removeClass('fa-pause').addClass('fa-play');
		} else {
			$('#rotator .carousel').carousel('cycle');
			icon.removeClass('fa-play').addClass('fa-pause');
		}
	});
	$('#rotator .carousel-item').each(function(index, value) {
		$('#rotator .carousel-indicators').append($('<li>')
			.attr('data-target', '#rotator.carousel')
			.attr('data-slide-to', index));
	});
	$('#rotator .carousel-indicators li:first-child').addClass('active');
};

$(function() {
	init_rotator();
});
