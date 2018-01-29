$(document).ready(function(){
    $cadastro = 0;
    $('#cpf').mask('000.000.000-00');
    $('#cnpj').mask('00.000.000/0000-00');
    
    $('.cadastro-btn').click(function(e){
       if (($('#cpf').val().length < 14) && $cadastro == 0) {
           swal("CPF inválido.", "", "error");
           e.preventDefault();
       }
       if (($('#cnpj').val().length < 18) && $cadastro == 1) {
           swal("CNPJ inválido.", "", "error");
           e.preventDefault();
       }
       if(($('.nome').val().length == 0) && $cadastro == 0){
           swal("Preencha o campo nome.", "", "error");
           e.preventDefault();
       }
       if(($('.nome-fantasia').val().length == 0) && $cadastro == 1){
           swal("Preencha o campo nome fantasia.", "", "error");
           e.preventDefault();
       }
       
       
       if($('.email').val().length == 0) {
           swal("Preencha o campo e-mail.", "", "error");
           e.preventDefault();
       }
       if($('.senha').val().length < 3) {
           swal("O campo senha deve ter no mínimo 3 digitos.", "", "error");
           e.preventDefault();
       }
       if($('.confirmacao-senha').val().length == 0) {
           swal("Preencha o campo confirmar senha.", "", "error");
           e.preventDefault();
       }
       if($('.senha').val() != $('.confirmacao-senha').val()){
           swal("As senhas devem ser iguais.", "", "error");
           e.preventDefault();
       }
   });
    
    $('.login-btn').click(function(e){
        if ($('.email').val().length == 0) {
            swal("Preencha o campo e-mail.", "", "error");
            e.preventDefault();
        }
        if ($('.senha').val().length == 0) {
            swal("Preencha o campo senha.", "", "error");
            e.preventDefault();
        }
        
    });
    $('.pessoa-fisica-btn').click(function(){
        $cadastro = 0;
        $('.pessoa-juridica').css('display', 'none');
        $('.pessoa-fisica').css('display', 'block');
        $('.pessoa-fisica-btn').css('background-color', '#FAE69D');
        $('.pessoa-fisica-btn').css('border', '1px solid #252525');
        $('.pessoa-juridica-btn').css('background-color', '#f5db7b');
        $('.pessoa-juridica-btn').css('border', '1px solid #f5db7b');
        
    });
    $('.pessoa-juridica-btn').click(function(){
        $cadastro = 1;
        $('.pessoa-fisica').css('display', 'none');
        $('.pessoa-juridica').css('display', 'block');
        $('.pessoa-fisica-btn').css('background-color', '#f5db7b');
        $('.pessoa-fisica-btn').css('border', '1px solid #f5db7b');
        $('.pessoa-juridica-btn').css('background-color', '#FAE69D');
        $('.pessoa-juridica-btn').css('border', '1px solid #252525');
    });
    
    
    $('#livros-principais .owl-carousel').owlCarousel({
        items: 6,
        loop: true,
        nav: false,
        autoplay: true,
        autoplayHoverPause: false,
    });
    
    
});