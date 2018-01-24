<?php
function bacon_enqueue_block_editor_assets() {
    $dir = dirname( __FILE__ );
    $block_js = '/block.build.js';
    $editor_css = '/editor.css';
    wp_enqueue_script( 'guten-bacon', plugins_url( $block_js, __FILE__ ), array(
        'wp-blocks',
        'wp-i18n',
        'wp-element',
    ), filemtime( "$dir/$block_js" ) );

    wp_enqueue_style( 'guten-bacon-css', plugins_url( $editor_css, __FILE__ ), array(
        'wp-blocks',
    ), filemtime( "$dir/$editor_css" ) );
}
add_action( 'enqueue_block_editor_assets', 'bacon_enqueue_block_editor_assets' );