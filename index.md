---
layout: home

hero:
  name: "Milky Way"
  tagline: "Java Edition 26.2"
  actions:
    - theme: brand
      text: Присоединится
      link: /wiki/join
    - theme: alt
      text: Вики
      link: /wiki/index
  image:
    src: /logo.gif
    alt: Milky Way

features:
  - 
    title: Уникальные механики
    details: Собственные плагины, дата-паки и ресурс-пак*.
  - 
    title: Внутренняя история
    details: Загадки, локальные ивенты и сюжет.
  - 
    title: Бесплатный доступ
    details: Проходка оформляется через заявку.
---
-# * Некоторые вещи могут быть на этапе разработки в данный момент.

<script setup>
import { VPTeamMembers } from 'vitepress/theme'
</script>

## Описание
Milky Way — небольшой приватный Minecraft-сервер с уникальными механиками, созданными с опорой на оригинальную идею игры.

На сервере нет приватов и доната. Есть РП-структуры, например судопроизводство и гвардия. Правила здесь относительно щадящие, а баланс настроен так, чтобы игрокам было удобнее самовыражаться и строить.

## Постройки
<FeatureCard 
  title="Территория Спавна" 
  image="/screenshot1.png" 
  ratio="2-3",
  reverse = true
>
  Построил вроде Алез, уже никто не помнит

  0 ~ 0
</FeatureCard>

<FeatureCard 
  title="Аметистовое поле" 
  image="/screenshot2.png" 
  ratio="2-3"
>
  Постройка AlexAnim1

  -4500 ~ -2180
</FeatureCard>

<FeatureCard 
  title="Фрактальный театр" 
  image="/screenshot3.png" 
  ratio="2-3",
  reverse = true
>
  Постройка MAESTRO20

  1490 ~ 1940
</FeatureCard>

<FeatureCard 
  title="Саратов" 
  image="/screenshot4.png" 
  ratio="2-3"
>
  Постройка HitekKriper

  -4500 ~ -2180
</FeatureCard>

<FeatureCard 
  title="База Связистов" 
  image="/screenshot5.png" 
  ratio="2-3"
  reverse = true
>
  Постройка не знаю чья

  -7360 ~ -380
</FeatureCard>

Смотреть ещё: [Архив построек](/wiki/community/buildings-archive)

## Наша команда
<VPTeamMembers size="small" :members="[
  {
    avatar: 'https://avatars.githubusercontent.com/u/96595812?v=4',
    name: 'AXOLOTsh',
    title: 'Основатель / Разработчик',
    links: [
      { icon: 'github', link: 'https://github.com/axolotsh' },
      { icon: 'namemc', link: 'https://namemc.com/profile/28d9eef3-8cdc-4e70-bf78-e0ebea6fb99ah' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/25745457?v=4',
    name: 'Mirsem',
    title: 'Тех-Админ',
    links: [
      { icon: 'github', link: 'https://github.com/M1rs3m' },
      { icon: 'namemc', link: 'https://namemc.com/profile/d89835d4-cfc3-4cc2-828d-636d04874f20' }
    ]
  }
]" />