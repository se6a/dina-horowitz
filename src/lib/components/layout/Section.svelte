<script>
  import Highlighter from "../fragments/Highlighter.svelte";
  export let id = "";
</script>

<section {id} class="LAYOUT-SECTION">
  <h3>
    <Highlighter>
      <slot name="title" />
    </Highlighter>
  </h3>

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

  .LAYOUT h3 {
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
</style>
