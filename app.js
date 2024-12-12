$(document).ready(function() {
    $('#form').submit(function(e) {
        e.preventDefault();  
        
        var formData = {
            firstName: $('#firstName').val(),
            lastName: $('#lastName').val(),
            email: $('#email').val(),
            password: $('#password').val()
        };
        
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.password) {
            alert('All fields are required!');
            return;
        }

       
        $.ajax({
            type: 'POST',
            url: 'submit_form.php',
            data: formData,
            success: function(response) {
                $('#confirmationMessage').html(response).fadeIn();
                $('#registration-form').hide();
                $('#confirmation').fadeIn();
            },
            error: function() {
                alert('Thanku ur application has been submitted');
            }
        });
    });
});
