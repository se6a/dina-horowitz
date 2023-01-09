<script>
  import Title from "$lib/components/layout/Title.svelte";
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

  const color = "green";
</script>

<div class="style" />

<Title {pageNav} {color}>
  <h1 class="titleGroup">
    <span>Für Alle</span>
    <span>Coaching & psychologische Beratung</span>
  </h1>
</Title>

<MainSection id="angebot" {color}>
  <svelte:fragment slot="title">Angebot</svelte:fragment>

  <div class="useColumns">
    <TextBoxCollapsible>
      <svelte:fragment slot="title">
        Sie haben ein berufliches und / oder privates Anliegen?
      </svelte:fragment>
      <List>
        <li>Sie wollen aus einer belastenden oder herausfordernden Situation rauskommen.</li>
        <li>Sie finden sich in immer gleichen Konflikten wieder und wollen Muster aufbrechen.</li>
        <li>Ihre Lebens- oder Arbeitsqualität ist einschränkt.</li>
        <li>Sie wissen nicht, was Sie verändern und was Sie beibehalten wollen.</li>
        <li>Sie fragen sich welche nächsten Schritte Sie angehen; und wie.</li>
        <li>Sie wünschen sich wieder mehr Handlungsspielraum.</li>
        <li>
          Sie suchen eine vertrauensvolle, neutrale Sparringpartnerin und einen Reflexionsraum.
        </li>
      </List>
    </TextBoxCollapsible>

    <TextBoxCollapsible>
      <svelte:fragment slot="title">So begleite ich Sie:</svelte:fragment>
      <List>
        <li>
          In einem vertrauensvollen, zeitlich überschaubaren Rahmen mit professionellen Methoden und
          vielen Fragen.
        </li>
        <li>Ich fordere Sie auf und heraus.</li>
        <li>Gemeinsam entdecken wir Ihre Stärken und Ressourcen neu.</li>
        <li>Ich helfe Ihnen sich zu strukturieren.</li>
        <li>Ich unterstütze Sie dabei Ihre Sichtweise zu erweitern und Klarheit zu gewinnen.</li>
        <li>Sie erweitern Ihre Möglichkeiten und entwickeln daraus Ihre eigenen Lösungen.</li>
        <li>Sie begegnen neuen Herausforderungen nachhaltig gestärkt.</li>
      </List>
    </TextBoxCollapsible>
  </div>
</MainSection>

<MainSection id="konditionen" {color}>
  <svelte:fragment slot="title">Konditionen</svelte:fragment>

  <div class="useColumns">
    <div class="column">
      <div class="useBasicText">
        <h4>Kosten</h4>
        <Offers {color} />
      </div>
    </div>

    <div class="column">
      <div class="useBasicText">
        <h4>Örtlichkeiten</h4>
        <List>
          <li>In meinen Räumlichkeiten</li>
          <li>bei Ihnen zuhause</li>
          <li>ab 2. Termin online möglich</li>
          <li>bei einem Spaziergang draussen an der frischen Luft</li>
        </List>
        <h4>Tarife</h4>
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
    --highlighter-color: var(--green);
  }
</style>
