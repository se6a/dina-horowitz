<script>
  import "$lib/css/normalize.css";
  import "$lib/css/fonts.css";
  import "$lib/css/breakpoints.css";
  import "$lib/css/variables.css";
  import "$lib/css/layout.css";
  import "$lib/css/style.css";
  import "$lib/css/flags.css";

  export let data = {};
  const {isIE = false} = data;
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
</style>
