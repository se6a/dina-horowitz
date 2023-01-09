<script>
  export let h = 1;

  const tag = "h" + h;
</script>

<svelte:element this={tag} class="TITLE-GROUP">
  <slot />
</svelte:element>

<style>
  .TITLE-GROUP :global(:first-child) {
    color: white;
  }
</style>
