<script>
  import Title from "$lib/components/layout/Title.svelte";
  import MainSection from "$lib/components/layout/MainSection.svelte";
  import Columns from "$lib/components/fragments/Columns.svelte";
  import Image from "$lib/components/fragments/Image.svelte";
  import Text from "$lib/components/fragments/Text.svelte";
  import List from "$lib/components/fragments/List.svelte";
  import TextBoxCollapsible from "$lib/components/elements/TextBoxCollapsible.svelte";
  import TextBox from "$lib/components/fragments/TextBox.svelte";
  import Offers from "$lib/components/elements/Offers.svelte";

  const pageNav = [
    {title: "Angebot", href: "#angebot"},
    {title: "Konditionen", href: "#konditionen"}
  ];

  const color = "red";
</script>

<div class="style" />

<Title {pageNav} {color}>
  <h1>Für Fachpersonen</h1>
  <p>Supervision & Teamentwicklung</p>
</Title>

<MainSection id="angebot" {color}>
  <svelte:fragment slot="title">Angebot</svelte:fragment>

  <h2>Fallsupervision (einzeln / im Team)</h2>
  <div class="space-1" />
  <Columns>
    <div class="column">
      <Text>
        <p style="font-size: var(--font-size-l)">
          Für Fachpersonen rund um Schule, Familienarbeit und psychosozialen Beratungskontext.
        </p>
        <p style="font-size: var(--font-size-l)">
          Für Kinder- und Jugendpsycholog:innen in der Weiterbildung zum Fachtitel.
        </p>
      </Text>
    </div>

    <div class="column">
      <Text>
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
      </Text>
    </div>
  </Columns>

  <div class="space-4" />

  <h2>Teamentwicklung (bis 6 Personen)</h2>
  <div class="space-1" />
  <Columns>
    <div class="column">
      <Text>
        <p style="font-size: var(--font-size-l)">
          Für Teams im pädagogischen, psychosozialen, beraterischen, kreativen, kulturellen und
          NGO-Kontext.
        </p>
      </Text>
    </div>

    <div class="column">
      <Text>
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
      </Text>
    </div>
  </Columns>
</MainSection>

<MainSection id="konditionen" {color}>
  <svelte:fragment slot="title">Konditionen</svelte:fragment>

  <Columns>
    <div class="column">
      <h3>Kosten</h3>
      <Offers {color} />
    </div>

    <div class="column">
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
  </Columns>
</MainSection>

<style>
  .style ~ :global(*) {
    --highlighter-color: var(--red);
  }
</style>
