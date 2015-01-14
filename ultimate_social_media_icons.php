<?php
/*
Plugin Name: Ultimate Social Media Icons and Share Plugin (Facebook, Twitter, Google Plus, Instagram, Pinterest etc.)
Plugin URI: http://ultimatelysocial.com
Description: The FREE plugin allows you to add social media & share icons to your blog (esp. Facebook, Twitter, Email, RSS, Pinterest, Instagram, Google+, LinkedIn, Share-button). It offers a wide range of design options and other features. 
Author: UltimatelySocial
Author URI: http://ultimatelysocial.com
Version: 1.1.1.6
License: GPLv2 or later

*/

global $wpdb;
/* define the Root for URL and Document */

define('SFSI_DOCROOT',    dirname(__FILE__));
define('SFSI_PLUGURL',    plugin_dir_url(__FILE__));
define('SFSI_WEBROOT',    str_replace(getcwd(), home_url(), dirname(__FILE__)));

/* load all files  */
include(SFSI_DOCROOT.'/libs/controllers/sfsi_socialhelper.php');
include(SFSI_DOCROOT.'/libs/sfsi_install_uninstall.php');
include(SFSI_DOCROOT.'/libs/controllers/sfsi_buttons_controller.php');
include(SFSI_DOCROOT.'/libs/controllers/sfsi_iconsUpload_contoller.php');
include(SFSI_DOCROOT.'/libs/sfsi_Init_JqueryCss.php');
include(SFSI_DOCROOT.'/libs/controllers/sfsi_floater_icons.php');
include(SFSI_DOCROOT.'/libs/controllers/sfsi_frontpopUp.php');
include(SFSI_DOCROOT.'/libs/controllers/sfsiocns_OnPosts.php');
include(SFSI_DOCROOT.'/libs/sfsi_widget.php');

/* plugin install and uninstall hooks */ 
register_activation_hook(__FILE__, 'sfsi_activate_plugin' );
register_deactivation_hook(__FILE__, 'sfsi_deactivate_plugin');
register_uninstall_hook(__FILE__, 'sfsi_Unistall_plugin');

//shortcode for the ultimate social icons {Monad}
add_shortcode("DISPLAY_ULTIMATE_SOCIAL_ICONS", "DISPLAY_ULTIMATE_SOCIAL_ICONS");
function DISPLAY_ULTIMATE_SOCIAL_ICONS($args = null, $content = null)
{
	$instance = array("showf" => 1, "title" => '');
	$sfsi_section8_options = get_option("sfsi_section8_options");
	$sfsi_section8_options = unserialize($sfsi_section8_options);
	$place_item_manually = $sfsi_section8_options['place_item_manually'];
	if($place_item_manually == "yes")
	{
		$return = '';
		if(!isset($before_widget)): $before_widget =''; endif;
		if(!isset($after_widget)): $after_widget =''; endif;
		
		/*Our variables from the widget settings. */
		$title = apply_filters('widget_title', $instance['title'] );
		$show_info = isset( $instance['show_info'] ) ? $instance['show_info'] : false;
		global $is_floter;	      
		$return.= $before_widget;
			$return .= '<div class="sfsi_widget"><div id="sfsi_wDiv"></div>';
			/* Display the widget title */
			if ( $title ) $return .= $before_title . $title . $after_title;
				/* Link the main icons function */
				$return .= sfsi_check_visiblity(0);
		   $return .= '<div style="clear: both;"></div></div>';
		$return .= $after_widget;
		return $return;
	}
	else
	{
		return 'Kindly go to setting page and check the option "Place them manually"';
	}
}
//adding some meta tags for facebook news feed {Monad}
add_action('wp_head', 'ultimatefbmetatags');
function ultimatefbmetatags()
{
   $post_id = get_the_ID();
   $attachment_id = get_post_thumbnail_id($post_id);
   echo ' <meta name="viewport" content="width=device-width, initial-scale=1">';
   if($attachment_id)
   {
	   $feat_image = wp_get_attachment_url( $attachment_id );
	   if (preg_match('/https/',$feat_image))
	   {
			   echo '<meta property="og:image:secure_url" content="'.$feat_image.'">';
	   }
	   else
	   {
			   echo '<meta property="og:image" content="'.$feat_image.'">';
	   }
	   $metadata = wp_get_attachment_metadata( $attachment_id );
	   $image_type = $metadata['sizes']['post-thumbnail']['mime-type'];
	   $width = $metadata['width'];
	   $height = $metadata['height'];
	   echo '<meta property="og:image:type" content="'.$image_type.'">';
	   echo '<meta property="og:image:width" content="'.$width.'">';
	   echo '<meta property="og:image:height" content="'.$height.'">';
   }
}

//functionality for before posts
add_action( 'loop_start', 'show_sfsi_beforeposts' );
function show_sfsi_beforeposts( $query )
{
	if(is_single())
	{
		$option8=  unserialize(get_option('sfsi_section8_options',false));
		if($option8['display_before_posts'] == "yes")
		{
			if( $query->is_main_query() )
			{
				echo sfsi_social_buttons_below($content = null);
			}
		}
	}
}

//functionality for after posts
add_action( 'loop_end', 'show_sfsi_afterposts' );
function show_sfsi_afterposts( $query )
{
	if(is_single())
	{
		$option8=  unserialize(get_option('sfsi_section8_options',false));
		if($option8['display_after_posts'] == "yes")
		{
			if( $query->is_main_query() )
			{
				echo sfsi_social_buttons_below($content = null);
			}
		}
	}
}

//showing before and after blog posts
add_filter( 'the_title', 'show_sfsi_beforeblogposts', 10, 2 );
function show_sfsi_beforeblogposts( $title )
{
	if ( is_home() ) 
	{
		$sfsi_section8=  unserialize(get_option('sfsi_section8_options',false));
		if($sfsi_section8['display_before_blogposts'] == "yes")
		{
			global $id, $post;
			$show_item_onposts = $sfsi_section8['show_item_onposts'];
			$permalink = get_permalink($post->ID);
			$post_title = $post->post_title;
        	$sfsiLikeWith="45px;";
			if($sfsi_section8['sfsi_icons_DisplayCounts']=="yes")
			{
				$show_count=1;
				$sfsiLikeWith="75px;";
			}   
			else
			{
				$show_count=0;
			} 
			$txt=(isset($sfsi_section8['sfsi_textBefor_icons']))? $sfsi_section8['sfsi_textBefor_icons'] : "Share this Post with :" ;
			$float= $sfsi_section8['sfsi_icons_alignment'];
			$icons="<div class='sfsi_Sicons' style='float:".$float."'><div style='float:left;margin:5px;'><span>".$txt."</span></div>";
			$icons.="<div class='sf_fb' style='float:left;margin:5px;width:".$sfsiLikeWith."'>".sfsi_FBlike($permalink,$show_count)."</div>";
			$icons.="<div class='sf_google'  style='float:left;margin:5px;max-width:62px;min-width:35px;'>".sfsi_googlePlus($permalink,$show_count)."</div>";
        	$icons.="<div class='sf_addthis'  style='float:left;margin:8px 5px 5px 5px;'>".sfsi_Addthis_blogpost($show_count, $permalink, $post_title)."</div>";
      		$icons.="</div>";
			if( $id && $post && $post->post_type == 'post' )
			{
				return $icons. $title;
			}
			else
			{
				return $title;
			}
		}
	}
	return $title;
}

//functionality for after posts
add_filter( 'the_content', 'show_sfsi_afterblogposts' );
function show_sfsi_afterblogposts( $content )
{
	if(is_home())
	{
		$sfsi_section8=  unserialize(get_option('sfsi_section8_options',false));
		if($sfsi_section8['display_after_blogposts'] == "yes")
		{
			global $post;
         	$show_item_onposts = $sfsi_section8['show_item_onposts'];
			$permalink = get_permalink($post->ID);
			$post_title = $post->post_title;
        	$sfsiLikeWith="45px;";
			if($sfsi_section8['sfsi_icons_DisplayCounts']=="yes")
			{
				$show_count=1;
				$sfsiLikeWith="75px;";
			}   
			else
			{
				$show_count=0;
			} 
			$txt=(isset($sfsi_section8['sfsi_textBefor_icons']))? $sfsi_section8['sfsi_textBefor_icons'] : "Share this Post with :" ;
			$float= $sfsi_section8['sfsi_icons_alignment'];
			$icons="<div class='sfsi_Sicons' style='float:".$float."'><div style='float:left;margin:5px;'><span>".$txt."</span></div>";
			$icons.="<div class='sf_fb' style='float:left;margin:5px;width:".$sfsiLikeWith."'>".sfsi_FBlike($permalink,$show_count)."</div>";
			$icons.="<div class='sf_google'  style='float:left;margin:5px;max-width:62px;min-width:35px;'>".sfsi_googlePlus($permalink,$show_count)."</div>";
        	$icons.="<div class='sf_addthis'  style='float:left;margin:8px 5px 5px 5px;'>".sfsi_Addthis_blogpost($show_count, $permalink, $post_title)."</div>";
      		$icons.="</div>";			
			return $content. $icons;
		}		
	}
	return $content;
}


//checking for the youtube username and channel id option
add_action('admin_init', 'check_sfsfiupdatedoptions');
function check_sfsfiupdatedoptions()
{
	$option4=  unserialize(get_option('sfsi_section4_options',false));
	$option8=  unserialize(get_option('sfsi_section8_options',false));
	$option5=  unserialize(get_option('sfsi_section5_options',false));
	$option6=  unserialize(get_option('sfsi_section6_options',false));
	if(!isset($option4['sfsi_youtubeusernameorid']) || $option4['sfsi_youtubeusernameorid'] == '')
	{
		$option4['sfsi_youtubeusernameorid']= 'name';
    	update_option('sfsi_section4_options',serialize($option4));
	}
	
	//options inherting from the previous version
	if(!isset($option8['float_on_page']))
	{
		$option8['float_on_page'] = $option5['sfsi_icons_float'];
		update_option('sfsi_section8_options',  serialize($option8));
	}
	if(!isset($option8['float_page_position']))
	{
		$option8['float_page_position'] = $option5['sfsi_icons_floatPosition'];
		update_option('sfsi_section8_options',  serialize($option8));
	}
	if(!isset($option8['sfsi_post_icons_size']))
	{
		$option8['sfsi_post_icons_size'] = $option5['sfsi_icons_size'];
		update_option('sfsi_section8_options',  serialize($option8));
	}
	if(!isset($option8['sfsi_post_icons_spacing']))
	{
		$option8['sfsi_post_icons_spacing'] = $option5['sfsi_icons_spacing'];
		update_option('sfsi_section8_options',  serialize($option8));
	}
	
	
	if(!isset($option8['show_item_onposts']))
	{
		$option8['show_item_onposts'] = $option6['sfsi_show_Onposts'];
		update_option('sfsi_section8_options',  serialize($option8));
	}
	if(!isset($option8['sfsi_textBefor_icons']))
	{
		$option8['sfsi_textBefor_icons'] = $option6['sfsi_textBefor_icons'];
		update_option('sfsi_section8_options',  serialize($option8));
	}
	if(!isset($option8['sfsi_icons_alignment']))
	{
		$option8['sfsi_icons_alignment'] = $option6['sfsi_icons_alignment'];
		update_option('sfsi_section8_options',  serialize($option8));
	}
	if(!isset($option8['sfsi_icons_DisplayCounts']))
	{
		$option8['sfsi_icons_DisplayCounts'] = $option6['sfsi_icons_DisplayCounts'];
		update_option('sfsi_section8_options',  serialize($option8));
	}
	
	
	
	if(!isset($option8['show_via_widget']))
	{
		$option8['show_via_widget'] = 'yes';
		update_option('sfsi_section8_options',  serialize($option8));
	}
	if(!isset($option8['place_item_manually']))
	{
		$option8['place_item_manually'] = 'no';
		update_option('sfsi_section8_options',  serialize($option8));
	}
	if(!isset($option8['display_button_type']))
	{
		$option8['display_button_type'] = 'no';
		update_option('sfsi_section8_options',  serialize($option8));
	}
	if(!isset($option8['sfsi_show_Onposts']))
	{
		$option8['sfsi_show_Onposts'] = 'no';
		update_option('sfsi_section8_options',  serialize($option8));
	}
	if(!isset($option8['display_before_posts']))
	{
		$option8['display_before_posts'] = 'no';
		update_option('sfsi_section8_options',  serialize($option8));
	}
	if(!isset($option8['display_after_posts']))
	{
		$option8['display_after_posts'] = 'no';
		update_option('sfsi_section8_options',  serialize($option8));
	}
	if(!isset($option8['display_on_postspage']))
	{
		$option8['display_on_postspage'] = 'no';
		update_option('sfsi_section8_options',  serialize($option8));
	}
	if(!isset($option8['display_on_homepage']))
	{
		$option8['display_on_homepage'] = 'no';
		update_option('sfsi_section8_options',  serialize($option8));
	}
}
?>