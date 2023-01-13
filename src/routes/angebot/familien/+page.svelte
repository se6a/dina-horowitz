<script>
  import Page from "$lib/components/layout/Page.svelte";
  import Title from "$lib/components/layout/Title.svelte";
  import NavigationPage from "$lib/components/layout/NavigationPage.svelte";
  import MainSection from "$lib/components/layout/Section.svelte";
  import Image from "$lib/components/fragments/Image.svelte";
  import List from "$lib/components/fragments/List.svelte";
  import BoxCollapsible from "$lib/components/elements/BoxCollapsible.svelte";
  import useHighlight from "$lib/functions/useHighlight";

  const pageNav = [
    {title: "Problemstellung", href: "#problemstellung"},
    {title: "Herausforderungen", href: "#herausforderungen"},
    {title: "Angebot", href: "#angebot"},
    {title: "Konditionen", href: "#konditionen"}
  ];

  const color = "blue";
</script>

<Page {color}>
  <svelte:fragment slot="header">
    <Title>
      <h1 class="titleGroup useText-xxl">
        <span>Für Familien</span>
        <span>Beratung &<br />Case Management</span>
      </h1>
    </Title>
  </svelte:fragment>
  <NavigationPage {pageNav} />

  <MainSection id="problemstellung">
    <svelte:fragment slot="title">Problemstellung</svelte:fragment>
    <div class="useColumns">
      <div class="box">
        <blockquote class="useQuote useText-xl">
          Wir möchten Ihr Kind gerne beim Schulpsychologischen Dienst abklären lassen.
        </blockquote>
      </div>
      <div class="box">
        <p>
          Ein grosser Schritt im Leben Ihres Kindes, im Leben Ihrer Familie:
          {@html useHighlight`Ihr Kind kommt in den Kindergarten / in die Schule`}. Viele Eltern
          kennen und fürchten diesen Satz. Und müssen erstmal leer schlucken.
        </p>
      </div>
    </div>
    <div class="useColumns">
      <div class="box">
        <Image src="/images/Dina_1_web.png" />
      </div>
      <BoxCollapsible>
        <svelte:fragment slot="title">Sie fragen sich...</svelte:fragment>
        <List>
          <li>Haben wir etwas falsch gemacht?</li>
          <li>Was kommt auf uns zu?</li>
          <li>Was müssen wir / was dürfen wir?</li>
          <li>Was wird von uns erwartet?</li>
          <li>Wird unser Kind stigmatisiert?</li>
          <li>Landen wir in einer Abklärungsspirale?</li>
          <li>Welchen Fachpersonen werden wir begegnen?</li>
        </List>
      </BoxCollapsible>
    </div>
  </MainSection>

  <MainSection id="herausforderungen">
    <svelte:fragment slot="title">Herausforderungen</svelte:fragment>

    <div class="useColumns">
      <div class="box">
        <p class="useText-xl">
          Die Fragen sind schier endlos, die Sorgen und Nöte gross, das System, in dem Ihr/e Kind/er
          und Sie sich bewegen komplex.
        </p>
      </div>

      <div class="box">
        <p>
          Der Aufwand solche Abklärungsprozesse zu durchlaufen und zu managen kann einer unbezahlten
          Teilzeitstelle gleichkommen und
          {@html useHighlight`Familien an ihre Grenzen bringen`}. Viele Fachpersonen in Kinder-,
          Jugend- und Familien-Fachstellen haben aufgrund enormer Fallzahlen oft wenig Zeit. Wegen
          des begrenzten Auftrags dürfen sie Sie nur punktuell begleiten.
        </p>
      </div>
    </div>

    <div class="useColumns">
      <div class="box">
        <Image src="/images/Dina_2_web.png" />
      </div>
      <BoxCollapsible>
        <svelte:fragment slot="title">Sie kennen folgende Stressfaktoren</svelte:fragment>
        <List>
          <li>
            Sie fühlen sich von der Schule, von Fachstellen oder Institutionen unter Druck gesetzt
          </li>
          <li>Sie fühlen sich nicht gehört, alleine gelassen oder ohnmächtig</li>
          <li>Sie werden von der einen zur nächsten Fachstelle geschickt</li>
          <li>Es fehlt eine Gesamtbetrachtung aller Empfehlungen</li>
          <li>Sie haben das Gefühl niemand übernimmt die Koordination</li>
          <li>
            Sie verlieren den Überblick über Fachstellen, Empfehlungen, Massnahmen und Termine
          </li>
          <li>
            Ihr Familienleben gerät durcheinander, weil Sie sich nur noch mit Organisatorischem für
            Ihr/e Kind/er beschäftigen müssen
          </li>
        </List>
      </BoxCollapsible>
    </div>
  </MainSection>

  <MainSection id="angebot">
    <svelte:fragment slot="title">Angebot</svelte:fragment>

    <div class="useColumns">
      <div class="box">
        <p class="useText-xl">Ich begleite Sie von Anfang bis zum Ende.</p>
      </div>
      <div class="box">
        <p>
          {@html useHighlight`Fachberaterin, Coach, Case Managerin, Vertrauensperson`}
          - Sie entscheiden, welche Rolle Sie sich von mir wünschen.
        </p>
      </div>
    </div>

    <div class="useColumns">
      <div class="box">
        <BoxCollapsible>
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
            <li>Sie möchten administrativen und organisatorische Arbeiten abgeben können</li>
          </List>
        </BoxCollapsible>

        <div class="box">
          <Image src="/images/Dina_4_web.png" />
        </div>
      </div>

      <div class="box">
        <BoxCollapsible>
          <svelte:fragment slot="title">Ihre Ziele</svelte:fragment>
          <List>
            <li>
              Sie haben eine Klarheit, welche Unterstützung Sie für Ihr Kind in Anspruch wollen
            </li>
            <li>Sie kennen Ihre Möglichkeiten</li>
            <li>Sie fühlen sich handlungsfähig</li>
            <li>Sie sind gestärkt, mit dem Druck von aussen umzugehen</li>
            <li>Sie verfügen als Familie wieder über mehr zeitliche und emotionale Ressourcen</li>
            <li>Sie erlangen mehr Sicherheit im Gespräch mit Fachpersonen</li>
            <li>
              Bei neu auftauchen Fragen haben Sie eine fachliche Ansprechperson, die Sie und Ihr
              Kind kennt
            </li>
          </List>
        </BoxCollapsible>

        <div class="box">
          <Image src="/images/Dina_3_web.png" />
        </div>
      </div>
    </div>
  </MainSection>

  <MainSection id="konditionen">
    <svelte:fragment slot="title">Konditionen</svelte:fragment>

    <div class="useColumns">
      <div class="box">
        <h3>Kosten</h3>
        <List hasBullets={false}>
          <li class="box offer useBackground-light">
            <div class="prize">180.- pro 60 Min.</div>
            <div class="space-1" />
            <p>
              Aktuell werden die Kosten für die Familienberatung und das freiwillige Case Management
              von Ihnen selbst übernommen.
            </p>
          </li>
        </List>
      </div>

      <div class="box">
        <h3>Örtlichkeiten</h3>
        <List>
          <li>In meinen Räumlichkeiten</li>
          <li>bei Ihnen zuhause</li>
          <li>ab 2. Termin online möglich</li>
          <li>bei einem Spaziergang draussen an der frischen Luft</li>
        </List>
      </div>
    </div>
  </MainSection>
</Page>

<style>
</style>
