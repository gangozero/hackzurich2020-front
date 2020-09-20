<script>
    import {Block,Button,Loader} from 'svelte-atoms';
    import {router} from 'tinro';
    import {onMount} from 'svelte';
    import {api} from './../lib/api.js';

    let match = null;

    let params = router.params();


    onMount(async _ => {
        match = await api.get(`/match/${params.id}`);
    });

    async function accept(){
        router.goto(`/match/${params.id}/chat`);
    }

</script>

<Block type="block1">
    <h2>Recipe match</h2>
    {#if match}
        <Block type="block2">
            <div class="hero" style="background-image: url({match.imageURL})">
                <div class="name">{match.name}</div>
                <div class="user">with {match.partnerName}</div>
            </div>
        </Block>

        <div class="buttons">
            <div><Button iconLeft="chevron-left" status="negative" on:click={()=>router.goto('/cabinet')}>Not now</Button></div>
            <div><Button iconRight="chevron-right" on:click={accept}>Meet & Cook</Button></div>
        </div>
    {:else}
        <Loader>Loading...</Loader>
    {/if}
</Block>

<style>
    .hero{
        width: 80vw;
        height: 80vw;
        margin-left: auto;
        margin-right: auto;
        background-size: contain;
    }

    .name{
        font-weight: 600;
    }

    .name,.user{
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
        padding: 5px;
        text-align: right;
    }

    .buttons{
        display: flex;
        margin-top: 70px;
    }

    .buttons div{
        flex-grow: 1;
        text-align: center;
    }
</style>