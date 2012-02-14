Image Side Slide - jQuery plug-in
---------------------------------

jQuery plug-in which will slide background image position of an DOM element through number of predefined positions.


Pre-usage:
----------

1. include [jQuery](http://jquery.com/) in your document - `<script type="text/javascript" src="jquery.min.js"></script>`
2. include the plugin file - `<script type="text/javascript" src="jquery.sideslide-vX.X.js"></script>`

Demo:
-----

http://jsfiddle.net/paLBA/

Example of usage:
-----------------
 
### jQuery:

	$(document).ready(function () {
		$('.mydiv').sideslide({
			image: 'http://placehold.it/600x150&text=This+is+test+of+%22Image+Side+Slide%22+Plug-in',
			duration: 5000,
			startPoint: '0px',
			toPoint: '680px',
			backPoint: '0px'
		});
	});

### HTML:

	<div class="mydiv"></div>

### CSS:

	.mydiv {
		border: none;
		cursor: pointer;
		height: 150px;
		width: 150px;
	}