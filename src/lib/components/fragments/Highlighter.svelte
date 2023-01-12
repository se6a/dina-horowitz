<script>
  export let color = "";
</script>

<span class="HIGHLIGHTER" style:--colorHighlight={color ? `var(--${color})` : "var(--colorPage)"}
  ><slot /></span
>

<style>
  .HIGHLIGHTER {
    position: relative;
    white-space: nowrap;
  }

  .HIGHLIGHTER::before {
    content: "";
    position: absolute;
    bottom: 0.2em;
    left: -0.1em;
    right: -0.5em;
    height: 0.5em;
    z-index: -1;
    background-color: var(--colorHighlight, gainsboro);
  }
</style>
