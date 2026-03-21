<?php
/**
 * ecocleanlp 子テーマ functions.php
 */

/**
 * 換気ダクトLPページ専用: CSS・JS を条件付きで読み込む
 * ページID 1460 のフロントエンドのみに限定
 */
add_action('wp_enqueue_scripts', function () {
    if (!is_page(1460)) return;

    wp_enqueue_style(
        'kanki-dakuto-lp-style',
        get_stylesheet_directory_uri() . '/css/kanki_dakuto_lp.css',
        [],
        filemtime(get_stylesheet_directory() . '/css/kanki_dakuto_lp.css')
    );
    wp_enqueue_script(
        'kanki-dakuto-lp-script',
        get_stylesheet_directory_uri() . '/js/kanki_dakuto_lp.js',
        [],
        filemtime(get_stylesheet_directory() . '/js/kanki_dakuto_lp.js'),
        true
    );
});

/**
 * ページ1460では SWELL のスタイルをすべて除去
 * ログイン中はスキップ（Gutenbergエディターの REST API 認証を保護するため）
 */
add_action('wp_print_styles', function () {
    if (!is_page(1460) || is_user_logged_in()) return;

    global $wp_styles;
    $keep = ['kanki-dakuto-lp-style', 'admin-bar'];
    foreach ($wp_styles->queue as $handle) {
        if (!in_array($handle, $keep, true)) {
            wp_dequeue_style($handle);
        }
    }
}, 999);

/**
 * ページ1460では SWELL の JS もすべて除去
 * ログイン中はスキップ（Gutenbergエディターの REST API 認証を保護するため）
 */
add_action('wp_print_scripts', function () {
    if (!is_page(1460) || is_user_logged_in()) return;

    global $wp_scripts;
    $keep = ['kanki-dakuto-lp-script'];
    foreach ($wp_scripts->queue as $handle) {
        if (!in_array($handle, $keep, true)) {
            wp_dequeue_script($handle);
        }
    }
}, 999);
