/* code for preview only */
var $ = jQuery['noConflict']();
(function($) {
    'use strict';
    var _0x163bx2 = $('html');
    var _0x163bx3 = $('body');
    (function() {
        if (navigator['userAgent']['match'](/IEMobile\/10\.0/)) {
            var _0x163bx4 = document['createElement']('style');
            _0x163bx4['appendChild'](document['createTextNode']('@-ms-viewport{width:auto!important}'));
            document['querySelector']('head')['appendChild'](_0x163bx4)
        }
    })();
    var _0x163bx5;
    var _0x163bx6;
    if (_0x163bx2['hasClass']('desktop')) {
        _0x163bx2['addClass']('is-desktop');
        _0x163bx5 = false;
        _0x163bx6 = true
    } else {
        _0x163bx2['addClass']('is-mobile');
        _0x163bx5 = true;
        _0x163bx6 = false
    };
    if (_0x163bx2['hasClass']('ie9')) {
        var _0x163bx7 = true
    };

    function _0x163bx8() {
        $('a[href^=#]')['on']('click', function(_0x163bx9) {
            var _0x163bxa = $(this)['attr']('href');
            _0x163bx9['preventDefault']();
            $(_0x163bxa)['velocity']('stop')['velocity']('scroll', {
                duration: 1000,
                easing: [0.710, 0.100, 0.3, 1.000],
                offset: -100
            })
        });
        _0x163bx3['scrollspy']({
            target: '.navbar',
            offset: 120
        });
        $('.navbar-nav li a')['on']('click', function(_0x163bx9) {
            if (!$(this)['parent']()['hasClass']('dropdown')) {
                $('.navbar-collapse')['collapse']('hide')
            }
        })
    }
    _0x163bx8();

    function _0x163bxb() {
        Waves['attach']('.btn', 'waves-light');
        Waves['init']()
    }
    _0x163bxb();

    function _0x163bxc() {
        var _0x163bxd = $('.site-bg-overlay');
        if (_site_bg_overlay_disable) {
            _0x163bxd['remove']()
        };
        if (!_bg_style_desktop == 0 || !_bg_style_desktop == 1) {
            $('.is-desktop')['find'](_0x163bxd)['css']('background-color', _site_bg_overlay_color)
        };
        if (!_bg_style_mobile == 0 || !_bg_style_mobile == 1) {
            $('.is-mobile')['find'](_0x163bxd)['css']('background-color', _site_bg_overlay_color)
        }
    }
    _0x163bxc();

    function _0x163bxe() {
        var _0x163bxf = $('.site-loader');
        _0x163bxf['velocity']({
            translateZ: 0,
            translateY: '-100%'
        }, {
            queue: false,
            delay: 500,
            duration: 1500,
            easing: [0.710, 0.100, 0.3, 1.000],
            complete: function() {
                $(this)['remove']();
                _0x163bx3['addClass']('is-loaded');
                _0x163bx4c()
            }
        });
        $('.site-main')['velocity']({
            translateZ: 0,
            translateY: [0, 300]
        }, {
            queue: false,
            delay: 500,
            duration: 1500,
            easing: [0.710, 0.100, 0.3, 1.000]
        })
    }
    $(window)['on']('load', function() {
        _0x163bxe()
    });

    function _0x163bx10() {
        $(window)['on']('load', function() {
            _0x163bx11()
        });
        $(window)['on']('scroll', function() {
            _0x163bx11()
        });

        function _0x163bx11() {
            var _0x163bx12 = $(window)['scrollTop']();
            (_0x163bx12 > 0) ? _0x163bx3['addClass']('is-scroll'): _0x163bx3['removeClass']('is-scroll')
        }
    }
    _0x163bx10();

    function _0x163bx13() {
        var _0x163bx14 = $('#contactForm');
        var _0x163bx15 = _0x163bx14['find']('.form-notify');
        _0x163bx14['validate']({
            onfocusout: false,
            onkeyup: false,
            onclick: false,
            rules: {
                name: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true
                }
            },
            errorPlacement: function(_0x163bx16, _0x163bx17) {},
            highlight: function(_0x163bx17) {
                $(_0x163bx17)['parent']('.form-group')['addClass']('error')
            },
            unhighlight: function(_0x163bx17) {
                $(_0x163bx17)['parent']('.form-group')['removeClass']('error')
            },
            submitHandler: function(_0x163bx18) {
                $(_0x163bx18)['ajaxSubmit']({
                    type: 'POST',
                    url: 'assets/php/contact.php',
                    dataType: 'json',
                    cache: false,
                    data: _0x163bx14['serialize'](),
                    success: function(_0x163bx19) {
                        if (_0x163bx19['code'] === 0) {
                            _0x163bx14['validate']()['resetForm']();
                            _0x163bx14[0]['reset']();
                            _0x163bx14['find']('.form-label')['removeClass']('error');
                            _0x163bx14['find']('button')['blur']();
                            _0x163bx15['removeClass']('valid error')['addClass']('valid')['html']('<i class="fa fa-check-square"></i>' + _0x163bx19['message'])['show']()
                        } else {
                            _0x163bx15['removeClass']('valid error')['addClass']('error')['html'](_0x163bx19['message'])['show']()
                        }
                    },
                    error: function(_0x163bx19) {
                        _0x163bx15['removeClass']('valid')['addClass']('error')['html']('<i class="fa fa-warning"></i>An error occurred. Please try again later.')['show']()
                    }
                })
            },
            invalidHandler: function(_0x163bx1a, _0x163bx1b) {
                var _0x163bx1c = _0x163bx1b['numberOfInvalids']();
                if (_0x163bx1c) {
                    var _0x163bx1d = _0x163bx1c == 1 ? '<i class="fa fa-warning"></i>You missed 1 field. It has been highlighted.' : '<i class="fa fa-warning"></i>You missed ' + _0x163bx1c + ' fields. They have been highlighted.';
                    _0x163bx15['removeClass']('valid error')['addClass']('error')['html'](_0x163bx1d)['show']()
                }
            }
        })
    }
    _0x163bx13();

    function _0x163bx1e() {
        if (_0x163bx5) {
            if (_bg_style_mobile === 0 || _bg_style_mobile == 1) {
                _0x163bx3['addClass']('site-bg-color')
            };
            if (_bg_style_mobile == 2 || _bg_style_mobile == 3) {
                _0x163bx1f()
            } else {
                if (_bg_style_mobile == 4 || _bg_style_mobile == 5 || _bg_style_mobile == 6 || _bg_style_mobile == 7) {
                    $(window)['on']('load', function() {
                        _0x163bx20()
                    })
                }
            }
        } else {
            if (_bg_style_desktop === 0 || _bg_style_desktop == 1) {
                _0x163bx3['addClass']('site-bg-color')
            };
            if (_bg_style_desktop == 2 || _bg_style_desktop == 3) {
                _0x163bx1f()
            } else {
                if (_bg_style_desktop == 4 || _bg_style_desktop == 5 || _bg_style_desktop == 6 || _bg_style_desktop == 7) {
                    _0x163bx20()
                } else {
                    if (_bg_style_desktop == 8 || _bg_style_desktop == 9 || _bg_style_desktop == 10) {
                        _0x163bx25()
                    } else {
                        if (_bg_style_desktop == 11 || _bg_style_desktop == 12 || _bg_style_desktop == 13) {
                            _0x163bx29()
                        }
                    }
                }
            }
        }
    }
    _0x163bx1e();

    function _0x163bx1f() {
        _0x163bx3['addClass']('is-site-bg-img');
        $('.site-bg-video')['remove']()
    }

    function _0x163bx20() {
        var _0x163bx21 = $('.site-bg-img');
        $('.site-bg-video')['remove']();
        _0x163bx3['addClass']('is-site-bg-slideshow');
        for (var _0x163bx22 = 1; _0x163bx22 <= _bg_slideshow_image_amount; _0x163bx22++) {
            _0x163bx21['append']('<img src="assets/img/bg/site-bg-slideshow-' + (_0x163bx22 < 10 ? '0' + _0x163bx22 : _0x163bx22) + '.jpg">')
        };
        if (_0x163bx5) {
            if (_bg_style_mobile == 4 || _bg_style_mobile == 5) {
                _0x163bx23()
            } else {
                if (_bg_style_mobile == 6 || _bg_style_mobile == 7) {
                    _0x163bx24()
                }
            }
        } else {
            if (_bg_style_desktop == 4 || _bg_style_desktop == 5) {
                _0x163bx23()
            } else {
                if (_bg_style_desktop == 6 || _bg_style_desktop == 7) {
                    _0x163bx24()
                }
            }
        };

        function _0x163bx23() {
            _0x163bx21['ss']({
                fullscreen: true,
                duration: _bg_slideshow_duration,
                fadeInDuration: 1500
            })
        }

        function _0x163bx24() {
            _0x163bx21['kenburnsy']({
                fullscreen: true,
                duration: _bg_slideshow_duration,
                fadeInDuration: 1500
            })
        }
    }

    function _0x163bx25() {
        var _0x163bx26 = $('.site-bg-video');
        var _0x163bx27 = $('.audio-toggle');
        _0x163bx3['addClass']('is-site-bg-video');
        _0x163bx26['append']('<video id="bgVideo" autoplay loop>' + '<source src="assets/video/video.mp4" type="video/mp4">' + '</video>');
        var _0x163bx28 = document['getElementById']('bgVideo');
        if (_bg_style_desktop == 8) {
            _0x163bx28['muted'] = true;
            _0x163bx27['remove']()
        } else {
            if (_bg_style_desktop == 9) {
                _0x163bx3['addClass']('is-audio-on');
                _0x163bx27['on']('click', function() {
                    if (_0x163bx3['hasClass']('is-audio-on')) {
                        _0x163bx28['muted'] = true;
                        _0x163bx3['removeClass']('is-audio-on')['addClass']('is-audio-off')
                    } else {
                        if (_0x163bx3['hasClass']('is-audio-off')) {
                            _0x163bx28['muted'] = false;
                            _0x163bx3['removeClass']('is-audio-off')['addClass']('is-audio-on')
                        }
                    }
                })
            }
        }
    }

    function _0x163bx29() {
        var _0x163bx26 = $('.site-bg-video');
        var _0x163bx27 = $('.audio-toggle');
        _0x163bx3['addClass']('is-site-bg-video-youtube');
        if (_bg_style_desktop == 11 || _bg_style_desktop == 13) {
            _0x163bx26['attr']('data-property', '{videoURL: _bg_video_youtube_url, autoPlay: true, loop: _bg_video_youtube_loop, startAt: _bg_video_youtube_start, stopAt: _bg_video_youtube_end, mute: true, quality: _bg_video_youtube_quality, realfullscreen: true, optimizeDisplay: true, addRaster: false, showYTLogo: false, showControls: false, stopMovieOnBlur: false, containment: "self"}');
            _0x163bx26.YTPlayer()
        } else {
            _0x163bx26['attr']('data-property', '{videoURL: _bg_video_youtube_url, autoPlay: true, loop: _bg_video_youtube_loop, startAt: _bg_video_youtube_start, stopAt: _bg_video_youtube_end, mute: false, quality: _bg_video_youtube_quality, realfullscreen: true, optimizeDisplay: true, addRaster: false, showYTLogo: false, showControls: false, stopMovieOnBlur: false, containment: "self"}');
            _0x163bx26.YTPlayer();
            _0x163bx3['addClass']('is-audio-on');
            _0x163bx27['on']('click', function() {
                if (_0x163bx3['hasClass']('is-audio-on')) {
                    _0x163bx26.YTPMute();
                    _0x163bx3['removeClass']('is-audio-on')['addClass']('is-audio-off')
                } else {
                    if (_0x163bx3['hasClass']('is-audio-off')) {
                        _0x163bx26.YTPUnmute();
                        _0x163bx3['removeClass']('is-audio-off')['addClass']('is-audio-on')
                    }
                }
            })
        }
    }

    function _0x163bx2a() {
        if (_bg_style_mobile == 1 || _bg_style_mobile == 3 || _bg_style_mobile == 5 || _bg_style_mobile == 7 || _bg_style_desktop == 1 || _bg_style_desktop == 3 || _bg_style_desktop == 5 || _bg_style_desktop == 7 || _bg_style_desktop == 10 || _bg_style_desktop == 13) {
            _0x163bx3['append']('<audio id="audioPlayer" loop>' + '<source src="assets/audio/audio.mp3" type="audio/mpeg">' + '</audio>')
        };
        if (_0x163bx5) {
            if (_bg_style_mobile == 1 || _bg_style_mobile == 3 || _bg_style_mobile == 5 || _bg_style_mobile == 7) {
                _0x163bx3['addClass']('is-audio-off');
                _0x163bx2c()
            }
        } else {
            if (_bg_style_desktop == 1 || _bg_style_desktop == 3 || _bg_style_desktop == 5 || _bg_style_desktop == 7 || _bg_style_desktop == 10 || _bg_style_desktop == 14) {
                var _0x163bx2b = document['getElementById']('audioPlayer');
                _0x163bx3['addClass']('is-audio-on');
                _0x163bx2b['play']();
                _0x163bx2c()
            }
        };

        function _0x163bx2c() {
            var _0x163bx27 = $('.audio-toggle');
            var _0x163bx2b = document['getElementById']('audioPlayer');
            _0x163bx27['on']('click', function() {
                var _0x163bx2d = $(this);
                if (_0x163bx3['hasClass']('is-audio-on')) {
                    _0x163bx2b['pause']();
                    _0x163bx3['removeClass']('is-audio-on')['addClass']('is-audio-off')
                } else {
                    if (_0x163bx3['hasClass']('is-audio-off')) {
                        _0x163bx2b['play']();
                        _0x163bx3['removeClass']('is-audio-off')['addClass']('is-audio-on')
                    }
                }
            })
        }
    }
    _0x163bx2a();

    function _0x163bx2e() {
        if (_site_bg_effect === 0) {
            $('.site-bg-canvas')['remove']()
        } else {
            if (_site_bg_effect == 1) {
                _0x163bx2f()
            } else {
                if (_site_bg_effect == 2) {
                    _0x163bx45()
                } else {
                    if (_site_bg_effect == 3) {
                        _0x163bx4a()
                    }
                }
            }
        }
    }

    function _0x163bx2f() {
        var _0x163bx30 = $('.site-bg-canvas');
        _0x163bx3['addClass']('is-site-bg-constellation');

        function _0x163bx31(_0x163bx32) {
            var _0x163bx33 = 12000;
            var _0x163bx34 = 0.2;
            var _0x163bx35 = $(window)['width']();
            var _0x163bx36 = $(window)['height']();
            var _0x163bx37 = Math['round'](_0x163bx36 * _0x163bx35 / _0x163bx33);
            var _0x163bx2d = $(this),
                _0x163bx38 = _0x163bx32['getContext']('2d');
            _0x163bx2d['config'] = {
                star: {
                    color: _constellation_color,
                    width: _constellation_width
                },
                line: {
                    color: _constellation_color,
                    width: 0.4
                },
                position: {
                    x: _0x163bx32['width'] * 0.5,
                    y: _0x163bx32['height'] * 0.5
                },
                velocity: _0x163bx34,
                length: _0x163bx37,
                distance: 130,
                radius: 120,
                stars: []
            };

            function _0x163bx39() {
                this['x'] = Math['random']() * _0x163bx32['width'];
                this['y'] = Math['random']() * _0x163bx32['height'];
                this['vx'] = (_0x163bx2d['config']['velocity'] - (Math['random']() * 0.3));
                this['vy'] = (_0x163bx2d['config']['velocity'] - (Math['random']() * 0.3));
                this['radius'] = Math['random']() * _0x163bx2d['config']['star']['width']
            }
            _0x163bx39['prototype'] = {
                create: function() {
                    _0x163bx38['beginPath']();
                    _0x163bx38['arc'](this['x'], this['y'], this['radius'], 0, Math['PI'] * 2, false);
                    _0x163bx38['fill']()
                },
                animate: function() {
                    var _0x163bx22;
                    for (_0x163bx22 = 0; _0x163bx22 < _0x163bx2d['config']['length']; _0x163bx22++) {
                        var _0x163bx3a = _0x163bx2d['config']['stars'][_0x163bx22];
                        if (_0x163bx3a['y'] < 0 || _0x163bx3a['y'] > _0x163bx32['height']) {
                            _0x163bx3a['vx'] = _0x163bx3a['vx'];
                            _0x163bx3a['vy'] = -_0x163bx3a['vy']
                        } else {
                            if (_0x163bx3a['x'] < 0 || _0x163bx3a['x'] > _0x163bx32['width']) {
                                _0x163bx3a['vx'] = -_0x163bx3a['vx'];
                                _0x163bx3a['vy'] = _0x163bx3a['vy']
                            }
                        };
                        _0x163bx3a['x'] += _0x163bx3a['vx'];
                        _0x163bx3a['y'] += _0x163bx3a['vy']
                    }
                },
                line: function() {
                    var _0x163bx3b = _0x163bx2d['config']['length'],
                        _0x163bx3c, _0x163bx3d, _0x163bx22, _0x163bx3e;
                    for (_0x163bx22 = 0; _0x163bx22 < _0x163bx3b; _0x163bx22++) {
                        for (_0x163bx3e = 0; _0x163bx3e < _0x163bx3b; _0x163bx3e++) {
                            _0x163bx3c = _0x163bx2d['config']['stars'][_0x163bx22];
                            _0x163bx3d = _0x163bx2d['config']['stars'][_0x163bx3e];
                            if ((_0x163bx3c['x'] - _0x163bx3d['x']) < _0x163bx2d['config']['distance'] && (_0x163bx3c['y'] - _0x163bx3d['y']) < _0x163bx2d['config']['distance'] && (_0x163bx3c['x'] - _0x163bx3d['x']) > -_0x163bx2d['config']['distance'] && (_0x163bx3c['y'] - _0x163bx3d['y']) > -_0x163bx2d['config']['distance']) {
                                if ((_0x163bx3c['x'] - _0x163bx2d['config']['position']['x']) < _0x163bx2d['config']['radius'] && (_0x163bx3c['y'] - _0x163bx2d['config']['position']['y']) < _0x163bx2d['config']['radius'] && (_0x163bx3c['x'] - _0x163bx2d['config']['position']['x']) > -_0x163bx2d['config']['radius'] && (_0x163bx3c['y'] - _0x163bx2d['config']['position']['y']) > -_0x163bx2d['config']['radius']) {
                                    _0x163bx38['beginPath']();
                                    _0x163bx38['moveTo'](_0x163bx3c['x'], _0x163bx3c['y']);
                                    _0x163bx38['lineTo'](_0x163bx3d['x'], _0x163bx3d['y']);
                                    _0x163bx38['stroke']();
                                    _0x163bx38['closePath']()
                                }
                            }
                        }
                    }
                }
            };
            _0x163bx2d['createStars'] = function() {
                var _0x163bx3b = _0x163bx2d['config']['length'],
                    _0x163bx3a, _0x163bx22;
                _0x163bx38['clearRect'](0, 0, _0x163bx32['width'], _0x163bx32['height']);
                for (_0x163bx22 = 0; _0x163bx22 < _0x163bx3b; _0x163bx22++) {
                    _0x163bx2d['config']['stars']['push'](new _0x163bx39());
                    _0x163bx3a = _0x163bx2d['config']['stars'][_0x163bx22];
                    _0x163bx3a['create']()
                };
                _0x163bx3a['line']();
                _0x163bx3a['animate']()
            };
            _0x163bx2d['setCanvas'] = function() {
                _0x163bx32['width'] = window['innerWidth'];
                _0x163bx32['height'] = window['innerHeight']
            };
            _0x163bx2d['setContext'] = function() {
                _0x163bx38['fillStyle'] = _0x163bx2d['config']['star']['color'];
                _0x163bx38['strokeStyle'] = _0x163bx2d['config']['line']['color'];
                _0x163bx38['lineWidth'] = _0x163bx2d['config']['line']['width'];
                _0x163bx38['fill']()
            };
            _0x163bx2d['loop'] = function(_0x163bx3f) {
                _0x163bx3f();
                _0x163bx40(function() {
                    _0x163bx2d['loop'](function() {
                        _0x163bx3f()
                    })
                })
            };
            _0x163bx2d['bind'] = function() {
                $(window)['on']('mousemove', function(_0x163bx9) {
                    _0x163bx2d['config']['position']['x'] = _0x163bx9['pageX'];
                    _0x163bx2d['config']['position']['y'] = _0x163bx9['pageY']
                })
            };
            _0x163bx2d['init'] = function() {
                _0x163bx2d['setCanvas']();
                _0x163bx2d['setContext']();
                _0x163bx2d['loop'](function() {
                    _0x163bx2d['createStars']()
                });
                _0x163bx2d['bind']()
            };
            return _0x163bx2d
        }
        var _0x163bx40 = window['requestAnimationFrame'] || window['mozRequestAnimationFrame'] || window['webkitRequestAnimationFrame'] || window['msRequestAnimationFrame'] || function(_0x163bx3f) {
            window['setTimeout'](_0x163bx3f, 1000 / 60)
        };
        $(window)['on']('load', function() {
            setTimeout(function() {
                _0x163bx31($('canvas')[0])['init']();
                _0x163bx30['velocity']('transition.fadeIn', {
                    duration: 3000
                })
            }, 1000)
        });
        var _0x163bx41 = (function() {
            var _0x163bx42 = {};
            return function(_0x163bx3f, _0x163bx43, _0x163bx44) {
                if (!_0x163bx44) {
                    _0x163bx44 = ''
                };
                if (_0x163bx42[_0x163bx44]) {
                    clearTimeout(_0x163bx42[_0x163bx44])
                };
                _0x163bx42[_0x163bx44] = setTimeout(_0x163bx3f, _0x163bx43)
            }
        })();
        $(window)['resize'](function() {
            _0x163bx41(function() {
                _0x163bx31($('canvas')[0])['init']()
            }, 800, '')
        })
    }

    function _0x163bx45() {
        var _0x163bx46 = $('.site-bg-effect');
        _0x163bx3['addClass']('is-site-bg-parallax-star');
        $('.site-bg-canvas')['remove']();
        _0x163bx46['css']('opacity', 0);
        _0x163bx46['append']('<div class="parallax-star parallax-star-01"></div>' + '<div class="parallax-star parallax-star-02"></div>' + '<div class="parallax-star parallax-star-03"></div>');

        function _0x163bx47() {
            $('.parallax-star-01')['velocity']({
                translateZ: 0,
                translateY: [-2000, 0]
            }, {
                queue: false,
                delay: 0,
                duration: 70000,
                easing: 'linear',
                complete: _0x163bx47
            })
        }
        _0x163bx47();

        function _0x163bx48() {
            $('.parallax-star-02')['velocity']({
                translateZ: 0,
                translateY: [-2000, 0]
            }, {
                queue: false,
                delay: 0,
                duration: 85000,
                easing: 'linear',
                complete: _0x163bx48
            })
        }
        _0x163bx48();

        function _0x163bx49() {
            $('.parallax-star-03')['velocity']({
                translateZ: 0,
                translateY: [-2000, 0]
            }, {
                queue: false,
                delay: 0,
                duration: 100000,
                easing: 'linear',
                complete: _0x163bx49
            })
        }
        _0x163bx49();
        $(window)['on']('load', function() {
            setTimeout(function() {
                _0x163bx46['velocity']({
                    translateZ: '0',
                    opacity: [_parallax_star_opacity, 0]
                }, {
                    display: 'block',
                    duration: 3000
                })
            }, 1000)
        })
    }
    _0x163bx2e();

    function _0x163bx4a() {
        _0x163bx3['addClass']('is-site-bg-particles');
        $('.site-bg-effect, .site-bg-canvas')['remove']();
        particlesJS('particles-js', {
            "\x70\x61\x72\x74\x69\x63\x6C\x65\x73": {
                "\x6E\x75\x6D\x62\x65\x72": {
                    "\x76\x61\x6C\x75\x65": 25,
                    "\x64\x65\x6E\x73\x69\x74\x79": {
                        "\x65\x6E\x61\x62\x6C\x65": true,
                        "\x76\x61\x6C\x75\x65\x5F\x61\x72\x65\x61": 500
                    }
                },
                "\x63\x6F\x6C\x6F\x72": {
                    "\x76\x61\x6C\x75\x65": '#ffffff'
                },
                "\x6F\x70\x61\x63\x69\x74\x79": {
                    "\x76\x61\x6C\x75\x65": _particles_opacity,
                    "\x72\x61\x6E\x64\x6F\x6D": false,
                    "\x61\x6E\x69\x6D": {
                        "\x65\x6E\x61\x62\x6C\x65": false,
                        "\x73\x70\x65\x65\x64": 1,
                        "\x6F\x70\x61\x63\x69\x74\x79\x5F\x6D\x69\x6E": 0.1,
                        "\x73\x79\x6E\x63": false
                    }
                },
                "\x73\x69\x7A\x65": {
                    "\x76\x61\x6C\x75\x65": 4,
                    "\x72\x61\x6E\x64\x6F\x6D": true,
                    "\x61\x6E\x69\x6D": {
                        "\x65\x6E\x61\x62\x6C\x65": false,
                        "\x73\x70\x65\x65\x64": 40,
                        "\x73\x69\x7A\x65\x5F\x6D\x69\x6E": 0.1,
                        "\x73\x79\x6E\x63": false
                    }
                },
                "\x6C\x69\x6E\x65\x5F\x6C\x69\x6E\x6B\x65\x64": {
                    "\x65\x6E\x61\x62\x6C\x65": true,
                    "\x64\x69\x73\x74\x61\x6E\x63\x65": 150,
                    "\x63\x6F\x6C\x6F\x72": '#ffffff',
                    "\x6F\x70\x61\x63\x69\x74\x79": _particles_link_opacity,
                    "\x77\x69\x64\x74\x68": 1
                },
                "\x6D\x6F\x76\x65": {
                    "\x65\x6E\x61\x62\x6C\x65": true,
                    "\x73\x70\x65\x65\x64": 6,
                    "\x64\x69\x72\x65\x63\x74\x69\x6F\x6E": 'none',
                    "\x72\x61\x6E\x64\x6F\x6D": false,
                    "\x73\x74\x72\x61\x69\x67\x68\x74": false,
                    "\x6F\x75\x74\x5F\x6D\x6F\x64\x65": 'out',
                    "\x62\x6F\x75\x6E\x63\x65": false,
                    "\x61\x74\x74\x72\x61\x63\x74": {
                        "\x65\x6E\x61\x62\x6C\x65": false,
                        "\x72\x6F\x74\x61\x74\x65\x58": 600,
                        "\x72\x6F\x74\x61\x74\x65\x59": 1200
                    }
                }
            },
            "\x69\x6E\x74\x65\x72\x61\x63\x74\x69\x76\x69\x74\x79": {
                "\x64\x65\x74\x65\x63\x74\x5F\x6F\x6E": 'canvas',
                "\x65\x76\x65\x6E\x74\x73": {
                    "\x6F\x6E\x68\x6F\x76\x65\x72": {
                        "\x65\x6E\x61\x62\x6C\x65": false,
                        "\x6D\x6F\x64\x65": 'repulse'
                    },
                    "\x6F\x6E\x63\x6C\x69\x63\x6B": {
                        "\x65\x6E\x61\x62\x6C\x65": false,
                        "\x6D\x6F\x64\x65": 'push'
                    },
                    "\x72\x65\x73\x69\x7A\x65": true
                },
                "\x6D\x6F\x64\x65\x73": {
                    "\x67\x72\x61\x62": {
                        "\x64\x69\x73\x74\x61\x6E\x63\x65": 400,
                        "\x6C\x69\x6E\x65\x5F\x6C\x69\x6E\x6B\x65\x64": {
                            "\x6F\x70\x61\x63\x69\x74\x79": 1
                        }
                    },
                    "\x62\x75\x62\x62\x6C\x65": {
                        "\x64\x69\x73\x74\x61\x6E\x63\x65": 400,
                        "\x73\x69\x7A\x65": 40,
                        "\x64\x75\x72\x61\x74\x69\x6F\x6E": 2,
                        "\x6F\x70\x61\x63\x69\x74\x79": 8,
                        "\x73\x70\x65\x65\x64": 3
                    },
                    "\x72\x65\x70\x75\x6C\x73\x65": {
                        "\x64\x69\x73\x74\x61\x6E\x63\x65": 200,
                        "\x64\x75\x72\x61\x74\x69\x6F\x6E": 0.4
                    },
                    "\x70\x75\x73\x68": {
                        "\x70\x61\x72\x74\x69\x63\x6C\x65\x73\x5F\x6E\x62": 4
                    },
                    "\x72\x65\x6D\x6F\x76\x65": {
                        "\x70\x61\x72\x74\x69\x63\x6C\x65\x73\x5F\x6E\x62": 2
                    }
                }
            },
            "\x72\x65\x74\x69\x6E\x61\x5F\x64\x65\x74\x65\x63\x74": true
        })
    }

    function _0x163bx4b() {
        if (_side_bg_effect_parallax && !_0x163bx5 && !_0x163bx7) {
            $('.site-bg')['parallax']()
        }
    }
    $(window)['on']('load', function() {
        _0x163bx4b()
    });

    function _0x163bx4c() {
        if (!_0x163bx5 && !_0x163bx7) {
            var _0x163bx4d = {
                origin: 'bottom',
                distance: '20px',
                duration: 800,
                delay: 0,
                rotate: {
                    x: 0,
                    y: 0,
                    z: 0
                },
                opacity: 0,
                scale: 0,
                easing: 'ease-in-out',
                container: null,
                mobile: false,
                reset: true,
                useDelay: 'always',
                viewFactor: 0.2,
                viewOffset: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
                afterReveal: function(_0x163bx4e) {},
                afterReset: function(_0x163bx4e) {}
            };
            window['sr'] = new ScrollReveal(_0x163bx4d);
            if ($('[data-sr=top]')['length']) {
                sr['reveal']('[data-sr=top]', {
                    origin: 'top'
                })
            };
            if ($('[data-sr=right]')['length']) {
                sr['reveal']('[data-sr=right]', {
                    origin: 'right'
                })
            };
            if ($('[data-sr=bottom]')['length']) {
                sr['reveal']('[data-sr=bottom]', {
                    origin: 'bottom'
                })
            };
            if ($('[data-sr=left]')['length']) {
                sr['reveal']('[data-sr=left]', {
                    origin: 'left'
                })
            }
        }
    }
})(jQuery)