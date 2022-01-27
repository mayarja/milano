$(function(){

    //start slider page home
    var windh = $(window).height(),
        upp = $('.upper-bar').innerHeight(),
        nav = $('.navbar').innerHeight();

        $('.slider,.carousel-item').height(windh - (upp + nav));

     //start slider page about   

        var windh = $(window).height(),
        upp = $('.upper-bar').innerHeight(),
        nav = $('.navbar').innerHeight();

        $('.slider2,.carousel-item').height(windh - (upp + nav));


    
        //start 2nrtn al li tb3 al diverse kitchen

        $('.Diverse .ss li').click(function(){
            $(this).addClass('active').siblings().removeClass('active');
            if($(this).data('class')==='all'){
                $('.Diverse .shufel-images .sq').show();
            }
            else{
                $('.Diverse .shufel-images .sq').hide();
                $($(this).data('class')).show(); 
            }
        });


        $('.pieces ul .page-item2').on('click',function(){
            $('.pieces #two').show();
            $('.pieces #one').hide();
            $('.pieces #three').hide();
        });

        $('.pieces ul .page-item1').on('click',function(){
            $('.pieces #two').hide();
            $('.pieces #one').show();
            $('.pieces #three').hide();
        });
        
        $('.pieces ul .page-item3').on('click',function(){
            $('.pieces #two').hide();
            $('.pieces #one').hide();
            $('.pieces #three').show();
        });

        $('.pieces .page-link').click(function(){
            $('.pieces .page-link').removeClass('active')
            $(this).addClass('active');

        });


            //mshan tkber al 9ora
       /* document.addEventListener("click",function(e){
            if(e.target.classList.contains("galler-item")){
                const src= e.target.getAttribute("src");
                document.querySelector(".modal-img").src = src;
               const myModal = new bootstrap.Modal(document.getElementById('exampleModal'))
                myModal.show()
            }
        })*/
        $('i').click(function(e){
            if($(this).parent().next().hasClass("galler-item")){
               var src = $(this).parent().next().attr('src');
               $('.modal-img').attr('src' , src);
               const myModal = new bootstrap.Modal(document.getElementById('exampleModal'))
               myModal.show()
            }
        });

    

            //start al placeholder for input
        $('.contact-img input').focus(function(){
            $(this).attr('placeholder',"")
        });

        $('.contact-img input').blur(function(){
            $(this).attr('placeholder',"Xx@hotmail.com")
        });
        //end al placeholder for input


        //start 2rnt t3'er al email w 2nrnt al firstname whl 899
        $('.contact-img .jj .ak1').click(function(){

                $('.contact-img .jj').hide();
                $('.contact-img .cc').show();
            });

        //end 2rnt t3'er al email w 2nrnt al firstname whl 899
        


        //start local storage

                //local storage for image fro first images
        if($('.overlay a').click()){
            $('.overlay a, .overlay1 a').click(function(){
                var zz = $(this).parent().next().attr('src');
                localStorage.setItem('fif',zz);
                
            });
                $('.contact-img .qq').attr('src' ,localStorage.getItem('fif'));
                $('.contact-img .qq').attr('class' ,localStorage.getItem('fif'));
              
        }
           
        
                //local storage for image fro two images
               /*     
                       
                   
                 if($('.box .overlay1 a').click()){

                    $('.box .overlay1 a').click(function(){
                        var kk = $(this).parent().next().attr('src');
                        localStorage.setItem('sis',kk);
                    });
                    $('.contact-img .qq').attr('src' ,localStorage.getItem('sis'));
                   
                 };*/
                  
       //end local storage


      /* $('.contact-img .qq').attr('src' ,'work\pexels-max-vakhtbovych-6207824.JPG');*/


      

       //start 2rnt al logo slick

                    $('.logo').slick({
                        slidesToShow: 6,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: 500,
                        arrows: false,
                        dots: false,
                        pauseOnHover: false,
                        responsive:[{
                            breakpoint:768,
                            settings:{
                                slidesToShow: 4,
                            }
                        },{
                            breakpoint:520,
                            settings:{
                                slidesToShow: 3
                            }
                            
                        }]
                    });

       //end 2rnt al logo slick

       //start scroll-top

       $(window).scroll(function(){
        if ($(this).scrollTop()>700) {
            $(".scroll-top").show();
        }
        
        else{
            $(".scroll-top").hide();
        }
       });

       $(".scroll-top").click(function(){
        $("html,body").animate({scrollTop:0},600);
        
        });

       //end scroll-top


        /*start loading*/

            $(".overlay-loading .loader").fadeOut(2000,
                 function () { $(this).parent().fadeOut(2500);

             });
        /*end loading*/
   
      
});
