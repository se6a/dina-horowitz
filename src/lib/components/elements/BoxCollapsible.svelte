<script>
  import {createId} from "$lib/functions/utility";
  import IconArrow from "$lib/components/icons/ArrowSmall.svelte";

  const id = createId();

  let contentHeight = 0;

  function observeHeight(N) {
    contentHeight = N.clientHeight;
    window.addEventListener("resize", () => {
      contentHeight = N.clientHeight;
    });
  }
</script>

<section class="BOX-COLLAPSIBLE box">
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
  .BOX-COLLAPSIBLE {
    width: 100%;
    margin-bottom: auto;
    background-color: var(--colorPage-light);
    --textBox-padding: var(--box-padding, 3rem);
  }

  .header {
    padding: var(--textBox-padding);
  }

  .content {
    padding: 0 var(--textBox-padding) var(--textBox-padding) var(--textBox-padding);
  }

  .header {
    user-select: none;
  }

  .title {
    display: flex;
    justify-content: space-between;
  }

  .icon {
    width: 1.2em;
    height: 1.2em;
    --icon-size: 1.2em;
    margin: auto 0;
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
