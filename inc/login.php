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

?>
<div class="loader api-loader"></div>
<div class="login-wrp precisoLoginWrp">
   <div class="l-header precisocustomlogin">
	  <div class="logo"></div>
	  <div class="clear"></div>
   </div>
   <div class="login-wrap precisoLoginWrp">
	  <div class="login-box custom_loginbox">
		 <div class="main-icon"><i class="fa fa-user" aria-hidden="true"></i></div>
		 <div class="login-container">
			<form id='target' action="https://api.preciso.net/api/plugin/login" method="post">
			  <input type="hidden" name="store" id="customstore" value="<?php echo wp_kses_post( $shop ); ?>">
				 <div class="form-elem-wrap login-username">
				  <input type="text"  class="form-control ng-pristine  ng-untouched ng-empty ng-invalid ng-invalid-required custom_username" ng-model="username" id="myusername" name="Username"  value="<?php echo wp_kses_post( $loginDtailsuser ); ?>"  placeholder="User Name" required="">
			   </div>
			   <p class="usererror">Please Enter User Name</p>
			   <div class="form-elem-wrap login-password">
				  <input type="password" class="form-control ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required" ng-model="password" name="Password" id="mypassword" placeholder="******" value="<?php echo wp_kses_post( $loginDtailspass ); ?>" required="">
				  <input type="hidden" id="custId" name="custId" value="testvalue" autocomplete="off">
			   </div>
			   <p class="passerror">Please Enter Password</p>
			   <div class="form-elem-wrap text-center" style="margin-top:10px;margin-bottom:10px">
						  <input type="button" id="loginSubmit" name="submit" value="Login">
			   </div>
			   <?php echo '<input type="hidden" name="bk-ajax-nonce" id="bk-ajax-nonce" value="' . wp_kses_post( wp_create_nonce( 'bk-ajax-nonce' ) ) . '" />'; ?>
			</form>
		 </div>
	  </div>
	  <div class="login-footter">
		 <div class="col-sm-12 text-center ng-binding" 
		 style="color:#000">Copyrights © Preciso</div>
		 <div class="col-sm-12 text-center ng-binding" 
		 style="color:#000">All rights reserved | powered by MainAd | 
			<a ui-sref="terms" 
			href="https://smartbid.preciso.net/#/terms" 
			target="_blank" style="color:#000">Terms &amp; Conditions
			</a>
		 </div>
		 <div class="clear"></div>
	  </div>
   </div>
   <div class="customalert failedalert">
	  <div class="customalert-inner">
		 <div class="customalert-inner-div">
			<div class="customalertheader red-box">
			   <i class="fa fa-thumbs-down" aria-hidden="true"></i>
			</div>
			<p>Request failure!<br>
			   <span class="ng-binding">Unable to complete the request!</span>
			   <br>
			   <span class="ng-binding">Incorrect Username / Password</span>
			</p>
			<button class="btn btn-red">Got it!</button>
		 </div>
	  </div>
   </div>
   <div class="customalert successalert">
	  <div class="customalert-inner">
		 <div class="customalert-inner-div">
			<div class="customalertheader green-box">
			   <i class="fa fa-thumbs-up" aria-hidden="true"></i>
			</div>
			<p>Request success!<br>
			   <span class="ng-binding">Registration Successfully!</span>
			   <br><span class="ng-binding">Campaign Created!</span>
			</p>
			<button class="btn btn-green">Got it!</button>
		 </div>
	  </div>
   </div>
</div>
