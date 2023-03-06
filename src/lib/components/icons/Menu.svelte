<script>
    import Icon from "./_Icon.svelte";
    export let preserveRatio = true;
    export let isOpen = false;
</script>

<Icon classes={isOpen ? "isOpen" : ""} viewBox={[0, 0, 36, 20]} name="menu" {preserveRatio}>
    <g class="wrapper" class:isOpen>
        <g class="showWhenClosed">
            <path d="M 0,1 L 36,1" />
            <path d="M 0,10 L 36,10" />
            <path d="M 0,19 L 36,19" />
        </g>

        <g class="showWhenOpen">
            <path d="M 6,-2 L 30,22" />
            <path d="M 6,22 L 30,-2" />
        </g>
    </g>
</Icon>

<style>
    .showWhenClosed,
    .showWhenOpen {
        transition: opacity var(--duration-fast);
    }

    .isOpen .showWhenClosed,
    .showWhenOpen {
        opacity: 0;
    }

    .showWhenClosed,
    .isOpen .showWhenOpen {
        opacity: 1;
    }

    .wrapper {
        transform: rotate(0deg);
        transform-origin: center center;
        transition: transform var(--duration-fast);
    }

    .wrapper.isOpen {
        transform: rotate(180deg);
    }
</style>
