$(document).ready(function() {
    $('#table-pedido').DataTable({
        "processing": true,
        "serverSide": true,
        "ajax": {
            "url": "src/pedido/model/list-pedido.php",
            "type": "POST"
        },
        "language": {
            "url": "libs/DataTables/pt_br.json"
        },
        "columns": [{
                "data": 'DATA',
                "className": 'text-center'
            },
            {
                "data": 'CLIENTE',
                "className": 'text-center'
            },
            {
                "data": 'PRODUTO',
                "className": 'text-center'
            },
            {
                "data": 'QTDE',
                "className": 'text-center'
            },
            {
                "data": 'ID',
                "orderable": false,
                "searchable": false,
                "className": 'text-center',
                "render": function(data, type, row, meta) {
                    return `
                    <button id="${data}" class="btn btn-danger btn-delete"><i class="fa-solid fa-trash"></i></button>
                    `
                }
            }
        ]
    })
})