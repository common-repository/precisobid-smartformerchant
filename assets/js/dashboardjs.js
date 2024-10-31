function validatestore() {
    var url = document.getElementById("landPage").value;
    var pattern = /^(?:(?:https):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i;
    if (pattern.test(url)) {
        jQuery('.landignerror').hide();
        return true;
    }
    jQuery('.landignerror').show();
    return false;
}
// check image exist
function isUrlExists(url, cb) {
    if (typeof cb === 'function') {
        cb.apply(this, [200]);
    }

    /*
    jQuery.ajax({
        url:      url,
        dataType: 'text',
        type:     'GET',
        complete:  function(xhr){
            if(typeof cb === 'function')
               cb.apply(this, [xhr.status]);
        }
    });
    */
}

jQuery(document).ready(function() {
    jQuery('#nav-tab a[data-toggle="tab"]').on('click', function(e) {
        localStorage.setItem('activeTab', jQuery(e.target).attr('href'));

        var activeTab = localStorage.getItem('activeTab');

        if (activeTab) {

            jQuery('#tabs a[href="' + activeTab + '"]').tab('show');
        }


    });
    var activeTab = localStorage.getItem('activeTab');

    if (activeTab) {

        jQuery('#tabs a[href="' + activeTab + '"]').tab('show');
    }

    jQuery(".messageDisplayrefresh").hover(function() {
        jQuery("a.messageHiderefresh").html('<p>Balance refreshes in every 5 minutes.</p>');
        jQuery(".messageHiderefresh").toggle();
    });

    jQuery(".messageDisplayrefreshicon").hover(function() {
        jQuery("a.messageHiderefreshicon").html('<p>Refresh.</p>');
        jQuery(".messageHiderefreshicon").toggle();
    });
    jQuery('body').on("click", ".specialbutton", function() {
        jQuery('.tab-pane').toggleClass('enhanced');
    });

});

function eraseCookie(name) {
    createCookie(name, "", -1);
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function checktpye() {
    jQuery('.flagbtn').val(1);

}

function checkcreatetpye() {
    jQuery('.flagcreatebtn').val(1);

}

function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    } else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}

function thousands_separators(num) {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
}

function sortDropDownListByText() {
    // Loop for each select element on the page.
    jQuery("select").each(function() {

        // Keep track of the selected option.
        var selectedValue = jQuery(this).val();

        // Sort all the options by text. I could easily sort these by val.
        jQuery(this).html(jQuery("option", jQuery(this)).sort(function(a, b) {
            return a.text == b.text ? 0 : a.text < b.text ? -1 : 1
        }));

        // Select one option.
        jQuery(this).val(selectedValue);
    });
}



jQuery(document).ready(function() {
    var totalSpend = 0;
    (function($) {
        $.fn.inputFilter = function(inputFilter) {
            return this.on("input keydown keyup mousedown mouseup select contextmenu drop", function() {
                if (inputFilter(this.value)) {
                    this.oldValue = this.value;
                    this.oldSelectionStart = this.selectionStart;
                    this.oldSelectionEnd = this.selectionEnd;
                } else if (this.hasOwnProperty("oldValue")) {
                    this.value = this.oldValue;
                    this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
                } else {
                    this.value = "";
                }
            });
        };
    }(jQuery));

    jQuery("#freqCap").inputFilter(function(value) {
        return /^\d*$/.test(value) && (value === "" || parseInt(value) <= 255);
    });
    jQuery("#cokieTime").inputFilter(function(value) {
        return /^\d*$/.test(value) && (value === "" || parseInt(value) <= 255);
    });
    jQuery("#cokvTime").inputFilter(function(value) {
        return /^\d*$/.test(value) && (value === "" || parseInt(value) <= 255);
    });
    jQuery("#daiBud").inputFilter(function(value) {
        return /^\d*$/.test(value) && (value === "" || parseInt(value) <= 1000000000);
    });
    jQuery("#mntBud").inputFilter(function(value) {
        return /^\d*$/.test(value) && (value === "" || parseInt(value) <= 1000000000);
    });

    jQuery.ajax({
        url: "https://api.preciso.net/api/plugin/masters ",
        success: function(result) {

            var strategyLen = result.strategyList.length;
            var channelLen = result.channelMasters.length;


            for (var i = 0; i < strategyLen; i++) {

                jQuery(' <option value="' + result.strategyList[i].strategyId + '">' + result.strategyList[i].strategyName + '</option>').insertAfter(jQuery('.strategyOpt'))
            }

            for (var i = 0; i < channelLen; i++) {

                jQuery(' <option value="' + result.channelMasters[i].channelId + '">' + result.channelMasters[i].channelName + '</option>').insertAfter(jQuery('.channelOpt'))
            }
        }
    });

    jQuery('.destroyCookie').click(function() {
        sessionStorage.removeItem("login");
        sessionStorage.removeItem("campaignId");
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("userId");
        localStorage.clear();
        jQuery.ajax({
            url: preciso_ajax_url.ajax_url,
            type: 'post',
            data: {
                action: 'Preciso_Set_Session_destroy',
                sessionId: 'removeAll',
            },
            success: function(response) {
                location.reload();
            }
        });
    });
    //
    var cuserId = sessionStorage.getItem("userId");
    var ccampaignId = sessionStorage.getItem("campaignId");
    var ctoken = sessionStorage.getItem("token");

    if (ctoken) {
        jQuery('.token').val(ctoken);
        jQuery('.rightHeader').css('display', 'inline-block');

        var newUrl = 'https://smartbid.preciso.net/#/login?ref=shopifypayment&token=' + ctoken;
        var newURLlogin = 'https://smartbid.preciso.net/#/login?ref=shopify&token=' + ctoken;
        var footerURL = 'https://smartbid.preciso.net/#/login?ref=shopifyhelp&amp;token=' + ctoken;
        var regionUrl = 'https://smartbid.preciso.net/#/login?ref=shopifycampaigntargetingcountry&token=' + ctoken + '&abc=test';
        var deviceUrl = 'https://smartbid.preciso.net/#/login?ref=shopifycampaigntargeting&token=' + ctoken;
        var bannerUrl = 'https://smartbid.preciso.net/#/login?ref=creativeinformation&token=' + ctoken;
        var bannerStatic = 'https://smartbid.preciso.net/#/login?ref=createstatic&token=' + ctoken;

        jQuery('.bannerURl').attr("href", bannerUrl);
        jQuery('.regionURL').attr("href", regionUrl);
        jQuery('.deiveURL').attr("href", deviceUrl);
        jQuery('.bannerstaticCreate').attr("href", bannerStatic);
        jQuery('.pageRedr').attr("href", newURLlogin);
        jQuery('.messageDisplay').attr("href", newUrl);
        jQuery('.paymentBut').attr("href", newUrl);
        jQuery('.footerLink').attr("href", footerURL);
    }


    var campaignId = sessionStorage.getItem("campaignId");
    if (ccampaignId) {
        jQuery('.CampaignId').val(ccampaignId);
    }
    var userId = sessionStorage.getItem("userId");
    if (cuserId) {
        jQuery('.userid').val(cuserId);
    }

    setTimeout(function() {
        var formSet = jQuery("#getsettings");

        jQuery.ajax({
            type: formSet.attr('method'),
            url: formSet.attr('action'),
            data: formSet.serialize(),
            success: function(data) {

                if (data.status.statusCode == 'F_200') {
                    sessionStorage.removeItem("login");
                    sessionStorage.removeItem("campaignId");
                    sessionStorage.removeItem("token");
                    sessionStorage.removeItem("userId");
                    localStorage.clear();
                    jQuery.ajax({
                        url: preciso_ajax_url.ajax_url,
                        type: 'post',
                        data: {
                            action: 'preciso_logout',
                        },
                        success: function(response) {
                            // location.reload();
                        }
                    });
                }
                if (data.status.statusCode == 'S_200') {
                    var campaignId = data.campaignDetails[0].campaignId;
                    jQuery('.cmpID').val(campaignId);
                    var campaignName = data.campaignDetails[0].campaignName;
                    jQuery('#cmpName').val(campaignName);
                    var programName = data.campaignDetails[0].programName;
                    jQuery('#prmName').val(programName);
                    var regionName = data.campaignDetails[0].regionName;
                    jQuery('#regName').val(regionName);
                    var channelName = data.campaignDetails[0].channelName;
                    jQuery('#chanelNm option').each(function(index) {
                        if (jQuery(this).text() == channelName) {
                            jQuery(this).prop('selected', true);
                        } else {

                        }
                    });
                    var languageName = data.campaignDetails[0].languageName;
                    jQuery('#langName').val(languageName);
                    var deviceName = data.campaignDetails[0].deviceName;
                    jQuery('#device').val(deviceName);
                    var currency = data.campaignDetails[0].currency;
                    jQuery('#currency').val(currency);
                    var statusId = data.campaignDetails[0].statusId;
                    if (statusId == 1) {
                        jQuery('#campSat').val('Active');
                    } else {
                        jQuery('#campSat').val('Pause');
                    }

                    var monthlybudget = data.campaignDetails[0].totalBudget;
                    jQuery('#mntBud').val(monthlybudget);
                    var dailyBudget = data.campaignDetails[0].dailyBudget;
                    jQuery('#daiBud').val(dailyBudget);
                    var landingPage = data.campaignDetails[0].landingPage;
                    jQuery('#landPage').val(landingPage);
                    var frequencyCap = data.campaignDetails[0].frequencyCap;
                    jQuery('#freqCap').val(frequencyCap);
                    var biddingStatus = data.campaignDetails[0].biddingStatus;
                    jQuery('#bidStatus option').each(function(index) {
                        if (jQuery(this).text() == biddingStatus) {
                            jQuery(this).prop('selected', true);
                        } else {}
                    });
                    if (biddingStatus == 'Active') {
                        jQuery('.biddingstatus').html('<span style="font-size: 18px;color:#07fc13;margin-right:10px;">Bidding: Active!</span>');
                    } else {
                        jQuery('.biddingstatus').html('<span style="font-size: 18px;color:#f95b4d;margin-right:10px;">Bidding: Pause!</span>');
                    }
                    var strategyName = data.campaignDetails[0].strategyName;
                    jQuery('#stragName option').each(function(index) {
                        if (jQuery(this).text() == strategyName) {
                            jQuery(this).prop('selected', true);
                        } else {}
                    });
                    var campaignType = data.campaignDetails[0].campaignType;
                    jQuery('#camptpy option').each(function(index) {
                        if (jQuery(this).val() == campaignType) {
                            jQuery(this).prop('selected', true);
                        } else {}
                    });

                    var payoutType = data.campaignDetails[0].payoutType;
                    jQuery('#payuType').val(payoutType);
                    var pc = data.campaignDetails[0].pc;
                    jQuery('#cokieTime').val(pc);
                    var pv = data.campaignDetails[0].pv;
                    jQuery('#cokvTime').val(pv);
                    var selectedOption = jQuery('#chanelNm').children("option:selected").text();

                    if (selectedOption == 'Branding' || selectedOption == 'Prospecting') {
                        jQuery('#stragName option').each(function(index) {
                            if (jQuery(this).text() == 'MainAd Private Audience' || jQuery(this).text() == 'Public Audience') {
                                jQuery(this).show();
                            } else {
                                jQuery(this).hide();
                            }
                        });
                    } else {
                        jQuery('#stragName option').each(function(index) {
                            jQuery(this).show();
                        });
                    }
                    jQuery('.api-loader').css('display', 'none');

                }
            }
        });
}, 1500);




var form = jQuery("#banner");
jQuery.ajax({
    type: form.attr('method'),
    url: form.attr('action'),
    data: form.serialize(),
    success: function(data) {
        if (data.status.statusCode == 'F_200') {
            jQuery(".destroyCookie").trigger("click");
        }
        if (data.status.statusCode == 'S_200') {
            var bannerPrev = data.bannerPreview;
            var arrayLen = bannerPrev.length;
            var i;
            var token = jQuery('.token').val();
            for (i = 0; i < arrayLen; i++) {

                    // alert(data.bannerPreview[i].sizeCode);
                var bannerSize = data.bannerPreview[i].sizeCode;
                var bannerType = data.bannerPreview[i].campaignBannerType;
                var bannerCode = "<iframe src='" + data.bannerPreview[i].bannercode + "' width='" + data.bannerPreview[i].width + "'  height= '" + data.bannerPreview[i].height + "' Marginwidth='0' Marginheight='0' Hspace='0' Vspace='0' Frameborder='0' Scrolling='No'></iframe>";
                var campaignType = data.bannerPreview[i].type;
                var bannerStatus = data.bannerPreview[i].bidderstatus;
                var cretiD = data.bannerPreview[i].creativeid;
                var sizcd = data.bannerPreview[i].sizeCode;
                var campaignbidderstatus = data.bannerPreview[i].campaignbidderstatus;
                var bidding_value = data.bannerPreview[i].audit;
                var bidding_val_type = '';
                if (bidding_value == 1) {
                    bidding_val_type = 'Approved';
                } else {
                    bidding_val_type = 'Pending Approval';
                }
                if (sizcd == '999') {

                    jQuery('<tr><td class="bannerSize">Auto Created Dynamic Banner</td><td class="bannerSize hideinmobile">' + bannerSize + '</td><td>' + cretiD + '</td><td class="bannerType">' + (campaignType == 2 && bannerType == 1 || campaignType == 1 && bannerType == 2 ? '<h1 class="reddot"></h1>' : ' <span class="greendot"></span>') + (bannerType == 1 ? 'Static' : 'Dynamic') + '</td><td class="bannerStatus_val">' + bidding_val_type + '</td><td class="bannerStatus" id=' + (bannerStatus == 43 ? 'active' : 'deactive') + '>' + (bannerStatus == 100 ? 'Forced Pause' : (bannerStatus == 43 ? 'Active' : 'Deactive|Pause')) + '</td><td class="bannerCode"><div class="bannnerIframeWrap"><button class="btn btn-green bannerClose"  style="opacity:1">X</button><div class="bannnerIframe">Loading...</div></div><button class="btn btn-green bannerPreview" data-pre="' + bannerCode + '">Preview</button>' +
                        (campaignbidderstatus == 'Active' ? (bannerStatus == 43 || bannerStatus == 49 || bannerStatus == 45 ? '<button class="btn btn-green ' + (bidding_value == 0 ? 'bannerpaused' : 'pausebanner') + '" creativeid="' + cretiD + '" sizecode="' + sizcd + '" bidderstatus="' + (bannerStatus == 43 ? '49' : '43') + '">' + (bannerStatus == 43 ? 'Pause' : 'Activate') + '</button>' : '<button class="btnpaused_hundred btn btn-green">Activate</button>') : '<button class="btncampaignpaused btn btn-green">Activate</button>') + '</td></tr>').insertAfter(jQuery('.dyncrow'));

                } else if (sizcd == '888') {


                    var bannerTitle = JSON.parse(data.bannerPreview[i].creativeMacro);
                    if (bannerTitle) {
                        var fnltt = bannerTitle[3].value;
                    } else {
                        fnltt = "Static Product Banner";
                    }

                    jQuery('<tr><td class="bannerSize">' + fnltt + '</td><td class="bannerSize hideinmobile">' + bannerSize + '</td><td>' + cretiD + '</td><td class="bannerType">' + (campaignType == 2 && bannerType == 1 || campaignType == 1 && bannerType == 2 ? '<h1 class="reddot"></h1>' : ' <span class="greendot"></span>') + (bannerType == 1 ? 'Static' : 'Dynamic') + '</td><td class="bannerStatus_val">' + bidding_val_type + '</td><td class="bannerStatus" id=' + (bannerStatus == 43 ? 'active' : 'deactive') + '>' + (bannerStatus == 100 ? 'Forced Pause' : (bannerStatus == 43 ? 'Active' : 'Deactive|Pause')) + '</td><td class="bannerCode"><div class="bannnerIframeWrap"><button class="btn btn-green bannerClose"  style="opacity:1">X</button><div class="bannnerIframe">Loading...</div></div><button class="btn btn-green bannerPreview" data-pre="' + bannerCode + '">Preview</button><button class="btn btn-green editbanner" creativeID=' + cretiD + ' sizeCode=' + sizcd + '>Edit</button><button class="btn btn-green deletebanner" creativeID=' + cretiD + ' sizeCode=' + sizcd + '>Delete</button>' +
                        (campaignbidderstatus == 'Active' ? (bannerStatus == 43 || bannerStatus == 49 || bannerStatus == 45 ? '<button class="btn btn-green ' + (bidding_value == 0 ? 'bannerpaused' : 'pausebanner') + '" creativeid="' + cretiD + '" sizecode="' + sizcd + '" bidderstatus="' + (bannerStatus == 43 ? '49' : '43') + '">' + (bannerStatus == 43 ? 'Pause' : 'Activate') + '</button>' : '<button class="btnpaused_hundred btn btn-green">Activate</button>') : '<button class="btncampaignpaused btn btn-green">Activate</button>') + '</td></tr>').insertAfter(jQuery('.dyncrow'));
                } else {

                    jQuery('<tr><td class="bannerSize"></td><td class="bannerSize hideinmobile">' + bannerSize + '</td><td>' + cretiD + '</td><td class="bannerType">' + (campaignType == 2 && bannerType == 1 || campaignType == 1 && bannerType == 2 ? '<h1 class="reddot"></h1>' : ' <span class="greendot"></span>') + (bannerType == 1 ? 'Static' : 'Dynamic') + '</td><td class="bannerStatus_val">' + bidding_val_type + '</td><td class="bannerStatus" id=' + (bannerStatus == 43 ? 'active' : 'deactive') + '>' + (bannerStatus == 100 ? 'Forced Pause' : (bannerStatus == 43 ? 'Active' : 'Deactive|Pause')) + '</td><td class="bannerCode"><div class="bannnerIframeWrap"><button class="btn btn-green bannerClose"  style="opacity:1">X</button><div class="bannnerIframe">Loading...</div></div><button class="btn btn-green bannerPreview" data-pre="' + bannerCode + '">Preview</button><a class="editbannerbtn" target="_blank" href="https://smartbid.preciso.net/#/login?ref=createstaticbyid&token=' + token + '&cid=' + cretiD + '">Edit</a><button class="btn btn-green deletebanner" creativeID=' + cretiD + ' sizeCode=' + sizcd + '>Delete</button>' + (campaignbidderstatus == 'Active' ? (bannerStatus == 43 || bannerStatus == 49 || bannerStatus == 45 ? '<button class="btn btn-green ' + (bidding_value == 0 ? 'bannerpaused' : 'pausebanner') + '" creativeid="' + cretiD + '" sizecode="' + sizcd + '" bidderstatus="' + (bannerStatus == 43 ? '49' : '43') + '">' + (bannerStatus == 43 ? 'Pause' : 'Activate') + '</button>' : '<button class="btnpaused_hundred btn btn-green">Activate</button>') : '<button class="btncampaignpaused btn btn-green">Activate</button>') + '</td></tr>').insertAfter(jQuery('.dyncrow'));
                }
            }
        }
    }
});

var form = jQuery("#paymentsettings");
jQuery.ajax({
    type: form.attr('method'),
    url: form.attr('action'),
    data: form.serialize(),
    success: function(data) {

        if (data.status.statusCode == 'F_200') {

            jQuery(".destroyCookie").trigger("click");
        }
        if (data.status.statusCode == 'S_200') {

            var paymentCount = data.paymentDetails;
            var payarrayLen = paymentCount.length;
            jQuery('.remainBudget').html(data.remainingBudget + ' €');
            jQuery('.totalBudget').html(data.totalBudget + ' €');
            jQuery('.paymentRecevied').html(data.totalPaymentReceived + ' €');
            jQuery('.totalFundRemain').html(data.totalRemainingFundAvailable + ' €');

            var i;
                //alert("total spend"+totalSpend);

            for (i = 0; i < payarrayLen; i++) {
                jQuery('<tr><td>' + data.paymentDetails[i].PaidDate + '</td><td>' + data.paymentDetails[i].PaidAmount + ' €</td><td>' + data.paymentDetails[i].PaymentType + '</td></tr>').insertAfter(jQuery('.paydyncrow'));
                if (data.totalBudget > data.totalPaymentReceived) {
                    totalSpend = data.totalPaymentReceived - data.remainingBudget;
                } else {
                    totalSpend = data.totalBudget - data.remainingBudget;
                }

            }
            jQuery('.totalSpentBud').html(totalSpend);

            jQuery.ajax({
                type: 'GET',
                url: 'https://api.preciso.net/api/plugin/getrebate?userId=' + jQuery('.userid').val() + '&token=' + jQuery('.token').val(),
                success: function(data) {

                    if (data.status.statusCode == 'S_200') {
                        var rebateDetails = data.rebateDetails;
                        var count_rebateDetails = rebateDetails.length;
                        var rebateHTML = '';
                        jQuery.each(rebateDetails, function(key, value) {

                            var rebate = value.rebate;
                            var rebate_res = rebate.split(".");
                            rebateHTML += '<div class="col-3 offset-right10 "><div class="content-box mr-b0"><span>Deposit  >= ' + value.slabFrom + ' &euro;</span><br><span>' + rebate_res[0] + '% discount</span></div></div>';
                        });
                        if (count_rebateDetails > 0) {
                            jQuery('h3.deposit_money_rebate').show();
                            jQuery('#deposit_money_rebate').show().html(rebateHTML);
                        }
                    }
                }
            });
        }
    }
});

var remainBal = jQuery("#remainBalance");
jQuery.ajax({
    type: remainBal.attr('method'),
    url: remainBal.attr('action'),
    data: remainBal.serialize(),
    success: function(data) {

        if (data.status.statusCode == 'F_200') {
            jQuery(".destroyCookie").trigger("click");
        }
        if (data.status.statusCode == 'S_200') {
            var colorcode = data.remainingBudget.colourCode;
            colorcode = colorcode.toLowerCase();

            var newcolor = colorcode;
            if (colorcode == "green") {
                newcolor = "#07fc13";
            }
            if (colorcode == "red") {
                newcolor = "#f95b4d";
            }

            jQuery('.remainingBalance').html('Balance : ' + data.remainingBudget.remainingBudgetBalance + '€');
            jQuery('.remainingBalance').css('color', newcolor);


            jQuery('.messageHide').html('(' + data.remainingBudget.message + ')');
        }
    }
});

setInterval(function() {
    var remainBal = jQuery("#remainBalance");
    jQuery.ajax({
        type: remainBal.attr('method'),
        url: remainBal.attr('action'),
        data: remainBal.serialize(),
        success: function(data) {
            if (data.status.statusCode == 'F_200') {
                jQuery(".destroyCookie").trigger("click");
            }
            if (data.status.statusCode == 'S_200') {

                var colorcode = data.remainingBudget.colourCode;
                colorcode = colorcode.toLowerCase();
                var newcolor = colorcode;
                if (colorcode == "green") {
                    newcolor = "#07fc13";
                }
                if (colorcode == "red") {
                    newcolor = "#f95b4d";
                }
                jQuery('.remainingBalance').html('Balance : €' + data.remainingBudget.remainingBudgetBalance);
                jQuery('.remainingBalance').css('color', newcolor);
                    // jQuery('.remainingBalance').css('color',data.remainingBudget.colourCode);
                if (data.remainingBudget.showTopUpMessage == false) {
                    jQuery('.messageHide').remove();
                } else {
                    jQuery('.messageHide').show();
                    jQuery('.messageHide').html('(' + data.remainingBudget.message + ')');
                }
            }
        }
    });
}, 300000);

var conversionvalDay = jQuery('h4.dayPc.conversionPc_PV').text();
if (conversionvalDay >= 0 || conversionvalDay == '') {
    jQuery('.eCPAClass').hide();
    jQuery('.conversionClass').removeClass('col-5');
    jQuery('.conversionClass').css({
        'width': '100%',
        'float': 'left',
        'max-width': '100%',
        'padding': '0 '
    });
}


var conversionvalWeek = jQuery('h4.weekPc.weekConversionPcPV').text();
if (conversionvalWeek >= 0 || conversionvalWeek == '') {
    jQuery('.eCPAClass').hide();
    jQuery('.conversionWeekly').removeClass('col-5');
    jQuery('.conversionWeekly').css({
        'width': '100%',
        'float': 'left',
        'max-width': '100%!important'
    });

}



var dailyReport = jQuery("#dailyreport");
jQuery.ajax({
    type: dailyReport.attr('method'),
    url: dailyReport.attr('action'),
    data: dailyReport.serialize(),
    success: function(data) {
        if (data.status.statusCode == 'F_200') {
            jQuery(".destroyCookie").trigger("click");
        }
        if (data.status.statusCode == 'S_200') {

            var weeklyRep = data.weeklyReport;
            var weeklyLen = weeklyRep.length;
            var i;
            var datesArr = [];
            var clicksArr = [];
            var impressionArr = [];
            var salesArr = [];
            var viewsalesArr = [];
            var costArr = [];
            var totalimp = 0;
            var totalClick = 0;
            var totalpc = 0;
            var totalpv = 0;
            var totalmediaCost = 0;
            var convesrionSumPCPV = [];

            if (weeklyLen >= 1) {

                for (i = 0; i < weeklyLen; i++) {
                    datesArr.push(data.weeklyReport[i].date);
                    clicksArr.push(data.weeklyReport[i].click);
                    var calculateImprs = data.weeklyReport[i].impression / 50;
                    impressionArr.push(calculateImprs);
                    salesArr.push(data.weeklyReport[i].clientSale);
                    viewsalesArr.push(data.weeklyReport[i].PVsale);
                    costArr.push(data.weeklyReport[i].FinalMediacost);
                    var conSum = data.weeklyReport[i].PVsale + data.weeklyReport[i].PCsale;
                    convesrionSumPCPV.push(conSum);

                    totalimp += data.weeklyReport[i].impression << 0;
                    totalClick += data.weeklyReport[i].click << 0;
                    totalpc += data.weeklyReport[i].PCsale << 0;
                    totalpv += data.weeklyReport[i].PVsale << 0;
                    totalmediaCost += parseFloat(data.weeklyReport[i].FinalMediacost) || 0;
                    if ((i + 1) == (weeklyLen)) {

                        jQuery('.dayImp').text(data.weeklyReport[i].impression);
                        jQuery('.dayClk').text(data.weeklyReport[i].click);
                        jQuery('.dayPv').text(data.weeklyReport[i].PVsale);
                        jQuery('.dayCost').text(data.weeklyReport[i].FinalMediacost.toFixed(2) + ' €');

                        if (data.weeklyReport[i].PCsale == 0) {
                            ecapCal = 1;
                        } else {
                            ecapCal = data.weeklyReport[i].PCsale;
                        }
                        calculateEcpa = data.weeklyReport[i].FinalMediacost / ecapCal;

                        jQuery('.daycpa').text(calculateEcpa + ' €');
                        calSum_PCPC = data.weeklyReport[i].PVsale + data.weeklyReport[i].PCsale;
                        jQuery('.conversionPc_PV').text(calSum_PCPC);

                        if (calSum_PCPC == 0) {
                            sumCALPCPV = 1;
                        } else {
                            sumCALPCPV = calSum_PCPC;
                        }
                        var calsumPcPv = data.weeklyReport[i].FinalMediacost / sumCALPCPV;
                        jQuery('.daypc_pv').text(calsumPcPv.toFixed(2) + ' €');
                        jQuery('.daycpm').text(data.weeklyReport[i].CPM.toFixed(2) + ' €');
                    }
                }


                var sumSevenDay = totalimp + totalClick + totalpc + totalpv + totalmediaCost;
                if (totalpc == 0) {
                    totalPC = 1;
                } else {
                    totalPC = totalpc;
                }
                var weekecpa = totalmediaCost / totalPC;
                var sumPc_Pv = totalpc + totalpv;
                if (sumPc_Pv == 0) {
                    sumPCPV = 1;
                } else {
                    sumPCPV = sumPc_Pv;
                }
                var weekpc_pv = totalmediaCost / sumPCPV;
                var weekeCPm = totalmediaCost * 1000 / totalimp;

                jQuery('.weekImp').text(totalimp);
                jQuery('.weekClk').text(totalClick);
                jQuery('.weekConversionPcPV').text(sumPc_Pv);
                jQuery('.weekPv').text(totalpv);
                jQuery('.weekcpapc').text(weekecpa.toFixed(2) + ' €');
                jQuery('.weekPc_Pv').text(weekpc_pv.toFixed(2) + ' €');
                jQuery('.weekmedia').text(totalmediaCost.toFixed(2) + ' €');
                jQuery('.weekCpm').text(weekeCPm.toFixed(2) + ' €');

                var ctx = document.getElementById("myChart");
                ctx.height = 308;
                var ctxL = document.getElementById("myChart").getContext('2d');
                var myLineChart = new Chart(ctxL, {
                    type: 'line',
                    data: {
                        labels: datesArr,
                        datasets: [{
                            label: "Click",
                            data: clicksArr,
                            borderColor: [
                                '#022a3a',
                                ],
                            borderWidth: 2
                        },
                        {
                            label: "Impression",
                            data: impressionArr,
                            borderColor: [
                                '#07c18b',
                                ],
                            borderWidth: 2
                        },
                        {
                            label: "Conversions",
                            data: convesrionSumPCPV,
                            borderColor: [
                                '#41a8df',
                                ],
                            borderWidth: 2
                        },
                        {
                            label: "Cost",
                            data: costArr,
                            borderColor: [
                                '#57c10a',
                                ],
                            borderWidth: 2
                        }
                        ]
                    },

                    options: {
                        responsive: true,
                        maintainAspectRatio: false
                    }
                });

            } else {

            }
        }
    }
});
var sendCampId = sessionStorage.getItem("campaignId");

jQuery(".messageDisplay").hover(function() {
    jQuery(".messageHide").toggle();
});

jQuery('.refreshBut').click(function() {

    jQuery("#mytable").find("tr:not(:nth-child(1)):not(:nth-child(2))").remove();
    var form = jQuery("#paymentsettings");

    jQuery.ajax({
        type: form.attr('method'),
        url: form.attr('action'),
        data: form.serialize(),
        success: function(data) {

            if (data.status.statusCode == 'F_200') {
                jQuery(".destroyCookie").trigger("click");
            }
            if (data.status.statusCode == 'S_200') {
                var paymentCount = data.paymentDetails;
                var payarrayLen = paymentCount.length;
                var i;
                for (i = 0; i < payarrayLen; i++) {
                    jQuery('.remainBudget').html(data.remainingBudget + ' €');
                    jQuery('.totalBudget').html(data.totalBudget + ' €');
                    jQuery('.paymentRecevied').html(data.totalPaymentReceived + ' €');
                    jQuery('.totalFundRemain').html(data.totalRemainingFundAvailable + ' €');
                    jQuery('<tr><td>' + data.paymentDetails[i].PaidDate + '</td><td>' + data.paymentDetails[i].PaidAmount + ' €</td><td>' + data.paymentDetails[i].PaymentType + '</td></tr>').insertAfter(jQuery('.paydyncrow'));
                        // jQuery('.remainBudget').html(data.remainingBudget+' €');
                    if (data.totalBudget > data.totalPaymentReceived) {
                        totalSpend = data.totalPaymentReceived - data.remainingBudget;
                    } else {
                        totalSpend = data.totalBudget - data.remainingBudget;
                    }
                    jQuery('.totalSpentBud').html(totalSpend);
                }
            }
        }
    });
});

setTimeout(function() {
    sortDropDownListByText();
    jQuery('#stragName option[value="empty"]').insertBefore('#stragName option[value="23"]');
    jQuery('#camptpy option[value="empty"]').insertBefore('#camptpy option[value="2"]');
    jQuery('#chanelNm option[value="empty"]').insertBefore('#chanelNm option[value="3"]');

    jQuery("select#chanelNm").change(function() {
        var selectedOption = jQuery(this).children("option:selected").text();
        if (selectedOption == 'Branding' || selectedOption == 'Prospecting') {
            jQuery('#stragName option').each(function(index) {
                if (jQuery(this).text() == 'MainAd Private Audience' || jQuery(this).text() == 'Public Audience') {
                    jQuery("#stragName").prop("selectedIndex", 2).val();
                    jQuery(this).show();
                } else {
                    jQuery(this).hide();
                }
            });
        } else {
            jQuery('#stragName option').each(function(index) {
                jQuery("#stragName").prop("selectedIndex", 1).val();
                jQuery(this).show();
            });
        }
    });
}, 1500);


jQuery('#updatesettingSubmit').click(function() {
    var freqcp = jQuery('#freqCap').val();
    var pv = jQuery('#cokvTime').val();
    var pc = jQuery('#cokieTime').val();
    var dailybud = jQuery('#daiBud').val();
    var monthbud = jQuery('#mntBud').val();
    var landing = jQuery('#landPage').val();
    var landingURL = 0;
    if (jQuery('.landignerror').is(':visible')) {
        landingURL = 1;
    }
    if (freqcp == '' || pv == '' || pc == '' || dailybud == '' || monthbud == '' || landing == '' || landingURL == 1) {
        if (freqcp == '') {
            jQuery('.freqerror').show();
        }
        if (pv == '') {
            jQuery('.pverror').show();
        }
        if (pc == '') {
            jQuery('.pcerror').show();
        }
        if (dailybud == '') {
            jQuery('.dailybuderror').show();
        }
        if (monthbud == '') {
            jQuery('.totalbuderror').show();
            jQuery('.totalBUDGETMore').hide();

        }
        if (landing == '') {
            jQuery('.landignerror').show();
        }

    } else {
        if (freqcp > 255 || pc > 255 || pv > 255 || dailybud < 0 || monthbud < 0 || pv < 0 || pc < 0 || freqcp < 0) {
            jQuery('.freqerror').hide();
            jQuery('.pcerror').hide();
            jQuery('.pverror').hide();
            jQuery('.landignerror').hide();
            jQuery('.dailybuderror').hide();
            jQuery('.totalbuderror').hide();

            if (freqcp > 255) {
                jQuery('.freqerror').show();
            }
            if (pc > 255) {
                jQuery('.pcerror').show();
            }
            if (pv > 255) {
                jQuery('.pverror').show();
            }

        } else {

            if (parseInt(dailybud) > parseInt(monthbud)) {

                jQuery('.dailybuderror').show();
                jQuery('.totalBUDGETMore').hide();
                jQuery('.totalbuderror').show();
            } else {
                if (totalSpend > monthbud) {
                    jQuery('.totalBUDGETMore').show();
                    jQuery('.totalbuderror').hide();
                } else {
                    var form = jQuery("#updateSettings");
                    jQuery('.freqerror').hide();
                    jQuery('.pcerror').hide();
                    jQuery('.pverror').hide();
                    jQuery('.landignerror').hide();
                    jQuery('.dailybuderror').hide();
                    jQuery('.totalbuderror').hide();

                    jQuery.ajax({
                        type: form.attr('method'),
                        url: form.attr('action'),
                        data: form.serialize(),
                        success: function(data) {

                            if (data.status.statusCode == 'F_200') {
                                jQuery('.failedalert').show();
                            }
                            if (data.status.statusCode == 'S_200') {
                                jQuery('.successalert').show();
                            }
                        }
                    });
                }
            }
        }
    }
});

jQuery('a[data-toggle="tab"]').on('show.bs.tab', function(e) {
    localStorage.setItem('activeTab', jQuery(e.target).attr('href'));
});
var activeTab = localStorage.getItem('activeTab');
if (activeTab) {
    jQuery('#tabs a[href="' + activeTab + '"]').tab('show');
}

jQuery('.pageRefresh').click(function() {
    jQuery('.api-loader').show();
    location.reload();
});
jQuery('.btn-green').click(function() {
    jQuery('.api-loader').show();
    location.reload();
});
jQuery('.btn-red').click(function() {
    jQuery('.failedalert').hide();
});
});

jQuery(document).ready(function() {
    jQuery('body').on("click", ".bannerPreview", function() {
        var bannercode = jQuery(this).attr("data-pre");
        jQuery(this).parent().find(".bannnerIframe").html(bannercode);
        jQuery(this).parent().find(".bannnerIframeWrap").addClass('active');

    });
    jQuery('body').on("click", ".bannerClose", function() {
        jQuery(".bannnerIframeWrap").removeClass('active');
        jQuery(this).parent().find(".bannnerIframe").html("");
    });
    jQuery(".trigger_popup_fricc").click(function() {
        jQuery('.hover_bkgr_fricc').show();
    });
    jQuery('.popupCloseButton').click(function() {
        jQuery('.hover_bkgr_fricc').hide();
    });
    jQuery('.data-show').click(function() {
        var title = jQuery(this).find('.title').val();
        var brand = jQuery(this).find('.brand').val();
        var description = jQuery(this).find('.description').val();
        var price = jQuery(this).find('.price').val();
        var imgurl = jQuery(this).find('.imgurl').val();
        var landurl = jQuery(this).find('.handle').val();
        var prdIDDD = jQuery(this).find('.prd_id').val();
        var shopname = jQuery('#shopname').val();


        jQuery('#titleval').val(title);
        jQuery('#prdIDCR').val(prdIDDD);
        jQuery('#brandval').val(brand);
        jQuery('#descrval').val(description);
        jQuery('#priceval').val(price);
        jQuery('#imageurl').val(imgurl);
        jQuery('#landingpageurl').val(landurl);
    });

    jQuery('#dynamicbannercreate').click(function() {

        var varTitle = jQuery('#createbanner #titleval').val();
        var varBrand = jQuery('#createbanner #brandval').val();
        var varprice = jQuery('#createbanner #priceval').val();
        var varimage = jQuery('#createbanner #imageurl').val();
        var varlandingpage = jQuery('#createbanner #landingpageurl').val();

        if (varTitle == '' || varBrand == '' || varprice == '' || varimage == '' || varlandingpage == '') {

            if (varTitle == '') {
                jQuery('#titleval').css('background-color', '#ff000040');
            } else {
                jQuery('#titleval').css('background-color', '#fff');
            }

            if (varimage == '') {
                jQuery('#imageurl').css('background-color', '#ff000040');
            } else {
                jQuery('#imageurl').css('background-color', '#fff');
            }

            if (varBrand == '') {
                jQuery('#brandval').css('background-color', '#ff000040');
            } else {
                jQuery('#brandval').css('background-color', '#fff');
            }

            if (varprice == '') {
                jQuery('#priceval').css('background-color', '#ff000040');
            } else {
                jQuery('#priceval').css('background-color', '#fff');
            }
            if (varlandingpage == '') {
                jQuery('#landingpageurl').css('background-color', '#ff000040');
            } else {
                jQuery('#landingpageurl').css('background-color', '#fff');
            }


        } else {
            if (varTitle == '') {
                jQuery('#titleval').css('background-color', '#ff000040');
            } else {
                jQuery('#titleval').css('background-color', '#fff');
            }

            if (varimage == '') {
                jQuery('#imageurl').css('background-color', '#ff000040');
            } else {
                jQuery('#imageurl').css('background-color', '#fff');
            }

            if (varBrand == '') {
                jQuery('#brandval').css('background-color', '#ff000040');
            } else {
                jQuery('#brandval').css('background-color', '#fff');
            }

            if (varprice == '') {
                jQuery('#priceval').css('background-color', '#ff000040');
            } else {
                jQuery('#priceval').css('background-color', '#fff');
            }
            if (varlandingpage == '') {
                jQuery('#landingpageurl').css('background-color', '#ff000040');
            } else {
                jQuery('#landingpageurl').css('background-color', '#fff');
            }


            if (varimage != '') {
                isUrlExists(varimage, function(status) {
                    if (status === 200) {

                        var formcr = jQuery("#createbanner");
                        jQuery('.api-loader').css('display', 'block');
                        jQuery.ajax({
                            type: formcr.attr('method'),
                            url: formcr.attr('action'),
                            data: formcr.serialize(),
                            success: function(data) {

                                if (data.status.statusCode == 'F_200') {
                                    jQuery('.api-loader').css('display', 'none');
                                    jQuery('.failedcreatebanner').show();
                                }
                                if (data.status.statusCode == 'S_200') {
                                    jQuery('.api-loader').css('display', 'none');
                                    jQuery('.hover_bkgr_fricc').hide();
                                    jQuery('.successcreatebanner').show();
                                }
                            }
                        });


                    } else if (status === 404) {
                        jQuery('#imageurl').css('background-color', '#ff000040');
                    }

                });

            }
        }


    });


jQuery(document).on("click", ".pausebanner", function() {
    var creative_id = jQuery(this).attr('creativeid');
    var size_code = jQuery(this).attr('sizecode');

    var bidder_status = jQuery(this).attr('bidderstatus');
    jQuery('.cretive_Id').val(creative_id);
    jQuery('.size_Code').val(size_code);
    jQuery('.bidder_Status').val(bidder_status);

    var formcr = jQuery("#updateCreativeStatus");


    jQuery.ajax({
        type: formcr.attr('method'),
        url: formcr.attr('action'),
        data: formcr.serialize(),
        success: function(data) {

            if (data.status.statusCode == 'F_200') {}
                if (data.status.statusCode == 'S_200') {
                    jQuery('.statusupdatebanner').show();

                    jQuery("#tablebanner").find("tr:not(:nth-child(1)):not(:nth-child(2))").remove();
                    var form = jQuery("#banner");
                    jQuery.ajax({
                        type: form.attr('method'),
                        url: form.attr('action'),
                        data: form.serialize(),
                        success: function(data) {

                            if (data.status.statusCode == 'F_200') {}
                                if (data.status.statusCode == 'S_200') {
                                    var token = jQuery('.token').val();
                                    var bannerPrev = data.bannerPreview;
                                    var arrayLen = bannerPrev.length;
                                    var i;
                                    for (i = 0; i < arrayLen; i++) {
                                    // alert(data.bannerPreview[i].sizeCode);
                                        var bannerSize = data.bannerPreview[i].sizeCode;
                                        var bannerType = data.bannerPreview[i].campaignBannerType;
                                        var bannerCode = "<iframe src='" + data.bannerPreview[i].bannerurl + "' width='" + data.bannerPreview[i].width + "'  height= '" + data.bannerPreview[i].height + "' Marginwidth='0' Marginheight='0' Hspace='0' Vspace='0' Frameborder='0' Scrolling='No'></iframe>";
                                        var campaignType = data.bannerPreview[i].type;
                                        var bannerStatus = data.bannerPreview[i].bidderstatus;
                                        var cretiD = data.bannerPreview[i].creativeid;
                                        var sizcd = data.bannerPreview[i].sizeCode;
                                        var campaignbidderstatus = data.bannerPreview[i].campaignbidderstatus;
                                        var bidding_value = data.bannerPreview[i].audit;
                                        var bidding_val_type = '';
                                        if (bidding_value == 1) {
                                            bidding_val_type = 'Approved';
                                        } else {
                                            bidding_val_type = 'Pending Approval';
                                        }
                                        if (sizcd == '999') {

                                            jQuery('<tr><td class="bannerSize">Auto Created Dynamic Banner</td><td class="bannerSize hideinmobile">' + bannerSize + '</td><td>' + cretiD + '</td><td class="bannerType">' + (campaignType == 2 && bannerType == 1 || campaignType == 1 && bannerType == 2 ? '<h1 class="reddot"></h1>' : ' <span class="greendot"></span>') + (bannerType == 1 ? 'Static' : 'Dynamic') + '</td><td class="bannerStatus_val">' + bidding_val_type + '</td><td class="bannerStatus" id=' + (bannerStatus == 43 ? 'active' : 'deactive') + '>' + (bannerStatus == 100 ? 'Forced Pause' : (bannerStatus == 43 ? 'Active' : 'Deactive|Pause')) + '</td><td class="bannerCode"><div class="bannnerIframeWrap"><button class="btn btn-green bannerClose"  style="opacity:1">X</button><div class="bannnerIframe">Loading...</div></div><button class="btn btn-green bannerPreview" data-pre="' + bannerCode + '">Preview</button>' +
                                                (campaignbidderstatus == 'Active' ? (bannerStatus == 43 || bannerStatus == 49 || bannerStatus == 45 ? '<button class="btn btn-green ' + (bidding_value == 0 ? 'bannerpaused' : 'pausebanner') + '" creativeid="' + cretiD + '" sizecode="' + sizcd + '" bidderstatus="' + (bannerStatus == 43 ? '49' : '43') + '">' + (bannerStatus == 43 ? 'Pause' : 'Activate') + '</button>' : '<button class="btnpaused_hundred btn btn-green">Activate</button>') : '<button class="btncampaignpaused btn btn-green">Activate</button>') + '</td></tr>').insertAfter('.dyncrow');

                                        } else if (sizcd == '888') {

                                            var bannerTitle = JSON.parse(data.bannerPreview[i].creativeMacro);
                                            if (bannerTitle) {
                                                var fnltt = bannerTitle[3].value;
                                            } else {
                                                fnltt = "Static Product Banner";
                                            }

                                            jQuery('<tr><td class="bannerSize">' + fnltt + '</td><td class="bannerSize hideinmobile">' + bannerSize + '</td><td>' + cretiD + '</td><td class="bannerType">' + (campaignType == 2 && bannerType == 1 || campaignType == 1 && bannerType == 2 ? '<h1 class="reddot"></h1>' : ' <span class="greendot"></span>') + (bannerType == 1 ? 'Static' : 'Dynamic') + '</td><td class="bannerStatus_val">' + bidding_val_type + '</td><td class="bannerStatus" id=' + (bannerStatus == 43 ? 'active' : 'deactive') + '>' + (bannerStatus == 100 ? 'Forced Pause' : (bannerStatus == 43 ? 'Active' : 'Deactive|Pause')) + '</td><td class="bannerCode"><div class="bannnerIframeWrap"><button class="btn btn-green bannerClose"  style="opacity:1">X</button><div class="bannnerIframe">Loading...</div></div><button class="btn btn-green bannerPreview" data-pre="' + bannerCode + '">Preview</button><button class="btn btn-green editbanner" creativeID=' + cretiD + ' sizeCode=' + sizcd + '>Edit</button><button class="btn btn-green deletebanner" creativeID=' + cretiD + ' sizeCode=' + sizcd + '>Delete</button>' +
                                                (campaignbidderstatus == 'Active' ? (bannerStatus == 43 || bannerStatus == 49 || bannerStatus == 45 ? '<button class="btn btn-green ' + (bidding_value == 0 ? 'bannerpaused' : 'pausebanner') + '" creativeid="' + cretiD + '" sizecode="' + sizcd + '" bidderstatus="' + (bannerStatus == 43 ? '49' : '43') + '">' + (bannerStatus == 43 ? 'Pause' : 'Activate') + '</button>' : '<button class="btnpaused_hundred btn btn-green">Activate</button>') : '<button class="btncampaignpaused btn btn-green">Activate</button>') + '</td></tr>').insertAfter('.dyncrow');
                                        } else {

                                            jQuery('<tr><td class="bannerSize"></td><td class="bannerSize hideinmobile">' + bannerSize + '</td><td>' + cretiD + '</td><td class="bannerType">' + (campaignType == 2 && bannerType == 1 || campaignType == 1 && bannerType == 2 ? '<h1 class="reddot"></h1>' : ' <span class="greendot"></span>') + (bannerType == 1 ? 'Static' : 'Dynamic') + '</td><td class="bannerStatus_val">' + bidding_val_type + '</td><td class="bannerStatus" id=' + (bannerStatus == 43 ? 'active' : 'deactive') + '>' + (bannerStatus == 100 ? 'Forced Pause' : (bannerStatus == 43 ? 'Active' : 'Deactive|Pause')) + '</td><td class="bannerCode"><div class="bannnerIframeWrap"><button class="btn btn-green bannerClose"  style="opacity:1">X</button><div class="bannnerIframe">Loading...</div></div><button class="btn btn-green bannerPreview" data-pre="' + bannerCode + '">Preview</button><a class="editbannerbtn" target="_blank" href="https://smartbid.preciso.net/#/login?ref=createstaticbyid&token=' + token + '&cid=' + cretiD + '">Edit</a><button class="btn btn-green deletebanner" creativeID=' + cretiD + ' sizeCode=' + sizcd + '>Delete</button>' + (campaignbidderstatus == 'Active' ? (bannerStatus == 43 || bannerStatus == 49 || bannerStatus == 45 ? '<button class="btn btn-green ' + (bidding_value == 0 ? 'bannerpaused' : 'pausebanner') + '" creativeid="' + cretiD + '" sizecode="' + sizcd + '" bidderstatus="' + (bannerStatus == 43 ? '49' : '43') + '">' + (bannerStatus == 43 ? 'Pause' : 'Activate') + '</button>' : '<button class="btnpaused_hundred btn btn-green">Activate</button>') : '<button class="btncampaignpaused btn btn-green">Activate</button>') + '</td></tr>').insertAfter('.dyncrow');
                                        }
                                    }
                                }
                            }
                        });


}
}
});

jQuery(document).on("click", ".statusupdatesuccess", function() {
    jQuery(".statusupdatebanner").hide();
});

});
setInterval(function() {
    var GivenDate = sessionStorage.getItem("date");
    var CurrentDate = new Date();
    GivenDate = new Date(GivenDate);

    if (GivenDate > CurrentDate) {

        jQuery('.api-loader').show();

        jQuery('.destroyCookie').trigger('click');
    }
}, 100000);
});

//------------------
jQuery(document).on("click", ".pausebanner", function() {
    var creative_id = jQuery(this).attr('creativeid');
    var size_code = jQuery(this).attr('sizecode');
    var bidder_status = jQuery(this).attr('bidderstatus');
    jQuery('.cretive_Id').val(creative_id);
    jQuery('.size_Code').val(size_code);
    jQuery('.bidder_Status').val(bidder_status);

    var formcr = jQuery("#updateCreativeStatus");

    jQuery.ajax({
        type: formcr.attr('method'),
        url: formcr.attr('action'),
        data: formcr.serialize(),
        success: function(data) {
            if (data.status.statusCode == 'F_200') {}
                if (data.status.statusCode == 'S_200') {
                    jQuery('.statusupdatebanner').show();

                    jQuery("#tablebanner").find("tr:not(:nth-child(1)):not(:nth-child(2))").remove();
                    var form = jQuery("#banner");
                    jQuery.ajax({
                        type: form.attr('method'),
                        url: form.attr('action'),
                        data: form.serialize(),
                        success: function(data) {

                            if (data.status.statusCode == 'F_200') {}
                                if (data.status.statusCode == 'S_200') {
                                    var token = $('.token').val();
                                    var bannerPrev = data.bannerPreview;
                                    var arrayLen = bannerPrev.length;
                                    var i;
                                    for (i = 0; i < arrayLen; i++) {
                                // alert(data.bannerPreview[i].sizeCode);
                                        var bannerSize = data.bannerPreview[i].sizeCode;
                                        var bannerType = data.bannerPreview[i].campaignBannerType;
                                        var bannerCode = "<iframe src='" + data.bannerPreview[i].bannerurl + "' width='" + data.bannerPreview[i].width + "'  height= '" + data.bannerPreview[i].height + "' Marginwidth='0' Marginheight='0' Hspace='0' Vspace='0' Frameborder='0' Scrolling='No'></iframe>";
                                        var campaignType = data.bannerPreview[i].type;
                                        var bannerStatus = data.bannerPreview[i].bidderstatus;
                                        var cretiD = data.bannerPreview[i].creativeid;
                                        var sizcd = data.bannerPreview[i].sizeCode;
                                        var campaignbidderstatus = data.bannerPreview[i].campaignbidderstatus;
                                        var bidding_value = data.bannerPreview[i].audit;
                                        var bidding_val_type = '';
                                        if (bidding_value == 1) {
                                            bidding_val_type = 'Approved';
                                        } else {
                                            bidding_val_type = 'Pending Approval';
                                        }
                                        if (sizcd == '999') {

                                            jQuery('<tr><td class="bannerSize">Auto Created Dynamic Banner</td><td class="bannerSize hideinmobile">' + bannerSize + '</td><td>' + cretiD + '</td><td class="bannerType">' + (campaignType == 2 && bannerType == 1 || campaignType == 1 && bannerType == 2 ? '<h1 class="reddot"></h1>' : ' <span class="greendot"></span>') + (bannerType == 1 ? 'Static' : 'Dynamic') + '</td><td class="bannerStatus_val">' + bidding_val_type + '</td><td class="bannerStatus" id=' + (bannerStatus == 43 ? 'active' : 'deactive') + '>' + (bannerStatus == 100 ? 'Forced Pause' : (bannerStatus == 43 ? 'Active' : 'Deactive|Pause')) + '</td><td class="bannerCode"><div class="bannnerIframeWrap"><button class="btn btn-green bannerClose"  style="opacity:1">X</button><div class="bannnerIframe">Loading...</div></div><button class="btn btn-green bannerPreview" data-pre="' + bannerCode + '">Preview</button>' +
                                                (campaignbidderstatus == 'Active' ? (bannerStatus == 43 || bannerStatus == 49 || bannerStatus == 45 ? '<button class="btn btn-green ' + (bidding_value == 0 ? 'bannerpaused' : 'pausebanner') + '" creativeid="' + cretiD + '" sizecode="' + sizcd + '" bidderstatus="' + (bannerStatus == 43 ? '49' : '43') + '">' + (bannerStatus == 43 ? 'Pause' : 'Activate') + '</button>' : '<button class="btnpaused_hundred btn btn-green">Activate</button>') : '<button class="btncampaignpaused btn btn-green">Activate</button>') + '</td></tr>').insertAfter($('.dyncrow'));

                                        } else if (sizcd == '888') {


                                            var bannerTitle = JSON.parse(data.bannerPreview[i].creativeMacro);
                                            if (bannerTitle) {
                                                var fnltt = bannerTitle[3].value;
                                            } else {
                                                fnltt = "Static Product Banner";
                                            }

                                            jQuery('<tr><td class="bannerSize">' + fnltt + '</td><td class="bannerSize hideinmobile">' + bannerSize + '</td><td>' + cretiD + '</td><td class="bannerType">' + (campaignType == 2 && bannerType == 1 || campaignType == 1 && bannerType == 2 ? '<h1 class="reddot"></h1>' : ' <span class="greendot"></span>') + (bannerType == 1 ? 'Static' : 'Dynamic') + '</td><td class="bannerStatus_val">' + bidding_val_type + '</td><td class="bannerStatus" id=' + (bannerStatus == 43 ? 'active' : 'deactive') + '>' + (bannerStatus == 100 ? 'Forced Pause' : (bannerStatus == 43 ? 'Active' : 'Deactive|Pause')) + '</td><td class="bannerCode"><div class="bannnerIframeWrap"><button class="btn btn-green bannerClose"  style="opacity:1">X</button><div class="bannnerIframe">Loading...</div></div><button class="btn btn-green bannerPreview" data-pre="' + bannerCode + '">Preview</button><button class="btn btn-green editbanner" creativeID=' + cretiD + ' sizeCode=' + sizcd + '>Edit</button><button class="btn btn-green deletebanner" creativeID=' + cretiD + ' sizeCode=' + sizcd + '>Delete</button>' +
                                                (campaignbidderstatus == 'Active' ? (bannerStatus == 43 || bannerStatus == 49 || bannerStatus == 45 ? '<button class="btn btn-green ' + (bidding_value == 0 ? 'bannerpaused' : 'pausebanner') + '" creativeid="' + cretiD + '" sizecode="' + sizcd + '" bidderstatus="' + (bannerStatus == 43 ? '49' : '43') + '">' + (bannerStatus == 43 ? 'Pause' : 'Activate') + '</button>' : '<button class="btnpaused_hundred btn btn-green">Activate</button>') : '<button class="btncampaignpaused btn btn-green">Activate</button>') + '</td></tr>').insertAfter($('.dyncrow'));
                                        } else {

                                            jQuery('<tr><td class="bannerSize"></td><td class="bannerSize hideinmobile">' + bannerSize + '</td><td>' + cretiD + '</td><td class="bannerType">' + (campaignType == 2 && bannerType == 1 || campaignType == 1 && bannerType == 2 ? '<h1 class="reddot"></h1>' : ' <span class="greendot"></span>') + (bannerType == 1 ? 'Static' : 'Dynamic') + '</td><td class="bannerStatus_val">' + bidding_val_type + '</td><td class="bannerStatus" id=' + (bannerStatus == 43 ? 'active' : 'deactive') + '>' + (bannerStatus == 100 ? 'Forced Pause' : (bannerStatus == 43 ? 'Active' : 'Deactive|Pause')) + '</td><td class="bannerCode"><div class="bannnerIframeWrap"><button class="btn btn-green bannerClose"  style="opacity:1">X</button><div class="bannnerIframe">Loading...</div></div><button class="btn btn-green bannerPreview" data-pre="' + bannerCode + '">Preview</button><a class="editbannerbtn" target="_blank" href="https://smartbid.preciso.net/#/login?ref=createstaticbyid&token=' + token + '&cid=' + cretiD + '">Edit</a><button class="btn btn-green deletebanner" creativeID=' + cretiD + ' sizeCode=' + sizcd + '>Delete</button>' + (campaignbidderstatus == 'Active' ? (bannerStatus == 43 || bannerStatus == 49 || bannerStatus == 45 ? '<button class="btn btn-green ' + (bidding_value == 0 ? 'bannerpaused' : 'pausebanner') + '" creativeid="' + cretiD + '" sizecode="' + sizcd + '" bidderstatus="' + (bannerStatus == 43 ? '49' : '43') + '">' + (bannerStatus == 43 ? 'Pause' : 'Activate') + '</button>' : '<button class="btnpaused_hundred btn btn-green">Activate</button>') : '<button class="btncampaignpaused btn btn-green">Activate</button>') + '</td></tr>').insertAfter($('.dyncrow'));
                                        }
                                    }
                                }
                            }
                        });


}
}
});

jQuery(document).on("click", ".statusupdatesuccess", function() {
    jQuery(".statusupdatebanner").hide();
});

});

jQuery(document).on("click", ".successcreatebtnbanner", function() {
    jQuery("#tablebanner").find("tr:not(:nth-child(1)):not(:nth-child(2))").remove();
    var form = jQuery("#banner");

    jQuery.ajax({
        type: form.attr('method'),
        url: form.attr('action'),
        data: form.serialize(),
        success: function(data) {

            if (data.status.statusCode == 'F_200') {

            }
            if (data.status.statusCode == 'S_200') {

                var token = jQuery('.token').val();
                var bannerPrev = data.bannerPreview;
                var arrayLen = bannerPrev.length;

                for (i = 0; i < arrayLen; i++) {

                    var bannerSize = data.bannerPreview[i].sizeCode;
                    var bannerType = data.bannerPreview[i].campaignBannerType;
                    var bannerCode = "<iframe src='" + data.bannerPreview[i].bannerurl + "' width='" + data.bannerPreview[i].width + "'  height= '" + data.bannerPreview[i].height + "' Marginwidth='0' Marginheight='0' Hspace='0' Vspace='0' Frameborder='0' Scrolling='No'></iframe>";
                    var campaignType = data.bannerPreview[i].type;
                    var bannerStatus = data.bannerPreview[i].bidderstatus;
                    var cretiD = data.bannerPreview[i].creativeid;
                    var campaignbidderstatus = data.bannerPreview[i].campaignbidderstatus;
                    var sizcd = data.bannerPreview[i].sizeCode;

                    var bidding_value = data.bannerPreview[i].audit;
                    var bidding_val_type = '';
                    if (bidding_value == 1) {
                        bidding_val_type = 'Approved';
                    } else {
                        bidding_val_type = 'Pending Approval';
                    }
                    if (sizcd == '999') {

                        jQuery('<tr><td class="bannerSize">Auto Created Dynamic Banner</td><td class="bannerSize">' + bannerSize + '</td><td>' + cretiD + '</td><td class="bannerType">' + (campaignType == 2 && bannerType == 1 || campaignType == 1 && bannerType == 2 ? '<h1 class="reddot"></h1>' : ' <span class="greendot"></span>') + (bannerType == 1 ? 'Static' : 'Dynamic') + '</td><td class="bannerStatus_val">' + bidding_val_type + '</td><td class="bannerStatus" id=' + (bannerStatus == 43 ? 'active' : 'deactive') + '>' + (bannerStatus == 100 ? 'Forced Pause' : (bannerStatus == 43 ? 'Active' : 'Deactive|Pause')) + '</td><td class="bannerCode"><div class="bannnerIframeWrap"><button class="btn btn-green bannerClose"  style="opacity:1">X</button><div class="bannnerIframe">Loading...</div></div><button class="btn btn-green bannerPreview" data-pre="' + bannerCode + '">Preview</button>' +
                            (campaignbidderstatus == 'Active' ? (bannerStatus == 43 || bannerStatus == 49 || bannerStatus == 45 ? '<button class="btn btn-green ' + (bidding_value == 0 ? 'bannerpaused' : 'pausebanner') + '" creativeid="' + cretiD + '" sizecode="' + sizcd + '" bidderstatus="' + (bannerStatus == 43 ? '49' : '43') + '">' + (bannerStatus == 43 ? 'Pause' : 'Activate') + '</button>' : '<button class="btnpaused_hundred btn btn-green">Activate</button>') : '<button class="btncampaignpaused btn btn-green">Activate</button>') + '</td></tr>').insertAfter('.dyncrow');

                    } else if (sizcd == '888') {


                        var bannerTitle = JSON.parse(data.bannerPreview[i].creativeMacro);
                        if (bannerTitle) {
                            var fnltt = bannerTitle[3].value;
                        } else {
                            fnltt = "Static Product Banner";
                        }

                        jQuery('<tr><td class="bannerSize">' + fnltt + '</td><td class="bannerSize hideinmobile">' + bannerSize + '</td><td>' + cretiD + '</td><td class="bannerType">' + (campaignType == 2 && bannerType == 1 || campaignType == 1 && bannerType == 2 ? '<h1 class="reddot"></h1>' : ' <span class="greendot"></span>') + (bannerType == 1 ? 'Static' : 'Dynamic') + '</td><td class="bannerStatus_val">' + bidding_val_type + '</td><td class="bannerStatus" id=' + (bannerStatus == 43 ? 'active' : 'deactive') + '>' + (bannerStatus == 100 ? 'Forced Pause' : (bannerStatus == 43 ? 'Active' : 'Deactive|Pause')) + '</td><td class="bannerCode"><div class="bannnerIframeWrap"><button class="btn btn-green bannerClose"  style="opacity:1">X</button><div class="bannnerIframe">Loading...</div></div><button class="btn btn-green bannerPreview" data-pre="' + bannerCode + '">Preview</button><button class="btn btn-green editbanner" creativeID=' + cretiD + ' sizeCode=' + sizcd + '>Edit</button><button class="btn btn-green deletebanner" creativeID=' + cretiD + ' sizeCode=' + sizcd + '>Delete</button>' +
                            (campaignbidderstatus == 'Active' ? (bannerStatus == 43 || bannerStatus == 49 || bannerStatus == 45 ? '<button class="btn btn-green ' + (bidding_value == 0 ? 'bannerpaused' : 'pausebanner') + '" creativeid="' + cretiD + '" sizecode="' + sizcd + '" bidderstatus="' + (bannerStatus == 43 ? '49' : '43') + '">' + (bannerStatus == 43 ? 'Pause' : 'Activate') + '</button>' : '<button class="btnpaused_hundred btn btn-green">Activate</button>') : '<button class="btncampaignpaused btn btn-green">Activate</button>') + '</td></tr>').insertAfter('.dyncrow');
                    } else {

                        jQuery('<tr><td class="bannerSize"></td><td class="bannerSize hideinmobile">' + bannerSize + '</td><td>' + cretiD + '</td><td class="bannerType">' + (campaignType == 2 && bannerType == 1 || campaignType == 1 && bannerType == 2 ? '<h1 class="reddot"></h1>' : ' <span class="greendot"></span>') + (bannerType == 1 ? 'Static' : 'Dynamic') + '</td><td class="bannerStatus_val">' + bidding_val_type + '</td><td class="bannerStatus" id=' + (bannerStatus == 43 ? 'active' : 'deactive') + '>' + (bannerStatus == 100 ? 'Forced Pause' : (bannerStatus == 43 ? 'Active' : 'Deactive|Pause')) + '</td><td class="bannerCode"><div class="bannnerIframeWrap"><button class="btn btn-green bannerClose"  style="opacity:1">X</button><div class="bannnerIframe">Loading...</div></div><button class="btn btn-green bannerPreview" data-pre="' + bannerCode + '">Preview</button><a class="editbannerbtn" target="_blank" href="https://smartbid.preciso.net/#/login?ref=createstaticbyid&token=' + token + '&cid=' + cretiD + '">Edit</a><button class="btn btn-green deletebanner" creativeID=' + cretiD + ' sizeCode=' + sizcd + '>Delete</button>' + (campaignbidderstatus == 'Active' ? (bannerStatus == 43 || bannerStatus == 49 || bannerStatus == 45 ? '<button class="btn btn-green ' + (bidding_value == 0 ? 'bannerpaused' : 'pausebanner') + '" creativeid="' + cretiD + '" sizecode="' + sizcd + '" bidderstatus="' + (bannerStatus == 43 ? '49' : '43') + '">' + (bannerStatus == 43 ? 'Pause' : 'Activate') + '</button>' : '<button class="btnpaused_hundred btn btn-green">Activate</button>') : '<button class="btncampaignpaused btn btn-green">Activate</button>') + '</td></tr>').insertAfter('.dyncrow');
                    }
                }
                jQuery('.successcreatebanner').hide();
            }
        }
    });

});
jQuery(document).on('click', '.udatesettingssuccess', function() {
    var formSet = jQuery("#getsettings");
    jQuery.ajax({
        type: formSet.attr('method'),
        url: formSet.attr('action'),
        data: formSet.serialize(),
        success: function(data) {

            if (data.status.statusCode == 'F_200') {

                sessionStorage.removeItem("login");
                sessionStorage.removeItem("campaignId");
                sessionStorage.removeItem("token");
                sessionStorage.removeItem("userId");
                localStorage.clear();
                jQuery.ajax({
                    url: preciso_ajax_url.ajax_url,
                    type: 'post',
                    data: {
                        action: 'preciso_logout',
                    },
                    success: function(response) {
                        location.reload();
                    }
                });

            }
            if (data.status.statusCode == 'S_200') {
                var campaignId = data.campaignDetails[0].campaignId;
                jQuery('.cmpID').val(campaignId);
                var campaignName = data.campaignDetails[0].campaignName;
                jQuery('#cmpName').val(campaignName);
                var programName = data.campaignDetails[0].programName;
                jQuery('#prmName').val(programName);
                var regionName = data.campaignDetails[0].regionName;
                jQuery('#regName').val(regionName);
                var channelName = data.campaignDetails[0].channelName;
                jQuery('#chanelNm option').each(function(index) {
                    if (jQuery(this).text() == channelName) {
                        jQuery(this).prop('selected', true);
                    } else {

                    }
                });
                var languageName = data.campaignDetails[0].languageName;
                jQuery('#langName').val(languageName);
                var deviceName = data.campaignDetails[0].deviceName;
                jQuery('#device').val(deviceName);
                var currency = data.campaignDetails[0].currency;
                jQuery('#currency').val(currency);
                var statusId = data.campaignDetails[0].statusId;
                if (statusId == 1) {
                    jQuery('#campSat').val('Active');
                } else {
                    jQuery('#campSat').val('Pause');
                }

                var monthlybudget = data.campaignDetails[0].totalBudget;
                jQuery('#mntBud').val(monthlybudget);
                var dailyBudget = data.campaignDetails[0].dailyBudget;
                jQuery('#daiBud').val(dailyBudget);
                var landingPage = data.campaignDetails[0].landingPage;
                jQuery('#landPage').val(landingPage);
                var frequencyCap = data.campaignDetails[0].frequencyCap;
                jQuery('#freqCap').val(frequencyCap);
                var biddingStatus = data.campaignDetails[0].biddingStatus;
                jQuery('#bidStatus option').each(function(index) {
                    if (jQuery(this).text() == biddingStatus) {
                        jQuery(this).prop('selected', true);
                    } else {}
                });
                if (biddingStatus == 'Active') {
                    jQuery('.biddingstatus').html('<span style="font-size: 18px;color:green;margin-right:10px;">Bidding: Active!</span>');
                } else {
                    jQuery('.biddingstatus').html('<span style="font-size: 18px;color:red;margin-right:10px;">Bidding: Pause!</span>');
                }
                var strategyName = data.campaignDetails[0].strategyName;
                jQuery('#stragName option').each(function(index) {
                    if (jQuery(this).text() == strategyName) {
                        jQuery(this).prop('selected', true);
                    } else {}
                });
                var campaignType = data.campaignDetails[0].campaignType;
                jQuery('#camptpy option').each(function(index) {
                    if (jQuery(this).val() == campaignType) {
                        jQuery(this).prop('selected', true);
                    } else {}
                });

                var payoutType = data.campaignDetails[0].payoutType;
                jQuery('#payuType').val(payoutType);
                var pc = data.campaignDetails[0].pc;
                jQuery('#cokieTime').val(pc);
                var pv = data.campaignDetails[0].pv;
                jQuery('#cokvTime').val(pv);
                var selectedOption = jQuery('#chanelNm').children("option:selected").text();

                if (selectedOption == 'Branding' || selectedOption == 'Prospecting') {
                    jQuery('#stragName option').each(function(index) {
                        if (jQuery(this).text() == 'Preciso Private Audience' || jQuery(this).text() == 'Public Audience') {
                            jQuery(this).show();
                        } else {
                            jQuery(this).hide();
                        }
                    });
                } else {
                    jQuery('#stragName option').each(function(index) {
                        jQuery(this).show();
                    });
                }
                jQuery('.api-loader').css('display', 'none');
                jQuery('.successalert').css('display', 'none');


            }
        }
    });


jQuery("#tablebanner").find("tr:not(:nth-child(1)):not(:nth-child(2))").remove();
var form = jQuery("#banner");
jQuery.ajax({
    type: form.attr('method'),
    url: form.attr('action'),
    data: form.serialize(),
    success: function(data) {
        if (data.status.statusCode == 'F_200') {}
            if (data.status.statusCode == 'S_200') {
                var token = jQuery('.token').val();
                var bannerPrev = data.bannerPreview;
                var arrayLen = bannerPrev.length;
                var i;
                for (i = 0; i < arrayLen; i++) {
                    // alert(data.bannerPreview[i].sizeCode);
                    var bannerSize = data.bannerPreview[i].sizeCode;
                    var bannerType = data.bannerPreview[i].campaignBannerType;
                    var bannerCode = "<iframe src='" + data.bannerPreview[i].bannerurl + "' width='" + data.bannerPreview[i].width + "'  height= '" + data.bannerPreview[i].height + "' Marginwidth='0' Marginheight='0' Hspace='0' Vspace='0' Frameborder='0' Scrolling='No'></iframe>";
                    var campaignType = data.bannerPreview[i].type;
                    var bannerStatus = data.bannerPreview[i].bidderstatus;
                    var cretiD = data.bannerPreview[i].creativeid;
                    var sizcd = data.bannerPreview[i].sizeCode;
                    var campaignbidderstatus = data.bannerPreview[i].campaignbidderstatus;
                    var bidding_value = data.bannerPreview[i].audit;
                    var bidding_val_type = '';
                    if (bidding_value == 1) {
                        bidding_val_type = 'Approved';
                    } else {
                        bidding_val_type = 'Pending Approval';
                    }
                    if (sizcd == '999') {

                        jQuery('<tr><td class="bannerSize">Auto Created Dynamic Banner</td><td class="bannerSize hideinmobile">' + bannerSize + '</td><td>' + cretiD + '</td><td class="bannerType">' + (campaignType == 2 && bannerType == 1 || campaignType == 1 && bannerType == 2 ? '<h1 class="reddot"></h1>' : ' <span class="greendot"></span>') + (bannerType == 1 ? 'Static' : 'Dynamic') + '</td><td class="bannerStatus_val">' + bidding_val_type + '</td><td class="bannerStatus" id=' + (bannerStatus == 43 ? 'active' : 'deactive') + '>' + (bannerStatus == 100 ? 'Forced Pause' : (bannerStatus == 43 ? 'Active' : 'Deactive|Pause')) + '</td><td class="bannerCode"><div class="bannnerIframeWrap"><button class="btn btn-green bannerClose"  style="opacity:1">X</button><div class="bannnerIframe">Loading...</div></div><button class="btn btn-green bannerPreview" data-pre="' + bannerCode + '">Preview</button>' +
                            (campaignbidderstatus == 'Active' ? (bannerStatus == 43 || bannerStatus == 49 || bannerStatus == 45 ? '<button class="btn btn-green ' + (bidding_value == 0 ? 'bannerpaused' : 'pausebanner') + '" creativeid="' + cretiD + '" sizecode="' + sizcd + '" bidderstatus="' + (bannerStatus == 43 ? '49' : '43') + '">' + (bannerStatus == 43 ? 'Pause' : 'Activate') + '</button>' : '<button class="btnpaused_hundred btn btn-green">Activate</button>') : '<button class="btncampaignpaused btn btn-green">Activate</button>') + '</td></tr>').insertAfter('.dyncrow');

                    } else if (sizcd == '888') {
                        var bannerTitle = JSON.parse(data.bannerPreview[i].creativeMacro);
                        if (bannerTitle) {
                            var fnltt = bannerTitle[3].value;
                        } else {
                            fnltt = "Static Product Banner";
                        }

                        jQuery('<tr><td class="bannerSize">' + fnltt + '</td><td class="bannerSize hideinmobile">' + bannerSize + '</td><td>' + cretiD + '</td><td class="bannerType">' + (campaignType == 2 && bannerType == 1 || campaignType == 1 && bannerType == 2 ? '<h1 class="reddot"></h1>' : ' <span class="greendot"></span>') + (bannerType == 1 ? 'Static' : 'Dynamic') + '</td><td class="bannerStatus_val">' + bidding_val_type + '</td><td class="bannerStatus" id=' + (bannerStatus == 43 ? 'active' : 'deactive') + '>' + (bannerStatus == 100 ? 'Forced Pause' : (bannerStatus == 43 ? 'Active' : 'Deactive|Pause')) + '</td><td class="bannerCode"><div class="bannnerIframeWrap"><button class="btn btn-green bannerClose"  style="opacity:1">X</button><div class="bannnerIframe">Loading...</div></div><button class="btn btn-green bannerPreview" data-pre="' + bannerCode + '">Preview</button><button class="btn btn-green editbanner" creativeID=' + cretiD + ' sizeCode=' + sizcd + '>Edit</button><button class="btn btn-green deletebanner" creativeID=' + cretiD + ' sizeCode=' + sizcd + '>Delete</button>' +
                            (campaignbidderstatus == 'Active' ? (bannerStatus == 43 || bannerStatus == 49 || bannerStatus == 45 ? '<button class="btn btn-green ' + (bidding_value == 0 ? 'bannerpaused' : 'pausebanner') + '" creativeid="' + cretiD + '" sizecode="' + sizcd + '" bidderstatus="' + (bannerStatus == 43 ? '49' : '43') + '">' + (bannerStatus == 43 ? 'Pause' : 'Activate') + '</button>' : '<button class="btnpaused_hundred btn btn-green">Activate</button>') : '<button class="btncampaignpaused btn btn-green">Activate</button>') + '</td></tr>').insertAfter('.dyncrow');
                    } else {
                        jQuery('<tr><td class="bannerSize"></td><td class="bannerSize hideinmobile">' + bannerSize + '</td><td>' + cretiD + '</td><td class="bannerType">' + (campaignType == 2 && bannerType == 1 || campaignType == 1 && bannerType == 2 ? '<h1 class="reddot"></h1>' : ' <span class="greendot"></span>') + (bannerType == 1 ? 'Static' : 'Dynamic') + '</td><td class="bannerStatus_val">' + bidding_val_type + '</td><td class="bannerStatus" id=' + (bannerStatus == 43 ? 'active' : 'deactive') + '>' + (bannerStatus == 100 ? 'Forced Pause' : (bannerStatus == 43 ? 'Active' : 'Deactive|Pause')) + '</td><td class="bannerCode"><div class="bannnerIframeWrap"><button class="btn btn-green bannerClose"  style="opacity:1">X</button><div class="bannnerIframe">Loading...</div></div><button class="btn btn-green bannerPreview" data-pre="' + bannerCode + '">Preview</button><a class="editbannerbtn" target="_blank" href="https://smartbid.preciso.net/#/login?ref=createstaticbyid&token=' + token + '&cid=' + cretiD + '">Edit</a><button class="btn btn-green deletebanner" creativeID=' + cretiD + ' sizeCode=' + sizcd + '>Delete</button>' + (campaignbidderstatus == 'Active' ? (bannerStatus == 43 || bannerStatus == 49 || bannerStatus == 45 ? '<button class="btn btn-green ' + (bidding_value == 0 ? 'bannerpaused' : 'pausebanner') + '" creativeid="' + cretiD + '" sizecode="' + sizcd + '" bidderstatus="' + (bannerStatus == 43 ? '49' : '43') + '">' + (bannerStatus == 43 ? 'Pause' : 'Activate') + '</button>' : '<button class="btnpaused_hundred btn btn-green">Activate</button>') : '<button class="btncampaignpaused btn btn-green">Activate</button>') + '</td></tr>').insertAfter('.dyncrow');
                    }
                }
            }
        }
    });

});




jQuery(document).on("click", ".closefailbanner", function() {
    jQuery(".failedcreatebanner").hide();
});

//-----------------------------
jQuery(document).on('click', '.bannerBtnsuccess', function() {
    jQuery('.bannerCRsuccess').hide();
});

jQuery('.bannerdeletesuccess').click(function() {
    jQuery("#tablebanner").find("tr:not(:nth-child(1)):not(:nth-child(2))").remove();
    var form = jQuery("#banner");
    jQuery.ajax({
        type: form.attr('method'),
        url: form.attr('action'),
        data: form.serialize(),
        success: function(data) {

            if (data.status.statusCode == 'F_200') {

            }
            if (data.status.statusCode == 'S_200') {
                var token = jQuery('.token').val();
                var bannerPrev = data.bannerPreview;
                var arrayLen = bannerPrev.length;
                var i;
                for (i = 0; i < arrayLen; i++) {
                    // alert(data.bannerPreview[i].sizeCode);
                    var bannerSize = data.bannerPreview[i].sizeCode;
                    var bannerType = data.bannerPreview[i].campaignBannerType;
                    var bannerCode = "<iframe src='" + data.bannerPreview[i].bannerurl + "' width='" + data.bannerPreview[i].width + "'  height= '" + data.bannerPreview[i].height + "' Marginwidth='0' Marginheight='0' Hspace='0' Vspace='0' Frameborder='0' Scrolling='No'></iframe>";
                    var campaignType = data.bannerPreview[i].type;
                    var bannerStatus = data.bannerPreview[i].bidderstatus;
                    var cretiD = data.bannerPreview[i].creativeid;
                    var campaignbidderstatus = data.bannerPreview[i].campaignbidderstatus;
                    var sizcd = data.bannerPreview[i].sizeCode;
                    var bidding_value = data.bannerPreview[i].audit;
                    var bidding_val_type = '';
                    if (bidding_value == 1) {
                        bidding_val_type = 'Approved';
                    } else {
                        bidding_val_type = 'Pending Approval';
                    }
                    if (sizcd == '999') {
                        jQuery('<tr><td class="bannerSize">Auto Created Dynamic Banner</td><td class="bannerSize hideinmobile">' + bannerSize + '</td><td>' + cretiD + '</td><td class="bannerType">' + (campaignType == 2 && bannerType == 1 || campaignType == 1 && bannerType == 2 ? '<h1 class="reddot"></h1>' : ' <span class="greendot"></span>') + (bannerType == 1 ? 'Static' : 'Dynamic') + '</td><td class="bannerStatus_val">' + bidding_val_type + '</td><td class="bannerStatus" id=' + (bannerStatus == 43 ? 'active' : 'deactive') + '>' + (bannerStatus == 100 ? 'Forced Pause' : (bannerStatus == 43 ? 'Active' : 'Deactive|Pause')) + '</td><td class="bannerCode"><div class="bannnerIframeWrap"><button class="btn btn-green bannerClose"  style="opacity:1">X</button><div class="bannnerIframe">Loading...</div></div><button class="btn btn-green bannerPreview" data-pre="' + bannerCode + '">Preview</button>' +
                            (campaignbidderstatus == 'Active' ? (bannerStatus == 43 || bannerStatus == 49 || bannerStatus == 45 ? '<button class="btn btn-green ' + (bidding_value == 0 ? 'bannerpaused' : 'pausebanner') + '" creativeid="' + cretiD + '" sizecode="' + sizcd + '" bidderstatus="' + (bannerStatus == 43 ? '49' : '43') + '">' + (bannerStatus == 43 ? 'Pause' : 'Activate') + '</button>' : '<button class="btnpaused_hundred btn btn-green">Activate</button>') : '<button class="btncampaignpaused btn btn-green">Activate</button>') + '</td></tr>').insertAfter('.dyncrow');

                    } else if (sizcd == '888') {


                        var bannerTitle = JSON.parse(data.bannerPreview[i].creativeMacro);
                        if (bannerTitle) {
                            var fnltt = bannerTitle[3].value;
                        } else {
                            fnltt = "Static Product Banner";
                        }
                        jQuery('<tr><td class="bannerSize">' + fnltt + '</td><td class="bannerSize hideinmobile">' + bannerSize + '</td><td>' + cretiD + '</td><td class="bannerType">' + (campaignType == 2 && bannerType == 1 || campaignType == 1 && bannerType == 2 ? '<h1 class="reddot"></h1>' : ' <span class="greendot"></span>') + (bannerType == 1 ? 'Static' : 'Dynamic') + '</td><td class="bannerStatus_val">' + bidding_val_type + '</td><td class="bannerStatus" id=' + (bannerStatus == 43 ? 'active' : 'deactive') + '>' + (bannerStatus == 100 ? 'Forced Pause' : (bannerStatus == 43 ? 'Active' : 'Deactive|Pause')) + '</td><td class="bannerCode"><div class="bannnerIframeWrap"><button class="btn btn-green bannerClose"  style="opacity:1">X</button><div class="bannnerIframe">Loading...</div></div><button class="btn btn-green bannerPreview" data-pre="' + bannerCode + '">Preview</button><button class="btn btn-green editbanner" creativeID=' + cretiD + ' sizeCode=' + sizcd + '>Edit</button><button class="btn btn-green deletebanner" creativeID=' + cretiD + ' sizeCode=' + sizcd + '>Delete</button>' +
                            (campaignbidderstatus == 'Active' ? (bannerStatus == 43 || bannerStatus == 49 || bannerStatus == 45 ? '<button class="btn btn-green ' + (bidding_value == 0 ? 'bannerpaused' : 'pausebanner') + '" creativeid="' + cretiD + '" sizecode="' + sizcd + '" bidderstatus="' + (bannerStatus == 43 ? '49' : '43') + '">' + (bannerStatus == 43 ? 'Pause' : 'Activate') + '</button>' : '<button class="btnpaused_hundred btn btn-green">Activate</button>') : '<button class="btncampaignpaused btn btn-green">Activate</button>') + '</td></tr>').insertAfter('.dyncrow');
                    } else {

                        jQuery('<tr><td class="bannerSize"></td><td class="bannerSize hideinmobile">' + bannerSize + '</td><td>' + cretiD + '</td><td class="bannerType">' + (campaignType == 2 && bannerType == 1 || campaignType == 1 && bannerType == 2 ? '<h1 class="reddot"></h1>' : ' <span class="greendot"></span>') + (bannerType == 1 ? 'Static' : 'Dynamic') + '</td><td class="bannerStatus_val">' + bidding_val_type + '</td><td class="bannerStatus" id=' + (bannerStatus == 43 ? 'active' : 'deactive') + '>' + (bannerStatus == 100 ? 'Forced Pause' : (bannerStatus == 43 ? 'Active' : 'Deactive|Pause')) + '</td><td class="bannerCode"><div class="bannnerIframeWrap"><button class="btn btn-green bannerClose"  style="opacity:1">X</button><div class="bannnerIframe">Loading...</div></div><button class="btn btn-green bannerPreview" data-pre="' + bannerCode + '">Preview</button><a class="editbannerbtn" target="_blank" href="https://smartbid.preciso.net/#/login?ref=createstaticbyid&token=' + token + '&cid=' + cretiD + '">Edit</a><button class="btn btn-green deletebanner" creativeID=' + cretiD + ' sizeCode=' + sizcd + '>Delete</button>' + (campaignbidderstatus == 'Active' ? (bannerStatus == 43 || bannerStatus == 49 || bannerStatus == 45 ? '<button class="btn btn-green ' + (bidding_value == 0 ? 'bannerpaused' : 'pausebanner') + '" creativeid="' + cretiD + '" sizecode="' + sizcd + '" bidderstatus="' + (bannerStatus == 43 ? '49' : '43') + '">' + (bannerStatus == 43 ? 'Pause' : 'Activate') + '</button>' : '<button class="btnpaused_hundred btn btn-green">Activate</button>') : '<button class="btncampaignpaused btn btn-green">Activate</button>') + '</td></tr>').insertAfter('.dyncrow');
                    }


                }
                jQuery('.successalertbanner').hide();
            }
        }
    });

});
jQuery(document).on("click", ".bannerpaused", function() {
    jQuery(".failedpausebanner").show();
});

jQuery(document).on("click", ".closepausedbanner", function() {
    jQuery(".failedpausebanner").hide();
});

jQuery(document).on("click", ".bannerotherpaused", function() {
    jQuery(".failedpauseotherbanner").show();
});

jQuery(document).on("click", ".closepausedotherbanner", function() {
    jQuery(".failedpauseotherbanner").hide();
});

jQuery(document).on("click", ".btnpaused_hundred", function() {
    jQuery(".failedpauseohundredbanner").show();
});

jQuery(document).on("click", ".closepauseohundredbanner", function() {
    jQuery(".failedpauseohundredbanner").hide();
});

jQuery(document).on("click", ".btncampaignpaused", function() {
    jQuery(".failedcmapaignpaused").show();
});

jQuery(document).on("click", ".closecmapaignpaused", function() {
    jQuery(".failedcmapaignpaused").hide();
});

jQuery(document).on('click', '.btn-updSet', function() {
    var formSet = jQuery("#getsettings");
    jQuery.ajax({
        type: formSet.attr('method'),
        url: formSet.attr('action'),
        data: formSet.serialize(),
        success: function(data) {
            if (data.status.statusCode == 'F_200') {
                sessionStorage.removeItem("login");
                sessionStorage.removeItem("campaignId");
                sessionStorage.removeItem("token");
                sessionStorage.removeItem("userId");
                localStorage.clear();
                jQuery.ajax({
                    url: preciso_ajax_url.ajax_url,
                    type: 'post',
                    data: {
                        action: 'preciso_logout',
                    },
                    success: function(response) {
                        // location.reload();
                    }
                });
            }
            if (data.status.statusCode == 'S_200') {
                var campaignId = data.campaignDetails[0].campaignId;
                jQuery('.cmpID').val(campaignId);
                var campaignName = data.campaignDetails[0].campaignName;
                jQuery('#cmpName').val(campaignName);
                var programName = data.campaignDetails[0].programName;
                jQuery('#prmName').val(programName);
                var regionName = data.campaignDetails[0].regionName;
                jQuery('#regName').val(regionName);
                var channelName = data.campaignDetails[0].channelName;
                jQuery('#chanelNm option').each(function(index) {
                    if (jQuery(this).text() == channelName) {
                        jQuery(this).prop('selected', true);
                    } else {

                    }
                });
                var languageName = data.campaignDetails[0].languageName;
                jQuery('#langName').val(languageName);
                var deviceName = data.campaignDetails[0].deviceName;
                jQuery('#device').val(deviceName);
                var currency = data.campaignDetails[0].currency;
                jQuery('#currency').val(currency);
                var statusId = data.campaignDetails[0].statusId;
                if (statusId == 1) {
                    jQuery('#campSat').val('Active');
                } else {
                    jQuery('#campSat').val('Pause');
                }

                var monthlybudget = data.campaignDetails[0].totalBudget;
                jQuery('#mntBud').val(monthlybudget);
                var dailyBudget = data.campaignDetails[0].dailyBudget;
                jQuery('#daiBud').val(dailyBudget);
                var landingPage = data.campaignDetails[0].landingPage;
                jQuery('#landPage').val(landingPage);
                var frequencyCap = data.campaignDetails[0].frequencyCap;
                jQuery('#freqCap').val(frequencyCap);
                var biddingStatus = data.campaignDetails[0].biddingStatus;
                jQuery('#bidStatus option').each(function(index) {
                    if (jQuery(this).text() == biddingStatus) {
                        jQuery(this).prop('selected', true);
                    } else {}
                });
                if (biddingStatus == 'Active') {
                    jQuery('.biddingstatus').html('<span style="font-size: 18px;color:green;">Bidding: Active!</span>');
                } else {
                    jQuery('.biddingstatus').html('<span style="font-size: 18px;color:red;">Bidding: Pause!</span>');
                }

                var strategyName = data.campaignDetails[0].strategyName;
                jQuery('#stragName option').each(function(index) {
                    if (jQuery(this).text() == strategyName) {
                        jQuery(this).prop('selected', true);
                    } else {}
                });
                var campaignType = data.campaignDetails[0].campaignType;
                jQuery('#camptpy option').each(function(index) {
                    if (jQuery(this).val() == campaignType) {
                        jQuery(this).prop('selected', true);
                    } else {}
                });

                var payoutType = data.campaignDetails[0].payoutType;
                jQuery('#payuType').val(payoutType);
                var pc = data.campaignDetails[0].pc;
                jQuery('#cokieTime').val(pc);
                var pv = data.campaignDetails[0].pv;
                jQuery('#cokvTime').val(pv);
                var selectedOption = jQuery('#chanelNm').children("option:selected").text();
                if (selectedOption == 'Branding' || selectedOption == 'Prospecting') {
                    jQuery('#stragName option').each(function(index) {
                        if (jQuery(this).text() == 'MainAd Private Audience' || jQuery(this).text() == 'Public Audience') {
                            jQuery(this).show();
                        } else {
                            jQuery(this).hide();
                        }
                    });
                } else {
                    jQuery('#stragName option').each(function(index) {
                        jQuery(this).show();
                    });
                }
                jQuery('.successalert').hide();
                jQuery('.api-loader').css('display', 'none');

            }
        }
    });


});



jQuery(document).on('click', '.deletebanner', function() {
    jQuery('.api-loader').show();
    var creativeCode = jQuery(this).attr('creativeid');
    var sizeCODE = jQuery(this).attr('sizecode');
    jQuery('.creaativeID').val(creativeCode);
    jQuery('.sizeCCode').val(sizeCODE);

    var formcr = jQuery("#deletebanner");

    jQuery.ajax({
        type: formcr.attr('method'),
        url: formcr.attr('action'),
        data: formcr.serialize(),
        success: function(data) {
            if (data.status.statusCode == 'F_200' || data.status.statusCode == 'EX_200') {
                jQuery('.api-loader').hide();
                jQuery('.failedalertbanner').show();
            }
            if (data.status.statusCode == 'S_200') {
                jQuery('.api-loader').hide();
                jQuery('.successalertbanner').show();


            }
        }
    });

});

jQuery('.failedalertbtn').click(function() {
    jQuery('.failedalertbanner').hide();
});

jQuery('.skypeBtn').click(function() {
    jQuery('#rawa-box').css('opacity', '1');
    jQuery('#rawa-box').css('visibility', 'visible');

});
jQuery('#rawa-close ').click(function() {
    jQuery('#rawa-box').css('opacity', '0');
    jQuery('#rawa-box').css('visibility', 'hidden');
});


jQuery(document).on("click", ".editbanner", function() {
    jQuery('.edit_banner_popup').show();
    jQuery('.flagbtn').val(0);
});

jQuery(document).on("click", ".popupCloseButton_editbanner", function() {
    jQuery('.edit_banner_popup').hide();
});

// jQuery('.popupCloseButton_editbanner').click(function(){
//     jQuery('.edit_banner_popup').hide();
// });

jQuery(document).on('click', '.editbanner', function() {
    var creativeCode = jQuery(this).attr('creativeid');
    jQuery('.editcreaativeID').val(creativeCode);
    jQuery('.crtVID').val(creativeCode);

    var formcr = jQuery("#bannerDetails");
    jQuery.ajax({
        type: formcr.attr('method'),
        url: formcr.attr('action'),
        data: formcr.serialize(),
        success: function(data) {

            if (data.status.statusCode == 'F_200') {
                // alert('unsucessful');
            }
            if (data.status.statusCode == 'S_200') {
                var bannerDt = JSON.parse(data.rtgBanner[0].creativeMacro);

                jQuery('.titleval').val(bannerDt[3].value);
                var editarrLEn = bannerDt.length;

                if (editarrLEn == 9) {
                    jQuery('#editprdIDCR').val(bannerDt[8].value);
                } else {
                    jQuery('#editprdIDCR').val(' ');
                }
                jQuery('.brandval').val(bannerDt[2].value);
                jQuery('.priceval').val(bannerDt[4].value);
                jQuery('.imageurl').val(bannerDt[1].value);
                jQuery('.landingpageurl').val(bannerDt[0].value);
                jQuery('.buttontext').val(bannerDt[6].value);
            }
        }
    });

});

jQuery(document).on('click', '#dynamicbanneredit', function() {

    var varTitle = jQuery('.titleval').val();
    var varBrand = jQuery('.brandval').val();
    var varprice = jQuery('.priceval').val();
    var varimage = jQuery('.imageurl').val();
    var varlandingpage = jQuery('.landingpageurl').val();
    var varbuttonTxt = jQuery('.buttontext').val();

    if (varTitle == '' || varBrand == '' || varprice == '' || varimage == '' || varlandingpage == '' || varbuttonTxt == '') {

        if (varTitle == '') {
            jQuery('.titleval').css('background-color', '#ff000040');
        } else {
            jQuery('.titleval').css('background-color', '#fff');
        }

        if (varBrand == '') {
            jQuery('.brandval').css('background-color', '#ff000040');
        } else {
            jQuery('.brandval').css('background-color', '#fff');
        }

        if (varprice == '') {
            jQuery('.priceval').css('background-color', '#ff000040');
        } else {
            jQuery('.priceval').css('background-color', '#fff');
        }

        if (varbuttonTxt == '') {
            jQuery('.buttontext').css('background-color', '#ff000040');
        } else {
            jQuery('.buttontext').css('background-color', '#fff');
        }
        if (varimage == '') {
            jQuery('.imageurl').css('background-color', '#ff000040');
        } else {
            jQuery('.imageurl').css('background-color', '#fff');
        }
        if (varlandingpage == '') {
            jQuery('.landingpageurl').css('background-color', '#ff000040');
        } else {
            jQuery('.landingpageurl').css('background-color', '#fff');
        }

    } else {

        if (varTitle == '') {
            jQuery('.titleval').css('background-color', '#ff000040');
        } else {
            jQuery('.titleval').css('background-color', '#fff');
        }

        if (varBrand == '') {
            jQuery('.brandval').css('background-color', '#ff000040');
        } else {
            jQuery('.brandval').css('background-color', '#fff');
        }

        if (varprice == '') {
            jQuery('.priceval').css('background-color', '#ff000040');
        } else {
            jQuery('.priceval').css('background-color', '#fff');
        }

        if (varbuttonTxt == '') {
            jQuery('.buttontext').css('background-color', '#ff000040');
        } else {
            jQuery('.buttontext').css('background-color', '#fff');
        }
        if (varimage == '') {
            jQuery('.imageurl').css('background-color', '#ff000040');
        } else {
            jQuery('.imageurl').css('background-color', '#fff');
        }
        if (varlandingpage == '') {
            jQuery('.landingpageurl').css('background-color', '#ff000040');
        } else {
            jQuery('.landingpageurl').css('background-color', '#fff');
        }

        if (varimage != '') {

            isUrlExists(varimage, function(status) {

                if (status === 200) {
                    jQuery('.api-loader').css('display', 'block');
                    jQuery('.imageurl').css('background-color', '#fff');
                    var formcr = jQuery("#editBanner");
                    jQuery.ajax({
                        type: formcr.attr('method'),
                        url: formcr.attr('action'),
                        data: formcr.serialize(),
                        success: function(data) {

                            if (data.status.statusCode == 'F_200') {
                                jQuery('.api-loader').css('display', 'none');
                                jQuery('.edit_banner_popup').hide();
                                jQuery('.failedupdatebanner').show();
                            }
                            if (data.status.statusCode == 'S_200') {
                                /*  jQuery('.api-loader').css('display','block');
                                   location.reload();
                                   */
                                jQuery('.api-loader').css('display', 'none');
                                jQuery('.edit_banner_popup').hide();
                                jQuery('.successupdatebanner').show();
                            }
                        }
                    });
                } else if (status === 404) {
                    jQuery('.imageurl').css('background-color', '#ff000040');
                }
            });
        }

    }
});


jQuery(document).on('click', '.successupdatebtnbanner', function() {
    jQuery("#tablebanner").find("tr:not(:nth-child(1)):not(:nth-child(2))").remove();
    var form = jQuery("#banner");
    jQuery.ajax({
        type: form.attr('method'),
        url: form.attr('action'),
        data: form.serialize(),
        success: function(data) {

            if (data.status.statusCode == 'F_200') {

            }
            if (data.status.statusCode == 'S_200') {
                var token = jQuery('.token').val();
                var bannerPrev = data.bannerPreview;
                var arrayLen = bannerPrev.length;
                var i;
                for (i = 0; i < arrayLen; i++) {
                    // alert(data.bannerPreview[i].sizeCode);
                    var bannerSize = data.bannerPreview[i].sizeCode;
                    var bannerType = data.bannerPreview[i].campaignBannerType;
                    var bannerCode = "<iframe src='" + data.bannerPreview[i].bannerurl + "' width='" + data.bannerPreview[i].width + "'  height= '" + data.bannerPreview[i].height + "' Marginwidth='0' Marginheight='0' Hspace='0' Vspace='0' Frameborder='0' Scrolling='No'></iframe>";
                    var campaignType = data.bannerPreview[i].type;
                    var bannerStatus = data.bannerPreview[i].bidderstatus;
                    var cretiD = data.bannerPreview[i].creativeid;
                    var sizcd = data.bannerPreview[i].sizeCode;
                    var campaignbidderstatus = data.bannerPreview[i].campaignbidderstatus;
                    var bidding_value = data.bannerPreview[i].audit;
                    var bidding_val_type = '';
                    if (bidding_value == 1) {
                        bidding_val_type = 'Approved';
                    } else {
                        bidding_val_type = 'Pending Approval';
                    }
                    if (sizcd == '999') {

                        jQuery('<tr><td class="bannerSize">Auto Created Dynamic Banner</td><td class="bannerSize hideinmobile">' + bannerSize + '</td><td>' + cretiD + '</td><td class="bannerType">' + (campaignType == 2 && bannerType == 1 || campaignType == 1 && bannerType == 2 ? '<h1 class="reddot"></h1>' : ' <span class="greendot"></span>') + (bannerType == 1 ? 'Static' : 'Dynamic') + '</td><td class="bannerStatus_val">' + bidding_val_type + '</td><td class="bannerStatus" id=' + (bannerStatus == 43 ? 'active' : 'deactive') + '>' + (bannerStatus == 100 ? 'Forced Pause' : (bannerStatus == 43 ? 'Active' : 'Deactive|Pause')) + '</td><td class="bannerCode"><div class="bannnerIframeWrap"><button class="btn btn-green bannerClose"  style="opacity:1">X</button><div class="bannnerIframe">Loading...</div></div><button class="btn btn-green bannerPreview" data-pre="' + bannerCode + '">Preview</button>' +
                            (campaignbidderstatus == 'Active' ? (bannerStatus == 43 || bannerStatus == 49 || bannerStatus == 45 ? '<button class="btn btn-green ' + (bidding_value == 0 ? 'bannerpaused' : 'pausebanner') + '" creativeid="' + cretiD + '" sizecode="' + sizcd + '" bidderstatus="' + (bannerStatus == 43 ? '49' : '43') + '">' + (bannerStatus == 43 ? 'Pause' : 'Activate') + '</button>' : '<button class="btnpaused_hundred btn btn-green">Activate</button>') : '<button class="btncampaignpaused btn btn-green">Activate</button>') + '</td></tr>').insertAfter('.dyncrow');

                    } else if (sizcd == '888') {


                        var bannerTitle = JSON.parse(data.bannerPreview[i].creativeMacro);
                        if (bannerTitle) {
                            var fnltt = bannerTitle[3].value;
                        } else {
                            fnltt = "Static Product Banner";
                        }

                        jQuery('<tr><td class="bannerSize">' + fnltt + '</td><td class="bannerSize hideinmobile">' + bannerSize + '</td><td>' + cretiD + '</td><td class="bannerType">' + (campaignType == 2 && bannerType == 1 || campaignType == 1 && bannerType == 2 ? '<h1 class="reddot"></h1>' : ' <span class="greendot"></span>') + (bannerType == 1 ? 'Static' : 'Dynamic') + '</td><td class="bannerStatus_val">' + bidding_val_type + '</td><td class="bannerStatus" id=' + (bannerStatus == 43 ? 'active' : 'deactive') + '>' + (bannerStatus == 100 ? 'Forced Pause' : (bannerStatus == 43 ? 'Active' : 'Deactive|Pause')) + '</td><td class="bannerCode"><div class="bannnerIframeWrap"><button class="btn btn-green bannerClose"  style="opacity:1">X</button><div class="bannnerIframe">Loading...</div></div><button class="btn btn-green bannerPreview" data-pre="' + bannerCode + '">Preview</button><button class="btn btn-green editbanner" creativeID=' + cretiD + ' sizeCode=' + sizcd + '>Edit</button><button class="btn btn-green deletebanner" creativeID=' + cretiD + ' sizeCode=' + sizcd + '>Delete</button>' +
                            (campaignbidderstatus == 'Active' ? (bannerStatus == 43 || bannerStatus == 49 || bannerStatus == 45 ? '<button class="btn btn-green ' + (bidding_value == 0 ? 'bannerpaused' : 'pausebanner') + '" creativeid="' + cretiD + '" sizecode="' + sizcd + '" bidderstatus="' + (bannerStatus == 43 ? '49' : '43') + '">' + (bannerStatus == 43 ? 'Pause' : 'Activate') + '</button>' : '<button class="btnpaused_hundred btn btn-green">Activate</button>') : '<button class="btncampaignpaused btn btn-green">Activate</button>') + '</td></tr>').insertAfter('.dyncrow');
                    } else {
                        jQuery('<tr><td class="bannerSize"></td><td class="bannerSize hideinmobile">' + bannerSize + '</td><td>' + cretiD + '</td><td class="bannerType">' + (campaignType == 2 && bannerType == 1 || campaignType == 1 && bannerType == 2 ? '<h1 class="reddot"></h1>' : ' <span class="greendot"></span>') + (bannerType == 1 ? 'Static' : 'Dynamic') + '</td><td class="bannerStatus_val">' + bidding_val_type + '</td><td class="bannerStatus" id=' + (bannerStatus == 43 ? 'active' : 'deactive') + '>' + (bannerStatus == 100 ? 'Forced Pause' : (bannerStatus == 43 ? 'Active' : 'Deactive|Pause')) + '</td><td class="bannerCode"><div class="bannnerIframeWrap"><button class="btn btn-green bannerClose"  style="opacity:1">X</button><div class="bannnerIframe">Loading...</div></div><button class="btn btn-green bannerPreview" data-pre="' + bannerCode + '">Preview</button><a class="editbannerbtn" target="_blank" href="https://smartbid.preciso.net/#/login?ref=createstaticbyid&token=' + token + '&cid=' + cretiD + '">Edit</a><button class="btn btn-green deletebanner" creativeID=' + cretiD + ' sizeCode=' + sizcd + '>Delete</button>' + (campaignbidderstatus == 'Active' ? (bannerStatus == 43 || bannerStatus == 49 || bannerStatus == 45 ? '<button class="btn btn-green ' + (bidding_value == 0 ? 'bannerpaused' : 'pausebanner') + '" creativeid="' + cretiD + '" sizecode="' + sizcd + '" bidderstatus="' + (bannerStatus == 43 ? '49' : '43') + '">' + (bannerStatus == 43 ? 'Pause' : 'Activate') + '</button>' : '<button class="btnpaused_hundred btn btn-green">Activate</button>') : '<button class="btncampaignpaused btn btn-green">Activate</button>') + '</td></tr>').insertAfter('.dyncrow');
                    }
                }
                jQuery('.successupdatebanner').hide();
            }
        }
    });
});

jQuery(document).on("click", "html", function() {
    jQuery(".bannnerIframeWrap").removeClass('active');
});

jQuery(document).on("click", ".bannerPreview", function(e) {
    e.stopPropagation();
});
jQuery('body').on("click", ".bannerPreview", function() {
    jQuery(".bannnerIframeWrap").removeClass('active');
    var bannercode = jQuery(this).attr("data-pre");

    jQuery(this).parent().find(".bannnerIframe").html(bannercode);
    jQuery(this).parent().find(".bannnerIframeWrap").addClass('active');
});

jQuery('body').on("click", ".bannerClose", function() {
    jQuery(".bannnerIframeWrap").removeClass('active');
    jQuery(this).parent().find(".bannnerIframe").html("");
});