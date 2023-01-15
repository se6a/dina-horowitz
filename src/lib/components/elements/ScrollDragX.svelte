<div class="SCROLL-DRAG-X">
  <div class="content">
    <slot />
  </div>
</div>

<style lang="postcss">
  @import "$lib/css/breakpoints.css";

  .SCROLL-DRAG-X {
    position: relative;
    width: 100vw;
    left: calc(var(--page-padding-x) * -1);
    display: flex;
    align-items: flex-end;
  }

  .content {
    padding: 0 var(--page-padding-x);
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    margin-top: auto;
  }

  /* INTERNET EXPLORER
###############################################################################
#############################################################################*/

  @media (--ie) {
    .SCROLL-DRAG-X {
      display: block;
      width: 100%;
      left: 0;
    }

    .content {
      overflow: hidden;
    }
  }
</style>
