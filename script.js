var repub = 0;
var demo = 0;

function winner () {
  
    var answer =$("input").val();
    if(parseInt(repub) >= 270){
    $(".Rep").text("Republican Party Wins!").append("<img src='https://m.dw.com/image/55598269_401.jpg'>");
        $(".Dem").hide();
    
    }else if (parseInt(demo) >= 270 ){
   $(".Dem").text("Democratic Party Wins!").append("<img src='https://bostonglobe-prod.cdn.arcpublishing.com/resizer/qVY4TW15GGYpX68SDdhQWczGd1E=/1440x0/cloudfront-us-east-1.images.arcpublishing.com/bostonglobe/RX7S4QMMIPUC6FPGJPBKRH5RQI.jpg'>");     
    $(".Rep").hide();
   }
}

$(".Rep").click(function() {
     repub+=90;
     winner();
    });  
   
$(".Dem").click(function() {
     demo+=90;
     winner(); 
  }); 


