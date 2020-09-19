<script>
    import {Block,Button} from 'svelte-atoms';
    import {router} from 'tinro';
    import {api} from './../lib/api.js';

    let match = null;

    let params = router.params();

    match = {
        "id": params.id,
        "name": "Sausage with Cabbage",
        "imageURL": "https://recipeimages.migros.ch/medium/aad32af8493c70a9671d921f02715e82db36c92e/spanferkel-presskopf-mit-vinaigrette-0-1-1.jpg",
        "steps": "1. Buy sausage; 2. Eat sausage",
        "ingredients": [
            {
            "productID": "string",
            "name": "string",
            "isMissed": true,
            "userID": "Huesos"
            }
        ]
    }

</script>

<Block type="block1">
    <h2>Recipe match</h2>
    <Block type="block2">
        <div class="hero" style="background-image: url({match.imageURL})">
            <div class="name">{match.name}</div>
            <div class="user">with {match.ingredients[0].userID}</div>
        </div>
    </Block>

    <div class="buttons">
        <div><Button iconLeft="chevron-left" status="negative" on:click={()=>router.goto('/cabinet')}>Not now</Button></div>
        <div><Button iconRight="chevron-right" >Meet & Cook</Button></div>
    </div>

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