<script>
  export let color = "";
</script>

<section class="TEXT-BOX" style:--background="var(--{color}-light">
  <header class="header">
    <h3>
      <slot name="title" />
    </h3>
  </header>
  <slot />
</section>

<style>
  .TEXT-BOX {
    background-color: var(--background, silver);
    padding: var(--space-1);
  }

  .header {
    padding-bottom: var(--space-1);
  }
</style>
