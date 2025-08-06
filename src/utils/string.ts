export function capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

export function truncate(str: string, max: number): string {
    return str.slice(0, max).trimEnd() + '…'
}
