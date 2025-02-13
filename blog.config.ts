import type { BundledLanguage, BundledTheme } from 'shiki'
import type { FeedEntry } from '~/types/feed'
import { zhCN } from 'date-fns/locale'

// 存储 nuxt.config 和 app.config 共用的配置
const blogConfig = {
    title: '克喵Kemeow',
    subtitle: '致力于分享资源和生活的博客~',
    description: '克喵的个人博客，分享技资源与生活。“折腾不止，摸鱼生活——摸门🙏🏻”。这个博客记录了我在生活和资源分享中的点滴经历，充满启发与思考。网站界面简洁美观，内容丰富实用，人气互动活跃，涵盖了编程、生活、学习等多个领域，为读者提供了卓越的阅读体验。',
    author: {
        name: '克喵爱吃卤面',
        avatar: '/img/touxiang.jpg',
        email: 'kemiao@kmblog.icu',
        homepage: 'https://github.com/Kemeow815',
    },
    copyright: {
        abbr: 'CC BY-NC-SA 4.0',
        name: '署名-非商业性使用-相同方式共享 4.0 国际',
        url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans',
    },
    favicon: '/img/touxiang.jpg',
    language: 'zh-CN',
    tgGroup: 'https://t.me/kemiao_me',
    timeEstablished: '2025-02-11',
    timezone: 'Asia/Shanghai',
    url: 'https://blog.kemiaofx.top/',

    feed: {
        limit: 50,
    },

    hideContentPrefixes: ['/posts'],

    imageDomains: [
        // 自动启用本域名的 Nuxt Image
        // 'www.zhilu.cyou',
        // '7.isyangs.cn',
    ],

    robotsNotIndex: ['/preview', '/previews/*'],

    scripts: [
        // 自己部署的 umami 统计服务
        { 'src': 'https://cloud.umami.is/script.js', 'data-website-id': '6aeee90d-4cea-4484-82bd-956217f7d6eb', 'defer': true },
        // Cloudflare Insights 统计服务
        { 'src': 'https://static.cloudflareinsights.com/beacon.min.js', 'data-cf-beacon': '{"token": "97a4fe32ed8240ac8284e9bffaf03962"}', 'defer': true },
    ],

    // 用于 Shiki、Plain Shiki 引入代码高亮
    // 同时用于显示代码块语言对应的 Iconify Catppuccin 图标
    shiki: {
        bundledLangs: <BundledLanguage[]>['bat', 'log', 'sh', 'powershell'],
        langs: <BundledLanguage[]>['bat', 'c', 'cpp', 'css', 'diff', 'html', 'ini', 'java', 'js', 'json', 'log', 'makefile', 'matlab', 'md', 'mdc', 'powershell', 'python', 'sh', 'sql', 'ssh-config', 'toml', 'ts', 'tsx', 'vb', 'vue', 'xml', 'yaml'],
        themes: <BundledTheme[]>['catppuccin-latte', 'one-dark-pro'],
        defaultTheme: <BundledTheme>'catppuccin-latte',
        darkTheme: <BundledTheme>'one-dark-pro',
    },

    twikoo: {
        js: 'https://source.kemiaofx.top/twikoo/twikoo.all.min.js',
        envId: 'https://twikoo.kemiaofx.top/',
        preload: 'https://twikoo.kemiaofx.top/',
    },
}

export const dateLocale = zhCN

// 用于生成 OPML 和友链页面配置
export const myFeed = <FeedEntry>{
    author: blogConfig.author.name,
    sitenick: '摸鱼处',
    title: blogConfig.title,
    desc: blogConfig.subtitle || blogConfig.description,
    link: blogConfig.url,
    feed: new URL('/atom.xml', blogConfig.url).toString(),
    icon: blogConfig.favicon,
    avatar: blogConfig.author.avatar,
    archs: ['Nuxt', 'Vercel'],
    date: blogConfig.timeEstablished,
    comment: '这是我自己',
}

export default blogConfig
