<script>
    import Tabs from './Tabs.svelte';
    import YourProducts from './YourProducts.svelte';
    import RecipesMatches from './RecipesMatches.svelte';
    let tab = 1;
</script>

<div>
    {#if tab === 1}
    <YourProducts/>
    {/if}

    {#if tab === 2}
    <RecipesMatches/>
    {/if}
</div>

<div class="tabs">
 <Tabs bind:tab/>
</div>

<style>
    .tabs{
        position: fixed;
        bottom: 0px;
        height: 50px;
        width: 100%
    }
</style>