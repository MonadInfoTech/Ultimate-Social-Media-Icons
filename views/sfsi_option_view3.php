<?php
  /* unserialize all saved option for second section options */
    $option3=  unserialize(get_option('sfsi_section3_options',false));
   
?>
<!-- Section 3 "What design & animation do you want to give your icons?" main div Start -->
<div class="tab3">



    
    
	   <!-- SAVE BUTTON SECTION   --> 
	<div class="save_button tab_3_sav">
	     <img src="<?php echo SFSI_PLUGURL ?>images/ajax-loader.gif" class="loader-img" />
	     <a href="javascript:;" id="sfsi_save3" title="Save">Save</a>
	</div>   <!-- END SAVE BUTTON SECTION   --> 
	<a class="sfsiColbtn closeSec" href="javascript:;" class="closeSec">Collapse area</a>
        <label class="closeSec"></label>
	<!-- ERROR AND SUCCESS MESSAGE AREA-->
	<p class="red_txt errorMsg" style="display:none"> </p>
	<p class="green_txt sucMsg" style="display:none"> </p>
</div><!-- END Section 3 "What design & animation do you want to give your icons?" main div  -->