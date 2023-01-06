<script>
  import {browser} from "$app/environment";
  import {onMount} from "svelte";

  // function init(N) {
  //   console.log(N.children[0].clientWidth);
  // }
</script>

<div class="SCROLL-DRAG-X">
  <div class="inner">
    <div class="inner2">
      <slot />
    </div>
  </div>
</div>

<style>
  .SCROLL-DRAG-X {
    position: relative;
    /* border: 2px solid red; */
  }

  .inner {
    position: relative;
    width: 100vw;
    left: calc(var(--page-padding-x) * -1);
    right: 100px;
    overflow: hidden;
    display: flex;
    align-items: flex-end;
  }

  .inner2 {
    padding: 0 var(--page-padding-x);
    width: 100%;
    overflow-x: auto;
    margin-top: auto;
  }
</style>
