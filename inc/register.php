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
<div class="registration_wrp">
   <div class="l-header" style="padding-bottom:18px;">
	  <div class="logo"></div>
	  <div class="clear"></div>
   </div>
   <div class="login-wrap">
	  <div class="login-box registration-box">
		 <div class="main-icon"><i class="fa fa-user" aria-hidden="true"></i></div>
		 <h3 style="color:#747d82;display:block;text-align:center;
		 text-transform:uppercase;padding-bottom:6px;
		 font-size:20px;font-weight:500;margin-top:20px">
		 Signup to Preciso
		 </h3>
		 <input type="hidden" value="<?php echo esc_url( site_url() ); ?>" id='shop'>
		 

		 <form id='target' action="https://api.preciso.net/api/plugin/registration" method="post">
			 <?php echo '<input type="hidden" name="bk-ajax-nonce" id="bk-ajax-nonce" value="' . wp_kses_post( wp_create_nonce( 'bk-ajax-nonce' ) ) . '" />'; ?>
			<div class="row">
			   <div class="form-group col-sm-4">
				  <label for="inputEmail">Email<span class="star">*</span></label>
				  <input type="email" placeholder="demo@gmail.com" 
				  class="form-control" id="inputEmail" onfocusout='Javascript:checkEmail()' name="UserEmail" required>
				  <p class="emailerror">Please Enter Valid Email</p>
			   </div>
			   <div class="form-group col-sm-4" style="display: none;">
				  <label for="ddlProgramName">Shop Name
					 <span class="star">*</span>
				  </label>
				  <input type="text" class="form-control" id="ddlProgramName" name="ProgramName" placeholder="Store Name" title="Brand name or product name being promoted" value="<?php echo wp_kses_post( $shop ); ?>" >
				  <p class="programerror">Please Enter Valid Value</p>
			   </div>
			   <div class="form-group col-sm-4">
				  <label for="contactNumber">Contact Number
					 <span class="star">*</span>
				  </label>
				  <input type="text" class="form-control" id="contactNumber" name="ContactNumber" placeholder="Contact Number" required>
				  <p class="contacterror">Please Enter Valid Value</p>
			   </div>
			   <div class="form-group col-sm-4">
				  <label for="inputWebsiteURL">Website Domain URL
					 <span class="star">*</span>
				  </label>
				  <input type="text" class="form-control" id="inputWebsiteURL" name="DomainName" placeholder="https://xxxxxxxx.com" onfocusout='Javascript:validatedomain();' value="<?php echo esc_url( site_url() ); ?>">
				   <p class="domainerror">Please Enter Valid Value</p>
			   </div>
			   <div class="form-group col-sm-4">
				  <label for="inputStoreLogo">Store Logo URL
					 <span class="star">*</span>
				  </label>
				  <input type="text" class="form-control" id="inputStoreLogo" name="CompanyLogo" placeholder="https://xxxxxxxx.com/logo.png" onfocusout='Javascript:validatestore()'>
				  <p class="storeerror">Please Enter Logo URL</p>
			   </div>

			   <div class="form-group col-sm-4">
				  <label for="ddlRegion">Select Campaign's Region
					 <span class="star">*</span>
				  </label>
				 <select id="ddlRegion" class="form-control" name="RegionCode" style="width: 100%"><option value="All" class="regionOpt">Select Regions</option><option value="AF">AFGHANISTAN</option><option value="AL">ALBANIA</option><option value="DZ">ALGERIA</option><option value="AS">AMERICAN SAMOA</option><option value="AD">ANDORRA</option><option value="AO">ANGOLA</option><option value="AI">ANGUILLA</option><option value="AQ">ANTARCTICA</option><option value="AG">ANTIGUA AND BARBUDA</option><option value="AR">ARGENTINA</option><option value="AM">ARMENIA</option><option value="AW">ARUBA</option><option value="AU">AUSTRALIA</option><option value="AT">AUSTRIA</option><option value="AZ">AZERBAIJAN</option><option value="BS">BAHAMAS</option><option value="BH">BAHRAIN</option><option value="BD">BANGLADESH</option><option value="BB">BARBADOS</option><option value="BY">BELARUS</option><option value="BE">BELGIUM</option><option value="BZ">BELIZE</option><option value="BJ">BENIN</option><option value="BM">BERMUDA</option><option value="BT">BHUTAN</option><option value="BO">BOLIVIA</option><option value="BA">BOSNIA AND HERZEGOWINA</option><option value="BW">BOTSWANA</option><option value="BV">BOUVET ISLAND</option><option value="BR">BRAZIL</option><option value="IO">BRITISH INDIAN OCEAN TERRITORY</option><option value="BN">BRUNEI DARUSSALAM</option><option value="BG">BULGARIA</option><option value="BF">BURKINA FASO</option><option value="BI">BURUNDI</option><option value="KH">CAMBODIA</option><option value="CM">CAMEROON</option><option value="CA">CANADA</option><option value="CV">CAPE VERDE</option><option value="KY">CAYMAN ISLANDS</option><option value="CF">CENTRAL AFRICAN REPUBLIC</option><option value="TD">CHAD</option><option value="CL">CHILE</option><option value="CN">CHINA</option><option value="CX">CHRISTMAS ISLAND</option><option value="CC">COCOS (KEELING) ISLANDS</option><option value="CO">COLOMBIA</option><option value="KM">COMOROS</option><option value="CG">CONGO</option><option value="CD">CONGO, THE DRC</option><option value="CK">COOK ISLANDS</option><option value="CR">COSTA RICA</option><option value="CI">COTE D'IVOIRE</option><option value="HR">CROATIA (LOCAL NAME: HRVATSKA)</option><option value="CU">CUBA</option><option value="CY">CYPRUS</option><option value="CZ">CZECH REPUBLIC</option><option value="DK">DENMARK</option><option value="DJ">DJIBOUTI</option><option value="DM">DOMINICA</option><option value="DO">DOMINICAN REPUBLIC</option><option value="TP">EAST TIMOR</option><option value="EC">ECUADOR</option><option value="EG">EGYPT</option><option value="SV">EL SALVADOR</option><option value="GQ">EQUATORIAL GUINEA</option><option value="ER">ERITREA</option><option value="EE">ESTONIA</option><option value="ET">ETHIOPIA</option><option value="FK">FALKLAND ISLANDS (MALVINAS)</option><option value="FO">FAROE ISLANDS</option><option value="FJ">FIJI</option><option value="FI">FINLAND</option><option value="FR">FRANCE</option><option value="FX">FRANCE, METROPOLITAN</option><option value="GF">FRENCH GUIANA</option><option value="PF">FRENCH POLYNESIA</option><option value="TF">FRENCH SOUTHERN TERRITORIES</option><option value="GA">GABON</option><option value="GM">GAMBIA</option><option value="GE">GEORGIA</option><option value="DE">GERMANY</option><option value="GH">GHANA</option><option value="GI">GIBRALTAR</option><option value="GLB">GLOBAL</option><option value="GR">GREECE</option><option value="GL">GREENLAND</option><option value="GD">GRENADA</option><option value="GP">GUADELOUPE</option><option value="GU">GUAM</option><option value="GT">GUATEMALA</option><option value="GN">GUINEA</option><option value="GW">GUINEA-BISSAU</option><option value="GY">GUYANA</option><option value="GG">Guernsey</option><option value="HT">HAITI</option><option value="HM">HEARD AND MC DONALD ISLANDS</option><option value="HN">HONDURAS</option><option value="HK">HONG KONG</option><option value="HU">HUNGARY</option><option value="IS">ICELAND</option><option value="IN">INDIA</option><option value="ID">INDONESIA</option><option value="IR">IRAN (ISLAMIC REPUBLIC OF)</option><option value="IQ">IRAQ</option><option value="IE">IRELAND</option><option value="IL">ISRAEL</option><option value="IT">ITALY</option><option value="JM">JAMAICA</option><option value="JP">JAPAN</option><option value="JO">JORDAN</option><option value="JE">Jersey</option><option value="KZ">KAZAKHSTAN</option><option value="KE">KENYA</option><option value="KI">KIRIBATI</option><option value="KP">KOREA, D.P.R.O.</option><option value="KR">KOREA, REPUBLIC OF</option><option value="KW">KUWAIT</option><option value="KG">KYRGYZSTAN</option><option value="LA">LAOS&nbsp;</option><option value="LV">LATVIA</option><option value="LB">LEBANON</option><option value="LS">LESOTHO</option><option value="LR">LIBERIA</option><option value="LY">LIBYAN ARAB JAMAHIRIYA</option><option value="LI">LIECHTENSTEIN</option><option value="LT">LITHUANIA</option><option value="LU">LUXEMBOURG</option><option value="MO">MACAU</option><option value="MK">MACEDONIA</option><option value="MG">MADAGASCAR</option><option value="MW">MALAWI</option><option value="MY">MALAYSIA</option><option value="MV">MALDIVES</option><option value="ML">MALI</option><option value="MT">MALTA</option><option value="MH">MARSHALL ISLANDS</option><option value="MQ">MARTINIQUE</option><option value="MR">MAURITANIA</option><option value="MU">MAURITIUS</option><option value="YT">MAYOTTE</option><option value="MX">MEXICO</option><option value="FM">MICRONESIA, FEDERATED STATES OF</option><option value="MD">MOLDOVA, REPUBLIC OF</option><option value="MC">MONACO</option><option value="MN">MONGOLIA</option><option value="ME">MONTENEGRO</option><option value="MS">MONTSERRAT</option><option value="MA">MOROCCO</option><option value="MZ">MOZAMBIQUE</option><option value="MM">MYANMAR (BURMA)&nbsp;</option><option value="NA">NAMIBIA</option><option value="NR">NAURU</option><option value="NP">NEPAL</option><option value="NL">NETHERLAND</option><option value="AN">NETHERLANDS ANTILLES</option><option value="NC">NEW CALEDONIA</option><option value="NZ">NEW ZEALAND</option><option value="NI">NICARAGUA</option><option value="NE">NIGER</option><option value="NG">NIGERIA</option><option value="NU">NIUE</option><option value="NF">NORFOLK ISLAND</option><option value="MP">NORTHERN MARIANA ISLANDS</option><option value="NO">NORWAY</option><option value="OM">OMAN</option><option value="PK">PAKISTAN</option><option value="PW">PALAU</option><option value="PA">PANAMA</option><option value="PG">PAPUA NEW GUINEA</option><option value="PY">PARAGUAY</option><option value="PE">PERU</option><option value="PH">PHILIPPINES</option><option value="PN">PITCAIRN</option><option value="PL">POLAND</option><option value="PT">PORTUGAL</option><option value="PR">PUERTO RICO</option><option value="QA">QATAR</option><option value="RE">REUNION</option><option value="RO">ROMANIA</option><option value="RU">RUSSIA</option><option value="RW">RWANDA</option><option value="KN">SAINT KITTS AND NEVIS</option><option value="LC">SAINT LUCIA</option><option value="VC">SAINT VINCENT AND THE GRENADINES</option><option value="WS">SAMOA</option><option value="SM">SAN MARINO</option><option value="ST">SAO TOME AND PRINCIPE</option><option value="SA">SAUDI ARABIA</option><option value="SN">SENEGAL</option><option value="RS">SERBIA</option><option value="SC">SEYCHELLES</option><option value="SL">SIERRA LEONE</option><option value="SG">SINGAPORE</option><option value="SK">SLOVAKIA (SLOVAK REPUBLIC)</option><option value="SI">SLOVENIA</option><option value="SB">SOLOMON ISLANDS</option><option value="SO">SOMALIA</option><option value="ZA">SOUTH AFRICA</option><option value="GS">SOUTH GEORGIA AND SOUTH S.S.</option><option value="SS">SOUTH SUDAN</option><option value="ES">SPAIN</option><option value="LK">SRI LANKA</option><option value="SH">ST. HELENA</option><option value="PM">ST. PIERRE AND MIQUELON</option><option value="SD">SUDAN</option><option value="SR">SURINAME</option><option value="SJ">SVALBARD AND JAN MAYEN ISLANDS</option><option value="SZ">SWAZILAND</option><option value="SE">SWEDEN</option><option value="CH">SWITZERLAND</option><option value="SY">SYRIAN ARAB REPUBLIC</option><option value="TW">TAIWAN, PROVINCE OF CHINA</option><option value="TJ">TAJIKISTAN</option><option value="TZ">TANZANIA, UNITED REPUBLIC OF</option><option value="TH">THAILAND</option><option value="TG">TOGO</option><option value="TK">TOKELAU</option><option value="TO">TONGA</option><option value="TT">TRINIDAD AND TOBAGO</option><option value="TN">TUNISIA</option><option value="TR">TURKEY</option><option value="TM">TURKMENISTAN</option><option value="TC">TURKS AND CAICOS ISLANDS</option><option value="TV">TUVALU</option><option value="UM">U.S. MINOR ISLANDS</option><option value="UG">UGANDA</option><option value="UA">UKRAINE</option><option value="AE">UNITED ARAB EMIRATES</option><option value="UK">UNITED KINGDOM</option><option value="GB">UNITED KINGDOM, GB</option><option value="US" selected> UNITED STATES</option><option value="UY">URUGUAY</option><option value="UZ">UZBEKISTAN</option><option value="VU">VANUATU</option><option value="VE">VENEZUELA</option><option value="VN">VIETNAM</option><option value="VG">VIRGIN ISLANDS (BRITISH)</option><option value="VI">VIRGIN ISLANDS (U.S.)</option><option value="WF">WALLIS AND FUTUNA ISLANDS</option><option value="EH">WESTERN SAHARA</option><option value="YE">YEMEN</option><option value="ZM">ZAMBIA</option><option value="ZW">ZIMBABWE&nbsp;</option></select>
				  <p class="regionerror">Please Select Regions</p>
			   </div>
			   
			   <div class="form-group col-sm-4">
				  <label for="ddlCurrency">Banner Currency
					 <span class="star">*</span>
				  </label>
				   <select id="ddlCurrency" class="form-control" name="Currency"><option value="empty" class="currencyOpt">Select Currency</option><option value="AFN">Afghanistan Afghani</option><option value="ALL">Albania Lek</option><option value="DZD">Algeria Dinar</option><option value="AOA">Angola Kwanza</option><option value="ARS">Argentina Peso</option><option value="AMD">Armenia Dram</option><option value="AWG">Aruba Guilder</option><option value="AUD">Australia Dollar</option><option value="AZN">Azerbaijan Manat</option><option value="BSD">Bahamas Dollar</option><option value="BHD">Bahrain Dinar</option><option value="BDT">Bangladesh Taka</option><option value="BBD">Barbados Dollar</option><option value="BYN">Belarus Ruble</option><option value="BZD">Belize Dollar</option><option value="BMD">Bermuda Dollar</option><option value="BTN">Bhutan Ngultrum</option><option value="BOB">Bolivia Bolíviano</option><option value="BAM">Bosnia and Herzegovina Convertible Marka</option><option value="BWP">Botswana Pula</option><option value="BRL">Brazil Real</option><option value="BND">Brunei Darussalam Dollar</option><option value="BGN">Bulgaria Lev</option><option value="BIF">Burundi Franc</option><option value="KHR">Cambodia Riel</option><option value="CAD">Canada Dollar</option><option value="CVE">Cape Verde Escudo</option><option value="KYD">Cayman Islands Dollar</option><option value="CLP">Chile Peso</option><option value="CNY">China Yuan Renminbi</option><option value="COP">Colombia Peso</option><option value="XOF">Communauté Financière Africaine (BCEAO) Franc</option><option value="XAF">Communauté Financière Africaine (BEAC) CFA Franc BEAC</option><option value="KMF">Comorian Franc</option><option value="XPF">Comptoirs Français du Pacifique (CFP) Franc</option><option value="CDF">Congo/Kinshasa Franc</option><option value="CRC">Costa Rica Colon</option><option value="HRK">Croatia Kuna</option><option value="CUC">Cuba Convertible Peso</option><option value="CUP">Cuba Peso</option><option value="CZK">Czech Republic Koruna</option><option value="DKK">Denmark Krone</option><option value="DJF">Djibouti Franc</option><option value="DOP">Dominican Republic Peso</option><option value="XCD">East Caribbean Dollar</option><option value="EGP">Egypt Pound</option><option value="SVC">El Salvador Colon</option><option value="ERN">Eritrea Nakfa</option><option value="ETB">Ethiopia Birr</option><option value="EUR">Euro Member Countries</option><option value="FKP">Falkland Islands (Malvinas) Pound</option><option value="FJD">Fiji Dollar</option><option value="GMD">Gambia Dalasi</option><option value="GEL">Georgia Lari</option><option value="GHS">Ghana Cedi</option><option value="GIP">Gibraltar Pound</option><option value="XAU">Gold ounce</option><option value="GTQ">Guatemala Quetzal</option><option value="GGP">Guernsey Pound</option><option value="GNF">Guinea Franc</option><option value="GYD">Guyana Dollar</option><option value="HTG">Haiti Gourde</option><option value="HNL">Honduras Lempira</option><option value="HKD">Hong Kong Dollar</option><option value="HUF">Hungary Forint</option><option value="ISK">Iceland Krona</option><option value="INR">India Rupee</option><option value="IDR">Indonesia Rupiah</option><option value="XDR">International Monetary Fund (IMF) Special Drawing Rights</option><option value="IRR">Iran Rial</option><option value="IQD">Iraq Dinar</option><option value="IMP">Isle of Man Pound</option><option value="ILS">Israel Shekel</option><option value="JMD">Jamaica Dollar</option><option value="JPY">Japan Yen</option><option value="JEP">Jersey Pound</option><option value="JOD">Jordan Dinar</option><option value="KZT">Kazakhstan Tenge</option><option value="KES">Kenya Shilling</option><option value="KPW">Korea (North) Won</option><option value="KRW">Korea (South) Won</option><option value="KWD">Kuwait Dinar</option><option value="KGS">Kyrgyzstan Som</option><option value="LAK">Laos Kip</option><option value="LBP">Lebanon Pound</option><option value="LSL">Lesotho Loti</option><option value="LRD">Liberia Dollar</option><option value="LYD">Libya Dinar</option><option value="MOP">Macau Pataca</option><option value="MKD">Macedonia Denar</option><option value="MGA">Madagascar Ariary</option><option value="MWK">Malawi Kwacha</option><option value="MYR">Malaysia Ringgit</option><option value="MVR">Maldives (Maldive Islands) Rufiyaa</option><option value="MRO">Mauritania, Ouguiya</option><option value="MUR">Mauritius Rupee</option><option value="MXN">Mexico Peso</option><option value="MDL">Moldova Leu</option><option value="MNT">Mongolia Tughrik</option><option value="MAD">Morocco Dirham</option><option value="MZN">Mozambique Metical</option><option value="MMK">Myanmar (Burma) Kyat</option><option value="NAD">Namibia Dollar</option><option value="NPR">Nepal Rupee</option><option value="ANG">Netherlands Antilles Guilder</option><option value="NZD">New Zealand Dollar</option><option value="NIO">Nicaragua Cordoba</option><option value="NGN">Nigeria Naira</option><option value="NOK">Norway Krone</option><option value="OMR">Oman Rial</option><option value="PKR">Pakistan Rupee</option><option value="XPD">Palladium Ounce</option><option value="PAB">Panama Balboa</option><option value="PGK">Papua New Guinea Kina</option><option value="PYG">Paraguay Guarani</option><option value="PEN">Peru Sol</option><option value="PHP">Philippines Peso</option><option value="XPT">Platinum</option><option value="PLN">Poland Zloty</option><option value="QAR">Qatar Riyal</option><option value="RON">Romania Leu</option><option value="RUB">Russia Ruble</option><option value="RWF">Rwanda Franc</option><option value="SHP">Saint Helena Pound</option><option value="WST">Samoa Tala</option><option value="STD">Sao Tomean Dobra</option><option value="SAR">Saudi Arabia Riyal</option><option value="SPL">Seborgan Luigino</option><option value="RSD">Serbia Dinar</option><option value="SCR">Seychelles Rupee</option><option value="SLL">Sierra Leone Leone</option><option value="XAG">Silver Ounce</option><option value="SGD">Singapore Dollar</option><option value="SBD">Solomon Islands Dollar</option><option value="SOS">Somalia Shilling</option><option value="ZAR">South Africa Rand</option><option value="LKR">Sri Lanka Rupee</option><option value="SDG">Sudan Pound</option><option value="SRD">Suriname Dollar</option><option value="SEK">Sweden Krona</option><option value="CHF">Switzerland Franc</option><option value="SYP">Syria Pound</option><option value="TWD">Taiwan New Dollar</option><option value="TJS">Tajikistan Somoni</option><option value="TZS">Tanzania Shilling</option><option value="THB">Thailand Baht</option><option value="TOP">Tonga Paanga</option><option value="TTD">Trinidad and Tobago Dollar</option><option value="TND">Tunisia Dinar</option><option value="TRY">Turkey Lira</option><option value="TMT">Turkmenistan Manat</option><option value="TVD">Tuvalu Dollar</option><option value="UGX">Uganda Shilling</option><option value="UAH">Ukraine Hryvnia</option><option value="AED">United Arab Emirates Dirham</option><option value="GBP">United Kingdom Pound</option><option value="USD">United States Dollar</option><option value="UYU">Uruguay Peso</option><option value="UZS">Uzbekistan Som</option><option value="VUV">Vanuatu Vatu</option><option value="VEF">Venezuela Bolívar</option><option value="VND">Viet Nam Dong</option><option value="YER">Yemen Rial</option><option value="ZMW">Zambia Kwacha</option><option value="ZWD">Zimbabwe Dollar</option><option value="SZL">eSwatini Lilangeni</option></select>
				  <p class="currencyerror">Please Select Currency</p>
			   </div>
			   <div class="form-group col-sm-4" style="display: none;">
				  <label for="dailylBudget">Daily Budget(€)
					 <span class="star">*</span>
				  </label>
				  <input type="number" class="form-control" 
				  id="dailylBudget" name="DailyBudget" value="2"
				  placeholder="100" >
				  <p class="budegeterror">Please Enter Valid Value</p>
			   </div>
			   <div class="form-group col-sm-4" style="display: none;">
				  <label for="ddlBudget">Total Budget(€)
					 <span class="star">*</span>
				  </label>
				  <input type="number" class="form-control" 
				  id="ddlBudget" name="Budget" placeholder="3000" value="5">
				  <p class="totalbudegeterror">Please Enter Valid Value</p>
			   </div>
			   <div class="form-group col-sm-12" style="width:100%">
				  <label for="contactAddress">Contact Address</label>
				  <textarea rows="5" cols="90" class="form-control" 
				  name="ContactAddress" id="contactAddress"></textarea>
			   </div>
						
			   <div class="clear"></div>
			   <div class="hidden">
				  <input type="hidden" class="form-control" 
				  id="inputCPM" name="MaxCPM" value="2"/>
				  <input type="hidden" class="form-control" 
				  id="ddlCampaignType" name="CampaignType" value="CPM"/>
				  <input type="hidden" class="form-control" 
				  id="ddlStrategy" name="Strategy" value="19"/>
				  <input type="hidden" class="form-control" 
				  id="ddlPV" name="PV" value="2"/>
				  <input type="hidden" class="form-control" 
				  id="ddlPC" name="PC" value="30"/>
				  <input type="hidden" class="form-control" 
				  id="ddlfreqCap" name="FrequencyCap" value="5"/>
				  <input type="hidden" class="form-control" 
				  id="ddlSpendDuration" name="SpendDuration" value="1"/>
				  <input type="hidden" class="form-control" 
				  id="ddlLanguage" name="LanguageCode" value="EN"/>
				  <input type="hidden" class="form-control" 
				  id="ChanelID" name="ChannelId" value="3"/>
				  <input type="hidden" class="form-control" 
				  id="ddldeviceId" name="DeviceId" value="1"/>
				  <input type="hidden" name="Network" value="Woocommerce">
				  <input type="hidden" name="store" value="<?php echo wp_kses_post( $shop ); ?>">
				  
					<input type="hidden" class="form-control" id="txtresetlink" name="resetLink" value=""/>
			   </div>
			   <div class="submit_wrp">
				  <input type="button" id="regisnSubmit" name="submit" value="Sign Up" required>
			   </div>

			   <div class="alert_note">
			<table>
			  <tbody><tr>
				<td class="td_left">Notes :</td>
				<td><ul>
				  <li> 
					After Registration, You would receive an email with login credentials in the registered email.
				 </li>
				 <li> 
				  Within 1-2 hours your dynamic banner will be available with the products in your Store! You can preview this  Banner  under Banner Tab Section. Also, you will have help from our side to set up or run your campaign in case you face any difficulty during the process!
				 </li>
			   </ul>
			 </td>
			   </tr>
			 </tbody>
		   </table>
		   </div>

			</div>
		 </form>
		 <div class="clear"></div>
	  </div>
   </div>
</div>
<div class="customalert failedalert">
   <div class="customalert-inner">
	  <div class="customalert-inner-div">
		 <div class="customalertheader red-box">
			<i class="fa fa-thumbs-down" aria-hidden="true"></i>
		 </div>
		 <p>Request failure!<br>
			<span class="ng-binding">Registration Failed!</span>
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
			<span class="ng-binding">Registered Successfully!</span>
			<br>
			<span class="ng-binding">
			 Login details are in your registered email address
			</span>
		 </p>
		 <button class="btn btn-green">Got it!</button>
	  </div>
   </div>
</div>



<!-- <div class="skypeBtn">
	<i class="skypeChat fa fa-skype" aria-hidden="true"></i>
</div> -->


<div id="rawa-box" style="width:376px;bottom:170px;border-radius:0px;right: 20px;">
	<div class="rawa-box-container">
		<div class="rawa-header" style="border-radius: 0px; height: 153px;">
			<div id="rawa-close">
				<svg>
					<g transform="translate(-340.000000,-32.000000)">
						<polygon points="350.656537 44 346 39.343463 
						341.343463 44 340 42.656537 344.656537 38 340 
						33.343463 341.343463 32 346 36.656537 
						350.656537 32 352 33.343463 347.343463 38 352 42.656537">
						  
						</polygon>
					</g>
				</svg>
			</div>
			<div class="rawa-greeting">
				<h2 class="rawa-title">Hi there</h2>
				<div class="rawa-description">Welcome Preciso Support</div>
				<div class="rawa-note" style=";background:transparent;">
					We typically reply within minutes</div>
			</div>
			<div class="rawa-personal"></div>
		</div>
		<div class="rawa-body" style=";background-color: ;">
			<div class="rawa-chats">
				<div class="rawa-chat" style="margin-left: 70px">
					<div class="rawa-avatar" >

					</div>Hello! Preciso here from support team.</div>
			</div>
		</div>
	</div>
	<div class="rawa-footer">
		<textarea id="rawa-response-message" 
		placeholder="Send a message…" 
		spellcheck="false">
		</textarea>
		<grammarly-extension 
		style="position: absolute; top: 0px; 
		left: 0px; pointer-events: none; z-index: auto;"
		class="_1KJtL"></grammarly-extension>
		<div class="rawa-actions">
			<div id="rawa-reply" class="rawa-action">
				<a class='' target="_blank" 
				href="skype:live:.cid.70c62fc565719ed4?chat">
				  <i class="fa fa-chevron-circle-right submitskype" 
				  aria-hidden="true"></i>
				</a>
			</div>
		</div>
	</div>
</div>

<style>
.notice-warning
{
	display:none;
	/* css to display wordpress notice so that we can fit the page on complete screen without screen */
}
</style>
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
