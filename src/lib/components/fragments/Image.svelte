<script>
  export let src = "";
</script>

<figure class="IMAGE">
  <picture>
    <!-- {#each sources as src}
      <source />
    {/each} -->
    <img {src} alt="" />
  </picture>
</figure>

<style>
  .IMAGE {
    width: 100%;
    position: relative;
    display: block;
    margin-bottom: auto;
  }

  picture {
    display: flex;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
</style>
