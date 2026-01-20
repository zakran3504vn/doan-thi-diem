$(function () {
    $('#expert-link').click(function () {
        $('.audio').slideToggle(300)
    })
        var swiper1 = new Swiper(".olympad_slider .swiper", {
            autoplay: {
                delay: 5000
            },
            slidesPerView: 1,
            spaceBetween: 30,
            loop: false,
            speed: 1000,
            breakpoints: {
                640: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    $(".icon-search-js").on('click', function () {
        $("#form-search").submit();
    });

    $(".language").on("change", function () {
        let $this = $(this);
        window.location.href = $this.val();
    });

    $('.tab_left li:first-child a').addClass('active');
    $('.tab_content:first-child').addClass('show');
    $('.tab_left li a').click(function (e) {
        e.preventDefault();
        var id = $(this).attr('data-li');
        $('.tab_left li a').removeClass('active');
        $(this).addClass('active');
        $('.tab_content').removeClass('show');
        $('#tab_'+id).addClass('show')
    })
    $("#btn_dktv").click(function() {
        $('html, body').animate({
            scrollTop: $("#form-dk").offset().top
        }, 2000);
    });

    $('#link_hover').click(
        function () {
            $('.program-sub-list').toggleClass('show');
        }
    );
    var swiper1 = new Swiper(".emp_group .swiper", {
        autoplay: false,
        slidesPerView: 1,
        spaceBetween: 20,
        loop: false,
        speed: 1500,
        freeMode: true,
        watchSlidesProgress: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            1024: {
                slidesPerView: 'auto',
                spaceBetween: 30,
            },
        },
    });
    for (i=1; i < 100; i++) {
        var swiper2 = new Swiper(".lst_slider_"+i+" .swiper", {
            autoplay: false,
            slidesPerView: 1,
            spaceBetween: 25,
            slidesPerGroup: 1,
            loop: false,
            speed: 1500,
            breakpoints: {
                640: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                1024: {
                    loop: false,
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                    spaceBetween: 25,
                },
            },
            pagination: {
                el: '.swiper-pagination_'+i+'',
                clickable: true,
            },
        });
    }
    var swiper3 = new Swiper(".lst_slider_0 .swiper", {
        autoplay: false,
        slidesPerView: 1,
        spaceBetween: 25,
        slidesPerGroup: 1,
        loop: false,
        speed: 1500,
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            1024: {
                loop: false,
                slidesPerView: 4,
                slidesPerGroup: 4,
                spaceBetween: 25,
            },
        },
        pagination: {
            el: '.swiper-pagination_0',
            clickable: true,
        },
    });
    for (var i=1;i<10 ;i++ ) {
        var swiper1 = new Swiper('.video_slider_'+i+' .swiper' , {
            autoplay: true,
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            speed: 1500,
            breakpoints: {
                640: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
            },
            pagination: {
                el: '.video-pagi-'+i+'',
                clickable: true,
            },
            navigation: {
                nextEl: '.video-next-'+i+'',
                prevEl: '.video-prev-'+i+'',
            },
        });
    }
    $('.emp_block:first-child').addClass('show');
    $('.gr_item:first-child a').addClass('active');
    $('.gr_item a').click(function (){
        $('.gr_item a').removeClass('active');
        $(this).addClass('active');
        $('.emp_block').removeClass('show');
        var id = $(this).data('id');
        $('#lst_'+id).addClass('show');
    })
    $('#tabs-nav li:last-child').addClass('active');
    $('.tab-content:last-child').show();

// Click function
    $('#tabs-nav li').click(function(){
        $('#tabs-nav li').removeClass('active');
        $(this).addClass('active');
        $('.tab-content').hide();

        var activeTab = $(this).find('a').attr('href');
        $(activeTab).fadeIn();
        return false;
    });

    $('.dr-list').hide();
    $('.dr-list:first-child').show();
    $('.dr-select').on('change', function() {
        $('.dr-list').hide();
        $('#dr-'+this.value).show()
    });
    for (var i=1;i<20 ;i++ ) {
        var swiper1 = new Swiper('.dr-slider_'+i , {
            autoplay: {
                delay: 5000,
            },
            slidesPerView: 1,
            spaceBetween: 30,
            loop: false,
            // navigation: {
            //     nextEl: ".swiper-next-1",
            //     prevEl: ".swiper-prev-1",
            // },
            pagination: {
                el: '.swiper-pagination-'+i+'',
                clickable: true,
            },
            breakpoints: {
                640: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            },
        });
    }
    var swiper1 = new Swiper(".tb-slider", {
        autoplay:false,
        slidesPerView: 1,
        spaceBetween: 0,
        loop: false,
        pagination: {
            el: ".swiper-pagination-2",
            clickable: true
        },
        speed: 1200
        // navigation: {
        //     nextEl: ".swiper-next-1",
        //     prevEl: ".swiper-prev-1",
        // },
    });
});
