var url = window.location.href;
var cartitems = preciso_ajax_data_cart.cartIds;
var cartcolltitle = preciso_ajax_data_cart.titles;
var cartsku = preciso_ajax_data_cart.cartSKU;
var ty_orderamt = preciso_ajax_data_cart.totalamount;
var urlSite = window.location.href;
var urlSrc = urlSite.match(/^http:\/\/[^/]+/);

rtgsettings = {
    'pdt_id': cartitems,
    'pdt_sku': cartsku,
    'pdt_category_list': cartcolltitle,
    'pdt_url': url,
    'ty_orderamt': ty_orderamt,
    'ty_orderdate': '$ty_orderdate$',
    'ty_orderstatus': '$ty_orderstatus$',
    'pagetype': 'basket',
    'key': 'SPY',
    'token': preciso_ajax_data_cart.session.campaignId,
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
    jQuery.getJSON(' https://audtrk.mndtrk.com/AudiencePixels?audienceid=0&campaignid='+preciso_ajax_data_cart.session.campaignId+'&PageType=basket',
    function(data) {
    console.log(data); 
    }); 
}(document));