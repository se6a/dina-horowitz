<script>
    import ScrollDragX from "../elements/ScrollDragX.svelte";

    export let sections = {};
</script>

<nav class="PAGE-NAVIGATION anchors useBackground-fullwidth">
    <ScrollDragX>
        {#each sections as { title = "", navigationName = "", slug = "" }}
            {#if slug && title}
                <a class="anchor" href="#{slug}">{navigationName || title}</a>
            {/if}
        {/each}
    </ScrollDragX>
</nav>

<style lang="postcss">
    @import "$lib/css/breakpoints.css";

    .PAGE-NAVIGATION {
        font-size: var(--font-size-m);
        height: var(--header-height);
        background-color: var(--color);
        display: flex;
        margin-top: auto;
        width: 100%;
        align-items: center;
        position: relative;
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        z-index: var(--zPos-front);
    }

    .PAGE-NAVIGATION > * {
        flex-shrink: 0;
    }

    .anchor:first-child {
        margin-left: var(--layout-inset-l);
    }

    .anchor:last-child {
        margin-right: var(--page-padding-x);
    }

    .anchor {
        transition: color var(--duration-fast);
    }

    .anchor + .anchor {
        margin-left: var(--space-m);
    }

    .anchor:hover {
        color: white;
    }

    /* INTERNET EXPLORER
###############################################################################
#############################################################################*/

    :global(.isIE) {
        .PAGE-NAVIGATION {
            display: block;
            padding: 0 30px 30px;
        }

        .anchor {
            left: 0;
            display: inline-block;
            margin-right: 30px;
            line-height: 2;
        }
    }

    @media (--ie-small) {
        :global(.isIE) {
            .anchor {
                display: block;
                margin-right: 0;
            }
        }
    }
</style>
