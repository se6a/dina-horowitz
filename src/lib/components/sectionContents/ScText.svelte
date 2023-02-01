<script>
    import Blocks from "../elements/Blocks.svelte";

    export let content = {};

    const blocks = content?.blocks || [];
    const hasBackground = content?.hasBackground || false;
</script>

{#if hasBackground}
    <div class="box useBackground-light">
        <Blocks {blocks} />
    </div>
{:else}
    <Blocks {blocks} />
{/if}
