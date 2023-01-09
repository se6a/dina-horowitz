<script>
  import HoverArrow from "../elements/HoverArrow.svelte";
  export let data = {};
  const {title = "", href = ""} = data;
  const target = href.startsWith("/") || href.startsWith("#") ? "_self" : "_blank";
</script>

<a class="LINK" {href} {target}>
  <HoverArrow>
    {title}
  </HoverArrow>
</a>

<style>
</style>
