<script>
  export let color = "";
</script>

<ul class="OFFERS" style:--color="var(--{color}-light)">
  <li class="offer">
    <div>Angebot Lorem ipsum dolor sit amet, consetetur sadipscin</div>
    <div class="space-1" />
    <div>CHF Preis</div>
  </li>

  <li class="offer">
    <div>Angebot Lorem ipsum dolor sit amet, consetetur sadipscin</div>
    <div class="space-1" />
    <div>CHF Preis</div>
  </li>

  <li class="offer">
    <div>Angebot Lorem ipsum dolor sit amet, consetetur sadipscin</div>
    <div class="space-1" />
    <div>CHF Preis</div>
  </li>

  <li class="offer">
    <div>Angebot Lorem ipsum dolor sit amet, consetetur sadipscin</div>
    <div class="space-1" />
    <div>CHF Preis</div>
  </li>
</ul>

<style>
  .OFFERS {
    display: flex;
    flex-direction: column;
  }

  .offer + .offer {
    margin-top: var(--space-1);
  }

  .offer {
    background-color: var(--color);
    padding: var(--space-1);
  }
</style>
