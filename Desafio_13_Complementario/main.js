$(document).ready(function() {
    $(".contenido-principal").click(() => {
        let p = $(".contenido-after");
        $(".contenido-principal").animate({
            width: '1500px',
            height: '+=800px'
        }, 1000);
        $(".contenido-after").show().animate({opacity: '1'}, 3000);
        setTimeout(function() {
            $(p).text("Ahora NO me ves");
            $(p).css("color", "#f57676");
        }, 1500);
        $(".contenido-principal").delay("slow").fadeOut(2000);
    });
});