<script>
    import {Input,Button,Block,sendNotification} from 'svelte-atoms';
    import {router} from 'tinro';
    import {api} from './lib/api.js';
    import {user} from './lib/userStore.js'

    let email = '';
    let password = '';

    let errEmail = null;
    let errPassword = null;

    let loading = false;

    async function doLogin(){
        loading = true;
        let result  = await api.post('/login',{email});
        loading = false;
        if(result.token) {
            user.set(result.token);
            router.goto('/cabinet');
        }else{
            errEmail = "Wrong E-Mail!";
            sendNotification(errEmail,{status:'negative'});
        }
    }
</script>

<Block type="block1">
    <h2>Please login</h2>
    <p><Input title="E-Mail" bind:value={email} size="big" error={errEmail}/></p>
    <p><Input title="Password" bind:value={password} size="big" type="password"  error={errPassword}/></p>

    <p class="text-center">
        <Button type="flat" iconRight="chevron-right" isLoading={loading} on:click={doLogin}>
            Sign in
        </Button>
    </p>
</Block>