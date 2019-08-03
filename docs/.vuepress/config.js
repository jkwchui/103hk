
const moment = require('moment');
const path = require("path");

module.exports = {
    title: '香港民運資訊',
    description: '',
    docsDir: 'docs',
    transpileDependencies: [
        'vue-echarts',
        'resize-detector'
      ],
    head: [
        ['link',
            {
                rel: 'icon',
                href: '/logo.png'
            }
        ],
    ],
    configureWebpack: {
        resolve: {
            alias: {
                '@alias': '../../../docs/image'
            }
        }
    },
    locales: {
        // The key is the path for the locale to be nested under.
        // As a special case, the default locale can use '/' as its path.
        '/': {
          lang: 'zh-Hant', // this will be set as the lang attribute on <html>
          title: '香港民主運動',
          description: ''
        },
        '/zh-S/': {
          lang: 'zh-Hans',
          title: '香港民主运动',
          description: ''
        },
        '/en/': {
            lang: 'en',
            title: 'HK Democracy',
            description: ''
        },
    },
    themeConfig: {
        locales: {
            '/': {
                // text for the language dropdown
                selectText: '💬 語言 Languages',
                // label for this locale in the language dropdown
                label: '🇭🇰🇹🇼 繁體',
                // text for the edit-on-github link
                // editLinkText: 'Edit this page on GitHub',
                // config for Service Worker 
                serviceWorker: {
                    updatePopup: {
                        message: "有可更新項目",
                        buttonText: "更新"
                    }
                },
                nav: [
                    {
                        text: '引言',
                        link: '/intro/'
                    },
                    {
                        text: '逆權運動',
                        link: '/act/'
                    },
                    {
                        text: '地圖',
                        link: '/map/'
                    },
                    // {
                    //     text: '民間團體',
                    //     link: '/org/'
                    // },
                    // {
                    //     text: '傳媒',
                    //     link: '/media/'
                    // },
                ],
                sidebarDepth: 1,
                sidebar: {
                    '/intro/': [
                        ['./', '引言'],
                        {
                            title: '關於網頁',
                            collapsable: false,
                            children: [
                                ['./editor/', '編者的話'],
                                ['./103/', '為何103'],
                                // ['./obs/gear/', '📂 What to bring'],
                                // ['./obs/paper', '💯 Paperwork'],
                                // ['./obs/study', '✏️ How to study'],
                            ],
                        },
                    ],
                    '/map/': [
                        {
                            title: '🗺️ 地圖',
                            collapsable: false,
                            children: [
                                ['./', '地圖'],
                                // ['./use/', '使用方法'],
                            ],
                        },
                        {
                            title: '地圖組',
                            collapsable: false,
                            children: [
                                ['./obs/', '程序資訊'],
                                ['./obs/gear/', '裝備'],
                            ],
                        },
                    ],
                    '/act/': [
                        {
                            title: '逆權運動',
                            collapsable: true,
                            children: [
                                {
                                    title: '訴求',
                                    children: [
                                        ['./goal/why/', '為何抗爭'],
                                        ['./goal/', '五大訴求'],
                                        ['./goal/bloom/', '遍地開花'],
                                        ['./goal/prev/', '往事回顧'],
                                        ['./goal/vocab/', '抗爭詞彙'],
                                    ]
                                },
                                ['./', '今期活動'],
                                // ['./prev/', '往事回顧'],
                                // ['./wall/', '各區連儂牆'],
                                {
                                    title: '參與小冊子',
                                    children: [
                                        ['./info/march/', '遊行人仕'],
                                        ['./info/front/', '前線'],
                                        ['./info/promo/', '文宣'],
                                    ]
                                },
                                ['./info/help/', '我要援助']
                            ],
                        }
                    ],
                    '/org/': [
                        {
                            title: '民間團體',
                            collapsable: true,
                            children: [
                                ['./', '民間團體'],
                                ['./religious/', ' 宗教界'],
                                ['./district/', ' 地區工作'],
                                ['./politics/', ' 政治'],
                                ['./academic/', ' 學術界'],
                                ['./prof/', ' 專業人士'],
                                // ['./prof', ' 專業人士'],
                            ],
                        }
                    ],
                    '/media/': [
                        {
                            title: '傳媒',
                            collapsable: true,
                            children: [
                                ['./', '傳媒']
                            ]
                        }
                    ]
                },
            },
            '/zh-S/': {
                // text for the language dropdown
                selectText: '💬 語言 Languages',
                // label for this locale in the language dropdown
                label: '🇨🇳 简体',
                // text for the edit-on-github link
                // editLinkText: 'Edit this page on GitHub',
                // config for Service Worker 
                serviceWorker: {
                    updatePopup: {
                        message: "有可更新項目",
                        buttonText: "更新"
                    }
                },
                nav: [
                    {
                        text: '引言',
                        link: '/zh-S/intro/'
                    },
                    {
                        text: '逆權運動',
                        link: '/zh-S/act/'
                    },
                    {
                        text: '地圖',
                        link: '/zh-S/map/'
                    },
                    // {
                    //     text: '民間團體',
                    //     link: '/org/'
                    // },
                    // {
                    //     text: '傳媒',
                    //     link: '/media/'
                    // },
                ],
                sidebarDepth: 1,
                sidebar: {
                    '/zh-S/intro/': [
                        ['./', '引言'],
                        {
                            title: '關於網頁',
                            collapsable: false,
                            children: [
                                ['./editor/', '編者的話'],
                                ['./103/', '為何103'],
                                // ['./obs/gear/', '📂 What to bring'],
                                // ['./obs/paper', '💯 Paperwork'],
                                // ['./obs/study', '✏️ How to study'],
                            ],
                        },
                    ],
                    '/zh-S/map/': [
                        {
                            title: '🗺️ 地圖',
                            collapsable: false,
                            children: [
                                ['./', '地圖'],
                                // ['./use/', '使用方法'],
                            ],
                        },
                        {
                            title: '地圖組',
                            collapsable: false,
                            children: [
                                ['./obs/', '程序資訊'],
                                ['./obs/gear/', '裝備'],
                            ],
                        },
                    ],
                    '/zh-S/act/': [
                        {
                            title: '逆權運動',
                            collapsable: true,
                            children: [
                                {
                                    title: '訴求',
                                    children: [
                                        ['./goal/why/', '為何抗爭'],
                                        ['./goal/', '五大訴求'],
                                        ['./goal/bloom/', '遍地開花'],
                                        ['./goal/prev/', '往事回顧'],
                                        ['./goal/vocab/', '抗爭詞彙'],
                                    ]
                                },
                                ['./', '今期活動'],
                                // ['./prev/', '往事回顧'],
                                // ['./wall/', '各區連儂牆'],
                                {
                                    title: '參與小冊子',
                                    children: [
                                        ['./info/march/', '遊行人仕'],
                                        ['./info/front/', '前線'],
                                        ['./info/promo/', '文宣'],
                                    ]
                                },
                                ['./info/help/', '我要援助']
                            ],
                        }
                    ],
                    '/zh-S/org/': [
                        {
                            title: '民間團體',
                            collapsable: true,
                            children: [
                                ['./', '民間團體'],
                                ['./religious/', ' 宗教界'],
                                ['./district/', ' 地區工作'],
                                ['./politics/', ' 政治'],
                                ['./academic/', ' 學術界'],
                                ['./prof/', ' 專業人士'],
                                // ['./prof', ' 專業人士'],
                            ],
                        }
                    ],
                    '/zh-S/media/': [
                        {
                            title: '傳媒',
                            collapsable: true,
                            children: [
                                ['./', '傳媒']
                            ]
                        }
                    ]
                },
            },
            '/en/': {
                // text for the language dropdown
                selectText: '💬 Languages 語言',
                // label for this locale in the language dropdown
                label: '🇬🇧🇺🇸🇨🇦🇦🇺 Eng',
                // text for the edit-on-github link
                // editLinkText: 'Edit this page on GitHub',
                // config for Service Worker 
                serviceWorker: {
                    updatePopup: {
                        message: "Updates available",
                        buttonText: "Refresh"
                    }
                },
                nav: [
                    {
                        text: 'Introduction',
                        link: '/en/intro/'
                    },
                    {
                        text: 'Against Tyranny',
                        link: '/en/act/'
                    },
                    {
                        text: 'Map',
                        link: '/en/map/'
                    },
                    // {
                    //     text: '民間團體',
                    //     link: '/org/'
                    // },
                    // {
                    //     text: '傳媒',
                    //     link: '/media/'
                    // },
                ],
                sidebarDepth: 1,
                sidebar: {
                    '/en/intro/': [
                        ['./', '引言'],
                        {
                            title: '關於網頁',
                            collapsable: false,
                            children: [
                                ['./editor/', '編者的話'],
                                ['./103/', '為何103'],
                                // ['./obs/gear/', '📂 What to bring'],
                                // ['./obs/paper', '💯 Paperwork'],
                                // ['./obs/study', '✏️ How to study'],
                            ],
                        },
                    ],
                    '/en/map/': [
                        {
                            title: '🗺️ 地圖',
                            collapsable: false,
                            children: [
                                ['./', '地圖'],
                                // ['./use/', '使用方法'],
                            ],
                        },
                        {
                            title: '地圖組',
                            collapsable: false,
                            children: [
                                ['./obs/', '程序資訊'],
                                ['./obs/gear/', '裝備'],
                            ],
                        },
                    ],
                    '/en/act/': [
                        {
                            title: '逆權運動',
                            collapsable: true,
                            children: [
                                {
                                    title: '訴求',
                                    children: [
                                        ['./goal/why/', '為何抗爭'],
                                        ['./goal/', '五大訴求'],
                                        ['./goal/bloom/', '遍地開花'],
                                        ['./goal/prev/', '往事回顧'],
                                        ['./goal/vocab/', '抗爭詞彙'],
                                    ]
                                },
                                ['./', '今期活動'],
                                // ['./prev/', '往事回顧'],
                                // ['./wall/', '各區連儂牆'],
                                {
                                    title: '參與小冊子',
                                    children: [
                                        ['./info/march/', '遊行人仕'],
                                        ['./info/front/', '前線'],
                                        ['./info/promo/', '文宣'],
                                    ]
                                },
                                ['./info/help/', '我要援助']
                            ],
                        }
                    ],
                    '/en/org/': [
                        {
                            title: '民間團體',
                            collapsable: true,
                            children: [
                                ['./', '民間團體'],
                                ['./religious/', ' 宗教界'],
                                ['./district/', ' 地區工作'],
                                ['./politics/', ' 政治'],
                                ['./academic/', ' 學術界'],
                                ['./prof/', ' 專業人士'],
                                // ['./prof', ' 專業人士'],
                            ],
                        }
                    ],
                    '/media/': [
                        {
                            title: '傳媒',
                            collapsable: true,
                            children: [
                                ['./', '傳媒']
                            ]
                        }
                    ]
                },
            },
        },
        // repo: 'jkwchui/chem-jon-hk',
        displayAllHeaders: true,
    },
    plugins: [
        [
            '@vuepress/last-updated',
            {
                transformer: (timestamp, lang) => {
                    // Don't forget to install moment yourself
                    // const moment = require('moment')
                    moment.locale(lang)
                    return moment(timestamp).fromNow()
                }
            }
        ],
        // [
        //     '@vuepress/blog',
        //     {
        //         postsDir: '../jon/_posts'
        //     }
        // ],
        // ['@vuepress/register-components',
        //     {
        //         componentsDir: [
        //             '.'
        //         ]
        //     }
        // ],
        '@vuepress/active-header-links',
        // '@vuepress/medium-zoom',
        '@vuepress/back-to-top',
        {
            '@vuepress/pwa': {
                serviceWorker: true,
                updatePopup: {
                    message: "有可更新項目",
                    buttonText: "更新頁面"
                }
            }
        },
        [ 
            '@vuepress/google-analytics',
            {
              'ga': 'UA-134636637-2' // UA-00000000-0
            }
        ],
        {
            '@vuepress/medium-zoom': {
                selector: 'img.zoom-custom-imgs',
                // medium-zoom options here
                // See: https://github.com/francoischalifour/medium-zoom#options
                options: {
                    margin: 16
                }
            }
        },
        [
            'vuepress-plugin-smooth-scroll',
            { 'vuepress-plugin-smooth-scroll': true }
        ],
        // [
        //     '@goy/svg-icons',
        //     {
        //         // Specific the folder with absolute path
        //         // where your gonna put svg icons in
        //         svgsDir: `${__dirname}/svgs`
        //     }
        // ],
        'tabs'
        // 'flowchart',
    ],
    markdown: {
        // options for markdown-it-anchor
        anchor: {
            permalink: true
        },
        // options for markdown-it-toc
        toc: {
            includeLevel: [1, 2, 3, 4],
            forceFullToC: true
        },
        extendMarkdown: md => {
            // use more markdown-it plugins!
            md.use(require('markdown-it-checkbox'), {
                divWrap: true,
                divClass: 'cb',
                idPrefix: 'cbx_'
            })
            md.use(require('markdown-it-footnote'))
            md.use(require('markdown-it-attrs'))
            md.use(require('markdown-it-abbr'))
            md.use(require('markdown-it-video'), {
                youtube: {
                    width: 640,
                    height: 390
                },
                vimeo: {
                    width: 640,
                    height: 400
                },
                vine: {
                    width: 600,
                    height: 600,
                    embed: 'simple'
                },
                prezi: {
                    width: 550,
                    height: 400
                }
            })
            md.use(require('markdown-it-sup'))
            md.use(require('markdown-it-sub'))
            md.use(require('markdown-it-imsize'), { autofill: true })
            // md.use(require('markdown-it-center-text'))
            md.use(require('markdown-it-implicit-figures'), {
                dataType: true,  // <figure data-type="image">, default: false
                figcaption: true,  // <figcaption>alternative text</figcaption>, default: false
                tabindex: true, // <figure tabindex="1+n">..., default: false
                link: true
            })
        }
    }
};