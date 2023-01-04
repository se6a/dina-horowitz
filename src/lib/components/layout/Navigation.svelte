<script>
  export let navigation = [];
</script>

<nav class="NAVIGATION">
  <a href=""><span class="arrow">></span>Dina Horowitz</a>
  <a href="">Angebot</a>
  <a href="">Über mich</a>
</nav>

<style>
  @import "$lib/css/breakpoints.css";

  .NAVIGATION {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    z-index: 100;
  }

  a {
    position: relative;
    left: -2rem;
    transition: left 200ms;
  }

  a .arrow {
    width: 2rem;
    opacity: 0;
    transition: opacity 200ms;
  }

  a:hover {
    left: 0;
  }

  a:hover .arrow {
    opacity: 1;
  }

  /*
###############################################################################################*/
</style>
