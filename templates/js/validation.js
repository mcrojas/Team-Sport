$( document ).ready(function() {
    //Error login
    $(".mybtn").click(function() {
        $("div#errorMsg").css("display", "block");
        $("div#errorMsg").html("<p style='color:#000'>Please wait</p>");

        //Get values		
        var txtEmail = $("#iniciar_sesion input#email").val();
        var txtPassword = $("#iniciar_sesion input#password").val();

        // check if the fields are empty
        if((txtEmail == '' ) || (txtPassword == '')){ 
            $("div#errorMsg").css("display", "block");
            $('#iniciar_sesion input#email').addClass('error');
            $('#iniciar_sesion input#password').addClass('error');
            $("div#errorMsg").html("<p style='color:#FB1D1D'>Please enter email, password</p>");
        } else {
            //Call the ajax function to check the usernames
            $('#iniciar_sesion input#email').removeClass('error');
            $('#iniciar_sesion input#password').removeClass('error');
            checkUser(txtEmail, txtPassword);
        }
    }); //end of click event
    
    //FANCYBOX FORGOT PASSWORD
    $(".various").fancybox({
            maxWidth	: 800,
            maxHeight	: 600,
            fitToView	: false,
            width	: '40%',
            height	: '40%',
            autoSize	: false,
            closeClick	: false,
            openEffect	: 'none',
            closeEffect	: 'none'
    });
});


function checkUser(txtEmail, txtPassword){
    // constructing our param variable that will be send with ajax call
    var dataString = 'sEmail=' + txtEmail + '&sPass=' + txtPassword;

    // Ajax Call to check if the email / password are correct
    $.ajax({
            type: "POST",
            url: "php/checkUser.php", 
            data: dataString,
            success: function(response) {
                    if (response == "notFound"){
                        $("div#errorMsg").css("display", "block");
                        $("div#errorMsg").html("<p style='color:#FB1D1D'>Sorry, User was not found</p>");
                    } else {
                        window.location.replace("#"); //Agregar redirección en caso de que exista el usuario en BD
                    }
            }
    });
}  //end of checkUser() function