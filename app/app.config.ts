import type { ArticleOrderType } from './types/article'
import type { Nav, NavItem } from '~/types/nav'
import blogConfig from '~~/blog.config'

export default defineAppConfig({
    // 将 blog.config.ts 中的配置项复制到 appConfig
    ...blogConfig,

    article: {
        categories: <{ [key: string]: { icon: string, color?: string } }>{
            经验分享: { icon: 'ph:mouse-bold', color: '#3af' },
            生活: { icon: 'ph:shooting-star-bold', color: '#3ba' },
            代码: { icon: 'ph:code-bold', color: '#77f' },
            技术分享: { icon: 'ph:share-network-bold', color: '#f3a' },
            未分类: { icon: 'ph:folder-dotted-bold' },
        },
        defaultCategoryIcon: 'ph:folder-bold',
        order: {
            date: '创建日期',
            updated: '更新日期',
            // title: '标题',
        },
        // 需要同时修改上方分类图标对应的键名
        uncategorizedLabel: '未分类',
    },

    content: {
        codeblockCollapsibleRows: 16,
        excerpt: {
            animation: true,
            caret: '_',
        },
    },

    footer: {
        copyright: `© ${new Date().getFullYear()} ${blogConfig.author.name}`,
        iconNav: <NavItem[]>[
            { icon: 'ph:house-bold', text: '个人主页', url: blogConfig.author.homepage },
            { icon: 'mdi:telegram', text: '频道', url: 'https://t.me/kemiaofx_me' },
            { icon: 'ph:github-logo-bold', text: 'GitHub: 克喵Kemeow', url: 'https://github.com/kmfx' },
            { icon: 'ph:rss-simple-bold', text: 'Atom订阅', url: '/atom.xml' },
            { icon: 'ph:subway-bold', text: '开往', url: 'https://www.travellings.cn/go-by-clouds.html' },
        ],
        nav: <Nav>[
            {
                title: '探索',
                items: [
                    { icon: 'ph:rss-simple-bold', text: 'Atom订阅', url: '/atom.xml' },
                    { icon: 'ph:subway-bold', text: '开往', url: 'https://www.travellings.cn/go-by-clouds.html' },
                    { icon: 'ph:flying-saucer-bold', text: '异次元旅行', url: 'https://travel.moe/go.html?travel=on' },
                ],
            },
            {
                title: '社交',
                items: [
                    { icon: 'ph:github-logo-bold', text: '克喵Kemeow', url: 'https://github.com/kmfx' },
                    { icon: 'mdi:telegram', text: '电报频道', url: 'https://t.me/kemiaofx_me' },
                    { icon: 'ph:envelope-simple-bold', text: blogConfig.author.email, url: `mailto:${blogConfig.author.email}` },
                ],
            },
            {
                title: '信息',
                items: [
                    { icon: 'simple-icons:nuxtdotjs', text: 'Nuxt博客已开源', url: 'https://github.com/L33Z22L11/blog-v3' },
                    { icon: 'ph:swatches-bold', text: '主题灵感源自Stellar', url: 'htts://blog.zhilu.cyou/theme' },
                    { icon: 'ph:envelope-simple-bold', text: blogConfig.author.email, url: `mailto:${blogConfig.author.email}` },
                ],
            },
        ],
        message: '',
    },

    header: {
        logo: '/img/blog1actavor.jpg',
        /** 展示标题，否则展示纯 Logo */
        showTitle: true,
        subtitle: blogConfig.subtitle,
        emojiTail: ['📄', '🦌', '🙌', '🐟', '🏖️'],
    },

    pagination: {
        perPage: 10,
        sortOrder: <ArticleOrderType>'date',
        /** 允许（普通/预览/归档）文章列表正序 */
        allowAscending: false,
    },

    nav: <Nav>[
        {
            title: '',
            items: [
                { icon: 'ph:files-bold', text: '文章', url: '/' },
                { icon: 'ph:link-bold', text: '友链', url: '/link' },
                { icon: 'ph:archive-bold', text: '归档', url: '/archive' },
            ],
        },
    ],

    seasonal: {
        widgetBackground: 'https://wsrv.nl/?url=i2.hdslb.com/bfs/archive/46165212e09842103752c453d7987a470059760b.jpg@320w',
        emoji: '🧧',
    },

    stats: {
        /** 归档页面每年标题对应的年龄 */
        birthYear: 2003,
        /** BlogStats 组件的预置文本 */
        wordCount: '约10万',
    },

    themes: {
        light: {
            icon: 'ph:sun-bold',
            tip: '浅色模式',
        },
        system: {
            icon: 'ph:monitor-bold',
            tip: '跟随系统',
        },
        dark: {
            icon: 'ph:moon-bold',
            tip: '深色模式',
        },
    },
})
