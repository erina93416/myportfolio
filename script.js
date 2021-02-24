$(".back-to-top").click(function(){
    $("body,html").animate({
        scrollTop:0
    },"swing");
    return false;
});