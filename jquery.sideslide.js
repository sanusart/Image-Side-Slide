/**
 * Name:       Image Side Slide
 * Dependency: jQuery 1.6+
 * Author:     Sasha Khamkov
 * URL:        http://sanusart.com
 * License:    The MIT License (MIT) - http://www.opensource.org/licenses/MIT
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 Usage:  
 a) include jQuery in your document.
 b) include this file.
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 Example:
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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
 --------------------------------------------------
 HTML:
 <div class="mydiv"></div>
 --------------------------------------------------
 CSS:
 .mydiv {
 border: none;
 cursor: pointer;
 height: 150px;
 width: 150px;
 }
 --------------------------------------------------
 */
(function($) {
	$.fn.extend({

		sideslide : function(options) {

			var options = $.extend(defaults, options);

			return this.each(function() {
				var o = options;
				var _elem_ = $(this);
				if(o.initialPosition !== '') {
					_elem_.css('backgroundPosition', o.startPoint);
				}
				_elem_.css('background-image', 'url(' + o.image + ')');
				_elem_.click(function() {_elem_.animate({
						'backgroundPosition' : o.toPoint
					}, {
						duration : o.duration
					}), _elem_.animate({
						'backgroundPosition' : o.backPoint
					}, {
						duration : o.duration
					});
				});
			});
			var defaults = {
				image : 'http://placehold.it/600x150&text=This+is+test+of+%22Image+Side+Slide%22+Plug-in',
				duration : 5000,
				startPoint : '0px',
				toPoint : '680px',
				backPoint : '0px'
			}

		}
	});
})(jQuery);
