<script lang="ts">
    import { onMount } from 'svelte'
    import type { Theme } from '@/types'

    import { Sun, Moon } from 'lucide-svelte'
    import { getTheme, setTheme } from '@/utils/theme'

    let currentTheme: Theme = 'light'

    onMount(() => {
        currentTheme = getTheme()
        updateDocumentTheme(currentTheme)
    })

    function toggleTheme() {
        const theme = currentTheme === 'dark' ? 'light' : 'dark'
        currentTheme = setTheme(theme)
    }

    function updateDocumentTheme(theme: Theme) {
        document.documentElement.setAttribute('data-theme', theme)
    }
</script>

<button
    on:click={toggleTheme}
    class="size-10 flex items-center justify-center text-neutral-600 dark:text-neutral-200 border bg-zinc-100 border-zinc-300 rounded-lg cursor-pointer transition-transform active:scale-[.97] hover:bg-zinc-300 dark:hover:bg-zinc-800 dark:bg-zinc-900 dark:border-zinc-800"
>
    {#if currentTheme === 'dark'}
        <Moon size="16" />
    {:else}
        <Sun size="16" />
    {/if}
</button>
