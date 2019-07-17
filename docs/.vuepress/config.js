
const moment = require('moment');
const path = require("path");

module.exports = {
    title: '香港民運資訊',
    description: '',
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
    themeConfig: {
        docsDir: 'docs',
        // repo: 'jkwchui/chem-jon-hk',
        nav: [
            // {
            //     text: 'Home',
            //     link: '/'
            // },
            {
                text: '逆權運動',
                link: '/act/'
            },
            {
                text: '地圖',
                link: '/map/'
            },
            {
                text: '民間團體',
                link: '/org/'
            },
            {
                text: '傳媒',
                link: '/media/'
            },
            // {
            //     text: 'Sandbox',
            //     link: '/sandbox/'
            // },
            // {
            //     text: 'BabylonJS',
            //     link: '/babylonjs/'
            // },
            // {
            //     text: 'pdf',
            //     link: '/pdf/'
            // },
            // {
            //     text: 'Syllabus',
            //     link: '/Syllabus/'
            // },
            // {
            //     text: 'Table',
            //     link: '/Table/'
            // }
            // {
            //     text: 'Admin',
            //     link: '/admin/#/',
            // }
            // {
            //     text: 'Languages',
            //     items: [{
            //             text: 'Chinese',
            //             link: '/language/chinese/'
            //         },
            //         {
            //             text: 'Japanese',
            //             link: '/language/japanese/'
            //         }
            //     ]
            // }
        ],
        sidebarDepth: 0,
        sidebar: {
            '/map/': [
                ['./', '7.21 中環 Central'],
                {
                    title: '👁️ 地圖組 Observers',
                    collapsable: false,
                    children: [
                        ['./obs/', 'How to'],
                        ['./obs/gear/', '📂 What to bring'],
                        // ['./obs/paper', '💯 Paperwork'],
                        // ['./obs/study', '✏️ How to study'],
                    ],
                },
            ],
            '/act/': [
                {
                    title: '逆權運動',
                    collapsable: true,
                    children: [
                        ['./goal/', ' 訴求'],
                        ['./', '今期活動'],
                        ['./prev/', ' 已住事件'],
                        {
                            title: '參與小冊子',
                            children: [
                                ['./info/march/', '遊行人仕'],
                                ['./info/front/', '前線']
                            ]
                        },
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
        // [ 
        //     '@vuepress/google-analytics',
        //     {
        //       'ga': 'UA-134636637-1' // UA-00000000-0
        //     }
        // ],
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