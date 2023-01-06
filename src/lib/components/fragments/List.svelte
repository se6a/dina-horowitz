<ul class="LIST">
  <slot />
</ul>

<style>
  .LIST {
    position: relative;
  }

  .LIST > :global(li) {
    padding-left: var(--space-2);
  }

  .LIST > :global(li::before) {
    position: absolute;
    content: "•";
    left: 0;
  }

  .LIST > :global(li + li) {
    margin-top: var(--space-1);
  }
</style>
