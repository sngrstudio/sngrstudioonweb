<script lang="ts">
    import Button from '@components/utils/button.svelte'
    import { DateTime } from 'luxon'

    export let posts
</script>

<section class="section">
    {#each posts as post}
    <a href="/blog/{post.slug}" class="container">
        {#if post.coverImage}
        <div class="img_container">
            <div class="img">
                <img src={post.coverImage} alt={post.title}>
            </div>
        </div>    
        {/if}
        <p class="date"><time datetime={post.dateAdded}>{DateTime.fromISO(post.dateAdded).setLocale('id').toLocaleString(DateTime.DATE_FULL)}</time></p>
        <h1 class="title">{post.title}</h1>
    </a>
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
        @apply flex flex-col gap-2;
        .title {
            @apply font-extrabold text-xl lg:text-2xl text-left;
        }
        .date {
            @apply font-bold;
        }
    }
    .img_container {
        @apply aspect-w-3 aspect-h-4;
        .img {
            @apply w-full h-full;
        }
    }
    .footer {
        @apply col-span-4 flex flex-row items-center justify-center p-4;
    }
</style>