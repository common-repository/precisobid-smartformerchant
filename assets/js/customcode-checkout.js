//console.log("checkout pixel1--"+sessionStorage.getItem("campaignId"));
console.log(preciso_ajax_data_checkout.checkout_data);

var proID = preciso_ajax_data_checkout.checkout_data.cartid;
var SKU = preciso_ajax_data_checkout.checkout_data.productsku;
var price = preciso_ajax_data_checkout.checkout_data.checkoutamount;
var orderid = preciso_ajax_data_checkout.checkout_data.orderid;
var orderstatus = preciso_ajax_data_checkout.checkout_data.orderstatus;
var ordercurrency = preciso_ajax_data_checkout.checkout_data.ordercurrency;
var orderdate = preciso_ajax_data_checkout.checkout_data.orderdate;
var ordercustomer = preciso_ajax_data_checkout.checkout_data.ordercustomer;
var urlSite = window.location.href;
var urlSrc = urlSite.match(/^http:\/\/[^/]+/);

rtgsettings = {
'ProductId': proID,                
'Currency': ordercurrency,                 
'pagetype': 'checkout',
'OrderId': orderid,       
'Amount': price,
'key': 'SPY',
'token': 62957,
'layer': 'iframe' 
};
(function(d) {
    var s = d.createElement('script');
    s.async = true;
    s.id = 'madv2014rtg';
    s.type = 'text/javascript';
    s.src = 'http://wordpress.preciso.net/js/main-min.js';
    var a = d.getElementsByTagName('script')[0];
    a.parentNode.insertBefore(s, a);
   /* jQuery.getJSON(' https://audtrk.mndtrk.com/AudiencePixels?audienceid=0&campaignid='+preciso_ajax_data_checkout.session.campaignId+'&PageType=checkout',
    function(data) {
    console.log(data); 
    });
    */ 
}(document));