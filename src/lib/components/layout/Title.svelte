<script>
</script>

<div class="LAYOUT-TITLE layout useFullwidthBg">
  <slot />
</div>

<style>
  .LAYOUT-TITLE {
    padding: var(--layoutTitle-padding-t) 0 var(--layoutTitle-padding-b) var(--title-inset);
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
    background-color: var(--colorPage);
  }
</style>
