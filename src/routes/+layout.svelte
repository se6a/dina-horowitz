<script>
  import "$lib/css/normalize.css";
  import "$lib/css/fonts.css";
  import "$lib/css/breakpoints.css";
  import "$lib/css/variables.css";
  import "$lib/css/layout.css";
  import "$lib/css/style.css";
  import "$lib/css/flags.css";

  import Footer from "$lib/components/layout/Footer.svelte";
  import Header from "$lib/components/layout/Header.svelte";
  import Main from "$lib/components/layout/Main.svelte";

  export let data = {};
</script>

<div class="page">
  <Header />
  <Main>
    <slot />
  </Main>
  <Footer />
</div>

<style>
  .page {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    border: 10px solid green;
  }

  .page > :global(*) {
    flex-shrink: 0;
  }

  :global(.layout) {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    padding: 0 var(--page-padding-x);
  }

  :global(.layout > *) {
    grid-column: 2;
    max-width: 1000px;
  }
</style>
