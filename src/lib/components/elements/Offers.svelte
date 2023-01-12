<script>
</script>

<ul class="OFFERS">
  <slot />
</ul>

<style>
  .OFFERS {
    display: flex;
    flex-direction: column;
    font-size: var(--font-size-m);
  }

  .OFFERS :global(p) {
    font-weight: 600;
  }

  .OFFERS :global(.offer + .offer) {
    margin-top: var(--space-1);
  }

  .OFFERS :global(.offer) {
    background-color: var(--colorPage-light);
    padding: var(--space-1);
  }
</style>
