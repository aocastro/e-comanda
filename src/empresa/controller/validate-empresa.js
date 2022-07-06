$(document).ready(function() {
    $.ajax({
        type: 'POST',
        dataType: 'json',
        assync: true,
        url: 'src/empresa/model/validate-empresa.php',
        success: function(dados){
            if(dados.tipo == 'sucess'){
                Swal.fire({
                    title: 'e-Comanda',
                    text: dados.mensagem,
                    icon: dados.tipo,
                    confirmButtonText: 'OK'
                })
            } else if(dados.tipo == 'error'){
                $(location).attr('href', 'index.html')
            }
        }
    })
})