<script>
  export let background = "transparent";
</script>

<section class="SECTION" style:--background={background}>
  <slot />
</section>

<style>
  .SECTION {
    background-color: var(--background);
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
