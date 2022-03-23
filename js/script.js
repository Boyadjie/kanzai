$(window).on("load", function() {
    $('.splash').fadeOut('slow');
})

$(document).ready(function() {

    //parallax

    var header = $('header div.parallax').get(0);
    var parallaxInstance = new Parallax(header, {
        relativeInput: true
    });

    var team = $('div.team div.parallax').get(0);
    var parallaxInstance = new Parallax(team, {
        relativeInput: true
    });

    var footer = $('footer div.footer_para').get(0);
    var parallaxInstance = new Parallax(footer, {
        relativeInput: true
    });

    var roots = $('div.roots div.container').get(0);
    var parallaxInstance = new Parallax(roots, {
        relativeInput: true
    });


    // personal pages 
    $('.fruits').click(function() {
        $('.members-zone').css("display", "block");
        $('body').css("overflow", "hidden");

        var name = $(this).data("name");
        $('[data-member=' + name + ']').addClass("active");
    });

    $('.buttons > div:first-child').click(function() {

        if ($('.active').next(".members").length == 1) {
            var curr = $('.active').next();
        } else {
            var curr = $("[data-member=anais]");
        }

        $('.members').removeClass("active");
        curr.addClass('active');
    });

    $('.buttons > div:nth-child(3)').click(function() {

        if ($('.active').prev(".members").length == 1) {
            var curr = $('.active').prev();
        } else {
            var curr = $("[data-member=diego]");
        }

        $('.members').removeClass("active");
        curr.addClass('active');
    });

    $('.buttons > div:nth-child(2)').click(function() {
        $('.members-zone').css("display", "none");
        $('body').css("overflow", "visible");
        $('.members').removeClass("active");
    });


    $(function() {
        /**
         * Smooth scrolling to page anchor on click
         **/
        $("a[href*='#']:not([href='#'])").click(function() {
            if (
                location.hostname == this.hostname &&
                this.pathname.replace(/^\//, "") == location.pathname.replace(/^\//, "")
            ) {
                var anchor = $(this.hash);
                anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) + "]");
                if (anchor.length) {
                    $("html, body").animate({ scrollTop: anchor.offset().top }, 1500);
                }
            }
        });
    });

    /*$(function() {
        $('.js-rotate').css({ transform: 'rotate(5deg)' });
        $('.js-rotate').css({ transform: 'rotate(0deg)' });
        $('.js-rotate').css({ transform: 'rotate(-5deg)' });
    })*/

    function loopingTree() {
        setTimeout(function() {
            $('.js-rotate').css({ transform: 'rotate(2deg)' });
            $('.js-rotate').css({ transition: '1s ease-in-out' });
        }, 0);
        setTimeout(function() {
            $('.js-rotate').css({ transform: 'rotate(-2deg)' });
            $('.js-rotate').css({ transition: '1s ease-in-out' });
        }, 1000);

        setTimeout(function() {
            loopingTree();
        }, 2000);
    }
    loopingTree();


    //transition enfant-maintenant

    function loopingPictures() {
        //const now = $('div.members>div:nth-child(2)>img:nth-child(1)');
        const kid = $('div.members>div:nth-child(2)>img:nth-child(2)');

        setTimeout(function() {
            kid.css({ opacity: '100%' });
        }, 2000);
        setTimeout(function() {
            kid.css({ opacity: '0%' });
        }, 4000);

        setTimeout(function() {
            loopingPictures();
        }, 6000);
    }
    loopingPictures();

});