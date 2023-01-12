<script>
  import NavigationSite from "$lib/components/layout/NavigationSite.svelte";
</script>

<header class="HEADER" class:useBorder={false}>
  <NavigationSite />
  <slot />
</header>

<style global lang="postcss">
  @import "$lib/css/breakpoints.css";
</style>
