<?php
   /**
	* "Preciso Bid-Smart Advertising" is free
	* software: you can redistribute it and/or modify
	* it under the terms of the GNU General Public License as published by
	* the Free Software Foundation, either version 3 of the License, or
	* (at your option) any later version.
	*
	* "Preciso Bid-Smart Advertising" is distributed
	* in the hope that it will be useful,
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

?>
 <div class="customalert1 successalert">
	 <div class="customalert-inner">
		<div class="customalert-inner-div">
		   <div class="customalertheader green-box"><i class="fa fa-info-circle" aria-hidden="true"></i></div>
		   <p><br><span class="ng-binding">Feed Update Triggered but Login is Restricted!</span></p>
		</div>
	 </div>
	</div>

<?php

$dir = plugin_dir_path( __DIR__ );
$current_date = gmdate( 'Y-m-d' );
$updated_at = get_option( 'update_xml_and_json_at' );

if ( '' == $updated_at ) {
	include_once $dir . 'store-xml-gen.php';
	update_option( 'update_xml_and_json_at', $current_date );
}

$diff = abs( strtotime( $current_date ) - strtotime( $updated_at ) );
$years = floor( $diff / ( 365 * 60 * 60 * 24 ) );
$months = floor( ( $diff - $years * 365 * 60 * 60 * 24 ) / ( 30 * 60 * 60 * 24 ) );
$days = floor( ( $diff - $years * 365 * 60 * 60 * 24 - $months * 30 * 60 * 60 * 24 ) / ( 60 * 60 * 24 ) );

if ( $days > 0 ) {
	include_once $dir . 'store-xml-gen.php';
	update_option( 'update_xml_and_json_at', $current_date );
}


?>
