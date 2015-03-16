<?php
     /* unserialize all saved option for Eight options */
    $option8=  unserialize(get_option('sfsi_plus_section8_options',false));
?>
<div class="tab8">
	<ul class="icn_listing8">
		<li class="">
			<div class="radio_section tb_4_ck" onclick="checkforinfoslction(this);"><input name="show_via_widget" <?php echo ($option8['show_via_widget']=='yes') ?  'checked="true"' : '' ;?>  id="show_via_widget" type="checkbox" value="yes" class="styled"  /></div>
			<div class="right_info">
				<p>
					<span class="toglepstpgspn">Show them via a widget</span><br>
                    <?php
                    if($option8['show_via_widget']=='yes')
					{
						$label_style = 'style="display:block; font-size: 16px;"';
					}
					else
					{
						$label_style = 'style="font-size: 16px;"';
					}
					?>
					<label class="sub-subtitle ckckslctn" <?php echo $label_style;?>>Go to the <a href="<?php echo admin_url('widgets.php');?>">widgets area</a> and drag & drop it where you want to have it!</label>
				</p>
			</div>
		</li>
		<li class="">
        <div class="radio_section tb_4_ck cstmfltonpgstck" onclick="toggleflotpage(this);">
        	<input name="float_on_page" <?php echo ($option8['float_on_page']=='yes') ?  'checked="true"' : '' ;?>  id="float_on_page" type="checkbox" value="yes" class="styled" />
        </div>
			<div class="right_info">
				<p>
					<span class="toglepstpgspn">Float them on the page</span>
				</p>
                <?php
                if($option8['float_on_page'] == "yes")
				{
					$style = 'display: block;';
				}
				else
				{
					$style ="display: none;";
				}
				?>
				<ul class="tab_3_icns flthmonpg" <?php echo 'style="'.$style.'";';?>>
					<li>
						<input name="float_page_position" <?php echo ( $option8['float_page_position']=='top-left') ?  'checked="true"' : '' ;?> type="radio" value="top-left" class="styled"  />
                        <span class="sfsi_flicnsoptn3 sfsioptntl">Top left</span>
						<label><img src="<?php echo SFSI_PLUGURL;?>images/top_left.png" /></label>
					</li>
					<li>
						<input name="float_page_position" <?php echo ( $option8['float_page_position']=='top-right') ?  'checked="true"' : '' ;?> type="radio" value="top-right" class="styled"  />
                        <span class="sfsi_flicnsoptn3 sfsioptntr">Top right</span>
						<label><img src="<?php echo SFSI_PLUGURL;?>images/top_right.png" /></label>
					</li>
					<li>
						<input name="float_page_position" <?php echo ( $option8['float_page_position']=='center-left') ?  'checked="true"' : '' ;?> type="radio" value="center-left" class="styled"  />
                        <span class="sfsi_flicnsoptn3 sfsioptncl">Center left</span>
						<label><img src="<?php echo SFSI_PLUGURL;?>images/center_left.png" /></label>
					</li>
					<li>
						<input name="float_page_position" <?php echo ( $option8['float_page_position']=='center-right') ?  'checked="true"' : '' ;?> type="radio" value="center-right" class="styled"  />
                        <span class="sfsi_flicnsoptn3 sfsioptncr">Center right</span>
						<label><img src="<?php echo SFSI_PLUGURL;?>images/center_right.png" /></label>
					</li>
					<li>
						<input name="float_page_position" <?php echo ( $option8['float_page_position']=='bottom-left') ?  'checked="true"' : '' ;?> type="radio" value="bottom-left" class="styled"  />
                        <span class="sfsi_flicnsoptn3 sfsioptnbl">Bottom left</span>
						<label><img src="<?php echo SFSI_PLUGURL;?>images/bottom_left.png" /></label>
					</li>
					<li>
						<input name="float_page_position" <?php echo ( $option8['float_page_position']=='bottom-right') ?  'checked="true"' : '' ;?> type="radio" value="bottom-right" class="styled"  />
                        <span class="sfsi_flicnsoptn3 sfsioptnbr">Bottom right</span>
						<label><img src="<?php echo SFSI_PLUGURL;?>images/bottom_right.png" /></label>
					</li>
				</ul>
			</div>
		</li>
		<li class="placethemanulywpr">
			<div class="radio_section tb_4_ck" onclick="checkforinfoslction(this);"><input name="place_item_manually" <?php echo ($option8['place_item_manually']=='yes') ?  'checked="true"' : '' ;?>  id="place_item_manually" type="checkbox" value="yes" class="styled"  /></div>
			<div class="right_info">
				<p>
					<span class="toglepstpgspn">Place them manually</span><br>
                    <?php
                    if($option8['place_item_manually']=='yes')
					{
						$label_style = 'style="display:block; font-size: 15px;"';
					}
					else
					{
						$label_style = 'style="font-size: 15px;"';
					}
					?>
					<label class="sub-subtitle ckckslctn" <?php echo $label_style;?>>Place <label class="sfsi_ckckslctnlbl"><</label><label class="sfsi_ckckslctnlbl">?</label><label class="sfsi_ckckslctnlbl">php DISPLAY_ULTIMATE_PLUS();</label><label class="sfsi_ckckslctnlbl">?</label><label class="sfsi_ckckslctnlbl">></label> in your theme codes or use the shortcode <b>[DISPLAY_ULTIMATE_PLUS]</b> to display them wherever you want.</label>
				</p>
			</div>
		</li>
		<li class="">
			<div class="radio_section tb_4_ck" onclick="toggleflotpage(this);"><input name="show_item_onposts" <?php echo ($option8['show_item_onposts']=='yes') ?  'checked="true"' : '' ;?>  id="show_item_onposts" type="checkbox" value="yes" class="styled"  /></div>
			<div class="right_info">
				<p>
					<span class="toglepstpgspn">Show them before or after posts</span>
                    <br>
                    <label class="sub-subtitle toglpstpgsbttl" style="font-size: 15px;">Here you have two options:</label>
				</p>
				
				<ul class="tab_3_icns shwthmbfraftr" <?php echo ($option8['show_item_onposts'] != "yes")? 'style="display: none";' : '' ;?>>
					<li onclick="togglbtmsection('toggledsplyitemslctn', 'toggleonlystndrshrng', this);" class="clckbltglcls">
						<input name="display_button_type" <?php echo ( $option8['display_button_type']=='normal_button') ?  'checked="true"' : '' ;?> type="radio" value="normal_button" class="styled"  />
						<label class="labelhdng4">Display the icons I selected above</label>
                    </li>
                    <li onclick="togglbtmsection('toggleonlystndrshrng', 'toggledsplyitemslctn', this);" class="clckbltglcls">
						<input name="display_button_type" <?php echo ( $option8['display_button_type']=='standard_buttons') ?  'checked="true"' : '' ;?> type="radio" value="standard_buttons" class="styled"  />
						<label class="labelhdng4">Display only standard sharing buttons</label>
                    </li>
                    <li class="toggledsplyitemslctn">
                    	<?php if ($option8['display_button_type']=='normal_button'): $display = "display:block"; else:  $display = "display:none"; endif;?>
						<div class="row radiodisplaysection" style="<?php echo $display; ?>">
							<h4>Size &amp; spacing of your icons</h4>
							<div class="icons_size"><span>Size:</span><input name="sfsi_post_icons_size" value="<?php echo ($option8['sfsi_post_icons_size']!='') ?  $option8['sfsi_post_icons_size'] : '' ;?>" type="text" /><ins>pixels wide &amp; tall</ins> <span class="last">Spacing between icons:</span><input name="sfsi_post_icons_spacing" type="text" value="<?php echo ($option8['sfsi_post_icons_spacing']!='') ?  $option8['sfsi_post_icons_spacing'] : '' ;?>" /><ins>Pixels</ins></div>
						</div>
                    </li>
                    
                    <li class="toggleonlystndrshrng">
                    	<?php if ($option8['display_button_type']=='standard_buttons'): $display = "display:block"; else:  $display = "display:none"; endif;?>
						<div class="radiodisplaysection" style="<?php echo $display; ?>">

                            <p class="cstmdisplaysharingtxt">The following icons will be displayed:</p>
                            <div class="social_icon_like1">
                                <ul>
                                    <li>
                                        <a href="#" title="Facebook Like">
                                            <img src="<?php echo SFSI_PLUGURL; ?>images/like.jpg" alt="Facebook Like" /><span>18k</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="Google Plus">
                                            <img src="<?php echo SFSI_PLUGURL; ?>images/google_plus1.jpg" alt="Google Plus" /><span>18k</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="Share">
                                            <img src="<?php echo SFSI_PLUGURL; ?>images/share1.jpg" alt="Share" /><span>18k</span>
                                        </a>
                                    </li>
                                </ul>	
                            </div>
						
                            <p class="clear">Those are usually all you need: </p>
                            <ul class="usually" style="color:#5a6570">
                                <li>1. Facebook is No.1 in liking, so it’s a must have</li>
                                <li>2. Google+ is also important due to SEO reasons, so important to have as well</li>
                                <li>3. Share-button covers all other platforms for sharing</li>
                            </ul>
                            <div class="options">
                                <label>Do you want to display the counts?</label><div class="field"><select name="sfsi_icons_DisplayCounts" id="sfsi_icons_DisplayCounts" class="styled"><option value="yes" <?php echo ($option8['sfsi_icons_DisplayCounts']=='yes') ?  'selected="true"' : '' ;?>>YES</option><option value="no" <?php echo ($option8['sfsi_icons_DisplayCounts']=='no') ?  'selected="true"' : '' ;?>>NO</option></select></div>
                            </div>
					  </div>
                    </li>
                    
					    
                      
                  <li class="row PostsSettings_section">
                    <!--<h4 class="labelhdng4">Options:</h4>-->
                    
                    <!--Display them options-->
                    <div class="options">
                        <label class="first chcklbl">Display them: </label>
                        <label class="seconds chcklbl labelhdng4">On Post Pages </label>
                        <div class="chckwpr">
                            <div class="snglchckcntr">
                                <div class="radio_section tb_4_ck"><input name="display_before_posts" <?php echo ($option8['display_before_posts']=='yes') ?  'checked="true"' : '' ;?>  id="display_before_posts" type="checkbox" value="yes" class="styled"  /></div>
                                <div class="right_info">Before posts</div>
                            </div>
                            <div class="snglchckcntr">
                                <div class="radio_section tb_4_ck"><input name="display_after_posts" <?php echo ($option8['display_after_posts']=='yes') ?  'checked="true"' : '' ;?>  id="display_after_posts" type="checkbox" value="yes" class="styled"  /></div>
                                <div class="right_info">After posts</div>
                            </div>
                            <!--<div class="snglchckcntr">
                                <div class="radio_section tb_4_ck"><input name="display_on_postspage" <?php //echo ($option8['display_on_postspage']=='yes') ?  'checked="true"' : '' ;?>  id="display_on_postspage" type="checkbox" value="yes" class="styled"  /></div>
                                <div class="right_info">On posts pages</div>
                            </div>
                            <div class="snglchckcntr">
                                <div class="radio_section tb_4_ck"><input name="display_on_homepage" <?php //echo ($option8['display_on_homepage']=='yes') ?  'checked="true"' : '' ;?>  id="display_on_homepage" type="checkbox" value="yes" class="styled"  /></div>
                                <div class="right_info">On homepage</div>
                            </div>-->
                        </div>
                    </div>
                    
                    
                    <div class="options">
                        <label class="seconds chcklbl labelhdng4">On Homepage</label>
                        <div class="chckwpr">
                            <div class="snglchckcntr">
                                <div class="radio_section tb_4_ck"><input name="display_before_blogposts" <?php echo ($option8['display_before_blogposts']=='yes') ?  'checked="true"' : '' ;?>  id="display_before_blogposts" type="checkbox" value="yes" class="styled"  /></div>
                                <div class="right_info">Before posts</div>
                            </div>
                            <div class="snglchckcntr">
                                <div class="radio_section tb_4_ck"><input name="display_after_blogposts" <?php echo ($option8['display_after_blogposts']=='yes') ?  'checked="true"' : '' ;?>  id="display_after_blogposts" type="checkbox" value="yes" class="styled"  /></div>
                                <div class="right_info">After posts</div>
                            </div>
                            <!--<div class="snglchckcntr">
                                <div class="radio_section tb_4_ck"><input name="display_on_postspage" <?php //echo ($option8['display_on_postspage']=='yes') ?  'checked="true"' : '' ;?>  id="display_on_postspage" type="checkbox" value="yes" class="styled"  /></div>
                                <div class="right_info">On posts pages</div>
                            </div>
                            <div class="snglchckcntr">
                                <div class="radio_section tb_4_ck"><input name="display_on_homepage" <?php //echo ($option8['display_on_homepage']=='yes') ?  'checked="true"' : '' ;?>  id="display_on_homepage" type="checkbox" value="yes" class="styled"  /></div>
                                <div class="right_info">On homepage</div>
                            </div>-->
                        </div>
                    </div>
                    
                    <!--Display them options-->
                    
                    
                    <div class="options shareicontextfld">
                        <label class="first">Text to appear before the sharing icons:</label><input name="sfsi_textBefor_icons" type="text" value="<?php echo ($option8['sfsi_textBefor_icons']!='') ?  $option8['sfsi_textBefor_icons'] : '' ; ?>" />
                    </div>
                    <div class="options">
                        <label>Alignment of share icons: </label><div class="field"><select name="sfsi_icons_alignment" id="sfsi_icons_alignment" class="styled"><option value="left" <?php echo ($option8['sfsi_icons_alignment']=='left') ?  'selected="selected"' : '' ;?>>Left</option><option value="right" <?php echo ($option8['sfsi_icons_alignment']=='right') ?  'selected="selected"' : '' ;?>>Right</option><option value="center" <?php echo ($option8['sfsi_icons_alignment']=='center') ?  'selected="selected"' : '' ;?>>Center</option></select></div>
                    </div>
                    <!--<div class="options">
                        <label>Do you want to display the counts?</label><div class="field"><select name="sfsi_icons_DisplayCounts" id="sfsi_icons_DisplayCounts" class="styled"><option value="yes" <?php //echo ($option8['sfsi_icons_DisplayCounts']=='yes') ?  'selected="true"' : '' ;?>>YES</option><option value="no" <?php //echo ($option8['sfsi_icons_DisplayCounts']=='no') ?  'selected="true"' : '' ;?>>NO</option></select></div>
                    </div>-->				
                  </li>	
					
				</ul>	
			</div>
		</li>
	</ul>
	
	
	<!-- SAVE BUTTON SECTION   --> 
	<div class="save_button">
       <img src="<?php echo SFSI_PLUGURL ?>images/ajax-loader.gif" class="loader-img" />
        <a  href="javascript:;" id="sfsi_save8" title="Save">Save</a>
  
	</div>  <!-- END SAVE BUTTON SECTION   -->
	<a class="sfsiColbtn closeSec" href="javascript:;" class="closeSec">Collapse area</a>
	<label class="closeSec"></label>
	<!-- ERROR AND SUCCESS MESSAGE AREA-->
	<p class="red_txt errorMsg" style="display:none"> </p>
	<p class="green_txt sucMsg" style="display:none"> </p>
	<div class="clear"></div>
	
	
</div>