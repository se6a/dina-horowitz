<script>
  import Page from "$lib/components/layout/Page.svelte";
  import Title from "$lib/components/layout/Title.svelte";
  import NavigationPage from "$lib/components/layout/NavigationPage.svelte";
  import MainSection from "$lib/components/layout/Section.svelte";
  import List from "$lib/components/fragments/List.svelte";
  import TextBoxCollapsible from "$lib/components/elements/BoxCollapsible.svelte";
  import useHighlight from "$lib/functions/useHighlight";

  const pageNav = [
    {title: "Angebot", href: "#angebot"},
    {title: "Konditionen", href: "#konditionen"}
  ];

  const color = "green";
</script>

<Page {color}>
  <svelte:fragment slot="header">
    <Title>
      <h1 class="titleGroup useText-xxl">
        <span>Für Alle</span>
        <span>Coaching &<br />psychologische Beratung</span>
      </h1>
    </Title>
  </svelte:fragment>

  <NavigationPage {pageNav} />

  <MainSection id="angebot">
    <svelte:fragment slot="title">Angebot</svelte:fragment>

    <div class="useColumns">
      <div class="box">
        <p class="useText-xl">
          Sie geben das Ziel vor, ich begleite Sie auf Ihrem Weg – hypno-systemisch und
          lösungsfokussiert.
        </p>
      </div>

      <div class="box">
        <p>
          {@html useHighlight`Sie sind Expert:in für Ihr Leben, ich bin es für die Prozessgestaltung`}.
          Je mehr Kanäle eines Menschen angesprochen werden, desto nachhaltiger ist die
          Lernerfahrung. Ich nutze dazu Körperwahrnehmungen, Gedankenexperimente, Metaphern und
          Visualisierungen. Immer mit Ihrem Einverständnis und in Ihrem Tempo.
        </p>
      </div>
    </div>

    <div class="useColumns">
      <TextBoxCollapsible>
        <svelte:fragment slot="title">
          Sie haben ein berufliches / privates Anliegen
        </svelte:fragment>
        <List>
          <li>Sie wollen aus einer belastenden oder herausfordernden Situation rauskommen</li>
          <li>Sie finden sich in immer gleichen Konflikten wieder und wollen Muster aufbrechen</li>
          <li>Ihre Lebens- oder Arbeitsqualität ist einschränkt</li>
          <li>Sie wissen nicht, was Sie verändern und was Sie beibehalten wollen</li>
          <li>Sie fragen sich welche nächsten Schritte Sie angehen; und wie</li>
          <li>Sie wünschen sich wieder mehr Handlungsspielraum</li>
          <li>
            Sie suchen eine vertrauensvolle, neutrale Sparringpartnerin und einen Reflexionsraum
          </li>
        </List>
      </TextBoxCollapsible>

      <TextBoxCollapsible>
        <svelte:fragment slot="title">So begleite ich Sie</svelte:fragment>
        <List>
          <li>
            In einem vertrauensvollen, zeitlich überschaubaren Rahmen mit professionellen Methoden
            und vielen Fragen
          </li>
          <li>Ich fordere Sie auf und heraus.</li>
          <li>Gemeinsam entdecken wir Ihre Stärken und Ressourcen neu</li>
          <li>Ich helfe Ihnen sich zu strukturieren</li>
          <li>Ich unterstütze Sie dabei Ihre Sichtweise zu erweitern und Klarheit zu gewinnen</li>
          <li>Sie erweitern Ihre Möglichkeiten und entwickeln daraus Ihre eigenen Lösungen</li>
          <li>Sie begegnen neuen Herausforderungen nachhaltig gestärkt</li>
        </List>
      </TextBoxCollapsible>
    </div>
  </MainSection>

  <MainSection id="konditionen">
    <svelte:fragment slot="title">Konditionen</svelte:fragment>

    <div class="useColumns">
      <div class="box">
        <div class="box">
          <h4>Kosten</h4>
          <List hasBullets={false}>
            <li class="box offer useBackground-light">
              <div class="price">180.- pro 60 Min.</div>
            </li>

            <li class="box offer useBackground-light">
              <p>Mein Beratungsangebot ist nicht Krankenkassenanerkannt.</p>
            </li>
          </List>
        </div>
        <div class="box">
          <h4><strong>{@html useHighlight`Bitte beachten Sie`}</strong></h4>
          <p>
            Wenn ich einen dringlichen psycho<strong>{@html useHighlight`therapeutischen`}</strong> Bedarf
            erkenne, werde ich Sie darauf ansprechen und Sie bei Bedarf dabei unterstützen entsprechende
            Begleitung zu finden.
          </p>
        </div>
      </div>

      <div class="box">
        <h4>Örtlichkeiten</h4>
        <List>
          <li>In meinen Räumlichkeiten</li>
          <li>ab 2. Termin online möglich</li>
          <li>bei einem Spaziergang draussen an der frischen Luft</li>
        </List>
      </div>
    </div>
  </MainSection>
</Page>

<style>
</style>
