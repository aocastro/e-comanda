$(document).ready(function() {

    $('.btn-new').click(function(e) {
        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Adicionar uma nova produto')

        $('.modal-body').load('src/produto/view/form-produto.html')

        $('#modal-produto').modal('show')
    })

})