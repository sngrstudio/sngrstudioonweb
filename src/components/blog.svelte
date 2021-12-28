<script lang="ts">
    import Button from '@components/utils/button.svelte'

    export let posts
</script>

<section class="section">
    {#each posts as post}
    <article class="container">
        <div class="preview">
            <h1 class="title">{post.title}</h1>
            <p class="brief">{post.brief}</p>
            <div class="links">
                <Button href="/blog/{post.slug}" name="Read More" />
                <Button href="https://blog.sngr.dev/{post.slug}" name="Read In blog" />
            </div>
        </div>
    </article>
    {/each}
    <section class="footer">
        <Button href="https://blog.sngr.dev/" name="See all posts in Blog" />
    </section>
</section>

<style lang="scss">
    .section {
        @apply grid grid-cols-4 gap-4;
    }
    .container {
        @apply aspect-w-4 aspect-h-6;
    }
    .preview {
        @apply flex flex-col gap-2 p-4;
        @apply border border-gray-500 rounded-xl;
        .title {
            @apply font-extrabold text-xl lg:text-2xl text-center mb-auto;
        }
        .brief {
            @apply line-clamp-4 prose text-justify max-w-none;
        }
        .links {
            @apply flex flex-row gap-2 place-content-evenly;
        }
    }
    .footer {
        @apply col-span-4 flex flex-row items-center justify-center p-4;
    }
</style>