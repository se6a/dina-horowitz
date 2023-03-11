<script>
    export let title = "";
    export let h = 1;
    export let classes = "";

    const tag = "h" + h;
    const lines = title.split("\n");
</script>

<svelte:element this={tag} class="TITLE-GROUP titleGroup{classes ? ` ${classes}` : ''}">
    {#each lines as line}
        <span>{line}</span>
    {/each}
</svelte:element>

<style>
    .TITLE-GROUP :global(:first-child) {
        color: white;
    }
</style>
