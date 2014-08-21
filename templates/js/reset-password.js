$( document ).ready(function() {
    //Error reset password
    $(".mybtn").click(function() {
        $("div#errorMsg").css("display", "block");
        $("div#errorMsg").html("<p style='color:#000'>Please wait</p>");
	
        var txtEmail = $("#reset-password input#email").val();

        if((txtEmail == '' )){ 
            $("div#errorMsg").css("display", "block");
            $('#reset-password input#email').addClass('error');
            $("div#errorMsg").html("<p style='color:#FB1D1D'>Please enter email.</p>");
        } else {
            //Call the ajax function to check the usernames
            $('#reset-password input#email').removeClass('error');
            $("div#errorMsg").html("<div class='check-mail'>Check your mailbox! <br />An email with your password has been sent</div>");
        }
    }); //end of click event
});