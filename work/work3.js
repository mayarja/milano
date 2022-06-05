     //local storage for image fro first images
     if($('.overlay a').click()){
        $('.overlay a, .overlay1 a').click(function(){
            var zz = $(this).parent().next().attr('src');
            localStorage.setItem('fif',zz);
            
        });
            $('.contact-img .qq').attr('src' ,localStorage.getItem('fif'));
            $('.contact-img .qq').attr('class' ,localStorage.getItem('fif'));
        
}

//start 2rnt al background top al navbar



//end 2rnt al background top al navbar
// let navnav = document.getElementById('navnav');
// console.log(navnav)
// window.onscroll = function(){
//     if(window.scrollY >= 200){
//         navnav.style.cssText="background : #a80707;  ; width:100% ;z-index : 9999"
//     }
//     else{
//         navnav.style.cssText ="background : transparent ; ";
//     }
// }

 //start 2nrtn al li tb3 al diverse kitchen  code javascript




 let singlep = document.querySelectorAll(".singlp ul li a");
 let one=  document.querySelectorAll('.one');
 let two=  document.querySelectorAll('.two');
 let three=  document.querySelectorAll('.three');
 singlep.forEach(function(e){

     e.onclick=function(el){
         singlep.forEach(function(e){
             e.classList.remove('active');
         })
         this.classList.add('active');
         if(this.classList.contains('onee')){
             
             one.forEach(function(e){
                 e.style.display="block";
                 
             })
             two.forEach(function(e){
                 e.style.display="none";
             })
             three.forEach(function(e){
                 e.style.display="none";
             })
         }

         if(this.classList.contains('twoo')){
             
             one.forEach(function(e){
                 e.style.display="none";
             })
             two.forEach(function(e){
                 e.style.display="block";
             })
             three.forEach(function(e){
                 e.style.display="none";
             })
         }

         if(this.classList.contains('threee')){
             
             one.forEach(function(e){
                 e.style.display="none";
             })
             two.forEach(function(e){
                 e.style.display="none";
             })
             three.forEach(function(e){
                 e.style.display="block";
             })
         }
     }
 })


 
 $('i').click(function(e){
    if($(this).parent().next().hasClass("galler-item")){
    var src = $(this).parent().next().attr('src');
    $('.modal-img').attr('src' , src);
    const myModal = new bootstrap.Modal(document.getElementById('exampleModal'))
    myModal.show()
}
});






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


    // //start slider page home
    // var windh = $(window).height(),
    //     upp = $('.upper-bar').innerHeight(),
    //     nav = $('.navbar').innerHeight();

    //     $('.slider,.carousel-item').height(windh - (upp + nav));

    //  //start slider page about   

    //     var windh = $(window).height(),
    //     upp = $('.upper-bar').innerHeight(),
    //     nav = $('.navbar').innerHeight();

    //     $('.slider2,.carousel-item').height(windh - (upp + nav));


        /*start loading*/

                $(".overlay-loading .loader").fadeOut(2000,
                function () { $(this).parent().fadeOut(2500);

                });
        /*end loading*/


        //start 2nrtn al li tb3 al diverse kitchen
        let m6ab5 = document.querySelectorAll('.Diverse .ss li');
        m6ab5.forEach(function(e){
            console.log(e)
            e.onclick=function(){
                m6ab5.forEach(function(e){
                    e.classList.remove('active');
                })
                this.classList.add('active');
            }
        })

        $('.Diverse .ss li').click(function(){
            // $(this).addClass('active').siblings().removeClass('active');

            if($(this).data('class')==='all'){
                $('.Diverse .shufel-images .sq').show();
            }
            else{
                $('.Diverse .shufel-images .sq').hide();
                $($(this).data('class')).show(); 
            }
        });





        // $('.pieces ul .page-item2').on('click',function(){
        //     $('.pieces #two').show();
        //     $('.pieces #one').hide();
        //     $('.pieces #three').hide();
        // });

        // $('.pieces ul .page-item1').on('click',function(){
        //     $('.pieces #two').hide();
        //     $('.pieces #one').show();
        //     $('.pieces #three').hide();
        // });
        
        // $('.pieces ul .page-item3').on('click',function(){
        //     $('.pieces #two').hide();
        //     $('.pieces #one').hide();
        //     $('.pieces #three').show();
        // });

        // $('.pieces .page-link').click(function(){
        //     $('.pieces .page-link').removeClass('active')
        //     $(this).addClass('active');

        // });
        
        let hid = document.querySelector('.contact-img .jj');
        let sho = document.querySelector('.contact-img .cc');
        let father = document.querySelector('.father');
        
        let sub = document.querySelector('.ak1')
        sub.addEventListener('click',function(e){
            let cheak = document.getElementById('cheak').value;
            
            if(/\w+(\W+)?@\w+.(com|org)/ig.test(cheak))
            // if(cheak===2)
            {
                father.remove();
                hid.style.display="none"
                sho.style.display="block"
                
            }
            else{
                return false
            }
            localStorage.setItem('emailinput',cheak);
        })
       

            







            //mshan tkber al 9ora
        /* document.addEventListener("click",function(e){
            if(e.target.classList.contains("galler-item")){
                const src= e.target.getAttribute("src");
                document.querySelector(".modal-img").src = src;
                const myModal = new bootstrap.Modal(document.getElementById('exampleModal'))
                myModal.show()
            }
        })*/
     

    

            //start al placeholder for input
        $('.contact-img input').focus(function(){
            $(this).attr('placeholder',"")
        });

        $('.contact-img input').blur(function(){
            $(this).attr('placeholder',"Xx@hotmail.com")
        });
        //end al placeholder for input


        


        //start 2rnt t3'er al email w 2nrnt al firstname whl 899
        // $('.contact-img .jj .ak1').click(function(){
            
        //     $('.contact-img .jj').hide();
        //     $('.contact-img .cc').show();
        //     // let check = document.querySelector('.cheak').value;
        //     });

  

        /*start 2nrt al btn tb3 st9lk al rsalh b3d 30 min */
        let massagebtn = document.querySelector('.ak2');
        let btndone = document.querySelector('.ak22');
        let h5masage = document.querySelector('.h5masage');
        let pagmasage = document.querySelector('.pagmasage');
        let textcheck = document.getElementById('text-c');
        let okey = document.getElementById('ok');
        let fname = document.getElementById('f-name')
        let lname = document.getElementById('l-name')
        let fpass = document.getElementById('f-pass')
        let lpass = document.getElementById('l-pass')
        btndone.addEventListener('click',function(){
            if(fpass.value.length <= 7 || lpass.value.length != fpass.value.length || fpass.value.length === 0){
                textcheck.textContent = "pass to short/varify pass is not true";
               
            }
            else{
                this.style.display = 'none'
                textcheck.textContent = "";
            massagebtn.style.display = "block"
                let fname = document.querySelector('.first-name').value;
                h5masage.textContent=`hello ${fname} :`
               pagmasage.textContent=`we will sand massage to your email:"${localStorage.getItem('emailinput')}" after 20 min to contact with you be ready`
            }
            
        })
        
        okey.addEventListener('click',function(){
            fname.value=""
            lname.value=""
            fpass.value=""
            lpass.value=""
            massagebtn.style.display = "none";
            btndone.style.display="block";
        })

        //end 2rnt t3'er al email w 2nrnt al firstname whl 899
        





        

        //start local storage

        
        
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



    // //start scroll-top

    // let scrollT = document.querySelector('.scroll-top');

    // window.onscroll = function(){
    //     if(window.scrollY > 700){
    //         if(window.scrollY>=600){
    //             scrollT.style.display = "block"
    //            }
    //            else{
    //             scrollT.style.display = "none"
    //            }
    //     }
    // }
    
    // scrollT.onclick = function(){
    //     window.scrollTo(
    //         top = 0,
    //         left = 0,
    //         behaver = "smooth"
    //     )
    // }
    
    //    //end scroll-top
