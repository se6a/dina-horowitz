<script>
  import {browser} from "$app/environment";
  import {onMount} from "svelte";

  let overflow = 0;
  let NContainer;
  let NDragable;
  let startPos = 0;
  let left = 0;

  function getOverflow() {
    const diff = NDragable.clientWidth - NContainer.clientWidth;
    if (diff > 0) overflow = diff;
    else left = overflow = 0;
  }

  onMount(() => {
    getOverflow();
    if (!browser) return;
    window.addEventListener("resize", getOverflow);
  });

  function dragging(e) {
    const dist = e.clientX - startPos;
    if (dist > 0) left = 0;
    else if (dist < overflow * -1) left = overflow * -1;
    else left = dist;
  }

  function dragStart(e) {
    if (!overflow) return;
    startPos = e.clientX - left;
    document.body.addEventListener("mousemove", dragging);
    document.body.addEventListener(
      "mouseup",
      () => {
        document.body.removeEventListener("mousemove", dragging);
      },
      {once: true}
    );
  }
</script>

<div class="SCROLL-DRAG-X" bind:this={NContainer}>
  <div class="inner" style:--left={left + "px"} bind:this={NDragable} on:mousedown={dragStart}>
    <slot />
  </div>
</div>

<style>
  .SCROLL-DRAG-X {
    position: relative;
    border: 2px solid red;
  }

  .inner {
    position: relative;
    width: max-content;
    user-select: none;
    left: var(--left);
  }
</style>
