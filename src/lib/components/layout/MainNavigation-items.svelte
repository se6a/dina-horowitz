<script>
    import Link from "../elements/Link.svelte";
    import IconClose from "$lib/components/icons/Close.svelte";
    import IconArrow from "$lib/components/icons/ArrowBig.svelte";
    import {capitalize, createId} from "$lib/functions/utility";
    import HoverArrow from "../elements/HoverArrow.svelte";
    import TitleGroup from "../elements/TitleGroup.svelte";

    export let items = [];

    let isOpen = false;
</script>

<ul class="MAIN-NAVIGATION-ITEMS items">
    {#each items as item}
        <li class="item">
            {#if "subItems" in item}
                {@const id = createId()}
                <label for={id}>
                    <HoverArrow>
                        {item.title}
                    </HoverArrow>
                </label>
                <input
                    class="toggle toggleSubNav"
                    type="checkbox"
                    bind:checked={isOpen}
                    name=""
                    {id}
                />

                <div class="subNav">
                    <ul class="subItems">
                        {#each item.subItems as { title, color, href }}
                            <a
                                class="subItem is{capitalize(color)} useBackground"
                                style:--colorItem="var(--{color})"
                                {href}
                                on:click={() => (isOpen = false)}
                            >
                                <div class="subItemInner">
                                    <div class="arrow">
                                        <IconArrow />
                                    </div>

                                    <div class="text">
                                        <TitleGroup h={2} {title} />
                                    </div>
                                </div>
                            </a>
                        {/each}
                    </ul>

                    <label class="buttonClose" for={id}>
                        <IconClose />
                    </label>

                    <label class="buttonClose-compact" for={id}><IconArrow /></label>
                </div>
            {:else}
                <Link data={item} />
            {/if}
        </li>
    {/each}
</ul>

<style lang="postcss">
    @import "$lib/css/breakpoints.css";
    /* Items
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

    .items {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        font-size: var(--layoutNav-font-size);
    }

    /* SubNav
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

    .subNav {
        z-index: var(--zPos-front);
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: hsla(0, 0%, 100%, 0.9);
        opacity: 0;
        visibility: hidden;
        transition: opacity var(--duration-middle), visibility 2ms 1000ms;
    }

    .toggleSubNav:checked + .subNav {
        opacity: 1;
        visibility: visible;
        transition: opacity var(--duration-middle), visibility 0ms 0ms;
    }

    .subItems {
        display: flex;
        transform: translateY(-100%);
        transition: transform var(--duration-middle);
    }

    @media (max-width: 1200px) {
        .subItems {
            flex-direction: column;
            height: 100%;
        }
    }

    .toggleSubNav:checked + .subNav > .subItems {
        transform: translateY(0);
    }

    .toggleSubNav {
        visibility: hidden;
        width: 0;
        height: 0;
        position: absolute;
    }

    .buttonClose {
        position: absolute;
        right: var(--space-1);
        top: var(--space-1);
        --icon-size: 3rem;
        --icon-strokeWidth: 1px;
        --icon-color: currentColor;
        transform: rotate(0deg);
        transition: var(--duration-middle);
    }

    .buttonClose:hover {
        transform: rotate(90deg);
    }

    /* Subitem
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

    .subItem {
        flex: 1;
        height: auto;
        display: flex;
        padding: var(--space-l);
        background-color: var(--colorItem);
        font-size: var(--layoutNavSub-font-size);
        position: relative;
        width: 100%;
    }

    .subItemInner {
        height: fit-content;
        position: relative;
    }

    @media (--vw-m) {
        .subItem {
            align-items: center;
        }
    }

    .text,
    .arrow {
        transition: transform var(--duration-middle), opacity var(--duration-middle);
    }

    .text {
        transform: translateX(0);
        width: 100%;
    }

    .text > * {
        display: block;
        white-space: break-spaces;
        max-width: 20ch;
    }

    .arrow {
        position: absolute;
        transform: translateX(-130%);
        --icon-size: 8rem;
        --icon-fill: var(--black);
        opacity: 0;
        pointer-events: none;
        top: 0;
        bottom: 0;
        margin: auto 0;
        height: min-content;
    }

    .subItem:hover .text {
        transform: translateX(3rem);
    }

    .subItem:hover .arrow {
        transform: translateX(calc(-100% + 3rem));
        pointer-events: all;
        opacity: 1;
    }

    /* COMPACT VERSION
###############################################################################
#############################################################################*/

    .buttonClose-compact {
        display: none;
    }

    @media (--vw-m) {
        .MAIN-NAVIGATION-ITEMS {
            height: 30vh;
            margin-top: 15vh;
            flex-direction: column;
        }

        .item {
            font-size: var(--font-size-xl);
        }

        .buttonClose {
            display: none;
        }

        .buttonClose-compact {
            display: block;
            position: absolute;
            top: 3rem;
            right: var(--page-padding-x);
            width: 4rem;
            height: 4rem;
            transform: translateX(-100vw) rotate(-180deg);
            transition: transform var(--duration-middle);
            --icon-color: var(--black);
            --icon-strokeWidth: 0.25px;
        }

        .subNav {
            position: absolute;
        }

        .toggleSubNav:checked + .subNav > .buttonClose-compact {
            transform: translateX(0) rotate(-180deg);
        }

        .subItems {
            display: flex;
            transform: translateX(-100%);
            transition: transform var(--duration-middle);
        }
    }

    /* INTERNET EXPLORER
###############################################################################
#############################################################################*/

    :global(.isIE) {
        .items {
            height: auto !important;
            padding: 16px 30px !important;
            display: block !important;
            margin-top: 0 !important;
        }

        .item {
            margin-right: 3rem;
            display: inline-block;
        }

        .subNav {
            z-index: 500;
            background-color: white;
            position: fixed !important;
            height: 100vh;
        }

        .subItem {
            padding: 30px;
        }

        .arrow,
        .buttonClose-compact {
            display: none !important;
        }

        .buttonClose {
            display: block !important;
            top: 30px !important;
            right: 30px !important;
        }

        .subItem:hover .text {
            transform: none;
            opacity: 0.7;
        }
    }
</style>
