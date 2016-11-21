$(document).ready(function() {
    $('#example').DataTable( {
        "ajax": {
            "url": "know.json",
            "dataSrc": ""
        },
        "columns": [
            { "data": "num" },
            { "data": "Record Name" },
            { "data": "Title" },
            { "data": "Authors" },
            { "data": "Author Organization" },
            { "data": "Editors" },
            { "data": "Editor Organization" },
            { "data": "Short Description" },
            { "data": "Long Description" },
            { "data": "Software" },
            { "data": "Dataset" },
            { "data": "Collaboration" },
            { "data": "URL" }
        ],
        "columnDefs": [ { "visible": false,  "targets": [0,1,5,6,8,9,10,11] }]
    } );
} );
