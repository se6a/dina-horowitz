<script>
  import Page from "$lib/components/layout/Page.svelte";
  import WordDisplay from "$lib/components/elements/WordDisplay.svelte";
  import Card from "$lib/components/elements/Card.svelte";
  import {getContext} from "svelte";

  const color = "blue";

  const isIE = getContext("isIE");
</script>

<Page {color}>
  <div class="useGrid">
    {#if !isIE}
      <div class="cell" style:--colorCell="var(--blue)">
        <WordDisplay />
      </div>
    {/if}
    <div class="isBlue cell useBackground-fullwidth" style:--colorCell="var(--blue)">
      <Card href="/angebot/familien">
        <h2 class="titleGroup" slot="title">
          <span>Für Familien</span>
          <span>Beratung & <br />Case Management</span>
        </h2>
        <p slot="content">
          Sie sind als Familie in der Abklärungsspirale gelandet und hangeln sich von Fachstelle zu
          Fachstelle auf der Suche nach Unterstützung für Ihr Kind? Ich begleite Sie durch den
          Prozess – von Anfang bis Ende.
        </p>
      </Card>
    </div>

    <div class="isRed cell useBackground-fullwidth" style:--colorCell="var(--red)">
      <Card href="/angebot/fachpersonen">
        <h2 class="titleGroup" slot="title">
          <span>Für Fachpersonen</span>
          <span>Supervision & <br />Teamentwicklung</span>
        </h2>

        <p slot="content">
          Sie wollen als Fachpersonen Ihre Arbeit reflektieren oder wünschen sich eine Veränderung
          im Team? Ich biete Ihnen Struktur und Orientierung in diesen Prozessen.
        </p>
      </Card>
    </div>

    <div class="isGreen cell useBackground-fullwidth" style:--colorCell="var(--green)">
      <Card href="/angebot/alle">
        <h2 class="titleGroup" slot="title">
          <span> Für Alle </span>
          <span>Coaching & <br />psychologische Beratung</span>
        </h2>

        <p slot="content">
          Sie wünschen sich Veränderung oder Stärkung in privaten oder beruflichen Situationen? Ich
          entwickle mit Ihnen Lösungen für Ihre Anliegen.
        </p>
      </Card>
    </div>
  </div>
</Page>

<style lang="postcss">
  @import "$lib/css/breakpoints.css";

  .cell {
    position: relative;
    display: flex;
  }

  .cell:nth-child(odd) {
    padding-left: 0;
  }

  .cell:nth-child(even) {
    padding-right: 0;
  }

  .cell::after {
    content: "";
    position: absolute;
    z-index: -1;
    display: block;
    top: 0;
    bottom: 0;
    width: 50vw;
    left: unset;
    margin-left: unset;
    background-color: var(--colorCell);
  }

  .cell:nth-child(odd)::after {
    right: 0;
  }

  .cell:nth-child(even)::after {
    left: 0;
  }

  @media (--vw-m) {
    .cell {
      padding: var(--space-2) 0;
    }

    .cell:nth-child(odd)::after,
    .cell:nth-child(even)::after {
      width: 100vw;
      margin-left: 50%;
      left: -50vw;
    }
  }

  /* INTERNET EXPLORER
###############################################################################
#############################################################################*/

  :global(.isIE) {
    .isBlue.cell {
      background-color: hsl(189, 59%, 65%) !important;
    }

    .isRed.cell {
      background-color: hsl(8, 100%, 77%) !important;
    }

    .isGreen.cell {
      background-color: hsl(67, 57%, 47%) !important;
    }
  }
</style>
