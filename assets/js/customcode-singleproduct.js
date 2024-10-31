var url = window.location.href;
var proId = preciso_ajax_data_product.allData.pro_id;
var proTitle = preciso_ajax_data_product.allData.pro_title;
var proPrice = preciso_ajax_data_product.allData.saleprice;
var procmpPrice = preciso_ajax_data_product.allData.regularprice;
var proImage = preciso_ajax_data_product.allData.image;
var proCate = preciso_ajax_data_product.allData.pro_cat;
var proDescription = preciso_ajax_data_product.allData.pro_dis;
var shopCurr = preciso_ajax_data_product.allData.shopcurrency;
var sku = preciso_ajax_data_product.allData.proSKU;
var ProInve = preciso_ajax_data_product.allData.quantity;
var urlSite = window.location.href;
var urlSrc = urlSite.match(/^http:\/\/[^/]+/);

rtgsettings = {

    'pdt_id': proId,
    'pdt_sku': sku,
    'pdt_name': proTitle,
    'pdt_price': proPrice,
    'pdt_amount': procmpPrice,
    'pdt_currency': shopCurr,
    'pdt_url': url,
    'pdt_photo': proImage,
    'pdt_instock': ProInve,
    'pdt_expdate': '$pdt_expdate$',
    'pdt_category_list': proCate,
    'pdt_smalldescription': proDescription,
    'pagetype': 'product',
    'key': 'SPY',
    'token': preciso_ajax_data_product.session.campaignId,
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
    jQuery.getJSON(' https://audtrk.mndtrk.com/AudiencePixels?audienceid=0&campaignid='+preciso_ajax_data_product.session.campaignId+'&PageType=product',
    function(data) {
    console.log(data); 
    }); 
}(document));