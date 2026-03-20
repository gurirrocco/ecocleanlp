<?php
/**
 * SWELL 子テーマ functions.php
 * エンクリーン 換気ダクトLP
 */

// 親テーマ（SWELL）のスタイルを読み込む
add_action( 'wp_enqueue_scripts', 'ecocleanlp_enqueue_styles' );
function ecocleanlp_enqueue_styles() {
    wp_enqueue_style(
        'swell-parent-style',
        get_template_directory_uri() . '/style.css'
    );
}
