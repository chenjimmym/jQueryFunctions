$(document).ready(function(){
    // alert("ready");

    //************** START ***************/

    $("#for-click").click(function(){
        alert("I got clicked!");
    });
    
    $("#for-hide").click(function(){
        $("#for-hide").hide(800);
    })

    $("#for-show").click(function(){
        $("#for-hide").show(800);
    })

    $("#toggle").click(function(){
        $("#for-toggle").toggle(800);
    })

    $("#slide-up").click(function(){
        $("h2").slideUp();
    })

    $("#slide-down").click(function(){
        $("h2").slideDown();
    })

    $("#slide-toggle").click(function(){
        $("h2").toggle(2000);
    })

    $("#fade-out").click(function(){
        $("h2").fadeOut(800);
    })

    $("#fade-in").click(function(){
        $("h2").fadeIn(1200);
    })

    $("#add-class").click(function(){
        $("h2").addClass("change-blue");
    })
    
    $("#before").click(function(){
        $("h2").before("<h2>Before</h2>");
    })

    $("#after").click(function(){
        $("h2").after("<h2>After</h2>");
    })

});

