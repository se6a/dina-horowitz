<script>
    let data;

    $: innerText = data?.innerText || "";
    $: parts = innerText.split(" ").filter((p) => p);
</script>

<span style="display: none" bind:this={data}>
    <slot />
</span>

{#each parts as part, i}
    <span class="useHighlight">{part}{i < parts.length - 1 ? " " : ""}</span>
{/each}
