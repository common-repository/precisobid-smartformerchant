<?php
/**
 * Custom Functions
 * php version 7.2.10
 *
 * @package Preciso_Bid_Smart_Advertising
 * @link    Preciso
 * @return  Preciso
 */

/**
 * Implements set login Details().
 *
 * @return void
 */
function Preciso_Set_Login_details() {
	if ( ! current_user_can( 'manage_options' )
		&& ( ! defined( 'DOING_AJAX' ) || ! DOING_AJAX )
	) {
		wp_die( 'You are not allowed to access this part of the site' );
	} else {
		global $wpdb;
		if ( check_ajax_referer( 'bk-ajax-nonce', 'security', false ) ) {
			if ( isset( $_POST['username'] ) && isset( $_POST['userpass'] ) ) {
				echo esc_html( sanitize_text_field( wp_unslash( $_POST['username'] ) ) );
				echo esc_html( sanitize_text_field( wp_unslash( $_POST['userpass'] ) ) );

				$username = sanitize_email( wp_unslash( $_POST['username'] ) );
				$userpass = sanitize_text_field( wp_unslash( $_POST['userpass'] ) );

				update_option( 'preciso_login_username', $username );
				update_option( 'preciso_login_password', $userpass );
			}
		}

		wp_die();
	}
}//end Preciso_Set_Login_details()


add_action( 'wp_ajax_Preciso_Set_Login_details', 'Preciso_Set_Login_details' );
add_action( 'wp_ajax_nopriv_Preciso_Set_Login_details', 'Preciso_Set_Login_details' );


/**
 * Unset plugin settings ().
 *
 * @return void
 */
function preciso_unset_plugin_settings() {
	if ( ! current_user_can( 'manage_options' ) && ( ! defined( 'DOING_AJAX' ) || ! DOING_AJAX ) ) {
		wp_die( 'You are not allowed to access this part of the site' );
	} else {
		session_start();
		unset( $_SESSION['campaignId'] );
		unset( $_SESSION['token'] );
		unset( $_SESSION['userId'] );
		update_option( 'preciso_login_username', '' );
		update_option( 'preciso_login_password', '' );
		update_option( 'preciso_plugin_set', '' );
		update_option( 'update_xml_and_json_at', '' );
		update_option( 'termstatus', '' );
		// $shop_url = get_bloginfo( 'title' );
		// $shop = str_replace( ' ', '.', $shop_url );
		// $shopvalue = get_option( $shop );
		// update_option( $shop, '' );

	}

	wp_die();
}//end preciso_unset_plugin_settings()


add_action( 'wp_ajax_preciso_unset_plugin_settings', 'preciso_unset_plugin_settings' );
add_action( 'wp_ajax_nopriv_preciso_unset_plugin_settings', 'preciso_unset_plugin_settings' );



/**
 * Implements set user register().
 *
 * @return void
 */
function Preciso_Set_User_registered() {
	if ( ! current_user_can( 'manage_options' )
		&& ( ! defined( 'DOING_AJAX' ) || ! DOING_AJAX )
	) {
		wp_die( 'You are not allowed to access this part of the site' );
	} else {
		global $wpdb;
		if ( check_ajax_referer( 'bk-ajax-nonce', 'security', false ) ) {
			if ( isset( $_POST['optionname'] ) && isset( $_POST['optionvalue'] ) ) {
				$option_name  = sanitize_text_field( wp_unslash( $_POST['optionname'] ) );
				$option_value = intval( wp_unslash( $_POST['optionvalue'] ) );
				if ( isset( $_POST['email'] ) ) {
					$email = sanitize_email( wp_unslash( $_POST['email'] ) );
				} else {
					$email = '';
				}
				if ( isset( $_POST['password'] ) ) {
					$str = sanitize_text_field( wp_unslash( $_POST['password'] ) );
				} else {
					$email = '';
				}
				$passdecode = base64_decode( $str );
				$password = base64_decode( $passdecode );
				update_option( 'preciso_plugin_set', $option_value );
				update_option( 'preciso_login_username', $email );
				update_option( 'preciso_login_password', $password );
				update_option( 'preciso_token', '' );
				update_option( 'preciso_campaignId', '' );
				update_option( 'update_xml_and_json_at', '' );
			}
		}
		wp_die();
	}
}//end Preciso_Set_User_registered()


add_action( 'wp_ajax_Preciso_Set_User_registered', 'Preciso_Set_User_registered' );
add_action( 'wp_ajax_nopriv_Preciso_Set_User_registered', 'Preciso_Set_User_registered' );


/**
 * Implements set user login().
 *
 * @return void
 */
function Preciso_Set_User_login() {
	if ( ! current_user_can( 'manage_options' ) && ( ! defined( 'DOING_AJAX' ) || ! DOING_AJAX ) ) {
		wp_die( 'You are not allowed to access this part of the site' );
	} else {
		global $wpdb;

		if ( check_ajax_referer( 'bk-ajax-nonce', 'security', false ) ) {
			if ( isset( $_POST['optionName'] ) && isset( $_POST['optionValue'] ) ) {
				echo 'pp';
				$option_name1  = sanitize_text_field( wp_unslash( $_POST['optionName'] ) );
				$shopname      = str_replace( ' ', '.', $option_name1 );
				$option_value1 = intval( $_POST['optionValue'] );
				update_option( 'termstatus', $option_value1 );
			}
		}
	}
	wp_die();
}//end Preciso_Set_User_login()


add_action( 'wp_ajax_Preciso_Set_User_login', 'Preciso_Set_User_login' );
add_action( 'wp_ajax_nopriv_Preciso_Set_User_login', 'Preciso_Set_User_login' );


/**
 * Implements set session().
 *
 * @return void
 */
function Preciso_Set_Session_login() {
	if ( ! current_user_can( 'manage_options' )
		&& ( ! defined( 'DOING_AJAX' ) || ! DOING_AJAX )
	) {
		wp_die( 'You are not allowed to access this part of the site' );
	} else {
		global $wpdb, $session;
		session_start();
		if ( check_ajax_referer( 'bk-ajax-nonce', 'security', false ) ) {
			if ( isset( $_POST['campaignId'] ) && isset( $_POST['token'] ) ) {
				$campaignId             = intval( $_POST['campaignId'] );
				$token                  = sanitize_text_field( wp_unslash( $_POST['token'] ) );
				if ( isset( $_POST['userId'] ) ) {
					$userId                 = intval( $_POST['userId'] );
				} else {
					$userId = '';
				}
				$_SESSION['campaignId'] = $campaignId;
				$_SESSION['token']      = $token;
				$_SESSION['userId']     = $userId;
				$_SESSION['siteurl']    = get_site_url();
				update_option( 'preciso_token', $token );
				update_option( 'preciso_campaignId', $campaignId );
				unset( $_SESSION['blank_page'] );

			}
		}
	}//end if.
	wp_die();
}//end Preciso_Set_Session_login()


add_action( 'wp_ajax_Preciso_Set_Session_login', 'Preciso_Set_Session_login' );
add_action( 'wp_ajax_nopriv_Preciso_Set_Session_login', 'Preciso_Set_Session_login' );


/**
 * Implements session destroy().
 *
 * @return void
 */
function Preciso_Set_Session_destroy() {
	if ( ! current_user_can( 'manage_options' )
		&& ( ! defined( 'DOING_AJAX' ) || ! DOING_AJAX )
	) {
		wp_die( 'You are not allowed to access this part of the site' );
	} else {
		global $wpdb;
		session_start();
		if ( isset( $_POST['sessionId'] ) ) {
			$seesioncheck = intval( $_POST['sessionId'] );
			if ( ! wp_verify_nonce( $seesioncheck, 'register_nonce' ) ) {
				die( 'Failed security check' );
			}

			if ( 'removeAll' == $seesioncheck ) {
				session_destroy();
			}

			wp_die();
		}
	}
}//end Preciso_Set_Session_destroy()


add_action( 'wp_ajax_Preciso_Set_Session_destroy', 'Preciso_Set_Session_destroy' );
add_action( 'wp_ajax_nopriv_Preciso_Set_Session_destroy', 'Preciso_Set_Session_destroy' );

/**
 * Logout Preciso ().
 *
 * @return void
 */
function preciso_logout() {
	 session_start();
	unset( $_SESSION['campaignId'] );
	unset( $_SESSION['token'] );
	unset( $_SESSION['userId'] );
	wp_die();
}
add_action( 'wp_ajax_preciso_logout', 'preciso_logout' );
add_action( 'wp_ajax_nopriv_preciso_logout', 'preciso_logout' );

/**
 * Set 205 Blank Page ().
 *
 * @return void
 */
function preciso_set_205() {
	if ( check_ajax_referer( 'bk-ajax-nonce', 'security', false ) ) {
		if ( isset( $_POST['is205'] ) && 'blank_page' == $_POST['is205'] ) {
			session_start();
			$_SESSION['blank_page'] = 'blank_page';
			wp_die();
		}
	}
}
add_action( 'wp_ajax_preciso_set_205', 'preciso_set_205' );
add_action( 'wp_ajax_nopriv_preciso_set_205', 'preciso_set_205' );

/**
 * Implements Product Count().
 *
 * @return Preciso
 */
function preciso_product_count() {
	$count_posts = wp_count_posts( 'product' );
	return $count_posts->publish;
}//end preciso_product_count()
