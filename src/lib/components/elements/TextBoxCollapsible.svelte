<script>
  import {createId} from "$lib/functions/utility";
  import IconArrow from "$lib/components/icons/ArrowSmall.svelte";

  const id = createId();
  export let color = "";

  let contentHeight = 0;

  function observeHeight(N) {
    contentHeight = N.clientHeight;
    window.addEventListener("resize", () => {
      contentHeight = N.clientHeight;
    });
  }
</script>

<section class="TEXT-BOX-COLLAPSIBLE" style:--background="var(--{color})">
  <input {id} type="checkbox" tabindex="-1" />

  <header class="header">
    <label class="title" for={id}>
      <h3>
        <slot name="title" />
      </h3>
      <div class="icon">
        <IconArrow />
      </div>
    </label>
  </header>

  <div class="contentWrapper" style:--height="{contentHeight}px">
    <div class="content" use:observeHeight>
      <slot />
    </div>
  </div>
</section>

<style>
  .TEXT-BOX-COLLAPSIBLE {
    width: 100%;
    margin-bottom: auto;
    background-color: var(--background, silver);
  }

  .header {
    padding: var(--space-1);
  }

  .content {
    padding: 0 var(--space-1) var(--space-1) var(--space-1);
  }

  .header {
    user-select: none;
  }

  .title {
    display: flex;
    justify-content: space-between;
  }

  .icon {
    --icon-width: 0.75em;
  }

  input {
    width: 0;
    height: 0;
    user-select: none;
    pointer-events: none;
    position: absolute;
    visibility: hidden;
  }

  .contentWrapper {
    height: 0;
    overflow: hidden;
    transition: height var(--duration-middle);
  }

  .icon {
    transform: rotate(90deg);
    transition: transform var(--duration-middle);
  }

  input:checked ~ .contentWrapper {
    height: auto;
    height: var(--height);
  }

  input:checked ~ .header .icon {
    transform: rotate(-90deg);
  }
</style>
