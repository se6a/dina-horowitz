<script>
    import Node from "./_Node.svelte";
    import List from "./styles/List.svelte";

    export let blocks = [];

    const structure = [];

    for (let i = 0; i < blocks.length; i++) {
        const b = blocks[i];
        let level = b?.level;

        if (level) {
            const group = [];
            while (i < blocks.length) {
                const _b = blocks[i];
                if (_b?.level !== level) {
                    structure.push(group, _b);
                    level = 0;
                    break;
                } else if (i === blocks.length - 1) {
                    structure.push([...group, _b]);
                    break;
                } else {
                    group.push(_b);
                    i++;
                }
            }
        } else {
            structure.push(b);
        }
    }
</script>

{#each structure as part}
    {#if Array.isArray(part)}
        <List>
            {#each part as node}
                <li>
                    <Node {node} markDefs={node.markDefs} />
                </li>
            {/each}
        </List>
    {:else}
        <Node node={part} markDefs={part.markDefs} />
    {/if}
{/each}
