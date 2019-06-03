<?php

$info = [
    // Available colors and color labels used in theme.
    'fields' => [
        'primary' => t('Primary Color'),
        'secondary' => t('Secondary Color'),
        'accent' => t('Accent Color'),
        'lightgrey' => t('Light Grey'),
        'darkgrey' => t('Dark Grey'),
        'textprimary' => t('Text Primary'),
        'textlight' => t('Text Light'),
        'background' => t('Background Color')
    ],
    // Pre-defined color schemes.
    'schemes' => [
        'default' => [
            'title' => t('Default'),
            'colors' => [
                'primary' => '#330072',
                'secondary' => '#924da7',
                'accent' => '#f2a900',
                'lightgrey' => '#f8f8f8',
                'darkgrey' => '#e5e5e5',
                'textprimary' => '#000000',
                'textlight' => '#777777',
                'background' => '#ffffff',
            ],
        ],
        'red' => [
            'title' => t('Blue-Red'),
            'colors' => [
                'primary' => '#2196f3',
                'secondary' => '#ff3d00',
                'accent' => '#b22a00',
                'lightgrey' => '#f8f8f8',
                'darkgrey' => '#e5e5e5',
                'textprimary' => '#000000',
                'textlight' => '#777777',
                'background' => '#ffffff'
            ]
        ]
    ]
];

// CSS files (excluding @import) to rewrite with new color scheme.
$info['css'] = ['css/colors.css'];