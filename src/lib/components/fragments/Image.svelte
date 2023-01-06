<figure class="IMAGE">
  <div class="pushHeight" />
  <picture>
    <!-- {#each sources as src}
      <source />
    {/each}
    <img src="" alt="" /> -->
  </picture>
</figure>

<style>
  .IMAGE {
    width: 100%;
    position: relative;
    display: block;
    margin-bottom: auto;
  }

  .pushHeight {
    padding-top: 100%;
  }

  picture {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border: 1px solid black;
  }
</style>
