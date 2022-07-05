$(function(){
    const windowW = $(window).width();

    if(windowW > 1440){
        nav();
        str();
        str2();
        str3();
        gallery();
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
    $('#box02 .str>li:not(:eq(1))>a>dl>dt').show()
    $('#box02 .str>li:not(:eq(1))>a>dl>dd').hide()
    // $('.str>li:not(:nth-child(2))').css('width','20%');
    $('#box02 .str>li:nth-child(2)>a>dl>dt').hide()

    $('#box02 .str>li').on('click',function(e){
        // let strW = $(this).css('width');
        let strName = $(this).attr('name')
        // let strOn = $('#box02 .str>li>a>dl>dd');
        // let strOff = $('#box02 .str>li>a>dl>dt');

        console.log(strName);
        if(strName !== 'selected'){
            // $('body').css('background-color','red')
            $('#box02 .str>li').attr('name','slected').animate({width:'20%'},100);
            $(this).animate({width:'50%'},100,function(){
                $('#box02 .str>li dt').show();
                $('#box02 .str>li dd').hide();
                $(this).find('dt').hide();
                $(this).find('dd').show();
           /*     $('나머지').removeClass('on') 
                스타일 -> ???.on> a> dl -> 스타일
                스타일 -> ??? > a> dl -> 스타일
           */
                // let strOn = $('#box02 .str>li').class('on')
                // if(strOn !== 'on'){
                //     $(this).addClass('on')
                // }

            });
            $('#box02 .str>li').removeAttr('name');
            $(this).attr('name','selected');
        }

        return false;

    })


    
 }


 function str2(){
    $('#box02 .str2>li:first').attr('class','borders');


    $('#box02 .str2>li').on('click',function(){
        let str2B = $(this).attr('class')

        if(str2B !== 'borders'){
            $('#box02 .str2>li').attr('class','borders').css('borderTop','none').css('borderBottom','1px solid #999').css('borderColor','#999').css('color','#999');

            $(this).css('borderBottom','none').css('borderTop','1px solid #333').css('borderColor','#333').css('color','#333');

            $('#box02 .str2>li').removeAttr('class');
            $(this).attr('class','borders');
        }
        
        return false;
    })
 }

 function str3(){
    $('#box02 .str3>li:first').attr('class','concept')


    $('#box02 .str3>li').on('click',function(){
        let str3C = $(this).attr('class')

        if(str3C !== 'concept'){
            $('#box02 .str3>li').attr('class','concept').css('color','#999');
            $(this).css('color','#333')

            $('#box02 .str3>li').removeAttr('class');
            $(this).attr('class','concept');
        }
    })
 }

 function gallery(){
    const liW = $('#box02 #all li').outerWidth(true);
    $('#all>ul li:last').prependTo('#all>ul');
    $('#all>ul').css('marginLeft','-'+liW+'px');

    // 이벤트
    $('#gallery .prev').on('click',function(e){
        $('#all>ul').animate({marginLeft : '+='+liW+'px'},500,function(){
            $('#all>ul li:last').prependTo('#all>ul');
            $('#all>ul').css('marginLeft','-'+liW+'px');

            return false;
        })
    })

    $('#gallery .next').on('click',function(e){
        $('#all>ul').animate({marginLeft : '-='+liW+'px'},500,function(){
            $('#all>ul li:first').appendTo('#all>ul');
            $('#all>ul').css('marginLeft','-'+liW+'px');

            return false;
        })
    })
 }

})

