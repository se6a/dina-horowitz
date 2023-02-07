<script>
  import Footer from "$lib/components/layout/Footer.svelte";
  import Header from "$lib/components/layout/Header.svelte";
  import Main from "$lib/components/layout/Main.svelte";
  import Button from "$lib/components/elements/Button.svelte";
  import {capitalize} from "$lib/functions/utility";

  export let data = {};
  export let color = "";
  export let hasGoTopButton = true;
  export let hasContactButton = true;

  const {isIE = false} = data;
</script>

<div
  class="PAGE is{capitalize(color)}"
  style:--colorPage={color ? `var(--${color})` : "silver"}
  style:--colorPage-light={color ? `var(--${color}-light)` : "gainsboro"}
  style:--colorPage-highlight={color ? `var(--${color}-highlight)` : "gainsboro"}
>
  <Header>
    <slot name="header" />
  </Header>
  <Main>
    <slot />
  </Main>
  {#if hasContactButton}
    <div class="fixedButton">
      <Button href="/kontakt" isVertical={true} ariaLabel="Gehe zur Kontaktseite">Kontakt</Button>
    </div>
  {/if}
  <Footer {hasGoTopButton} />
</div>

<style lang="postcss">
  .PAGE {
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 100%;
    border: 4px solid red;
    padding: 0 var(--page-padding-x);
    max-width: var(--page-maxWidth);
    margin: 0 auto;
  }

  .PAGE > :global(*) {
    flex-shrink: 0;
    isolation: isolate;
  }

  .PAGE > :global(.HEADER) {
    z-index: var(--zPos-midFront);
  }

  .PAGE > :global(.MAIN) {
    z-index: var(--zPos-middle);
  }

  .fixedButton {
    position: fixed;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    --button-background: hsla(0, 0%, 100%, 0.8);
    z-index: var(--zPos-front);
  }

  /* INTERNET EXPLORER
###############################################################################
#############################################################################*/

  :global(.isIE) {
    .PAGE {
      display: block;
      padding: 0 100px;
      max-width: 1000px;
    }

    .fixedButton {
      left: -24px;
      right: auto;
      top: 0;
      transform: rotate(-90deg);
      pointer-events: none;
    }

    .fixedButton :global(*) {
      pointer-events: all;
    }
  }

  @media (--ie-medium) {
    :global(.isIE) {
      .PAGE {
        padding: 0 5vw;
      }
    }
  }
</style>
