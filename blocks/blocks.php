<?php
function learn_gutenberg_ex2_react_enqueue_block_editor_assets() {
    $dir = dirname( __FILE__ );
    $block_js = '/block.build.js';
    $editor_css = '/editor.css';
    wp_enqueue_script( 'learn-gutenberg/ex2-react', plugins_url( $block_js, __FILE__ ), array(
        'wp-blocks',
        'wp-i18n',
        'wp-element',
    ), filemtime( "$dir/$block_js" ) );

    wp_enqueue_style( 'learn-gutenberg/ex2-react', plugins_url( $editor_css, __FILE__ ), array(
        'wp-blocks',
    ), filemtime( "$dir/$editor_css" ) );
}
add_action( 'enqueue_block_editor_assets', 'learn_gutenberg_ex2_react_enqueue_block_editor_assets' );