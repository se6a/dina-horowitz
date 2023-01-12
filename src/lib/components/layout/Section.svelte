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
    <!-- {#each title.split(" ") as part} -->
    <Highlighter>
      <!-- {part} -->
      <slot name="title" />
    </Highlighter>
    <!-- {/each} -->
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

  .content :global(.column) {
    display: flex;
    flex-direction: column;
    gap: var(--layoutSection-spacing-y);
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
</style>
