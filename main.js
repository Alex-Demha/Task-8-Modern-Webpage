var $btn = $("button");
$btn.on("click", function(){
    $("nav").toggleClass("reveal");
    $("button").toggleClass("close");
    $(".wrapper").toggleClass('dimBody');
    $(".clip1").toggleClass('dim');
    $(".clip2").toggleClass('dim');
    $(".diamond").toggleClass('dim');
    $(".text2").toggleClass('dimSVG');
});