(function () {

    // Start Loader

    $(window).on('load', function () {

        $("body").css("overflow-y", "auto");

        $(".loader").fadeOut();

        $(".loading").fadeOut().css({
            'transituin-delay': '1s'
        });

    });

    $('.default').on('click', function (e) {
        e.preventDefault();
    });

    $('.body-icons .heart').on('click', function () {
        $(this).toggleClass('greenColor');
    });

    // Start Navbar 

    $('.overlay').fadeOut();

    $(".mob-collaps").on('click', function () {
        $(this).parent().find(".nav-links > ul").toggleClass('nav-open');

        $('.overlay').fadeToggle();

        $(this).find("span:first-child").toggleClass('rotate');
        $(this).find("span:nth-child(2)").toggleClass('none');
        $(this).find("span:nth-child(3)").toggleClass('rotate2');
    });

    $(".overlay").on('click', function () {
        $(".nav-links ul").removeClass('nav-open');
        $(this).fadeOut();

        $(".mob-collaps span:first-child").removeClass('rotate');
        $(".mob-collaps span:nth-child(2)").removeClass('none');
        $(".mob-collaps span:nth-child(3)").removeClass('rotate2');
    });

    // Start Bootstrap DateTimePicker

    $('.date').each(function () {
        $(this).datetimepicker({
            format: 'L'
        });
    });

    $('.date-time').each(function () {
        $(this).datetimepicker({
            format: 'LT'
        });
        // console.log($(this).parents('.input-group').attr('id'));
    });


    $('.image-uploader').change(function (event) {
        for (var one = 0; one < event.target.files.length; one++) {
            $(this).parents('.images-upload-block').find('.upload-area').append('<div class="uploaded-block" data-count-order="' + one + '"><img src="' + URL.createObjectURL(event.target.files[one]) + '"><button class="close">&times;</button></div>');
        }
    });

    $('.images-upload-block').on('click', '.close', function () {
        $(this).parents('.uploaded-block').remove();
    });


    $('.carousel-header').owlCarousel({
        rtl: true,
        margin: 0,
        autoplay: false,
        loop: true,
        nav: true,
        navText: ["<i class='fa fa-long-arrow-right'></i>", "<i class='fa fa-long-arrow-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    // Like Subject 

    $('.teacher.student .block .title h4 i, .teacher.student .course-view .details-txt .title i').on('click',
        function () {
            $(this).toggleClass('fas red');
        });

    $('.teacher-search .teacher-box div button i').on('click', function () {
        $(this).toggleClass('red');
    });

    // Toggle Participate

    $('.participate').on('click', function () {
        $(this).toggleClass('red-part');
    });

    // Append Degree

    $(function () {
        $('.add-degree').on('click', function (event) {
            event.preventDefault();
            var degree = $('.append-info.degree h4').first().clone();
            degree.find('p').text($('.degree-txt').val());
            if ($('.degree-txt').val() == '') {
                alert("You don't write anything")
            } else {
                degree.appendTo('.append-info.degree');
                $(".append-info.degree").animate({
                    scrollTop: $('.append-info.degree').prop("scrollHeight")
                }, 1000);
                $('.degree-txt').val('');
            }
        });
    });

    // Append Stage

    $(function () {
        $('.add-stage').on('click', function (event) {
            event.preventDefault();
            var stage = $('.append-info.stage h4').first().clone();
            stage.find('p').text($('.stage-txt').val());
            if ($('.stage-txt').val() == '') {
                alert("You don't write anything")
            } else {
                stage.appendTo('.append-info.stage');
                $(".append-info.stage").animate({
                    scrollTop: $('.append-info.stage').prop("scrollHeight")
                }, 1000);
                $('.stage-txt').val('');
            }
        });
    });

    // Append New Big Question

    $(function () {
        $('.add-question').on('click', function (event) {
            event.preventDefault();
            var answer = $('.test.add').first().clone();
            answer.appendTo('.questions');
        });
    });

    // Append New Table

    $(function () {
        $('.add-table').on('click', function (event) {
            event.preventDefault();
            var table = $('.table-details').last().clone();
            table.appendTo('.tables-n');
        });
    });

    // Start Recording Videos

    $('#recording.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        mouseDrag: false,
        touchDrag: false,
        URLhashListener: true,
        autoplayHoverPause: true,
        startPosition: 'URLHash',
        animateOut: 'fadeOut'
    });

    $('.owl-hash-nav-2 li.item ').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    // Start Final Results

    $('.teacher .liberary .test-block .result-details').slideUp();

    $('.teacher .liberary .test-block .block').on('click', function () {
        $(this).toggleClass('active');
        $(this).next().slideToggle().parent().siblings().find('.result-details').slideUp().prev().removeClass('active');
    });

})(jQuery);

// Start Map

function initMap() {
    var latlng = new google.maps.LatLng(31.205753, 29.924526);
    var map = new google.maps.Map(document.getElementById('map'), {
        center: latlng,
        zoom: 16,
        disableDefaultUI: true,
        animation: google.maps.Animation.DROP,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var marker = new google.maps.Marker({
        position: latlng,
        map: map,
        title: 'Hello To Our World!'
    });

}

function myFunction() {
    var x = document.getElementById("participate");
    if (x.innerHTML === "إشتراك") {
        x.innerHTML = "إلغاء الإشتراك";
    } else {
        x.innerHTML = "إشتراك";
    }
}

// Start Days Count Down

// const second = 1000,
//       minute = second * 60,
//       hour = minute * 60,
//       day = hour * 24;

// let countDown = new Date('Sep 30, 2019 00:00:00').getTime(),
//     x = setInterval(function() {

//     let now = new Date().getTime(),
//         distance = countDown - now;

//     document.getElementById('days').innerText = Math.floor(distance / (day));

// }, second);

// Remove Degree

function removeD(i) {
    $(i).parent().remove();
}

// Start Remove Quiz

function removeQuiz(e) {
    $(e).parent().parent().fadeOut();
}

// Append New Question

function newQuestion(q) {
    var answer = $('.answer li').last().clone();
    answer.appendTo('.answer');
    var result = $('.choose-answer li').last().clone();
    result.appendTo('.choose-answer ');
}

/* Star Rating */
var $star_rating = $('.star-rating .fa');

var SetRatingStar = function () {
    return $star_rating.each(function () {
        if (parseInt($star_rating.siblings('input.rating-value').val()) >= parseInt($(this).data('rating'))) {
            return $(this).removeClass('fa-star-o').addClass('fa-star');
        } else {
            return $(this).removeClass('fa-star').addClass('fa-star-o');
        }
    });
};

$star_rating.on('click', function () {
    $star_rating.siblings('input.rating-value').val($(this).data('rating'));
    return SetRatingStar();
});

SetRatingStar();

/* End Rating */