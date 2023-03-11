<script>
    import MainNavigationItems from "./MainNavigation-items.svelte";

    export let items = [];
</script>

<nav class="MAIN-NAVIGATION">
    <MainNavigationItems {items} />
</nav>

<style lang="postcss">
    @import "$lib/css/breakpoints.css";

    .MAIN-NAVIGATION {
        position: relative;
        height: var(--header-height);
        z-index: 100;
    }
</style>
