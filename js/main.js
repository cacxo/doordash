$(document).ready(function(){
    
    $('#slider1').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 8,
        slidesToScroll: 8,
        prevArrow: `<button class="slick-prev slick-arrow slick-disabled" aria-label="Previous" type="button" aria-disabled="true" style="">
                    <svg viewBox="0 0 24 24" fill="#191919" aria-hidden="true" height="16" width="16" style="flex-shrink: 0;"><title></title><path fill-rule="evenodd" clip-rule="evenodd" d="M15.207 5.293a1 1 0 0 1 0 1.414L9.914 12l5.293 5.293a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0z" fill="#191919"></path></svg>
                    
        </button>`,
        nextArrow:`<button class="slick-next slick-arrow" aria-label="Next" type="button" style="" aria-disabled="false">
        <svg viewBox="0 0 24 24" fill="#191919" aria-hidden="true" height="16" width="16" style="flex-shrink: 0;"><title></title><path fill-rule="evenodd" clip-rule="evenodd" d="M8.793 18.707a1 1 0 0 1 0-1.414L14.086 12 8.793 6.707a1 1 0 0 1 1.414-1.414l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414 0z" fill="#191919"></path></svg>
        
        </button>`,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
        

        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
        ]
    });

    $('.cart-button').click(function(){

        $('#right-panel').toggle( "slide", { direction: "right" }, 1000 );
    });
    $('#close-sidebar-button-left').click(function(){
        $('#left-panel').hide('slide',{direction: 'left'}, 1000);
    });
    $('#show-sidebar-button').click(function(){
        $('#left-panel').show('slide',{direction: 'left'}, 1000);
    });
    $('#close-sidebar-button-right').click(function(){
        $('#right-panel').hide('slide',{direction: 'right'}, 1000);
    });

    $('#store-item .button-block-food').click(function(){
        $( "#dialog1" ).dialog({
            dialogClass: "cart-dialog",
            closeText : '',
            modal: true,
        });
    });

});