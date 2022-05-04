/* rolex.js */
$(document).ready(function(){

    /* 랜딩페이지 클릭 */
    $(".toptext > ul > li:nth-of-type(1)").click(function(){
        $(".toptext > ul > li").removeClass("click");
        $(".toptext > ul > li:nth-of-type(1)").addClass("click");
        $(".cont > ul > li").removeClass("on");
        $(".cont > ul > li:nth-of-type(1)").addClass("on");
    });

    /* pc 사이즈 클릭 */
    $(".toptext > ul > li:nth-of-type(2)").click(function(){
        $(".toptext > ul > li").removeClass("click");
        $(".toptext > ul > li:nth-of-type(2)").addClass("click");
        $(".cont > ul > li").removeClass("on");
        $(".cont > ul > li:nth-of-type(2)").addClass("on");
    });

    /* tablet 사이즈 클릭 */
       $(".toptext > ul > li:nth-of-type(3)").click(function(){
        $(".toptext > ul > li").removeClass("click");
        $(".toptext > ul > li:nth-of-type(3)").addClass("click");
        $(".cont > ul > li").removeClass("on");
        $(".cont > ul > li:nth-of-type(3)").addClass("on");
    });

    /* mobile 사이즈 클릭 */
       $(".toptext > ul > li:nth-of-type(4)").click(function(){
        $(".toptext > ul > li").removeClass("click");
        $(".toptext > ul > li:nth-of-type(4)").addClass("click");
        $(".cont > ul > li").removeClass("on");
        $(".cont > ul > li:nth-of-type(4)").addClass("on");
    });

        // top버튼
        $(window).scroll(function(){
            var scroll = $(this).scrollTop();
            console.log(scroll);
    
            if(scroll <= 0){
                $(".btn_top").removeClass("on ab");
            }else if(scroll > 0){
                $(".btn_top").removeClass("ab");
                $(".btn_top").addClass("on");
            }else{
                $(".btn_top").addClass("ab");
            }
        });
    
        $(".btn_top").click(function(){
            $("html, body").stop().animate({"scrollTop": 0}, 1400, "swing");
        });
});