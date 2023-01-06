<script>
  import LabelArrow from "../fragments/LabelArrow.svelte";
  export let isVertical = false;
  export let href = "";
  export let onClick = () => null;
</script>

{#if href}
  {@const target = href.startsWith("/") ? "_self" : "_blank"}
  <a class="BUTTON" class:isVertical {href} {target}>
    <LabelArrow {isVertical}><slot /></LabelArrow>
  </a>
{:else}
  <button class="BUTTON" class:isVertical on:click={onClick}>
    <LabelArrow {isVertical}><slot /></LabelArrow>
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
