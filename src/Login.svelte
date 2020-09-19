<script>
    import {Input,Typography,Button,Block} from 'svelte-atoms';

    let email = '';
    let password = '';

    let errEmail = null;
    let errPassword = null;

    let loading = false;

    function doLogin(){
        loading = true;
    }
</script>

<Block type="block1">
    <Typography type="title" block>Please login</Typography>
    <p><Input title="E-Mail" bind:value={email} size="big" error={errEmail}/></p>
    <p><Input title="Password" bind:value={password} size="big" type="password"  error={errPassword}/></p>

    <p class="text-center">
        <Button type="flat" iconRight="chevron-right" isLoading={loading} on:click={doLogin}>
            Sign in
        </Button>
    </p>
</Block>