<script>
  import {afterUpdate, beforeUpdate, onDestroy} from "svelte";

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
    console.log("MOUNT");

    return () => [...NMain.children].forEach((NChild) => observer.unobserve(NChild));
  });

  onDestroy(() => {
    console.log("DESTROY");
  });

  beforeUpdate(() => {
    console.log("BEFORE UPDATE");
  });

  afterUpdate(() => {
    console.log("AFTER UPDATE");
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
</style>
