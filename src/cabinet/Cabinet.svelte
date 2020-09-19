<script>
    
    import Tabs from './Tabs.svelte';
    let tab = 1;
</script>

<div>
    {#if tab === 1}
    Хуй1
    {/if}

    {#if tab === 2}
    Хуй2
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