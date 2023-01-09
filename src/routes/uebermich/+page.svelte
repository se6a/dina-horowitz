<script>
  import Title from "$lib/components/layout/Title.svelte";
  import MainSection from "$lib/components/layout/Section.svelte";
  import Image from "$lib/components/fragments/Image.svelte";
  import List from "$lib/components/fragments/List.svelte";

  const pageNav = [
    {title: "Persönlich", href: "#persoenlich"},
    {title: "Fokus", href: "#fokus"},
    {title: "Werdegang", href: "#werdegang"}
  ];
</script>

<Title {pageNav} color="yellow">
  <h1 class="titleGroup">
    <span>Dina Horowitz</span>
    <span>Familienberaterin, Supervisorin und Coach</span>
  </h1>
</Title>

<MainSection id="persoenlich" color="yellow">
  <svelte:fragment slot="title">Persönlich</svelte:fragment>
  <div class="useColumns">
    <!--  -->
    <Image />
    <div class="useBasicText">
      <p style="font-size: var(--font-size-l)">
        Entwicklung- und Persönlichkeits&shy;psychologin, Fachpsychologin für Kinder- &
        Jugend-psychologie FSP
      </p>
      <p style="font-size: var(--font-size-l)">*1984</p>
      <p style="font-size: var(--font-size-l)">wohnhaft in Basel</p>
    </div>
  </div>
</MainSection>

<MainSection id="fokus" color="yellow">
  <svelte:fragment slot="title">Fokus</svelte:fragment>

  <div class="useColumns">
    <div class="useBasicText">
      <p style="font-size: var(--font-size-l)">
        Wertschätzend, strukturiert, neugierig, herausfordernd, transparent, das Grosse und Ganze im
        Blick, vernetzt und vernetzend
      </p>
    </div>

    <div class="useBasicText">
      <p>
        Neugierde führt mich durch mein privates wie auch berufliches Leben. Ich bin fasziniert von
        der menschlichen Vielfalt, Kreativität und Energie. Die unbedingte Wertschätzung einer
        Person ist für mich nicht verhandelbar. Die Akzeptanz eines Verhaltens bedeutet für mich ein
        bewusster Umgang mit der Haltung, dass jede Person gute Gründe hat sich so zu verhalten, wie
        sie es tut. Die Grenzen eines Verhaltens sind dort, wo die Integrität von Mitmenschen
        eingeschränkt oder verletzt wird.
      </p>
      <p>
        Ich vertrete die Berufsethik des Fachverbands Schweizer Psychologinnen und Psychologen FSP.
      </p>
      <p>
        In meiner Arbeit als Familienberaterin, freiwillige Case Managerin, Supervisorin und Coach
      </p>
      <ul>
        <li>biete ich Ihnen Zeit und Raum für Ihre Veränderungen</li>
        <li>schaffe ich eine vertrauensvolle und positive Atmosphäre</li>
        <li>bin ich achtsam, sorgfältig, authentisch und direkt</li>
        <li>stehe ich für meine Werte ein und kommuniziere diese auch</li>
      </ul>
    </div>
  </div>
</MainSection>

<MainSection id="werdegang" color="yellow">
  <svelte:fragment slot="title">Werdegang</svelte:fragment>
  <div class="useColumns">
    <div class="useBasicText">
      <h4>Ausbildung</h4>

      <List>
        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</li>
        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</li>
        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</li>
        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</li>
        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</li>
        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</li>
      </List>
    </div>

    <div class="useBasicText">
      <h4>Beruflicher Werdegang</h4>

      <List>
        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</li>
        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</li>
        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</li>
        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</li>
        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</li>
        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</li>
      </List>
    </div>

    <div class="useBasicText">
      <h4>Berufsverbände</h4>

      <List>
        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</li>
        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</li>
        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</li>
        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</li>
        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</li>
        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</li>
      </List>
    </div>
  </div>
</MainSection>

<style>
</style>
