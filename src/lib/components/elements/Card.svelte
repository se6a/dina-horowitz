<script>
  import HoverArrow from "$lib/components/elements/HoverArrow.svelte";
  import Button from "$lib/components/elements/Button.svelte";

  export let href = "";
</script>

<a class="CARD" {href}>
  <HoverArrow useBigArrow={true}>
    <slot name="title" />
    <div class="space-1" />
    <slot name="content" />
    <div class="ifCompact">
      <div class="space-2" />
      <Button>Mehr</Button>
    </div>
  </HoverArrow>
</a>

<style lang="postcss">
  @import "$lib/css/breakpoints.css";

  .CARD > :global(.HOVER-ARROW .icon) {
    --icon-size: var(--font-size-l);
    --icon-height: 100%;
    --icon-width: var(--font-size-l);
  }

  .ifCompact {
    display: none;
  }

  @media (--vw-m) {
    .CARD > :global(.HOVER-ARROW:hover) {
      transform: translate(0, 0);
    }

    .CARD > :global(.HOVER-ARROW:hover > .icon) {
      pointer-events: none;
      opacity: 0;
    }

    .ifCompact {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
</style>
