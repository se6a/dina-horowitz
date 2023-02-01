<script>
    export let data;
    const href = data?.href || "";
</script>

<a class="textLink" {href}>
    <slot />
</a>
