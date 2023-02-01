<script>
    import ScText from "./ScText.svelte";
    import Image from "../elements/Image.svelte";
    import BoxCollapsible from "../elements/BoxCollapsible.svelte";

    export let contents = [];

    // Create structure for html
    let columns = [[], []];
    const rows = [];
    let lastCol = "left";
    contents.forEach((c, i) => {
        const col = c.column;

        if (col === "left") {
            if (lastCol === "right") {
                rows.push(columns);
                columns = [[], []];
            }
            columns[0].push(c);
        } else {
            columns[1].push(c);
        }

        lastCol = col;
    });
    rows.push(columns);
</script>

{#each rows as columns}
    <div class="useColumns">
        {#each columns as column}
            <div class="box">
                {#each column as content}
                    {#if content._type === "scText"}
                        <ScText {content} />
                    {:else if content._type === "scImage"}
                        <Image image={content?.image} />
                    {:else if content._type === "scCollapsibleText"}
                        <BoxCollapsible {content} />
                    {:else}
                        {console.warn(`Content ${content._type} does not exist.`) || ""}
                    {/if}
                {/each}
            </div>
        {/each}
    </div>
{/each}
