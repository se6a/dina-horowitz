<script>
  import HoverArrow from "../elements/HoverArrow.svelte";
  export let isVertical = false;
  export let href = "";
  export let onClick = () => null;
</script>

{#if href}
  {@const target = href.startsWith("/") ? "_self" : "_blank"}
  <a class="BUTTON" class:isVertical {href} {target}>
    <HoverArrow {isVertical}><slot /></HoverArrow>
  </a>
{:else}
  <button class="BUTTON" class:isVertical on:click={onClick}>
    <HoverArrow {isVertical}><slot /></HoverArrow>
  </button>
{/if}

<style>
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
</style>
