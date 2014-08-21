$( document ).ready(function() {
    //Menu movil
    /*$('#menu-movil').click(function (){
        $('nav #nav').css('display','block');
        $(".flexnav").flexNav({ 'animationSpeed' : 'fast' });
    });*/
    
    $('#nav-general').slicknav();
    $('#menu-movil').wrap('.slicknav_menu');
    //Menu herramientas movil    
    $('.ver-mail').click(function (e) {
        e.preventDefault();
        $('#ver-mail-cont').slideToggle(200);
    });
    $(document).click(function (e) {
        if ($(e.target).closest('#ver-mail-cont').length > 0 || $(e.target).closest('.ver-mail').length > 0) return;
        $('#ver-mail-cont').slideUp(200);
    });
    
    $(".ver-notificaciones").click(function (e) {
        e.preventDefault();
        $('#ver-notificaciones-cont').slideToggle(200);
    });
    $(document).click(function (e) {
        if ($(e.target).closest('#ver-notificaciones-cont').length > 0 || $(e.target).closest('.ver-notificaciones').length > 0) return;
        $('#ver-notificaciones-cont').slideUp(200);
    });
    
    $(".ver-tienda").click(function (e) {
        e.preventDefault();
        $('#ver-shop-cont').slideToggle(200);
    });
    $(document).click(function (e) {
        if ($(e.target).closest('#ver-shop-cont').length > 0 || $(e.target).closest('.ver-tienda').length > 0) return;
        $('#ver-shop-cont').slideUp(200);
    });
    
    //Ver menu usuario en linea
    $(".datosenlinea-icon a").click(function (e) {
        e.preventDefault();
        $('#ver-usuarioenlinea').slideToggle(200);
    });
    $(document).click(function (e) {
        if ($(e.target).closest('#ver-usuarioenlinea').length > 0 || $(e.target).closest('.datosenlinea-icon a').length > 0) return;
        $('#ver-usuarioenlinea').slideUp(200);
    });
        
    //Events Tabs
    $( "#tabs-events" ).tabs();
});