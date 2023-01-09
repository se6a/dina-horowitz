<script>
  import Title from "$lib/components/layout/Title.svelte";
  import MainSection from "$lib/components/layout/Section.svelte";
  import Image from "$lib/components/fragments/Image.svelte";
  import List from "$lib/components/fragments/List.svelte";
  import Offers from "$lib/components/elements/Offers.svelte";

  const pageNav = [
    {title: "Angebot", href: "#angebot"},
    {title: "Konditionen", href: "#konditionen"}
  ];

  const color = "red";
</script>

<div class="style" />

<Title {pageNav} {color}>
  <h1 class="titleGroup">
    <span>Für Fachpersonen</span>
    <span>Supervision & Teamentwicklung</span>
  </h1>
</Title>

<MainSection id="angebot" {color}>
  <svelte:fragment slot="title">Angebot</svelte:fragment>

  <h4>Fallsupervision (einzeln / im Team)</h4>
  <div class="space-1" />
  <div class="useColumns">
    <div class="column useBasicText">
      <p class="useBigText">
        Für Fachpersonen rund um Schule, Familienarbeit und psychosozialen Beratungskontext.
      </p>
      <p class="useBigText">
        Für Kinder- und Jugendpsycholog:innen in der Weiterbildung zum Fachtitel.
      </p>
    </div>

    <div class="column useBasicText">
      <p>
        Die Fallsupervision ermöglicht Qualitätssicherung und -steigerung im beruflichen Handeln.
        Verstrickungen, Haltungen, Rollen und Zusammenarbeiten innerhalb eines Teams und mit
        relevanten Partner:innen können reflektiert und verbessert werden. So gewinnen Sie ein
        umfassendes Verständnis einer komplexen Situation, weitere Handlungsoptionen, zusätzliche
        Kompetenzen und Klarheit.
      </p>
      <p>
        Die Fallsupervision kann im Einzel- oder im Team durchgeführt werden. Ich bin gelistete
        Supervisorin der SKJP.
      </p>
    </div>
  </div>

  <div class="space-4" />

  <h4>Teamentwicklung (bis 6 Personen)</h4>
  <div class="space-1" />
  <div class="useColumns">
    <div class="column useBasicText">
      <p class="useBigText">
        Für Teams im pädagogischen, psychosozialen, beraterischen, kreativen, kulturellen und
        NGO-Kontext.
      </p>
    </div>

    <div class="column useBasicText">
      <p>
        Teamentwicklung dient dazu die Zusammenarbeit zu reflektieren, Störungen zu identifizieren
        und individuelle Stärken sowie Ressourcen aufzudecken. Dabei entwickeln wir gemeinsam, wie
        das Zusammenspiel im Team gewinnbringend gestärkt werden kann. Ich unterstütze Sie dabei
        eine Teamkultur zu etablieren, in der Akzeptanz, Offenheit und Vertrauen gelebt werden.
      </p>
      <p>
        Sie haben als Team eine gut funktionierende Kultur etabliert und wollen diese präventiv
        pflegen. Hierfür biete ich Ihnen ebenfalls einen Reflexionsraum.
      </p>
    </div>
  </div>
</MainSection>

<MainSection id="konditionen" {color}>
  <svelte:fragment slot="title">Konditionen</svelte:fragment>

  <div class="useColumns">
    <div class="column useBasicText">
      <h3>Kosten</h3>
      <Offers {color} />
    </div>

    <div class="column useBasicText">
      <h3>Örtlichkeiten</h3>
      <List>
        <li>In meinen Räumlichkeiten</li>
        <li>bei Ihnen zuhause</li>
        <li>ab 2. Termin online möglich</li>
        <li>bei einem Spaziergang draussen an der frischen Luft</li>
      </List>
      <h3>Tarife</h3>
      <p>
        Aktuell werden die Kosten für die Familienberatung und das freiwillige Case Management von
        Ihnen selbst übernommen. Ich bin bemüht Lösungen mit Stiftungen zu finden, um die Tarife
        besser nach Ihren familiären Möglichkeiten gestalten zu können.
      </p>
      <p>
        Sollte es Ihnen nicht möglich sein, die aufgeführten Tarife zu leisten, bin ich bereit mit
        Ihnen nach einer passenden Lösung zu suchen.
      </p>
    </div>
  </div>
</MainSection>

<style>
  .style ~ :global(*) {
    --highlighter-color: var(--red);
  }
</style>
