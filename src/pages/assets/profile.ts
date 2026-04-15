import { promises as fs } from 'fs'

const userId = '848339671629299742'
const fallbackUrl = 'https://www.thororen.com/assets/pfp.png'

async function getFallbackImage() {
    const response = await fetch(fallbackUrl)
    if (!response.ok) {
        throw new Error('Failed to fetch fallback image')
    }
    const buffer = await response.arrayBuffer()
    return Buffer.from(buffer)
}

async function getDiscordAvatar() {
    const lanyardResponse = await fetch(`https://lanyard.equicord.org/v1/users/${userId}`)
    if (!lanyardResponse.ok) {
        throw new Error('Lanyard fetch failed')
    }

    const lanyardJson = await lanyardResponse.json()
    const user = lanyardJson?.data?.discord_user
    if (!user?.id || !user?.avatar) {
        throw new Error('Missing Discord avatar data')
    }

    const avatarUrl = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=512`
    const avatarResponse = await fetch(avatarUrl)
    if (!avatarResponse.ok) {
        throw new Error('Discord avatar fetch failed')
    }

    const avatarBuffer = await avatarResponse.arrayBuffer()
    return Buffer.from(avatarBuffer)
}

export async function GET() {
    try {
        const imageBuffer = await getDiscordAvatar()
        return new Response(imageBuffer)
    } catch (error) {
        const fallbackBuffer = await getFallbackImage()
        return new Response(fallbackBuffer)
    }
}
