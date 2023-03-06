<script>
    import {pascalize} from "$lib/functions/utility";
    export let name = "unnamed";
    export let preserveRatio = true;
    export let classes = "";
    export let viewBox = [0, 0, 10, 10];
    export let useNonScalingStroke = true;

    const preserveAspectRatio = preserveRatio ? "xMidYMid meet" : "none";
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    class="ICON icon{pascalize(name)}{classes ? ` ${classes}` : ''}"
    class:useNonScalingStroke
    width="{viewBox[2]}px"
    height="{viewBox[3]}px"
    viewBox={viewBox.join(" ")}
    {preserveAspectRatio}
>
    <slot />
</svg>

<style>
    .ICON {
        overflow: visible;
        height: var(--icon-height, var(--icon-size, 100%));
        width: var(--icon-width, var(--icon-size, 100%));
        stroke-width: var(--icon-strokeWidth, 1px);
        stroke: var(--icon-color, none);
        fill: var(--icon-fill, currentColor);
    }

    .ICON.useNonScalingStroke :global(*) {
        vector-effect: non-scaling-stroke;
    }
</style>
