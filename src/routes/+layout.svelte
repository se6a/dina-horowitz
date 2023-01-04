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
  <div class="fixed">
    <button> Kontakt </button>
  </div>
  <Footer />
</div>

<style>
  .page {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    padding: 0 var(--page-padding-x);
    max-width: var(--page-maxWidth);
    margin: 0 auto;
  }

  .page > :global(*) {
    flex-shrink: 0;
  }

  .fixed {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    writing-mode: vertical-rl;
  }

  button {
    background-color: hsla(0, 0%, 100%, 0.5);
    position: relative;
    display: block;
    padding: 2rem 0.5rem;
    margin: auto;
    transform: rotate(180deg);
  }
</style>
