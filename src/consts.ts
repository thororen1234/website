import type { BaseItem, Social, Skill, Project } from './types'
import { MapPin, User, Heart, Twitter, Github, Mail } from '@lucide/astro'

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
