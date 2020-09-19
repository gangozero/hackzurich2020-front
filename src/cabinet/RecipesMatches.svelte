<script>
    import {Table,Tbody,IconButton} from 'svelte-atoms';
    import {router} from 'tinro';

let matches = [
  {
    "id": 1,
    "name": "Soussage with cabbage",
    "state": "NEW",
    "isFull": true,
    "isColleague": true,
    "distance": 0
  },
  {
    "id": 2,
    "name": "Milk with coffee",
    "state": "NEW",
    "isFull": false,
    "isColleague": true,
    "distance": 0
  }
];
</script>

<Table>
    <Tbody>
        {#each matches as match}
        <tr>
            <td class="name" class:full={match.isFull} on:click={()=>router.goto('/match/'+match.id)}>   
                {match.name}
            </td>
        </tr>
        {/each}
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
</style>