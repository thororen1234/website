import type { Info, Social, Skill, Project, Product } from './types'
import {
    MapPin,
    User,
    GraduationCap,
    Heart,
    Twitter,
    Github,
    Mail,
} from '@lucide/astro'

export const Information: Info[] = [
    {
        icon: MapPin,
        text: 'Greece',
    },
    {
        icon: User,
        text: 'He/Him',
    },
    {
        icon: GraduationCap,
        text: 'Self-taught',
    },
]

export const Socials: Social[] = [
    {
        text: 'Donate',
        url: 'https://s.naibuu.dev/kofi',
        icon: Heart,
    },
    {
        text: 'Twitter',
        url: 'https://s.naibuu.dev/twitter',
        icon: Twitter,
    },
    {
        text: 'Github',
        url: 'https://s.naibuu.dev/github',
        icon: Github,
    },
    {
        text: 'Email',
        url: 'mailto:me@naibuu.dev',
        icon: Mail,
    },
]

export const Skills: Skill[] = [
    {
        text: 'Software development',
        description: 'Visual Studio, Visual Studio Code and IntelliJ',
        progress: 75,
    },
    {
        text: 'Graphic design',
        description: 'Photoshop and Figma',
        progress: 90,
    },
    {
        text: 'Web development',
        description: 'SSR Frameworks, React, Vue and Astro',
        progress: 85,
    },
]

export const Projects: Project[] = [
    {
        start: 2023,
        title: 'CheatBreaker',
        description:
            'CheatBreaker is a free FPS-boosting modpack for Minecraft. I collaborated with the team on developing a new launcher, serving as the lead designer for the project.',
        url: 'https://cheatbreaker.net',
    },
    {
        start: 2025,
        title: 'Rend',
        description:
            'Rend is a game distribution platform that allows players to easily discover and enjoy a diverse selection of games. As a co-owner of the project, I contributed to the design and development of much of the front-end.',
        url: 'https://rend.sh',
    },
    {
        start: 2023,
        end: 2024,
        title: 'Ancify',
        description:
            'Ancify is a launcher that makes server emulators easier to find and more accessible. I contributed significantly to the front-end development, including work on the launcher itself.',
        url: 'https://ancify.io/',
    },
    {
        start: 2023,
        end: 2024,
        title: 'Hybris',
        description:
            'Hybris is a free and open-source Minecraft modpack that aims to improve the gameplay experience and introduce a flexible modding framework for developers. My contribution was leading the design efforts for both the client and the launcher.',
        url: 'https://github.com/hybrismc',
    },
]

// TODO: Temporarily here, will move the store into a database soon.
export const Products: Product[] = [
    {
        url: 'https://ko-fi.com/s/912ecfdefe',
        cover: 'https://storage.ko-fi.com/cdn/useruploads/display/54baaebc-2398-4fe5-915d-9f9b0a143e6b_two.png',
        title: 'Tweet Thumbnail (PSD)',
        description:
            'A clean, simple and customizable Twitter post template. This file includes editable layers (Avatar, Text, Background and etc.) and 3 different background samples.',
        price: 0,
    },
]
