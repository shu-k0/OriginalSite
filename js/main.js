$(function () {
    /*=================================================
    ハンバーガーメニュー
    ===================================================*/
    $(".hamburger").on("click", function () {
        if ($("header").hasClass("open")) {
            $("header").removeClass("open");
        } else {
            $("header").addClass("open");
        }
    });

    // $(".mask").on("click", function () {
    //     $("header").removeClass("open");
    // });

    $("#navi a").on("click", function () {
        $("header").removeClass("open");
    });


    /*=================================================
    トップに戻る
    ===================================================*/
    let pagetop = $(".to-top");
    pagetop.hide();

    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            // ボタンを表示
            pagetop.fadeIn();

        } else {
            // ボタンを非表示
            pagetop.fadeOut();
        }
    });

    // ボタンをクリックした時の動作
    pagetop.click(function (){
        $("body, html").animate({ scrollTop: 0}, 500);

        return false;
    });


    /*=================================================
    メインビジュアル
    ===================================================*/
    $(".fade").bgSwitcher({
        images: ["img/mainvisual.jpg", "img/mainvisual2.jpg", "img/mainvisual3.jpg"],
        interval: 5000, // 背景画像を切り替える間隔を指定
        loop: true, // 切り替えを繰り返す
        shuffle: false, // 背景画像の順番をシャッフルしない
        effect: "fade", // エフェクトの種類をfade,blind,clip,slide,drop,hideから指定
        duration: 2000, // エフェクトの時間を指定します。
        easing: "linear" // エフェクトのイージングをlinear,swingから指定
    });
});