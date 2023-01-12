<script>
  import ScrollDragX from "../elements/ScrollDragX.svelte";

  export let pageNav = [];
</script>

<nav class="PAGE-NAVIGATION anchors useFullwidthBg">
  <ScrollDragX>
    {#each pageNav as { title, href }}
      <a class="anchor" {href}>{title}</a>
    {/each}
  </ScrollDragX>
</nav>

<style>
  .PAGE-NAVIGATION {
    font-size: var(--font-size-m);
    height: var(--header-height);
    background-color: var(--color);
    display: flex;
    margin-top: auto;
    width: 100%;
    align-items: center;
    position: relative;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: var(--zPos-front);
  }

  .PAGE-NAVIGATION > * {
    flex-shrink: 0;
  }

  .anchor:first-child {
    margin-left: var(--layout-inset-l);
  }

  .anchor:last-child {
    margin-right: var(--page-padding-x);
  }

  .anchor {
    transition: color var(--duration-fast);
  }

  .anchor + .anchor {
    margin-left: var(--space-m);
  }

  .anchor:hover {
    color: white;
  }
</style>
