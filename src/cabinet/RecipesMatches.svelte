<script>
    import {onMount} from 'svelte';
    import {Table,Tbody,Loader} from 'svelte-atoms';
    import {router} from 'tinro';

    import {api} from './../lib/api.js';

let matches = null;

onMount(async _ => {
    matches = await api.get('/match');
});
</script>

<Table>
    <Tbody>
        {#if matches}
            {#each matches as match}
            <tr>
                <td class="name" class:full={match.isFull} on:click={()=>router.goto(match.state == 'ACCEPTED' ? '/match/'+match.id+'/chat' : '/match/'+match.id)}>   
                    {match.name}
                </td>
                <td class:full={match.isFull} align="right">   
                    <span class="distance">{match.distance} m</span>
                    {#if match.state == 'ACCEPTED'}
                        <br/><span class="accepted">ACCEPTED</span>
                    {/if}
                    {#if match.state == 'NOT_NOW'}
                        <br/><span class="notnow">NOT NOW</span>
                    {/if}
                </td>
            </tr>
            {/each}
        {:else}
            <Loader>Loading...</Loader>
        {/if}
    </Tbody>
</Table>

<style>
    .name{
        padding: 20px !important;
        cursor:pointer;
    }

    .full{
        background-color: var(--palette-positive-5) !important;
    }

    .distance{
        color: var(--palette-noactive-4);
        white-space: nowrap;
    }

    .accepted{
        font-size: 14px;
        color: var(--palette-positive-3)
    }

    .notnow{
        font-size: 14px;
        color: var(--palette-negative-3)
    }
</style>