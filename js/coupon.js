/*var coupons = [{
        "id": "1",
        "type": "Desconto",
        "title": "Ganhe 20%OFF acima de R$100",
        "link": "https://google.com",
        "lifetime": "20/04/2019",
        "code": "GANHE20",
        "disclaimer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        "id": "2",
        "type": "Brinde",
        "title": "Ganhe Brinde acima de R$100",
        "link": "https://google.com",
        "lifetime": "10/03/2019",
        "code": "OIEEMARCO",
        "disclaimer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        "id": "3",
        "type": "Consumidor",
        "title": "Ganhe Brinde acima de R$100",
        "link": "https://google.com",
        "lifetime": "10/03/2019",
        "code": "TESTE",
        "disclaimer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        "id": "4",
        "type": "Miniatura",
        "title": "Ganhe Brinde acima de R$100",
        "link": "https://google.com",
        "lifetime": "10/03/2019",
        "code": "BRINDEMARCO",
        "disclaimer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
];*/

(function ($, window, document, undefined) {
    var coupongen = function () {
        var coupons = window.coupons || [];
        var couponWrapper = '';
        for (var i = 0; i < coupons.length; i++) {
            couponWrapper += '<li id="coup-' + i + '"class="coupon-promo" role="listitem">' +
                '<div class="_coupon-type"><strong tabindex="-1">' + coupons[i].type + '</strong></div>' +
                '<div class="_coupon-info _coupon-info-'+ i +'"><label tabindex="0">' + coupons[i].title + '</label>' +
                '<input type="text" index="' + i + '" class="_coupon-code _coupon-code-' + i + '" value="' + coupons[i].code + '" readonly="true" />' +
                '<button class="_btn-copy _btn-copy-' + i + '" index="' + i + '" type="submit" role="button"><i class="ico ico--copy"></i></button>' +
                '<span class="_coupon-msg">Copiado!</span>' +
                '<a class="_btn _btn-gold" href="' + coupons[i].link + '" role="link" title="Escolher produtos participantes">Escolher produtos</a>' +
                '<p tabindex="0">' + coupons[i].disclaimer + '</p>' +
                '</div>' +
                "</li>";
        }
        couponWrapper += '';
        $(".Section-Coupons ul").html(couponWrapper);
        copyEvent();
    };

    var copyAll = function (e) {
        
        $(e)[0].select();
        try {
            var successful = document.execCommand('copy');
            var id = $(e).attr('index');
            $('._coupon-info-' + id).addClass('_btn-success');
            //$('').;
            //console.log(id);
            setTimeout(function () {
                $('._coupon-info-' + id).removeClass('_btn-success');
            }, 1000);
        } catch (err) {
            // console.log();  
        }
    };

    var copyEvent = function () {
        $('._btn-copy').on('click', function (event) {
            var id = $(this).attr('index')
            $('._coupon-code-' + id).focus();

            copyAll(this);
        });
        $('._coupon-code').on('focus', function (event) {
            copyAll(this);
        });
    };


    $(function () {
        coupongen();
        // copyEvent();
    });

    // $(window).on('load', function () {});

    // $(window).on('resize', function () {    });
})(jQuery, window, document);