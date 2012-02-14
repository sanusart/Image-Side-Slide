Image Side Slide - jQuery plug-in
=================================

jQuery plug-in which will slide background image position of an DOM element through number of predefined positions.


Pre-usage:
----------

Step 1 
	include jQuery in your document.
Step 2
	include this file.

Example of usage:
-----------------
 
jQuery:
	$(document).ready(function () {
		$('.mydiv').sideslide({
			image: 'http://placehold.it/600x150&text=This+is+test+of+%22Image+Side+Slide%22+Plug-in',
			duration: 5000,
			startPoint: '0px',
			toPoint: '680px',
			backPoint: '0px'
		});
	});

HTML:
	<div class="mydiv"></div>

CSS:
	.mydiv {
		border: none;
		cursor: pointer;
		height: 150px;
		width: 150px;
	}