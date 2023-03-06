<script>
    import Header from "$lib/components/layout/Header.svelte";
    import Footer from "$lib/components/layout/Footer.svelte";
    import SectionNavigation from "$lib/components/layout/SectionNavigation.svelte";
    import Main from "$lib/components/layout/Main.svelte";
    import Title from "$lib/components/layout/Title.svelte";
    import TitleGroup from "$lib/components/elements/TitleGroup.svelte";
    import MainSection from "$lib/components/layout/Section.svelte";
    import {capitalize, slugify} from "$lib/functions/utility";
    import {pageData as _pageData} from "$lib/store";

    export let data = {};

    export let color = "";
    export let hasGoTopButton = true;
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
    class="PAGE is{capitalize(color)}"
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
            <SectionNavigation {sections} />
        {/if}
        <slot />

        {#if sections}
            {#each sections as section}
                <MainSection {section} />
            {/each}
        {/if}
    </Main>

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

    /* INTERNET EXPLORER
###############################################################################
#############################################################################*/

    :global(.isIE) {
        .PAGE {
            display: block;
            padding: 0 100px;
            max-width: 1000px;
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
