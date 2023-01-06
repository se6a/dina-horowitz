<script>
  import LabelArrow from "../fragments/LabelArrow.svelte";
  export let data = {};
  const {title = "", href = ""} = data;
  const target = href.startsWith("/") || href.startsWith("#") ? "_self" : "_blank";
</script>

<a class="LINK" {href} {target}>
  <LabelArrow>
    {title}
  </LabelArrow>
</a>

<style>
</style>
