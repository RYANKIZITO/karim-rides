$(document).ready(function(){
    $('nav a').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        },500);
    });
});