<script>
    import Header from "$lib/components/layout/Header.svelte";
    import Footer from "$lib/components/layout/Footer.svelte";
    import NavigationPage from "$lib/components/layout/NavigationPage.svelte";
    import Main from "$lib/components/layout/Main.svelte";
    import Title from "$lib/components/layout/Title.svelte";
    import TitleGroup from "$lib/components/elements/TitleGroup.svelte";
    import MainSection from "$lib/components/layout/Section.svelte";
    import Button from "$lib/components/elements/Button.svelte";
    import {capitalize, slugify} from "$lib/functions/utility";
    import {pageData as _pageData} from "$lib/store";

    export let data = {};

    export let color = "";
    export let hasGoTopButton = true;
    export let hasContactButton = true;
    export let usePageTitle = true;

    const pageData = data?.pageData || {};
    const title = pageData?.title || "";
    const sections = pageData?.sections || [];

    $_pageData = pageData;

    sections.forEach(
        (section) => (section.slug = slugify(section?.navigationName || section?.title || ""))
    );
</script>

<div
    class="PAGE is{capitalize(color)} useTexture"
    style:--colorPage={color ? `var(--${color})` : "silver"}
    style:--colorPage-light={color ? `var(--${color}-light)` : "gainsboro"}
    style:--colorPage-highlight={color ? `var(--${color}-highlight)` : "gainsboro"}
>
    <Header>
        {#if usePageTitle}
            <Title>
                <TitleGroup classes="useText-xxl" {title} />
            </Title>
        {/if}
    </Header>

    <Main>
        {#if sections.filter((s) => s.title || s.navigationName).length}
            <NavigationPage {sections} />
        {/if}
        <slot />

        {#if sections}
            {#each sections as section}
                <MainSection {section} />
            {/each}
        {/if}
    </Main>

    {#if hasContactButton}
        <div class="fixedButton">
            <Button href="/kontakt" isVertical={true} ariaLabel="Gehe zur Kontaktseite"
                >Kontakt</Button
            >
        </div>
    {/if}
    <Footer {hasGoTopButton} />
</div>

<style lang="postcss">
    .PAGE {
        position: relative;
        display: flex;
        flex-direction: column;
        min-height: 100%;
        padding: 0 var(--page-padding-x);
        max-width: var(--page-maxWidth);
        margin: 0 auto;
    }

    .PAGE > :global(*) {
        flex-shrink: 0;
        isolation: isolate;
    }

    .PAGE > :global(.HEADER) {
        z-index: var(--zPos-midFront);
    }

    .PAGE > :global(.MAIN) {
        z-index: var(--zPos-middle);
    }

    .fixedButton {
        position: fixed;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        --button-background: hsla(0, 0%, 100%, 0.8);
        z-index: var(--zPos-front);
    }

    /* INTERNET EXPLORER
###############################################################################
#############################################################################*/

    :global(.isIE) {
        .PAGE {
            display: block;
            padding: 0 100px;
            max-width: 1000px;
        }

        .fixedButton {
            left: -24px;
            right: auto;
            top: 0;
            transform: rotate(-90deg);
            pointer-events: none;
        }

        .fixedButton :global(*) {
            pointer-events: all;
        }
    }

    @media (--ie-medium) {
        :global(.isIE) {
            .PAGE {
                padding: 0 5vw;
            }
        }
    }
</style>
