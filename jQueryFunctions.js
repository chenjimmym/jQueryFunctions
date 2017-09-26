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

});

