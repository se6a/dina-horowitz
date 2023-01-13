<script>
  export let hasBullets = true;
</script>

<ul class="LIST" class:hasBullets>
  <slot />
</ul>

<style>
  .LIST {
    position: relative;
  }

  .LIST.hasBullets > :global(li) {
    padding-left: 1em;
  }

  .LIST.hasBullets > :global(li::before) {
    position: absolute;
    content: "•";
    left: 0;
  }

  .LIST > :global(li + li) {
    margin-top: 0.5em;
  }
</style>
