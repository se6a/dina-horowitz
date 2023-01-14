<script>
  import Page from "$lib/components/layout/Page.svelte";
  import Highlighter from "$lib/components/fragments/Highlighter.svelte";
</script>

<Page color="yellow">
  <div class="space-l" />
  <h2>
    <Highlighter>Impressum</Highlighter>
  </h2>
  <div class="space-s" />

  <div class="useColumns">
    <div class="box">
      <address>
        <span>Dina Horowitz</span>
        <span>Unterer Batterieweg 85</span>
        <span>4059 Basel, Schweiz</span>
        <a class="textLink" href="mailto:info@dinahorowitz.ch" target="_blank" rel="noreferrer">
          info@dinahorowitz.ch
        </a>
      </address>
      <div class="space-m" />
      <ul>
        <li>
          <a class="textLink" href="https://www.dinahorowitz.ch" target="_blank" rel="noreferrer">
            Text, Redaktion & Angebot: Dina Horowitz
          </a>
        </li>
        <li>
          <a class="textLink" href="https://gianbesset.ch" target="_blank" rel="noreferrer">
            Design: Gian Besset Brand Design
          </a>
        </li>
        <li>
          <a class="textLink" href="https://www.sarahweishaupt.ch" target="_blank" rel="noreferrer">
            Illustrationen: Sarah Weishaupt
          </a>
        </li>
        <li>Kreis-Diagramm nach einer Idee von Andreas Hamann</li>
        <li>
          <a class="textLink" href="https://www.barbarakern.com" target="_blank" rel="noreferrer">
            Fotografie: Barbara Kern
          </a>
        </li>
        <li>
          <a class="textLink" href="https://sebaaa.ch/" target="_blank" rel="noreferrer">
            Programmierung & Animation: Sebastian Wyss
          </a>
        </li>
      </ul>
    </div>
  </div>
</Page>

<style>
  address {
    display: flex;
    flex-direction: column;
  }

  ul {
    font-size: var(--font-size-s);
  }

  li + li {
    margin-top: 1em;
  }
</style>
