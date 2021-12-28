<script lang="ts">
    export let href
    export let name
</script>

<a class="btn" href={href}>{name}</a>

<style lang="scss">
    .btn {
        @apply text-sm text-center font-bold p-1 lg:p-2;
        @apply rounded-lg;
        @apply border border-gray-500;
    }
</style>