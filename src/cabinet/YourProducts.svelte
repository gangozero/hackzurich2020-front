<script>
    import {Table,Tbody,IconButton} from 'svelte-atoms';

    let products = [
        {id: 1, name: 'Sausage'},
        {id: 2, name: 'Tomato'},
        {id: 3, name: 'Milk'}
    ]
</script>

<Table>
    <Tbody>
        {#each products as product}
        <tr>
            <td class="name">   
                {product.name}
            </td>
            <td align="right">
                <IconButton icon="trash" />
            </td>
        </tr>
        {/each}
    </Tbody>
</Table>

<style>
    .name{
        padding: 20px !important;
    }
</style>