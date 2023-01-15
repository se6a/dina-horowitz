<script>
  import Highlighter from "../fragments/Highlighter.svelte";
  export let id = "";

  export let title = "";
</script>

<section class="LAYOUT-SECTION">
  {#if id}
    <div class="anchor" {id} />
  {/if}

  <h2>
    <Highlighter>
      <slot name="title" />
    </Highlighter>
  </h2>

  <div class="space-var" style:--space="var(--layoutSection-spacing-y)" />

  <div class="content">
    <slot />
  </div>
</section>

<style lang="postcss">
  @import "$lib/css/breakpoints.css";

  .LAYOUT-SECTION {
    padding: var(--layoutSection-padding-t) 0 var(--layoutSection-padding-b) 0;
    position: relative;
    isolation: isolate;
    --useColumns-gap-y: var(--layoutSection-spacing-y);
  }

  .LAYOUT-SECTION :global(.HIGHLIGHTER::before) {
    transform: scaleX(0);
    transform-origin: left;
    transition: transform var(--duration-slow);
  }

  .LAYOUT-SECTION:global(.isIntersecting .HIGHLIGHTER::before) {
    transform: scaleX(1);
  }

  .LAYOUT-SECTION:nth-child(odd)::after {
    content: "";
    display: block;
    background-color: var(--colorPage-light);
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100vw;
    left: -50vw;
    margin-left: 50%;
    z-index: -1;
  }

  .LAYOUT-SECTION h2 {
    font-size: var(--font-size-l);
    text-transform: uppercase;
    margin-left: var(--layout-inset-l);
    letter-spacing: 0.08em;
  }

  .content {
    display: flex;
    flex-direction: column;
  }

  .anchor {
    width: 0px;
    height: 0px;
    pointer-events: none;
    -webkit-user-select: none;
    user-select: none;
    position: absolute;
    top: calc(-1 * var(--header-height));
  }

  .LAYOUT-SECTION :global(.useText-xl) {
    /* margin-top: -0.45em; */
    margin-top: -0.17em;
  }

  @media (--vw-m) {
    .LAYOUT-SECTION :global(.useText-xl) {
      margin-top: 0;
    }
  }

  /* INTERNET EXPLORER
###############################################################################
#############################################################################*/

  @media (--ie) {
    .LAYOUT-SECTION {
      padding: 30px !important;
    }

    .content {
      display: block;
      flex-direction: none;
    }

    .content > :global(* > *) {
      margin-top: 50px;
    }

    .LAYOUT-SECTION h2 {
      font-size: 3rem;
      display: inline-block;
    }

    :global(.isBlue) .LAYOUT-SECTION:nth-child(odd),
    :global(.isBlue) .LAYOUT-SECTION h2 {
      background-color: hsla(189, 59%, 65%, 0.2) !important;
    }

    :global(.isRed) .LAYOUT-SECTION:nth-child(odd),
    :global(.isRed) .LAYOUT-SECTION h2 {
      background-color: hsla(8, 100%, 77%, 0.2) !important;
    }

    :global(.isGreen) .LAYOUT-SECTION:nth-child(odd),
    :global(.isGreen) .LAYOUT-SECTION h2 {
      background-color: hsla(67, 57%, 47%, 0.2) !important;
    }

    :global(.isYellow) .LAYOUT-SECTION:nth-child(odd),
    :global(.isYellow) .LAYOUT-SECTION h2 {
      background-color: hsla(51, 100%, 68%, 0.2) !important;
    }
  }
</style>
