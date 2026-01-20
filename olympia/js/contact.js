$(function (){
    $( "#contact-form" ).submit(function( event ) {
        event.preventDefault();
        let $form = $(this);
        let $btnSend = $(".btn-send", $form);
        let $btnSubmit = $(".btn-submit-js", $form);
        $btnSend.append('<span class="fa fa-spinner fa-spin"></span>');
        $btnSubmit.attr('disabled', 'disabled');
        $.ajax({
            type: $form.attr('method'),
            url: $form.attr('action'),
            data: $form.serialize(),
            success: function( res ) {
                $form.trigger("reset");
                $('.btn-reload-capcha').trigger('click');
                $('#submit_modal').modal('show');
            },
            error: function(data, textStatus, errorThrown){
                var response = JSON.parse(data.responseText);
                $.each( response.errors, function( key, value) {
                    $.toast({
                        text: value,
                        heading: false,
                        icon: 'error',
                        showHideTransition: 'fade',
                        allowToastClose: true,
                        hideAfter: 5000,
                        position: 'top-right',
                        textAlign: 'left',
                        loader: true,
                        loaderBg: '#9EC600',
                    });
                });
            },
            complete: function(){
                $btnSend.find('.fa.fa-spinner').remove();
                $btnSubmit.removeAttr('disabled');

            }
        });
    });

    $('.btn-reload-capcha').on('click', function(event) {
        event.preventDefault();
        let $this = $(this);
        $('i.fa', $this).addClass('fa-spin');


         setTimeout(function(){
            $.ajax({
                type:"GET",
                url: "/get-capcha",
                success: function( res ) {
                    if(res.code == 1){
                        $this.parent().find('img').attr('src', res.image);    
                    }
                   
                
                },
            });
            $('i.fa', $this).removeClass('fa-spin');    
        }, 2000)

        
    });

    $('.js-survey-form-submit').on('click', function (){
        let $this = $(this);
        let $form = $this.closest('form');
        $this.append('<span class="fa fa-spinner fa-spin"></span>');
        $this.attr('disabled', 'disabled');
        $.ajax({
            type: $form.attr('method'),
            url: $form.attr('action'),
            data: $form.serialize(),
            success: function( res ) {
                $form.trigger("reset");
                $('#submit_modal').modal('show');
            },
            error: function(data, textStatus, errorThrown){
                var response = JSON.parse(data.responseText);
                $.each( response.errors, function( key, value) {
                    $.toast({
                        text: value,
                        heading: false,
                        icon: 'error',
                        showHideTransition: 'fade',
                        allowToastClose: true,
                        hideAfter: 5000,
                        position: 'top-right',
                        textAlign: 'left',
                        loader: true,
                        loaderBg: '#9EC600',
                    });
                });
            },
            complete: function(){
                $this.find('.fa.fa-spinner').remove();
                $this.removeAttr('disabled');
            }
        });
    });

});
