$(function(){
    const windowW = $(window).width();

    if(windowW > 1440){
        nav();
        str();
        str2();
    } 
    // else if(){}







    // 함수 모음
 function nav(){
 $('nav>ul>li>a').on('click',function(){
    $('nav>ul>li>div').hide()
    $(this).next().show();
    return false;
 })
 $('.close').on('click',function(){
    $('.menu01>li>div').hide()
    return false;
})
 }


 function str(){
    $('#box02>article>.str>li:nth-child(2)').attr('name','selected');
    // $('.str>li:not(:nth-child(2))').css('width','20%');


    $('#box02 .str>li').on('click',function(e){
        // let strW = $(this).css('width');
        let strName = $(this).attr('name')
        let strOn = $('#box02 .str>li>a>dl>dd');
        let strOff = $('#box02 .str>li>a>dl>dt');

        console.log(strName);
        if(strName !== 'selected'){
            // $('body').css('background-color','red')
            $('#box02 .str>li').attr('name','slected').animate({width:'20%'},100);
            $(this).animate({width:'50%'},100,function(){
               $('나머지').removeClass('on')
                $(this).addClass('on')

            });
            $('#box02 .str>li').removeAttr('name');
            $(this).attr('name','selected');
        }

        return false;

    })


    
 }


 function str2(){
    $('#box02 .str2>li').on('click',function(){
        $(this).css('color','red')
        return false;
    })
 }

})

