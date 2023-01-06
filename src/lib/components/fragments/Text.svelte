<div class="TEXT">
  <slot />
</div>

<style>
  .TEXT > :global(* + *) {
    margin-top: var(--space-1);
  }

  .TEXT :global(* + h3) {
    margin-top: var(--space-2);
  }

  /* .TEXT :global(h3) {
    font-size: var(--font-size-l);
  } */
</style>
