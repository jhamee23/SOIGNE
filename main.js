$(document).ready(function(){
    $(".skills-button").click(function(){
        $("#skillsContainer").fadeIn();
        $("#aboutContainer").hide();
        $("#followContainer").hide();
    })
    
    $(".about-button").click(function(){
        $("#aboutContainer").fadeIn();
        $("#skillsContainer").hide();
        $("#followContainer").hide();
    })
     $(".follow-button").click(function(){
        $("#followContainer").fadeIn();
        $("#skillsContainer").hide();
        $("#aboutContainer").hide();
    })

 });
$('.arrow-button').click(
        function (e) {
            $('html, body').animate({scrollTop: $elem.height()}, 800);
        }
    );