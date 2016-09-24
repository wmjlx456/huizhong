/**
 * Created by Administrator on 2016/8/31 0031.
 */
    //json变量
var nav={
    navNode:$("#nav"),
    navUlNode:$("#nav ul"),
    navLisNode:$("#nav ul li"),
    navDdNode:$("#nav li dl dd")
};//nav用到的元素
var adv={
    advNode:$(".adv"),
    advLeftNode:$(".adv-left"),
    advRightNode:$(".adv-right"),
    advLisNode:$(".adv .adv-hide li"),
    moveAuto:null
};//adv用到的元素
var advBtn={
    advBtnNode:(".adv-btn"),
    advSpanNode:$(".adv-btn span")
};
var introduce={
    max:$(".introduce"),
    ulNode:$(".introduce ul"),
    lisNode:$(".introduce ul li"),
};
var about={
    aboutLeft:$(".about-img-left"),
    scrollNode:$(".about-img-left em"),
    aboutRight:$(".about-img-right"),
    rightLisNode:$(".about-img-right li"),
    rightUlNode:$(".about-img-right ul"),
    btnLeft:$(".about-btn-left"),
    btnRight:$(".about-btn-right"),
};
var client={
    client:$(".client"),
    imgNode:$(".client-img"),
    moveAuto:function(){
        var lisNodeFirst=$(".client-img li:first");
        var lisNodeSecond=$(".client-img li:eq(1)");
        var  marginLeft=parseInt(lisNodeSecond.css("margin-left"));
        var  marginRight=parseInt(lisNodeSecond.css("margin-right"));
        var  width=lisNodeSecond.outerWidth()+marginLeft+marginRight;
        var  speed=width/2000;
        var  widthDo=parseInt(lisNodeFirst.css("margin-left"))+width-marginLeft;//第一个dl在变化的路程
        var  time=widthDo/speed;
        //console.log(lisNodeFirst);
        lisNodeFirst.stop().animate({marginLeft:-width+"px"},time,"linear",function(){
            $(this).appendTo($(this).parent()).css({marginLeft:'0px'});
            client.moveAuto();
        });
    }
}


//nav中的事件
nav.navLisNode.hover(function(){$(this).children(".navDl").show()},function(){$(this).children(".navDl").hide()})
//if(nav.navDdNode.children(".navDlTwo"))
nav.navDdNode.hover(function(){$(this).children(".navDlTwo").show();},function(){$(this).children(".navDlTwo").hide();})

//adv里面的事件
adv.advNode.hover(function(){//移入
    adv. advLeftNode.show()
    adv. advRightNode.show()
    window.clearInterval(adv.moveAuto);
},function(){
        adv. advLeftNode.hide()
        adv. advRightNode.hide()
    adv.moveAuto=window.setInterval(function(){adv. advRightNode.click()},3000)
    });
advBtn.advSpanNode.mouseenter(function(){
    var nowPos,oldPos;
    if($(this).hasClass("current"))
    {
        return;
    }
    else {
        nowPos=$(this).index(".adv-btn .adv-btn-hide span");
        oldPos=$(".adv-btn .adv-btn-hide .current").index();
        //console.log(nowPos,oldPos)
        advBtn.advSpanNode.eq(nowPos).addClass("current");
        advBtn.advSpanNode.eq(oldPos).removeClass("current");
    }
    adv.advLisNode.eq(nowPos).stop(false,true).fadeIn("slow");
    adv.advLisNode.eq(oldPos).stop(false,true).fadeOut("slow");
    window.clearInterval(adv.moveAuto);
})
adv. advLeftNode.click(function(){
    var oldPos=$(".adv-btn .adv-btn-hide .current").index();
    var lastPos=advBtn.advSpanNode.length-1;
    var nowPos=oldPos==0?lastPos:oldPos-1;
    advBtn.advSpanNode.eq(nowPos).addClass("current");
    advBtn.advSpanNode.eq(oldPos).removeClass("current");
    adv.advLisNode.eq(nowPos).stop(false,true).fadeIn("slow");
    adv.advLisNode.eq(oldPos).stop(false,true).fadeOut("slow");
});
adv. advRightNode.click(function(){
    var oldPos=$(".adv-btn .adv-btn-hide .current").index();
    var lastPos=advBtn.advSpanNode.length-1;
    var nowPos=oldPos==lastPos?0:oldPos+1;
    advBtn.advSpanNode.eq(nowPos).addClass("current");
    advBtn.advSpanNode.eq(oldPos).removeClass("current");
    adv.advLisNode.eq(nowPos).stop(false,true).fadeIn("slow");
    adv.advLisNode.eq(oldPos).stop(false,true).fadeOut("slow");
});
adv.moveAuto=window.setInterval(function(){adv. advRightNode.click()},3000);
//introduce中的事件

introduce.lisNode.eq(0).children("div").first().mouseenter(function(){
    introduce.lisNode.eq(0).children("div").first().css("background-position","left bottom");
    introduce.lisNode.eq(1).children("div").first().css("background-position","-179px 0");
    introduce.lisNode.eq(2).children("div").first().css("background-position","-346px 0");
    introduce.lisNode.eq(3).children("div").first().css("background-position","-515px 0");
    introduce.lisNode.eq(1).stop().animate({left:"504px"},500);
    introduce.lisNode.eq(2).stop().animate({left:"671px"},500);
    introduce.lisNode.eq(3).stop().animate({left:"840px"},500)
});
introduce.lisNode.eq(1).children("div").first().mouseenter(function(){
    introduce.lisNode.eq(1).children("div").first().css("background-position","-179px 158px")
    introduce.lisNode.eq(0).children("div").first().css("background-position","left top")
    introduce.lisNode.eq(2).children("div").first().css("background-position","-346px 0");
    introduce.lisNode.eq(3).children("div").first().css("background-position","-515px 0");
    introduce.lisNode.eq(1).stop().animate({left:"158px"},500);
    introduce.lisNode.eq(2).stop().animate({left:"671px"},500);
    introduce.lisNode.eq(3).stop().animate({left:"840px"},500)
});
introduce.lisNode.eq(2).children("div").first().mouseenter(function(){
    introduce.lisNode.eq(0).children("div").first().css("background-position","left top");
    introduce.lisNode.eq(1).children("div").first().css("background-position","-179px 0");
    introduce.lisNode.eq(2).children("div").first().css("background-position","-346px 158px");
    introduce.lisNode.eq(3).children("div").first().css("background-position","-515px 0");
    introduce.lisNode.eq(1).stop().animate({left:"158px"},500);
    introduce.lisNode.eq(2).stop().animate({left:"316px"},500);
    introduce.lisNode.eq(3).stop().animate({left:"840px"},500)
});
introduce.lisNode.eq(3).children("div").first().mouseenter(function(){
    introduce.lisNode.eq(0).children("div").first().css("background-position","left top");
    introduce.lisNode.eq(1).children("div").first().css("background-position","-179px 0");
    introduce.lisNode.eq(2).children("div").first().css("background-position","-346px 0");
    introduce.lisNode.eq(3).children("div").first().css("background-position","-515px 158px");
    introduce.lisNode.eq(1).stop().animate({left:"158px"},500);
    introduce.lisNode.eq(2).stop().animate({left:"316px"},500);
    introduce.lisNode.eq(3).stop().animate({left:"474px"},500)
});

//about us中的事件
about.aboutLeft.hover(function(){
    $(this).find("img").stop().animate({width:"580px",margin:"-20px 0 0 -20px"},300)
    about.scrollNode.stop().animate({top: "0"},800)
}, function(){
    $(this).find("img").stop().animate({width:"491px",margin:"0 0 0 0"},300)
    about.scrollNode.stop().animate({top: "92px"},800)
});
about.btnRight.click(function(){
    var ulTop=parseInt($(about.rightUlNode).css("top"));
    if(ulTop==-383)
    {
        ulTop=343;
        about.rightUlNode.animate({top:(ulTop-242)+"px"},1000)
    }
    else {
        about.rightUlNode.animate({top:(ulTop-242)+"px"},1000)
    }
});
about.btnLeft.click(function(){
    var ulTop=parseInt($(about.rightUlNode).css("top"));
    if(ulTop==101)
    {
        ulTop=-383;
        about.rightUlNode.animate({top:(ulTop+"px")},1000)
    }
    else {
        about.rightUlNode.animate({top:(ulTop+242)+"px"},1000)
    }
});

//client中的事件
client.moveAuto();
client.client.hover(function(){
    $(".client-img li:first").stop();
},function(){
    client.moveAuto();
});
/**锚点**/
$(window).scroll(function(){
    var winH=$(window).height(); //窗口的可视宽度
    var winScrollTop=$(window).scrollTop();
    if(winScrollTop<winH){
        $(".chain").hide()
    }
    else {
        $(".chain").show()
    }
})
$(".chain").click(function(){
    $("body").animate({scrollTop:0},100)//非火狐、IE
    $("html").animate({scrollTop:0},100)//火狐、IE
})

/**产品列表**/
$(".product-nav li").click(function(){
    $(this).addClass("current").siblings(".current").removeClass("current");
    var className=$(this).attr("data");
    if(className=="*"){
        $(".product-list ul").children(className).show();
    }
    $(".product-list ul").children(className).show();
    $(".product-list ul").children(className).siblings("li:not("+className+")").hide()
})
/**公司简介**/
$(".nav-box li").click(function(){

    console.log( $(".nav-box li").eq(0));
    if( $(".nav-box li a").eq(0).hasClass("nav-current")) {
        console.log(123);
        $(".nav-box li a").eq(0).removeClass("nav-current");
    }
    $(this).addClass("nav-current").siblings(".nav-current").removeClass("nav-current")
})


