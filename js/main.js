var opened = false;

$('.slide').on('click', function(){
   
    var $slides = $('.slide');
    
    if(!opened){
    
        for(var i=0;i<$slides.length;i++){

            var $slide = $($slides[i]);

            if($slide[0] !== this){

                $($slide).transition({ width:'0%' }, 500);

            }

        }
        
        $(this).transition({ 
            width:'100%',
            complete:function(){

                $(this).children('.slide-content').css({
                    display:'block'
                });

            }
        }, 500);
        
        
        opened = true;

    }
    
    $(this).children('.slide-header').off();
        
        $(this).children('.slide-header').on('click', function(evt){
                
            if(opened){
            
                $slides.transition({
                    width:'25%',
                    complete:function(){

                        opened = false;

                        $(this).children('.slide-content').css({
                            display:'none'
                        });


                    }
                });
                
            }

        });

    
});