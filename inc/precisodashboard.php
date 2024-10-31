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
<div class="dashboard_wrp">
	<div class="loader api-loader"></div>
	<div class="header">
		<div class="leftHeader">
			<div class="header-wrp">
				
				<img src="<?php echo esc_url( PRECISO_PLUGIN_DIR ); ?>assets/images/logo_small_white.png">
				
			</div>
		</div>
		<div class="rightHeader">
			<div class="logButton">
				<span class="biddingstatus"></span>
				<span class="sepratehead">|</span>
				<a href="#" class="remainingBalance messageDisplayrefresh" >Fund/Budget Balance : 0</a>
				<a href="#" class="messageHiderefresh"></a>
				<span class="sepratehead">|</span>
				<a href="#" class="messageDisplay" target="_blank">Add Funds</a>
				<a href="#" class="messageHide">Add Funds</a>
				<span class="sepratehead">|</span>
				<a href="https://smartbid.preciso.net/#/login?ref=woocommerce&token=
				<?php
				if ( isset( $_SESSION['token'] ) ) {
					echo wp_kses_post( $_SESSION['token'] );
				}

				?>
			" 
			class="pageRedr" target="_blank">Login to Preciso</a>
			<span class="sepratehead">|</span>
			<a href="#" class="pageRefresh messageDisplayrefreshicon">
				<img src="<?php	echo esc_url( PRECISO_PLUGIN_DIR ); ?>assets/images/refresh.png"></a>
				<a href="#" class="messageHiderefreshicon"></a>
			</div>
		</div>
	</div>
	<section id="tabs">
		<div class="section-wrp">

			<span style="display: none;">Welcome <?php echo wp_kses_post( $shop ) . '!'; ?></span>
			<h6 class="section-title h1"> Preciso Programmatic Dashboard</h6>
			<div class="row">
				<div class="col-xs-12" style="width:100%">
					<nav>
						<div class="nav nav-tabs  nav-fill" id="nav-tab" role="tablist">
							<a class="nav-item show nav-link col-14 active" 
							id="nav-profile-tab" data-toggle="tab" href="#nav-profile" 
							role="tab" aria-controls="nav-profile" aria-selected="false">
						Banner</a>
						<a class="nav-item show nav-link col-14" id="nav-contact-tab"
						data-toggle="tab" href="#nav-contact" role="tab" 
						aria-controls="nav-contact" aria-selected="false">
					Payment</a>
					<a class="nav-item show nav-link col-14 " id="nav-about-tab"
					data-toggle="tab" href="#nav-about" role="tab" 
					aria-controls="nav-about" aria-selected="false">
				Settings</a>                     

				<a class="nav-item show nav-link col-14" id="nav-home-tab"
				data-toggle="tab" href="#nav-home" role="tab" 
				aria-controls="nav-home" aria-selected="true">
			Report</a>
		</div>
	</nav>
	<div class="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
		<div class="tab-pane fade" id="nav-home" role="tabpanel" 
		aria-labelledby="nav-home-tab">
		<div class="col-14">
			<div class="leftHeading">
				<h3>Today Performance</h3>
			</div>
			<div class="col-5 offset-right10">
				<div class="content-box">
					<span>Impressions</span>
					<h4 class="dayImp"></h4>
				</div>
			</div>
			<div class="col-5 offset-right10">
				<div class="content-box">
					<span>Clicks</span>
					<h4 class="dayClk"></h4>
				</div>
			</div>
			<div class="col-5 conversionClass"><div class="content-box"><span>Conversions</span><h4 class="dayPc conversionPc_PV"></h4></div></div>
			<div class="col-5 offset-right10 eCPAClass"><div class="content-box"><span>eCPA</span><h4 class="daypc_pv"></h4></div></div>
			<div class="col-5 offset-right10">
				<div class="content-box">
					<span>Media Cost</span>
					<h4 class="dayCost"></h4>
				</div>
			</div>
			<div class="col-5 offset-right10">
				<div class="content-box">
					<span>eCPM</span>
					<h4 class="daycpm"></h4>
				</div>
			</div>
		</div>
		<div class="col-5">
			<div class="centerHeading">
				<h3>Graphical View-Last 7 Days of General Performance</h3>
			</div>
			<div class="canvas-wrap">
				<canvas id="myChart" style="background-color:#fff">
				</canvas>
				<h5 class="graphAlert">
					The Graph Impressions Scaled Down 
					by 50 For Representation Purpose.
				</h5>
			</div>
		</div>
		<div class="col-14">
			<div class="rightHeading" style="position: relative;">
				<h3>Last 7 Days Performance</h3> <p class="specialbutton"> <span>Full screen view<span></span></span> &#8660;</p>
			</div>
			<div class="col-5 offset-right10">
				<div class="content-box">
					<span>Impressions</span>
					<h4 class="weekImp"></h4>
				</div>
			</div>
			<div class="col-5 offset-right10">
				<div class="content-box">
					<span>Clicks</span>
					<h4 class="weekClk"></h4>
				</div>
			</div>

			<div class="col-5 conversionWeekly"><div class="content-box"> <span>Conversions</span><h4 class="weekPc weekConversionPcPV"></h4></div></div>
			<div class="col-5 offset-right10 eCPAClass"> <div class="content-box"> <span>eCPA</span><h4 class="weekPc_Pv"></h4> </div> </div> 
			<div class="col-5 offset-right10">
				<div class="content-box">
					<span>Media Cost</span>
					<h4 class="weekmedia"></h4>
				</div>
			</div>
			<div class="col-5 offset-right10">
				<div class="content-box">
					<span>eCPM</span>
					<h4 class="weekCpm"></h4>
				</div>
			</div>
		</div>
		<br clear="all">
		<form id="dailyreport" action="https://api.preciso.net/api/plugin/dailyreport" method="post">
			<input type="hidden" class="form-control token" value="
			<?php
			if ( isset( $_SESSION['token'] ) ) {
				echo wp_kses_post( $_SESSION['token'] );
			}
			?>
		" name="token"> 
		<input type="hidden" class="form-control CampaignId" value="
		<?php
		if ( isset( $_SESSION['campaignId'] ) ) {
			echo wp_kses_post( $_SESSION['campaignId'] );
		}

		?>
		" name="CampaignId">
	</form>
	<form id="remainBalance" action="https://api.preciso.net/api/plugin/getSpend" method="post">
		<input type="hidden" class="form-control token" value="
		<?php
		if ( isset( $_SESSION['token'] ) ) {
			echo wp_kses_post( $_SESSION['token'] );
		}


		?>
	" name="token"> 
	<input type="hidden" class="form-control CampaignId" value="
	<?php
	if ( isset( $_SESSION['campaignId'] ) ) {
		echo wp_kses_post( $_SESSION['campaignId'] );
	}


	?>
	" name="campaignId">
</form>
<form id='updateCreativeStatus' action="https://api.preciso.net/api/plugin/updateCreativeStatus" method="post">
	<input type="hidden" class="form-control token" value='
	<?php
	if ( isset( $_SESSION['token'] ) ) {
		echo wp_kses_post( $_SESSION['token'] );
	}

	?>
	' name="token">
<input type="hidden" class="form-control CampaignId" value='
<?php
if ( isset( $_SESSION['campaignId'] ) ) {
	echo wp_kses_post( $_SESSION['campaignId'] );
}

?>
' name="campaignid">
<input type="hidden" class="form-control cretive_Id" value='' name="CreativeId">
<input type="hidden" class="form-control size_Code" value='' name="sizecode">
<input type="hidden" class="form-control bidder_Status" value='' name="bidderstatus">

</form>
</div>
<div class="tab-pane fade show active" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
	<div class="bannerStaticwrp">

		<a href="#" class="bannerdynamicCreate trigger_popup_fricc" >Create a Static Product Banner</a>
		<span class="seprate"> | </span>
		<a href="https://smartbid.preciso.net/#/login?ref=createstatic&token=
		<?php
		if ( isset( $_SESSION['token'] ) ) {
			echo wp_kses_post( $_SESSION['token'] );
		}


		?>
	" class="bannerstaticCreate" target="_blank">Upload a Static Banner</a>
	<span>(Creatives are reviewed during Monday-Friday 6AM to 6PM CET timings!)</span>

						<!-- <a href="#" class="bannerstaticCreate" target="_blank">
						Create a Static Banner</a>
						<span class="seprate"> | </span>
						<a href="#" class="bannerdynamicCreate trigger_popup_fricc" >
						Create a Static Product Banner</a> -->

						<div class="hover_bkgr_fricc">
							<span class="helper"></span>
							<div>
								<div class="popupCloseButton">&times;</div>
								<p style="font-size: 16px;margin-bottom: 2%;text-transform: capitalize;">Select the Product to see the Product Details below:</p>
								<div class="banner-wrp-top">
									<table class="table-striped table-bordered">
										<tr>
											<th>Products</th>
										</tr>
										<?php
										$args = array(
											'post_type'      => 'product',
											'posts_per_page' => -1,
										);

										$loop         = new WP_Query( $args );
										$product_cats = array();
										while ( $loop->have_posts() ) :
											$loop->the_post();

											global $product;
											$price        = $product->get_price();
											$sku          = $product->get_sku();
											$stock        = $product->get_stock_quantity();
											$description  = $product->get_description();
											$prd_id = $product->id;
											$product_cats = wp_get_post_terms(
												$product->id,
												'product_cat'
											);
											$cat_count    = count( $product_cats );
											$brands       = array();
											for ( $i = 0; $i < $cat_count; $i++ ) {
												$brands[] = $product_cats[ $i ]->name;
											}

											$src_url = get_the_post_thumbnail_url(
												$post->ID,
												'full'
											);
											if ( '' != $src_url ) {
												$img = $src_url;
											} else {

												$img = plugins_url( '../assets/images/ProdDft.png', __FILE__ );

											}

											echo ' <tr class="data-show">
											<td>
											<div class="productImg">
											<img src="' . esc_url( $img ) . '">
											</div>
											<div class="productTitle">
											<h3 data-price>' . esc_html( get_the_title() ) . '</h3>
											<input type ="hidden" class="handle" value="' . wp_kses_post( get_the_permalink() ) . '">
											<input type ="hidden" class="prd_id" value="' . wp_kses_post( $prd_id ) . '">
											<input type ="hidden" class="title" value="' . wp_kses_post( get_the_title() ) . '">
											<input type ="hidden" class="brand" value="' . wp_kses_post( implode( ',', $brands ) ) . '">
											<input type ="hidden" class="description" value="' . wp_kses_post( $description ) . '">
											<input type ="hidden" class="price" value="' . wp_kses_post( $price ) . '">
											<input type ="hidden" class="imgurl" value="' . wp_kses_post( $img ) . '">
											</div>
											</td>
											</tr> ';
										endwhile;

										wp_reset_query();
										?>
									</table>  
								</div>    

								<div class="banner-wrp-bottom">
									<input type="hidden" value="<?php echo wp_kses_post( $shop ); ?>" id='shopname'>
									<form id='createbanner' action="https://api.preciso.net/api/plugin/createbanner" method="post">
										<input type="hidden" class="form-control token" value='
										<?php
										if ( isset( $_SESSION['token'] ) ) {
											echo wp_kses_post( $_SESSION['token'] );
										}


										?>
									' name="token">
									<input type="hidden" class="form-control CampaignId" value='
									<?php
									if ( isset( $_SESSION['campaignId'] ) ) {
										$cmID = wp_kses_post( $_SESSION['campaignId'] );
									}

									echo wp_kses_post( $cmID );
									?>
									' name="campaignId">
									<input type="hidden" class="form-control flagcreatebtn" value='0' name="creativeeditflag">
									<input type="hidden" class="form-control " value='' id="prdIDCR" name="productId">
									<div class="form-wrp">
										<label for="titleval">Title <span style="color:red">*</span></label>
										<input type="text" class="form-control" id="titleval"name="title">
									</div>
									<div class="form-wrp">
										<label for="brandval">Brand <span style="color:red">*</span></label>
										<input type="text" class="form-control" id="brandval" name="brand">
									</div>
									<div class="form-wrp">
										<label for="descrval">Description</label>
										<input type="text" 
										class="form-control" id="descrval" name="description">
									</div>
									<div class="form-wrp">
										<label for="priceval">Price <span style="color:red">*Amount to be shown in Banner Currency</span></label>
										<input type="text" 
										class="form-control" id="priceval" name="price">
									</div>
									<div class="form-wrp">
										<label for="imageurl">Image Url <span style="color:red">*</span></label>
										<input type="text" class="form-control" id="imageurl" name="image" onblur="checkcreatetpye()">
									</div>
									<div class="form-wrp">
										<label for="landingpageurl">
											Landing Page Url <span style="color:red">*</span>
										</label>
										<input type="text" class="form-control" id="landingpageurl" onblur="checkcreatetpye()" name="landingpage">
									</div>
								</form>  
								<input type="button" class='btn dynamicbannercreate'  id="dynamicbannercreate" name="submit" value="Create Banner">

								<form id='deletebanner' action="https://api.preciso.net/api/plugin/deletebanner" method="post">
									<input type="hidden" class="form-control token" value='
									<?php
									if ( isset( $_SESSION['token'] ) ) {
										echo wp_kses_post( $_SESSION['token'] );
									}

									?>
								' name="token">
								<input type="hidden" class="form-control CampaignId" value='
								<?php
								if ( isset( $_SESSION['campaignId'] ) ) {
									echo wp_kses_post( $_SESSION['campaignId'] );
								}


								?>
							' name="campaignid">
							<input type="hidden" class='sizeCCode 'value='' name="sizecode">
							<input type="hidden" class='creaativeID' value='' name="creativeid">
						</form>  
					</div>                  
				</div>
			</div>
		</div>

		<table class="table table-striped table-bordered" id="tablebanner">
			<form id="banner" action="https://api.preciso.net/api/plugin/getauditbanner" method="post">
				<input type="hidden" class="form-control userid" value="
				<?php
				if ( isset( $_SESSION['userId'] ) ) {
					echo wp_kses_post( $_SESSION['userId'] );
				}


				?>
			" name="UserId"> 
			<input type="hidden" class="form-control token" value="
			<?php
			if ( isset( $_SESSION['token'] ) ) {
				echo wp_kses_post( $_SESSION['token'] );
			}


			?>
		 " name="Token"> 
		<input type="hidden" class="form-control CampaignId" value="
		<?php
		if ( isset( $_SESSION['campaignId'] ) ) {
			echo wp_kses_post( $_SESSION['campaignId'] );
		}


		?>
	 " name="CampaignId">
</form>
<tr>
	<th>Banner Title</th>
	<th>Banner Size</th>
	<th>Creative Id</th>
	<th>Banner Type</th>
	<th>Creative Status</th>
	<th>Bidding Status</th>
	<th>&nbsp;</th>
</tr>
<tr class="dyncrow"></tr>
</table>
<div class="bannerInfo"><a href="#" class="bannerURl" 
	target="_blank">Creative Information-Details</a></div>
</div>
<div class="tab-pane fade" id="nav-contact" role="tabpanel" 
aria-labelledby="nav-contact-tab">
<div class="payment-wrp">
	<h3 class="priceWrp">Total Budget:
		<span class="totalBudget">0</span>
	</h3>
	<h3 class="priceWrp">Remaining Budget:
		<span class="remainBudget">0</span>
	</h3>
						<!--
						<br>
						<h3 class="priceWrp">Total Payment Received:
						  <span class="paymentRecevied">0</span>
						</h3>
						<h3 class="priceWrp">Total Remaining Fund Available:
						  <span class="totalFundRemain">0</span>
						</h3>
						<br>
						 <h3 class="priceWrp depositeMoney">Deposit Money : </h3>
						-->
						<br>
						<div class="col-12" id="deposit_money_rebate"> </div>
						<br> 
						<a href="#" class="paymentBut customAddfunds" 
						target="_blank">Add Funds
					</a>
					<a href="#" class="refreshBut refreshIconbtn" title="Payment Refresh">
						<img src="
						<?php
						$rfhIc = esc_url( PRECISO_PLUGIN_DIR );
						echo esc_url( $rfhIc );
						?>
						assets/images/refreshnew.png">
					</a>
					<h2 class="paymentDetailsHead">
						Last max(10)payments received
					</h2>
					<table id="mytable" 
					class="table table-striped table-bordered">
					<tr>
						<th>Paid Date</th>
						<th>Paid Amount</th>
						<th>Payment Type</th>
					</tr>
					<tr class="paydyncrow"></tr>
				</table>
				<form id="paymentsettings" action="https://api.preciso.net/api/plugin/paymentdetails" method="post"> 
					<input type="hidden" class="form-control token" value="
					<?php
					if ( isset( $_SESSION['token'] ) ) {
						echo wp_kses_post( $_SESSION['token'] );
					}


					?>
				" name="token"> 
				<input type="hidden" class="form-control CampaignId" value="
				<?php
				if ( isset( $_SESSION['campaignId'] ) ) {
					echo wp_kses_post( $_SESSION['campaignId'] );
				}

				?>
			" name="CampaignId">
		</form>
	</div>
</div>
<div class="tab-pane fade" id="nav-about" role="tabpanel" 
aria-labelledby="nav-about-tab">
<div class="register_wrp">
	<h2 style="font-size:26px">User Settings</h2>
	<input type="hidden" value="<?php echo wp_kses_post( $shop ); ?>" id="shop">
	<div class="col-13 form-elem-wrap offset-right10">
		<label for="cmpID">Campaign Id</label>
		<input class="form-control cmpID" id="cmpID" name="campaignId" style="background:#dcdcdc" readonly>
	</div>
	<div class="col-13 form-elem-wrap offset-right10">
		<label for="cmpName">Campaign Name</label>
		<input class="form-control" id="cmpName" style="background:#dcdcdc" readonly>
	</div>
	<div class="col-13 form-elem-wrap offset-right10">
		<label for="prmName">Program Name</label>
		<input class="form-control" id="prmName" style="background:#dcdcdc" readonly>
	</div>
	<div class="clear"></div>
	<div class="col-13 form-elem-wrap offset-right10" style="display:none">
		<label for="langName">Banner Language</label>
		<input class="form-control" id="langName" style="background:#dcdcdc" readonly>
	</div>
	<div class="col-13 form-elem-wrap offset-right10" style="display:none">
		<label for="regName" style="display:block">Choose Additional Regions</label>
		<input class="form-control deatilsShow" id="regName" readonly>
		<a class="regionURL" target="_blank" href="#">Region Details</a>
	</div>
	<div class="col-13 form-elem-wrap offset-right10" style="display:none">
		<label for="device" style="display:block">Choose Additional Devices</label>
		<input class="form-control deatilsShow" id="device" readonly>
		<a class="deiveURL" target="_blank" href="#">Device Details</a>
	</div>
	<div class="col-13 form-elem-wrap offset-right10" style="display:none">
		<label for="currency">Currency</label>
		<input class="form-control" id="currency" style="background:#dcdcdc" readonly>
	</div>
	<div class="col-13 form-elem-wrap offset-right10" style="display:none">
		<label for="payuType">Payout Type</label>
		<input class="form-control" id="payuType" style="background:#dcdcdc" readonly>
	</div>
	<div class="col-13 form-elem-wrap offset-right10" style="display:none">
		<label for="campSat">Campaign Status</label>
		<input class="form-control" id="campSat" readonly>
	</div>
	<div class="clear"></div>
	<form id="updateSettings" action="https://api.preciso.net/api/plugin/updatecampaignsettings" method="post">
		<input type="hidden" class="form-control token" value="
		<?php
		if ( isset( $_SESSION['token'] ) ) {
			echo wp_kses_post( $_SESSION['token'] );
		}


		?>
	" name="token"> 
	<input type="hidden" class="form-control cmpID" id="cmpID" name="campaignId">
	<div class="col-13 form-elem-wrap offset-right10" style="display:none">
		<label for="chanelNm">Channel Name</label>
		<select id="chanelNm" class="form-control" name="channelId">
			<option value="empty" class="channelOpt">Select Channel</option>
		</select>
	</div>

	<div class="col-13 form-elem-wrap offset-right10" style="display:none">
		<label for="stragName">Strategy Name</label>
		<select id="stragName" class="form-control" name="Strategy">
			<option selected value="empty" class="strategyOpt">Select Strategy</option>
		</select>
	</div>
	<div class="col-13 form-elem-wrap offset-right10" style="display:none">
		<label for="camptpy">Campaign Type</label>
		<select id="camptpy" 
		class="form-control" name="campaignTypeId">
		<option value="empty" class="campOpt">
			Select Campaign
		</option>
		<option value="1">Static</option>
		<option value="2">Dynamic</option>
	</select>
</div>
<div class="col-13 form-elem-wrap offset-right10">
	<label for="daiBud">Daily Budget(€)</label>
	<input type="number" class="form-control" 
	id="daiBud" name="dailyBudget">
	<p class="dailybuderror">Please Enter Valid Value</p>
</div>
<div class="col-13 form-elem-wrap offset-right10">
	<label for="mntBud">Total Budget(€)</label>
	<input type="number" class="form-control" 
	id="mntBud" name="totalBudget">
	<p class="totalbuderror">Please Enter Valid Value</p>
	<p class="totalBUDGETMore">Already total spent is <span class='totalSpentBud'>9</span> € and you can't reduce total budget to less than that value this month (next month you can do  it)</p>
</div>
<div class="col-13 form-elem-wrap offset-right10">
	<label for="bidStatus">Bidding Status</label>
	<select id="bidStatus" class="form-control" 
	name="bidderStatus">
	<option value="Active">Active</option>
	<option value="Pause">Pause</option>
</select>
</div>
<div class="col-13 form-elem-wrap offset-right10"  style="display:none">
	<label for="landPage">Landing Page</label>
	<input onfocusout="validatestore()" class="form-control" 
	id="landPage" name="landingPage">
	<p class="landignerror">Please Enter Valid Value</p>
</div>
<div class="col-13 form-elem-wrap offset-right10" style="display:none">
	<label for="freqCap">Frequency Cap</label>
	<input type="number" class="form-control" 
	id="freqCap" name="FrequencyCap">
	<p class="freqerror">Please Enter Valid Value</p>
</div>
<div class="col-13 form-elem-wrap offset-right10" style="display:none">
	<label for="cokieTime">
		Post click cookie time(Min 1 Day)
	</label>
	<input type="number" class="form-control" id="cokieTime" name="PC">
	<p class="pcerror">Please Enter Valid Value</p>
</div>
<div class="clear"></div>
<div class="col-13 form-elem-wrap offset-right10" style="display:none">
	<label for="cokvTime">
		Post view cookie time(Min 1 Day)
	</label>
	<input type="number" class="form-control" id="cokvTime" name="PV">
	<p class="pverror">Please Enter Valid Value</p>
</div>
<div class="col-13 form-elem-wrap  offset-right10 text-right" style="width:100%!important;text-align:center!important;">
	<label class="col-10">&nbsp;</label>
	<input type="button" id="updatesettingSubmit" name="submit" value="Update Settings" style="float: unset !important;" required>
</div>
</form>
<form id="getsettings" action="https://api.preciso.net/api/plugin/getcampaignsettings" method="post">
	<input type="hidden" class="form-control userid" value="
	<?php
	if ( isset( $_SESSION['userId'] ) ) {
		echo wp_kses_post( $_SESSION['userId'] );
	}


	?>
	" name="userId"> 
<input type="hidden" class="form-control token" value="
<?php
if ( isset( $_SESSION['token'] ) ) {
	echo wp_kses_post( $_SESSION['token'] );
}

?>
" name="token"> 
<input type="hidden" class="form-control CampaignId" value="
<?php
if ( isset( $_SESSION['campaignId'] ) ) {
	echo wp_kses_post( $_SESSION['campaignId'] );
}

?>
" name="campaignId">
</form>
<div class="clear"></div>
</div>
</div>
</div>
</div>
</div>
<div class="clear"></div>
<div class="footer-Wrp">
	<a href="" class="footerLink" target="_blank">Help</a> 
	<a href="https://storage.googleapis.com/global-files-store-us/Preciso_Woocommerce/Woocommerce_PrecisoPlugin_Help.docx">
		<img src=" <?php echo esc_url( PRECISO_PLUGIN_DIR ); ?>assets/images/download.png" style="width: 20px;margin-left: 5px;">
	</a>
</div>
</div>
</section>
</div>
<div class="customalert failedalert">
	<div class="customalert-inner">
		<div class="customalert-inner-div">
			<div class="customalertheader red-box"><i class="fa fa-thumbs-down" aria-hidden="true"></i></div>
			<p>Request failure!<br><span class="ng-binding">Campaign Settings Not Updated!</span></p>
			<button class="btn btn-red">Got it!</button>
		</div>
	</div>
</div>

<div class="customalert successalert">
	<div class="customalert-inner">
		<div class="customalert-inner-div">
			<div class="customalertheader green-box"><i class="fa fa-thumbs-up" aria-hidden="true"></i></div>
			<p>Request success!<br><span class="ng-binding">Campaign Settings Updated Successfully!</span></p>
			<button class="btn udatesettingssuccess">Got it!</button>
		</div>
	</div>
</div>
<div class="customalert failedpausebanner">
	<div class="customalert-inner">
		<div class="customalert-inner-div">
			<div class="customalertheader red-box"><i class="fa fa-info-circle" aria-hidden="true"></i></div>
			<span class="ng-binding">Banners in Pending Approval Status, Can't be Activated till it is Reviewed & Manually Approved by Preciso Operations Team;  Trying to Edit Image URL/Landing Page URL will put your banner to Pending Approval Status!</span></p>
			<button class="btn btn-red closepausedbanner">Got it!</button>
		</div>
	</div>
</div>


<div class="customalert failedpauseotherbanner">
	<div class="customalert-inner">
		<div class="customalert-inner-div">
			<div class="customalertheader red-box"><i class="fa fa-info-circle" aria-hidden="true"></i></div>
			<span class="ng-binding">Banners in Pending Approval Status, Can't be Activated till it is Reviewed & Manually Approved by Preciso Operations Team!</span></p>
			<button class="btn btn-red closepausedotherbanner">Got it!</button>
		</div>
	</div>
</div>

<div class="customalert failedpauseohundredbanner">
	<div class="customalert-inner">
		<div class="customalert-inner-div">
			<div class="customalertheader red-box"><i class="fa fa-info-circle" aria-hidden="true"></i></div>
			<span class="ng-binding">Forced Pause Banners can't be Activated/Paused, This must have been bought to this state due to lack of performance, Contact Preciso Support !</span></p>
			<button class="btn btn-red closepauseohundredbanner">Got it!</button>
		</div>
	</div>
</div>

<div class="customalert failedcmapaignpaused">
	<div class="customalert-inner">
		<div class="customalert-inner-div">
			<div class="customalertheader red-box"><i class="fa fa-info-circle" aria-hidden="true"></i></div>
			<span class="ng-binding">Campaign Bidding Status is Pause in Settings(Bidding Status) field; Change that to Active before Activating Banner Bidding Status individually!</span></p>
			<button class="btn btn-red closecmapaignpaused">Got it!</button>
		</div>
	</div>
</div>

<div class="customalert statusupdatebanner">
	<div class="customalert-inner">
		<div class="customalert-inner-div">
			<div class="customalertheader green-box"><i class="fa fa-thumbs-up" aria-hidden="true"></i></div>
			<p>Request success!<br><span class="ng-binding">Status Successfully Updated!</span></p>
			<button class="btn btn-greenalt statusupdatesuccess ">Got it!</button>
		</div>
	</div>
</div> 

<div class="customalert failedalertbanner">
	<div class="customalert-inner">
		<div class="customalert-inner-div">
			<div class="customalertheader red-box"><i class="fa fa-thumbs-down" aria-hidden="true"></i></div>
			<p>Request failure!<br><span class="ng-binding">Unable to Delete the Banner!</span></p>
			<button class="btn btn-red failedalertbtn">Got it!</button>
		</div>
	</div>
</div>

<div class="customalert successalertbanner">
	<div class="customalert-inner">
		<div class="customalert-inner-div">
			<div class="customalertheader green-box"><i class="fa fa-thumbs-up" aria-hidden="true"></i></div>
			<p>Request success!<br><span class="ng-binding">Banner Deleted Successfully!</span></p>
			<button class="btn btn-greenalt bannerdeletesuccess ">Got it!</button>
		</div>
	</div>
</div>   


<div class="customalert successcreatebanner">
	<div class="customalert-inner">
		<div class="customalert-inner-div">
			<div class="customalertheader green-box"><i class="fa fa-thumbs-up" aria-hidden="true"></i></div>
			<p>Request success!<br><span class="ng-binding">Banner Created Successfully!</span></p>
			<button class="btn btn-greenalt successcreatebtnbanner ">Got it!</button>
		</div>
	</div>
</div>  


<div class="customalert successupdatebanner">
	<div class="customalert-inner">
		<div class="customalert-inner-div">
			<div class="customalertheader green-box"><i class="fa fa-thumbs-up" aria-hidden="true"></i></div>
			<p>Request success!<br><span class="ng-binding">Banner Updated Successfully!</span></p>
			<button class="btn btn-greenalt successupdatebtnbanner ">Got it!</button>
		</div>
	</div>
</div>     

<div class="customalert failedcreatebanner">
	<div class="customalert-inner">
		<div class="customalert-inner-div">
			<div class="customalertheader red-box"><i class="fa fa-thumbs-down" aria-hidden="true"></i></div>
			<p>Request failure!<br><span class="ng-binding">Banner Already Exist!</span></p>
			<button class="btn btn-red closefailbanner">Got it!</button>
		</div>
	</div>
</div>

<!--
<div class="skypeBtn">
	<i class="skypeChat fa fa-skype" aria-hidden="true"></i>
</div>
-->

<div id="rawa-box" style="width:376px;bottom:130px;border-radius:0px;left: 20px;"><div class="rawa-box-container"><div class="rawa-header" style="border-radius: 0px; height: 153px;"><div id="rawa-close"><svg><g transform="translate(-340.000000,-32.000000)"><polygon points="350.656537 44 346 39.343463 341.343463 44 340 42.656537 344.656537 38 340 33.343463 341.343463 32 346 36.656537 350.656537 32 352 33.343463 347.343463 38 352 42.656537"></polygon></g></svg></div><div class="rawa-greeting"><h2 class="rawa-title">Hi there</h2><div class="rawa-description">Welcome Preciso Support</div><div class="rawa-note" style=";background:transparent;">We typically reply within minutes</div></div><div class="rawa-personal"></div></div><div class="rawa-body" style=";background-color: ;"><div class="rawa-chats"><div class="rawa-chat" style="margin-left: 70px"><div class="rawa-avatar" style="background-image:url(https://cdn.shopify.com/s/files/1/0033/3538/9233/files/1028931.svg?v=1591276537);"></div>Hello! Preciso here from support team.</div></div></div></div><div class="rawa-footer"><textarea id="rawa-response-message" placeholder="Send a message…" spellcheck="false"></textarea><grammarly-extension style="position: absolute; top: 0px; left: 0px; pointer-events: none; z-index: auto;" class="_1KJtL"></grammarly-extension><div class="rawa-actions">
	<div id="rawa-reply" class="rawa-action">
		<a class='' target="_blank" href="skype:live:.cid.70c62fc565719ed4?chat">
			<svg>
				<path d="M1.388 15.77c-.977.518-1.572.061-1.329-1.019l1.033-4.585c.123-.543.659-1.034 1.216-1.1l6.195-.72c1.648-.19 1.654-.498 0-.687l-6.195-.708c-.55-.063-1.09-.54-1.212-1.085L.056 1.234C-.187.161.408-.289 1.387.231l12.85 6.829c.978.519.98 1.36 0 1.88l-12.85 6.83z">
				</path>
			</svg>
		</a>
	</div>
</div></div></div>

<form id="bannerDetails" action="https://api.preciso.net/api/plugin/getbycreativeid" method="post">
	<input type="hidden" class="form-control token" value='
	<?php
	if ( isset( $_SESSION['token'] ) ) {
		echo wp_kses_post( $_SESSION['token'] );
	}


	?>
	' name="token">
	<input type="hidden" class='crtVID' value='' name="CreativeId">
</form>

<div class="edit_banner_popup">
	<span class="helper"></span>
	<div>
		<div class="popupCloseButton_editbanner">&times;</div>
		<div class="banner-wrp-edit">
			<h1>Update Banner</h1> 
			<form id="editBanner" action="https://api.preciso.net/api/plugin/editbanner" method="post">
				<input type="hidden" class="form-control token" value='
				<?php
				if ( isset( $_SESSION['token'] ) ) {
					echo wp_kses_post( $_SESSION['token'] );
				}

				?>
			' name="token">
				<input type="hidden" class="form-control CampaignId" value='
				<?php
				if ( isset( $_SESSION['campaignId'] ) ) {
					echo wp_kses_post( $_SESSION['campaignId'] );
				}

				?>
				' name="campaignId">
				<input type="hidden" class="form-control flagbtn" value='0' name="creativeeditflag">
				<input type="hidden" class='editcreaativeID' value='' name="creativeId">
				<input type="hidden" class="form-control " value='' class="editprdIDCR" id="editprdIDCR" name="productId">
				<div class="form-wrp">
					<label for="titleval">Title <span style="color:red">*</span></label>
					<input type="text" class="form-control titleval" id="titleval" name="title">
				</div>
				<div class="form-wrp">
					<label for="brandval">Brand <span style="color:red">*</span></label>
					<input type="text" class="form-control brandval" id="brandval" name="brand">
				</div>
<!--                       <div class="form-wrp">
						  <label for="descrval">Description</label>
						  <textarea id="descrval" name="description" class="form-control" style="height: 70px"></textarea>
						</div> -->
						<div class="form-wrp">
							<label for="priceval">Price <span style="color:red">*</span></label>
							<input type="text" name="price" min="1" max="5" class="form-control priceval" id="priceval" onkeydown="onlyNumbers(event)" onpaste="onlyNumbers(event)">
						</div>
						<div class="form-wrp">
							<label for="imageurl">Image Url <span style="color:red">*</span></label>
							<input type="text" class="form-control imageurl" id="imageurl" onblur="checktpye()" name="image">
						</div>
						<div class="form-wrp">
							<label for="landingpageurl">Landing Page Url <span style="color:red">*</span></label>
							<input type="text" class="form-control landingpageurl" id="landingpageurl" name="landingpage" onblur="checktpye()" onfocusout='Javascript:validatedomain();'>
						</div>
						<div class="form-wrp">
							<label for="buttontext">Button Text <span style="color:red">*</span></label>
							<input type="text" class="form-control buttontext" id="buttontext" name="buttontext">
						</div>
					</form>
					<input type="button" class='dynamicbanneredit' id="dynamicbanneredit" value="Update">
				</div>                      
			</div>
		</div>
		<!--Start of Tawk.to Script-->
		<script type="text/javascript">
			var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
			(function(){
				var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
				s1.async=true;
				var hostname=window.location.hostname;
				s1.src='https://embed.tawk.to/6012b1bec31c9117cb736bf9/1et4gckoc';
				s1.charset='UTF-8';
				s1.setAttribute('crossorigin','*');
				s0.parentNode.insertBefore(s1,s0);
			})();
		</script>
		<!--End of Tawk.to Script-->
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
