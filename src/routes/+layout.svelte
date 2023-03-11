<script>
    import "$lib/css/normalize.css";
    import "$lib/css/fonts.css";
    import "$lib/css/breakpoints.css";
    import "$lib/css/variables.css";
    import "$lib/css/style.css";
    import "$lib/css/flags.css";

    import {setContext} from "svelte";
    import {siteData, pageData} from "$lib/store";

    export let data = {};
    const {isIE = false} = data;

    $: $siteData = data;

    setContext("isIE", isIE);
</script>

<svelte:head>
    <link rel="stylesheet" href={isIE ? "/css/ie.css" : ""} />
    <title>Dina Horowitz - {$pageData?.metaTitle || ""} - Basel</title>
    <meta name="description" content={$pageData?.metaDescription || ""} />
</svelte:head>

{#if isIE}
    <div class="isIE">
        <slot />
    </div>
{:else}
    <slot />
{/if}

<style lang="postcss">
    :global(html) {
        scroll-behavior: smooth;
    }

    /* INTERNET EXPLORER
###############################################################################
#############################################################################*/

    :global(.isIE) {
        font-size: 2.4rem;
        color: hsl(0, 0%, 22%);
    }
</style>
