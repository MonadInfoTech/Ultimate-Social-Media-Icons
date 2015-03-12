<?php
/*
Plugin Name: Ultimate Social Media Icons and Share Plugin (Facebook, Twitter, Google Plus, Instagram, Pinterest etc.)
Plugin URI: http://ultimatelysocial.com
Description: The FREE plugin allows you to add social media & share icons to your blog (esp. Facebook, Twitter, Email, RSS, Pinterest, Instagram, Google+, LinkedIn, Share-button). It offers a wide range of design options and other features. 
Author: UltimatelySocial
Author URI: http://ultimatelysocial.com
Version: 1.1.1.9
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
   $post = get_post( $post_id );
   $attachment_id = get_post_thumbnail_id($post_id);
   $description = $post->post_content;
   $description = do_shortcode($description);
   $title = get_the_title($post_id);
   $url = get_permalink($post_id);
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
	   if(isset($metadata) && !empty($metadata))
	   {
		   if(isset($metadata['sizes']['post-thumbnail']))
		   {
				$image_type = $metadata['sizes']['post-thumbnail']['mime-type'];
		   }
		   else
		   {
				$image_type = '';  
		   }
		   if(isset($metadata['width']))
		   {
		   		$width = $metadata['width'];
	   	   }
		   else
		   {
				$width = '';  
		   }
		   if(isset($metadata['height']))
		   {
		   		$height = $metadata['height'];
	   	   }
		   else
		   {
				$height = '';  
		   }
	   }
	   else
	   {
			$image_type = '';
			$width = '';
			$height = '';  
	   }
	   echo '<meta property="og:image:type" content="'.$image_type.'" />';
	   echo '<meta property="og:image:width" content="'.$width.'" />';
	   echo '<meta property="og:image:height" content="'.$height.'" />';
	   echo '<meta property="og:description" content="'.$description.'"/>';
	   echo '<meta property="og:title" content="'.$title.'" />';
	   echo '<meta property="og:url" content="'.$url.'" />';
   }
}

//functionality for before and after single posts

add_filter( 'the_content', 'show_sfsi_beforaftereposts' );
function show_sfsi_beforaftereposts( $content )
{
	$org_content = $content;
	if( is_single() )
	{
		$icons_before = '';
		$icons_after = '';
		$option8=  unserialize(get_option('sfsi_section8_options',false));
		$lineheight = $option8['sfsi_post_icons_size'];
		$lineheight = getlineheighticons($lineheight);
		$display_button_type = $option8['display_button_type'];
		$txt=(isset($option8['sfsi_textBefor_icons']))? $option8['sfsi_textBefor_icons'] : "Please follow and like us:" ;
		$float = $option8['sfsi_icons_alignment'];
		if($float == "center")
		{
			$style_parent= 'text-align: center;';
			$style = 'float:none; display: inline-block;';
		}
		else
		{
			$style_parent= '';
			$style = 'float:'.$float;
		}
		if($option8['display_before_posts'] == "yes" && $option8['show_item_onposts'] == "yes")
		{
			$icons_before .= '<div class="sfsiaftrpstwpr" style="'.$style_parent.'">';
				if($display_button_type == 'standard_buttons')
				{
					$icons_before .= sfsi_social_buttons_below($content = null);
				}
				else
				{
					$icons_before .= "<div class='sfsi_Sicons' style='".$style."'>";
						$icons_before .= "<div style='float:left;margin:0 0px; line-height:".$lineheight."px'><span>".$txt."</span></div>";
						$icons_before .= sfsi_check_posts_visiblity(0);
					$icons_before .= "</div>";
				}
			$icons_before .= '</div>';
		}
		if($option8['display_after_posts'] == "yes" && $option8['show_item_onposts'] == "yes")
		{
			$icons_after .= '<div class="sfsiaftrpstwpr"  style="'.$style_parent.'">';
				if($display_button_type == 'standard_buttons')
				{
					$icons_after .= sfsi_social_buttons_below($content = null);
				}
				else
				{
					$icons_after .= "<div class='sfsi_Sicons' style='".$style."'>";
						$icons_after .= "<div style='float:left;margin:0 0px; line-height:".$lineheight."px'><span>".$txt."</span></div>";
						$icons_after .= sfsi_check_posts_visiblity(0);
					$icons_after .= "</div>";
				}
			$icons_after .= '</div>';
		}
	}
	$content = $icons_before.'</br>'.$org_content.'</br>'.$icons_after;
	return $content;
}

//showing before and after blog posts
add_filter( 'the_content', 'show_sfsi_beforeafterblogposts' );
function show_sfsi_beforeafterblogposts( $content )
{
	if ( is_home() ) 
	{
		$icons_before = '';
		$icons_after = '';
		$sfsi_section8=  unserialize(get_option('sfsi_section8_options',false));
		$lineheight = $sfsi_section8['sfsi_post_icons_size'];
		$lineheight = getlineheighticons($lineheight);
		
		global $id, $post;
		$display_button_type = $sfsi_section8['display_button_type'];
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
		$txt=(isset($sfsi_section8['sfsi_textBefor_icons']))? $sfsi_section8['sfsi_textBefor_icons'] : "Please follow and like us:" ;
		$float = $sfsi_section8['sfsi_icons_alignment'];
		if($float == "center")
		{
			$style_parent= 'text-align: center;';
			$style = 'float:none; display: inline-block;';
		}
		else
		{
			$style_parent= '';
			$style = 'float:'.$float;
		}
		
		if($sfsi_section8['display_before_blogposts'] == "yes" && $sfsi_section8['show_item_onposts'] == "yes")
		{
			//icon selection
			$icons_before .= "<div class='sfsibeforpstwpr' style='".$style_parent."'>";
				$icons_before .= "<div class='sfsi_Sicons' style='".$style."'>";
					
					if($display_button_type == 'standard_buttons')
					{
						$icons_before .= "<div style='float:left;margin:0 0px; line-height:20px'><span>".$txt."</span></div>";
						$icons_before .= "<div class='sf_fb' style='float:left;margin:0 5px;width:".$sfsiLikeWith."'>".sfsi_FBlike($permalink,$show_count)."</div>";
						$icons_before .= "<div class='sf_google'  style='float:left;margin:0 5px;max-width:62px;min-width:35px;'>".sfsi_googlePlus($permalink,$show_count)."</div>";
						$icons_before .= "<div class='sf_addthis'  style='float:left;margin:1px 5px 0px 5px;'>".sfsi_Addthis_blogpost($show_count, $permalink, $post_title)."</div>";
					}
					else
					{
						$icons_before .= "<div style='float:left;margin:0 0px; line-height:".$lineheight."px'><span>".$txt."</span></div>";
						$icons_before .= sfsi_check_posts_visiblity(0);
					}
				$icons_before .= "</div>";
			$icons_before .= "</div>";
			//icon selection
			if( $id && $post && $post->post_type == 'post' )
			{
				$content = $icons_before.'</br>'.$content;
			}
			else
			{
				$contnet = $content;
			}
		}
		if($sfsi_section8['display_after_blogposts'] == "yes" && $sfsi_section8['show_item_onposts'] == "yes")
		{
			//icon selection
			$icons_after .= "<div class='sfsiaftrpstwpr' style='".$style_parent."'>";
				$icons_after .= "<div class='sfsi_Sicons' style='".$style."'>";
					
					if($display_button_type == 'standard_buttons')
					{
						$icons_after .= "<div style='float:left;margin:0 0px; line-height:20px'><span>".$txt."</span></div>";
						$icons_after .= "<div class='sf_fb' style='float:left;margin:0 5px;width:".$sfsiLikeWith."'>".sfsi_FBlike($permalink,$show_count)."</div>";
						$icons_after .= "<div class='sf_google'  style='float:left;margin:0 5px;max-width:62px;min-width:35px;'>".sfsi_googlePlus($permalink,$show_count)."</div>";
						$icons_after .= "<div class='sf_addthis'  style='float:left;margin:1px 5px 0px 5px;'>".sfsi_Addthis_blogpost($show_count, $permalink, $post_title)."</div>";
						
					}
					else
					{
						$icons_after .= "<div style='float:left;margin:0 0px; line-height:".$lineheight."px'><span>".$txt."</span></div>";
						$icons_after .= sfsi_check_posts_visiblity(0);
					}
				$icons_after .= "</div>";
			$icons_after .= "</div>";
			//icon selection
			$content = $content.'</br>'.$icons_after;
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
}


//getting line height for the icons
function getlineheighticons($lineheight)
{
	if( $lineheight < 16)
	{
		$lineheight = $lineheight*2;
		return $lineheight;
	}
	elseif( $lineheight >= 16 && $lineheight < 20 )
	{
		$lineheight = $lineheight+10;
		return $lineheight;
	}
	elseif( $lineheight >= 20 && $lineheight < 28 )
	{
		$lineheight = $lineheight+3;
		return $lineheight;
	}
	elseif( $lineheight >= 28 && $lineheight < 40 )
	{
		$lineheight = $lineheight+4;
		return $lineheight;
	}
	elseif( $lineheight >= 40 && $lineheight < 50 )
	{
		$lineheight = $lineheight+5;
		return $lineheight;
	}
	$lineheight = $lineheight+6;
	return $lineheight;
}
?>