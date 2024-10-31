var url = window.location.href;
var res = url.split('/');

var newdata = preciso_ajax_data_shop.product_ids;
var urlSite = window.location.href;
var urlSrc = urlSite.match(/^http:\/\/[^/]+/);

rtgsettings = {
    'pdt_url': url,
    'pdt_category_list': res[3],
    'pdt_id': newdata,
    'pagetype': 'category',
    'key': 'SPY',
    'token': preciso_ajax_data_shop.session.campaignId,
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
    jQuery.getJSON(' https://audtrk.mndtrk.com/AudiencePixels?audienceid=0&campaignid='+preciso_ajax_data_shop.session.campaignId+'&PageType=category',
    function(data) {
    console.log(data); 
    }); 
}(document));