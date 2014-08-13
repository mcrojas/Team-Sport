$( document ).ready(function() {	
    //Subir imagen y mostrar en div
    $('#input-image').change(function(e) {
        addImage(e); 
    });
    
    $.validate({
    modules : 'location, date, security, file',
    onModulesLoaded : function() {
    }
  });
});

function addImage(e){
    var file = e.target.files[0],
    imageType = /image.*/;

    if (!file.type.match(imageType))
     return;

    var reader = new FileReader();
    reader.onload = fileOnload;
    reader.readAsDataURL(file);
}
  
function fileOnload(e) {
    var result=e.target.result;
    $('#imgSalida').attr("src",result);
}