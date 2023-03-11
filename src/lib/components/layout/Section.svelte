<script>
    import Highlighter from "../fragments/Highlighter.svelte";
    import SectionContent from "../sectionContents/SectionContentList.svelte";
    export let section = {};

    const title = section?.title || "";
    const slug = section?.slug || "";
    const contents = section?.content || [];
</script>

<section class="LAYOUT-SECTION">
    {#if slug}
        <div class="anchor" id={slug} />
    {/if}

    {#if title}
        <h2>
            <Highlighter>
                {title}
            </Highlighter>
        </h2>
    {/if}

    <div class="space-var" style:--space="var(--layoutSection-spacing-y)" />

    <div class="content">
        <SectionContent {contents} />
    </div>
</section>

<style lang="postcss">
    @import "$lib/css/breakpoints.css";

    .LAYOUT-SECTION {
        padding: var(--layoutSection-padding-t) 0 var(--layoutSection-padding-b) 0;
        position: relative;
        isolation: isolate;
        --useColumns-gap-y: var(--layoutSection-spacing-y);
    }

    .LAYOUT-SECTION :global(.HIGHLIGHTER::before) {
        transform: scaleX(0);
        transform-origin: left;
        transition: transform var(--duration-slow);
    }

    .LAYOUT-SECTION:global(.isIntersecting .HIGHLIGHTER::before) {
        transform: scaleX(1);
    }

    .LAYOUT-SECTION:nth-child(odd)::after {
        content: "";
        display: block;
        background-color: var(--colorPage-light);
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100vw;
        left: -50vw;
        margin-left: 50%;
        z-index: -1;
    }

    .LAYOUT-SECTION h2 {
        font-size: var(--font-size-l);
        text-transform: uppercase;
        margin-left: var(--layout-inset-l);
        letter-spacing: 0.08em;
    }

    .content {
        display: flex;
        flex-direction: column;
    }

    .anchor {
        width: 0px;
        height: 0px;
        pointer-events: none;
        -webkit-user-select: none;
        user-select: none;
        position: absolute;
        top: calc(-1 * var(--header-height));
    }

    .LAYOUT-SECTION :global(.box > .useText-xl:first-child) {
        margin-top: -0.3em;
    }

    @media (--vw-m) {
        .LAYOUT-SECTION :global(.useText-xl) {
            margin-top: 0;
        }
    }

    /* INTERNET EXPLORER
###############################################################################
#############################################################################*/

    :global(.isIE) {
        .LAYOUT-SECTION {
            padding: 30px !important;
        }

        .content {
            display: block;
            flex-direction: none;
        }

        .content > :global(* > *) {
            margin-top: 50px;
        }

        .LAYOUT-SECTION h2 {
            font-size: 3rem;
            display: inline-block;
        }
    }
</style>
