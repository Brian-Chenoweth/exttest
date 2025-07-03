// JavaScript Document

$(document).ready( function() {
		$(window).resize(resize);
		resize();
		$('.mobile-dropdown-links').addClass('no-transition');
	});	


function resize() {
		$('.dropdown-menu').removeClass('show');
		event.stopPropagation();
	
		if ($(window).width() > 767) {
			$('.nav-collapse').addClass('show');
		}
		else {
			$('.nav-collapse').removeClass('show');
		}
	}

$(function() {
      $( '.top-link' ).on( 'click', function() {
          $( this ).parent().find( '.top-link' ).toggleClass( 'gold' );
$( '.top-link' ).not($(this)).removeClass( 'gold' );
      });
});

$(window).click(function() {
	$('a.top-link').removeClass('gold');
});