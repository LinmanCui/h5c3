$(function(){
    $('.container').fullpage({
       /* 1.设置每一个屏幕的背景颜色*/
        /*2.设置屏幕内容的居中方式*/
        /*3.设置导航*/
        /*4.监听进入某一屏的时候*/
           sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
           verticalCentered:false,
           navigation:true,
           scrollingSpeed:1000,
           afterLoad:function(link,index){
            $('.section').eq(index-1).addClass('now');
           },
           /*点击更多切换下一页*/
           /*最好在组件出事完毕或者插件内容渲染完毕*/
           afterRender:function(){
                $('.more').on('click',function(){
                /*jquery插件的封装*/
               /* jquery本身没有的方法通过$.fn的方式追加 认为是插件方法*/
                     $.fn.fullpage.moveSectionDown();
                });
                /*当第四屏购物车结束显示收货地址*/
                $('.screen04 .cart').on('transitionend',function(){
                           $('.screen04 .address').show().find('img:last').fadeIn(1000);
                           $('.screen04 .text').addClass('show');
                });
                /*第八屏功能*/
                /*1.手要跟着鼠标移动*/
                /*2.点击再来一次重置动画并跳回第一页*/
                $('.screen08').on('mouseover',function(e){
                    /*鼠标的坐标设置给手*/
                     $(this).find('.hand').css({
                            left:e.clientX -190,
                            top:e.clientY -20

                     }); 

                }).find('.again').on('click',function(){
                   /* 清除动画属性*/
                        $('.now,.leaved,.show').removeClass('now').removeClass('leaved').removeClass('show');
                        $('.content[style]').removeAttr('style');
                       /* 跳回到第一页*/
                         $.fn.fullpage.moveTo(1);
                });
           },
           onLeave:function(index,nextIndex,direction){
            var currentSection = $('.section').eq(index-1);
                if(index == 2&&nextIndex == 3){
                       /* 当前是从第二页到第三页*/
                      currentSection.addClass('leaved'); 
                }else if(index == 3&&nextIndex == 4){
                      currentSection.addClass('leaved'); 
                }else if(index == 5&&nextIndex == 6){
                      currentSection.removeClass('now').addClass('leaved'); 
                        $('.screen06 .box').addClass('show');
                }else if(index == 6&&nextIndex == 7){
                    $('.screen07 .star').addClass('show');
                    $('.screen07 .text').addClass('show'); 
                    $('.screen07 .star img').each(function(i,item){
                            /*$(this).delay(i*0.5*1000).fadeIn();*/
                            $(this).css('transition-delay',i*0.5+'s');
                        });
                }
           },
    });
}); 