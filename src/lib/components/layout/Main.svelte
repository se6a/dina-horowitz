<script>
    import {afterUpdate} from "svelte";

    let observer;
    const observerOptions = {
        rootMargin: "0px",
        threshold: 0.15
    };

    let NMain;

    afterUpdate(() => {
        observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) entry.target.classList.add("isIntersecting");
                else entry.target.classList.remove("isIntersecting");
            });
        }, observerOptions);

        [...NMain.children].forEach((NChild) => observer.observe(NChild));
        return () => [...NMain.children].forEach((NChild) => observer.unobserve(NChild));
    });
</script>

<main class="MAIN" class:useBorder={false} bind:this={NMain}>
    <slot />
</main>

<style lang="postcss">
    @import "$lib/css/breakpoints.css";

    .MAIN {
        display: flex;
        flex-direction: column;
        flex: 1;
        margin-top: var(--main-marginTop);
    }

    /* INTERNET EXPLORER
###############################################################################
#############################################################################*/

    :global(.isIE) {
        .MAIN {
            display: block;
            flex-direction: none;
            flex: none;
            margin-top: 0;
        }

        .MAIN > :global(* + *) {
            margin-top: 100px;
        }
    }
</style>
