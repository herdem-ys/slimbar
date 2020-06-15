var documentReady = false;

window.onload = function loadPage() {
    $("body").css("margin","auto") // In order for the loader to stick at top  !!
    if(documentReady==false){
        $("#backload").css("background", "white").delay(100);
        $("#frontload").animate({width: "100%"}, 500).delay(100).animate({opacity: "0%"}, 500);
        $("#backload").animate({opacity: "0%"}, 1200);
        $("#frontload").animate({width: "0%"}, 0); 
        $("#frontload").animate({opacity: "100%"}, 0); 
        $("#backload").animate({opacity: "0%"}, 0);
    }
}

$(document).ready(function() {
    documentReady = true;
    if (documentReady==true) {
        $("#finishLoader").fadeIn(1200).delay(500).fadeOut();        
    }
});

