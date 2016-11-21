

//Load up the top half of the page (4 articles)

var data = $.getJSON("know.json", function(json) {
    console.log(json); // this will show the info it in firebug console
});

$( window ).load(function() {

    for (i = 0; i < data.responseJSON.length; i++) { 
        
            //Populate 
            htmlVal = "<a href='"+data.responseJSON[i].URL+"'<div style='align:justified'><img src='img/"+data.responseJSON[i]["Record Name"]+".jpg' style='margin: 0 2 0 2; width:100%'>" + "<h4 style='font-family:Verdana'>"+data.responseJSON[i]["Title"]+"</h4></a><p>"+data.responseJSON[i]["Short Description"]+"</p><br>";
        
        var keywords = data.responseJSON[i]["Keywords"].split(',');
        
        for (k = 0; k < keywords.length; k++){
            console.log(keywords[k])
            track = "<p class='keyword'>"+keywords[k]+"</p>"
            htmlVal = htmlVal + track;
        }
        
        $("#tiles").append("<div class='pin pinwidth element-item transition  ' >" + htmlVal+"</div>");

    }
    
});
