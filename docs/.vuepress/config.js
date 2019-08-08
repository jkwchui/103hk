
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
          title: '香港民運資訊',
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
                label: '繁體 🇭🇰🇹🇼',
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
                                ['./103/', '103 的來由'],
                                ['./help/', '我想幫手'],
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
                                // ['./obs/gear/', '建議裝備'],
                                // ['./obs/', '程序資訊'],
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
                label: '简体 🇨🇳',
                // text for the edit-on-github link
                // editLinkText: 'Edit this page on GitHub',
                // config for Service Worker 
                serviceWorker: {
                    updatePopup: {
                        message: "有可更新项目",
                        buttonText: "更新"
                    }
                },
                nav: [
                    {
                        text: '引言',
                        link: '/zh-S/intro/'
                    },
                    {
                        text: '逆权运动',
                        link: '/zh-S/act/'
                    },
                    {
                        text: '地图',
                        link: '/zh-S/map/'
                    },
                    // {
                    //     text: '民间团体',
                    //     link: '/org/'
                    // },
                    // {
                    //     text: '传媒',
                    //     link: '/media/'
                    // },
                ],
                sidebarDepth: 1,
                sidebar: {
                    '/zh-S/intro/': [
                        ['./', '引言'],
                        {
                            title: '关於网页',
                            collapsable: false,
                            children: [
                                ['./editor/', '编者的话'],
                                ['./103/', '为何103'],
                                // ['./obs/gear/', '📂 What to bring'],
                                // ['./obs/paper', '💯 Paperwork'],
                                // ['./obs/study', '✏️ How to study'],
                            ],
                        },
                    ],
                    '/zh-S/map/': [
                        {
                            title: '🗺️ 地图',
                            collapsable: false,
                            children: [
                                ['./', '地图'],
                                // ['./use/', '使用方法'],
                            ],
                        },
                        {
                            title: '地图组',
                            collapsable: false,
                            children: [
                                ['./obs/', '程序资讯'],
                                ['./obs/gear/', '建议装备'],
                            ],
                        },
                    ],
                    '/zh-S/act/': [
                        {
                            title: '逆权运动',
                            collapsable: true,
                            children: [
                                {
                                    title: '诉求',
                                    children: [
                                        ['./goal/why/', '为何抗争'],
                                        ['./goal/', '五大诉求'],
                                        ['./goal/bloom/', '遍地开花'],
                                        ['./goal/prev/', '往事回顾'],
                                        ['./goal/vocab/', '抗争词彙'],
                                    ]
                                },
                                ['./', '今期活动'],
                                // ['./prev/', '往事回顧'],
                                // ['./wall/', '各區連儂牆'],
                                {
                                    title: '参与小册子',
                                    children: [
                                        ['./info/march/', '遊行人仕'],
                                        ['./info/front/', '前线'],
                                        ['./info/promo/', '文宣'],
                                    ]
                                },
                                ['./info/help/', '我需援助']
                            ],
                        }
                    ],
                    '/zh-S/org/': [
                        {
                            title: '民间团体',
                            collapsable: true,
                            children: [
                                ['./', '民间团体'],
                                ['./religious/', ' 宗教界'],
                                ['./district/', ' 地区工作'],
                                ['./politics/', ' 政治'],
                                ['./academic/', ' 学术界'],
                                ['./prof/', ' 专业人士'],
                                // ['./prof', ' 專業人士'],
                            ],
                        }
                    ],
                    '/zh-S/media/': [
                        {
                            title: '传媒',
                            collapsable: true,
                            children: [
                                ['./', '传媒']
                            ]
                        }
                    ]
                },
            },
            '/en/': {
                // text for the language dropdown
                selectText: '💬 Languages 語言',
                // label for this locale in the language dropdown
                label: 'Eng 🇬🇧🇺🇸🇨🇦🇦🇺',
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
                        text: 'Intro',
                        link: '/en/intro/'
                    },
                    {
                        text: 'Protests',
                        link: '/en/act/'
                    },
                    {
                        text: 'Map',
                        link: '/en/map/'
                    },
                    // {
                    //     text: 'Organizations',
                    //     link: '/org/'
                    // },
                    // {
                    //     text: 'Media',
                    //     link: '/media/'
                    // },
                ],
                sidebarDepth: 1,
                sidebar: {
                    '/en/intro/': [
                        ['./', 'Intro'],
                        {
                            title: 'About 103.hk',
                            collapsable: false,
                            children: [
                                ['./editor/', "Editor's note"],
                                ['./103/', 'Why 103?'],
                                ['./help/', 'How you can help'],
                                // ['./obs/gear/', '📂 What to bring'],
                                // ['./obs/paper', '💯 Paperwork'],
                                // ['./obs/study', '✏️ How to study'],
                            ],
                        },
                    ],
                    '/en/map/': [
                        {
                            title: '🗺️ Map',
                            collapsable: false,
                            children: [
                                ['./', 'Map'],
                                // ['./use/', 'Usage'],
                            ],
                        },
                        {
                            title: 'Tech Info',
                            collapsable: false,
                            children: [
                                ['./obs/', 'How to'],
                                // ['./obs/gear/', 'Gear'],
                                ['./refl/', 'Reflections']
                            ],
                        },
                    ],
                    '/en/act/': [
                        {
                            title: 'Counterpower Movement',
                            collapsable: true,
                            children: [
                                {
                                    title: 'Our Story',
                                    children: [
                                        ['./goal/why/', 'Why we protest'],
                                        ['./goal/', 'Our Five Demands'],
                                        ['./goal/bloom/', 'Who supports us'],
                                        ['./goal/prev/', 'Reflections'],
                                        ['./goal/vocab/', 'Q & A'],
                                    ]
                                },
                                ['./', 'Current'],
                                // ['./prev/', '往事回顧'],
                                // ['./wall/', '各區連儂牆'],
                                {
                                    title: 'Manual',
                                    children: [
                                        ['./info/march/', 'Marching'],
                                        ['./info/front/', 'Occupying'],
                                        ['./info/promo/', 'Publicity'],
                                    ]
                                },
                                ['./info/help/', 'I need help']
                            ],
                        }
                    ],
                    '/en/org/': [
                        {
                            title: 'Organizations',
                            collapsable: true,
                            children: [
                                ['./', 'Organizations'],
                                ['./religious/', ' Religious'],
                                ['./district/', ' Geographical'],
                                ['./politics/', ' Political'],
                                ['./academic/', ' Academic'],
                                ['./prof/', ' Professional'],
                                // ['./prof', ' 專業人士'],
                            ],
                        }
                    ],
                    '/media/': [
                        {
                            title: 'Media',
                            collapsable: true,
                            children: [
                                ['./', 'Media']
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