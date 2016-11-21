//Top Article

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




