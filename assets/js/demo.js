/* for the demo only */
var $ = jQuery['noConflict']();
(function($) {
    'use strict';
    var _0x5b0ex2 = $('html');
    var _0x5b0ex3 = $('body');

    function _0x5b0ex4() {
        $('.ccard__toggle')['on']('click', function(_0x5b0ex5) {
            _0x5b0ex5['preventDefault']();
            _0x5b0ex3['toggleClass']('ccard-in');
        });
        $('[data-type="toggle"]')['find']('a')['each'](function() {
            var _0x5b0ex6 = $(this);
            if (_0x5b0ex6['hasClass']('_on')) {
                _0x5b0ex3['removeClass'](_0x5b0ex6['data']('off'))['addClass'](_0x5b0ex6['data']('on'))
            } else {
                _0x5b0ex3['removeClass'](_0x5b0ex6['data']('oo'))['addClass'](_0x5b0ex6['data']('off'))
            };
            _0x5b0ex6['on']('click', function() {
                _0x5b0ex6['toggleClass']('_on');
                _0x5b0ex3['toggleClass'](_0x5b0ex6['data']('on') + ' ' + _0x5b0ex6['data']('off'));
            });
        });
    }
    _0x5b0ex4();
})(jQuery);