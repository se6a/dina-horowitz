<span class="HIGHLIGHTER"><slot /></span>

<style>
  .HIGHLIGHTER {
    position: relative;
    /* transition: transform var(--duration-middle); */
  }

  .HIGHLIGHTER::before {
    content: "";
    position: absolute;
    bottom: 0.2em;
    left: -0.1em;
    right: -0.5em;
    height: 0.5em;
    /* transform: scaleX(1);
    transform-origin: left; */
    z-index: -1;
    background-color: var(--highlighter-color, var(--yellow));
  }
</style>
