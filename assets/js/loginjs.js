jQuery(document).ready(function() {
    // var login = sessionStorage.getItem("login");
    // if (login === null) {
    //     jQuery('.api-loader').hide();
    //     jQuery('.login-wrp').show();
    //     jQuery('.register_wrp').show();
    // } else {
    //     location.reload();
    // }

    if (jQuery('#myusername').val() != '' && jQuery('#mypassword').val() != '') {
        setTimeout(function() {
          jQuery("#loginSubmit").trigger("click"); 
        }, 2000);
    }


    jQuery("#loginSubmit").click(function(event) {
        var name = jQuery('#myusername').val();
        var pass = jQuery('#mypassword').val();
        var security = jQuery( '#bk-ajax-nonce' ).val()
        if (name == '') {
            jQuery('.usererror').show();
        }
        if (pass == '') {
            jQuery('.passerror').show();
        }
        if (name != '' && pass != '') {
            jQuery('.api-loader').css('display', 'block');
            var shop = jQuery('#shop').val();

            var form = jQuery("#target");
            jQuery.ajax({
                type: form.attr('method'),
                url: form.attr('action'),
                data: form.serialize(),
                success: function(data) {
                    console.log(data.status.statusCode);

                    if (data.status.statusCode == 'F_200') {
                        jQuery('.api-loader').css('display', 'none');
                        jQuery('.failedalert').show();
                    }
                    if (data.status.statusCode == 'S_200') {
                        var campaignId = data.campaigns[1].campaignId;
                        var token = data.token;
                        var userId = data.userId;
                        var termpage = data.tc;
                        if (typeof(Storage) !== "undefined") {
                        sessionStorage.setItem('campaignId',campaignId );
                        sessionStorage.setItem('token',token );
                        sessionStorage.setItem('userId',userId );

                            jQuery.ajax({
                                url: preciso_ajax_url.ajax_url,
                                type: 'post',
                                data: {
                                    action: 'Preciso_Set_Login_details',
                                    username: name.trim(),
                                    userpass: pass.trim(),
                                    security:security

                                },
                                success: function(response) {
                                    // console.log(response);
                                }
                            });

                            var username = jQuery('.custom_username').val();
                            sessionStorage.setItem('login', username);
                            sessionStorage.setItem('campaignId', campaignId);
                            sessionStorage.setItem('token', token);
                            sessionStorage.setItem('userId', userId);
                            console.log("ddtoken:"+sessionStorage.getItem('token', token)),
                            shop = sessionStorage.getItem("lastname");
                            var days = 0;
                            var today = new Date(Date.now()+days*24*60*60*1000);
                            sessionStorage.setItem('date',today );
                            jQuery.ajax({
                                url: preciso_ajax_url.ajax_url,
                                type: 'post',
                                data: {
                                    action: 'Preciso_Set_Session_login',
                                    campaignId: sessionStorage.getItem('campaignId', campaignId),
                                    token: sessionStorage.getItem('token', token),
                                    userId: sessionStorage.getItem('userId', userId),
                                     security: security
                                },
                                success: function(response) {                                  
                                   
                                    if (data.tc == false) {
                        console.log("dd"+security);
                        jQuery('#mypassword').val('');
                        var shopname = jQuery('#customstore').val();
                        
                        jQuery.ajax({
                            url: preciso_ajax_url.ajax_url,
                            type: 'post',
                            data: {
                                action: 'Preciso_Set_User_login',
                                optionName: shopname,
                                optionValue: 0,
                               security:security
                            },
                            success: function(response) {
                              location.reload();
                            }
                        });
                    } else {
                      
                                      
                        var shopname = jQuery('#customstore').val();
                       
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
                        } else {
                            alert("Sorry, your browser does not support Web Storage...");
                        }
                    }
                    else if (data.status.statusCode == 'S_202') {
                         jQuery.ajax({
                                url: preciso_ajax_url.ajax_url,
                                type: 'post',
                                data: {
                                    action: 'preciso_unset_plugin_settings',
                                    unset: 'yes'
                                },
                                success: function(response) {
                                 location.reload();
                                }
                            });

                    }

                      else if (data.status.statusCode == 'S_204') {
                         jQuery('.loader').hide();
                         jQuery('.failedalert').show();
                         jQuery('#myusername').val("");
                         jQuery('#mypassword').val("");

                    }
                     else if (data.status.statusCode == 'S_205') {
                        jQuery.ajax({
                                                url: preciso_ajax_url.ajax_url,
                                                type: 'post',
                                                data: {
                                                     action: 'preciso_set_205',
                                                     is205 : 'blank_page',
                                                    security: security
                                                },
                                                success: function(response) {
                                                    jQuery('.loader').hide();
                                                    location.reload(true);
                                                    
                                                }
                                            });

                    }

           
                }
            });
        }
    });
    jQuery('.btn-green').click(function() {
        jQuery('.api-loader').show();
        location.reload();
    });
    jQuery('.btn-red').click(function() {
        jQuery('.failedalert').hide();
    });
});