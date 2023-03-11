<script>
    import Page from "$lib/components/layout/Page.svelte";
    import WordDisplay from "$lib/components/elements/WordDisplay.svelte";
    import Card from "$lib/components/elements/Card.svelte";
    import {getContext} from "svelte";
    import TitleGroup from "$lib/components/elements/TitleGroup.svelte";

    export let data = {};

    const pageData = data?.pageData || {};
    const display = pageData?.display || [];
    const siteNavigation = data?.siteNavigation || {};
    const isIE = getContext("isIE");
    const color = "blue";

    const colors = {
        familien: "blue",
        fachpersonen: "red",
        alle: "green"
    };
</script>

<main>
    <WordDisplay content={display} />
</main>
<div class="test" />

<style lang="postcss">
    @import "$lib/css/breakpoints.css";

    main,
    .test {
        isolation: isolate;
    }

    main {
        transform: translateZ(0);
    }

    .test {
        /* transform: translateZ(0); */
    }

    .test {
        position: fixed;
        height: 20vh;
        width: 100%;
        top: 0;
        background-color: antiquewhite;
    }
    .cell {
        position: relative;
        display: flex;
    }

    .cell:nth-child(odd) {
        padding-left: 0;
    }

    .cell:nth-child(even) {
        padding-right: 0;
    }

    .cell::after {
        content: "";
        position: absolute;
        z-index: -1;
        display: block;
        top: 0;
        bottom: 0;
        width: 50vw;
        left: unset;
        margin-left: unset;
        background-color: var(--colorCell);
    }

    .cell:nth-child(odd)::after {
        right: 0;
    }

    .cell:nth-child(even)::after {
        left: 0;
    }

    @media (--vw-m) {
        .cell {
            padding: var(--space-2) 0;
        }

        .cell:nth-child(odd)::after,
        .cell:nth-child(even)::after {
            width: 100vw;
            margin-left: 50%;
            left: -50vw;
        }
    }

    /* INTERNET EXPLORER
###############################################################################
#############################################################################*/

    :global(.isIE) {
        .isBlue.cell {
            background-color: hsl(189, 59%, 65%) !important;
        }

        .isRed.cell {
            background-color: hsl(8, 100%, 77%) !important;
        }

        .isGreen.cell {
            background-color: hsl(67, 57%, 47%) !important;
        }
    }
</style>
