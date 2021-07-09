<script>
    export let src;
    const width = 1920
    const height = 1080
    const urlPrefix = 'https://res.cloudinary.com/radenpioneer/video/upload/'
    const formats = ['webm', 'mp4', 'ogv']
    const urlFull = `${urlPrefix}w_${width},h_${height},c_fit/f_auto/${src}`
</script>

<style lang="scss">
    video {
        @apply absolute inset-0 w-screen h-screen object-cover object-center;
        z-index: -1;
    }
</style>

<video {width} {height} loop autoplay muted poster="{urlFull}.jpg">
    {#each formats as format }
    <source src="{urlFull}.{format}" type="video/{format}" />
    {/each}
</video>