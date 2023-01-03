<script>
</script>

<main class="MAIN" class:useBorder={true}>
  <slot />
</main>

<style lang="postcss">
  @import "$lib/css/breakpoints.css";

  .MAIN {
    display: flex;
    flex-direction: column;
    background-color: var(--green-light);
    flex: 1;
    margin-top: var(--main-marginTop);
  }
</style>
