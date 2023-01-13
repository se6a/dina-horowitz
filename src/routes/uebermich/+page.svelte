<script>
  import Page from "$lib/components/layout/Page.svelte";
  import Title from "$lib/components/layout/Title.svelte";
  import NavigationPage from "$lib/components/layout/NavigationPage.svelte";
  import MainSection from "$lib/components/layout/Section.svelte";
  import Image from "$lib/components/fragments/Image.svelte";
  import List from "$lib/components/fragments/List.svelte";

  const pageNav = [
    {title: "Persönlich", href: "#persoenlich"},
    {title: "Fokus", href: "#fokus"},
    {title: "Werdegang", href: "#werdegang"}
  ];

  const color = "yellow";
</script>

<Page {color}>
  <svelte:fragment slot="header">
    <Title>
      <h1 class="titleGroup useText-xxl">
        <span>Dina Horowitz</span>
        <span>Familienberaterin, <br />Supervisorin, Coach</span>
      </h1>
    </Title>
  </svelte:fragment>

  <NavigationPage {pageNav} />

  <MainSection id="persoenlich">
    <svelte:fragment slot="title">Persönlich</svelte:fragment>
    <div class="useColumns">
      <div class="box">
        <Image src="/images/portrait.jpg" />
      </div>
      <div class="box useText-xl">
        <p>
          Fachpsychologin für Kinder- & Jugendpsychologie FSP Entwicklungs- und
          Persönlichkeitspsychologin
        </p>
        <p>*1984</p>
        <p>wohnhaft in Basel</p>
      </div>
    </div>
  </MainSection>

  <MainSection id="fokus">
    <svelte:fragment slot="title">Fokus</svelte:fragment>

    <div class="useColumns">
      <div class="box useText-xl">
        <p>
          wertschätzend, strukturiert, neugierig, herausfordernd, transparent, das Grosse und Ganze
          im Blick, vernetzt und vernetzend
        </p>
      </div>

      <div class="box">
        <p>
          Neugierde führt mich durch mein Leben. Ich bin fasziniert von der menschlichen Vielfalt,
          Kreativität und Energie. Die unbedingte Wertschätzung einer Person ist für zentral. Ich
          pflege einen bewussten Umgang mit der Haltung, dass jede Person gute Gründe hat sich so zu
          verhalten, wie sie es tut. Die Grenzen eines Verhaltens sind dort, wo die eigene
          Integrität oder die von Mitmenschen eingeschränkt oder verletzt wird.
        </p>
        <p>
          In meiner Arbeit als Familienberaterin, Supervisorin und Coach biete ich Ihnen <span
            class="useHighlight">Zeit und Raum für Ihre Veränderungen</span
          >. Ich schaffe eine
          <span class="useHighlight">vertrauensvolle und positive Atmosphäre</span>. Mein Anspruch
          an mich ist es
          <span class="useHighlight">achtsam, sorgfältig, authentisch und direkt</span> zu sein.
        </p>

        <p>
          Ich vertrete die Berufsethik des Fachverbands Schweizer Psychologinnen und Psychologen
          FSP.
        </p>
      </div>
    </div>
  </MainSection>

  <MainSection id="werdegang">
    <svelte:fragment slot="title">Werdegang</svelte:fragment>
    <div class="useColumns">
      <div class="box">
        <h3>Berufliche Erfahrung</h3>
        <List>
          <li>Erziehungsberaterin</li>
          <li>Fachpsychologin im Kindesschutz</li>
          <li>Schulpsychologin</li>
          <li>Gründerin und Geschäftsführerin einer Kaffeerösterei</li>
          <li>Wissenschaftliche Mitarbeiterin</li>
          <li>Vereinssekretärin einer NGO</li>
        </List>
      </div>

      <div class="box">
        <h3>Ausbildung</h3>
        <List>
          <li>
            Weiterbildungen in hypnosystemischer und lösungsfokussierter Beratung, Supervision &
            Organisationsentwicklung
          </li>
          <li>Fachtitel in Kinder- und Jugendpsychologie FSP</li>
          <li>Psychologiestudium, Masterabschluss in Entwicklungs- & Persönlichkeitspsychologie</li>
          <li>Gestalterischer Vorkurs</li>
        </List>
      </div>

      <div class="box">
        <h3>Berufsverbände</h3>

        <List>
          <li>Föderation der Schweizer Psychologen & Psychologinnen FSP</li>
          <li>Schweizerische Vereinigung für Kinder- & Jugendpsychologie SKJP</li>
        </List>
      </div>
    </div>
  </MainSection>
</Page>

<style>
</style>
