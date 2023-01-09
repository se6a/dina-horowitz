<script>
  import Link from "../elements/Link.svelte";
  import IconClose from "$lib/components/icons/Close.svelte";
  import IconArrow from "$lib/components/icons/ArrowBig.svelte";
  import {createId} from "$lib/functions/utility";
  import HoverArrow from "../elements/HoverArrow.svelte";

  const items = [
    {title: "Dina Horowitz", href: "/"},
    {
      title: "Angebot",
      subItems: [
        {
          title: "Für Familien",
          text: "Beratung und Case Management",
          href: "/angebot/familien",
          color: "var(--blue)"
        },
        {
          title: "Für Fachpersonen",
          text: "Supervision und Teamentwicklung",
          href: "/angebot/fachpersonen",
          color: "var(--red)"
        },
        {
          title: "Für Alle",
          text: "Coaching und Psychologische Beratung",
          href: "/angebot/alle",
          color: "var(--green)"
        }
      ]
    },
    {title: "Über mich", href: "/uebermich"}
  ];

  let isOpen = false;
</script>

<nav class="NAVIGATION">
  <ul class="items">
    {#each items as item}
      <li class="item">
        {#if "subItems" in item}
          {@const id = createId()}
          <label for={id}>
            <HoverArrow>
              {item.title}
            </HoverArrow>
          </label>
          <input class="toggle toggleSubNav" type="checkbox" bind:checked={isOpen} name="" {id} />

          <div class="subNav">
            <ul class="subItems">
              {#each item.subItems as { title, text, color, href }}
                <a
                  class="subItem"
                  style:--background={color}
                  {href}
                  on:click={() => (isOpen = false)}
                >
                  <div class="arrow">
                    <IconArrow />
                  </div>
                  <div class="text">
                    <span>{title}</span>
                    <span>{text}</span>
                  </div>
                </a>
              {/each}
            </ul>
            <label class="buttonClose" for={id}>
              <IconClose />
            </label>
          </div>
        {:else}
          <Link data={item} />
        {/if}
      </li>
    {/each}
  </ul>

  <div class="angebote" />
</nav>

<style>
  @import "$lib/css/breakpoints.css";

  .NAVIGATION {
    position: relative;
    height: 100%;
    z-index: 100;
  }

  /* Items
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

  .items {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    font-size: var(--layoutNav-font-size);
  }

  /* SubNav
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

  .subNav {
    z-index: var(--zPos-front);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: hsla(0, 0%, 100%, 0.9);
    opacity: 0;
    visibility: hidden;
    transition: opacity var(--duration-middle), visibility 2ms 1000ms;
  }

  .toggleSubNav:checked + .subNav {
    opacity: 1;
    visibility: visible;
    transition: opacity var(--duration-middle), visibility 0ms 0ms;
  }

  .subItems {
    display: flex;
    transform: translateY(-100%);
    transition: transform var(--duration-middle);
  }

  @media (--vw-m) {
    .subItems {
      flex-direction: column;
      height: 100%;
    }
  }

  .toggleSubNav:checked + .subNav > .subItems {
    transform: translateY(0);
  }

  .toggleSubNav {
    visibility: hidden;
    width: 0;
    height: 0;
    position: absolute;
  }

  .buttonClose {
    position: absolute;
    right: var(--space-1);
    top: var(--space-1);
    --icon-size: 3rem;
    transform: rotate(0deg);
    transition: var(--duration-middle);
  }

  .buttonClose:hover {
    transform: rotate(90deg);
  }

  /* Subitem
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

  .subItem {
    flex: 1;
    height: auto;
    display: flex;
    padding: var(--space-l);
    background-color: var(--background);
    font-size: var(--layoutNavSub-font-size);
    position: relative;
    width: 100%;
  }

  @media (--vw-m) {
    .subItem {
      align-items: center;
    }
  }

  .text,
  .arrow {
    transition: transform var(--duration-middle), opacity var(--duration-middle);
  }

  .text {
    transform: translateX(0);
    width: 100%;
  }

  .text > * {
    display: block;
    max-width: 20ch;
  }

  .arrow {
    position: absolute;
    transform: translateX(-130%);
    --icon-size: 8rem;
    --icon-fill: var(--black);
    opacity: 0;
    pointer-events: none;
    top: 0;
    bottom: 0;
    margin: auto 0;
    height: min-content;
  }

  .text > :first-child {
    color: white;
  }

  .subItem:hover .text {
    transform: translateX(3rem);
  }

  .subItem:hover .arrow {
    transform: translateX(calc(-100% + 3rem));
    pointer-events: all;
    opacity: 1;
  }

  /*
###############################################################################################*/
</style>
