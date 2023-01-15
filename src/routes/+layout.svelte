<script>
  import "$lib/css/normalize.css";
  import "$lib/css/fonts.css";
  import "$lib/css/breakpoints.css";
  import "$lib/css/variables.css";
  import "$lib/css/layout.css";
  import "$lib/css/style.css";
  import "$lib/css/flags.css";
  import {setContext} from "svelte";

  export let data = {};
  const {isIE = false} = data;
  setContext("isIE", isIE);
</script>

<svelte:head>
  <link rel="stylesheet" href={isIE ? "/css/ie.css" : ""} />
  <title>Dina Horowitz</title>
  <meta
    name="description"
    content="Fachpsychologin für Kinder- & Jugendpsychologie FSP Entwicklungs- und Persönlichkeitspsychologin in Basel."
  />
</svelte:head>

<slot />

<style>
  :global(body) {
    scroll-behavior: smooth;
  }

  /* INTERNET EXPLORER
###############################################################################
#############################################################################*/

  @media screen and (min-width: 0\0) and (min-resolution: +72dpi) {
    :global(body) {
      font-size: 2.4rem;
      color: hsl(0, 0%, 22%);
    }
  }
</style>
