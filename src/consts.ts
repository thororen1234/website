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
        description: 'SSR Frameworks, React, Svelte, Vue and Astro',
        progress: 85,
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
        end: 2025,
        title: 'CheatBreaker',
        description:
            'CheatBreaker is a free FPS-boosting modpack for Minecraft. I collaborated with the team on developing a new launcher, serving as the lead designer for the project.',
        url: 'https://cheatbreaker.net',
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
