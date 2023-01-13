<script>
  import Page from "$lib/components/layout/Page.svelte";
  import Title from "$lib/components/layout/Title.svelte";
  import NavigationPage from "$lib/components/layout/NavigationPage.svelte";
  import MainSection from "$lib/components/layout/Section.svelte";
  import Image from "$lib/components/fragments/Image.svelte";
  import List from "$lib/components/fragments/List.svelte";
  import TextBoxCollapsible from "$lib/components/elements/BoxCollapsible.svelte";

  const pageNav = [
    {title: "Angebot", href: "#angebot"},
    {title: "Fallsupervision", href: "#fallsupervision"},
    {title: "Teamentwicklung", href: "#teamentwicklung"},
    {title: "Konditionen", href: "#konditionen"}
  ];

  const color = "red";
</script>

<Page {color}>
  <svelte:fragment slot="header">
    <Title>
      <h1 class="titleGroup useText-xxl">
        <span>Für Fachpersonen</span>
        <span>Supervision &<br />Teamentwicklung</span>
      </h1>
    </Title>
  </svelte:fragment>

  <NavigationPage {pageNav} />

  <MainSection id="angebot">
    <svelte:fragment slot="title">Angebot</svelte:fragment>
    <div class="useColumns">
      <div class="box">
        <blockquote class="useQuote useText-xl">
          Begleitete Reflexion hilft, um im beruflichen Alltag nicht blind zu werden.
        </blockquote>
      </div>
      <div class="box">
        <p>
          Gerne begleite ich Ihren Prozess <span class="useHighlight"
            >hypno-systemisch und lösungsfokussiert</span
          >. Dabei bringe ich mein Wissen und meine Erfahrung zur fachspezifischen Arbeit, zur
          interdisziplinären Zusammenarbeit sowie zur Prozessgestaltung ein.
        </p>
      </div>
    </div>
  </MainSection>

  <MainSection id="fallsupervision">
    <svelte:fragment slot="title">Fallsupervision (einzeln / im Team)</svelte:fragment>

    <div class="useColumns">
      <div class="box">
        <p class="useText-xl">
          Für Fachpersonen rund um Schule, Familienarbeit und psychosozialen Beratungskontext. Für
          Kinder- und Jugendpsycholog:innen in der Weiterbildung zum Fachtitel.
        </p>
      </div>

      <div class="box">
        <p>
          Die Fallsupervision ermöglicht <span class="useHighlight"
            >Qualitätssicherung und -steigerung</span
          > im beruflichen Handeln. Verstrickungen, Haltungen, Rollen und Zusammenarbeiten innerhalb
          eines Teams und mit relevanten Partner:innen können reflektiert und verbessert werden. So gewinnen
          Sie ein umfassendes Verständnis einer komplexen Situation, weitere Handlungsoptionen, zusätzliche
          Kompetenzen und Klarheit.
        </p>
        <p>
          Die Fallsupervision kann im Einzel- oder im Team durchgeführt werden. Ich bin gelistete
          Supervisorin der SKJP.
        </p>
      </div>
    </div>
  </MainSection>

  <MainSection id="teamentwicklung">
    <svelte:fragment slot="title">Teamentwicklung (bis 6 Personen)</svelte:fragment>

    <div class="useColumns">
      <div class="box">
        <p class="useText-xl">
          Für Teams im pädagogischen, psychosozialen, beraterischen, kreativen, kulturellen und
          NGO-Kontext.
        </p>
      </div>

      <div class="box">
        <p>
          Teamentwicklung dient dazu die Zusammenarbeit zu reflektieren, Störungen zu identifizieren
          und individuelle Stärken sowie Ressourcen aufzudecken. Dabei entwickeln wir gemeinsam, wie
          das Zusammenspiel im Team gewinnbringend gestärkt werden kann. Ich unterstütze Sie dabei
          eine Teamkultur zu etablieren, in der <span class="useHighlight"
            >Akzeptanz, Offenheit und Vertrauen gelebt</span
          > werden.
        </p>
        <p>
          Sie haben als Team eine gut funktionierende Kultur etabliert und wollen diese präventiv
          pflegen. Hierfür biete ich Ihnen ebenfalls einen Reflexionsraum.
        </p>
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
            <p>Supervision einzeln</p>
            <div class="space-1" />
            <div class="price">180.- pro 60 Min.</div>
          </li>

          <li class="box offer useBackground-light">
            <p>Supervision in Gruppen / Teamentwicklung</p>
            <div class="space-1" />
            <div class="price">250.- pro 60 Min.</div>
          </li>

          <li class="box offer useBackground-light">
            <p>Spesen und Anreise nach Aufwand</p>
          </li>
        </List>
      </div>

      <div class="box">
        <h3>Örtlichkeiten</h3>
        <List>
          <li>In meinen Räumlichkeiten</li>

          <li>In Ihren / von Ihnen organisierten Räumlichkeiten</li>

          <li>Supervision ab 2. Termin online möglich</li>
        </List>
      </div>
    </div>
  </MainSection>
</Page>

<style>
</style>
