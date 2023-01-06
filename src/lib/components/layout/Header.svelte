<script>
  import Navigation from "$lib/components/layout/Navigation.svelte";
</script>

<header class="HEADER" class:useBorder={false}>
  <Navigation />
</header>

<style global lang="postcss">
  @import "$lib/css/breakpoints.css";

  .HEADER {
    height: var(--header-height);
    /* padding: 0 var(--page-padding-x); */
  }
</style>
