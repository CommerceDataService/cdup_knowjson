
//Load JSON, keep only a few columns visible (https://datatables.net/examples/basic_init/hidden_columns.html)
//
$(document).ready(function() {
    $('#example').DataTable( {
        "ajax": 'arrays.txt',
        "columnDefs": [
            {
                "targets": [ 0,1],
                "visible": false
            }
        ]
    } );
} );

var data = $.getJSON("arrays.txt", function(json) {
    console.log(json); // this will show the info it in firebug console
});



$( window ).load(function() {
    $('#first_pos').empty();
    $( "#first_pos" ).html("<div style='align:justified'><img src='img/"+data.responseJSON.data[0][0]+".jpg' style='float:left; margin: 0 5 0 5' height=60>" + "<h4>"+data.responseJSON.data[0][3]+"</h4><p>"+data.responseJSON.data[0][4]+"</p></div>");
    
    $('#second_pos').empty();
    $( "#second_pos" ).html("<h3>"+data.responseJSON.data[1][0]+"</h3>");
    
    $('#third_pos').empty();
    $( "#third_pos" ).html("<h3>"+data.responseJSON.data[1][0]+"</h3>");
    
    
});
