jQuery( document ).ready(
	function () {

		var url = window.location.href;

		rtgsettings = {

			'pdt_url': url,
			'pagetype': 'home',
			'key': 'SPY',
			'token': preciso_ajax_data.session.campaignId,
			'layer': 'iframe'
		};
		(function (d) {
			var s   = d.createElement( 'script' );
			s.async = true;
			s.id    = 'madv2014rtg';
			s.type  = 'text/javascript';
			s.src   = (d.location.protocol == 'https:' ? 'https:' : 'http:') + '//apppartner.mainad.com/shopify-js/main-min.js';
			var a   = d.getElementsByTagName( 'script' )[0];
			a.parentNode.insertBefore( s, a );
			jQuery.getJSON(
				' https://audtrk.mndtrk.com/AudiencePixels?audienceid=0&campaignid=' + preciso_ajax_data_checkout.session.campaignId + '&PageType=home',
				function (data) {
					console.log( data );
				}
			);
		}(document));
	}
);
