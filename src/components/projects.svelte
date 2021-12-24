<script lang="ts">
    export let data
</script>

<section>
    {#each data as item}
    <div>{item.title}</div>
    {/each}
</section>