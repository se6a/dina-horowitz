<script>
  export let color = "transparent";
</script>

<section class="SECTION" style:--colorSection={color}>
  <slot />
</section>

<style>
  .SECTION {
    background-color: var(--colorSection);
  }

  .SECTION :global(p) {
    max-width: 40ch;
  }

  .SECTION :global(h2),
  .SECTION :global(h3) {
    max-width: 20ch;
    font-size: var(--font-size-l);
  }

  .SECTION :global(h2) {
    color: white;
    display: block;
  }
</style>
