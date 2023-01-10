<script>
  import Card from "$lib/components/elements/Card.svelte";
  import WordDisplay from "$lib/components/elements/WordDisplay.svelte";
</script>

<div class="useGrid">
  <div class="cell" style:--background="var(--blue)">
    <WordDisplay />
  </div>
  <div class="cell" style:--background="var(--blue)">
    <Card href="/angebot/alle">
      <h2 class="titleGroup" slot="title">
        <span>Für Familien</span>
        <span>Beratung und Case Management</span>
      </h2>
      <p slot="content">
        Sie sind als Familie in der Abklärungsspirale gelandet und sehen vor lauter Bäumen den Wald
        nicht mehr? Ich begleite Sie durch den Prozess – von Anfang bis Ende.
      </p>
    </Card>
  </div>

  <div class="cell" style:--background="var(--red)">
    <Card href="/angebot/fachpersonen">
      <h2 class="titleGroup" slot="title">
        <span>Für Fachpersonen</span>
        <span>Supervision und Teamentwicklung</span>
      </h2>

      <p slot="content">
        Sie wollen als Fachpersonen Ihre Arbeit reflektieren oder wünschen sich eine Veränderung im
        Team? Ich unterstütze Sie dabei Ihre Arbeit zu reflektieren oder begleite Teamprozesse.
      </p>
    </Card>
  </div>

  <div class="cell" style:--background="var(--green)">
    <Card href="/angebot/alle">
      <h2 class="titleGroup" slot="title">
        <span> Für Alle </span>
        <span>Coaching und psychologische Beratung</span>
      </h2>

      <p slot="content">
        Sie wünschen sich Veränderung oder Stärkung in privaten oder beruflichen Situationen? Ich
        begleite Sie dabei Lösungen für Ihre persönliche oder berufliche Anliegen zu finden.
      </p>
    </Card>
  </div>
</div>

<style lang="postcss">
  @import "$lib/css/breakpoints.css";

  .cell {
    position: relative;
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
    background-color: var(--background);
  }

  .cell:nth-child(odd)::after {
    right: 0;
  }

  .cell:nth-child(even)::after {
    left: 0;
  }

  .ifCompact {
    display: none;
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
</style>
