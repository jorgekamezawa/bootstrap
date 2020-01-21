$('#bs-example-navbar-collapse-1').on('show.bs.collapse', function(){
    $('.topCasaFina-banner').css('transform', 'translate(-50%, 10%)');
});

$('#bs-example-navbar-collapse-1').on('hide.bs.collapse', function(){
    $('.topCasaFina-banner').css('transform', 'translate(-50%, -50%)');
});