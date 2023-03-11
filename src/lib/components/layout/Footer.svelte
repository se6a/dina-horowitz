<script>
    import IconGoUp from "$lib/components/icons/GoUp.svelte";
    import {getContext} from "svelte";

    export let hasGoTopButton = true;

    const isIE = getContext("isIE");

    function goUp() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }
</script>

<footer class="FOOTER">
    {#if hasGoTopButton && !isIE}
        <button class="button button-goUp" on:click={goUp} aria-label="Zum Seitenanfang scrollen">
            <IconGoUp />
        </button>
    {/if}

    <div class="space-2" />

    <nav class="footerNavigation">
        <a href="/impressum">Impressum</a>
        <a href="/datenschutz">Datenschutz</a>
    </nav>
</footer>

<style lang="postcss">
    @import "$lib/css/breakpoints.css";

    .FOOTER {
        width: 100%;
        height: var(--footer-height);
        font-size: var(--font-size-s);
        --icon-width: 80px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: var(--space-3) 0;
    }

    .footerNavigation {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .footerNavigation > * + * {
        margin-top: var(--space-half);
    }

    /* INTERNET EXPLORER
###############################################################################
#############################################################################*/

    :global(.isIE) {
        .FOOTER {
            padding: 4rem;
        }

        a {
            line-height: 2;
        }
    }
</style>
