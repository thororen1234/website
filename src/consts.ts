import type { Info, Social, Skill, Project } from './types'
import {
    AlarmClock,
    BookOpen,
    Github,
    Heart,
    ListMusic,
    MapPin,
    User,
    Twitter,
} from '@lucide/astro'

import Desktop from './assets/desktop.svg'
import Embedded from './assets/embedded.svg'
import LastFM from './assets/lastfm.svg'
import Mobile from './assets/mobile.svg'
import Web from './assets/web.svg'

export const Information: Info[] = [
    {
        icon: MapPin,
        text: 'United States',
    },
    {
        icon: User,
        text: 'He/Him',
    },
]

export const MiscIcons = {
    User: User,
    AlarmClock: AlarmClock,
    BookOpen: BookOpen,
    ListMusic: ListMusic,
}

export const Platforms = {
    Web: Web,
    Mobile: Mobile,
    Desktop: Desktop,
    Embedded: Embedded,
}

export const Socials: Social[] = [
    {
        text: 'Donate',
        url: 'https://github.com/sponsors/thororen1234',
        icon: Heart,
    },
    {
        text: 'Twitter',
        url: 'https://x.com/thororen',
        icon: Twitter,
    },
    {
        text: 'Github',
        url: 'https://github.com/thororen1234',
        icon: Github,
    },
    {
        text: 'Last.FM',
        url: 'https://www.last.fm/user/thororen',
        icon: LastFM,
    },
]

export const Skills: Skill[] = [
    {
        text: 'Software engineering',
        description: 'JavaScript, TypeScript, and more',
        progress: 95,
    },
    {
        text: 'Software development',
        description: 'Visual Studio Code',
        progress: 85,
    },
    {
        text: 'Web development',
        description: 'SSR Frameworks and React',
        progress: 75,
    },
]

export const Projects: Project[] = [
    {
        start: 2025,
        title: 'Equicord',
        description:
            'Equicord is an enhanced version of Vencord with a wide variety of plugins. Currently maintaining and working on the website.',
        url: 'https://equicord.org',
    },
    {
        start: 2023,
        title: 'Equicord',
        description:
            'The other cutest Discord mod, currently maintaining and working on the entire project.',
        url: 'https://equicord.org',
    },
    {
        start: 2023,
        title: 'CheatBreaker',
        description:
            'CheatBreaker is a free FPS-boosting modpack for Minecraft. I collaborated with the team on developing a new launcher.',
        url: 'https://cheatbreaker.net',
    },
    {
        start: 2025,
        title: 'Disbored',
        description:
            'Disbored (aka surg) is just a giant repository org handling Discord bots, prs to places, websites and more.',
        url: 'https://surg.fyi/',
    },
    {
        start: 2022,
        end: 2023,
        title: 'Solar Tweaks',
        description:
            'Solar Tweaks is a custom Lunar Client launcher that provides different modifications for the client.',
        url: 'https://github.com/hybrismc',
    },
    {
        start: 2020,
        end: 2021,
        title: 'Beycord',
        description:
            'Beycord is an open source Discord bot dedicated to bringing the fun and memes of Beyblade into Discord.',
        url: 'https://thororen.com/beycord',
    },
]

export const Friends = [
    {
        url: 'https://www.naibuu.dev',
        img: 'https://avatars.githubusercontent.com/u/81579850',
        alt: 'itsnaibuu',
        name: 'Naibuu',
    },
    {
        url: 'https://creations.works',
        img: 'https://creations.works/api/pfp',
        alt: 'creations',
        name: 'creations',
    },
    {
        url: 'https://krystal.thororen.com',
        img: 'https://avatars.githubusercontent.com/u/150982280',
        alt: 'krystalskull',
        name: 'Krystal',
    },
    {
        url: 'https://cortex.rest',
        img: 'https://avatars.githubusercontent.com/u/126973723',
        alt: 'environment.',
        name: 'Cortex',
    },
]

export const Contributions = [
    {
        url: 'https://github.com/Vendicated/Vencord',
        img: 'https://images.equicord.org/api/undefined/files/raw/019a51d5-b3a1-7007-80d8-136a2d37871f',
        alt: 'vencord',
        name: 'Vencord',
    },
    {
        url: 'https://github.com/verticalsync/Suncord',
        img: 'https://images.equicord.org/api/undefined/files/raw/0199e71a-555f-7000-9737-6dfa6651bb71',
        alt: 'suncord',
        name: 'Suncord',
    },
    {
        url: 'https://github.com/Spiderjockey02/Discord-Bot',
        img: 'https://images.equicord.org/api/undefined/files/raw/019a51d5-b3a1-7000-a65a-cd85cad3249d',
        alt: 'egglord',
        name: 'Egglord',
    },
    {
        url: 'https://github.com/KrstlSkll69/krstlskll69.github.com',
        img: 'https://images.equicord.org/api/undefined/files/raw/019a51d0-aed9-7000-841d-1df0909cf0ae',
        alt: 'krystalskullwebsite',
        name: 'Krystals Website',
    },
    {
        url: 'https://github.com/VendroidEnhanced/plugin',
        img: 'https://images.equicord.org/api/undefined/files/raw/019a51d6-cc0d-7000-b8b2-e083a6a2c441',
        alt: 'vendroidenhanced',
        name: 'Vendroid Plugin',
    },
    {
        url: 'https://github.com/Faf4a/ThemeLibrary',
        img: 'https://images.equicord.org/api/undefined/files/raw/019a51d5-b3a1-7004-9c33-5479e9710c56',
        alt: 'themelibrary',
        name: 'ThemeLibrary',
    },
    {
        url: 'https://github.com/Inrixia/luna-plugins',
        img: 'https://images.equicord.org/api/undefined/files/raw/019a51d5-b3a1-7005-85fe-0277093e7068',
        alt: 'lunaplugins',
        name: 'Luna Plugins',
    },
]
