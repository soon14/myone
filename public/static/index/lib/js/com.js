<<<<<<< .mine
$(function(){

    // 左侧菜单
    $('.level .active').parents('li').addClass("active");
    $('.level .active').parent().slideDown();
    $('.menu>.active').find('.menu-title').find('span').text('-');
    $('.menu li').click(function(){
        var mythis = this;
        $('.menu li').each(function(){
            if(mythis==this){
                $(this).addClass("active").siblings().removeClass("active");
                $(this).find('.level').slideDown();
                $(this).siblings().find('.level').slideUp();
                $(this).find('.menu-title').find('span').text('-');
                $(this).siblings().find('.menu-title').find('span').text('+');
            }
        })
    })

    //开始评估
    $('#pingu').click(function(){
        var num=0,mindex;
        $('.menu').children().each(function(){
            if( $(this).attr('class') == "active" ){
                mindex = $(this).index()
            }
        })
        $('.myform .myform-radio').each(function(){
            $(this).find('input').each(function(){
                if( $(this).is(':checked') ){
                   num+=1;
                }

            })
        })
        if(num==3){
            //跳转页面 通过myindex判断 具体的跳转
            mylayer('开始评估!');
            setTimeout(function(){
                window.location.href="./index.php?m=&c=Assess&a=assess_Skip"; //这一条你可以改成自己跳转路径的方法
            },1500)
        }else{
            mylayer('请填写完信息!');
        }
    })


    //提交评估信息
    $('.form-btn').click(function(){
        var myflag = false;
        if( !empty($('.fname'),"您的姓名") ){
            return false;
        }
        if( !empty($('.fphone'),"联系方式") ){
            return false;
        }
        if( !$('.fphone').phoneFlag() ){
            return false;
        }
        if( !empty($('.fage'),"您的年龄") ){
            return false;
        }
        $('#fmodi input[type=radio]').each(function(){
            if( $(this).is(':checked') ){
                myflag = true;
            }
        })
        if( !myflag ){
            mylayer('请选择您的移民目的!');
            return false;
        }
        
        $('.guname').val( $('.fname').val() );
        $('.guphone').val( $('.fphone').val() );
        $('.shade').show();
        $('.pingu').show();
        $('.shade').shade();
    })
    //获取验证码
    $('#guji .mycode').click(function(){
        sendCode(this)
    })

    $('#result').click(function(){
        //这里判断输入的验证码是否正确
        
        if(!empty($('.pingu .code'),"验证码")){
            return false;
        }

        mylayer('我们短期之内将告知您评估结果!');
        //两秒之后刷新页面
        setTimeout(function(){
            location = location;
        },2000); 
    })
    $('#guji .close').click(function(){
        $('.shade').hide();
        $('.pingu').hide();
        $('.shade').shade();
    })

    //中国移民滑动导航栏
    //const coindex = $('.imnav>.active').index();
    $('.imnav a').mouseenter(function(){
        var myindex = $(this).index();
        var myleft = $(this).width();
        $('.don').css('left',myleft*myindex);
        $(this).addClass('active').siblings().removeClass('active');
    })
    // $('.imnav a').mouseleave(function(){
    //     var myleft = $(this).width();
    //     $('.don').css('left',myleft*coindex);
    //     $('.imnav a').eq(coindex).addClass('active').siblings().removeClass('active');
    // })

    //继续阅读
    $('.yuedu').click(function(){
        $(this).hide();
        $('.shade').shade(); 
        $('.shade').show();
        $('.pingu').show();
        $('.shade').shade();
    })
    //关闭
    $('#yue .close').click(function(){
        $('.shade').hide();
        $('.pingu').hide();
        $('.yuedu').show();
        $('.yuedu').shade();
    })
    //验证码
    $('#yue .mycode').click(function(){
        if(!empty($('.yphone'),"手机号")){
            return false;
        }
        if(!$('.yphone').phoneFlag()){
            return false;
        }
        sendCode(this);
    })
    $('#yue-btn').click(function(){
        if( !empty($('.yname'),"您的姓名") ){
            return false;
        }
        if( !empty($('.yphone'),"手机号") ){
            return false;
        }
        if( !$('.yphone').phoneFlag() ){
            return false;
        }
        if( !empty($('.ycode'),"验证码") ){
            return false;
        }

        //提交成功后文章继续阅读
        $('.shade').hide();
        $('.pingu').hide();
        $('.shade').shade();
        mylayer('填写成功,请继续阅读!');
        storage(true);
    })

    layui.use('form', function(){
        var form = layui.form;
    })
    // $(".city").distpicker({
    //     autoSelect: false
    // });
})
||||||| .r0
=======
$(function(){

    // 左侧菜单
    $('.level .active').parents('li').addClass("active");
    $('.level .active').parent().slideDown();
    $('.menu>.active').find('.menu-title').find('span').text('-');
    $('.menu li').click(function(){
        var mythis = this;
        $('.menu li').each(function(){
            if(mythis==this){
                $(this).addClass("active").siblings().removeClass("active");
                $(this).find('.level').slideDown();
                $(this).siblings().find('.level').slideUp();
                $(this).find('.menu-title').find('span').text('-');
                $(this).siblings().find('.menu-title').find('span').text('+');
            }
        })
    })

    //开始评估
    $('#pingu').click(function(){
        var num=0,mindex;
        $('.menu').children().each(function(){
            if( $(this).attr('class') == "active" ){
                mindex = $(this).index()
            }
        })
        $('.myform .myform-radio').each(function(){
            $(this).find('input').each(function(){
                if( $(this).is(':checked') ){
                   num+=1;
                }
            })
        })
        if(num == 3){
            //跳转页面 通过myindex判断 具体的跳转
            var one=$("input[name='country']:checked").val();
            var two=$("input[name='study']:checked").val();
            var there=$("input[name='level']:checked").val();
            // alert(country);alert(study);alert(level);
            mylayer('开始评估!');
            setTimeout(function(){
                window.location.href="./index.php?m=&c=Assess&a=assess_Skip&type="+mindex+"&one="+one+"&two="+two+"&there="+there; //这一条你可以改成自己跳转路径的方法
            },1500)
        }else{
            mylayer('请填写完信息!');
        }
    })


    //提交评估信息
    // $('#wobtn').click(function(){
    //
    //
    //     var myflag = false;
    //     // if( !empty($('.fname'),"您的姓名") ){
    //     //     return false;
    //     // }
    //     // if( !empty($('.fphone'),"联系方式") ){
    //     //     return false;
    //     // }
    //     // if( !$('.fphone').phoneFlag() ){
    //     //     return false;
    //     // }
    //     // if( !empty($('.fage'),"您的年龄") ){
    //     //     return false;
    //     // }
    //     // $('#fmodi input[type=radio]').each(function(){
    //     //     if( $(this).is(':checked') ){
    //     //         myflag = true;
    //     //     }
    //     // })
    //
    //     // if( !myflag ){
    //     //
    //     //     mylayer('请选择您的移民目的!');
    //     //
    //     //     return false;
    //     // }
    //
    //     $('.guname').val( $('.fname').val() );
    //     $('.guphone').val( $('.fphone').val() );
    //     $('.shade').show();
    //     $('.pingu').show();
    //     $('.shade').shade();
    // })
    //获取验证码
    $('#guji .mycode').click(function(){

        sendCode(this)
    })

    $('#result').click(function(){
        //这里判断输入的验证码是否正确
        
        if(!empty($('.pingu .code'),"验证码")){
            return false;
        }

        // var name = $('input[name='name']').val();
        // var name = $('input[name='name']').val();
        // var name = $('input[name='name']').val();
        // $.ajax({
        //     'url':post_url,
        //     'data': {'name':name}
        //
        // })

        // var options = {
        //     url: post_url,
        //     success: function (data) {
        //         if (data.status) {
        //             mylayer('我们短期之内将告知您评估结果!');
        //         } else {
        //             mylayer('网络繁忙，请稍后再试!');
        //         }
        //     }
        // };
        //
        // $("#form").ajaxForm(options);
        // return ;

        //两秒之后刷新页面
        setTimeout(function(){
            location = location;
        },2000);
    })
    $('#guji .close').click(function(){
        $('.shade').hide();
        $('.pingu').hide();
        $('.shade').shade();
    })

    //中国移民滑动导航栏
    //const coindex = $('.imnav>.active').index();
    $('.imnav a').mouseenter(function(){
        var myindex = $(this).index();
        var myleft = $(this).width();
        $('.don').css('left',myleft*myindex);
        $(this).addClass('active').siblings().removeClass('active');
    })
    // $('.imnav a').mouseleave(function(){
    //     var myleft = $(this).width();
    //     $('.don').css('left',myleft*coindex);
    //     $('.imnav a').eq(coindex).addClass('active').siblings().removeClass('active');
    // })

    //继续阅读
    $('.yuedu').click(function(){
        $(this).hide();
        $('.shade').shade(); 
        $('.shade').show();
        $('.pingu').show();
        $('.shade').shade();
    })
    //关闭
    $('#yue .close').click(function(){
        $('.shade').hide();
        $('.pingu').hide();
        $('.yuedu').show();
        $('.yuedu').shade();
    })
    //验证码
    $('#yue .mycode').click(function(){
        if(!empty($('.yphone'),"手机号")){
            return false;
        }
        if(!$('.yphone').phoneFlag()){
            return false;
        }
        sendCode(this);
    })
    $('#yue-btn').click(function(){
        if( !empty($('.yname'),"您的姓名") ){
            return false;
        }
        if( !empty($('.yphone'),"手机号") ){
            return false;
        }
        if( !$('.yphone').phoneFlag() ){
            return false;
        }
        if( !empty($('.ycode'),"验证码") ){
            return false;
        }

        //提交成功后文章继续阅读
        $('.shade').hide();
        $('.pingu').hide();
        $('.shade').shade();
        mylayer('填写成功,请继续阅读!');
        storage(true);
    })

    layui.use('form', function(){
        var form = layui.form;
    })
    // $(".city").distpicker({
    //     autoSelect: false
    // });
})
>>>>>>> .r27
