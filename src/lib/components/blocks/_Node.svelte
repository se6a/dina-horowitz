<script>
    import Marks from "./_Marks.svelte";
    import Component from "./_Component.svelte";

    export let node = {};
    export let markDefs = [];
    const type = node?._type;
</script>

{#if type === "block"}
    <Component name={node.style}>
        {#each node.children as child}
            <svelte:self node={child} {markDefs} />
        {/each}
    </Component>
{:else}
    {@const marks = node?.marks || []}
    <Marks {marks} {markDefs}>
        {node?.text}
    </Marks>
{/if}
