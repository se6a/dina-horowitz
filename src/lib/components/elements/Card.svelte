<script>
  import HoverArrow from "$lib/components/elements/HoverArrow.svelte";
  import Button from "$lib/components/elements/Button.svelte";

  export let href = "";
</script>

<a class="CARD box doPassHover" {href}>
  <HoverArrow useBigArrow={true}>
    <slot name="title" />
  </HoverArrow>
  <div class="space-1" />
  <slot name="content" />
  <div class="ifCompact">
    <div class="space-2" />
    <Button ariaLabel="Gehe zum Angebot">Mehr</Button>
  </div>
</a>

<style lang="postcss">
  @import "$lib/css/breakpoints.css";

  .CARD > :global(.HOVER-ARROW .icon) {
    --icon-size: 1.4em;
    --icon-height: 100%;
    --icon-width: 1.4em;
  }

  .ifCompact {
    display: none;
  }

  @media (--vw-m) {
    .CARD.doPassHover:hover > :global(.HOVER-ARROW) {
      transform: translate(0, 0) !important;
    }

    .CARD.doPassHover:hover > :global(.HOVER-ARROW > .icon) {
      pointer-events: none !important;
      opacity: 0 !important;
    }

    .ifCompact {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
</style>
