<script>
  import Page from "$lib/components/layout/Page.svelte";
  import Highlighter from "$lib/components/fragments/Highlighter.svelte";
  import ContactForm from "$lib/components/elements/ContactForm.svelte";
</script>

<Page hasGoTopButton={false} hasContactButton={false}>
  <div class="space-4" />

  <div class="address useColumns">
    <div>
      <ul class="useText-xl">
        <li>
          <Highlighter color="blue">
            <a href="mailto:info@dinahorowitz.ch" target="_blank">info@dinahorowitz.ch</a>
          </Highlighter>
        </li>

        <li>
          <Highlighter color="red">
            <a href="tel:+410782254609" target="_blank">M 078 225 46 09</a>
          </Highlighter>
        </li>

        <li>
          <a
            href="https://www.google.com/maps/place/Unterer+Batterieweg+85,+4059+Basel/@47.5393087,7.5843855,17z/data=!3m1!4b1!4m5!3m4!1s0x4791b85b331adbfb:0x19d3397d476801db!8m2!3d47.5393051!4d7.5865795"
            target="_blank"
            rel="noreferrer"
          >
            <Highlighter color="green">Unterer</Highlighter>
            <Highlighter color="green">Batterieweg 85,</Highlighter>
            <Highlighter color="green">4059 Basel</Highlighter>
            <div class="linkIndicator">Google Maps ↗</div>
          </a>
        </li>
      </ul>
      <div class="space-l" />
    </div>

    <div>
      <h2>
        <Highlighter color="yellow">Mitteilung</Highlighter>
      </h2>

      <div class="space-1" />

      <ContactForm />
    </div>
  </div>
</Page>

<style>
  .address :global(.HIGHLIGHTER::before) {
    right: -0.2em;
  }

  .linkIndicator {
    margin-top: 0.5em;
    font-size: var(--font-size-s);
  }

  li + li {
    margin-top: var(--space-2);
  }
</style>
