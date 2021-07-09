<script>
    const astro = {
        href: 'https://astro.build/',
        title: 'Astro'
    }
    const svelte = {
        href: 'https://svelte.dev/',
        title: 'Svelte'
    }
</script>

<style lang="scss">
    footer {
        @apply text-white text-center text-base p-4;
        z-index: 2;
    }

</style>

<footer>
    <p>
        &copy;
        <a href="/" target="_blank" rel="noreferrer">Sastronegoro</a> 2021. 
        Built with 
        <a href={astro.href} target="_blank" rel="noreferrer">{astro.title}</a> 
        and 
        <a href={svelte.href} target="_blank" rel="noreferrer">{svelte.title}</a>.
    </p>
</footer>