<script>
  const words1 = ["Beratung", "Begleitung", "Orientierung", "Unterstützung", "Hilfe"];
  const words2 = ["im"];
  const words3 = ["Abklärungs-", "Institutionen-", "Fachstellen-", "Behörden-", "Empfehlungs-"];
  const words4 = ["Dschungel", "Chaos", "Nebel", "Durcheinander", "Dickicht"];
</script>

<article>
  <div class="char">A</div>
</article>

<style>
  article {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
  }

  .char {
    --perspective: perspective(10em);
    background-color: silver;
    padding: 1em;
    font-size: 5rem;
    transform: var(--perspective) rotateX(0deg);
    animation-name: rotate;
    animation-duration: 1000ms;
    animation-timing-function: linear;
    /* animation-iteration-count: infinite; */
  }

  @keyframes rotate {
    0% {
      transform: var(--perspective) rotateX(0deg);
      background-color: hsl(0, 0%, 90%);
    }
    50% {
      background-color: hsl(0, 0%, 20%);
    }
    100% {
      transform: var(--perspective) rotateX(360deg);
      background-color: hsl(0, 0%, 90%);
    }
  }
</style>
