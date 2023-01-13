<div class="blue">
  <!--  -->
</div>

<div class="white" />

<style>
  div {
    width: 100%;
    height: 100vh;
    background-color: var(--blue);
    position: relative;
  }

  .white {
    background-color: white;
  }

  div::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    background-image: url("/images/texture.png");
    opacity: 0.2;
  }
</style>
