<script>
  import Small from "$lib/components/icons/ArrowSmall.svelte";
  import Big from "$lib/components/icons/ArrowBig.svelte";

  export let isVertical = false;
  export let useBigArrow = false;
</script>

<div class="HOVER-ARROW" class:isVertical>
  <div class="icon">
    {#if useBigArrow}
      <Big />
    {:else}
      <Small />
    {/if}
  </div>
  <div class="content">
    <slot />
  </div>
</div>

<style>
  .HOVER-ARROW {
    display: flex;
    position: relative;
    --slide: var(--label-slide, 1em);
    transition: transform var(--duration-middle);
    transform: translate(0, 0);
  }

  .isVertical {
    flex-direction: column-reverse;
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

  .isVertical > .icon {
    transform: translate(0, calc(100% + var(--slide)));
    --icon-width: 100%;
    width: 100%;
    height: fit-content;
    padding: 0;
  }

  .isVertical .icon :global(.ICON) {
    transform: rotate(-90deg);
  }

  .isVertical .content {
    writing-mode: vertical-lr;
    transform: rotate(180deg);
  }

  :global(.doPassHover:hover) .HOVER-ARROW,
  .HOVER-ARROW:hover {
    transform: translate(var(--slide), 0);
  }

  .HOVER-ARROW.isVertical:hover {
    transform: translate(0, calc(-1 * var(--slide)));
  }

  :global(.doPassHover:hover) .HOVER-ARROW > .icon,
  .HOVER-ARROW:hover > .icon {
    pointer-events: all;
    opacity: 1;
  }
</style>
