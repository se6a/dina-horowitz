<script>
    import Component from "./_Component.svelte";

    export let marks = [];
    export let markDefs = [];

    const [crnt, ...rest] = marks;
    const data = markDefs.find((d) => d._key === crnt) || {};
    const componentName = data?._type ? data?._type : crnt;
</script>

{#if componentName}
    <Component name={componentName} {data}>
        <svelte:self marks={rest} {markDefs}>
            <slot />
        </svelte:self>
    </Component>
{:else}
    <slot />
{/if}
