
// $("h1").click(function(){
//
// });

    $("button").on("click" , function(){
        $("h1").slideUp();
    })
    $("button").on("mouseover", function(){
        $("h1").fadeOut();
    })

$("input").keypress(function(event){
    $("h1").text(event.key).addClass("has-class margin");
  
 
    
// });

// $("h1").on("click",function(){
//     $("h1").fadeOut();
// });
// $("button").Click( "click" , function(){
// $("h1").addClass("has-class margin");
// });