<script>
  import Title from "$lib/components/layout/Title.svelte";
</script>

<Title />

<section class="Grid layout">
  <div class="inner">
    <div class="red">
      <h2>
        <span>Für Fachpersonen </span>
        <span>Supervision und Teamentwicklung</span>
      </h2>
      <div class="space-1" />
      <p>
        Sie wollen als Fachpersonen Ihre Arbeit reflektieren oder wünschen sich eine Veränderung im
        Team? Ich unterstütze Sie dabei Ihre Arbeit zu reflektieren oder begleite Teamprozesse.
      </p>
    </div>
    <div class="yellow">
      <h2>
        <span>Für Fachpersonen </span>
        <span>Supervision und Teamentwicklung</span>
      </h2>
      <div class="space-1" />
      <p>
        Sie wollen als Fachpersonen Ihre Arbeit reflektieren oder wünschen sich eine Veränderung im
        Team? Ich unterstütze Sie dabei Ihre Arbeit zu reflektieren oder begleite Teamprozesse.
      </p>
    </div>
  </div>
</section>

<style>
  .inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    height: auto;
  }

  h2 {
    font-size: var(--font-size-l);
  }

  h2 > :first-child {
    color: white;
  }

  .red {
    background-color: var(--red);
    padding: var(--space-2);
    padding-left: 0;
  }

  .yellow {
    background-color: var(--yellow);
    padding: var(--space-2);
    padding-right: 0;
  }

  .yellow,
  .red {
    position: relative;
  }

  .yellow::after {
    content: "";
    display: block;
    width: 50vw;
    top: 0;
    bottom: 0;
    left: 0;
    position: absolute;
    background-color: var(--yellow);
    z-index: -1;
  }

  .red::after {
    content: "";
    display: block;
    width: 50vw;
    top: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    background-color: var(--red);
    z-index: -1;
  }
</style>
