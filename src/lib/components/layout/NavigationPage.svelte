<script>
  import ScrollDragX from "../elements/ScrollDragX-2.svelte";

  export let pageNav = [];
</script>

<nav class="PAGE-NAVIGATION anchors useFullwidthBg">
  <ScrollDragX>
    <div class="anchorContainer">
      {#each pageNav as { title, href }}
        <a class="anchor" {href}>{title}</a>
      {/each}
    </div>
  </ScrollDragX>
</nav>

<style>
  .PAGE-NAVIGATION {
    font-size: var(--font-size-m);
    height: var(--header-height);
    background-color: var(--color);
    display: flex;
    gap: var(--space-2);
    margin-top: auto;
    width: 100%;
    align-items: center;
    position: relative;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: var(--zPos-front);
  }

  .anchorContainer {
    display: flex;
    gap: var(--space-2);
    padding-left: var(--title-inset);
  }

  .PAGE-NAVIGATION > * {
    flex-shrink: 0;
  }

  .anchor {
    transition: color var(--duration-fast);
  }

  .anchor:hover {
    color: white;
  }
</style>
