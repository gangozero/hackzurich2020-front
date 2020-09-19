<script>
    export let tab = 1;
</script>

<div class="tabs">
        <div class="tab" on:click={()=>tab=1} class:active={tab===1}>Your <br/> Products</div>
        <div class="tab" on:click={()=>tab=2} class:active={tab===2}>Recipes <br/> Matches</div>
</div>

<style>
    .tabs{
        display: flex;
    }
    .tab{
        text-align: center;
        font-size: 18px;
        font-weight: 100;
        padding: 5px;
        background-color:var(--pallete-main-4);
        flex-grow: 1;
        color: var(--palette-noactive-1);
        cursor: pointer;
    }

    .active{
        background-color:var(--palette-primary-4);
        color: var(--palette-main-3);
    }
</style>