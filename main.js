var $btn = $("button");
$btn.on("click", function(){
    $("nav").toggleClass("reveal");
    $("button").toggleClass("close");
    $(".wrapper").toggleClass('dimBody');
    $(".clip1").toggleClass('dim1');
    $(".clip2").toggleClass('dim2');
    $(".text2").toggleClass('dimSVG');
});