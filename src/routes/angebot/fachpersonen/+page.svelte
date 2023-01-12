<script>
  import Page from "$lib/components/layout/Page.svelte";
  import Title from "$lib/components/layout/Title.svelte";
  import NavigationPage from "$lib/components/layout/NavigationPage.svelte";
  import MainSection from "$lib/components/layout/Section.svelte";
  import Image from "$lib/components/fragments/Image.svelte";
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

<Page {color}>
  <svelte:fragment slot="header">
    <Title>
      <h1 class="titleGroup">
        <span>Für Fachpersonen</span>
        <span>Supervision &<br />Teamentwicklung</span>
      </h1>
    </Title>
  </svelte:fragment>

  <NavigationPage {pageNav} />

  <MainSection id="angebot">
    <svelte:fragment slot="title">Angebot</svelte:fragment>
    <div class="useColumns">
      <blockquote class="useQuote">
        Begleitete Reflexion hilft, um im beruflichen Alltag nicht blind zu werden.
      </blockquote>
      <p>
        Gerne begleite ich Ihren Prozess hypno- systemisch und lösungsfokussiert. Dabei bringe ich
        mein Wissen und meine Erfahrung zur fachspezifischen Arbeit, zur interdisziplinären
        Zusammenarbeit sowie zur Prozessgestaltung ein.
      </p>
    </div>
  </MainSection>

  <MainSection id="">
    <svelte:fragment slot="title">Fallsupervision (einzeln / im Team)</svelte:fragment>

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
  </MainSection>

  <MainSection>
    <svelte:fragment slot="title">Teamentwicklung (bis 6 Personen)</svelte:fragment>

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
          Gerne begleite ich Ihren Prozess hypno- systemisch und lösungsfokussiert. Dabei bringe ich
          mein Wissen und meine Erfahrung zur fachspezifischen Arbeit, zur interdisziplinären
          Zusammenarbeit sowie zur Prozessgestaltung ein. Begleitete Reflexion hilft, um im
          beruflichen Alltag nicht blind zu werden.
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
      <div class="column useBasicText">
        <h3>Kosten</h3>
        <Offers>
          <li class="offer">
            <p>Supervision einzeln</p>
            <div class="price">180.- pro 60 Min.</div>
          </li>

          <li class="offer">
            <p>Supervision in Gruppen / Teamentwicklung</p>
            <div class="price">250.- pro 60 Min.</div>
          </li>

          <li class="offer">
            <p>Spesen und Anreise nach Aufwand</p>
          </li>
        </Offers>
      </div>

      <div class="column useBasicText">
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
