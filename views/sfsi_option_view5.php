<?php
/* unserialize all saved option for  section 5 options */
     
  $icons = ($option1['sfsi_custom_files']) ? unserialize($option1['sfsi_custom_files']) : array() ;
   $option3=  unserialize(get_option('sfsi_section3_options',false));
  $option5 =  unserialize(get_option('sfsi_section5_options',false));
  $custom_icons_order = unserialize($option5['sfsi_CustomIcons_order']);
  $icons_order = array($option5['sfsi_rssIcon_order']=>'rss',
                     $option5['sfsi_emailIcon_order']=>'email',
                     $option5['sfsi_facebookIcon_order']=>'facebook',
                     $option5['sfsi_googleIcon_order']=>'google',
                     $option5['sfsi_twitterIcon_order']=>'twitter',
                     $option5['sfsi_shareIcon_order']=>'share',
                     $option5['sfsi_youtubeIcon_order']=>'youtube',
                     $option5['sfsi_pinterestIcon_order']=>'pinterest',
                     $option5['sfsi_linkedinIcon_order']=>'linkedin',
		     		 $option5['sfsi_instagramIcon_order']=>'instagram') ;
  if(is_array($custom_icons_order) ) 
  {
	  foreach($custom_icons_order as $data)
	  {
		 $icons_order[$data['order']] = $data;
	  }
  }
  ksort($icons_order);
  
?>
<!-- Section 5 "Any other wishes for your main icons?" main div Start -->
<div class="tab5">
	<h4>Order of your icons</h4>
    <!-- icon drag drop  section start here -->	
    <ul class="share_icon_order" >
     <?php 
	 	$ctn = 0;
	 	foreach($icons_order as $index=>$icn) :
          
		  switch ($icn) : 
          case 'rss' :?>
            	 <li class="rss_section" data-index="<?php echo $index; ?>" id="sfsi_rssIcon_order">
                	<a href="#" title="RSS"><img src="<?php echo SFSI_PLUGURL; ?>images/rss.png" alt="RSS" /></a>
                 </li>
          <?php break; ?>
          
		  <?php case 'email' :?>
          		<li class="email_section " data-index="<?php echo $index; ?>" id="sfsi_emailIcon_order">
                	<a href="#" title="Email"><img src="<?php echo SFSI_PLUGURL; ?>images/<?php echo $email_image; ?>" alt="Email" class="icon_img" /></a>
                </li>
          <?php break; ?>
          
		  <?php case 'facebook' :?>
          		<li class="facebook_section " data-index="<?php echo $index; ?>" id="sfsi_facebookIcon_order">
                	<a href="#" title="Facebook"><img src="<?php echo SFSI_PLUGURL; ?>images/facebook.png" alt="Facebook" /></a>
                </li>
          <?php break; ?>
          
          <?php case 'google' :?>
          		<li class="google_section " data-index="<?php echo $index; ?>" id="sfsi_googleIcon_order">
                	<a href="#" title="Google Plus" ><img src="<?php echo SFSI_PLUGURL; ?>images/google_plus.png" alt="Google Plus" /></a>
                </li>
          <?php break; ?>
          
          <?php case 'twitter' :?>
          		<li class="twitter_section " data-index="<?php echo $index; ?>" id="sfsi_twitterIcon_order">
                	<a href="#" title="Twitter" ><img src="<?php echo SFSI_PLUGURL; ?>images/twitter.png" alt="Twitter" /></a>
                </li>
          <?php break; ?>
          
          <?php case 'share' : ?>
          		<li class="share_section " data-index="<?php echo $index; ?>"  id="sfsi_shareIcon_order">
                	<a href="#" title="Share" ><img src="<?php echo SFSI_PLUGURL; ?>images/share.png" alt="Share" /></a>
                </li>
          <?php break; ?>
          
          <?php case 'youtube' :?>
          		<li class="youtube_section " data-index="<?php echo $index; ?>" id="sfsi_youtubeIcon_order">
                	<a href="#" title="YouTube" ><img src="<?php echo SFSI_PLUGURL; ?>images/youtube.png" alt="YouTube" /></a>
                </li>
          <?php break; ?>
          
          <?php case 'pinterest' :?>
          		<li class="pinterest_section " data-index="<?php echo $index; ?>" id="sfsi_pinterestIcon_order">
                	<a href="#" title="Pinterest" ><img src="<?php echo SFSI_PLUGURL; ?>images/pinterest.png" alt="Pinterest" /></a>
                </li>
          <?php break; ?>
          
          <?php case 'linkedin' :?>
          		<li class="linkedin_section " data-index="<?php echo $index; ?>" id="sfsi_linkedinIcon_order">
                	<a href="#" title="Linked In" ><img src="<?php echo SFSI_PLUGURL; ?>images/linked_in.png" alt="Linked In" /></a>
                </li>
          <?php break; ?>
          
          <?php case 'instagram' :?>
          		<li class="instagram_section " data-index="<?php echo $index; ?>" id="sfsi_instagramIcon_order">
                	<a href="#" title="Instagram" ><img src="<?php echo SFSI_PLUGURL; ?>images/instagram.png" alt="Instagram" /></a>
                </li>
          <?php break; ?>
                  
          <?php default   :?>
          		<?php if(isset($icons[$icn['ele']]) && !empty($icons[$icn['ele']]) && filter_var($icons[$icn['ele']], FILTER_VALIDATE_URL) ): ?>
          		<li class="custom_iconOrder sfsiICON_<?php echo $icn['ele']; ?>" data-index="<?php echo $index; ?>" element-id="<?php echo $icn['ele']; ?>" >
                	<a href="#" title="Custom Icon" ><img src="<?php echo $icons[$icn['ele']]; ?>" alt="Linked In" class="sfcm" /></a>
                </li> 
                <?php endif; ?>
          <?php break; ?>
            
         <?php  endswitch; ?>   
    <?php endforeach; ?> 
     
    </ul> <!-- END icon drag drop section start here -->
    
        <span class="drag_drp">(Drag &amp; Drop)</span>
     <!-- icon's size and spacing section start here -->	
    <div class="row">
	<h4>Size &amp; spacing of your icons</h4>
	<div class="icons_size"><span>Size:</span><input name="sfsi_icons_size" value="<?php echo ($option5['sfsi_icons_size']!='') ?  $option5['sfsi_icons_size'] : '' ;?>" type="text" /><ins>pixels wide &amp; tall</ins> <span class="last">Spacing between icons:</span><input name="sfsi_icons_spacing" type="text" value="<?php echo ($option5['sfsi_icons_spacing']!='') ?  $option5['sfsi_icons_spacing'] : '' ;?>" /><ins>Pixels</ins></div>
    </div>
    
    <div class="row">
	<h4>Alignments</h4>
	<div class="icons_size"><span>Alignment of icons:</span><div class="field"><select name="sfsi_icons_Alignment" id="sfsi_icons_Alignment" class="styled"><option value="center" <?php echo ($option5['sfsi_icons_Alignment']=='center') ?  'selected="selected"' : '' ;?>>Centered</option><option value="right" <?php echo ($option5['sfsi_icons_Alignment']=='right') ?  'selected="selected"' : '' ;?>>Right</option><option value="left" <?php echo ($option5['sfsi_icons_Alignment']=='left') ?  'selected="selected"' : '' ;?>>Left</option></select></div> <span>Icons per row:</span><input name="sfsi_icons_perRow" type="text" value="<?php echo ($option5['sfsi_icons_perRow']!='') ?  $option5['sfsi_icons_perRow'] : '' ;?>" /><ins class="leave_empty">Leave empty if you dont want to <br />
    define this
    </ins></div>
    </div>
    
    <div class="row new_wind">
	<h4>New window</h4>
	<div class="row_onl"><p>If user clicks on your icons, do you want to open the page in a new window?</p>
	<ul class="enough_waffling">
	    <li><input name="sfsi_icons_ClickPageOpen" <?php echo ($option5['sfsi_icons_ClickPageOpen']=='yes') ?  'checked="true"' : '' ;?> type="radio" value="yes" class="styled"  /><label>Yes</label></li>
	<li><input name="sfsi_icons_ClickPageOpen" <?php echo ($option5['sfsi_icons_ClickPageOpen']=='no') ?  'checked="true"' : '' ;?> type="radio" value="no" class="styled" /><label>No</label></li>
      </ul></div>
    </div>
   <!-- END icon's size and spacing section -->
   
     <!-- icon's floating and stick section start here -->	
    <div class="row sticking">
	<h4>Sticking</h4>
	<p>If you decided to show your icons via a widget, you can add the effect that when the user scrolls down, the icons will stick at the  top of the screen so that they are still displayed even if the user scrolled all the way down. Do you want to do that?</p>
	<!--<div class="space">
	<p class="list">Make icons float?</p>	
	<ul class="enough_waffling">
	    <li><input name="sfsi_icons_float" <?php //echo ($option5['sfsi_icons_float']=='yes') ?  'checked="true"' : '' ;?>  type="radio" value="yes" class="styled"  /><label>Yes</label></li>
	    <li><input name="sfsi_icons_float" <?php //echo ($option5['sfsi_icons_float']=='no') ?  'checked="true"' : '' ;?>  type="radio" value="no" class="styled" /><label>No</label></li>
	</ul>
      </div>
      <div class="clear float_options" <?php if($option5['sfsi_icons_stick']=='yes' || $option5['sfsi_icons_float']=='no') :?> style="display:none" <?php endif;?>>
	<div class="float">Where shall they float?</div>
	<div class="field " >
	    <select name="sfsi_icons_floatPosition" id="sfsi_icons_floatPosition" class="styled">
		<option value="top-left" <?php echo ($option5['sfsi_icons_floatPosition']=='top-left') ?  'selected="selected"' : '' ;?> >Top - Left</option>
		<option value="top-right" <?php echo ($option5['sfsi_icons_floatPosition']=='top-right') ?  'selected="selected"' : '' ;?> >Top - Right</option>
		<option value="center-left" <?php echo ($option5['sfsi_icons_floatPosition']=='center-left') ?  'selected="selected"' : '' ;?> >Center - Left</option>
		<option value="center-right" <?php echo ($option5['sfsi_icons_floatPosition']=='center-right') ?  'selected="selected"' : '' ;?> >Center - Right</option>
		<option value="bottom-left" <?php echo ($option5['sfsi_icons_floatPosition']=='bottom-left') ?  'selected="selected"' : '' ;?> >Bottom - Left</option>
		<option value="bottom-right" <?php echo ($option5['sfsi_icons_floatPosition']=='bottom-right') ?  'selected="selected"' : '' ;?> >Bottom - Right</option>
	    </select>
	</div>
  </div>-->
  
  <div class="space">
    <!--<p class="list">Make icons stick?</p>-->	
    <ul class="enough_waffling">
  	<li><input name="sfsi_icons_stick" <?php echo ($option5['sfsi_icons_stick']=='yes') ?  'checked="true"' : '' ;?> type="radio" value="yes" class="styled"  /><label>Yes</label></li>
	<li><input name="sfsi_icons_stick" <?php echo ($option5['sfsi_icons_stick']=='no') ?  'checked="true"' : '' ;?>  type="radio" value="no" class="styled" /><label>No</label></li>
  </ul>

  </div>
  <!--disable float icons-->
  <div class="space">
    <p class="list">Disable float icons on mobile devices</p>	
    <ul class="enough_waffling">
    <li><input name="sfsi_disable_floaticons" <?php echo ($option5['sfsi_disable_floaticons']=='yes') ?  'checked="true"' : '' ;?> type="radio" value="yes" class="styled"  /><label>Yes</label></li>
	<li><input name="sfsi_disable_floaticons" <?php echo ($option5['sfsi_disable_floaticons']=='no') ?  'checked="true"' : '' ;?>  type="radio" value="no" class="styled" /><label>No</label></li>
  </ul>
  </div>
  <!--disable float icons-->
</div><!-- END icon's floating and stick section -->
 
 <!-- mouse over text section start here -->
 <div class="row mouse_txt">
    <h4>Mouseover text</h4>
	<p>If you’ve given your icon only one function (i.e. no pop-up where user can perform different actions) then you can define 
here what text will be displayed if a user moves his mouse over the icon:</p>
	<div class="space">
	<div class="clear"></div>
		<div class="mouseover_field rss_section">
			<label>RSS:</label><input name="sfsi_rss_MouseOverText" value="<?php echo ($option5['sfsi_rss_MouseOverText']!='') ?  $option5['sfsi_rss_MouseOverText'] : '' ;?>" type="text" />
		</div>
		<div class="mouseover_field email_section">
			<label>Email:</label><input name="sfsi_email_MouseOverText" value="<?php echo ($option5['sfsi_email_MouseOverText']!='') ?  $option5['sfsi_email_MouseOverText'] : '' ;?>" type="text" />
		</div>
		
		<div class="clear">
		<div class="mouseover_field twitter_section">
			<label>Twitter:</label>
			<input name="sfsi_twitter_MouseOverText" value="<?php echo ($option5['sfsi_twitter_MouseOverText']!='') ?  $option5['sfsi_twitter_MouseOverText'] : '' ;?>" type="text" />
		</div>
		<div class="mouseover_field facebook_section">
			<label>Facebook:</label>
			<input name="sfsi_facebook_MouseOverText" value="<?php echo ($option5['sfsi_facebook_MouseOverText']!='') ?  $option5['sfsi_facebook_MouseOverText'] : '' ;?>" type="text" />
		</div>
		</div>
		<div class="clear">
		<div class="mouseover_field google_section">
			<label>Google:</label>
			<input name="sfsi_google_MouseOverText" value="<?php echo ($option5['sfsi_google_MouseOverText']!='') ?  $option5['sfsi_google_MouseOverText'] : '' ;?>"  type="text" />
		</div>
		<div class="mouseover_field linkedin_section">
			<label>LinkedIn:</label>
			<input name="sfsi_linkedIn_MouseOverText" value="<?php echo ($option5['sfsi_linkedIn_MouseOverText']!='') ?  $option5['sfsi_linkedIn_MouseOverText'] : '' ;?>"  type="text" />
		</div>
		</div>
		<div class="clear">
		<div class="mouseover_field pinterest_section">
			<label>Pinterest:</label>
			<input name="sfsi_pinterest_MouseOverText" value="<?php echo ($option5['sfsi_pinterest_MouseOverText']!='') ?  $option5['sfsi_pinterest_MouseOverText'] : '' ;?>" type="text" />
		</div>
		<div class="mouseover_field youtube_section">
			<label>Youtube:</label>
			<input name="sfsi_youtube_MouseOverText" value="<?php echo ($option5['sfsi_youtube_MouseOverText']!='') ?  $option5['sfsi_youtube_MouseOverText'] : '' ;?>" type="text" />
		</div>
		</div>
		<div class="clear">
		    <div class="mouseover_field instagram_section">
			<label>Instagram:</label>
			<input name="sfsi_instagram_MouseOverText" value="<?php echo ($option5['sfsi_instagram_MouseOverText']!='') ?  $option5['sfsi_instagram_MouseOverText'] : '' ;?>" type="text" />
		    </div>
		</div>
		<!--<div class="clear">
		<div class="mouseover_field share_section">
			<label>Share:</label>
			<input name="sfsi_share_MouseOverText" value="<?php //echo ($option5['sfsi_share_MouseOverText']!='') ?  $option5['sfsi_share_MouseOverText'] : '' ;?>" type="text" />
		</div>
                </div> -->
                <div class="clear"> </div>  
                <div class="custom_m">
                   
                 <?php 
                    $sfsiMouseOverTexts=  unserialize($option5['sfsi_custom_MouseOverTexts']);
                    $count=1; for($i=$first_key;$i<=$endkey;$i++) : ?> 
                 <?php if(!empty( $icons[$i])) : ?>
                    
                    <div class="mouseover_field custom_section sfsiICON_<?php echo $i; ?>">
			<label>Custom <?php echo $count; ?>:</label>
			<input name="sfsi_custom_MouseOverTexts[]" value="<?php echo (isset($sfsiMouseOverTexts[$i]) && $sfsiMouseOverTexts[$i]!='') ?  $sfsiMouseOverTexts[$i] : '' ;?>" type="text" file-id="<?php echo $i; ?>" />
                    </div>
                      
                      <?php if($count%2==0): ?>
                    
                    <div class="clear"> </div>  
		<?php endif; ?>
               <?php $count++; endif; endfor; ?>
		</div>
		
	</div>

	</div> <!-- END mouse over text section -->
    
    <!--Content of 4-->
    <div class="row mouse_txt tab3">
        <p>A good & well-fitting design is not only nice to look at, but it increases chances that people will subscribe and/or share your site with friends:</p>
    
        <ul class="tab_3_list">
            <li>It comes across as <span>more professional/</span> gives your site <span>more “credit”</span></li>
            <li>A smart automatic animation can <span>make your visitors aware of your icons</span> in an unintrusive manner</li> 
            <!--<li>Animated icons can trigger <span>a positive emotion for </span> the viewer, getting them into a state in which they are more likely 		to subscribe</li> -->
        </ul>
        <div class="row">
    <h3>Theme options</h3>
        <!--icon themes section start -->
        <ul class="tab_3_icns">
                <li><input name="sfsi_actvite_theme" <?php echo ( $option3['sfsi_actvite_theme']=='default') ?  'checked="true"' : '' ;?> type="radio" value="default" class="styled"  /><label>Default</label><div class="icns_tab_3"><span class="row_1_1 rss_section"></span><span class="row_1_2 email_section"></span><span class="row_1_3 facebook_section"></span><span class="row_1_4 google_section"></span><span class="row_1_5 twitter_section"></span><span class="row_1_6 share_section"></span><span class="row_1_7 youtube_section"></span><span class="row_1_8 pinterest_section"></span><span class="row_1_9 linkedin_section"></span> <span class="row_1_10 instagram_section"></span><!--<span class="row_1_11 sf_section"></span>--></div></li>
              		
                <li><input name="sfsi_actvite_theme" <?php echo ( $option3['sfsi_actvite_theme']=='flat') ?  'checked="true"' : '' ;?>  type="radio" value="flat" class="styled" /><label>Flat</label><div class="icns_tab_3"><span class="row_2_1 rss_section"></span><span class="row_2_2 email_section"></span><span class="row_2_3 facebook_section"></span><span class="row_2_4 google_section"></span><span class="row_2_5 twitter_section"></span><span class="row_2_6 share_section"></span><span class="row_2_7 youtube_section"></span><span class="row_2_8 pinterest_section"></span><span class="row_2_9 linkedin_section"></span><span class="row_2_10 instagram_section"></span><!--<span class="row_2_11 sf_section"></span>--></div></li>
                
                 <li><input name="sfsi_actvite_theme" <?php echo ( $option3['sfsi_actvite_theme']=='thin') ?  'checked="true"' : '' ;?>  type="radio" value="thin" class="styled"  /><label>Thin</label><div class="icns_tab_3"><span class="row_3_1 rss_section"></span><span class="row_3_2 email_section"></span><span class="row_3_3 facebook_section"></span><span class="row_3_4 google_section"></span><span class="row_3_5 twitter_section"></span><span class="row_3_6 share_section"></span><span class="row_3_7 youtube_section"></span><span class="row_3_8 pinterest_section"></span><span class="row_3_9 linkedin_section"></span><span class="row_3_10 instagram_section"></span><!--<span class="row_3_11 sf_section"></span>--></div></li>
                 
                <li><input name="sfsi_actvite_theme" <?php echo ( $option3['sfsi_actvite_theme']=='cute') ?  'checked="true"' : '' ;?> type="radio" value="cute" class="styled" /><label>Cute</label><div class="icns_tab_3"><span class="row_4_1 rss_section"></span><span class="row_4_2 email_section"></span><span class="row_4_3 facebook_section"></span><span class="row_4_4 google_section"></span><span class="row_4_5  twitter_section"></span><span class="row_4_6 share_section"></span><span class="row_4_7 youtube_section"></span><span class="row_4_8 pinterest_section"></span><span class="row_4_9 linkedin_section"></span><span class="row_4_10 instagram_section"></span><!--<span class="row_4_11 sf_section"></span>--></div></li>
                
                
         <!--------------------start next four------------------------>
                
                <li><input name="sfsi_actvite_theme" <?php echo ( $option3['sfsi_actvite_theme']=='cubes') ?  'checked="true"' : '' ;?> type="radio" value="cubes" class="styled"  /><label>Cubes</label><div class="icns_tab_3"><span class="row_5_1 rss_section"></span><span class="row_5_2 email_section"></span><span class="row_5_3 facebook_section"></span><span class="row_5_4 google_section"></span><span class="row_5_5 twitter_section"></span><span class="row_5_6 share_section"></span><span class="row_5_7 youtube_section"></span><span class="row_5_8 pinterest_section"></span><span class="row_5_9 linkedin_section"></span><span class="row_5_10 instagram_section"></span><!--<span class="row_5_11 sf_section"></span>--></div></li>
                
                <li><input name="sfsi_actvite_theme" <?php echo ( $option3['sfsi_actvite_theme']=='chrome_blue') ?  'checked="true"' : '' ;?>  type="radio" value="chrome_blue" class="styled" /><label>Chrome Blue</label><div class="icns_tab_3"><span class="row_6_1 rss_section"></span><span class="row_6_2 email_section"></span><span class="row_6_3 facebook_section"></span><span class="row_6_4 google_section"></span><span class="row_6_5 twitter_section"></span><span class="row_6_6 share_section"></span><span class="row_6_7 youtube_section"></span><span class="row_6_8 pinterest_section"></span><span class="row_6_9 linkedin_section"></span><span class="row_6_10 instagram_section"></span><!--<span class="row_6_11 sf_section"></span>--></div></li>
                
                 <li><input name="sfsi_actvite_theme" <?php echo ( $option3['sfsi_actvite_theme']=='chrome_grey') ?  'checked="true"' : '' ;?>  type="radio" value="chrome_grey" class="styled"  /><label>Chrome Grey</label><div class="icns_tab_3"><span class="row_7_1 rss_section"></span><span class="row_7_2 email_section"></span><span class="row_7_3 facebook_section"></span><span class="row_7_4 google_section"></span><span class="row_7_5 twitter_section"></span><span class="row_7_6 share_section"></span><span class="row_7_7 youtube_section"></span><span class="row_7_8 pinterest_section"></span><span class="row_7_9 linkedin_section"></span><span class="row_7_10 instagram_section"></span><!--<span class="row_7_11 sf_section"></span>--></div></li>
                 
                <li><input name="sfsi_actvite_theme" <?php echo ( $option3['sfsi_actvite_theme']=='splash') ?  'checked="true"' : '' ;?> type="radio" value="splash" class="styled" /><label>Splash</label><div class="icns_tab_3"><span class="row_8_1 rss_section"></span><span class="row_8_2 email_section"></span><span class="row_8_3 facebook_section"></span><span class="row_8_4 google_section"></span><span class="row_8_5  twitter_section"></span><span class="row_8_6 share_section"></span><span class="row_8_7 youtube_section"></span><span class="row_8_8 pinterest_section"></span><span class="row_8_9 linkedin_section"></span><span class="row_8_10 instagram_section"></span><!--<span class="row_8_11 sf_section"></span>--></div></li>
                
                
                <!--------------------start second four------------------------>
                
                
                <li><input name="sfsi_actvite_theme" <?php echo ( $option3['sfsi_actvite_theme']=='orange') ?  'checked="true"' : '' ;?> type="radio" value="orange" class="styled"  /><label>Orange</label><div class="icns_tab_3"><span class="row_9_1 rss_section"></span><span class="row_9_2 email_section"></span><span class="row_9_3 facebook_section"></span><span class="row_9_4 google_section"></span><span class="row_9_5 twitter_section"></span><span class="row_9_6 share_section"></span><span class="row_9_7 youtube_section"></span><span class="row_9_8 pinterest_section"></span><span class="row_9_9 linkedin_section"></span><span class="row_9_10 instagram_section"></span><!--<span class="row_9_11 sf_section"></span>--></div></li>
                
                <li><input name="sfsi_actvite_theme" <?php echo ( $option3['sfsi_actvite_theme']=='crystal') ?  'checked="true"' : '' ;?>  type="radio" value="crystal" class="styled" /><label>Crystal</label><div class="icns_tab_3"><span class="row_10_1 rss_section"></span><span class="row_10_2 email_section"></span><span class="row_10_3 facebook_section"></span><span class="row_10_4 google_section"></span><span class="row_10_5 twitter_section"></span><span class="row_10_6 share_section"></span><span class="row_10_7 youtube_section"></span><span class="row_10_8 pinterest_section"></span><span class="row_10_9 linkedin_section"></span><span class="row_10_10 instagram_section"></span><!--<span class="row_10_11 sf_section"></span>--></div></li>
                
                 <li><input name="sfsi_actvite_theme" <?php echo ( $option3['sfsi_actvite_theme']=='glossy') ?  'checked="true"' : '' ;?>  type="radio" value="glossy" class="styled"  /><label>Glossy</label><div class="icns_tab_3"><span class="row_11_1 rss_section"></span><span class="row_11_2 email_section"></span><span class="row_11_3 facebook_section"></span><span class="row_11_4 google_section"></span><span class="row_11_5 twitter_section"></span><span class="row_11_6 share_section"></span><span class="row_11_7 youtube_section"></span><span class="row_11_8 pinterest_section"></span><span class="row_11_9 linkedin_section"></span><span class="row_11_10 instagram_section"></span><!--<span class="row_11_11 sf_section"></span>--></div></li>
                 
                <li><input name="sfsi_actvite_theme" <?php echo ( $option3['sfsi_actvite_theme']=='black') ?  'checked="true"' : '' ;?> type="radio" value="black" class="styled" /><label>Black</label><div class="icns_tab_3"><span class="row_12_1 rss_section"></span><span class="row_12_2 email_section"></span><span class="row_12_3 facebook_section"></span><span class="row_12_4 google_section"></span><span class="row_12_5  twitter_section"></span><span class="row_12_6 share_section"></span><span class="row_12_7 youtube_section"></span><span class="row_12_8 pinterest_section"></span><span class="row_12_9 linkedin_section"></span><span class="row_12_10 instagram_section"></span><!--<span class="row_12_11 sf_section"></span>--></div></li>
                
                
                 <!--------------------start last four------------------------>
                
                
                <li><input name="sfsi_actvite_theme" <?php echo ( $option3['sfsi_actvite_theme']=='silver') ?  'checked="true"' : '' ;?> type="radio" value="silver" class="styled"  /><label>Silver</label><div class="icns_tab_3"><span class="row_13_1 rss_section"></span><span class="row_13_2 email_section"></span><span class="row_13_3 facebook_section"></span><span class="row_13_4 google_section"></span><span class="row_13_5 twitter_section"></span><span class="row_13_6 share_section"></span><span class="row_13_7 youtube_section"></span><span class="row_13_8 pinterest_section"></span><span class="row_13_9 linkedin_section"></span><span class="row_13_10 instagram_section"></span><!--<span class="row_13_11 sf_section"></span>--></div></li>
                
                <li><input name="sfsi_actvite_theme" <?php echo ( $option3['sfsi_actvite_theme']=='shaded_dark') ?  'checked="true"' : '' ;?>  type="radio" value="shaded_dark" class="styled" /><label>Shaded Dark</label><div class="icns_tab_3"><span class="row_14_1 rss_section"></span><span class="row_14_2 email_section"></span><span class="row_14_3 facebook_section"></span><span class="row_14_4 google_section"></span><span class="row_14_5 twitter_section"></span><span class="row_14_6 share_section"></span><span class="row_14_7 youtube_section"></span><span class="row_14_8 pinterest_section"></span><span class="row_14_9 linkedin_section"></span><span class="row_14_10 instagram_section"></span><!--<span class="row_14_11 sf_section"></span>--></div></li>
                
                 <li><input name="sfsi_actvite_theme" <?php echo ( $option3['sfsi_actvite_theme']=='shaded_light') ?  'checked="true"' : '' ;?>  type="radio" value="shaded_light" class="styled"  /><label>Shaded Light</label><div class="icns_tab_3"><span class="row_15_1 rss_section"></span><span class="row_15_2 email_section"></span><span class="row_15_3 facebook_section"></span><span class="row_15_4 google_section"></span><span class="row_15_5 twitter_section"></span><span class="row_15_6 share_section"></span><span class="row_15_7 youtube_section"></span><span class="row_15_8 pinterest_section"></span><span class="row_15_9 linkedin_section"></span><span class="row_15_10 instagram_section"></span><!--<span class="row_15_11 sf_section"></span>--></div></li>
                 
                <li><input name="sfsi_actvite_theme" <?php echo ( $option3['sfsi_actvite_theme']=='transparent') ?  'checked="true"' : '' ;?> type="radio" value="transparent" class="styled" /><label style="line-height:20px !important;margin-top:15px;  ">Transparent <br/><span style="font-size: 9px;" >(for dark backgrounds)</span></label> <div class="icns_tab_3 trans_bg" style="padding-left: 6px;"><span class="row_16_1 rss_section"></span><span class="row_16_2 email_section"></span><span class="row_16_3 facebook_section"></span><span class="row_16_4 google_section"></span><span class="row_16_5  twitter_section"></span><span class="row_16_6 share_section"></span><span class="row_16_7 youtube_section"></span><span class="row_16_8 pinterest_section"></span><span class="row_16_9 linkedin_section"></span><span class="row_16_10 instagram_section"></span><!--<span class="row_16_11 sf_section"></span>--></div></li>
                
                <!--Custom Icon Support {Monad}-->
                                <li class="cstomskins_upload">
                    <input name="sfsi_actvite_theme" <?php echo ( $option3['sfsi_actvite_theme']=='custom_support') ?  'checked="true"' : '' ;?> type="radio" value="custom_support" class="styled" />
                    <label style="line-height:20px !important;margin-top:15px;  ">Custom Icons <br/></label>
                    <div class="icns_tab_3" style="padding-left: 6px;">
                         <?php
                         if(get_option("rss_skin"))
                         {
                            $icon = get_option("rss_skin");
                            echo '<span class="row_17_1 rss_section" style="background: url('.$icon.') no-repeat;"></span>';
                         }else
                         {
                             echo '<span class="row_17_1 rss_section" style="background-position:-1px 0;"></span>';
                         }
                         
                         if(get_option("email_skin"))
                         {
                            $icon = get_option("email_skin");
                            echo '<span class="row_17_2 email_section" style="background: url('.$icon.') no-repeat;"></span>';
                         }else
                         {
                             echo '<span class="row_17_2 email_section" style="background-position:-58px 0;"></span>';
                         }
                         
                         if(get_option("facebook_skin"))
                         {
                            $icon = get_option("facebook_skin");
                            echo '<span class="row_17_3 facebook_section" style="background: url('.$icon.') no-repeat;"></span>';
                         }else
                         {
                             echo '<span class="row_17_3 facebook_section" style="background-position:-118px 0;"></span>';
                         }
                         
                         if(get_option("google_skin"))
                         {
                            $icon = get_option("google_skin");
                            echo '<span class="row_17_4 google_section" style="background: url('.$icon.') no-repeat;"></span>';
                         }else
                         {
                             echo '<span class="row_17_4 google_section" style="background-position:-176px 0;"></span>';
                         }
                         
                         if(get_option("twitter_skin"))
                         {
                            $icon = get_option("twitter_skin");
                            echo '<span class="row_17_5 twitter_section" style="background: url('.$icon.') no-repeat;"></span>';
                         }else
                         {
                             echo '<span class="row_17_5 twitter_section" style="background-position:-235px 0;"></span>';
                         }
                         
                         if(get_option("share_skin"))
                         {
                            $icon = get_option("share_skin");
                            echo '<span class="row_17_6 share_section" style="background: url('.$icon.') no-repeat;"></span>';
                         }else
                         {
                             echo '<span class="row_17_6 share_section" style="background-position:-293px 0;"></span>';
                         }
                         
                         if(get_option("youtube_skin"))
                         {
                            $icon = get_option("youtube_skin");
                            echo '<span class="row_17_7 youtube_section" style="background: url('.$icon.') no-repeat;"></span>';
                         }else
                         {
                             echo '<span class="row_17_7 youtube_section" style="background-position:-350px 0;"></span>';
                         }
                         
                         if(get_option("pintrest_skin"))
                         {
                            $icon = get_option("pintrest_skin");
                            echo '<span class="row_17_8 pinterest_section" style="background: url('.$icon.') no-repeat;"></span>';
                         }else
                         {
                             echo '<span class="row_17_8 pinterest_section" style="background-position:-409px 0;"></span>';
                         }
                         
                         if(get_option("linkedin_skin"))
                         {
                            $icon = get_option("linkedin_skin");
                            echo '<span class="row_17_9 linkedin_section" style="background: url('.$icon.') no-repeat;"></span>';
                         }else
                         {
                             echo '<span class="row_17_9 linkedin_section" style="background-position:-476px 0;"></span>';
                         }
                         
                         if(get_option("instagram_skin"))
                         {
                            $icon = get_option("instagram_skin");
                            echo '<span class="row_17_10 instagram_section" style="background: url('.$icon.') no-repeat;"></span>';
                         }else
                         {
                             echo '<span class="row_17_10 instagram_section" style="background-position:-526px 0;"></span>';
                         }
                         ?>
                        
                    </div>
               </li>
          
              </ul><!--icon themes section start -->
	  
             <!--icon Animation section   start -->	  
            <div class="sub_row stand sec_new" style="margin-left: 0px;">
            <h3>Animate them</h3>
            <p class="radio_section tab_3_option">
                <input name="sfsi_mouseOver" <?php echo ( $option3['sfsi_mouseOver']=='yes') ?  'checked="true"' : '' ;?>  type="checkbox" value="yes" class="styled"  /><label>Mouse-Over effects</label><div class="drop_lsts"><select name="sfsi_mouseOver_effect"  id="sfsi_mouseOver_effect" class="styled"> <option value="fade_in" <?php echo ( $option3['sfsi_mouseOver_effect']=='fade_in') ?  'selected="true"' : '' ;?>>Fade In</option><option value="scale" <?php echo ( $option3['sfsi_mouseOver_effect']=='scale') ?  'selected="true"' : '' ;?>>Scale</option><option value="combo" <?php echo ( $option3['sfsi_mouseOver_effect']=='combo') ?  'selected="true"' : '' ;?>>Combo</option></select></div></p>
            <div class="Shuffle_auto"><p class="radio_section tab_3_option"><input name="sfsi_shuffle_icons" <?php echo ( $option3['sfsi_shuffle_icons']=='yes') ?  'checked="true"' : '' ;?>  type="checkbox" value="yes" class="styled"  /><label>Shuffle them automatically</label></p>
                <div class="sub_sub_box shuffle_sub"  >
                <p class="radio_section tab_3_option"><input name="sfsi_shuffle_Firstload" <?php echo ( $option3['sfsi_shuffle_Firstload']=='yes') ?  'checked="true"' : '' ;?>  type="checkbox" value="yes" class="styled"  /><label>When site is first loaded</label></p>
                <p class="radio_section tab_3_option"><input name="sfsi_shuffle_interval" <?php echo ( $option3['sfsi_shuffle_interval']=='yes') ?  'checked="true"' : '' ;?>  type="checkbox" value="yes" class="styled"  /><label>Every</label><input class="smal_inpt" type="text" name="sfsi_shuffle_intervalTime" value="<?php echo ( $option3['sfsi_shuffle_intervalTime']!='') ?   $option3['sfsi_shuffle_intervalTime'] : '' ;?>"><label>seconds</label></p>
                </div>
                </div>
            </div> <!--END icon Animation section   start -->
                      
    </div>
    </div>
    <!--Content of 4-->
     <!-- SAVE BUTTON SECTION   --> 
     <div class="save_button">
         <img src="<?php echo SFSI_PLUGURL ?>images/ajax-loader.gif" class="loader-img" />
         <a href="javascript:;" id="sfsi_save5" title="Save">Save</a>
     </div><!-- END SAVE BUTTON SECTION   -->
     <a class="sfsiColbtn closeSec" href="javascript:;" >Collapse area</a>
     <label class="closeSec"></label>
       <!-- ERROR AND SUCCESS MESSAGE AREA-->
     <p class="red_txt errorMsg" style="display:none"> </p>
     <p class="green_txt sucMsg" style="display:none"> </p>
     <div class="clear"></div>
</div><!-- END Section 5 "Any other wishes for your main icons?"-->