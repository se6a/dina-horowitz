<script>
  import ScrollDragX from "../elements/ScrollDragX-2.svelte";
  export let color = "blue";
  export let pageNav = [];
</script>

<div class="LAYOUT-TITLE layout useFullwidthBg" style:--background="var(--{color})">
  <slot />

  <div class="space-2" />

  <ScrollDragX>
    <nav class="pageNavigation anchors">
      {#each pageNav as { title, href }}
        <a class="anchor" {href}>{title}</a>
      {/each}
    </nav>
  </ScrollDragX>
</div>

<style>
  .LAYOUT-TITLE {
    padding: var(--layoutTitle-padding-t) var(--title-inset) var(--layoutTitle-padding-b)
      var(--title-inset);
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .pageNavigation {
    font-size: var(--font-size-m);
    display: flex;
    gap: var(--space-2);
    margin-top: auto;
    width: fit-content;
  }

  .pageNavigation > * {
    flex-shrink: 0;
  }

  .useFullwidthBg {
    position: relative;
  }

  .useFullwidthBg::after {
    content: "";
    display: block;
    position: absolute;
    width: 100vw;
    top: 0;
    bottom: 0;
    margin-left: 50%;
    left: -50vw;
    z-index: -1;
    background-color: var(--background, silver);
  }

  .anchor {
    transition: color var(--duration-fast);
  }

  .anchor:hover {
    color: white;
  }
</style>
