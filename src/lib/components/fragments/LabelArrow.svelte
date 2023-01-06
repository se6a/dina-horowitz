<script>
  import Small from "$lib/components/icons/ArrowSmall.svelte";
  import Big from "$lib/components/icons/ArrowBig.svelte";

  export let isVertical = false;
  export let useBigArrow = false;
</script>

<div class="LABEL-ARROW" class:isVertical>
  <div class="icon">
    {#if useBigArrow}
      <Big />
    {:else}
      <Small />
    {/if}
  </div>
  <div class="text">
    <slot />
  </div>
</div>

<style>
  .LABEL-ARROW {
    display: flex;
    position: relative;
    --slide: var(--label-slide, 1em);
    transition: transform var(--duration-middle);
    transform: translate(0, 0);
  }

  .isVertical {
    flex-direction: column;
  }

  .icon {
    position: absolute;
    --icon-height: 1em;
    --icon-width: fit-content;
    padding-right: var(--slide);
    transform: translate(-100%, 0);
    height: 100%;
    pointer-events: none;
    opacity: 0;
    transition: opacity var(--duration-middle);
  }

  .isVertical .icon {
    transform: translate(0, -100%);
    --icon-width: 100%;
    width: 100%;
    padding-right: 0;
    height: fit-content;
    padding-bottom: var(--slide);
  }

  .isVertical :global(.ICON) {
    transform: rotate(90deg);
  }

  .isVertical .text {
    writing-mode: vertical-lr;
    transform: rotate(180deg);
  }

  .LABEL-ARROW:hover {
    transform: translate(var(--slide), 0);
  }

  .LABEL-ARROW.isVertical:hover {
    transform: translate(0, var(--slide));
  }

  .LABEL-ARROW:hover .icon {
    pointer-events: all;
    opacity: 1;
  }
</style>
