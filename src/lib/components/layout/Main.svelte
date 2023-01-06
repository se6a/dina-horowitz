<script>
</script>

<main class="MAIN" class:useBorder={false}>
  <slot />
</main>

<style lang="postcss">
  @import "$lib/css/breakpoints.css";

  .MAIN {
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-top: var(--main-marginTop);
  }
</style>
