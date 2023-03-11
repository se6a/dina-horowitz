<script>
    import Page from "$lib/components/layout/Page.svelte";
    import Highlighter from "$lib/components/fragments/Highlighter.svelte";
    import ContactForm from "$lib/components/elements/ContactForm.svelte";

    export let data = {};
    const pageData = data?.pageData || {};

    const address = (pageData?.address || "").split("\n").map((s) => s.split(" "));
</script>

<Page hasGoTopButton={false} usePageTitle={false}>
    <div class="space-4" />

    <div class="address useColumns">
        <div>
            <ul class="useText-xl">
                <li>
                    <Highlighter color="blue">
                        <a href="mailto:{pageData?.email}" target="_blank">{pageData?.email}</a>
                    </Highlighter>
                </li>

                <li>
                    <Highlighter color="red">
                        <a
                            href="tel:{pageData?.phone?.replaceAll(' ', '')}"
                            rel="noreferrer"
                            target="_blank">M {pageData?.phone}</a
                        >
                    </Highlighter>
                </li>

                <li>
                    <a href={pageData?.googleMaps} target="_blank" rel="noreferrer">
                        {#each address as line, i}
                            {#each line as word, ii}
                                <Highlighter color="green"
                                    >{word + (ii < line.length - 1 ? " " : "")}</Highlighter
                                >
                            {/each}
                            {#if i < address.length - 1}
                                <br />
                            {/if}
                        {/each}

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
