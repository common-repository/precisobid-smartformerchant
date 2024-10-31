<?php
/**
 * Setting file
 * php version 7.2.10
 *
 * @package Preciso_Bid_Smart_Advertising
 * @link    Preciso
 * @return  Preciso
 */

/**
 * Implements show_page().
 *
 * @return Preciso
 */
function Preciso_Show_Page_html() {
	if ( ! is_admin() ) {
		return;
	}

	$msg = '<meta name="viewport" content="width=device-width,initial-scale=1">
    <div class="wrap">' . settings_fields( 'preciso-show' ) . do_settings_sections( 'preciso-show' ) . '</div>';
	echo esc_html( $msg );
}//end Preciso_Show_Page_html()


/**
 * Implements icon for plugin().
 *
 * @return void
 */
function Preciso_Register_Show_page() {
	add_menu_page(
		'preciso show page',
		'Preciso',
		'manage_options',
		'preciso-show',
		'Preciso_Setting_page',
		plugins_url( '../assets/images/preciso_ico_small.png', __FILE__ ),
		30
	);
}//end Preciso_Register_Show_page()


add_action( 'admin_menu', 'Preciso_Register_Show_page' );


/**
 * Implements which page have to display().
 *
 * @return void
 */
function Preciso_Setting_page() {
	global $session;

	session_start();

	$checkRegister = get_option( 'preciso_plugin_set' );

	$shop_url = get_bloginfo( 'title' );

	$shop = str_replace( ' ', '.', $shop_url );

	$shopvalue = get_option( 'termstatus' );
	$loginDtailsuser = get_option( 'preciso_login_username' );

	$loginDtailspass = get_option( 'preciso_login_password' );

	$products_count = preciso_product_count();

	if ( 1 != $checkRegister ) {
		wp_enqueue_script(
			'preciso-registerjs',
			PRECISO_PLUGIN_DIR . 'assets/js/registerjs.js',
			array( 'jquery' ),
			'1.0.2',
			true
		);

		wp_localize_script(
			'preciso-registerjs',
			'preciso_ajax_url',
			array(
				'ajax_url' => admin_url( 'admin-ajax.php' ),
			)
		);
		include plugin_dir_path( __FILE__ ) . 'register.php';

	} elseif ( ! empty( $_SESSION['campaignId'] ) && ! empty( $_SESSION['token'] ) && ! empty( $_SESSION['userId'] ) ) {

		if ( isset( $_SESSION['blank_page'] ) && 'blank_page' == $_SESSION['blank_page'] ) {
			include plugin_dir_path( __FILE__ ) . 'blank-page.php';
		} else if ( 0 == $shopvalue || '' == $shopvalue ) {
			wp_enqueue_script(
				'preciso-termsjs',
				PRECISO_PLUGIN_DIR . 'assets/js/termsjs.js',
				array( 'jquery' ),
				'1.0.2121',
				true
			);

			wp_localize_script(
				'preciso-termsjs',
				'preciso_ajax_url',
				array(
					'ajax_url' => admin_url( 'admin-ajax.php' ),
				)
			);

			include plugin_dir_path( __FILE__ ) . 'termscondition.php';
		} else {
			wp_enqueue_script(
				'dashboardjs',
				PRECISO_PLUGIN_DIR . 'assets/js/dashboardjs.js',
				array( 'jquery' ),
				'1.0.1',
				true
			);

			wp_localize_script(
				'dashboardjs',
				'preciso_ajax_url',
				array(
					'ajax_url' => admin_url( 'admin-ajax.php' ),
				)
			);
			include plugin_dir_path( __FILE__ ) . 'precisodashboard.php';

		}//end if
	} else {
		wp_enqueue_script(
			'loginjs',
			PRECISO_PLUGIN_DIR . 'assets/js/loginjs.js',
			array( 'jquery' ),
			'1.0.123333',
			true
		);

		wp_localize_script(
			'loginjs',
			'preciso_ajax_url',
			array(
				'ajax_url' => admin_url( 'admin-ajax.php' ),
			)
		);
		if ( isset( $_SESSION['blank_page'] ) && 'blank_page' == $_SESSION['blank_page'] ) {
			include plugin_dir_path( __FILE__ ) . 'blank-page.php';
		} else {
			include plugin_dir_path( __FILE__ ) . 'login.php';
		}
	}//end if
}//end Preciso_Setting_page()
