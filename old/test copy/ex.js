//Top Article
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

//Datatables
$(document).ready(function() {
    $('#example').DataTable( {
        "ajax": 'arrays.txt',
        //Remove certain columns
        "columnDefs": [ { "visible": false,  "targets": [2,4,5] }],
        responsive: {
            details: {
                display: $.fn.dataTable.Responsive.display.modal( {
                    header: function ( row ) {
                        var data1 = row.data();
                        //return name of tutorial
                        return data1[3];
                    }
                } ),
                renderer: function ( api, rowIdx, columns ) {
                    
                    var data = $.map( columns, function ( col, i ) {
                        
                        return '<tr>'+
                                '<td>'+col.title+':'+'</td> '+
                                '<td>'+col.data+'</td>'+
                            '</tr>';
                    } ).join('');
 
                    return $('<table class="table"/>').append( data );
                }
            }
        }
    } );
} );




