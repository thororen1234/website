import type { BaseItem, Social, Skill, Project } from './types'
import { AlarmClock, BookOpen, Github, Heart, ListMusic, MapPin, User, Twitter } from '@lucide/astro'

import Web from './assets/web.svg';
import Mobile from './assets/mobile.svg';
import Desktop from './assets/desktop.svg';
import Embedded from './assets/embedded.svg';

export const Information: BaseItem[] = [
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
        url: 'https://s.thororen.com/donate',
        icon: Heart,
    },
    {
        text: 'Twitter',
        url: 'https://s.thororen.com/twitter',
        icon: Twitter,
    },
    {
        text: 'Github',
        url: 'https://s.thororen.com/github',
        icon: Github,
    },
]

export const Skills: Skill[] = [
    {
        text: 'Software engineering',
        subtext: 'JavaScript, TypeScript, and more',
        progress: 95,
    },
    {
        text: 'Software development',
        subtext: 'Visual Studio Code',
        progress: 85,
    },
    {
        text: 'Web development',
        subtext: 'SSR Frameworks and React',
        progress: 75,
    },
]

export const Projects: Project[] = [
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
        url: "https://creations.works",
        img: "https://creations.works/public/assets/pfp.png",
        alt: "creations",
        name: "creations"
    },
    {
        url: 'https://cortex.rest',
        img: 'https://avatars.githubusercontent.com/u/126973723?v=4',
        alt: 'environment.',
        name: 'Cortex',
    },
    {
        url: "https://indi.is-a-skid.cc",
        img: "https://avatars.githubusercontent.com/u/150982280?v=4",
        alt: "krystalskull",
        name: "Krystal"
    },
    {
        url: 'https://vmohammad.dev',
        img: 'https://avatars.githubusercontent.com/u/62218284?v=4',
        alt: 'vmohammad',
        name: 'Mohammad',
    },
]