$(document).ready(function() {

    $('#table-caixa').on('click', 'button.btn-delete', function(e){
        e.preventDefault()

        let ID = `ID=${$(this).attr('id')}`

        Swal.fire({
            title: 'e-Comanda',
            text: 'Deseja realmente excluir o registro?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não'
        }).then(result => {
            if(result.value){
                $.ajax({
                    type: 'POST',
                    dataType: 'json',
                    assync: true,
                    data: ID,
                    url: 'src/caixa/model/delete-caixa.php',
                    success: function(dados){
                        Swal.fire({
                            title: 'e-Comanda',
                            text: dados.mensagem,
                            icon: dados.tipo,
                            confirmButtonText: 'OK'
                        })
                        $('#table-caixa').DataTable().ajax.reload()
                    }
                })
            }
        })

    })
})