<script>
  import Button from "../elements/Button.svelte";
  import Section from "../fragments/Section.svelte";
</script>

<div class="GRID layout">
  <div class="content">
    <Section background="var(--red)">
      <a href="/angebot/fachpersonen">
        <h2>Für Fachpersonen</h2>
        <h3>Supervision und Teamentwicklung</h3>

        <div class="space-1" />

        <p>
          Sie wollen als Fachpersonen Ihre Arbeit reflektieren oder wünschen sich eine Veränderung
          im Team? Ich unterstütze Sie dabei Ihre Arbeit zu reflektieren oder begleite Teamprozesse.
        </p>

        <div class="ifCompact">
          <div class="space-2" />
          <Button>Mehr</Button>
        </div>
      </a>
    </Section>

    <Section background="var(--green)">
      <a href="/angebot/alle">
        <h2>Für Alle</h2>
        <h3>Coaching und psychologische Beratung</h3>

        <div class="space-1" />

        <p>
          Sie wünschen sich Veränderung oder Stärkung in privaten oder beruflichen Situationen? Ich
          begleite Sie dabei Lösungen für Ihre persönliche oder berufliche Anliegen zu finden.
        </p>

        <div class="ifCompact">
          <div class="space-2" />
          <Button>Mehr</Button>
        </div>
      </a>
    </Section>
  </div>
</div>

<style>
  @import "$lib/css/breakpoints.css";

  .content {
    display: grid;
    position: relative;
    grid-template-columns: 50% 50%;
    height: auto;
  }

  .content > :global(*) {
    position: relative;
    padding: var(--space-2);
  }

  .content > :global(:nth-child(1)) {
    padding-left: 0;
  }

  .content > :global(:nth-child(2)) {
    padding-right: 0;
  }

  .content > :global(*::after) {
    content: "";
    position: absolute;
    z-index: -1;
    display: block;
    top: 0;
    bottom: 0;
    width: 50vw;
    background-color: var(--background);
  }

  .content > :global(:nth-child(1)::after) {
    right: 0;
  }

  .content > :global(:nth-child(2)::after) {
    left: 0;
  }

  .ifCompact {
    display: none;
  }

  @media (--vw-m) {
    .content {
      grid-template-columns: 100%;
      grid-template-rows: auto;
      grid-auto-flow: row;
    }

    .ifCompact {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .content.content > :global(*) {
      padding: var(--space-2) 0;
    }

    .content > :global(*::after) {
      width: 100vw;
    }

    .content.content > :global(*::after) {
      margin-left: 50%;
      left: -50vw;
    }
  }
</style>
