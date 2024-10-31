<?php
/**
 * "Preciso Bid-Smart Advertising" is free
 * software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * "Preciso Bid-Smart Advertising" is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with "Preciso Bid-Smart Advertising".
 * If not, see <https://www.gnu.org/licenses/>.
 * php version 7.2.10
 *
 * @package Preciso_Bid_Smart_Advertising
 * @link    Preciso
 * @return  Preciso
 */

/**
 * Post product data to server ().
 *
 * @return void
 * @param string $url comment url.
 * @param string $data comment data.
 */
function preciso_post_to_url( $url, $data ) {

	$username = 'remote_user';
	$password = 'P@55w06D0fR3m0t3Us3r';

	$options = array(
		'body'        => $data,
		'headers'     => array(
			'Content-Type' => 'application/json',
			'Authorization' => 'Basic ' . base64_encode( $username . ':' . $password ),
		),
		'timeout'     => 60,
		'redirection' => 5,
		'blocking'    => true,
		'httpversion' => '1.0',
		'sslverify'   => false,
		'data_format' => 'body',
	);

	wp_remote_post( $url, $options );
}

$cmpId = '';
if ( isset( $_SESSION['campaignId'] ) ) {
	$cmpId = wp_kses_post( $_SESSION['campaignId'] );
}


if ( empty( $cmpId ) || '' == $cmpId || null == $cmpId ) {
	$cmpId = get_option( 'preciso_campaignId' );
	if ( empty( $cmpId ) || '' == $cmpId || null == $cmpId ) {
		$cmpId = 'store_' . get_bloginfo( 'title' );
	}
}

$args = array(
	'post_type' => 'product',
	'posts_per_page' => -1,
);
$loop = new WP_Query( $args );


if ( $loop->found_posts > 0 ) {

	$product = array();

	while ( $loop->have_posts() ) {
		$inventory_policy = '';
		$loop->the_post();
		global $product;

		if ( $product->get_manage_stock() ) {
			$inventory_policy = 'yes';
		}

		$prod = array();
		if ( $product->get_stock_status() == 'instock' ) {

			$product_id = $product->get_id();
			$img = $product->get_image();
			$porduct_name = $product->get_name();
			$brand_name = '';
			$price = $product->get_price();
			$cmPrice = $price;
			$inventory_quantity = $product->get_stock_quantity();

			$handle = get_permalink( $product->get_id() );
			$productland = $handle;

			$prod['id'] = $product_id;
			$prod['quantity'] = $inventory_quantity;
			$prod['inventory_policy'] = $inventory_policy;
			$prod['landing_page'] = $productland;
			$prod['title'] = $porduct_name;
			$prod['brand'] = $brand_name;
			$prod['handle'] = $handle;
			$prod['compare_at_price'] = $cmPrice;
			$prod['price'] = $price;
			$prod['images'] = $img;
			$productdata[] = $prod;

		}
	}

	$array = $productdata;
	$json_data_arr = array();
	$json_data_arr['shop'] = $shop;
	$json_data_arr['cmpid'] = $cmpId;
	$json_data_arr['product_data'] = $productdata;
	$json = json_encode( $json_data_arr );

	$curl_response = preciso_post_to_url( 'https://wpfeedupload.preciso.net/feed_upload.php', $json );
	$resp = wp_kses_post( $curl_response );
}
