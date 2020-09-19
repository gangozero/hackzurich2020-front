<script>
	import {Route,router} from 'tinro';
	import {Variables,Notifications,Container,Block} from "svelte-atoms";
	import {user} from './lib/userStore.js'

	import Login from './Login.svelte';
	import Cabinet from './cabinet/Cabinet.svelte';
	import Match from './match/Match.svelte';

	router.useHashNavigation();
	//user.set('159c7e6e-9131-4606-969e-046e44e879df');
	$: if(!$user) router.goto('/login');
</script>

<Variables />

<div style="max-width: 500px; margin-left: auto; margin-right: auto">
<Container>
		<Route path="/login"><Login/></Route>
		<Route path="/cabinet"><Cabinet/></Route>
		<Route path="/match/:id"><Match/></Route>
</Container>
</div>

<Notifications />