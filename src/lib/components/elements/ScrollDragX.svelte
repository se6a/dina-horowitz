<div class="SCROLL-DRAG-X">
  <div class="content">
    <slot />
  </div>
</div>

<style>
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
    margin-top: auto;
  }
</style>
