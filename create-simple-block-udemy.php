<?php
/**
 * Plugin Name:       Create Simple Block Udemy
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.6
 * Requires PHP:      7.2
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       create-simple-block-udemy
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

// echo ABSPATH; // C:\Users\USER\Local Sites\test-tanvir\app\public/
// echo __DIR__;   // C:\Users\USER\Local Sites\test-tanvir\app\public\wp-content\plugins\create-simple-block-udemy


/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_create_simple_block_udemy_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_create_simple_block_udemy_block_init' );



