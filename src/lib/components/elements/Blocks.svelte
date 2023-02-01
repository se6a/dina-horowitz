<script>
    import PortableText from "$lib/components/blocks/PortableText.svelte";

    export let blocks = [];
</script>

<!-- <article class="BLOCKS"> -->
<PortableText {blocks} />

<!-- </article> -->
<style>
    .BLOCKS :global(p) {
        min-height: var(--space-1);
    }

    .BLOCKS :global(p) {
        min-height: var(--space-1);
    }
</style>
