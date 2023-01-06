<script>
  import Highlighter from "../fragments/Highlighter.svelte";
  export let id = "";
  export let color = "";
</script>

<section {id} class="MAIN-SECTION" style:--background="var(--{color}-light)">
  <h3>
    <Highlighter>
      <slot name="title" />
    </Highlighter>
  </h3>
  <div class="space-2" />
  <div class="content">
    <slot />
  </div>
</section>

<style lang="postcss">
  @import "$lib/css/breakpoints.css";

  .MAIN-SECTION {
    padding: var(--space-2) 0;
    position: relative;
    isolation: isolate;
  }

  .MAIN-SECTION:nth-child(even)::after {
    content: "";
    display: block;
    background-color: var(--background);
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100vw;
    left: -50vw;
    margin-left: 50%;
    z-index: -1;
  }

  h3 {
    text-transform: uppercase;
  }

  .content {
    display: flex;
    flex-direction: column;
  }
</style>
