<?php
/**
 * ecocleanlp 子テーマ functions.php
 */

/**
 * 換気ダクトLPページ専用: CSS・JS を条件付きで読み込む
 * is_page_template() で対象ページを限定し、他ページへの干渉を防ぐ
 */
add_action('wp_enqueue_scripts', function () {
    if (is_page(1460)) {
        // LP専用CSS（バージョンはファイルの更新日時で自動更新）
        wp_enqueue_style(
            'kanki-dakuto-lp-style',
            get_stylesheet_directory_uri() . '/css/kanki_dakuto_lp.css',
            [],
            filemtime(get_stylesheet_directory() . '/css/kanki_dakuto_lp.css')
        );
        // LP専用JS（フッターで読み込み、defer相当）
        wp_enqueue_script(
            'kanki-dakuto-lp-script',
            get_stylesheet_directory_uri() . '/js/kanki_dakuto_lp.js',
            [],
            filemtime(get_stylesheet_directory() . '/js/kanki_dakuto_lp.js'),
            true
        );
    } else {
        // 通常ページ：親テーマ（SWELL）のスタイルを読み込む
        wp_enqueue_style('swell-style', get_template_directory_uri() . '/style.css');
    }
});

/**
 * 換気ダクトLPページでは SWELL のスタイルをすべて除去
 * LP独自CSSで完結するため、親テーマの干渉を排除する
 */
add_action('wp_print_styles', function () {
    if (!is_page(1460)) return;

    global $wp_styles;
    $keep = ['kanki-dakuto-lp-style', 'admin-bar'];
    foreach ($wp_styles->queue as $handle) {
        if (!in_array($handle, $keep, true)) {
            wp_dequeue_style($handle);
        }
    }
}, 999);

/**
 * 換気ダクトLPページでは SWELL の JS もすべて除去
 * LP独自JSのみ実行し、不要なスクリプトによる干渉を防ぐ
 */
add_action('wp_print_scripts', function () {
    if (!is_page(1460)) return;

    global $wp_scripts;
    $keep = ['kanki-dakuto-lp-script'];
    foreach ($wp_scripts->queue as $handle) {
        if (!in_array($handle, $keep, true)) {
            wp_dequeue_script($handle);
        }
    }
}, 999);
