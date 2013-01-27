Image Side Slide - jQuery plug-in
---------------------------------

jQuery plug-in which will slide background image position of an DOM element through number of predefined positions.

License:
--------

	MIT License
	===========

	Copyright (c) 2012 Sasha Khamkov

	Permission is hereby granted, free of charge, to any person obtaining a
	copy of this software and associated documentation files (the "Software"),
	to deal in the Software without restriction, including without limitation
	the rights to use, copy, modify, merge, publish, distribute, sublicense,
	and/or sell copies of the Software, and to permit persons to whom the
	Software is furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
	THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
	FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
	DEALINGS IN THE SOFTWARE.

Pre-usage:
----------

1. include [jQuery](http://jquery.com/) in your document - `<script type="text/javascript" src="jquery.min.js"></script>`
2. include the plugin file - `<script type="text/javascript" src="jquery.sideslide-vX.X.X.js"></script>`

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