<script>
  import Title from "$lib/components/layout/Title.svelte";
  import MainSection from "$lib/components/layout/Section.svelte";
  import Image from "$lib/components/fragments/Image.svelte";
  import List from "$lib/components/fragments/List.svelte";
  import TextBoxCollapsible from "$lib/components/elements/TextBoxCollapsible.svelte";
  import TextBox from "$lib/components/fragments/TextBox.svelte";
  import Offers from "$lib/components/elements/Offers.svelte";

  const pageNav = [
    {title: "Problemstellung", href: "#problemstellung"},
    {title: "Herausforderungen", href: "#herausforderungen"},
    {title: "Angebot", href: "#angebot"},
    {title: "Konditionen", href: "#konditionen"}
  ];

  const color = "blue";
</script>

<div class="style" />

<Title {pageNav} {color}>
  <h1 class="titleGroup">
    <span>Für Familien</span>
    <span>Beratung & Case Management</span>
  </h1>
</Title>

<MainSection id="problemstellung" {color}>
  <svelte:fragment slot="title">Problemstellung</svelte:fragment>
  <div class="useColumns">
    <Image />
    <TextBox {color}>
      <svelte:fragment slot="title">Sie fragen sich...</svelte:fragment>
      <List>
        <li>Haben wir etwas falsch gemacht?</li>
        <li>Was kommt auf uns zu?</li>
        <li>Was müssen wir / was dürfen wir?</li>
        <li>Was wird von uns erwartet?</li>
        <li>Wird unser Kind stigmatisiert?</li>
        <li>Landen wir in einer Abklärungssprirale?</li>
        <li>Welchen Fachpersonen werden wir begegnen?</li>
      </List>
    </TextBox>
  </div>
</MainSection>

<MainSection id="herausforderungen" {color}>
  <svelte:fragment slot="title">Herausforderungen</svelte:fragment>

  <div class="useColumns">
    <Image />
    <TextBox {color}>
      <svelte:fragment slot="title">Sie kennen folgende Stressfaktoren</svelte:fragment>
      <List>
        <li>
          Sie fühlen sich von der Schule, von Fachstellen oder Institutionen unter Druck gesetzt?
        </li>
        <li>Sie fühlen sich nicht gehört, alleine gelassen oder ohnmächtig?</li>
        <li>Sie werden von der einen zur nächsten Fachstelle geschickt?</li>
        <li>Es fehlt eine Gesamtbetrachtung aller Empfehlungen?</li>
        <li>Sie haben das Gefühl niemand übernimmt die Koordination?</li>
        <li>Sie verlieren den Überblick über Fachstellen, Empfehlungen, Massnahmen und Termine?</li>
        <li>
          Ihr Familienleben gerät durcheinander, weil Sie sich nur noch mit Organisatorischem für
          Ihr/e Kind/er beschäftigen müssen?
        </li>
      </List>
    </TextBox>
  </div>
</MainSection>

<MainSection id="angebot" {color}>
  <svelte:fragment slot="title">Angebot</svelte:fragment>

  <div class="useColumns">
    <div class="column">
      <TextBox {color}>
        <svelte:fragment slot="title">Ihr Bedarf</svelte:fragment>
        <List>
          <li>Sie möchten erfahren, was auf Sie als Familie zukommt</li>
          <li>Sie suchen Orientierung in der Vielfalt der Institutionen / Angebote</li>
          <li>Sie wollen Antworten auf Fragen im Zusammenhang mit Abklärungen</li>
          <li>Sie benötigen fachliche Einordnung von bisherigen Berichten und Empfehlungen</li>
          <li>
            Sie wünschen sich Klarheit über konkrete nächste Schritte und angestrebte Lösungen
          </li>
          <li>
            Sie suchen eine neutrale Vertrauensperson, um Ihre Sorgen zu besprechen oder Sie zu
            Gesprächen zu begleiten
          </li>
          <li>Sie möchten administrativen und organisatorische Arbeiten abgeben können.</li>
        </List>
      </TextBox>
      <Image />
    </div>

    <div class="column">
      <TextBox {color}>
        <svelte:fragment slot="title">Ihre Ziele</svelte:fragment>
        <List>
          <li>
            Sie haben eine Klarheit, welche Unterstützung Sie für Ihr Kind in Anspruch wollen.
          </li>
          <li>Sie kennen Ihre Möglichkeiten.</li>
          <li>Sie fühlen sich handlungsfähig.</li>
          <li>Sie sind gestärkt, mit dem Druck von aussen umzugehen</li>
          <li>Sie verfügen als Familie wieder über mehr zeitliche und emotionale Ressourcen.</li>
          <li>Sie erlangen mehr Sicherheit im Gespräch mit Fachpersonen.</li>
          <li>
            Bei neu auftauchen Fragen haben Sie eine fachliche Ansprechperson, die Sie und Ihr Kind
            kennt
          </li>
        </List>
      </TextBox>
      <Image />
    </div>
  </div>
</MainSection>

<MainSection id="konditionen" {color}>
  <svelte:fragment slot="title">Konditionen</svelte:fragment>

  <div class="useColumns">
    <div class="column">
      <div class="useBasicText">
        <h3>Kosten</h3>
        <Offers {color} />
      </div>
    </div>

    <div class="column">
      <div class="useBasicText">
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
  </div>
</MainSection>

<style>
  .style ~ :global(*) {
    --highlighter-color: var(--blue);
  }
</style>
