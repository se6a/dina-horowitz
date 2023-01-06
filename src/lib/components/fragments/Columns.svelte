<div class="COLUMNS">
  <slot />
</div>

<style lang="postcss">
  @import "$lib/css/breakpoints.css";

  .COLUMNS {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-3) var(--space-1);
  }

  @media (--vw-m) {
    .COLUMNS {
      grid-template-columns: 1fr;
    }
  }

  .COLUMNS > :global(.column) {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
  }
</style>
