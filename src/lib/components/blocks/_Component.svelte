<script>
    import Normal from "./styles/Normal.svelte";
    import List from "./styles/List.svelte";
    import Underline from "./styles/Underline.svelte";
    import Highlight from "./styles/Highlight.svelte";
    import Strong from "./styles/Strong.svelte";
    import Link from "./styles/Link.svelte";
    import TextXl from "./styles/TextXL.svelte";
    import H3 from "./styles/H3.svelte";
    import Quote from "./styles/Quote.svelte";

    export let name = "";
    export let data = {};

    const components = {
        normal: {comp: Normal},
        list: {comp: List},
        highlight: {comp: Highlight},
        underline: {comp: Underline},
        strong: {comp: Strong},
        link: {comp: Link, data},
        h3: {comp: H3},
        "bigText-xl": {comp: TextXl},
        "text-xl": {comp: TextXl},
        quote: {comp: Quote}
    };

    const component = components[name];
    if (!component) console.warn(`No Style for ${name} fount.`);
</script>

{#if component}
    {@const {comp, ...rest} = component}
    <svelte:component this={comp} {...rest}>
        <slot />
    </svelte:component>
{:else}
    <slot />
{/if}
