<script>
  import {browser} from "$app/environment";
  import {onMount} from "svelte";

  const words = [
    ["Beratung", "Begleitung", "Orientierung", "Unterstützung", "Hilfe"],
    ["im"],
    ["Abklärungs-", "Institutionen-", "Fachstellen-", "Behörden-", "Empfehlungs-"],
    ["Dschungel", "Chaos", "Nebel", "Durcheinander", "Dickicht"]
  ];
  const abc = [..." abcdefghijklmnopqrstuvwxyzäöü-"];

  function randomArrayItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function randomWords() {
    return ["", "", "", ""].map((_, i) => {
      let word = randomArrayItem(words[i]).toLowerCase();
      let rest = Math.max(cols - word.length, 0);
      let space = " ".repeat(Math.floor(Math.random() * rest));
      return space + word;
    });
  }

  function getSeq(from, to) {
    const start = Math.max(abc.indexOf(from), 0);
    const end = abc.indexOf(to) + 1;

    if (start < end) {
      return abc.slice(start, end);
    } else {
      return [...abc.slice(start), ...abc.slice(0, end)];
    }
  }

  function createDisplay(state = [], words = []) {
    const newDisplay = [];
    for (let r = 0; r < rows; r++) {
      const row = [];
      for (let c = 0; c < cols; c++) {
        const from = state?.[r]?.[c]?.at(-1) || " ";
        const to = words?.[r]?.[c] || " ";
        row.push(getSeq(from, to));
      }
      newDisplay.push(row);
    }

    return newDisplay;
  }

  let flipDur = 100;
  const rows = 4;
  const cols = 13;

  let display = createDisplay([], randomWords());

  onMount(() => {
    if (!browser) return;
    const t = setInterval(() => {
      requestAnimationFrame(() => {
        display = createDisplay(display, randomWords());
      });
    }, 8000);

    return () => clearInterval(t);
  });

  let displayWidth = 0;

  function observeSize(N) {
    displayWidth = N.clientWidth;
    window.addEventListener("resize", () => (displayWidth = N.clientWidth));
  }
</script>

<article
  class="WORD-DISPLAY"
  style:--display-width="{displayWidth}px"
  style:--flipDur="{flipDur}ms"
  style:--cols={cols}
  style:--rows={rows}
>
  <div class="display" use:observeSize>
    {#key display}
      {#each Array(rows).fill("") as _, row}
        {#each Array(cols).fill("") as _, col}
          {@const seq = display?.[row]?.[col] || " "}
          <div class="flipBox">
            {#each seq as ch, i}
              {@const isCurrent = i === seq.length - 1}
              {@const thisDur = 100 + 1.5 * col + 1.5 * row + 1.5 * i}
              {@const thisDel = i * thisDur + col * 100 + row * 300}
              <div
                class="char"
                class:isCurrent
                style:--flipFrom={i === 0 ? "0deg" : "-90deg"}
                style:--flipTo={isCurrent ? "0deg" : "90deg"}
                style:--flipDur="{thisDur}ms"
                style:--flipDelay="{thisDel}ms"
              >
                {ch}
              </div>
            {/each}
          </div>
        {/each}
      {/each}
    {/key}
  </div>

  <div class="pushHeight" />
</article>

<style>
  .WORD-DISPLAY {
    --box-gap: 2px;
    --box-width: calc(var(--display-width) / var(--cols) - var(--box-gap));
    --box-height: calc(var(--box-width) * 1.5);
    --letter-size: calc(var(--box-height) * 0.8);
    --perspective: perspective(100em);
    width: 100%;
    height: 100%;
    position: relative;
  }

  .pushHeight {
    margin-bottom: 40%;
  }

  /* .display {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
  } */

  .display {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: grid;
    grid-template-columns: repeat(var(--cols), var(--box-width));
    grid-template-rows: repeat(var(--rows), var(--box-height));
    gap: var(--box-gap);
  }

  .flipBox {
    position: relative;
    display: flex;
    height: var(--box-height);
    width: var(--box-width);
    background-color: hsla(189, 40%, 55%, 0.4);
    border: 1px solid var(--blue);
    box-shadow: inset 2px 2px 3px hsla(189, 93%, 18%, 0.7);
    padding: 1px;
  }

  .char {
    top: -1px;
    right: -1px;
    bottom: -1px;
    left: -1px;
    margin: em;
    position: absolute;
    font-size: var(--letter-size);
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    animation: flip;
    transform: rotateX(0deg);
    animation-duration: var(--flipDur);
    animation-delay: var(--flipDelay);
    animation-fill-mode: both;
    animation-timing-function: linear;
    background-color: var(--blue);
  }

  @keyframes flip {
    0% {
      transform: rotateX(var(--flipFrom));
    }

    100% {
      transform: rotateX(var(--flipTo));
    }
  }
</style>
