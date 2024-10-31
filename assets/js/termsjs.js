var ctoken = sessionStorage.getItem("token");
var ttoken = ctoken.trim();
if (ttoken) {
    jQuery('#token').val(ttoken);
}

jQuery(document).ready(function() {
    jQuery('.api-loader').css('display', 'none');
    jQuery("#regisnSubmit").click(function(event) {
        var security = jQuery( '#bk-ajax-nonce' ).val();
        jQuery('.api-loader').css('display', 'block');
        var form = jQuery("#terms");
        jQuery.ajax({
            type: form.attr('method'),
            url: form.attr('action'),
            data: form.serialize(),
            success: function(data) {
                if (data.status.statusCode == 'F_200') {

                }
                if (data.status.statusCode == 'S_200') {

                    var shopname = jQuery('#shop').val();
                    jQuery.ajax({
                        url: preciso_ajax_url.ajax_url,
                        type: 'post',
                        data: {
                            action: 'Preciso_Set_User_login',
                            optionName: shopname,
                            optionValue: 1,
                            security:security
                        },
                        success: function(response) {
                            location.reload();
                        }
                    });
                }
            }
        });
    });
});