export interface Skill {
    text: string
    percentage: number
}

export interface Project {
    year: string
    title: string
    text: string
    url: string
    tags: string[]
}

export const Skills: Skill[] = [
    {
        text: 'Software development',
        percentage: 70,
    },
    {
        text: 'Graphic design',
        percentage: 80,
    },
    {
        text: 'Web development',
        percentage: 70,
    },
    {
        text: 'UI/UX Design',
        percentage: 60,
    },
]

export const Projects: Project[] = [
    {
        year: '2025',
        title: 'CheatBreaker',
        text: 'Collaborated on the development of a new launcher as part of a team, serving as the lead designer responsible for the overall UI/UX design.',
        url: 'https://cheatbreaker.net',
        tags: ['Vue', 'TypeScript', 'Scss', 'Figma'],
    },
    {
        year: '2025',
        title: 'Rend',
        text: 'Co-designed the app and contributed to its development using Rust and Tauri, integrating modern technologies and innovative UI elements.',
        url: 'https://rend.sh',
        tags: ['Rust', 'Tauri', 'TypeScript', 'Figma', 'Photoshop'],
    },
    {
        year: '2024',
        title: 'Ancify',
        text: 'Contributed to the app development using Rust and Tauri, and implemented various UI components.',
        url: 'https://x.com/AncifyLauncher',
        tags: ['Rust', 'Tauri', 'TypeScript'],
    },
    {
        year: '2023',
        title: 'Hybris',
        text: 'Led the design efforts for both the client and launcher, creating the UI/UX',
        url: 'https://github.com/hybrismc',
        tags: ['Kotlin', 'TypeScript', 'Figma', 'Photoshop'],
    },
]
