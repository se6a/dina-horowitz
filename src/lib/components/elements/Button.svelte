<script>
  import HoverArrow from "../elements/HoverArrow.svelte";
  export let isVertical = false;
  export let href = "";
  export let onClick = () => null;
  export let ariaLabel = "";
</script>

{#if href}
  {@const target = href.startsWith("/") ? "_self" : "_blank"}
  <a class="BUTTON" class:isVertical {href} {target} aria-label={ariaLabel}>
    <HoverArrow {isVertical}><slot /></HoverArrow>
  </a>
{:else}
  <button class="BUTTON" class:isVertical on:click={onClick} aria-label={ariaLabel}>
    <HoverArrow {isVertical}><slot /></HoverArrow>
  </button>
{/if}

<style lang="postcss">
  .BUTTON {
    background-color: var(--button-background, white);
    color: var(--black);
    padding: 0.4em 1em;
    --label-slide: 0.5em;
  }

  .isVertical {
    padding: 1em 0.4em;
    /* Fix no width on FF: */
    width: 2em;
  }

  :global(.isIE) {
    .BUTTON {
      background-color: white;
    }

    .isVertical {
      width: auto;
      padding: 1em 1em;
    }
  }
</style>
