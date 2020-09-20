<script>
    import {onMount} from 'svelte';
    import {Block,Button,Input,IconButton,Loader} from 'svelte-atoms';
    import {router} from 'tinro';
    import {api} from './../lib/api.js';

    let chats = null;

    let params = router.params();

   
    onMount(async _ => {
        chats = await api.get(`/match/${params.id}/chat`);
    });
</script>

<Block type="block1" style="margin-bottom: 40px;">
    <IconButton icon="close" style="float:right" on:click={()=>router.goto('/cabinet')}/>
    <h2>Recipe chat</h2>
    {#if chats}
    {#each chats as chat}
        <p>
        
            {#if chat.type == 'RECIPE'}
                <Block type="selected">
                    <h3>{chat.data.recipe.name}</h3>
                    <img src={chat.data.recipe.imageURL} alt="photo" class="photo" />
                    {chat.data.recipe.steps}
                </Block>
            {/if}
        
            {#if chat.type == 'MESSAGE'}
                <Block type="block2">
                    {chat.data.message}
                </Block>
            {/if}

            {#if chat.type == 'INGREDIENT'}
                {#each chat.data.missedIngredients as ingridient}
                    <Block type="dark">
                        <h3>Missed ingridient {ingridient.name}</h3>

                        Available at {ingridient.shop}

                        <p class="text-center"><Button>Order delivery</Button></p>
                    </Block>
                {/each}
            {/if}
            
        </p>
    {/each}
    {:else}
        <Loader>Loading...</Loader>
    {/if}
</Block>

<div class="type">
    <Input placeholder="Your message" size="small" style="margin:0 5px;"/> 
</div>

<style>
    .type{
        position: fixed;
        bottom: 0px;
        height: 40px;
        width: 100%;
        background-color:var(--pallete-main-4);
        padding: 10px 0;
        text-align: center;
    }

    .photo{
        width: 30vw;
        float: left;
        margin: 20px 20px 20px 0;
    }
</style>