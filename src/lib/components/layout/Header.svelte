<script>
    import {siteData} from "$lib/store";
    import MainNavigation from "$lib/components/layout/MainNavigation.svelte";
    import MainNavigationCompact from "$lib/components/layout/MainNavigationCompact.svelte";

    const angebote = $siteData?.siteNavigation || [];

    const items = [
        {title: "Dina Horowitz", href: "/"},

        {
            title: "Angebot",
            subItems:
                angebote?.map(({title, id}) => {
                    return {
                        title: title,
                        href: `/angebot/${id}`,
                        color: id === "alle" ? "green" : id === "fachpersonen" ? "red" : "blue"
                    };
                }) || []
        },

        {title: "Über mich", href: "/uebermich"},

        {title: "Kontakt", href: "/kontakt"}
    ];
</script>

<header class="HEADER" class:useBorder={false}>
    <MainNavigation {items} />
    <MainNavigationCompact {items} />

    <slot />
</header>

<style global lang="postcss">
    @import "$lib/css/breakpoints.css";

    .HEADER.HEADER > :global(.MAIN-NAVIGATION-COMPACT) {
        display: none;
    }

    @media (--vw-m) {
        .HEADER.HEADER > :global(.MAIN-NAVIGATION-COMPACT) {
            display: flex;
        }

        .HEADER.HEADER > :global(.MAIN-NAVIGATION) {
            display: none;
        }
    }
</style>
