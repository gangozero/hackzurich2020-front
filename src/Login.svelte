<script>
    import {Input,Typography,Button,Block} from 'svelte-atoms';

    const form = {
        email:'',
        password: ''
    }

    let loading = false;

    function doLogin(){
        loading = true;
    }
</script>

<Block type="block1">
    <Typography type="title" block>Please login</Typography>
    <p><Input title="E-Mail" bind:value={form.email} size="big" /></p>
    <p><Input title="Password" bind:value={form.password} size="big" type="password" /></p>

    <p class="text-center">
        <Button type="flat" iconRight="chevron-right" isLoading={loading} on:click={doLogin}>
            Sign in
        </Button>
    </p>
</Block>