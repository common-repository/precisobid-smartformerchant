<?php
/**
 * PrecisoBid-SmartForMerchant
 *
 * @package  WPrecisoBid-SmartForMerchant
 * @link     http://localhost/wordpress

 * Plugin Name:      PrecisoBid-SmartForMerchant
 * Author URI: https://www.preciso.net/
 * Description:      PrecisoBid-SmartForMerchant
 * Category:         SmartForMerchant
 * Package:          PrecisoBid-SmartForMerchant
 * Version:          1.1.0
 * Requires at least:5.2
 * Requires PHP:     7.2
 * Author: Preciso Team
 * License:          GPL v2 or later
 * License URI:      https://www.gnu.org/licenses/gpl-2.0.html
 * Woo: 6793960:a3b5c77a3e6a9600eb1f506e0f2d6ba1
 * Text Domain: preciso
 * Domain Path: /inc
 * WC requires at least: 3.3.0
 * WC tested up to: 8.1.1
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
} // Exit if accessed directly

/**
 * Plugin Activation function.

@return void
 */
function Preciso_activate() {
	if ( ! function_exists( 'is_plugin_active_for_network' ) ) {
		include_once ABSPATH . '/wp-admin/includes/plugin.php';
	}
	if ( current_user_can( 'activate_plugins' ) && ! class_exists( 'WooCommerce' ) ) {
		deactivate_plugins( plugin_basename( __FILE__ ) );
		wp_die( '<p style="font-family:-apple-system,BlinkMacSystemFont,\'Segoe UI\',Roboto,Oxygen-Sans,Ubuntu,Cantarell,\'Helvetica Neue\',sans-serif;font-size: 13px;line-height: 1.5;color:#444;">' . esc_html__( 'This plugin requires ', 'preciso' ) . '<a href="' . esc_url( 'https://wordpress.org/plugins/woocommerce/' ) . '">WooCommerce</a>' . esc_html__( ' plugin to be active.', 'preciso' ) . '</p>' );
	}
}
register_activation_hook( __FILE__, 'Preciso_activate' );
if ( ! defined( 'WPINC' ) ) {
	wp_die();
}
if ( ! defined( 'PRECISO_PLUGIN_VERSION' ) ) {
	define( 'PRECISO_PLUGIN_VERSION', '1.0.0' );
}
if ( ! defined( 'PRECISO_PLUGIN_DIR' ) ) {
	define( 'PRECISO_PLUGIN_DIR', plugin_dir_url( __FILE__ ) );
}

if ( ! defined( 'PRECISO_CAMPAIGN_ID' ) ) {
	define( 'PRECISO_CAMPAIGN_ID', get_option( 'preciso_campaignId' ) );
}

require plugin_dir_path( __FILE__ ) . 'inc/settings.php';
require plugin_dir_path( __FILE__ ) . 'inc/customfunction.php';

if ( ! function_exists( 'Preciso_Plugin_scripts' ) ) {

	/**
	 * Plugin Scripts

	@return void
	 */
	function Preciso_Plugin_scripts() {
		wp_enqueue_script( 'jquery' );

		$style = 'bootstrap';
		if ( ( ! wp_style_is( $style, 'queue' ) ) && ( ! wp_style_is( $style, 'done' ) ) ) {

			wp_enqueue_style( 'preciso-bootstrap-min-css', PRECISO_PLUGIN_DIR . 'assets/css/bootstrap.min.css', array(), '5.3.0' );
		}

		wp_enqueue_style( 'preciso-css', PRECISO_PLUGIN_DIR . 'assets/css/style.css', array(), '1.0.0123' );

		wp_enqueue_style( 'preciso-chart-min-css', PRECISO_PLUGIN_DIR . 'assets/css/Chart.min.css', array(), '1.0' );

		wp_enqueue_style( 'preciso-dashboardstyle-css', PRECISO_PLUGIN_DIR . 'assets/css/dashboardstyle.css', array(), '1.12' );

		wp_enqueue_style( 'preciso-font-awesome-min-css', PRECISO_PLUGIN_DIR . 'assets/css/font-awesome.css', array(), '1.0' );

		wp_enqueue_style( 'preciso-shopifyreset-css', PRECISO_PLUGIN_DIR . 'assets/css/shopifyreset.css', array(), '1.0.01' );

		wp_enqueue_script(
			'preciso-chart-min-js',
			PRECISO_PLUGIN_DIR . 'assets/js/Chart.min.js',
			array(
				'jquery',
			),
			'4.1.1',
			true
		);

		if ( ( ! wp_style_is( $style, 'queue' ) ) && ( ! wp_style_is( $style, 'done' ) ) ) {
			wp_enqueue_script(
				'bootstrap-js',
				PRECISO_PLUGIN_DIR . 'assets/js/bootstrap.min.js',
				array(
					'jquery',
				),
				'5.3.0',
				true
			);
		}

		wp_localize_script(
			'preciso-ajax',
			'preciso_ajax_url',
			array(
				'ajax_url' => admin_url( 'admin-ajax.php' ),
			)
		);
	}
	add_action( 'admin_enqueue_scripts', 'Preciso_Plugin_scripts' );
}
add_action( 'wp_enqueue_scripts', 'Preciso_Front_scripts' );

/**
 * Plugin Scripts

@return void
 */
function Preciso_Front_scripts() {
	if ( is_home() || is_front_page() ) {
		session_start();

		/**
		 Home Scripts
				 void
		 */
		function preciso_home_pixel() {
			?>
	<!-----------home pixel start-------------->
	<script>
		jQuery(document).ready(function() {
			var url = window.location.href;
			rtgsettings = {
				'pdt_url': url,
				'pagetype': 'home',
				'key': 'SPY',
				'token': "<?php echo esc_html( PRECISO_CAMPAIGN_ID ); ?>",
				'layer': 'iframe'
			};
			(function(d) {
				var s = d.createElement('script');
				s.async = true;
				s.id = 'madv2014rtg';
				s.type = 'text/javascript';
				s.src = (d.location.protocol == 'https:' ? 'https:' : 'http:') + '//cdn.preciso.net/aud/shopify/main-min-preciso.js';
				var a = d.getElementsByTagName('script')[0];
				a.parentNode.insertBefore(s, a);

			}(document));
		});
	</script>
	<!-----------home pixel end-------------->
			<?php
		}

		add_action( 'wp_footer', 'preciso_home_pixel', 50 );

	}
	if ( is_shop() ) {
		session_start();

		/**
		 * Shop Scripts

	@return void
		 */
		function preciso_shop_pixel() {
			$all_ids = get_posts(
				array(
					'post_type' => 'product',
					'numberposts' => -1,
					'post_status' => 'publish',
					'fields' => 'ids',
				)
			);
			$product_ids = implode( '|', $all_ids );

			?>
	<!--shop pixel start-->
	<script>
		var url = window.location.href;
		var res = url.split('/');

		var newdata = "<?php echo esc_html( $product_ids ); ?>";
		var urlSite = window.location.href;
		var urlSrc = urlSite.match(/^http:\/\/[^/]+/);

		rtgsettings = {
			'pdt_url': url,
			'pdt_category_list': res[3],
			'pdt_id': newdata,
			'pagetype': 'category',
			'key': 'SPY',
			'token': "<?php echo esc_html( PRECISO_CAMPAIGN_ID ); ?>",
			'layer': 'iframe'
		};
		(function(d) {
			var s = d.createElement('script');
			s.async = true;
			s.id = 'madv2014rtg';
			s.type = 'text/javascript';
			s.src = (d.location.protocol == 'https:' ? 'https:' : 'http:') + '//cdn.preciso.net/aud/shopify/main-min-preciso.js';
			var a = d.getElementsByTagName('script')[0];
			a.parentNode.insertBefore(s, a);


		}(document));
	</script>
	<!--shop pixel start-->
			<?php
		}
		add_action( 'wp_footer', 'preciso_shop_pixel', 50 );

	}
	if ( is_cart() ) {
		session_start();

		/**
		 * Cart Scripts

	@return void
		 */
		function preciso_cart_pixel() {
			global $woocommerce;
			$items = $woocommerce->cart->get_cart();
			foreach ( $items as $item => $values ) {
				$_product = wc_get_product( $values['data']->get_id() );
				$cartproduct[] = $_product->get_id();
				$pro_titles[] = $_product->get_title();
				$price[] = get_post_meta( $values['product_id'], '_price', true );
				$productsku[] = $_product->get_sku();
			}
			$cart_ids = implode( '|', $cartproduct );
			$cart_titles = implode( '|', $pro_titles );
			$productsku = implode( '|', $productsku );
			$totalamout = 0;
			foreach ( $price as $sprice ) {
				$totalamout = $totalamout + $sprice;
			}
			?>
	<!-- Cart pixel start ------>
	<script>
		var url = window.location.href;
		var cartitems = "<?php echo esc_html( $cart_ids ); ?>";
		var cartcolltitle = "<?php echo esc_html( $cart_titles ); ?>";
		var cartsku = "<?php echo esc_html( $productsku ); ?>";
		var ty_orderamt = "<?php echo esc_html( $totalamout ); ?>";
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
			'token': "<?php echo esc_html( PRECISO_CAMPAIGN_ID ); ?>",
			'layer': 'iframe'
		};
		(function(d) {
			var s = d.createElement('script');
			s.async = true;
			s.id = 'madv2014rtg';
			s.type = 'text/javascript';
			s.src = (d.location.protocol == 'https:' ? 'https:' : 'http:') + '//cdn.preciso.net/aud/shopify/main-min-preciso.js';
			var a = d.getElementsByTagName('script')[0];
			a.parentNode.insertBefore(s, a);
		}(document));
	</script>
	<!-- Cart pixel start ------>
			<?php
		}

		add_action( 'wp_footer', 'preciso_cart_pixel', 50 );

	}
	if ( is_product() ) {

		session_start();

		/**
		 * Product Scripts

	@return void
		 */
		function preciso_product_pixel() {
			$product = wc_get_product();
			$pro_id = $product->get_id();
			$image = $product->get_image();
			$title = $product->get_name();
			$pro_price = $product->get_price();
			$featured = $product->get_featured();
			$proSKU = $product->get_sku();
			$proCat = wc_get_product_category_list( $pro_id );
			$terms = get_the_terms( $pro_id, 'product_cat' );
			foreach ( $terms as $term ) {
				$procategory[] = $term->name;
			}
			$pro_cat = implode( '|', $procategory );
			$pro_dis = $product->get_description();
			$saleprice = $product->get_sale_price();
			$regulerprice = $product->get_regular_price();
			$quantity = $product->get_stock_quantity();
			$imageurl = wp_get_attachment_url( $product->get_image_id() );
			global $woocommerce;
			$wooCurrency = get_woocommerce_currency();

			?>
	<!---------------------------Product Pixel Start---------------------------------- -->
	<script>
		var url = window.location.href;
		var urlSite = window.location.href;
		var urlSrc = urlSite.match(/^http:\/\/[^/]+/);
		rtgsettings = {
			'pdt_id': "<?php echo esc_html( $pro_id ); ?>",
			'pdt_sku': "<?php echo esc_html( $proSKU ); ?>",
			'pdt_name': "<?php echo esc_html( $title ); ?>",
			'pdt_price': "<?php echo esc_html( $pro_price ); ?>",
			'pdt_amount': "<?php echo esc_html( $regulerprice ); ?>",
			'pdt_currency': "<?php echo esc_html( $wooCurrency ); ?>",
			'pdt_url': window.location.href,
			'pdt_photo': "<?php echo esc_html( $imageurl ); ?>",
			'pdt_instock': "<?php echo esc_html( $quantity ); ?>",
			'pdt_expdate': '',
			'pdt_category_list': "<?php echo esc_html( $pro_cat ); ?>",
			'pdt_smalldescription': "<?php echo esc_html( $pro_dis ); ?>",
			'pagetype': 'product',
			'key': 'SPY',
			'token': "<?php echo esc_html( PRECISO_CAMPAIGN_ID ); ?>",
			'layer': 'iframe'
		};

		(function(d) {
			var s = d.createElement('script');
			s.async = true;
			s.id = 'madv2014rtg';
			s.type = 'text/javascript';
			s.src = (d.location.protocol == 'https:' ? 'https:' : 'http:') + '//cdn.preciso.net/aud/shopify/main-min-preciso.js';
			var a = d.getElementsByTagName('script')[0];
			a.parentNode.insertBefore(s, a);
		}(document));



	</script>
	<!---------------------------Product Pixel END---------------------------------- -->

			<?php
		}
		add_action( 'wp_footer', 'preciso_product_pixel', 50 );
	}
	if ( is_checkout() && ! empty( is_wc_endpoint_url( 'order-received' ) ) ) {
		global $wpdb;
		session_start();
		$statuses = array_keys( wc_get_order_statuses() );
		$statuses = implode( "','", $statuses );
		/*$results = $wpdb->get_col( 'SELECT MAX(ID) FROM ' . $wpdb->prefix . 'posts WHERE post_type LIKE "shop_order" AND post_status IN ($statuses)' );*/
		$results = $wpdb->get_col( 'SELECT MAX(ID) FROM ' . $wpdb->prefix . 'posts WHERE post_type LIKE "shop_order"' );

		$latest_order_id = $results[0];
		$order = wc_get_order( $latest_order_id );
		$order_details = $order->get_data();
		$orderid = $order_details['id'];

		$orderstatus = $order_details['status'];
		$ordercurrency = $order_details['currency'];
		$orderdate = $order_details['date_created']->date;
		$orderdate = $order->order_date;
		$ordertotal = $order_details['total'];
		$ordercustomer = $order_details['customer_id'];
		$orders = wc_get_order( $orderid );
		$items = $orders->get_items();
		foreach ( $items as $item ) {
			$product_name = $item['name'];
			$product_id[] = $item['product_id'];
			$product_variation_id = $item['variation_id'];
			$_product = wc_get_product( $item['product_id'] );
			$productsku[] = $_product->get_sku();
		}
		$cart_ids = implode( '|', $product_id );
		$productsku = implode( '|', $productsku );
		$checkoutData = array(
			'cartid' => $cart_ids,
			'productsku' => $productsku,
			'checkoutamount' => $ordertotal,
			'orderid' => $orderid,
			'orderstatus' => $orderstatus,
			'ordercurrency' => $ordercurrency,
			'orderdate' => $orderdate,
			'ordercustomer' => $ordercustomer,
		);
		?>
	<!---------------------------checkout Pixel Start---------------------------------- -->
	<script>
		var proID = "<?php echo esc_html( $cart_ids ); ?>";
		var SKU = "<?php echo esc_html( $productsku ); ?>";
		var price = "<?php echo esc_html( $ordertotal ); ?>";
		var orderid = "<?php echo esc_html( $orderid ); ?>";
		var orderstatus = "<?php echo esc_html( $orderstatus ); ?>";
		var ordercurrency = "<?php echo esc_html( $ordercurrency ); ?>";
		var orderdate = "<?php echo esc_html( $orderdate ); ?>";
		var ordercustomer = "<?php echo esc_html( $ordercustomer ); ?>";
		var urlSite = window.location.href;
		var urlSrc = urlSite.match(/^http:\/\/[^/]+/);
		var token = <?php echo esc_html( PRECISO_CAMPAIGN_ID ); ?>;

		rtgsettings = {
			'ProductId': proID,
			'Currency': ordercurrency,
			'PageType': 'checkout',
			'OrderId': orderid,
			'Amount': price,
			'key': 'SPY',
			'token': token,
			'layer': 'iframe'
		};
		(function(d) {
			var s = d.createElement('script');
			s.async = true;
			s.id = 'madv2014rtg';
			s.type = 'text/javascript';
			s.src = (d.location.protocol == 'https:' ? 'https:' : 'http:') + '//cdn.preciso.net/aud/shopify/main-min-preciso.js';
			var a = d.getElementsByTagName('script')[0];
			a.parentNode.insertBefore(s, a);

		}(document));
	</script>
	<!---------------------------checkout Pixel End---------------------------------- -->
		<?php
	}
}
add_action( 'admin_head', 'Preciso_Custom_favicon' );

/**
Custom Favicon

@return void
 */
function Preciso_Custom_favicon() {
	echo '<style>.wp-menu-image.dashicons-before img{width:25px;margin-top:-4px;}
	input#regisnSubmit{font-size:14px!important;}.precisocustomlogin.logo{margin-top:40px!important;margin-bottom:80px!important;}
	a.remainingBalance.messageDisplayrefresh:hover{color:#07fc13!important;}
	.registration_wrp{padding-top:0px!important;}.login-container{margin-top:25px;}.passerror{color:red;display:none;margin:0 auto;font-size:12px;margin-left:40px;}.content-box h4{font-size:16px;}.usererror{color:red;display:none;margin:0 auto;font-size:12px;margin-left:40px;}
	a.messageHiderefresh p{font-weight:500;}.messageHiderefresh{position:absolute;top:72%;right:22%;background:#000;padding:5px;border:1px solid#000;border-radius:5px;font-size:15px;display:none;}
	a.messageHiderefreshicon p{font-weight:500;}.messageHiderefreshicon{position:absolute;top:72%;right:1%;background:#000;padding:5px;border:1px solid#000;border-radius:5px;font-size:15px;display:none;}
	a.messageHidelogin p{font-weight:500;}.messageHidelogin{position:absolute;top:14%;right:1%;background:#000;padding:5px;border:1px solid#000;border-radius:5px;font-size:15px;display:none;}
	input#updatesettingSubmit:hover{cursor:pointer!important;background:#1b507f !important;}
	input#regisnSubmit:hover{background:#1b507f!important;}
	a.refreshIconbtn:hover{background:#3CA5E5!important;}.form-control{font-size:12px;}
	select#bidStatus{height:32px;}
	button.btn.btn-green.bannerPreview{background:#3CA5E5!important;color:#fff!important;}
	button.btn.btn-green.bannerPreview:hover{background:#1b507f!important; border:1px solid #1b507f;}
	button.btn.btn-green{background:#3CA5E5;color:#fff!important;}
	button.btn.btn-red{background:#b3152c!important;color:#fff!important;}.bannerCode button{margin-bottom:5px}</style>';
}
