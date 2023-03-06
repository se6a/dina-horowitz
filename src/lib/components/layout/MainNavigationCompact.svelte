<script>
    import Link from "../elements/Link.svelte";
    import MenuIcon from "../icons/Menu.svelte";
    import MainNavigationItems from "./MainNavigation-items.svelte";

    export let items = [];
    const [mainItem, ...restItems] = items;

    let isOpen = false;
    let compactIsOpen = false;
</script>

<nav class="MAIN-NAVIGATION-COMPACT">
    <Link data={mainItem} />

    <input class="menuToggle" id="a324rzto" type="checkbox" bind:checked={compactIsOpen} />
    <label class="menu" for="a324rzto">
        <div class="menuIcon">
            <MenuIcon isOpen={compactIsOpen} />
        </div>
        <div class="content">
            <MainNavigationItems items={restItems} />
        </div>
    </label>
</nav>

<div class="space-var" style="--space: var(--header-height);" />

<style lang="postcss">
    @import "$lib/css/breakpoints.css";

    .space-var {
        display: none;
    }

    @media (--vw-m) {
        .space-var {
            display: block;
        }
    }

    .MAIN-NAVIGATION-COMPACT {
        position: fixed;
        height: var(--header-height);
        width: 100%;
        left: 0;
        right: 0;
        background-color: white;
        padding: 0 var(--page-padding-x);
        display: flex;
        justify-content: space-between;
        align-items: center;
        isolation: isolate;
    }

    input {
        position: absolute;
        visibility: hidden;
        pointer-events: none;
    }

    .menu {
    }

    .menuIcon {
        --icon-color: var(--black);
        --icon-strokeWidth: 1.5px;
        height: 4rem;
        width: 4rem;
    }

    .menuToggle:checked + .menu > .content {
        display: flex;
    }

    .content {
        position: absolute;
        background-color: red;
        z-index: 9999;
        top: var(--header-height);
        left: 0;
        right: 0;
        height: calc(100vh - var(--header-height));
        display: none;
        justify-content: center;
    }
</style>
