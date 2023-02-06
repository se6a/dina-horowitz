<script>
</script>

<div class="LAYOUT-TITLE layout useBackground-fullwidth useTexture-fullwidth">
    <slot />
</div>

<style lang="postcss">
    @import "$lib/css/breakpoints.css";

    .LAYOUT-TITLE {
        padding: var(--layoutTitle-padding-t) 0 var(--layoutTitle-padding-b) var(--layout-inset-l);
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    /* INTERNET EXPLORER
###############################################################################
#############################################################################*/

    :global(.isIE) {
        .LAYOUT-TITLE {
            padding: 30px;
        }
    }
</style>
