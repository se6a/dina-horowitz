<script>
  import Title from "$lib/components/layout/Title.svelte";
  import Grid from "$lib/components/layout/Grid.svelte";
  import Columns from "$lib/components/fragments/Columns.svelte";
  import LabelArrow from "$lib/components/fragments/LabelArrow.svelte";
</script>

<Title>
  <Columns>
    <div class="columns">
      <div class="textAnimation">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
    <div class="columns">
      <a href="/angebot/familien">
        <LabelArrow useBigArrow={true}>
          <h1>Für Familien</h1>
          <h2>Beratung und Case Management</h2>
          <div class="space-1" />
          <p>
            Sie sind als Familie in der Abklärungsspirale gelandet und sehen vor lauter Bäumen den
            Wald nicht mehr? Ich begleite Sie durch den Prozess – von Anfang bis Ende.
          </p>
        </LabelArrow>
      </a>
    </div>
  </Columns>
</Title>

<Grid />

<style>
  :global(.SECTION-TITLE) .columns h1,
  :global(.SECTION-TITLE) .columns h2 {
    font-size: var(--font-size-l);
  }

  :global(.SECTION-TITLE) .columns p {
    font-size: var(--font-size-m);
    max-width: 100%;
  }

  :global(.SECTION-TITLE) .columns :global(.LABEL-ARROW .icon) {
    --icon-size: var(--font-size-l);
    --icon-height: 100%;
    --icon-width: var(--font-size-l);
  }

  .textAnimation {
    margin-right: var(--space-1);
    width: auto;
    height: 40vh;
    display: flex;
    flex-direction: column;
  }

  .textAnimation > div {
    width: 100%;
    height: var(--space-2);
    background-color: hsla(0, 0%, 100%, 0.3);
  }

  .textAnimation > div + div {
    margin-top: 0.4rem;
  }
</style>
