

//Load up the top half of the page (4 articles)

var data = $.getJSON("know.json", function(json) {
    console.log(json); // this will show the info it in firebug console
});

//Pushes first 3 articles into the left column at the top of the page
//Pushes the 4th to a feature section
$( window ).load(function() {
    
    $('#first_pos').empty();
    $( "#first_pos" ).html("<a href='"+data.responseJSON.data[0][8]+"'<div style='align:justified'><img src='img/"+data.responseJSON.data[0][0]+".jpg' style='float:right; margin: 0 5 0 5' height=60>" + "<h4 style='font-family:Verdana'>"+data.responseJSON.data[0][3]+"</h4></a><p style='font-family:Georgia'>"+data.responseJSON.data[0][4]+"</p>");
    
    $('#second_pos').empty();
    $( "#second_pos" ).html("<a href='"+data.responseJSON.data[1][8]+"'<div style='align:justified'><img src='img/"+data.responseJSON.data[1][0]+".jpg' style='float:right; margin: 0 5 0 5' height=60>" + "<h4 style='font-family:Verdana'>"+data.responseJSON.data[1][3]+"</h4></a><p style='font-family:Georgia'>"+data.responseJSON.data[1][4]+"</p>");
    
    
    $('#third_pos').empty();
    $( "#third_pos" ).html("<a href='"+data.responseJSON.data[2][8]+"'<div style='align:justified'><img src='img/"+data.responseJSON.data[2][0]+".jpg' style='float:right; margin: 0 5 0 5' height=60>" + "<h4 style='font-family:Verdana'>"+data.responseJSON.data[2][3]+"</h4></a><p style='font-family:Georgia'>"+data.responseJSON.data[2][4]+"</p>");
    
    
     $('#feature').empty();
    $( "#feature" ).html("<a href='"+data.responseJSON.data[3][8]+"'<div style='align:justified'><img src='img/"+data.responseJSON.data[3][0]+".jpg' style='float:left; margin: 0 5 0 5' width=70%>" + "<h4 style='font-family:Verdana'>"+data.responseJSON.data[3][3]+"</h4></a><p style='font-family:Georgia'>"+data.responseJSON.data[3][4]+"</p>");
    
    
});


//Load up datatables from know.json

$(document).ready(function() {
    $('#example').DataTable( {
        
        //Read in via KNOW.JSON
        "ajax" : {
            "url" : "know.json",
            "dataSrc" : function (json) {
                
                console.log(json.data[0][0])
                
                //Add img tag to foto label, loop through each record to populate modals at the bottom of the body
                for (i = 0; i < json.data.length; i++) { 
                    json.data[i][0] = "<a class='modal-dialog modal-lg' href='#' data-toggle='modal' data-target='#"+i+"'><img src='img/"+json.data[i][0]+".jpg' style='float:left; margin: 0 5 0 5' height=80></a>"
                    $("#begin_modal").append("<div class='modal fade' id='"+i+"' role='dialog'><div class='modal-dialog'><div class='modal-content'><div class='modal-header'><button type='button' class='close' data-dismiss='modal'>&times;</button> <h4 class='modal-title'>"+json.data[i][0]+"</h4></div> <div class='modal-body'><p>wha wha</p></div><div class='modal-footer'> <button type='button' class='btn btn-default' data-dismiss='modal'>Close</button></div> </div></div></div>");

                    console.log(json.data[i][0])
                    
                }
                return json.data;
            }
        },
        //Hide certain columns based on column index
        "columnDefs": [ { "visible": false,  "targets": [1,2,5,6,7] }]
                
        
    } );
} );




