<script>
</script>

<section class="TEXT-BOX useBasicText">
  <header class="header">
    <h3>
      <slot name="title" />
    </h3>
  </header>
  <slot />
</section>

<style>
  .TEXT-BOX {
    background-color: var(--colorPage-light);
    padding: var(--space-1);
  }

  .header {
    padding-bottom: var(--space-1);
  }
</style>
