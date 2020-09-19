<script>
    import {onMount} from 'svelte';
    import {Table,Tbody,IconButton,Loader,Popup,Button} from 'svelte-atoms';

    import {api} from './../lib/api.js';


    let products;
    onMount(async _=>{
        products = await api.get('/product');
    });

    let item = null;

    async function deleteItem(id){
        products = products.filter(p=>p.id!==id);
        api.delete(`/product/${id}`);
    }
</script>

<Table>
    <Tbody>
        {#if products}
        {#each products as product(product.id)}
        <tr>
            <td class="name">   
                {product.name}
            </td>
            <td align="right">
                <IconButton icon="trash" on:click={()=>item=product.id}/>
            </td>
        </tr>
        {/each}
        {:else}
            <Loader>Loading...</Loader>
        {/if}
    </Tbody>
</Table>

<Popup isOpen={!!item} on:close={()=>item=null} header="Delete product">
    Are you sure?
    <div slot="footer">
        <Button on:click={()=>item=null} type="empty" >Cancel</Button>
        <Button on:click={()=>{deleteItem(item); item=null}}>Yes</Button>
    </div>
</Popup>

<style>
    .name{
        padding: 20px !important;
    }
</style>