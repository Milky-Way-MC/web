import { defineConfig } from 'vitepress'

export default defineConfig({
    transformHead({ assets }) {
        const fontFiles = assets.filter(file =>
            /(CraftMine)\-[A-z]*\.[\w-]+\.ttf/.test(file)
        )

        return fontFiles.map(file => {
            return [
                'link',
                {
                    rel: 'preload',
                    href: file,
                    as: 'font',
                    type: 'font/ttf',
                    crossorigin: ''
                }
            ]
        })
    },

    title: "Milky Way",
    description: "Приватный Minecraft сервер",
    lang: "ru-RU",

    lastUpdated: true,

    themeConfig: {
        search: {
            provider: 'local'
        },

        nav: [
            { text: 'Главная', link: '/' },
            { text: 'Вики', link: '/wiki/index' }
        ],

        sidebar: [
            {
                text: 'Информация',
                items: [
                    { text: 'О сервере', link: '/' },
                    { text: 'Присоединится', link: '/wiki/join' },
                    { text: 'Вики', link: '/wiki/index' }
                ]
            },
            {
                text: 'Правила',
                items: [
                    { text: 'Основы Правил', link: '/wiki/rules/index' },
                    { text: 'Глава 1. Правила Общения', link: '/wiki/rules/chapter-1' },
                    { text: 'Глава 2. Правила Сервера', link: '/wiki/rules/chapter-2' },
                    { text: 'Глава 3. Правила Игры', link: '/wiki/rules/chapter-3' },
                    { text: 'Меры пресечения', link: '/wiki/rules/punishment' }
                ]
            },
            {
                items: [
                    { text: 'Запрещённые модификации', link: '/wiki/rules/prohibited-mods' },
                    { text: 'Запрещённые постройки', link: '/wiki/rules/prohibited-buildings' },
                ]
            },
            {
                text: 'Сообщество',
                items: [
                    { text: 'Архив построек', link: '/wiki/community/buildings-archive' },
                    { text: 'Администрация', link: '/wiki/community/admins' },
                    { text: 'Судопроизводство', link: '/wiki/community/court' },
                    { text: 'Территории', link: '/wiki/community/plots' },
                    { text: 'Торговля', link: '/wiki/community/trading' }
                ]
            },
            {
                items: [
                    { text: 'Состояние сервера', link: '/wiki/server-status' }
                ]
            }
        ],

        socialLinks: [
            { icon: 'discord', link: 'https://discord.gg/VKPBaTFV6p' }
        ],

        footer: {
            message: 'Мы не имеем никакого отношения к компании Microsoft и Mojang Studios.',
            copyright: 'Осуществляемая нами деятельность не является коммерческой.'
        },

        outline: {
            label: 'Содержание:'
        },

        docFooter: {
            prev: 'Предыдущая страница',
            next: 'Следующая страница'
        },

        darkModeSwitchLabel: "Внешний вид",
        lightModeSwitchTitle: "Переключить на светлую тему",
        darkModeSwitchTitle: "Переключить на тёмную тему",

        sidebarMenuLabel: "Меню",
        returnToTopLabel: "Вернутся наверх",

        notFound: {
            title: "Страница не найдена",
            quote: "",
            linkText: "Вернутся на главную"
        },

        lastUpdated: {
            text: "Последнее обновление",
            formatOptions: {
                dateStyle: 'long',
                timeStyle: 'long'
            }
        }
    }
})