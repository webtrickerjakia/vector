(function ($) {
    $(function () {

        // Mobi Menu anim
        $('.hamburger').click(function () {
            $("body").toggleClass("navShown");
        });

        // Preloader anim
        setTimeout(function () {
            $('body').addClass('preloaders-loaded');

        }, 1000)



        var header = new Headroom(document.querySelector('header'), {
            tolarence: 80,
            offset: 55,
            classes: {
                initial: 'headroom',
                pinned: 'slidedown',
                unpinned: 'slideup',
            }
        });
        header.init();





        // text reveal anim
        if ($('.hasPreloader').length) {
            setTimeout(function () {
                var res = Splitting({
                    target: '.reveal-text',
                    by: 'lines',
                });

                Splitting();

                res.forEach((splitResult) => {
                    const wrappedLines = splitResult.lines.map((wordsArr) => `
            <span class="line"><span class="mask-up">
            ${wordsArr.map((word) => `${word.outerHTML}<span class="whitespace">
            </span>`).join('')}
            </span></span>`).join('');
                    splitResult.el.innerHTML = wrappedLines;
                });
                inView.threshold(0.75);
                inView(".reveal-text").on("enter", function (el) {
                    if (!el.classList.contains("has-animated")) {
                        anime({
                            targets: el.querySelectorAll(".mask-up"),
                            translateY: ["100%", "0%"],
                            duration: 700,
                            delay: anime.stagger(200),
                            easing: "easeOutQuad",
                            autoplay: true
                        });
                        el.classList.add("has-animated");
                    }
                });
            }, 1700)
        }

        if ($('.hasNoPreloader').length) {
            var res = Splitting({
                target: '.reveal-text',
                by: 'lines',
            });

            Splitting();

            res.forEach((splitResult) => {
                const wrappedLines = splitResult.lines.map((wordsArr) => `
            <span class="line"><span class="mask-up">
            ${wordsArr.map((word) => `${word.outerHTML}<span class="whitespace">
            </span>`).join('')}
            </span></span>`).join('');
                splitResult.el.innerHTML = wrappedLines;
            });
            inView.threshold(0.75);
            inView(".reveal-text").on("enter", function (el) {
                if (!el.classList.contains("has-animated")) {
                    anime({
                        targets: el.querySelectorAll(".mask-up"),
                        translateY: ["100%", "0%"],
                        duration: 700,
                        delay: anime.stagger(200),
                        easing: "easeOutQuad",
                        autoplay: true
                    });
                    el.classList.add("has-animated");
                }
            });
        }
        // Header anim
        var headerAnim = $('.header-anim').outerHeight() - $(window).outerHeight() - 50;

        // Slider
        if ($('.client-wrap').length) {
            $('.client-wrap').marquee({
                direction: 'left',
                duration: 60000,
                delayBeforeStart: 0,
                duplicated: true,
                startVisible: true
            });
        }

        // Slider
        if ($('.testimonial-item-slider-wrap').length) {
            $('.testimonial-item-slider-wrap').slick({
                dots: true,
                infinite: true,
                speed: 700,
                autoplay: true,
                autoplaySpeed: 3000,
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1
            });
            $(window).on('resize', function () {
                $('.testimonial-item-slider-wrap').slick('resize');

            });
        }

  














        // Slider
        // if ($('.slider-with-dots').length) {
        //     $('.slider-with-dots').slick({
        //         dots: true,
        //         arrows: false,
        //         autoplay: false,
        //         autoplaySpeed: 2500,
        //         infinite: true,
        //         navigation: false,
        //         speed: 300,
        //         slidesToShow: 1,
        //         slidesToScroll: 1,
        //         fade: true,
        //         mobileFirst: true,
        //         swipe: false,
        //         responsive: [
        //             {
        //                 breakpoint: 1024,
        //                 settings: 'unslick'
        //                 }
        //             ]
        //     });
        //     $(window).on('resize', function () {
        //         $('.slider-with-dots').slick('resize');

        //     });
        //     var slider = $('.slider-with-dots');

        //     if (slider.find('.slick-dots li').hasClass('slick-active')){
        //         slider.find('.slick-active').addClass('customers-slider-dots-active customers-slider-round-active')
        //     }


        //     $('.slider-with-dots .slick-dots li').click(function (i) {
        //         var $$this = $(this);
        //      if ($$this.hasClass('slick-active')){
        //          $$this.removeClass('customers-slider-dots-active customers-slider-dots-glow')
        //          $$this.addClass('customers-slider-dots-active customers-slider-round-active')
        //          $$this.prev('li').removeClass('customers-slider-dots-active customers-slider-round-active')
        //          $$this.prev('li').prev('li').removeClass('customers-slider-dots-active customers-slider-round-active')
        //          $$this.prev('li').prev('li').prev('li').removeClass('customers-slider-dots-active customers-slider-round-active')
        //          $$this.prev('li').prev('li').prev('li').prev('li').removeClass('customers-slider-dots-active customers-slider-round-active')
        //          $$this.prev('li').addClass('customers-slider-dots-active customers-slider-dots-glow')
        //          $$this.prev('li').prev('li').addClass('customers-slider-dots-active customers-slider-dots-glow')
        //          $$this.prev('li').prev('li').prev('li').addClass('customers-slider-dots-active customers-slider-dots-glow')
        //          $$this.prev('li').prev('li').prev('li').prev('li').addClass('customers-slider-dots-active customers-slider-dots-glow')
        //          $$this.next('li').removeClass('customers-slider-dots-active customers-slider-round-active customers-slider-dots-glow')
        //          $$this.next('li').next().removeClass('customers-slider-dots-active customers-slider-round-active customers-slider-dots-glow')
        //          $$this.next('li').next().next().removeClass('customers-slider-dots-active customers-slider-round-active customers-slider-dots-glow')
        //          $$this.next('li').next().next().next().removeClass('customers-slider-dots-active customers-slider-round-active customers-slider-dots-glow')
        //      }else{

        //      }

        //     })



        // }





        // if ($('.slider-withno-dots').length) {
        //     $('.slider-withno-dots').slick({
        //         dots: false,
        //         arrows: false,
        //         autoplay: true,
        //         autoplaySpeed: 2500,
        //         infinite: true,
        //         navigation: false,
        //         speed: 300,
        //         slidesToShow: 1,
        //         slidesToScroll: 1,
        //         fade: false,
        //         mobileFirst: true,
        //         responsive: [
        //             {
        //                 breakpoint: 1024,
        //                 settings: 'unslick'
        //                 }
        //             ]
        //     });
        //     $(window).on('resize', function () {
        //         $('.slider-withno-dots').slick('resize');

        //     });
        // }
        // Slider
        if ($('.blog-item-wrap').length) {
            var $slider = $('.blog-item-wrap');
            $slider.slick({
                arrows: true,
                dots: false,
                infinite: false,
                slidesToShow: 2,
                centerMode: false,
                vertical: false,
                responsive: [{
                        breakpoint: 1025,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 570,
                        settings: {
                            slidesToShow: 1,
                        }
                    },
                ]
            });

            $(window).on('resize', function () {
                $('.blog-item-wrap').slick('resize');

            });
        }
        // Slider
        $('.newsletter-input-row').each(function () {
            var $_this = $(this)
            $('.newsletter-input-row').find('input, textarea').on('keyup', function () {
                var $$_this = $(this)
                if ($$_this.val() == '') {
                    $_this.removeClass('label_move');
                } else {
                    $_this.addClass('label_move');
                }
            });

        })

        var fullHeight = $('.main-wrap').outerHeight();
        $('html').height(fullHeight)

        // HeaderFlyout
        function check_Resize() {
            if ($(window).width() > 1024) {
                $(window).on('wheel', function () {
                    var scroll = $(window).scrollTop();
                    if (scroll > headerAnim) {
                        $('body').addClass('collapsed-sidebar')
                    } else {
                        $('body').removeClass('collapsed-sidebar')
                    }
                });
                $(window).on('scroll', function () {
                    var scrollTopY = $(this).scrollTop()
                    if ($(window).width() > 1024) {
                        if (scrollTopY > headerAnim) {
                            $('.collapsed-sidebar .main-header-section').on('mouseenter', function () {
                                $('body').removeClass('collapsed-sidebar')
                            })
                        }
                    }
                    if ($(window).width() < 1025) {
                        if (scrollTopY > headerAnim) {
                            $('.main-header-section').on('click', function () {
                                $('body').toggleClass('collapsed-sidebar')
                            })
                        }
                    }
                });
                if ($('.green-header').length) {
                    $('.green-header').each(function () {
                        var $$this = $(this);
                        var $$thisoffsetTop = $$this.offset().top,
                            $$thisWorkOffset = $$thisoffsetTop - $(window).outerHeight() - 50;
                        $(window).on('wheel', function () {
                            scrollTopPos = $(this).scrollTop();
                            if (scrollTopPos > $$thisWorkOffset) {
                                $('.main-header-section').addClass('change-header-cream')
                                $('.main-header-section').removeClass('change-header-blue')
                            } else {
                                $('.main-header-section').removeClass('change-header-cream')
                            }
                        })
                    })
                }
                if ($('.blue-header').length) {
                    $('.blue-header').each(function () {
                        var $$this = $(this);
                        var $$thisoffsetTop = $$this.offset().top,
                            $$thisWorkOffset = $$thisoffsetTop - $(window).outerHeight() - 50;
                        $(window).on('wheel', function () {
                            scrollTopPos = $(this).scrollTop();
                            if (scrollTopPos > $$thisWorkOffset) {
                                $('.main-header-section').addClass('change-header-blue')
                                $('.main-header-section').removeClass('change-header-cream')

                            } else {
                                $('.main-header-section').removeClass('change-header-blue')
                            }
                        })
                    })
                }
            }

            if ($(window).width() < 1024) {


                var herderHeight = $('.main-header-section').outerHeight() * 1.1;

                if ($('.green-header').length) {
                    $('.green-header').each(function () {
                        var $$this = $(this);
                        var $$thisoffsetTop = $$this.offset().top,
                            $$thisWorkOffset = $$thisoffsetTop - herderHeight;
                        $(window).on('scroll', function () {
                            scrollTopPos = $(this).scrollTop();
                            if (scrollTopPos > $$thisWorkOffset) {
                                $('.main-header-section').addClass('change-header-cream')
                                $('.main-header-section').removeClass('change-header-blue')
                            } else {
                                $('.main-header-section').removeClass('change-header-cream')
                            }
                        })
                    })
                }
                if ($('.blue-header').length) {
                    $('.blue-header').each(function () {
                        var $$this = $(this);
                        var $$thisoffsetTop = $$this.offset().top,
                            $$thisWorkOffset = $$thisoffsetTop - herderHeight,
                            $$thisoffsetend = $$thisoffsetTop + $$this.height();
                        $(window).on('scroll', function () {
                            scrollTopPos = $(this).scrollTop();
                            if (scrollTopPos > $$thisWorkOffset) {
                                $('.main-header-section').addClass('change-header-blue')
                                $('.main-header-section').removeClass('change-header-cream')

                            } else {
                                $('.main-header-section').removeClass('change-header-blue')
                            }
                            if (scrollTopPos > $$thisoffsetend) {
                                $('.main-header-section').removeClass('change-header-blue')
                                $('.main-header-section').addClass('change-header-cream')
                            }
                        })
                    })
                }
                if ($('.green-bg').length) {
                    $('.blue-header').each(function () {
                        var $$this = $(this);
                        var $$thisoffsetTop = $$this.offset().top,
                            $$thisWorkOffset = $$thisoffsetTop - herderHeight,
                            $$thisoffsetend = $$thisoffsetTop + $$this.height();
                        $(window).on('scroll', function () {
                            scrollTopPos = $(this).scrollTop();
                            if (scrollTopPos > $$thisWorkOffset) {
                                $('.main-header-section').addClass('change-header-blue')
                                $('.main-header-section').removeClass('change-header-cream')

                            } else {
                                $('.main-header-section').removeClass('change-header-blue')
                            }
                            if (scrollTopPos > $$thisoffsetend) {
                                $('.main-header-section').removeClass('change-header-blue')
                                $('.main-header-section').addClass('change-header-cream')
                            }
                        })
                    })
                }

            }
        }
        check_Resize()
        $(window).on('resize', check_Resize);
        $(window).trigger('scroll');

        if ($('.hero-wrap').hasClass('bg-jagged-ice')) {
            $('.main-header-section').addClass('header-cream-content')
        }

        if ($('.header-expanded').length) {
            $('.main-header-section').addClass('header-cream-content')
        }

        if ($('.case-study').length) {
            $('.main-header-section').addClass('header-cream-content')
        }

        if ($('.header-bg-cream').length) {
            $('.main-header-section').addClass('header-cream-content')
        }

        if ($('.hero-wrap').hasClass('bg-jagged-ice')) {
            $('.main-header-section').addClass('change-header-jagged')
        }


        $('.input-row').each(function () {
            var $_this = $(this);
            $_this.find('input, textarea').on('keyup', function () {
                var $$_this = $(this)
                if ($$_this.val() == '') {
                    $_this.removeClass('label_move');
                } else {
                    $_this.addClass('label_move');
                }
            });
        })

        if ($("select.styled-select").length) {
            $("select.styled-select").selectric({});
        }

        setTimeout(function () {
            if ($('.header-bg-cream').length) {
                var $$window = $(window);
                var header_bg_cream = $('.header-bg-cream').outerHeight();
                var $$windowHeight = $$window.outerHeight();

                var headerScrollHeight = header_bg_cream - $$windowHeight;


                $$window.on('wheel', function () {
                    var posY = $(this).scrollTop();

                    if (posY > headerScrollHeight) {
                        $('.main-header-section').addClass('change-header-blue')
                    } else {
                        $('.main-header-section').addClass('change-header-blue')
                    }

                })

            }



            if ($('.bg-green').length) {
                var $$window = $(window);
                var header_bg_green = $('.bg-green').outerHeight();
                var header_bg_green_offset = $('.bg-green').offset().top;
                var $$windowHeight = $$window.outerHeight();
                var headerScrollHeight = header_bg_green_offset - `${$$windowHeight / 2}`;
                var headerScrollEnd = headerScrollHeight + header_bg_green;
                console.log($$windowHeight)
                console.log(headerScrollHeight)


                $$window.on('scroll', function () {
                    var posY = $(this).scrollTop();

                    if (posY > headerScrollHeight) {
                        $('.main-header-section').addClass('change-header-green')
                        $('.main-header-section').removeClass('header-cream-content')

                    } else {
                        $('.main-header-section').removeClass('change-header-green')
                        $('.main-header-section').addClass('header-cream-content')
                    }

                    if (posY > headerScrollEnd) {
                        $('.main-header-section').removeClass('change-header-green')
                        $('.main-header-section').addClass('header-cream-content')

                    }

                })

            }
        }, 1500)


        $(window).scroll(function () {
            var $$window = $(window).height() / 2;
            var scrollPos = $(window).scrollTop();
            if (scrollPos > $$window) {
                $('.up-btn').css({
                    'display': 'flex'
                })
            } else {
                $('.up-btn').css({
                    'display': 'none'
                })
            }
        })

        $('.up-btn').click(function () {
            $('html, body').animate({
                scrollTop: 0
            })
        })




        if ($('.article-page').length) {
            $('.main-wrap').addClass('has-stickyBar')
        }
        if ($('.blog-page').length) {
            $('.main-wrap').addClass('has-stickyBar')
        }


        var position = $(window).scrollTop();
        // should start at 0
        $(window).on('mousewheel', function () {
            var scroll = $(window).scrollTop();
            if (scroll > position) {
                console.log('up')
            } else {
                console.log('up')
            }
            position = scroll;
        });






        if ($('.up-btn').length) {
            $(window).on('scroll', function () {
                posY = $(this).scrollTop();

                var footerPos = $('.main-footer-section').offset().top;
                var windowHeight = $(window).outerHeight();
                var upBtn = $('.up-btn').position().top;
                var upBtnPos = windowHeight - upBtn;
                var footerMainPos = footerPos - windowHeight;

                console.log(upBtn)
                if (posY > footerMainPos) {
                    $('.up-btn').css({
                        'background': '#f5e27c'
                    })
                } else {
                    $('.up-btn').css({
                        'background': '#cbede1'
                    })
                }
            })

            $(window).on('resize', function () {
                $(window).on('scroll', function () {
                    posY = $(this).scrollTop();

                    var footerPos = $('.main-footer-section').offset().top;
                    var windowHeight = $(window).outerHeight();
                    var upBtn = $('.up-btn').position().top;
                    var upBtnPos = windowHeight - upBtn;
                    var footerMainPos = footerPos - windowHeight;

                    console.log(upBtn)
                    if (posY > footerMainPos) {
                        $('.up-btn').css({
                            'background': '#f5e27c'
                        })
                    } else {
                        $('.up-btn').css({
                            'background': '#cbede1'
                        })
                    }
                })
            })
        }


        var instance = $(".customers-wrapper");
        $.each(instance, function (key) {
            var box = $(instance[key]).find(".customers-innar")
                mx = 0
            $(box).on({
                mousemove: function (e) {
                    var mx2 = e.pageX - this.offsetLeft;
                    if (mx) this.scrollLeft = this.sx + mx - mx2;
                },
                mousedown: function (e) {
                    this.sx = this.scrollLeft;
                    mx = e.pageX - this.offsetLeft;
                },
            });
            $(document).on("mouseup", function () {
                mx = 0;
            });
        });


    }) // End ready function.

    if ($('.home').length) {
        $('body').addClass('home-page')
    }
    if ($('.contact-page').length) {
        $('body').addClass('contact-contents')
    }

    if ($('.product-wrap').length) {
        $('body').addClass('product-page')
    }

    if ($('.brand-wrap').length) {
        $('body').addClass('brand-page')
    }

    if ($('.works-main-wrap').length) {
        $('body').addClass('works-page')
    }

    if ($('.privacy-policy').length) {
        $('body').addClass('privacy-policy')
    }


})(jQuery)